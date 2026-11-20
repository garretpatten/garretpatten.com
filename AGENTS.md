# garretpatten.com — Agent Instructions

Personal portfolio site ([garretpatten.com](https://garretpatten.com)). Vue 3 + Vite + Tailwind CSS, deployed to Cloudflare Pages.

## Commands

Requires Node.js **24+** (see `.nvmrc` / `package.json` engines).

```bash
npm install
npm run dev               # local dev server
npm run build             # production build → dist/
npm run preview           # preview production build
npm run test:unit         # Vitest unit tests (run once)
npm run test:unit:watch   # Vitest unit tests (watch mode)
npm run test:unit:coverage  # Vitest unit tests with V8 coverage report
npm run test:a11y         # axe-core accessibility audit (Playwright; see a11y/)
npm run lint              # ESLint (flat config incl. vue & vuejs-accessibility)
```

`npm run test:unit` runs the Vitest suite (colocated under `src/**/__tests__/`), covering the router, components (Header incl. mobile-nav `aria-*`, Footer, ProjectCard, SocialLinks, TimelineItem), and per-route view smoke tests. Component tests mount with `@vue/test-utils` in a jsdom environment (see `vitest.config.js`; shared setup in `src/test-setup.js`). A GitHub Actions workflow (`.github/workflows/unit-tests.yaml`) gates PRs and pushes to master on the unit tests; a **required status check** (Settings → Branches → branch protection → require status checks → _Unit Tests / Vitest unit tests_).

`npm run test:a11y` verifies the production build in Chromium (desktop + mobile) with axe-core across all routes and interactive states (mobile menu), plus navigation focus regression checks. A GitHub Actions workflow (`.github/workflows/a11y-audit.yaml`) runs the same audit on PRs, pushes to main, and weekly. Verify visual changes manually in the browser after `npm run dev` or `npm run preview`.

## Project layout

```text
src/
├── components/    # Header, Footer, ProjectCard, TimelineItem, …
│   └── __tests__/ # Vitest component tests (colocated)
├── views/         # LandingView, AboutView, ResumeView, ProjectsView
│   └── __tests__/ # Vitest view smoke tests (colocated)
├── router/        # Route definitions (createWebHistory, lazy view imports)
│   └── __tests__/
├── composables/   # Shared state/behavior (mobile menu, route announcer)
├── assets/css/    # Tailwind layers + motion utilities (main.css)
├── App.vue        # Shell: Header, router-view transition, Footer
└── main.js        # App bootstrap
a11y/               # Playwright + @axe-core/playwright audit (run with npm run test:a11y)
public/             # Static assets served at site root (images, _redirects)
```

Path alias: `@` → `src/` (see `vite.config.js`).

## Stack and patterns

- **Vue 3** with `<script setup>` and the Composition API. No Options API in new code.
- **Vue Router** for pages; add routes in `src/router/index.js` and create a view under `src/views/`.
- **Tailwind CSS** for styling. Prefer utility classes in templates; shared motion/UI patterns live in `src/assets/css/main.css` (`@layer components` / `@layer utilities`).

Reuse existing components (`ProjectCard`, `TimelineItem`, etc.) before adding new abstractions.

## Styling and UX

- **Dark mode**: `darkMode: "class"` in `tailwind.config.js`; the static **`class="dark"` on `<html>`** in `index.html` is the single source of truth — the UI is **Gruvbox Dark Hard only** (system light mode is ignored). Keep `dark:` variants where dual utilities remain.
- **Palette**: Theme colors (`cobalt` blue, `sun` yellow, `torch` orange, `ruby` red, plus `gray` neutrals) in `tailwind.config.js` match Gruvbox Dark Hard ANSI bright/normal pairs (dotfiles Kitty `Gruvbox-Dark-Hard.conf`). Prefer tokens over arbitrary hex; keep UI accents to these four colors.
- **Fonts**: Body text uses **Inter** (`font-sans`), headings use **Lato** (`font-heading`), and code/mono text uses **JetBrains Mono** (`font-mono`). Google Fonts are loaded in `index.html`; update both files together when changing the font stack.
- **Motion**: Default interaction timing is **230ms** (`duration-[230ms]`). Reuse classes like `interactive-lift`, `soft-enter`, and route/menu transitions defined in `main.css` instead of one-off animations.
- **Layout**: `container mx-auto` with responsive padding matches `App.vue`. Keep pages readable (`max-w-*` on content sections).
- **Accessibility**: Preserve `aria-*` on interactive controls (e.g. mobile nav in `Header.vue`).

## Deployment

- Build output: `dist/`. `base` is `/` for Cloudflare Pages.
- SPA routing: `public/_redirects` (`/* /index.html 200`).
- Put new static files in `public/` when they need a fixed URL path.

## Pull requests and security

PRs run the reusable **Security Checks** workflow (Semgrep, Trufflehog). Avoid introducing secrets, credentials, or sensitive personal data in the repo.

## Pre-push lint checks

PRs run the reusable [quality-checks](https://github.com/garretpatten/quality-checks) **Linters** workflow. Run the same checks locally before pushing to avoid unnecessary CI failures (this repo has no `lint:*` npm scripts; CI uses tool defaults):

```bash
pip install yamllint                       # one-time setup

yamllint .github/dependabot.yaml .github/workflows/*.yaml   # YAML (most common failure)
npx prettier --check "**/*.md" "**/*.{js,css,json}"         # formatting
npx markdownlint-cli2 "**/*.md"                             # Markdown structure
jq empty file.json                                          # JSON syntax, per file
```

Notes:

- **YAML is the most common failure**: yamllint (defaults) errors on lines longer than 80 characters. When pinning actions to full commit SHAs, a `uses:` line plus a trailing version comment exceeds 80 — put the `# vX.Y` comment on its own line above the `uses:` line (see `.github/workflows/unit-tests.yaml`).
- This repo has no `.yamllint` config, so local `yamllint` defaults match CI exactly.
- The quality-checks repo also provides `./scripts/lint-changed.sh` for repos that opt into it, but it must be run from the quality-checks checkout and does not apply to this repo.

## Scope and changes

- Keep diffs focused on the requested task. No drive-by refactors or unrelated file edits.
- Do not edit generated output (`dist/`) or commit unless the user asks.
- Content changes (copy, resume bullets, project lists) usually belong in the relevant view or component under `src/views/` or `src/components/`.
- License: MIT — see [LICENSE](./LICENSE).

## Canonical references

| Concern                        | File                                 |
| ------------------------------ | ------------------------------------ |
| App shell & route transitions  | `src/App.vue`                        |
| Navigation & responsive header | `src/components/Header.vue`          |
| Dark mode                      | `index.html` (static `class="dark"`) |
| Routes                         | `src/router/index.js`                |
| Global CSS & motion            | `src/assets/css/main.css`            |
| Tailwind theme                 | `tailwind.config.js`                 |
| Vite / build                   | `vite.config.js`                     |

## GitHub Actions

Whenever a GitHub workflow is added, all GitHub Action pins in that workflow
should be updated to point to the full-length commit SHA of the most recent
release.
