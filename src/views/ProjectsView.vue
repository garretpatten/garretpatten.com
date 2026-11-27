<template>
  <div class="w-full max-w-5xl mx-auto">
    <h1 class="sr-only">Projects</h1>

    <section>
      <ul
        class="grid grid-cols-1 gap-3 auto-rows-[minmax(min-content,1fr)] md:grid-cols-2"
      >
        <li v-for="project in projects" :key="project.name">
          <ProjectCard :project="project" />
        </li>
      </ul>

      <p class="mt-6 text-sm text-gray-300 text-center">
        Want to see more? Check out the rest of my projects on GitHub — the link
        is in the main navigation.
      </p>
    </section>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";

const projects = [
  {
    name: "Backup Manager",
    description:
      "TypeScript backup tooling: GitHub repository archives, GitLab mirrors, Notion and Obsidian exports, browser bookmarks, and Google service exports, run individually or through one orchestrator.",
    github: "https://github.com/garretpatten/backup-manager",
    language: "TypeScript",
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
    name: "finandnance.com",
    description:
      "Source for finandnance.com — Vue 3 portfolio SPA with Vite, Tailwind CSS, Vue Router, and Pinia. Deployed on Cloudflare Pages.",
    github: "https://github.com/garretpatten/finandnance.com",
    language: "Vue",
  },
  {
    name: "garretpatten.com",
    description:
      "Source for garretpatten.com — Vue 3 portfolio SPA with Vite, Tailwind CSS, Vue Router, and Pinia. Deployed on Cloudflare Pages.",
    github: "https://github.com/garretpatten/garretpatten.com",
    language: "Vue",
  },
  {
    name: "GitHub Standards",
    description:
      "Canonical source of truth for Garret Patten's GitHub repository standards.",
    github: "https://github.com/garretpatten/github-standards",
    language: "Markdown",
  },
  {
    name: "Google MCP Server",
    description:
      "Model Context Protocol server for Google Calendar and Google Tasks (read/write) using my published Google OAuth app; consumed by opencode.",
    github: "https://github.com/garretpatten/google-mcp-server",
    language: "TypeScript",
    relatedPath: "/contributions",
    relatedLabel: "Also on the Contributions page",
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
      "Reusable GitHub Actions for pull requests: opt-in linters on changed files (Prettier, markdownlint, yamllint, Ruff, and more) plus axe-core and Lighthouse accessibility audits.",
    github: "https://github.com/garretpatten/quality-checks",
    language: "Shell",
  },
  {
    name: "Security Guardrails",
    description:
      "Reusable GitHub Actions guardrails for pull requests: OpenGrep SAST, verified TruffleHog secrets, dependency review, and Trivy supply-chain checks — high signal, low noise.",
    github: "https://github.com/garretpatten/security-guardrails",
    language: "YAML",
  },
  {
    name: "System Scripts",
    description:
      "Personal macOS/Linux automation: GitHub security reports, repository clone/sync utilities, Google Takeout export flattening, runtime package-manager settings, and tmux session management. Incubates small automation concepts until they graduate into their own repositories, replaced by submodules (backups graduated to backup-manager).",
    github: "https://github.com/garretpatten/system-scripts",
    language: "Shell",
    relatedPath: "/contributions",
    relatedLabel: "Also on the Contributions page",
  },
  {
    name: "Ubuntu Setup Scripts",
    description:
      "Bash automation for Ubuntu: APT package installs, GNOME defaults, shell/terminal configuration, and optional dotfiles—modular install and config workflows with GitHub Actions CI.",
    github: "https://github.com/garretpatten/ubuntu-setup-scripts",
    language: "Shell",
  },
];
</script>
