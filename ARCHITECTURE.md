# Garret Patten Portfolio Website - Architecture & Design Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Design Philosophy](#design-philosophy)
3. [Tech Stack & Rationale](#tech-stack--rationale)
4. [Project Architecture](#project-architecture)
5. [Component Architecture](#component-architecture)
6. [State Management](#state-management)
7. [Routing Strategy](#routing-strategy)
8. [Styling Approach](#styling-approach)
9. [Data Flow & Lifecycle](#data-flow--lifecycle)
10. [Build & Deployment](#build--deployment)

---

## Project Overview

This is a modern, single-page application (SPA) portfolio website built with Vue 3. The site serves as a personal resume, portfolio showcase, and contact hub. It emphasizes clean design, performance, and maintainability.

### Core Requirements Met
- ✅ Single-page application with client-side routing
- ✅ Dark mode with persistence
- ✅ Fully responsive (mobile-first)
- ✅ Smooth page transitions
- ✅ Component-based architecture
- ✅ Minimal, elegant design
- ✅ Fast build and runtime performance

---

## Design Philosophy

### Minimalism & Elegance
The design is inspired by sites like karpathy.ai, emphasizing:
- **Clean typography**: System fonts for performance and native feel
- **Generous white space**: Improves readability and focus
- **Hierarchical text**: Clear visual hierarchy through size and weight
- **No bloat**: Only essential features and dependencies

### Mobile-First Approach
Every component and layout is designed for mobile screens first, then enhanced for larger viewports using Tailwind's responsive breakpoints:
- Mobile: Default styles (no prefix)
- Tablet: `sm:` and `md:` breakpoints
- Desktop: `lg:` and `xl:` breakpoints

### Color Scheme
- **Neutral grays** (gray-100 to gray-900): Primary text and backgrounds
- **Navy blue** (#1e3a8a): Primary accent for links, hovers, and active states in light mode
- **Pine green** (#065f46): Primary accent for dark mode, providing better contrast and visual distinction

This dual-accent approach ensures the site feels cohesive in both themes while maintaining accessibility.

---

## Tech Stack & Rationale

### Core Framework: Vue 3
**Why Vue 3?**
- **Composition API**: Provides better code organization and reusability compared to Options API
- **Performance**: Faster rendering, smaller bundle size, and better tree-shaking
- **Developer Experience**: Excellent tooling, clear documentation, and intuitive API
- **Ecosystem**: Mature ecosystem with excellent libraries

### Build Tool: Vite
**Why Vite?**
- **Speed**: Lightning-fast HMR (Hot Module Replacement) during development
- **Modern**: Native ES modules, no bundling in dev mode
- **Optimized builds**: Rollup-based production builds with automatic code splitting
- **Vue-first**: Excellent Vue support out of the box
- **Simple config**: Minimal configuration required

### Routing: Vue Router 4
**Why Vue Router?**
- **Official**: Maintained by Vue team, guaranteed compatibility
- **History mode**: Clean URLs without hash fragments (`/about` vs `/#/about`)
- **Programmatic navigation**: Easy route transitions and navigation guards
- **Lazy loading**: Support for code-splitting routes (not implemented but available)

### State Management: Pinia
**Why Pinia?**
- **Vue 3 native**: Built specifically for Vue 3, replacing Vuex
- **TypeScript support**: Excellent TypeScript inference (even without TS)
- **DevTools**: Great Vue DevTools integration
- **Lightweight**: Minimal overhead, simple API
- **Composition API**: Uses Composition API patterns, consistent with component code

**Why not just props/emits?**
- Dark mode state needs to be accessible across all components
- Theme preference needs persistence (localStorage)
- Centralized state management makes theme logic reusable and testable

### Styling: Tailwind CSS
**Why Tailwind?**
- **Utility-first**: Rapid development without writing custom CSS
- **Consistent design**: Pre-defined scale ensures design consistency
- **Small bundle**: Unused styles are purged in production
- **Dark mode**: Built-in dark mode support via `dark:` prefix
- **Responsive**: Mobile-first responsive utilities
- **Customizable**: Easy to extend with custom colors and utilities

**Why not CSS-in-JS or styled-components?**
- Tailwind's utility approach is faster to write and maintain
- Better performance (no runtime CSS generation)
- Easier to reason about (styles are co-located with markup)
- Better for component libraries

### Carousel: vue3-carousel
**Why vue3-carousel?**
- **Vue 3 compatible**: Built specifically for Vue 3
- **Lightweight**: Smaller than alternatives like Swiper
- **Simple API**: Easy to configure and customize
- **Touch support**: Built-in touch/swipe support for mobile
- **Accessible**: Better accessibility than custom implementations

### Additional Libraries
- **@vueuse/core**: Included but not currently used. Available for future composables (useDark, useLocalStorage, etc.)

---

## Project Architecture

### Directory Structure
```
garretpatten.com/
├── public/                    # Static assets served at root
│   └── assets/
│       └── images/
│           └── garret-patten.jpg
├── src/
│   ├── assets/               # Build-processed assets
│   │   └── css/
│   │       └── main.css      # Tailwind imports and custom styles
│   ├── components/           # Reusable UI components
│   │   ├── ContactForm.vue
│   │   ├── DarkModeToggle.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── HobbyTab.vue
│   │   ├── ProjectCard.vue
│   │   └── TimelineItem.vue
│   ├── router/               # Vue Router configuration
│   │   └── index.js
│   ├── stores/               # Pinia stores
│   │   └── theme.js
│   ├── views/                # Route-level page components
│   │   ├── AboutView.vue
│   │   ├── ContactView.vue
│   │   ├── HobbiesView.vue
│   │   ├── ProjectsView.vue
│   │   └── ResumeView.vue
│   ├── App.vue               # Root component
│   └── main.js               # Application entry point
├── index.html                # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Separation of Concerns
- **Views**: Page-level components that compose smaller components
- **Components**: Reusable, presentational components
- **Stores**: Application state management
- **Router**: Navigation and route configuration
- **Assets**: Static files and global styles

---

## Component Architecture

### Root Component: `App.vue`
**Purpose**: Application shell that provides layout structure and initializes global state.

**Responsibilities**:
- Provides main layout container
- Renders persistent Header and Footer
- Wraps router-view with transition animations
- Initializes theme store on mount
- Sets up global styles (fade transitions, smooth scrolling)

**Key Features**:
- Uses Tailwind's `container` class for responsive max-width
- Applies theme-aware background colors
- Implements fade transition for route changes

### Layout Components

#### `Header.vue`
**Purpose**: Site navigation and branding.

**Responsibilities**:
- Displays site title ("Garret Patten")
- Renders navigation links (About, Resume, Projects, Hobbies, Contact)
- Highlights active route
- Contains dark mode toggle
- Responsive layout (stacks on mobile)

**Implementation Details**:
- Uses `router-link` for navigation with active class binding
- Dynamic active state styling based on current route
- Flexbox layout that adapts to screen size

#### `Footer.vue`
**Purpose**: Site footer with copyright information.

**Responsibilities**:
- Displays copyright notice with current year
- Minimal, unobtrusive design

**Note**: Contact form was moved to dedicated Contact page per user request.

### Feature Components

#### `DarkModeToggle.vue`
**Purpose**: Theme switcher button.

**Responsibilities**:
- Provides visual toggle button (sun/moon icons)
- Calls theme store's `toggleTheme()` method
- Accessible button with proper ARIA labels
- Hover and focus states for better UX

**Design**:
- Icon-only button to save space
- Uses SVG icons for crisp rendering at any size
- Smooth hover transitions

#### `TimelineItem.vue`
**Purpose**: Displays a single timeline entry (used in Resume view).

**Responsibilities**:
- Renders job/education entry with role, company, dates, and bullets
- Provides visual timeline with line and dot
- Responsive card layout

**Visual Design**:
- Vertical timeline with connecting line
- Circular dot indicator
- Card-based content with hover effects
- Responsive date positioning (right-aligned on desktop, left on mobile)

#### `ProjectCard.vue`
**Purpose**: Displays a single project in the carousel.

**Responsibilities**:
- Shows project name, description, and GitHub link
- Provides consistent card styling
- Handles external link to GitHub

**Design**:
- Card-based layout with hover shadow effects
- GitHub icon with link
- Flexbox for consistent card heights in carousel

#### `HobbyTab.vue`
**Purpose**: Displays content for a single hobby tab.

**Responsibilities**:
- Renders hobby title, paragraphs, lists, and "currently" sections
- Handles different content types (text, lists, special sections)

**Content Structure**:
- Title heading
- Paragraph content (array of strings)
- Optional list items
- Optional "currently reading/doing" section with special styling

#### `ContactForm.vue`
**Purpose**: Contact form with Formspree integration.

**Responsibilities**:
- Collects user input (name, email, message)
- Validates required fields
- Submits to Formspree API
- Provides user feedback (loading, success, error states)
- Resets form on success

**Implementation Details**:
- Uses `fetch` API for form submission
- Handles async form submission with loading states
- Client-side validation (HTML5 required attributes)
- Accessible form labels and inputs
- Theme-aware styling

**Configuration Required**:
- Replace `YOUR_FORM_ID` with actual Formspree form ID
- Configure Formspree to send emails to `garret.patten@proton.me`

### View Components (Pages)

#### `AboutView.vue`
**Purpose**: Personal bio and introduction page.

**Content**:
- Profile picture (centered, circular)
- Bio paragraphs (mix of real and placeholder content)
- Clean, readable typography

**Design**:
- Centered layout with max-width for readability
- Large profile image
- Generous spacing between paragraphs

#### `ResumeView.vue`
**Purpose**: Professional experience and education timeline.

**Content Structure**:
- Summary section (highlighted with border accent)
- Skills section (tag-based display)
- Experience timeline (using TimelineItem components)
- Education section (card-based)

**Data Source**:
- Real content from original site (experience, education, skills)
- Hardcoded in component (could be moved to data file/store)

**Design**:
- Clear section hierarchy
- Timeline visualization for experience
- Tag-based skills display
- Responsive date positioning

#### `ProjectsView.vue`
**Purpose**: Portfolio project showcase with carousel.

**Implementation**:
- Uses `vue3-carousel` for responsive carousel
- Dynamically adjusts items shown based on screen size:
  - Mobile: 1 item
  - Tablet: 2 items
  - Desktop: 3 items
- Includes navigation arrows and pagination dots

**Features**:
- Autoplay with pause on hover
- Wrap-around navigation
- Custom styling for carousel controls (navy/pine colors)
- Responsive item count

**Content**:
- Currently uses placeholder projects
- Each project has: name, description, GitHub link

#### `HobbiesView.vue`
**Purpose**: Personal interests and hobbies with tabbed interface.

**Implementation**:
- Custom tab implementation (no external library)
- Active tab highlighting
- Smooth content switching
- Three hobby tabs: Genealogy, Guitar, Reading

**Tab System**:
- Button-based navigation
- Active state styling (navy/pine accent)
- Content switching via computed property
- Uses HobbyTab component for content display

**Content**:
- Genealogy: Family tree research details
- Guitar: Music interests and instrument collection
- Reading: Favorite books and currently reading section

#### `ContactView.vue`
**Purpose**: Dedicated contact page with form.

**Layout**:
- Page title and subtitle
- Brief introduction text
- ContactForm component

**Design**:
- Centered, readable layout
- Clear call-to-action
- Professional presentation

---

## State Management

### Theme Store (`stores/theme.js`)

**Purpose**: Manages dark mode state and persistence.

**State**:
- `isDark`: Boolean ref indicating current theme

**Methods**:
- `initTheme()`: Initializes theme from localStorage or system preference
- `toggleTheme()`: Switches between light and dark modes
- `applyTheme()`: Applies theme class to document element

**Persistence Strategy**:
1. On initialization: Check localStorage for saved preference
2. If no saved preference: Use system preference via `prefers-color-scheme`
3. On toggle: Save to localStorage and apply immediately
4. Watch for changes: Automatically persist any state changes

**Implementation Details**:
- Uses Vue's `ref` for reactive state
- Uses `watch` for automatic persistence
- Applies `dark` class to `<html>` element (Tailwind requirement)
- No flash of wrong theme (initializes before render)

**Why Pinia over composable?**
- Centralized state accessible from any component
- Automatic persistence logic
- Easy to extend with additional theme settings
- Better DevTools integration

---

## Routing Strategy

### Route Configuration (`router/index.js`)

**Routes**:
- `/` → Redirects to `/about`
- `/about` → AboutView
- `/resume` → ResumeView
- `/projects` → ProjectsView
- `/hobbies` → HobbiesView
- `/contact` → ContactView

### History Mode
Uses HTML5 History API (`createWebHistory`) for clean URLs:
- No hash fragments (`/about` not `/#/about`)
- Requires server configuration for production (redirect all routes to index.html)

### Route Transitions
Implemented in `App.vue`:
- Fade transition between routes
- `mode="out-in"`: Old route fades out before new route fades in
- 300ms duration for smooth but not sluggish feel

### Navigation
- Header component provides persistent navigation
- Active route highlighting via `router-link` active class
- Programmatic navigation available via `useRouter()` composable

---

## Styling Approach

### Tailwind CSS Configuration

**Custom Colors** (`tailwind.config.js`):
- `navy`: Blue accent color (light mode)
- `pine`: Green accent color (dark mode)
- Both colors have full 50-900 scale for flexibility

**Dark Mode**:
- Class-based dark mode (`darkMode: 'class'`)
- Applied to `<html>` element via theme store
- All components use `dark:` prefix for dark mode styles

### CSS Architecture

**Global Styles** (`src/assets/css/main.css`):
- Tailwind directives (`@tailwind base/components/utilities`)
- Custom base styles (font smoothing)
- Reserved layers for future custom utilities

**Component Styles**:
- Scoped styles in components when needed
- Primarily utility classes from Tailwind
- Custom CSS only for complex animations or carousel overrides

### Design System

**Typography**:
- System font stack: `system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif`
- No custom fonts for performance
- Responsive font sizes via Tailwind utilities

**Spacing**:
- Consistent spacing scale (Tailwind's default)
- Generous padding and margins for readability
- Responsive spacing adjustments

**Colors**:
- Neutral grays for text and backgrounds
- Navy/pine accents for interactive elements
- Semantic colors (green for success, red for errors)

**Borders & Shadows**:
- Subtle borders (1px, gray-200/gray-800)
- Soft shadows for depth (cards, hover states)
- Rounded corners (lg: 0.5rem) for modern feel

---

## Data Flow & Lifecycle

### Application Initialization

1. **HTML loads** (`index.html`)
   - Minimal HTML with `<div id="app">`
   - Script tag loads `main.js`

2. **Vue app creation** (`main.js`)
   - Creates Vue app instance
   - Installs Pinia plugin
   - Installs Vue Router plugin
   - Imports global CSS (Tailwind)
   - Mounts app to DOM

3. **App component mounts** (`App.vue`)
   - Renders Header, router-view, Footer
   - Calls `themeStore.initTheme()` on mount
   - Theme store checks localStorage/system preference
   - Applies theme class to document

4. **Router initialization**
   - Matches current URL to route
   - Loads corresponding view component
   - Renders view in router-view slot

### Component Lifecycle

**Theme Store**:
- Initializes on app mount
- Persists changes to localStorage
- Watches for state changes
- Applies theme class immediately

**Route Changes**:
- User clicks navigation link
- Router updates URL
- Old view component unmounts (fade out)
- New view component mounts (fade in)
- Active route highlighting updates

**Form Submission**:
- User fills contact form
- Clicks submit button
- Form validates (HTML5 + required attributes)
- `handleSubmit` function executes
- Shows loading state
- Fetches Formspree API
- Shows success/error message
- Resets form on success

### Data Sources

**Static Content**:
- Experience, education, skills: Hardcoded in ResumeView
- Projects: Hardcoded in ProjectsView (placeholders)
- Hobbies: Hardcoded in HobbiesView
- About: Mix of real and placeholder content

**Dynamic Content**:
- Current year: Computed from `new Date()`
- Theme preference: From localStorage
- Form data: User input

**Future Considerations**:
- Could move static content to JSON files
- Could use CMS or headless CMS for content management
- Could add API endpoints for dynamic content

---

## Build & Deployment

### Development

**Commands**:
- `npm run dev`: Starts Vite dev server with HMR
- Fast refresh on file changes
- Source maps for debugging

**Vite Configuration** (`vite.config.js`):
- Vue plugin for `.vue` file processing
- Path alias `@` for `src/` directory
- Automatic code splitting
- Optimized production builds

### Production Build

**Commands**:
- `npm run build`: Creates optimized production bundle
- `npm run preview`: Previews production build locally

**Build Output**:
- `dist/` directory with static files
- Optimized and minified JavaScript
- CSS extracted and minified
- Assets processed and optimized
- Tree-shaking removes unused code

### Deployment Considerations

**Static Hosting**:
- Can deploy to any static host (Netlify, Vercel, GitHub Pages, etc.)
- Requires server configuration for history mode:
  - All routes must redirect to `index.html`
  - Server handles routing, Vue Router handles client-side

**Environment Variables**:
- Formspree form ID could be moved to env variable
- Currently hardcoded (needs manual update)

**Performance Optimizations**:
- Code splitting (automatic with Vite)
- Asset optimization (automatic)
- Tree-shaking (automatic)
- CSS purging (Tailwind automatic)

**SEO Considerations**:
- Currently client-side rendered (limited SEO)
- Could add SSR (Nuxt.js) for better SEO
- Meta tags in `index.html` for basic SEO
- Could add vue-meta or @unhead/vue for dynamic meta tags

---

## Methodology & Best Practices

### Component Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: Components are designed to be reusable
3. **Composition**: Complex views compose smaller components
4. **Props Down, Events Up**: Unidirectional data flow
5. **Presentational vs Container**: Clear separation (views are containers, components are presentational)

### Code Organization

1. **Feature-based grouping**: Components grouped by type (layout, feature, view)
2. **Co-location**: Related files kept together
3. **Clear naming**: Descriptive, consistent naming conventions
4. **Comments**: Minimal but helpful comments where logic is complex

### Performance Considerations

1. **Lazy loading**: Routes could be lazy-loaded (not currently implemented)
2. **Image optimization**: Profile image could be optimized/compressed
3. **Bundle size**: Minimal dependencies, tree-shaking enabled
4. **CSS purging**: Tailwind removes unused styles automatically

### Accessibility

1. **Semantic HTML**: Proper use of headings, lists, forms
2. **ARIA labels**: Dark mode toggle has proper label
3. **Keyboard navigation**: All interactive elements are keyboard accessible
4. **Color contrast**: Meets WCAG guidelines (Tailwind defaults)
5. **Form labels**: All form inputs have associated labels

### Maintainability

1. **Clear structure**: Easy to find and modify code
2. **Consistent patterns**: Similar components follow same patterns
3. **Documentation**: This document and inline comments
4. **Type safety**: Could add TypeScript for better type safety
5. **Testing**: Structure supports unit and integration tests

---

## How It All Connects

### The Big Picture

1. **User visits site** → HTML loads → Vue app initializes
2. **Theme initializes** → Checks localStorage → Applies theme
3. **Router matches URL** → Loads view component → Renders page
4. **User navigates** → Router updates → View transitions → New page renders
5. **User toggles theme** → Store updates → localStorage saves → Theme applies
6. **User submits form** → Form validates → API call → Feedback shown

### Component Relationships

```
App.vue (Root)
├── Header.vue
│   ├── router-link (navigation)
│   └── DarkModeToggle.vue
│       └── themeStore.toggleTheme()
├── router-view (dynamic)
│   ├── AboutView.vue
│   ├── ResumeView.vue
│   │   └── TimelineItem.vue (multiple)
│   ├── ProjectsView.vue
│   │   └── ProjectCard.vue (in carousel)
│   ├── HobbiesView.vue
│   │   └── HobbyTab.vue
│   └── ContactView.vue
│       └── ContactForm.vue
└── Footer.vue

themeStore (Pinia)
└── Used by: App.vue, DarkModeToggle.vue

router (Vue Router)
└── Used by: App.vue, Header.vue
```

### Data Flow

**Theme State**:
```
DarkModeToggle → themeStore.toggleTheme() → isDark updates →
localStorage saves → watch triggers → applyTheme() →
document.documentElement.classList updates →
Tailwind dark: classes activate → UI updates
```

**Navigation**:
```
Header router-link click → router.push() →
URL changes → router matches route →
Old view unmounts (fade out) →
New view mounts (fade in) →
Active route highlighting updates
```

**Form Submission**:
```
User input → v-model updates →
Submit click → handleSubmit() →
Validation → fetch() to Formspree →
Response handling → UI feedback →
Form reset (on success)
```

---

## Future Enhancements

### Potential Improvements

1. **Content Management**:
   - Move static content to JSON files or CMS
   - Add content editing interface
   - Version control for content changes

2. **Performance**:
   - Lazy load routes
   - Optimize images (WebP, lazy loading)
   - Add service worker for offline support

3. **Features**:
   - Blog section
   - Project filtering/tagging
   - Search functionality
   - Analytics integration

4. **Developer Experience**:
   - Add TypeScript
   - Add unit tests (Vitest)
   - Add E2E tests (Playwright)
   - Add Storybook for component development

5. **SEO**:
   - Add SSR (Nuxt.js)
   - Dynamic meta tags
   - Sitemap generation
   - Structured data (JSON-LD)

---

## Conclusion

This architecture provides a solid foundation for a modern, maintainable portfolio website. The component-based structure, clear separation of concerns, and thoughtful use of Vue 3 features create a codebase that is both performant and easy to extend.

The minimal design philosophy is reflected not just in the UI, but in the codebase itself: no unnecessary abstractions, clear patterns, and straightforward implementations. This makes the code easy to understand, modify, and maintain.

---

*Document generated: 2024*
*Last updated: After Contact page migration*

