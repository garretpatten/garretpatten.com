import { defineStore } from "pinia";

/**
 * Portfolio uses Gruvbox Dark Hard only (matches terminal); system theme is ignored.
 */
export const useThemeStore = defineStore("theme", () => {
  const initTheme = () => {
    document.documentElement.classList.add("dark");
  };

  return {
    initTheme,
  };
});
