import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    globals: false,
    setupFiles: ["src/test-setup.js"],
    include: ["src/**/__tests__/**/*.test.js"],
    coverage: {
      provider: "v8",
      include: ["src/**"],
      exclude: [
        "src/main.js",
        "src/assets/**",
      ],
    },
  },
});
