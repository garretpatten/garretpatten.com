<template>
  <div
    class="min-h-screen flex flex-col bg-gray-950 text-gray-100 transition-colors duration-[230ms]"
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

    <div
      class="container mx-auto px-6 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow flex flex-col"
    >
      <Header />

      <main
        id="main-content"
        tabindex="-1"
        class="mt-8 outline-none flex-grow flex flex-col"
      >
        <router-view v-slot="{ Component, route }">
          <Transition name="route-swap" mode="out-in" @after-enter="focusPageHeading">
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

/**
 * With `mode="out-in"`, the incoming view is mounted after the outgoing view
 * finishes its leave transition. `after-enter` therefore fires once the new
 * view is actually in the DOM, so focus lands on its heading instead of on
 * the removed element (which used to throw focus back to <body>).
 */
const focusPageHeading = (event) => {
  const view = event instanceof HTMLElement ? event : document.querySelector("main > div");
  const heading = view?.querySelector("h1");
  const target = heading ?? view;
  if (target instanceof HTMLElement) {
    target.focus({ preventScroll: true });
  }
};

</script>
