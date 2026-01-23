<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Header />

      <main class="mt-8">
        <Transition name="fade" mode="out-in">
          <router-view />
        </Transition>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style>
/* Fade transition for route changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>

