<template>
  <header class="border-b border-gray-200 dark:border-gray-800 mb-8 pb-6">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <router-link to="/" class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 hover:text-navy-600 dark:hover:text-pine-400 transition-colors duration-200">
        Garret Patten
      </router-link>

      <nav class="flex items-center gap-4">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          class="text-sm font-medium transition-colors duration-200 hover:text-navy-600 dark:hover:text-pine-400"
          :class="{
            'text-navy-600 dark:text-pine-400 border-b-2 border-navy-600 dark:border-pine-400': $route.path === route.path,
            'text-gray-600 dark:text-gray-400': $route.path !== route.path
          }"
        >
          {{ route.name }}
        </router-link>
        <DarkModeToggle />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import DarkModeToggle from './DarkModeToggle.vue'

const routes = ref([
  { path: '/about', name: 'About' },
  { path: '/resume', name: 'Resume' },
  { path: '/projects', name: 'Projects' },
  { path: '/hobbies', name: 'Hobbies' },
  { path: '/contact', name: 'Contact' }
])
</script>

