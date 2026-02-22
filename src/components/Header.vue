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
        <a
          href="https://github.com/garretpatten"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-pine-400 transition-colors duration-200"
          aria-label="GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/garretpatten"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-pine-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
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
      class="fixed right-0 w-[80%] bg-white dark:bg-gray-900 shadow-xl z-40 md:hidden overflow-y-auto border-l border-gray-200 dark:border-gray-800"
    >
      <div class="flex flex-col items-center gap-4 pt-8 px-6 pb-6">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          @click="closeMenu"
          class="text-xl font-medium transition-colors duration-200 py-3 text-center w-full"
          :class="{
            'text-navy-600 dark:text-pine-400 border-b-2 border-navy-600 dark:border-pine-400': $route.path === route.path,
            'text-gray-600 dark:text-gray-400': $route.path !== route.path
          }"
        >
          {{ route.name }}
        </router-link>
        <div class="pt-2 w-full flex justify-center items-center gap-4">
          <a
            href="https://github.com/garretpatten"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-pine-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/garretpatten"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-pine-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
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
  { path: '/hobbies', name: 'Hobbies' }
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
  transition: opacity 0.1s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Mobile menu slide-in from right */
.mobile-menu-enter-active {
  transition: transform 0.1s ease;
}

.mobile-menu-leave-active {
  transition: transform 0.1s ease;
}

.mobile-menu-enter-from {
  transform: translateX(100%);
}

.mobile-menu-leave-to {
  transform: translateX(100%);
}
</style>

