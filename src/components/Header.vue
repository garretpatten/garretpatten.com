<template>
  <header ref="headerRef" class="border-b border-gray-200 dark:border-gray-800 mb-8 pb-6 relative z-20">
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
        class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-pine-500 rounded-md transition-colors duration-200 relative z-50"
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
  </header>

  <!-- Mobile Menu Backdrop -->
  <Transition name="backdrop">
    <div
      v-if="isMenuOpen"
      @click="closeMenu"
      :style="{ top: `${headerBottom}px` }"
      class="fixed left-0 right-0 bottom-0 bg-black/50 dark:bg-black/70 z-30 md:hidden"
      aria-hidden="true"
    ></div>
  </Transition>

  <!-- Mobile Menu: Navigation Links -->
  <Transition name="mobile-menu">
    <nav
      v-if="isMenuOpen"
      :style="{ top: `${headerBottom}px`, height: `calc(100vh - ${headerBottom}px)` }"
      class="fixed right-0 w-[30%] bg-white dark:bg-gray-900 shadow-xl z-40 md:hidden overflow-y-auto border-l border-gray-200 dark:border-gray-800"
    >
      <div class="flex flex-col items-end gap-4 pt-6 pr-6 pb-6">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          @click="closeMenu"
          class="text-sm font-medium transition-colors duration-200 py-2 text-right w-full"
          :class="{
            'text-navy-600 dark:text-pine-400 border-r-4 border-navy-600 dark:border-pine-400 pr-3': $route.path === route.path,
            'text-gray-600 dark:text-gray-400 pr-3': $route.path !== route.path
          }"
        >
          {{ route.name }}
        </router-link>
        <div class="pt-2 pr-3 w-full flex justify-end">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import DarkModeToggle from './DarkModeToggle.vue'

const route = useRoute()
const isMenuOpen = ref(false)
const headerRef = ref(null)
const headerBottom = ref(0)

const updateHeaderBottom = () => {
  if (headerRef.value) {
    const rect = headerRef.value.getBoundingClientRect()
    headerBottom.value = rect.bottom
  }
}

onMounted(() => {
  updateHeaderBottom()
  window.addEventListener('resize', updateHeaderBottom)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeaderBottom)
})

// Update position when menu opens
watch(isMenuOpen, () => {
  if (isMenuOpen.value) {
    nextTick(() => {
      updateHeaderBottom()
    })
  }
})

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

// Lock/unlock body scroll when menu is open
watch(isMenuOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = ''
})

// Close menu when route changes
watch(() => route.path, () => {
  closeMenu()
})
</script>

<style scoped>
/* Backdrop transition */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.2s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Mobile menu slide-in from right */
.mobile-menu-enter-active {
  transition: transform 0.2s ease;
}

.mobile-menu-leave-active {
  transition: transform 0.2s ease;
}

.mobile-menu-enter-from {
  transform: translateX(100%);
}

.mobile-menu-leave-to {
  transform: translateX(100%);
}
</style>

