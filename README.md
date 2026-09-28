# [garretpatten.com](https://garretpatten.com/)

Personal portfolio site. Vue 3 + Vite + Tailwind CSS.

## Setup

Requires Node.js 24+.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview production build
npm run test:a11y  # axe-core accessibility audit (Playwright)
```

## Stack

- Vue 3 (Composition API), Vue Router, Pinia
- Vite
- Tailwind CSS
- Google Fonts: Inter (body), Lato (headings), JetBrains Mono (code)

## Structure

```text
src/
├── components/    # Header, Footer, ProjectCard, TimelineItem, HobbyTab
├── views/         # LandingView, AboutView, ResumeView, ProjectsView, HobbiesView
├── router/        # Route definitions
├── stores/        # Theme store (dark mode)
├── assets/css/    # Global styles
├── App.vue
└── main.js
a11y/              # Playwright + axe-core audit (all routes, desktop + mobile)
```

## Accessibility

An axe-core audit runs in Chromium on every PR and weekly (see
`.github/workflows/a11y-audit.yaml`), covering each route and interactive state
(mobile menu, hobby accordion) plus navigation focus behavior. Focus policy:
focus is never moved to readonly content — on client-side navigation it stays
on the activated navigation control (the header persists across views), route
changes are announced via a polite aria-live region, and the skip link is the
keyboard path into main content.

## License

All rights reserved.
