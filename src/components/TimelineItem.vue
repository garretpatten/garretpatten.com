<template>
  <div class="relative my-8 pl-8 first:mt-0 last:mb-0">
    <!-- Timeline line -->
    <div
      class="absolute left-3 top-6 bottom-0 w-0.5 bg-cobalt-400 last:hidden"
    ></div>

    <!-- Timeline dot -->
    <div
      class="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-cobalt-400 bg-gray-950"
    ></div>

    <div>
      <div
        class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3"
      >
        <div>
          <h3 class="font-heading text-lg font-semibold text-gray-100">
            {{ item.role }}
          </h3>
          <p class="font-sans text-sm text-gray-300">
            {{ item.company
            }}<span v-if="item.location"> · {{ item.location }}</span>
          </p>
        </div>
        <span class="font-mono text-sm text-cobalt-400 whitespace-nowrap">
          {{ item.start }} – {{ item.end }}
        </span>
      </div>

      <ul
        v-if="item.bullets && item.bullets.length"
        class="font-sans list-disc list-inside space-y-1 text-md text-gray-300 marker:text-cobalt-400 ml-2"
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
});
</script>
