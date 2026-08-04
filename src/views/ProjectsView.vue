<template>
  <div class="max-w-5xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">Projects</h1>

    <section aria-labelledby="projects-grid-heading" class="soft-enter">
      <h2
        id="projects-grid-heading"
        class="mb-6 text-2xl font-semibold uppercase tracking-wider text-cobalt-400"
      >
        Projects
      </h2>

      <ul
        class="grid grid-cols-1 gap-4 sm:grid-cols-2"
        role="list"
      >
        <li v-for="project in projects" :key="project.name">
          <ProjectCard :project="project" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref([
  {
    name: "Arch Setup Scripts",
    description:
      "Bash automation for Arch Linux: Pacman/Yay package installs, shell/terminal configuration, OS defaults, and optional dotfiles—split into discrete install and config workflows with GitHub Actions CI.",
    github: "https://github.com/garretpatten/arch-setup-scripts",
    language: "Shell",
  },
  {
    name: "Codeowners Enforcer",
    description:
      "A TypeScript GitHub Action that blocks pull requests unless every changed file has an effective owner in .github/CODEOWNERS, making code reviews auditable and accountable.",
    github: "https://github.com/garretpatten/codeowners-enforcer",
    language: "TypeScript",
  },
  {
    name: "Dotfiles",
    description:
      "My personal dotfiles for Arch Linux, macOS, and Ubuntu; this repository serves as a submodule for the setup scripts repositories.",
    github: "https://github.com/garretpatten/dotfiles",
    language: "Lua",
  },
  {
    name: "Fedora Setup Scripts",
    description:
      "Bash automation for Fedora: DNF package installs, GNOME defaults, shell/terminal configuration, and optional dotfiles—modular install and config workflows with GitHub Actions CI.",
    github: "https://github.com/garretpatten/fedora-setup-scripts",
    language: "Shell",
  },
  {
    name: "garretpatten.com",
    description:
      "Source for garretpatten.com — Vue 3 portfolio SPA with Vite, Tailwind CSS, Vue Router, and Pinia. Deployed on Cloudflare Pages.",
    github: "https://github.com/garretpatten/garretpatten.com",
    language: "Vue",
  },
  {
    name: "macOS Setup Scripts",
    description:
      "Bash automation for macOS: Homebrew package installs, macOS defaults, shell/terminal configuration, and optional dotfiles—modular install and config workflows with GitHub Actions CI.",
    github: "https://github.com/garretpatten/macOS-setup-scripts",
    language: "Shell",
  },
  {
    name: "Quality Checks",
    description:
      "Reusable GitHub Actions for pull requests: opt-in linters on changed files (Prettier, markdownlint, yamllint, Ruff, and more) plus axe-core and Lighthouse accessibility audits to keep code consistent.",
    github: "https://github.com/garretpatten/quality-checks",
    language: "Shell",
  },
  {
    name: "Security Guardrails",
    description:
      "Reusable GitHub Actions guardrails for pull requests: OpenGrep SAST, verified TruffleHog secrets scanning, dependency review, and Trivy supply-chain checks—high signal, low noise.",
    github: "https://github.com/garretpatten/security-guardrails",
    language: "Shell",
  },
  {
    name: "System Scripts",
    description:
      "A collection of small utilities for day-to-day system maintenance: backups, cleanup, updates, and other tasks I would rather automate than remember.",
    github: "https://github.com/garretpatten/system-scripts",
    language: "Shell",
  },
  {
    name: "Ubuntu Setup Scripts",
    description:
      "Bash automation for Ubuntu: APT package installs, GNOME defaults, shell/terminal configuration, and optional dotfiles—modular install and config workflows with GitHub Actions CI.",
    github: "https://github.com/garretpatten/ubuntu-setup-scripts",
    language: "Shell",
  },
]);
</script>
