<template>
  <div class="max-w-4xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-16 soft-enter">
      <h1 class="text-5xl md:text-6xl font-bold text-gray-100 mb-4">
        Garret Patten
      </h1>
      <p class="text-xl md:text-2xl text-gray-300">Senior Security Engineer</p>
    </section>

    <!-- Value Proposition -->
    <section class="mb-16 soft-enter soft-enter-delay-1">
      <p
        class="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-2xl mx-auto"
      >
        Systems-minded security engineer with a builder's mindset. I design
        secure pipelines, drive developer enablement programs, and advocate for
        security as a shared organizational responsibility.
      </p>
    </section>

    <!-- Key Highlights -->
    <section
      class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 soft-enter soft-enter-delay-2"
    >
      <div class="text-center">
        <div class="text-3xl font-bold text-ruby-400 mb-2">8+</div>
        <div class="text-sm text-gray-400">Years Experience</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-torch-400 mb-2">3,000+</div>
        <div class="text-sm text-gray-400">Repositories Managed</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-cobalt-400 mb-2">300+</div>
        <div class="text-sm text-gray-400">Engineers Supported Globally</div>
      </div>
    </section>

    <!-- Calls to Action -->
    <section class="text-center mb-16 soft-enter soft-enter-delay-2">
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/resume"
          class="px-6 py-3 bg-sun-400 text-gray-950 hover:bg-sun-300 rounded-lg font-medium transition-colors duration-[230ms]"
        >
          View Resume
        </router-link>
        <router-link
          to="/projects"
          class="px-6 py-3 bg-gray-800 border-2 border-gray-600 text-gray-100 rounded-lg font-medium hover:border-cobalt-400 hover:bg-gray-800/90 transition-colors duration-[230ms]"
        >
          View Projects
        </router-link>
      </div>
    </section>
  </div>
</template>
