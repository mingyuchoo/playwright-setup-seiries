const { chromium } = require("playwright");
describe("whatsmyuseragent.org", function () {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await chromium.launch();
  });
  afterAll(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });
  it("should work", async () => {
    await page.goto("https://whatsmyuseragent.org/");
    expect(await page.title()).toBe("What's my User Agent?");
  });
});
