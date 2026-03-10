import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(false);
  let isInitialized = false;

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark", isDark.value);
  };

  const initTheme = () => {
    if (isInitialized) return;
    isInitialized = true;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    isDark.value = mq.matches;
    applyTheme();

    mq.addEventListener("change", (event) => {
      isDark.value = event.matches;
      applyTheme();
    });
  };

  return {
    isDark,
    initTheme,
  };
});
