<template>
  <div
    v-reveal="{ delay, distance: 14 }"
    class="relative pl-8 pb-8 last:pb-0"
    :class="{ 'reveal-peek': peek }"
  >
    <!-- Timeline line -->
    <div
      class="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 last:hidden"
    ></div>

    <!-- Timeline dot -->
    <div
      class="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
    ></div>

    <!-- Content card -->
    <div
      class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm"
    >
      <div
        class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3"
      >
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {{ item.role }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ item.company
            }}<span v-if="item.location"> · {{ item.location }}</span>
          </p>
        </div>
        <span
          class="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap"
        >
          {{ item.start }} – {{ item.end }}
        </span>
      </div>

      <ul
        v-if="item.bullets && item.bullets.length"
        class="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-2"
      >
        <li v-for="(bullet, index) in item.bullets" :key="index">
          {{ bullet }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
  peek: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.reveal.reveal-peek:not(.reveal-visible) {
  opacity: 0.4;
  transform: translate3d(0, 10px, 0);
}
</style>
