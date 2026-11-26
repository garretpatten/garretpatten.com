<template>
  <div class="w-full max-w-4xl mx-auto">
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

      <ol class="space-y-3">
        <li
          v-for="(contribution, index) in contributions"
          :key="contribution.name"
        >
          <ContributionCard :contribution="contribution" :rank="index + 1" />
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
    verifier: "Semgrep rules · merged #3085",
    description:
      "Authored the Apex and VisualForce ruleset accepted into Semgrep's SAST rules — live for Salesforce Apex and VisualForce scanning.",
    attribution: {
      text: "Contributed under my work GitHub account,",
      account: "garret-at-ncino",
    },
    primaryUrl: "https://github.com/semgrep/semgrep-rules/pull/3085",
  },
  {
    name: "system-scripts in the Xerj Corpus Hub",
    verifier: "Xerj Corpus Hub · selected",
    description:
      "A module from my system-scripts repository, selected and pinned by the Hub as signed corpora that AI coding agents search as reference memory.",
    primaryUrl: "https://hub.xerj.org/contributors/garretpatten",
    secondaryUrl: "https://github.com/garretpatten/system-scripts",
    secondaryLabel: "system-scripts repository",
  },
  {
    name: "Google MCP Server (Calendar and Tasks)",
    verifier: "M8ven Trust Index · verified publisher",
    description:
      "My Google Calendar and Tasks MCP server, listed on the M8ven Trust Index as a verified publisher — an independent catalog of MCP servers.",
    primaryUrl: "https://m8ven.ai/mcp/garretpatten/google-mcp-server",
    secondaryUrl: "https://github.com/garretpatten/google-mcp-server",
    secondaryLabel: "google-mcp-server repository",
  },
];
</script>
