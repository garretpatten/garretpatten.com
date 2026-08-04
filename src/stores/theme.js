import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Portfolio uses the Retro 1976 dark theme (TGH Earth Brown shell); system theme is ignored.
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
