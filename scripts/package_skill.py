"""Packages skills/seo-playbook into dist/seo-playbook.skill (a zip) for claude.ai uploads.

Usage: python scripts/package_skill.py
The test cases in the skill's evals/ folder are left out of the package.
"""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parent.parent
SKILL = ROOT / "skills" / "seo-playbook"
OUT = ROOT / "dist" / "seo-playbook.skill"
SKIP_DIRS = {"evals", "__pycache__", "node_modules"}

def main() -> None:
    if not (SKILL / "SKILL.md").is_file():
        raise SystemExit(f"{SKILL / 'SKILL.md'} not found; run node scripts/build.mjs first")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    count = 0
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(SKILL.rglob("*")):
            rel = path.relative_to(SKILL)
            if path.is_dir() or (rel.parts and rel.parts[0] in SKIP_DIRS) or path.name == ".DS_Store":
                continue
            zf.write(path, Path("seo-playbook") / rel)
            count += 1
    print(f"wrote {OUT.relative_to(ROOT)} ({count} files, {OUT.stat().st_size // 1024} KB)")

if __name__ == "__main__":
    main()
