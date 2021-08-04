// example.spec.ts
import { test, expect } from "@playwright/test";

test("my test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  expect(await page.title()).toContain("Playwright");

  // Expect an attribute "to be strictly equal" to the value.
  expect(await page.getAttribute("text=Get Started", "href")).toBe(
    "/docs/intro"
  );

  // Expect an element "to be visible".
  expect(await page.isVisible("text=Learn more")).toBeTruthy();

  await page.click("text=Get Started");
  // Expect some text to be visible on the page.
  expect(await page.waitForSelector("text=System requirements")).toBeTruthy();

  // Compare screenshot with a stored reference.
  expect(await page.screenshot()).toMatchSnapshot("get-started.png");
});
