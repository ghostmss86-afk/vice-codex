#!/usr/bin/env python3
"""
VICE CODEX 4K Asset Installer
Auto-maps Rockstar's official GTAVI_Screenshots.zip (3840x2160 native 4K)
or local high-res images into ./assets/ for all 10 hero & region slots.
"""
import os
import sys
import glob
import zipfile
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = ROOT / "assets"
ASSETS_DIR.mkdir(parents=True, exist_ok=True)

SLOTS = [
    ("vice-city.jpg", ["vice_city", "vice-city", "ocean_beach", "ocean_drive"]),
    ("port-gellhorn.jpg", ["port_gellhorn", "port-gellhorn", "gellhorn"]),
    ("leonida-keys.jpg", ["leonida_keys", "leonida-keys", "keys"]),
    ("grassrivers.jpg", ["grassrivers", "swamp"]),
    ("mount-kalaga.jpg", ["mount_kalaga", "mount-kalaga", "kalaga"]),
    ("ambrosia.jpg", ["ambrosia"]),
    ("heist-vault.jpg", ["jason", "lucia", "vice_city_02", "downtown"]),
    ("supercars-meet.jpg", ["vice_city_03", "car", "supercar", "boobie"]),
    ("bunker-armory.jpg", ["port_gellhorn_02", "brian", "cal", "bunker"]),
    ("retro-vice.jpg", ["vice_city_04", "leonida_keys_02", "raul", "sunset"]),
]

def find_zip():
    candidates = [
        Path.home() / "Downloads" / "GTAVI_Screenshots.zip",
        ROOT / "GTAVI_Screenshots.zip",
    ]
    for p in candidates:
        if p.exists():
            return p
    for p in sorted((Path.home() / "Downloads").glob("*GTA*VI*Screenshot*.zip")):
        return p
    return None

def install_from_zip(zip_path: Path):
    print(f"Found official 4K archive: {zip_path}")
    with zipfile.ZipFile(zip_path, "r") as zf:
        imgs = [
            n for n in zf.namelist()
            if n.lower().endswith((".jpg", ".jpeg", ".png"))
            and not n.startswith("__MACOSX")
            and "portrait" not in n.lower()
            and "vertical" not in n.lower()
        ]
        if not imgs:
            print("No images found inside zip.")
            return 0
        used = set()
        installed = 0
        for target_name, keywords in SLOTS:
            pick = None
            for kw in keywords:
                for name in imgs:
                    if name in used:
                        continue
                    if kw in name.lower():
                        pick = name
                        break
                if pick:
                    break
            if not pick:
                for name in imgs:
                    if name not in used:
                        pick = name
                        break
            if pick:
                used.add(pick)
                dest = ASSETS_DIR / target_name
                with zf.open(pick) as src, open(dest, "wb") as dst:
                    shutil.copyfileobj(src, dst)
                size_mb = dest.stat().st_size / (1024 * 1024)
                print(f"  [OK] {target_name:20s} <- {Path(pick).name} ({size_mb:.2f} MB)")
                installed += 1
        return installed

def report_assets():
    print("\nCurrent assets/ inventory:")
    missing = []
    for target_name, _ in SLOTS:
        p = ASSETS_DIR / target_name
        if p.exists():
            size_kb = p.stat().st_size / 1024
            print(f"  [READY] assets/{target_name} ({size_kb:.0f} KB)")
        else:
            missing.append(target_name)
            print(f"  [MISS ] assets/{target_name}")
    if not missing:
        print("\nAll 10 4K assets are installed! Run `git add assets && git commit -m 'Add 4K hero & region assets' && git push` to publish.")
    else:
        print(f"\n{len(missing)} assets not yet installed locally (site automatically uses clean high-res fallbacks).")

if __name__ == "__main__":
    zp = find_zip()
    if zp:
        install_from_zip(zp)
    else:
        print("No GTAVI_Screenshots.zip found in ~/Downloads.")
        print("Download Rockstar's official 4K pack (138 native 3840x2160 shots) from Rockstar Games VI Media -> Screenshots,")
        print("or save any of the 10 custom 16:9 artworks directly into assets/ with the filenames below.")
    report_assets()
