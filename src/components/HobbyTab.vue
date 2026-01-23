<template>
  <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      {{ hobby.title }}
    </h3>
    <div class="prose prose-sm dark:prose-invert max-w-none">
      <p
        v-for="(paragraph, index) in hobby.content"
        :key="index"
        class="text-gray-700 dark:text-gray-300 mb-4"
      >
        {{ paragraph }}
      </p>

      <ul v-if="hobby.list" class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li v-for="(item, index) in hobby.list" :key="index">
          {{ item }}
        </li>
      </ul>

      <div v-if="hobby.currently" class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Currently:
        </p>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ hobby.currently }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hobby: {
    type: Object,
    required: true
  }
})
</script>

