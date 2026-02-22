# garretpatten.com

Personal portfolio site. Vue 3 + Vite + Tailwind CSS.

## Setup

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Stack

- Vue 3 (Composition API), Vue Router, Pinia
- Vite
- Tailwind CSS
- vue3-carousel

## Structure

```
src/
├── components/    # DarkModeToggle, Header, Footer, ProjectCard, etc.
├── views/         # LandingView, AboutView, ResumeView, ProjectsView, HobbiesView
├── router/        # Route definitions
├── stores/        # Theme store (dark mode)
├── assets/css/    # Global styles
├── App.vue
└── main.js
```

## License

All rights reserved.
