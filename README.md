# Garret Patten - Personal Portfolio Website

A modern, minimal personal portfolio website built with Vue 3, Vite, Tailwind CSS, and Vue Router.

## Features

- 🎨 Clean, minimal design with navy/pine color theming
- 🌓 Dark mode support with localStorage persistence
- 📱 Fully responsive (mobile-first design)
- 🎭 Smooth page transitions
- 🧩 Component-based architecture
- ⚡ Fast build with Vite
- 📝 Contact form integration via Formspree
- 🎯 Hobby tabs with understated icons

## Tech Stack

- **Vue 3** (Composition API)
- **Vite** (Build tool)
- **Vue Router** (Navigation)
- **Pinia** (State management)
- **Tailwind CSS** (Styling)
- **vue3-carousel** (Project carousel)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
garretpatten.com/
├── public/
│   └── assets/
│       └── images/
│           └── garret-patten.jpg
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   ├── ContactForm.vue
│   │   ├── DarkModeToggle.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── HobbyTab.vue
│   │   ├── ProjectCard.vue
│   │   └── TimelineItem.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── theme.js
│   ├── views/
│   │   ├── AboutView.vue
│   │   ├── ContactView.vue
│   │   ├── HobbiesView.vue
│   │   ├── LandingView.vue
│   │   ├── ProjectsView.vue
│   │   └── ResumeView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Configuration

### Formspree Contact Form

To enable the contact form, you need to:

1. Sign up for a free account at [Formspree](https://formspree.io/)
2. Create a new form
3. Get your form ID
4. Update `src/components/ContactForm.vue`:
   - Replace `YOUR_FORM_ID` in the fetch URL with your actual Formspree form ID
   - The form will send emails to the email address you configure in Formspree

### Customization

- **Colors**: Edit `tailwind.config.js` to customize the navy and pine color schemes
- **Content**: Update the view components in `src/views/` with your actual content
- **Routes**: Modify `src/router/index.js` to add or remove routes

## Pages

- **Landing**: Hero section with value proposition and quick links
- **About**: Personal bio and background
- **Resume**: Professional experience timeline and skills
- **Projects**: Portfolio of work with project cards
- **Hobbies**: Tabbed interface showcasing personal interests (Reading, Genealogy Research, Personal System Design, Music, Journaling) with icons
- **Contact**: Contact form powered by Formspree

## Browser Support

Modern browsers that support ES6+ and CSS Grid/Flexbox.

## License

Personal project - All rights reserved.
