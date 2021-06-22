module.exports = {
  verbose: true,
  preset: "jest-playwright-preset",
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium", "firefox", "webkit"],
      devices: [],
      launchOptions: {
        headless: true,
      },
      contextOptions: {
        ignoreHTTPSErrors: true,
        viewport: {
          width: 1920,
          height: 1080,
        },
      },
      collectCoverage: true,
      exitOnPageError: false,
    },
  },
};
