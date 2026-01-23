<template>
  <div class="max-w-6xl mx-auto">
    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
      Projects
    </h2>

    <Carousel
      :items-to-show="itemsToShow"
      :wrap-around="true"
      :autoplay="3000"
      :pause-autoplay-on-hover="true"
      class="projects-carousel"
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
    description: 'Scripts to automate the setup of my Arch Linux desktop environments. Install packages, configure settings, and more.',
    github: 'https://github.com/garretpatten/arch-setup-scripts'
  },
  {
    name: 'Codeowner Verifier',
    description: 'A GitHub Action that verifies that modified files within a pull request are owned by code owners.',
    github: 'https://github.com/garretpatten/codeowner-verifier'
  },
  {
    name: 'Dotfiles',
    description: 'My personal dotfiles for Arch Linux, macOS, and Ubuntu; this files in this repository are a submodule of the setup scripts repositories.',
    github: 'https://github.com/garretpatten/dotfiles'
  },
  {
    name: 'macOS Setup Scripts',
    description: 'Scripts to automate the setup of my macOS desktop environments. Install packages, configure settings, and more.',
    github: 'https://github.com/garretpatten/macOS-setup-scripts'
  },
  {
    name: 'System Scripts',
    description: 'A repository of scripts I use to automate tasks on my systems.',
    github: 'https://github.com/garretpatten/system-scripts'
  },
  {
    name: 'Ubuntu Setup Scripts',
    description: 'Scripts to automate the setup of my Ubuntu desktop environments. Install packages, configure settings, and more.',
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
  color: rgb(30, 58, 138); /* navy-800 */
}

.dark :deep(.carousel__prev),
.dark :deep(.carousel__next) {
  color: rgb(6, 95, 70); /* pine-900 */
}

:deep(.carousel__pagination-button) {
  background-color: rgb(209, 213, 219); /* gray-300 */
}

.dark :deep(.carousel__pagination-button) {
  background-color: rgb(75, 85, 99); /* gray-600 */
}

:deep(.carousel__pagination-button--active) {
  background-color: rgb(30, 58, 138); /* navy-800 */
}

.dark :deep(.carousel__pagination-button--active) {
  background-color: rgb(6, 95, 70); /* pine-900 */
}
</style>

