const { test, expect } = require("@playwright/test");
test("index test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
});
