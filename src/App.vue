<template>
  <div
    class="min-h-screen bg-gradient-to-b from-cobalt-50/50 via-gray-50 to-iris-50/40 dark:from-[#1a1b2e] dark:via-[#1f2335] dark:to-[#272b40] transition-colors duration-[230ms]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Header />

      <main class="mt-8">
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
import { onMounted } from "vue";
import { useThemeStore } from "./stores/theme";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});
</script>
