<template>
  <div class="max-w-4xl mx-auto">
    <!-- Summary Section -->
    <section class="mb-12 soft-enter">
      <h2
        class="text-sm font-semibold uppercase tracking-wider text-ruby-400 mb-4"
      >
        Summary
      </h2>
      <div class="bg-gray-900/90 border border-gray-700 rounded-xl p-6 md:p-8">
        <p class="text-gray-300 leading-relaxed">
          Systems-oriented security leader with a builder's mindset and eight
          years of experience at a global, publicly traded FinTech leader. I
          architect secure pipelines, drive developer enablement, and scale
          security as a shared organizational responsibility. I bridge the gap
          between core product engineering and enterprise-grade security
          orchestration.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mb-12 soft-enter soft-enter-delay-1">
      <h2
        class="text-sm font-semibold uppercase tracking-wider text-torch-400 mb-4"
      >
        Skills
      </h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="(skill, index) in skills"
          :key="skill"
          :class="[
            'rounded-full border-2 bg-gray-900/90 px-3.5 py-1.5 text-sm font-medium text-gray-200',
            skillAccentBorders[index % skillAccentBorders.length],
          ]"
        >
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mb-12">
      <h2
        class="text-sm font-semibold uppercase tracking-wider text-sun-400 mb-6"
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
        class="text-sm font-semibold uppercase tracking-wider text-cobalt-400 mb-6"
      >
        Education
      </h2>
      <div class="space-y-6">
        <div
          v-for="(edu, index) in education"
          :key="`${edu.school}-${index}`"
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-6"
        >
          <div
            class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2"
          >
            <h3 class="text-lg font-semibold text-gray-100">
              {{ edu.school }}
            </h3>
            <span class="text-sm text-cobalt-400 whitespace-nowrap">
              {{ edu.end }}
            </span>
          </div>
          <p class="text-gray-300 mb-2">
            {{ edu.degree }}
          </p>
          <p v-if="edu.details" class="text-sm text-gray-400">
            {{ edu.details }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TimelineItem from "../components/TimelineItem.vue";

/** Mirrors Landing stat accents: ruby, torch, cobalt — border-only on chips */
const skillAccentBorders = [
  "border-ruby-500/70",
  "border-torch-500/70",
  "border-cobalt-500/70",
];

const skills = [
  // "Apex",
  "Application Security",
  "Bash scripting",
  "CI/CD Pipeline Design & Security",
  "Cloud Computing",
  "CSS3",
  "Developer Enablement & Security Awareness",
  // "DefectDojo",
  "Docker",
  "Full-Stack Development",
  "GitHub Actions & Workflow Automation",
  "GitHub Enterprise Administration",
  "GitLab Administration",
  // "HTML5",
  "JavaScript",
  "Node.js",
  // "Opengrep",
  "Orca Security",
  "OWASP Top 10",
  "Penetration Testing",
  "Product Development",
  "Risk Mitigation",
  "SAST / DAST / Secrets Scanning",
  "SBOM & Software Supply Chain Security",
  // "Secure Software Development",
  // "Security Orchestration",
  "Semgrep",
  "Shift-Left Security Practices",
  "Software Supply Chain Security",
  "Sourcegraph",
  "SSDLC",
  "Threat Modeling",
  // "VisualForce",
];

const experience = [
  {
    role: "Senior Security Engineer",
    company: "nCino, Inc.",
    start: "June '24",
    end: "Current",
    bullets: [
      "Strategic Technical Leadership: Lead Product Security for a 4-person team to prioritize security assessments and synchronize deliverables across global divisions.",
      "Roadmap and Executive Support: Co-author the security engineering roadmap and serve as the primary technical escalation point and acting lead.",
      "Enterprise Security Orchestration: Architected automated security governance for 1,000+ repositories via GitHub Actions to enforce SSDLC standards and automated provisioning.",
      "Supply Chain Integrity: Hardened the software supply chain through SBOM generation and automated dependency management via Orca.",
      "Policy as Code: Engineered automated pipelines to enforce Node.js license compliance, which mitigated regulatory and compliance friction.",
      "Shift-Left Advocacy: Lead complex security reviews across diverse product lines to embed security champions and eliminate vulnerabilities pre-production.",
    ],
  },
  {
    role: "Security Engineer",
    company: "nCino, Inc.",
    start: "May 2022",
    end: "June '24",
    bullets: [
      "CI/CD Governance: Established enterprise-wide code ownership enforcement within CI/CD pipelines to ensure rigorous peer-reviewed deployments.",
      "Data-Driven Security: Deployed Sourcegraph and DefectDojo to centralize security insights and drive executive-level, data-backed code-health metrics.",
      "Open Source Contribution: Authored and open-sourced a Semgrep ruleset for Salesforce Apex/VisualForce to address critical ecosystem vulnerabilities.",
      "Offensive Operations: Conducted targeted penetration tests on core products and corporate web assets to remediate high-impact attack vectors.",
      "Scalable Consultation: Launched security office hours and support channels to scale expert consultation across the organization without increasing headcount.",
    ],
  },
  {
    role: "Software Engineer",
    company: "nCino, Inc.",
    start: "Feb 2020",
    end: "May 2022",
    bullets: [
      "High-Scale Product Architecture: Developed mission-critical features for a global production platform used by the world's largest financial institutions.",
      "Global Impact: Engineered the primary application that millions of business owners used to maintain operations during the COVID-19 pandemic.",
      "Access Control Design: Designed and deployed external permissions management systems that enforced least privilege and reduced manual configuration.",
      "Inclusive Engineering: Led the transition to WCAG 2.0 AA compliance and codified accessibility standards into the global development guide.",
      "Engineering Mentorship: Guided junior engineers through rapid organizational scaling with a focus on secure development and scalable architecture.",
    ],
  },
  {
    role: "Associate Software Engineer / QA Intern",
    company: "nCino, Inc.",
    start: "June '17",
    end: "Feb '20",
    bullets: [],
  },
];

const education = [
  {
    school: "Boston College, Carroll School of Management",
    degree:
      "Bachelor of Science in Business Management; Concentration in Finance; Minor in Computer Science",
    end: "Aug '14 - May '18",
  },
];
</script>
