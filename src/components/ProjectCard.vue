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
          d="M1.75 3.5A1.75 1.75 0 0 1 3.5 1.75h3.086a.75.75 0 0 1 .53.22L8.22 3.28a.75.75 0 0 0 .53.22h4.47A1.75 1.75 0 0 1 14.97 5.25v7.5a1.75 1.75 0 0 1-1.75 1.75H3.5a1.75 1.75 0 0 1-1.75-1.75v-9Z"
        />
      </svg>
      <div class="min-w-0 flex-1">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="interactive-focus truncate font-sans text-sm font-semibold text-cobalt-300 hover:text-cobalt-100 transition-colors duration-[230ms]"
        >
          {{ repoName }}
        </a>
        <span v-else class="truncate font-sans text-sm font-semibold text-gray-100">
          {{ repoName }}
        </span>
      </div>
    </div>

    <p class="mb-2 flex-1 font-sans text-sm leading-normal text-gray-300">
      {{ project.description }}
    </p>

    <footer
      v-if="project.language"
      class="font-sans text-sm text-gray-400"
    >
      <span class="inline-flex items-center gap-1.5">
        <span
          class="h-3 w-3 rounded-full"
          :class="{
            'bg-cobalt-500': project.language === 'Lua',
            'bg-cobalt-600': project.language === 'YAML',
            'bg-ruby-600': project.language === 'Shell',
            'bg-torch-500': project.language === 'TypeScript',
            'bg-sun-400': project.language === 'Vue',
            'bg-plum-600': project.language === 'Markdown',
          }"
          aria-hidden="true"
        />
        {{ project.language }}
      </span>
    </footer>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const repoName = computed(() => {
  const slug = props.project.github?.split("/").pop();
  return slug ?? props.project.name;
});
</script>
