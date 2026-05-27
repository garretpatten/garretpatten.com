<template>
  <div class="max-w-5xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">Projects</h1>

    <section aria-labelledby="projects-grid-heading" class="soft-enter">
      <h2
        id="projects-grid-heading"
        class="mb-6 text-sm font-semibold uppercase tracking-wider text-forest-600"
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

    <section
      aria-labelledby="engineering-philosophy-heading"
      class="mt-16 text-center max-w-2xl mx-auto soft-enter soft-enter-delay-1"
    >
      <h2
        id="engineering-philosophy-heading"
        class="text-sm font-semibold uppercase tracking-wider text-torch-400 mb-6"
      >
        Engineering Philosophy
      </h2>
      <div class="space-y-4">
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="font-heading text-lg font-medium text-ruby-400 mb-1">
            Simplicity as a standard
          </p>
          <p class="font-sans text-sm text-gray-400 leading-relaxed">
            A design that needs a speech is usually hiding something.
          </p>
        </div>
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="font-heading text-lg font-medium text-sun-400 mb-1">
            Outcomes before artifacts
          </p>
          <p class="font-sans text-sm text-gray-400 leading-relaxed">
            What ships matters; how it was built can be replaced.
          </p>
        </div>
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="font-heading text-lg font-medium text-cobalt-400 mb-1">
            Quality without exception
          </p>
          <p class="font-sans text-sm text-gray-400 leading-relaxed">
            Security, correctness, and reliability are not negotiable once you
            admit they apply.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref([
  {
    name: "Codeowner Verifier",
    description:
      "A GitHub Action that verifies that modified files within a pull request are owned by code owners.",
    github: "https://github.com/garretpatten/codeowner-verifier",
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
      "This portfolio website (built with Vue 3, Vite, Tailwind CSS, and Vue Router).",
    github: "https://github.com/garretpatten/garretpatten.com",
    language: "Vue",
  },
  {
    name: "macOS Setup Scripts",
    description:
      "Scripts to automate the setup of my macOS desktop environments (install packages, configure settings, and more).",
    github: "https://github.com/garretpatten/macOS-setup-scripts",
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
      "Scripts to automate the setup of my Ubuntu desktop environments (install packages, configure settings, and more).",
    github: "https://github.com/garretpatten/ubuntu-setup-scripts",
    language: "Shell",
  },
]);
</script>
