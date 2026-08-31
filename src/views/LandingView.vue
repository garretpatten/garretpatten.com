<template>
  <div class="max-w-4xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-10 soft-enter">
      <h1 tabindex="-1" class="text-5xl md:text-6xl font-bold text-gray-100 mb-4 outline-none">
        Garret Patten
      </h1>
      <p class="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Husband and Father. Senior Security Engineer.
      </p>
    </section>

    <!-- Value Proposition -->
    <section class="mb-12 soft-enter soft-enter-delay-1">
      <p class="font-sans text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-2xl mx-auto">
        I like difficult problems and the work of solving them as simply as they allow—at work and in my personal life.
      </p>
    </section>

    <!-- Calls to Action -->
    <section class="text-center mb-12 soft-enter soft-enter-delay-2">
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/resume"
          class="interactive-focus px-6 py-3 bg-sun-400 text-gray-950 hover:bg-sun-300 rounded-lg font-medium transition-colors duration-[230ms]"
        >
          View Resume
        </router-link>
        <router-link
          to="/projects"
          class="interactive-focus px-6 py-3 bg-cobalt-400 text-gray-950 hover:bg-cobalt-300 rounded-lg font-medium transition-colors duration-[230ms]"
        >
          View Projects
        </router-link>
      </div>
    </section>
  </div>
</template>
