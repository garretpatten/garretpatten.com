<template>
  <article
    class="h-full flex flex-col rounded-md border border-gray-700 bg-gray-900/90 p-3 transition-shadow duration-[230ms] hover:shadow-lg"
  >
    <div class="mb-2 flex items-start gap-2">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        class="mt-0.5 h-4 w-4 shrink-0 text-cobalt-400"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path
          d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H8a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 8 6.5h2a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
        />
      </svg>
      <span class="min-w-0 font-sans text-sm font-semibold text-gray-100">
        {{ contribution.name }}
      </span>
    </div>

    <p
      class="flex-1 font-sans text-sm leading-normal text-gray-300"
      :class="contribution.attribution ? 'mb-2' : 'mb-3'"
    >
      {{ contribution.description }}
    </p>

    <p
      v-if="contribution.attribution"
      class="mb-3 font-sans text-xs text-gray-400"
    >
      {{ contribution.attribution }}
    </p>

    <footer
      class="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm"
    >
      <a
        :href="contribution.primaryUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="interactive-focus text-cobalt-300 hover:text-cobalt-100 transition-colors duration-[230ms]"
      >
        {{ contribution.primaryLabel }}
      </a>
      <a
        v-if="contribution.secondaryUrl"
        :href="contribution.secondaryUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="interactive-focus text-gray-400 hover:text-cobalt-300 transition-colors duration-[230ms]"
      >
        {{ contribution.secondaryLabel }}
      </a>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  contribution: {
    type: Object,
    required: true,
  },
});
</script>
