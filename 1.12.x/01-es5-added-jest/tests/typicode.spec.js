jest.setTimeout(40 * 1000);

describe("jsonplaceholder.typicode.com", () => {
  it("should work", async () => {
    await page.goto("https://jsonplaceholder.typicode.com/");
    expect(await page.title()).toContain("JSONPlaceholder");
  });
});
