<template>
  <div class="max-w-5xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">Projects</h1>

    <section aria-labelledby="projects-grid-heading" class="soft-enter">
      <h2
        id="projects-grid-heading"
        class="mb-6 text-lg font-semibold uppercase tracking-wider text-forest-600"
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
      "Bash automation to provision a development-ready Arch: Pacman/Yay installs, Arch defaults, shell/terminal setup, and optional dotfiles—with separate install and config workflows and GitHub Actions CI.",
    github: "https://github.com/garretpatten/arch-setup-scripts",
    language: "Shell",
  },
  {
    name: "Codeowners Enforcer",
    description:
      "GitHub Action that enforces every changed file in a PR has an effective owner in .github/CODEOWNERS.",
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
      "Bash automation to provision a development-ready Fedora: Dnf installs, Fedora defaults, shell/terminal setup, and optional dotfiles—with separate install and config workflows and GitHub Actions CI.",
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
      "Bash automation to provision a development-ready Mac: Homebrew installs, macOS defaults, shell/terminal setup, and optional dotfiles—with separate install and config workflows and GitHub Actions CI.",
    github: "https://github.com/garretpatten/macOS-setup-scripts",
    language: "Shell",
  },
  {
    name: "Quality Checks",
    description:
      "Reusable GitHub Actions for pull requests: opt-in linters on changed files (Prettier, markdownlint, yamllint, Ruff, and more) plus axe-core and Lighthouse accessibility audits.",
    github: "https://github.com/garretpatten/quality-checks",
    language: "Shell",
  },
  {
    name: "Security Guardrails",
    description:
      "Reusable GitHub Actions guardrails for pull requests: OpenGrep SAST, verified TruffleHog secrets, dependency review, and Trivy supply-chain checks — high signal, low noise.",
    github: "https://github.com/garretpatten/security-guardrails",
    language: "Shell",
  },
  {
    name: "System Scripts",
    description:
      "A repository of scripts I use to automate tasks on my systems.",
    github: "https://github.com/garretpatten/system-scripts",
    language: "Shell",
  },
  {
    name: "Ubuntu Setup Scripts",
    description:
      "Bash automation to provision a development-ready Ubuntu: Apt installs, Ubuntu defaults, shell/terminal setup, and optional dotfiles—with separate install and config workflows and GitHub Actions CI.",
    github: "https://github.com/garretpatten/ubuntu-setup-scripts",
    language: "Shell",
  },
]);
</script>
