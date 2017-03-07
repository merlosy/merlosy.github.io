#!/bin/bash
 
set -o errexit # Exit on error

ng build --prod -aot
git add -A dist
git commit -am "pre-deploy"
# on passe sur le master et on recupère le rep build
git checkout master
# on nettoie la remote
rm -rf dist
git push -f origin master
# On recupère les dernieres source buildes
git checkout dev-ng -- dist
git add -A dist
git commit -am "deploy 1"
#git push -f origin master
#git commit -am "auto-deploy 2"
#git subtree push --prefix dist origin master
git push origin `git subtree split --prefix dist master`:master --force

git checkout dev-ng