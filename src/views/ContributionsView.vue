<template>
  <div class="w-full max-w-5xl mx-auto">
    <h1 class="sr-only">Contributions</h1>

    <section>
      <h2
        class="text-lg font-semibold uppercase tracking-wider text-cobalt-400 mb-4"
      >
        Open Source Contributions
      </h2>
      <p class="mb-6 text-sm text-gray-300">
        Work accepted into other open source projects and registries — each
        entry links to the live artifact.
      </p>

      <ol
        class="grid grid-cols-1 gap-3 auto-rows-[minmax(min-content,1fr)] md:grid-cols-2"
      >
        <li
          v-for="(contribution, index) in contributions"
          :key="contribution.name"
          :class="{ 'md:col-span-2': index === 0 }"
        >
          <ContributionCard :contribution="contribution" />
        </li>
      </ol>
    </section>
  </div>
</template>

<script setup>
import ContributionCard from "../components/ContributionCard.vue";

// Ordered by signal strength: upstream acceptance first, tooling last.
const contributions = [
  {
    name: "Apex/VisualForce Semgrep ruleset",
    description:
      "Authored the Apex and VisualForce ruleset accepted into Semgrep's SAST rules — live for Salesforce Apex and VisualForce scanning.",
    attribution: "Contributed under my work GitHub account, garret-at-ncino.",
    primaryUrl: "https://github.com/semgrep/semgrep-rules/pull/3085",
    primaryLabel: "Merged pull request #3085",
  },
  {
    name: "system-scripts in the Xerj Corpus Hub",
    description:
      "Contributed a module to system-scripts that was selected for the Xerj Corpus Hub — signed, pinned corpora that AI coding agents search as reference memory.",
    primaryUrl: "https://hub.xerj.org/contributors/garretpatten",
    primaryLabel: "Xerj contributor page",
    secondaryUrl: "https://github.com/garretpatten/system-scripts",
    secondaryLabel: "system-scripts repository",
  },
  {
    name: "Google MCP Server (Calendar and Tasks)",
    description:
      "Built an open-source MCP server for Google Calendar and Tasks on my published Google OAuth app; listed on the M8ven Trust Index as a verified publisher. Practical agent tooling rather than a novel project.",
    primaryUrl: "https://m8ven.ai/mcp/garretpatten/google-mcp-server",
    primaryLabel: "M8ven Trust Index listing",
    secondaryUrl: "https://github.com/garretpatten/google-mcp-server",
    secondaryLabel: "google-mcp-server repository",
  },
];
</script>
