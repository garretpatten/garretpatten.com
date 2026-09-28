import { expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

/**
 * Shared axe-core audit helpers.
 *
 * `runAxe` drives axe against the current page, persists the raw results as
 * JSON under a11y/results/, and returns the violations list. Spec files assert
 * on that list so CI fails loudly, while the JSON artifacts keep violation
 * detail (selectors, snippets, fix URLs) for triage.
 */

const AXE_TAGS = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
];

const RESULTS_DIR = path.join("a11y", "results");

/** Lets web fonts and route animations finish before axe samples the DOM. */
export async function settle(page) {
  await page.evaluate(async () => {
    const pending = [
      ...document.getAnimations().map((animation) => animation.finished),
    ];
    if (document.fonts) {
      pending.push(document.fonts.ready);
    }
    await Promise.allSettled(pending);
  });
}

/** Runs axe against the current page state and returns the full results. */
export async function runAxe(page, label) {
  const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  mkdirSync(RESULTS_DIR, { recursive: true });
  writeFileSync(
    path.join(RESULTS_DIR, `${slug(label)}.json`),
    JSON.stringify(
      { label, timestamp: new Date().toISOString(), ...results },
      null,
      2,
    ),
  );
  return results;
}

/** Asserts there are no axe violations, printing readable detail on failure. */
export async function expectNoViolations(page, label) {
  const results = await runAxe(page, label);
  const violations = results.violations ?? [];
  if (violations.length > 0) {
    console.error(
      `${label}: ${violations.length} axe violation(s)\n\n` +
        violations
          .map((violation) => formatViolation(violation, label))
          .join("\n\n"),
    );
  }
  expect(violations, `${label}: axe violations`).toEqual([]);
  return results;
}

/** Formats a violation for logs and GitHub annotations. */
export function formatViolation(violation, label) {
  const selectors = violation.nodes
    .slice(0, 10)
    .map((node) => `     - ${node.target.join(" ")}`);
  return [
    `${label}: [${violation.impact ?? "unknown"}] ${violation.id} — ${violation.help}`,
    `     ${violation.helpUrl}`,
    ...selectors,
  ].join("\n");
}

function slug(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 100);
}
