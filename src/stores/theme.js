import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const initTheme = () => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    isDark.value = mq.matches
    applyTheme()

    mq.addEventListener('change', (e) => {
      isDark.value = e.matches
      applyTheme()
    })
  }

  return {
    isDark,
    initTheme,
  }
})
