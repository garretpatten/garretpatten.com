<template>
  <footer class="border-t border-cobalt-200 dark:border-cobalt-800 mt-16 pt-8 pb-8">
    <p class="text-sm text-cobalt-800 dark:text-cobalt-200 text-center">
      © {{ currentYear }} Garret Patten. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
