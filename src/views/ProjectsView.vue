<template>
  <div class="max-w-5xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">Projects</h1>

    <section class="soft-enter">
      <ul
        class="grid grid-cols-1 gap-4 auto-rows-[minmax(min-content,1fr)] md:grid-cols-2"
        role="list"
      >
        <li v-for="project in projects" :key="project.name">
          <ProjectCard :project="project" />
        </li>
      </ul>

      <p class="mt-8 text-lg text-gray-300 text-center">
        Want to see more? Check out the rest of my projects on GitHub — the link is in the main navigation.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref([
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
