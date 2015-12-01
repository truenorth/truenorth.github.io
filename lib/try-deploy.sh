#!/bin/bash
echo "Attempting to generate pages"
if [[ "${TRAVIS_PULL_REQUEST}" = "false" && "${TRAVIS_BRANCH}" == 'main' ]]; then
  ember github-pages:commit --message "New release" --branch "main"
  git push deploy main 2>&1 >/dev/null
else
  echo "Not a main build -- no deploy"
fi
