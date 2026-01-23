<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 pb-8">
    <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
      © {{ currentYear }} Garret Patten. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

