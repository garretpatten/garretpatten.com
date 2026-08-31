<template>
  <div class="rounded-lg p-6 bg-gray-900/90 border border-gray-700">
    <h3 class="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
      <HobbyIcon :hobby-id="hobby.id" icon-class="w-6 h-6 text-cobalt-400" />
      {{ hobby.title }}
    </h3>
    <div class="prose prose-base dark:prose-invert max-w-none">
      <p
        v-for="(paragraph, index) in hobby.content"
        :key="index"
        class="text-lg text-gray-300 mb-4"
      >
        {{ paragraph }}
      </p>

      <ul
        v-if="hobby.list"
        class="list-disc list-inside space-y-2 text-lg text-gray-300"
      >
        <li v-for="(item, index) in hobby.list" :key="index">
          {{ item }}
        </li>
      </ul>

      <div v-if="hobby.currently" class="mt-4 p-4 bg-gray-800 rounded-lg">
        <p class="text-base font-semibold text-gray-100 mb-1">Currently:</p>
        <p class="text-base text-gray-300">
          {{ hobby.currently }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HobbyIcon from "./HobbyIcon.vue";

defineProps({
  hobby: {
    type: Object,
    required: true,
  },
});
</script>
