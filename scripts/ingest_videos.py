#!/usr/bin/env python3
"""
VICE CODEX Cloud Auto-Ingest Engine (Zero-LLM, Pure Algorithmic).
Runs entirely inside GitHub Actions on a cloud runner.
Loads weighted scoring & quality-gate rules from config/ingest-rules.json.
Only updates data/videos.json when new videos pass the weighted quality threshold.
"""

import json
import math
import os
import re
import subprocess
import sys
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_JS = ROOT / "app.js"
DATA_FILE = ROOT / "data" / "videos.json"
RULES_FILE = ROOT / "config" / "ingest-rules.json"

PER_QUERY = int(os.environ.get("PER_QUERY", "35"))

RELEVANCE_RE = re.compile(
    r"\bgta\s*(6|vi)\b|grand\s+theft\s+auto\s*(6|vi)\b|vice\s*city|leonida", re.I
)

CAT_RULES = [
    ("cheats", re.compile(r"cheat|trophy|platinum|100%|collectible|achievement", re.I)),
    ("money", re.compile(r"money|glitch|heist|vault|cash|million|\$\d|robbery|fence|payout|bank", re.I)),
    ("weapons", re.compile(r"weapon|gun|rifle|pistol|shotgun|safe code|keypad|bunker|smg|sniper|revolver|knife", re.I)),
    ("vehicles", re.compile(r"\bcar\b|\bcars\b|supercar|vehicle|thrax|emerus|mod shop|customiz|drift|racing|bike|boat", re.I)),
    ("easter", re.compile(r"easter egg|secret|mystery|ufo|alien|ghost|bigfoot|skunk ape|detail|dexter|retro", re.I)),
]

CAT_NOTE_ZH = {
    "money": "云端算法精选：高权重赚钱与劫案实战视频",
    "weapons": "云端算法精选：高权重传奇武器与门禁密码视频",
    "vehicles": "云端算法精选：高权重极速超跑与隐藏载具视频",
    "easter": "云端算法精选：高权重莱奥尼达隐藏彩蛋与细节",
    "cheats": "云端算法精选：高权重作弊码与 100% 奖杯攻略",
    "starter": "云端算法精选：高权重开荒技巧、设置与补丁解析",
}

CAT_NOTE_EN = {
    "money": "Algorithm-ranked high-score money route & heist guide",
    "weapons": "Algorithm-ranked high-score legendary weapon & safe code guide",
    "vehicles": "Algorithm-ranked high-score supercar & hidden spawn guide",
    "easter": "Algorithm-ranked high-score Leonida Easter egg showcase",
    "cheats": "Algorithm-ranked high-score cheat codes & 100% trophy guide",
    "starter": "Algorithm-ranked high-score starter tips & patch breakdown",
}


def clamp01(val: float) -> float:
    return max(0.0, min(1.0, val))


def load_rules() -> dict:
    return json.loads(RULES_FILE.read_text("utf-8"))


def load_baseline_ids() -> set[str]:
    if not APP_JS.exists():
        return set()
    text = APP_JS.read_text("utf-8")
    return set(re.findall(r"\{\s*id:\s*'([A-Za-z0-9_-]{11})',\s*title:", text))


def load_existing_cloud() -> list[dict]:
    if not DATA_FILE.exists():
        return []
    try:
        payload = json.loads(DATA_FILE.read_text("utf-8"))
        return payload.get("videos", []) if isinstance(payload, dict) else []
    except Exception:
        return []


def format_duration(seconds: int) -> str:
    if not seconds:
        return "05:00"
    h, rem = divmod(seconds, 3600)
    m, s = divmod(rem, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"


def infer_category(title: str, default_cat: str) -> str:
    for cat, pattern in CAT_RULES:
        if pattern.search(title):
            return cat
    return default_cat


def estimate_hours_ago(raw: dict) -> float:
    ts = raw.get("timestamp")
    if ts:
        age = (datetime.now(timezone.utc).timestamp() - float(ts)) / 3600.0
        return max(1.0, age)
    upload_date = str(raw.get("upload_date") or "")
    if re.fullmatch(r"\d{8}", upload_date):
        try:
            dt = datetime.strptime(upload_date, "%Y%m%d").replace(tzinfo=timezone.utc)
            age = (datetime.now(timezone.utc) - dt).total_seconds() / 3600.0
            return max(2.0, age)
        except Exception:
            pass
    return 18.0


def score_candidate(raw: dict, rules: dict, trusted_set: set[str]) -> tuple[float, dict]:
    """Compute a 0-100 composite quality score using configured algorithm weights."""
    weights = rules["weights"]
    bench = rules["benchmarks"]
    title = str(raw.get("title") or "")
    title_low = title.lower()
    channel = str(raw.get("channel") or raw.get("uploader") or "").strip()
    views = int(raw.get("view_count") or 0)
    likes = int(raw.get("like_count") or 0)
    dur = int(raw.get("duration") or 0)
    hours_ago = estimate_hours_ago(raw)

    # 1. Views score (log10 normalized)
    log_v = math.log10(max(views, 1))
    v_floor = bench["views_log_floor"]
    v_ceil = bench["views_log_ceiling"]
    views_score = clamp01((log_v - v_floor) / max(0.1, v_ceil - v_floor))

    # 2. Velocity score (views per hour with freshness curve)
    vph = views / max(1.0, hours_ago)
    vel_score = clamp01(math.log10(max(vph, 1.0)) / math.log10(max(10.0, bench["velocity_views_per_hour_full"])))

    # 3. Engagement & trusted creator score
    is_trusted = channel.lower() in trusted_set
    like_ratio = (likes / views) if (likes > 0 and views > 0) else 0.0
    eng_from_likes = clamp01(like_ratio / 0.04) if likes > 0 else 0.45
    creator_bonus = 0.35 if is_trusted else 0.0
    eng_score = clamp01(eng_from_likes * 0.7 + creator_bonus)

    # 4. Keyword relevance score
    hits = sum(1 for kw in rules["high_signal_keywords"] if kw in title_low)
    rel_score = clamp01(0.4 + min(hits, 3) * 0.2)

    # 5. Duration fit score
    opt_min = bench["optimal_duration_min_sec"]
    opt_max = bench["optimal_duration_max_sec"]
    if dur <= 0:
        dur_score = 0.6
    elif opt_min <= dur <= opt_max:
        dur_score = 1.0
    elif dur < opt_min:
        dur_score = clamp01(dur / opt_min)
    else:
        dur_score = clamp01(1.0 - (dur - opt_max) / 5400.0)

    total = 100.0 * (
        weights["views"] * views_score
        + weights["velocity"] * vel_score
        + weights["engagement_and_creator"] * eng_score
        + weights["keyword_relevance"] * rel_score
        + weights["duration_fit"] * dur_score
    )
    breakdown = {
        "views": round(views_score * 100, 1),
        "velocity": round(vel_score * 100, 1),
        "engagement": round(eng_score * 100, 1),
        "relevance": round(rel_score * 100, 1),
        "duration": round(dur_score * 100, 1),
    }
    return round(total, 1), breakdown


def fetch_query(query: str, limit: int) -> list[dict]:
    cmd = [
        sys.executable,
        "-m",
        "yt_dlp",
        "--flat-playlist",
        "--dump-json",
        "--no-warnings",
        "--ignore-errors",
        f"ytsearch{limit}:{query}",
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
    items = []
    for line in proc.stdout.splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            items.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return items


def main() -> int:
    rules = load_rules()
    adm = rules["admission"]
    trusted_set = {c.lower() for c in rules["trusted_creators"]}
    blocked = [b.lower() for b in rules["blocked_keywords"]]

    baseline_ids = load_baseline_ids()
    existing = load_existing_cloud()
    seen_ids = set(baseline_ids) | {v["id"] for v in existing if isinstance(v, dict) and v.get("id")}

    candidates = []
    scanned_count = 0

    for qobj in rules["queries"]:
        default_cat, query = qobj["cat"], qobj["q"]
        try:
            results = fetch_query(query, PER_QUERY)
        except Exception as exc:
            print(f"[warn] query failed ({query}): {exc}", file=sys.stderr)
            continue

        for raw in results:
            scanned_count += 1
            vid = str(raw.get("id") or "").strip()
            title = str(raw.get("title") or "").strip()
            if not re.fullmatch(r"[A-Za-z0-9_-]{11}", vid) or vid in seen_ids:
                continue
            if not title or not RELEVANCE_RE.search(title):
                continue
            title_low = title.lower()
            if any(b in title_low for b in blocked):
                continue

            views = int(raw.get("view_count") or 0)
            dur = int(raw.get("duration") or 0)
            channel = str(raw.get("channel") or raw.get("uploader") or "YouTube Creator").strip()
            is_trusted = channel.lower() in trusted_set
            min_v = adm["trusted_creator_min_views"] if is_trusted else adm["min_views"]
            if views < min_v:
                continue
            if dur and (dur < adm["min_duration_sec"] or dur > adm["max_duration_sec"]):
                continue

            q_score, breakdown = score_candidate(raw, rules, trusted_set)
            if q_score < adm["min_quality_score"]:
                continue

            cat = infer_category(title, default_cat)
            hours_ago = max(1, int(round(estimate_hours_ago(raw))))
            seen_ids.add(vid)
            candidates.append(
                {
                    "id": vid,
                    "title": title,
                    "enTitle": title,
                    "channel": channel,
                    "cat": cat,
                    "views": views,
                    "hoursAgo": min(hours_ago, 168),
                    "duration": format_duration(dur),
                    "note": CAT_NOTE_ZH[cat],
                    "enNote": CAT_NOTE_EN[cat],
                    "qualityScore": q_score,
                    "scoreBreakdown": breakdown,
                    "ingestedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                }
            )

    # Sort candidates by smart qualityScore first, then views, and enforce category balance
    candidates.sort(key=lambda x: (x["qualityScore"], x["views"]), reverse=True)
    cat_counts = Counter()
    admitted = []
    for item in candidates:
        if len(admitted) >= adm["max_new_per_run"]:
            break
        if cat_counts[item["cat"]] >= adm["max_per_category_per_run"]:
            continue
        cat_counts[item["cat"]] += 1
        admitted.append(item)

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if not admitted:
        msg = f"Scanned {scanned_count} candidates; 0 new videos passed threshold (>= {adm['min_quality_score']})."
        print(msg)
        if summary_path:
            Path(summary_path).write_text(f"### VICE CODEX Cloud Auto-Ingest\n- {msg}\n", "utf-8")
        return 0

    merged = existing + admitted
    merged.sort(key=lambda v: (float(v.get("qualityScore", 60)), int(v.get("views", 0))), reverse=True)
    merged = merged[: adm["max_cloud_videos"]]

    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "updatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "count": len(merged),
        "ruleVersion": rules["version"],
        "minQualityScore": adm["min_quality_score"],
        "videos": merged,
    }
    DATA_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", "utf-8")

    top_preview = "\n".join(
        f"- **[{v['qualityScore']}分 / {v['cat']}]** {v['title']} (`{v['channel']}`, {v['views']:,} views)"
        for v in admitted[:10]
    )
    print(f"Scanned {scanned_count} candidates -> Admitted {len(admitted)} high-score videos -> Cloud total: {len(merged)}.")
    if summary_path:
        Path(summary_path).write_text(
            f"### VICE CODEX Cloud Auto-Ingest Summary\n"
            f"- **Scanned**: {scanned_count} candidates\n"
            f"- **Admitted (Score >= {adm['min_quality_score']})**: +{len(admitted)} videos\n"
            f"- **Cloud Total**: {len(merged)} videos\n\n"
            f"#### Top Admitted This Run\n{top_preview}\n",
            "utf-8",
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
