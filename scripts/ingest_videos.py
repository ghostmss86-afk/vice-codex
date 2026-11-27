#!/usr/bin/env python3
"""
Cloud auto-ingest pipeline for VICE CODEX.
Runs inside GitHub Actions (never on the user's local machine).
Detects high-quality, non-duplicate GTA 6 YouTube videos and writes them to data/videos.json.
If no new qualifying videos are found, data/videos.json stays unchanged so no unnecessary deploy occurs.
"""

import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_JS = ROOT / "app.js"
DATA_FILE = ROOT / "data" / "videos.json"

PER_QUERY = int(os.environ.get("PER_QUERY", "35"))
MIN_VIEWS = int(os.environ.get("MIN_VIEWS", "3000"))
MAX_CLOUD_VIDEOS = int(os.environ.get("MAX_CLOUD_VIDEOS", "5000"))

QUERIES = [
    ("money", "GTA 6 best money making method heist glitch"),
    ("money", "GTA 6 bank robbery vault guide payout"),
    ("weapons", "GTA 6 legendary weapons locations safe codes"),
    ("weapons", "GTA 6 hidden bunker secret guns location"),
    ("vehicles", "GTA 6 fastest supercars customization secret car"),
    ("vehicles", "GTA 6 free rare car spawn location mod shop"),
    ("easter", "GTA 6 easter eggs secrets mysteries details"),
    ("easter", "GTA 6 UFO alien ghost ship hidden details"),
    ("starter", "GTA 6 tips tricks guide things you missed"),
    ("starter", "GTA 6 update patch notes new features"),
    ("cheats", "GTA 6 cheat codes 100 percent trophy guide"),
    ("cheats", "GTA 6 collectibles cards stunts walkthrough"),
]

RELEVANCE_RE = re.compile(r"\bgta\s*(6|vi)\b|grand\s+theft\s+auto\s*(6|vi)\b|vice\s*city|leonida", re.I)

CAT_RULES = [
    ("cheats", re.compile(r"cheat|trophy|platinum|100%|collectible|achievement", re.I)),
    ("money", re.compile(r"money|glitch|heist|vault|cash|million|\$\d|robbery|fence|payout|bank", re.I)),
    ("weapons", re.compile(r"weapon|gun|rifle|pistol|shotgun|safe code|keypad|bunker|smg|sniper|revolver|knife", re.I)),
    ("vehicles", re.compile(r"\bcar\b|\bcars\b|supercar|vehicle|thrax|emerus|mod shop|customiz|drift|racing|bike|boat", re.I)),
    ("easter", re.compile(r"easter egg|secret|mystery|ufo|alien|ghost|bigfoot|skunk ape|detail|dexter|retro", re.I)),
]

CAT_NOTE_ZH = {
    "money": "云端自动收录的高热度赚钱与劫案实战视频",
    "weapons": "云端自动收录的传奇武器点位与门禁密码视频",
    "vehicles": "云端自动收录的极速超跑、隐藏刷车与改装视频",
    "easter": "云端自动收录的莱奥尼达隐藏彩蛋与细节实测",
    "cheats": "云端自动收录的作弊码、全收集与白金奖杯攻略",
    "starter": "云端自动收录的开荒技巧、画面设置与补丁解析",
}

CAT_NOTE_EN = {
    "money": "Auto-ingested high-traffic money route & heist guide",
    "weapons": "Auto-ingested legendary weapon & safe code guide",
    "vehicles": "Auto-ingested supercar, hidden spawn & tuning guide",
    "easter": "Auto-ingested Leonida Easter egg & detail showcase",
    "cheats": "Auto-ingested cheat codes, collectibles & 100% guide",
    "starter": "Auto-ingested starter tips, settings & patch breakdown",
}


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


def format_duration(seconds) -> str:
    if not seconds:
        return "05:00"
    sec = int(seconds)
    h, rem = divmod(sec, 3600)
    m, s = divmod(rem, 60)
    if h:
        return f"{h}:{m:02d}:{s:02d}"
    return f"{m:02d}:{s:02d}"


def infer_category(title: str, default_cat: str) -> str:
    for cat, pattern in CAT_RULES:
        if pattern.search(title):
            return cat
    return default_cat


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
    baseline_ids = load_baseline_ids()
    existing = load_existing_cloud()
    seen_ids = set(baseline_ids) | {v["id"] for v in existing if isinstance(v, dict) and v.get("id")}

    added = []
    for default_cat, query in QUERIES:
        try:
            results = fetch_query(query, PER_QUERY)
        except Exception as exc:
            print(f"[warn] query failed ({query}): {exc}", file=sys.stderr)
            continue

        for raw in results:
            vid = str(raw.get("id") or "").strip()
            title = str(raw.get("title") or "").strip()
            if not re.fullmatch(r"[A-Za-z0-9_-]{11}", vid):
                continue
            if vid in seen_ids:
                continue
            if not title or not RELEVANCE_RE.search(title):
                continue

            views = int(raw.get("view_count") or 0)
            dur = int(raw.get("duration") or 0)
            if views < MIN_VIEWS:
                continue
            if dur and (dur < 20 or dur > 7200):
                continue

            cat = infer_category(title, default_cat)
            channel = str(raw.get("channel") or raw.get("uploader") or "YouTube Creator").strip()
            entry = {
                "id": vid,
                "title": title,
                "enTitle": title,
                "channel": channel,
                "cat": cat,
                "views": views,
                "hoursAgo": 6,
                "duration": format_duration(dur),
                "note": CAT_NOTE_ZH[cat],
                "enNote": CAT_NOTE_EN[cat],
                "ingestedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            }
            seen_ids.add(vid)
            added.append(entry)

    if not added:
        print("0 new qualifying videos found.")
        return 0

    merged = existing + added
    merged.sort(key=lambda v: int(v.get("views", 0)), reverse=True)
    merged = merged[:MAX_CLOUD_VIDEOS]

    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "updatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "count": len(merged),
        "videos": merged,
    }
    DATA_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"Added {len(added)} new qualifying videos. Cloud pool total: {len(merged)}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
