<template>
  <header class="border-b border-gray-200 dark:border-gray-800 mb-8 pb-6">
    <!-- Mobile Header: Logo and Hamburger -->
    <div class="flex items-center justify-between md:hidden">
      <router-link to="/" class="hover:opacity-80 transition-opacity duration-200">
        <img
          src="/cropped-monogram-gray.png"
          alt="Garret Patten"
          class="h-10 w-auto"
        />
      </router-link>

      <button
        @click="toggleMenu"
        class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-pine-500 rounded-md transition-colors duration-200"
        aria-label="Toggle menu"
        aria-expanded="isMenuOpen"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Desktop Header: Logo and Nav -->
    <div class="hidden md:flex md:items-center md:justify-between gap-4">
      <router-link to="/" class="hover:opacity-80 transition-opacity duration-200">
        <img
          src="/cropped-monogram-gray.png"
          alt="Garret Patten"
          class="h-12 w-auto"
        />
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

    <!-- Mobile Menu: Navigation Links -->
    <Transition name="mobile-menu">
      <nav
        v-if="isMenuOpen"
        class="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
      >
        <div class="flex flex-col items-end gap-4">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            @click="closeMenu"
            class="text-sm font-medium transition-colors duration-200 py-2 text-right"
            :class="{
              'text-navy-600 dark:text-pine-400 border-r-4 border-navy-600 dark:border-pine-400 pr-3': $route.path === route.path,
              'text-gray-600 dark:text-gray-400 pr-3': $route.path !== route.path
            }"
          >
            {{ route.name }}
          </router-link>
          <div class="pt-2 pr-3">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import DarkModeToggle from './DarkModeToggle.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const routes = ref([
  { path: '/about', name: 'About' },
  { path: '/resume', name: 'Resume' },
  { path: '/projects', name: 'Projects' },
  { path: '/hobbies', name: 'Hobbies' },
  { path: '/contact', name: 'Contact' }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu when route changes
watch(() => route.path, () => {
  closeMenu()
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>

