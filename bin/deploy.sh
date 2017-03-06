#!/bin/bash
 
set -o errexit # Exit on error

ng build --prod -aot
git commit -am "auto-deploy 1"
# on passe sur le master et on recupère le rep build
git checkout master
git checkout dev-ng -- dist
git commit -am "auto-deploy 2"
git subtree push --prefix dist origin master

git checkout dev-ng