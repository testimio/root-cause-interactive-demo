set -x

if [[ -z "${RUN_PLAYWRIGHT_EXAMPLE}" ]]
then
  cd with-jest-puppeteer
else
  cd with-jest-playwright
fi
npx jest

echo "List root cause results"
npx rc ls

echo "Opening root cause viewer..."
npx rc ls --simple | xargs npx rc show
