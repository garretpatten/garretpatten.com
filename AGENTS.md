# garretpatten.com — Agent Instructions

Personal portfolio site ([garretpatten.com](https://garretpatten.com)). Vue 3 + Vite + Tailwind CSS, deployed to Cloudflare Pages.

## Commands

Requires Node.js **20.19+** or **22.12+** (see `.nvmrc` / `package.json` engines).

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

There is no test script. Verify changes manually in the browser after `npm run dev` or `npm run preview`.

## Project layout

```text
src/
├── components/    # Header, Footer, ProjectCard, TimelineItem, HobbyTab, …
├── views/         # LandingView, AboutView, ResumeView, ProjectsView, HobbiesView
├── router/        # Route definitions (createWebHistory)
├── stores/        # Pinia stores (theme / dark mode)
├── assets/css/    # Tailwind layers + motion utilities (main.css)
├── App.vue        # Shell: Header, router-view transition, Footer, theme init
└── main.js        # App bootstrap
public/             # Static assets served at site root (images, _redirects)
```

Path alias: `@` → `src/` (see `vite.config.js`).

## Stack and patterns

- **Vue 3** with `<script setup>` and the Composition API. No Options API in new code.
- **Vue Router** for pages; add routes in `src/router/index.js` and create a view under `src/views/`.
- **Pinia** for shared state. Theme follows system preference via `useThemeStore` in `src/stores/theme.js` (`dark` class on `<html>`).
- **Tailwind CSS** for styling. Prefer utility classes in templates; shared motion/UI patterns live in `src/assets/css/main.css` (`@layer components` / `@layer utilities`).
- **vue3-carousel** on hobbies-related views; **@vueuse/core** where composables help.

Reuse existing components (`ProjectCard`, `TimelineItem`, `HobbyTab`, etc.) before adding new abstractions.

## Styling and UX

- **Dark mode**: `darkMode: "class"` in `tailwind.config.js`. Use `dark:` variants; do not add a manual theme toggle unless explicitly requested.
- **Palette**: Use theme colors (`cobalt`, `iris`, `forest`, `sun`, `pine`, `navy`, `gray`) from `tailwind.config.js` — scales align with Gruvbox Dark Hard (see dotfiles Kitty `Gruvbox-Dark-Hard.conf`). Prefer theme tokens over arbitrary hex except rare gradients (`dark0_hard` / `dark1` ramps).
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

| Concern | File |
|--------|------|
| App shell & route transitions | `src/App.vue` |
| Navigation & responsive header | `src/components/Header.vue` |
| Theme / dark mode | `src/stores/theme.js` |
| Routes | `src/router/index.js` |
| Global CSS & motion | `src/assets/css/main.css` |
| Tailwind theme | `tailwind.config.js` |
| Vite / build | `vite.config.js` |
