import { test as base, expect } from "@playwright/test";
import { expectNoViolations, runAxe, settle } from "./axe.js";

/**
 * Shared fixtures: `page.audit(name)` returns axe results,
 * `page.assertAxeClean(name)` fails the test if violations exist.
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    page.audit = (label) => runAxe(page, label);
    page.assertAxeClean = (label) => expectNoViolations(page, label);
    await use(page);
  },
});

export { expect, settle };
