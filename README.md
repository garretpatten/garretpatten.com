# [garretpatten.com](https://garretpatten.com/)

Personal portfolio site. Vue 3 + Vite + Tailwind CSS.

## Setup

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
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
```

## License

All rights reserved.
