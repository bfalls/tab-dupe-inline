#!/usr/bin/env bash
set -euo pipefail

ZIP_NAME="tab-dupe-inline.zip"

required_files=(
  manifest.json
  src/background.js
  assets/icon-16.png
  assets/icon-32.png
  assets/icon-48.png
  assets/icon-128.png
  LICENSE
  README.md
)

# ---- sanity checks ----
for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "ERROR: Required file not found: $file"
    echo "Run this script from the repo root."
    exit 1
  fi
done

# ---- build zip ----
rm -f "$ZIP_NAME"

zip -r "$ZIP_NAME" "${required_files[@]}" \
  -x "*.DS_Store" \
  -x "__MACOSX/*" \
  -x "*.zip" \
  -x ".git/*" \
  -x ".gitignore"

echo "Created: $ZIP_NAME"
