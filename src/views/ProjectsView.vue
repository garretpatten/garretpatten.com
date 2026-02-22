<template>
  <div class="max-w-6xl mx-auto">

    <!-- Projects Carousel -->
    <Carousel
      :items-to-show="itemsToShow"
      :wrap-around="true"
      :autoplay="6000"
      :pause-autoplay-on-hover="true"
      class="projects-carousel mb-12"
    >
      <Slide v-for="(project, index) in projects" :key="index">
        <div class="px-2">
          <ProjectCard :project="project" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <!-- Engineering Philosophy -->
    <section class="text-center max-w-2xl mx-auto">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
        Engineering Philosophy
      </h2>
      <div class="space-y-4">
        <div class="text-gray-700 dark:text-gray-300">
          <p class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">Simplicity is the apex of design</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Complexity signals incomplete understanding.</p>
        </div>
        <div class="text-gray-700 dark:text-gray-300">
          <p class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">Outcomes are the objective</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Implementations are transient and disposable.</p>
        </div>
        <div class="text-gray-700 dark:text-gray-300">
          <p class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">Quality is a prerequisite</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Security, correctness, and reliability are foundational requirements, not aspirations.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ProjectCard from '../components/ProjectCard.vue'

const itemsToShow = ref(1)

const updateItemsToShow = () => {
  if (window.innerWidth >= 1024) {
    itemsToShow.value = 3
  } else if (window.innerWidth >= 640) {
    itemsToShow.value = 2
  } else {
    itemsToShow.value = 1
  }
}

onMounted(() => {
  updateItemsToShow()
  window.addEventListener('resize', updateItemsToShow)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsToShow)
})

// Placeholder projects - replace with real content
const projects = ref([
  {
    name: 'Arch Setup Scripts',
    description: 'Scripts to automate the setup of my Arch Linux desktop environments (install packages, configure settings, and more).',
    github: 'https://github.com/garretpatten/arch-setup-scripts'
  },
  {
    name: 'Codeowner Verifier',
    description: 'A GitHub Action that verifies that modified files within a pull request are owned by code owners.',
    github: 'https://github.com/garretpatten/codeowner-verifier'
  },
  {
    name: 'Dotfiles',
    description: 'My personal dotfiles for Arch Linux, macOS, and Ubuntu; this repository serves as a submodule for the setup scripts repositories.',
    github: 'https://github.com/garretpatten/dotfiles'
  },
  {
    name: 'garretpatten.com',
    description: 'This portfolio website (built with Vue 3, Vite, Tailwind CSS, and Vue Router).',
    github: 'https://github.com/garretpatten/garretpatten.com'
  },
  {
    name: 'macOS Setup Scripts',
    description: 'Scripts to automate the setup of my macOS desktop environments (install packages, configure settings, and more).',
    github: 'https://github.com/garretpatten/macOS-setup-scripts'
  },
  {
    name: 'System Scripts',
    description: 'A repository of scripts I use to automate tasks on my systems.',
    github: 'https://github.com/garretpatten/system-scripts'
  },
  {
    name: 'Ubuntu Setup Scripts',
    description: 'Scripts to automate the setup of my Ubuntu desktop environments (install packages, configure settings, and more).',
    github: 'https://github.com/garretpatten/ubuntu-setup-scripts'
  }
])
</script>

<style scoped>
.projects-carousel {
  padding: 1rem 0;
}

/* Custom carousel navigation and pagination styling */
:deep(.carousel__prev),
:deep(.carousel__next) {
  color: rgb(29, 84, 109); /* navy-600/800 - #1D546D */
}

.dark :deep(.carousel__prev),
.dark :deep(.carousel__next) {
  color: rgb(6, 30, 41); /* pine-900 - #061E29 */
}

:deep(.carousel__pagination-button) {
  background-color: rgb(209, 213, 219); /* gray-300 */
}

.dark :deep(.carousel__pagination-button) {
  background-color: rgb(75, 85, 99); /* gray-600 */
}

:deep(.carousel__pagination-button--active) {
  background-color: rgb(29, 84, 109); /* navy-600/800 - #1D546D */
}

.dark :deep(.carousel__pagination-button--active) {
  background-color: rgb(6, 30, 41); /* pine-900 - #061E29 */
}
</style>

