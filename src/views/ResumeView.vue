<template>
  <div class="max-w-4xl mx-auto">
    <!-- Summary Section -->
    <section class="mb-12">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
        Summary
      </h2>
      <div class="bg-gray-50 dark:bg-gray-900 border-l-4 border-navy-600 dark:border-pine-500 p-6 rounded-lg">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Systems-minded security engineer with a builder's mindset and seven years of experience spanning QA, software engineering, and security.
          I design secure pipelines and scalable processes, drive developer enablement programs, and advocate for security as a shared organizational responsibility.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mb-12">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
        Core Skills
      </h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in skills"
          :key="skill"
          class="px-3 py-1 text-sm bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
        >
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mb-12">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
        Experience
      </h2>
      <div class="relative">
        <TimelineItem
          v-for="(exp, index) in experience"
          :key="index"
          :item="exp"
        />
      </div>
    </section>

    <!-- Education Section -->
    <section>
      <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
        Education
      </h2>
      <div class="space-y-6">
        <div
          v-for="(edu, index) in education"
          :key="index"
          class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {{ edu.school }}
            </h3>
            <span class="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
              {{ edu.end }}
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-2">
            {{ edu.degree }}
          </p>
          <p v-if="edu.details" class="text-sm text-gray-500 dark:text-gray-500">
            {{ edu.details }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'

const skills = ref([
  'API Security',
  'CI/CD',
  'Dependency Management',
  'Developer Enablement',
  'GitHub Actions',
  'GitHub Enterprise',
  'GitLab CI/CD',
  'JavaScript / Node.js',
  'OWASP Top 10',
  'Penetration Testing',
  'Product Security',
  'SAST / DAST',
  'SBOM Generation',
  'SCA / License Compliance',
  'Secrets Scanning',
  'Security Engineering',
  'Security Reviews & Assessments',
  'Semgrep',
  'Shift-Left Security',
  'Sourcegraph',
  'Third-Party Risk Management',
  'Vulnerability Management',
  'Web Accessibility (WCAG 2.0 AA)'
])

const experience = ref([
  {
    role: 'Senior Security Engineer',
    company: 'nCino, Inc.',
    location: 'Remote',
    start: 'Jun 2024',
    end: 'Present',
    bullets: [
      'Technical lead for Product Security on a 4-person team; own prioritization of security assessments, coordinate deliverables across product and infrastructure, and serve as primary technical escalation point.',
      'Co-drive team roadmap and participate in hiring for security engineering roles; serve as senior point of contact during manager absences.',
      'Administer multi-org GitHub Enterprise (1k+ repos) and build automations with Actions/workflows for SAST, secrets scanning, docs publishing, repo provisioning, and team management.',
      'Implement SBOM generation and dependency management using the Orca platform.',
      'Built a GitHub Action/pipeline to enforce third-party Node.js license policy against legal allow/deny lists.',
      'Co-manage GitLab instance and security pipelines.',
      'Lead security reviews across products and infrastructure, partnering with engineering leadership to embed shift-left security practices and reduce defects reaching production.',
      'Drive security awareness org-wide through monthly technical content on OWASP Top 10 and API security, establishing Product Security as a developer enablement function.'
    ]
  },
  {
    role: 'Security Engineer',
    company: 'nCino, Inc.',
    location: 'Wilmington, NC',
    start: 'May 2022',
    end: 'Jun 2024',
    bullets: [
      'Established org-wide CI/CD code ownership enforcement.',
      'Rolled out static analysis and secrets scanning with real-time alerting.',
      'Deployed Sourcegraph and DefectDojo to drive vulnerability insights and code-health metrics.',
      'Authored and open-sourced a Semgrep ruleset for Salesforce Apex/VisualForce.',
      'Conducted penetration tests on products and the corporate site.',
      'Drove developer enablement via Product Security office hours and support channel, building trust with engineering teams and scaling security consultation without proportional headcount.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'nCino, Inc.',
    location: 'Wilmington, NC',
    start: 'Feb 2020',
    end: 'May 2022',
    bullets: [
      'Drove Customer Engagement toward near full WCAG 2.0 AA compliance through iterative audits and remediation.',
      'Led design and rollout of external permissions management, reducing manual config and enforcing least privilege.',
      'Contributed to design and delivery of an Integration Type package.',
      'Implemented features spanning credit pulls, deposit funding, ID document scanning, and SSO with enhanced JIT; shipped security and accessibility epics.',
      'Codified accessible development standards in the Development Guide.',
      'Mentored junior engineers on secure development practices and accessibility standards during rapid team scaling.'
    ]
  },
  {
    role: 'Associate Software Engineer',
    company: 'nCino, Inc.',
    location: 'Wilmington, NC',
    start: 'Jun 2018',
    end: 'Feb 2020',
    bullets: [
      'Led analysis and implementation of critical security updates.',
      'Contributed to feature development and system maintenance.',
      'Researched and evaluated potential technical solutions.'
    ]
  }
])

const education = ref([
  {
    school: 'Boston College',
    degree: 'B.S. in Business Management (Finance); Minor in Computer Science',
    end: '2018',
    details: 'Activities: Accelerate@Shea, BC Bigs (Big Brothers Big Sisters) Student Leader, Computer Science Society, Information Systems Academy, Investment Club'
  }
])
</script>

