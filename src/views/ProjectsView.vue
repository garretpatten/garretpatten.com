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
    name: 'Project Alpha',
    description: 'A cool application that demonstrates modern web development practices with Vue 3, TypeScript, and Tailwind CSS. Features include real-time data synchronization and responsive design.',
    github: 'https://github.com/username/project-alpha'
  },
  {
    name: 'Security Scanner',
    description: 'Automated security scanning tool that integrates with CI/CD pipelines to detect vulnerabilities and enforce security policies across multiple repositories.',
    github: 'https://github.com/username/security-scanner'
  },
  {
    name: 'Accessibility Audit Tool',
    description: 'Web accessibility auditing tool that helps developers identify and fix WCAG compliance issues in their applications.',
    github: 'https://github.com/username/accessibility-audit'
  },
  {
    name: 'License Compliance Checker',
    description: 'GitHub Action that enforces third-party license policies against legal allow/deny lists, ensuring compliance across Node.js dependencies.',
    github: 'https://github.com/username/license-checker'
  },
  {
    name: 'Semgrep Ruleset',
    description: 'Open-source Semgrep ruleset for Salesforce Apex and VisualForce, helping developers identify security vulnerabilities and code quality issues.',
    github: 'https://github.com/username/semgrep-salesforce'
  },
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio website built with Vue 3, featuring dark mode, responsive design, and smooth page transitions.',
    github: 'https://github.com/username/portfolio'
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

