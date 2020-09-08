beforeEach(async () => {
  if ("setViewport" in page) {
    // puppeteer
    // @ts-ignore
    await page.setViewport({
      width: 1366,
      height: 600,
    });
  } else {
    // playwright
    // @ts-ignore
    await page.setViewportSize({
      width: 1366,
      height: 600,
    });
  }
});
