<template>
  <div
    class="min-h-screen bg-gray-950 text-gray-100 transition-colors duration-[230ms]"
  >
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-gray-100 interactive-focus rounded-md"
    >
      Skip to main content
    </a>

    <div
      aria-live="polite"
      aria-atomic="true"
      class="sr-only"
    >
      {{ announcement }}
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Header />

      <main id="main-content" tabindex="-1" class="mt-8 outline-none">
        <router-view v-slot="{ Component, route }">
          <Transition name="route-swap" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
          </Transition>
        </router-view>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "./stores/theme";
import { useRouteAnnouncer } from "./composables/useRouteAnnouncer";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const themeStore = useThemeStore();
const { announcement } = useRouteAnnouncer();

themeStore.initTheme();
</script>
