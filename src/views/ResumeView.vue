<template>
  <div class="max-w-4xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">Resume</h1>

    <!-- Summary Section -->
    <section class="mb-12 soft-enter">
      <h2
        class="text-2xl font-semibold uppercase tracking-wider text-cobalt-400 mb-4"
      >
        Summary
      </h2>
      <p class="text-lg font-sans text-gray-300 leading-relaxed">
        I am a systems-oriented security leader with a builder's mindset and eight
        years of experience at a global, publicly traded FinTech company that supports
        over 2,700 financial institutions across more than 20 countries. I architect
        secure pipelines, enable developers, and scale security as a shared responsibility.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="mb-12 soft-enter soft-enter-delay-1">
      <h2
        class="text-2xl font-semibold uppercase tracking-wider text-cobalt-400 mb-4"
      >
        Skills
      </h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in sortedSkills"
          :key="skill"
          :class="[
            'font-mono rounded-full border-2 bg-gray-900/90 px-2.5 py-1 text-sm font-medium text-gray-200 border-cobalt-500/70',
          ]"
        >
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mb-12">
      <h2
        class="text-2xl font-semibold uppercase tracking-wider text-cobalt-400 mb-6"
      >
        Experience
      </h2>
      <div class="relative">
        <TimelineItem
          v-for="(exp, index) in experience"
          :key="`${exp.role}-${exp.company}-${index}`"
          :item="exp"
        />
      </div>
    </section>

    <!-- Education Section -->
    <section class="soft-enter soft-enter-delay-2">
      <h2
        class="text-2xl font-semibold uppercase tracking-wider text-cobalt-400 mb-6"
      >
        Education
      </h2>
      <div class="space-y-6">
        <div
          v-for="(edu, index) in education"
          :key="`${edu.school}-${index}`"
        >
          <div
            class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2"
          >
            <h3 class="font-heading text-xl font-semibold text-gray-100">
              {{ edu.school }}
            </h3>
            <span class="font-mono text-base text-cobalt-400 whitespace-nowrap">
              {{ edu.end }}
            </span>
          </div>
          <p class="font-sans text-lg text-gray-300 mb-2">
            {{ edu.degree }}
          </p>
          <p v-if="edu.details" class="font-sans text-base text-gray-400">
            {{ edu.details }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import TimelineItem from "../components/TimelineItem.vue";

const skills = [
  "Application Security",
  "CI/CD Pipeline Design & Security",
  "Developer Enablement & Security Awareness",
  "GitHub & GitLab Enterprise Administration",
  "OWASP Top 10",
  "Penetration Testing",
  "Product Development",
  "Risk Mitigation",
  "SAST",
  "DAST",
  "Secrets Scanning",
  "SBOM",
  "Shift-Left Security Practices",
  "SSDLC",
  "Supply Chain Security",
  "Threat Modeling",
];

const sortedSkills = computed(() =>
  [...skills].sort((a, b) => a.localeCompare(b))
);

const experience = [
  {
    role: "Senior Security Engineer",
    company: "nCino, Inc.",
    start: "Jun 2024",
    end: "Present",
    bullets: [
      "Lead Product Security for a 5-person team, prioritizing and synchronizing deliverables across global divisions.",
      "Co-author the security engineering roadmap and serve as the primary technical escalation point and acting team lead.",
      "Architected automated security governance for 3,000+ repositories via GitHub Actions to enforce SSDLC standards and self-service provisioning.",
      "Hardened the software supply chain through package registry proxies, runtime configuration enforcement, and SBOM generation.",
      "Built automated license-compliance pipelines for Node.js dependencies to reduce regulatory friction.",
      "Lead complex security reviews across product lines to embed security champions and eliminate vulnerabilities before production.",
    ],
  },
  {
    role: "Security Engineer",
    company: "nCino, Inc.",
    start: "May 2022",
    end: "Jun 2024",
    bullets: [
      "Established enterprise-wide code-ownership enforcement in CI/CD pipelines to ensure auditable accountability and peer-reviewed deployments.",
      "Deployed Sourcegraph and DefectDojo to centralize security insights and drive executive-level, data-backed code-health metrics.",
      "Authored and open-sourced a Semgrep ruleset for Salesforce Apex/VisualForce to close a critical gap in SAST ecosystem support.",
      "Conducted targeted penetration tests on core products and corporate web assets to remediate high-impact attack vectors.",
      "Launched security office hours and support channels to scale expert consultation across the organization without increasing headcount.",
    ],
  },
  {
    role: "Software Engineer",
    company: "nCino, Inc.",
    start: "Feb 2020",
    end: "May 2022",
    bullets: [
      "Developed mission-critical features for a global production platform used by the world's largest financial institutions.",
      "Engineered an online application for PPP that millions of business owners used to maintain operations during the COVID-19 pandemic.",
      "Designed and deployed external permissions management systems that enforced least privilege and reduced manual configuration.",
      "Led the transition to WCAG 2.0 AA compliance and codified accessibility standards into the global development guide.",
      "Mentored junior engineers through rapid organizational scaling with a focus on secure development and scalable architecture.",
    ],
  },
  {
    role: "Associate Software Engineer / QA Intern",
    company: "nCino, Inc.",
    start: "Jun 2017",
    end: "Feb 2020",
    bullets: [
      "Built automated UI and API test suites for a cloud banking platform, reducing regression cycles and raising release confidence.",
      "Earned a full-time engineering role by demonstrating strong debugging, customer focus, and rapid technical growth.",
    ],
  },
];

const education = [
  {
    school: "Boston College, Carroll School of Management",
    degree:
      "Bachelor of Science in Business Management; Concentration in Finance; Minor in Computer Science",
    end: "Aug 2014 - May 2018",
  },
];
</script>
