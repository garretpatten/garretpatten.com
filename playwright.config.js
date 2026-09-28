import { defineConfig, devices } from "@playwright/test";

/**
 * Accessibility audit config.
 *
 * Boots `npm run preview` (production build) and runs axe-core against every
 * route on desktop and mobile viewports via a11y/audit.spec.js.
 */
export default defineConfig({
  testDir: "./a11y",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  use: {
    baseURL: process.env.A11Y_BASE_URL ?? "http://localhost:4173",
    trace: "retain-on-failure",
  },
  webServer: process.env.A11Y_BASE_URL
    ? undefined
    : {
        command: "npm run preview -- --port 4173 --strictPort",
        url: "http://localhost:4173",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
  projects: [
    {
      name: "desktop-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
        colorScheme: "dark",
      },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["Pixel 7"],
        colorScheme: "dark",
      },
    },
  ],
});
