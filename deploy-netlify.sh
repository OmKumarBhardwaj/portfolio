#!/usr/bin/env bash
# Builds the site (no base path) and deploys it to Netlify production.
set -e
cd "$(dirname "$0")"
rm -rf out && npx -y pnpm@9 build
if [ -f .netlify/state.json ]; then
  npx -y netlify-cli@latest deploy --dir out --prod --no-build
else
  npx -y netlify-cli@latest deploy --dir out --prod --no-build --create-site omkumarbhardwaj \
   || npx -y netlify-cli@latest deploy --dir out --prod --no-build --create-site om-kumar-bhardwaj-portfolio
fi
