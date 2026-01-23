import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Ensure proper base path for Cloudflare Pages
  base: '/',
  build: {
    // Explicitly set output directory
    outDir: 'dist',
    // Ensure proper module resolution in production
    rollupOptions: {
      output: {
        // Ensure consistent chunk naming
        manualChunks: undefined
      }
    }
  }
})

