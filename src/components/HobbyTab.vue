<template>
  <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
      <!-- Reading: Open Book -->
      <svg v-if="hobby.id === 'reading'" class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
      <!-- Genealogy: Leaf -->
      <svg v-else-if="hobby.id === 'genealogy'" class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 5c-6 0-10 2-13 5-2 3-3 6-2 10 4-1 7-2 10-4 4-3 6-7 5-11Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 20c4-4 9-10 15-15" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 20l-1 2" />
      </svg>
      <!-- Personal System Design: Gear -->
      <svg v-else-if="hobby.id === 'systems'" class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      <!-- Music: Musical Note -->
      <svg v-else-if="hobby.id === 'music'" class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
      <!-- Journaling: Notebook -->
      <svg v-else-if="hobby.id === 'journaling'" class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4V4Zm0 0a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2M8 8h4m-4 4h6m-6 4h4" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M20 6v14" />
      </svg>
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

