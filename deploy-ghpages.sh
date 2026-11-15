#!/usr/bin/env bash
# Build with /portfolio base path and push to the gh-pages branch.
# Works in a temp copy, so a failed step can never touch this repo's .git.
set -euo pipefail
cd "$(dirname "$0")"
rm -rf out
BASE_PATH=/portfolio NEXT_PUBLIC_BASE_PATH=/portfolio npx -y pnpm@9 build
test -f out/index.html
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
cp -r out/. "$tmp"/
touch "$tmp/.nojekyll"
git -C "$tmp" init -q -b gh-pages
git -C "$tmp" add -A
git -C "$tmp" commit -qm "deploy $(date -u +%F)"
git -C "$tmp" push -qf git@github.com:OmKumarBhardwaj/portfolio.git gh-pages
rm -rf out
echo "GitHub Pages deployed"
