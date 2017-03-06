#!/bin/bash
 
set -o errexit # Exit on error

ng build --prod -aot
git checkout master
git commit -am "auto-deployed"
git subtree push --prefix dist origin master