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
```

`npm run test:unit` runs the Vitest suite (colocated under `src/**/__tests__/`), covering the theme store, router, components (Header incl. mobile-nav `aria-*`, Footer, ProjectCard, TimelineItem, HobbyTab, HobbyIcon), and per-route view smoke tests. Component tests mount with `@vue/test-utils` in a jsdom environment (see `vitest.config.js`; shared setup in `src/test-setup.js`). A GitHub Actions workflow (`.github/workflows/unit-tests.yaml`) gates PRs and pushes to master on the unit tests; a **required status check** (Settings → Branches → branch protection → require status checks → *Unit Tests / Vitest unit tests*).

`npm run test:a11y` verifies the production build in Chromium (desktop + mobile) with axe-core across all routes and interactive states (mobile menu, hobby accordion), plus navigation focus regression checks. A GitHub Actions workflow (`.github/workflows/a11y-audit.yaml`) runs the same audit on PRs, pushes to main, and weekly. Verify visual changes manually in the browser after `npm run dev` or `npm run preview`.

## Project layout

```text
src/
├── components/    # Header, Footer, ProjectCard, TimelineItem, HobbyTab, …
│   └── __tests__/ # Vitest component tests (colocated)
├── views/         # LandingView, AboutView, ResumeView, ProjectsView, HobbiesView
│   └── __tests__/ # Vitest view smoke tests (colocated)
├── router/        # Route definitions (createWebHistory)
│   └── __tests__/
├── stores/        # Pinia stores (theme / dark mode)
│   └── __tests__/
├── assets/css/    # Tailwind layers + motion utilities (main.css)
├── App.vue        # Shell: Header, router-view transition, Footer, theme init
└── main.js        # App bootstrap
a11y/               # Playwright + @axe-core/playwright audit (run with npm run test:a11y)
public/             # Static assets served at site root (images, _redirects)
```

Path alias: `@` → `src/` (see `vite.config.js`).

## Stack and patterns

- **Vue 3** with `<script setup>` and the Composition API. No Options API in new code.
- **Vue Router** for pages; add routes in `src/router/index.js` and create a view under `src/views/`.
- **Pinia** for shared state. `useThemeStore` in `src/stores/theme.js` keeps **`dark`** on `<html>` — the UI is **Gruvbox Dark Hard only** (system light mode is ignored).
- **Tailwind CSS** for styling. Prefer utility classes in templates; shared motion/UI patterns live in `src/assets/css/main.css` (`@layer components` / `@layer utilities`).
- **@vueuse/core** where composables help.

Reuse existing components (`ProjectCard`, `TimelineItem`, `HobbyTab`, etc.) before adding new abstractions.

## Styling and UX

- **Dark / theme**: `darkMode: "class"` in `tailwind.config.js`; **`index.html` + `theme.js` always add `dark`** so the pastel light shell is never used. Keep `dark:` variants where dual utilities remain.
- **Palette**: Theme colors (`cobalt` blue, `sun` yellow, `torch` orange, `ruby` red, plus `gray` neutrals) in `tailwind.config.js` match Gruvbox Dark Hard ANSI bright/normal pairs (dotfiles Kitty `Gruvbox-Dark-Hard.conf`). Prefer tokens over arbitrary hex; keep UI accents to these four colors.
- **Fonts**: Body text uses **Inter** (`font-sans`), headings use **Lato** (`font-heading`), and code/mono text uses **JetBrains Mono** (`font-mono`). Google Fonts are loaded in `index.html`; update both files together when changing the font stack.
- **Motion**: Default interaction timing is **230ms** (`duration-[230ms]`). Reuse classes like `interactive-lift`, `soft-enter`, and route/menu transitions defined in `main.css` instead of one-off animations.
- **Layout**: `container mx-auto` with responsive padding matches `App.vue`. Keep pages readable (`max-w-*` on content sections).
- **Accessibility**: Preserve `aria-*` on interactive controls (e.g. mobile nav in `Header.vue`).

## Deployment

- Build output: `dist/`. `base` is `/` for Cloudflare Pages.
- SPA routing: `public/_redirects` (and root `_redirects`) use `/* /index.html 200`.
- Put new static files in `public/` when they need a fixed URL path.

## Pull requests and security

PRs run the reusable **Security Checks** workflow (Semgrep, Trufflehog). Avoid introducing secrets, credentials, or sensitive personal data in the repo.

## Scope and changes

- Keep diffs focused on the requested task. No drive-by refactors or unrelated file edits.
- Do not edit generated output (`dist/`) or commit unless the user asks.
- Content changes (copy, resume bullets, project lists) usually belong in the relevant view or component under `src/views/` or `src/components/`.
- License: all rights reserved — do not add permissive open-source licensing without explicit direction.

## Canonical references

| Concern                        | File                        |
| ------------------------------ | --------------------------- |
| App shell & route transitions  | `src/App.vue`               |
| Navigation & responsive header | `src/components/Header.vue` |
| Theme / dark mode              | `src/stores/theme.js`       |
| Routes                         | `src/router/index.js`       |
| Global CSS & motion            | `src/assets/css/main.css`   |
| Tailwind theme                 | `tailwind.config.js`        |
| Vite / build                   | `vite.config.js`            |

## GitHub Actions

Whenever a GitHub workflow is added, all GitHub Action pins in that workflow
should be updated to point to the full-length commit SHA of the most recent
release.
