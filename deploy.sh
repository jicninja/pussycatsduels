#!/usr/bin/env sh

# abort on errors
set -e

# build
set NODE_ENV=production
rm -rf dist
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/jicninja/pussycatsduels.git master:gh-pages

cd -