<template>
  <div class="max-w-4xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-16 md:mb-16">
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Garret Patten
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
        Senior Security Engineer
      </p>
    </section>

    <!-- Value Proposition -->
    <section class="mb-16">
      <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-2xl mx-auto">
        Systems-minded security engineer with a builder's mindset. I design secure pipelines, drive developer enablement programs, and advocate for security as a shared organizational responsibility.
      </p>
    </section>

    <!-- Key Highlights -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div class="text-center">
        <div class="text-3xl font-bold text-navy-600 dark:text-pine-500 mb-2">7+</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-navy-600 dark:text-pine-500 mb-2">3,000+</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Repositories Managed</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-navy-600 dark:text-pine-500 mb-2">300+</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">Engineers Supported Globally</div>
      </div>
    </section>

    <!-- Calls to Action -->
    <section class="text-center mb-16">
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

    <!-- Focus Areas -->
    <!-- <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border-l-4 border-navy-600 dark:border-pine-500">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Security Engineering
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Security reviews, penetration testing, API security, and vulnerability management across products and infrastructure.
          </p>
        </div>
        <div class="p-6 border-l-4 border-navy-600 dark:border-pine-500">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Developer Enablement
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Shift-left security practices, CI/CD pipeline security, and security awareness programs that scale.
          </p>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// Landing page content
</script>

