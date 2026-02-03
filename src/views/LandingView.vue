<template>
  <div class="max-w-4xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Garret Patten
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
        Senior Security Engineer & Software Engineer
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/resume"
          class="px-6 py-3 bg-navy-600 dark:bg-pine-500 text-white rounded-lg font-medium hover:bg-navy-700 dark:hover:bg-pine-600 transition-colors duration-200"
        >
          View Resume
        </router-link>
        <router-link
          to="/projects"
          class="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:border-navy-600 dark:hover:border-pine-500 transition-colors duration-200"
        >
          View Projects
        </router-link>
      </div>
    </section>

    <!-- Professional Summary -->
    <section class="mb-16">
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
        <!-- <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Summary
        </h2> -->
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          - Husband, father, and beagle owner living in Georgia.
        </p>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          - Engineer with a systems-minded, builder’s approach.
        </p>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          - Seven years of professional experience in product engineering, software development, and—most recently—security.
        </p>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          - Currently leading Product Security at nCino.
        </p>
      </div>
    </section>

    <!-- Core Expertise -->
    <!-- <section class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        Core Expertise
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Security Engineering
          </h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Security reviews & assessments</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Penetration testing</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>API security & OWASP Top 10</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Vulnerability management</span>
            </li>
          </ul>
        </div>

        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Developer Enablement
          </h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Shift-left security practices</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>SAST/DAST & secrets scanning</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>CI/CD pipeline security</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Security awareness programs</span>
            </li>
          </ul>
        </div>

        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Platform & Infrastructure
          </h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>GitHub Enterprise administration</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>GitHub Actions & workflows</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>SBOM generation & dependency management</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Third-party risk management</span>
            </li>
          </ul>
        </div>

        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Software Engineering
          </h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>JavaScript / Node.js</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Web accessibility (WCAG 2.0 AA)</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>System design & architecture</span>
            </li>
            <li class="flex items-start">
              <span class="text-navy-600 dark:text-pine-500 mr-2">•</span>
              <span>Secure development practices</span>
            </li>
          </ul>
        </div>
      </div>
    </section> -->

    <!-- Quick Links -->
    <!-- <section class="text-center">
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Learn more about my background, projects, and interests
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link
          to="/about"
          class="text-navy-600 dark:text-pine-500 hover:text-navy-700 dark:hover:text-pine-400 font-medium transition-colors duration-200"
        >
          About Me →
        </router-link>
        <span class="text-gray-400 dark:text-gray-600">•</span>
        <router-link
          to="/resume"
          class="text-navy-600 dark:text-pine-500 hover:text-navy-700 dark:hover:text-pine-400 font-medium transition-colors duration-200"
        >
          Resume →
        </router-link>
        <span class="text-gray-400 dark:text-gray-600">•</span>
        <router-link
          to="/projects"
          class="text-navy-600 dark:text-pine-500 hover:text-navy-700 dark:hover:text-pine-400 font-medium transition-colors duration-200"
        >
          Projects →
        </router-link>
        <span class="text-gray-400 dark:text-gray-600">•</span>
        <router-link
          to="/contact"
          class="text-navy-600 dark:text-pine-500 hover:text-navy-700 dark:hover:text-pine-400 font-medium transition-colors duration-200"
        >
          Contact →
        </router-link>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// Landing page content
</script>

