import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Portfolio uses Gruvbox Dark Hard only (matches terminal); system theme is ignored.
 */
export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(true);
  let isInitialized = false;

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark", isDark.value);
  };

  const initTheme = () => {
    if (isInitialized) return;
    isInitialized = true;

    isDark.value = true;
    applyTheme();
  };

  return {
    isDark,
    initTheme,
  };
});
