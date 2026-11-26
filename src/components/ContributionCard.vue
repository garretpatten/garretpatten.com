<template>
  <article
    class="flex items-start gap-3 rounded-md border border-gray-700 bg-gray-900/90 p-3 transition-shadow duration-[230ms] hover:shadow-lg"
  >
    <span
      aria-hidden="true"
      class="mt-0.5 shrink-0 font-mono text-sm text-cobalt-400"
    >
      {{ rankLabel }}
    </span>

    <div class="min-w-0 flex-1">
      <a
        :href="contribution.primaryUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="interactive-focus font-sans text-sm font-semibold text-cobalt-300 hover:text-cobalt-100 transition-colors duration-[230ms]"
      >
        {{ contribution.name }}
      </a>

      <p class="mt-1 font-mono text-xs text-gray-400">
        {{ contribution.verifier }}
      </p>

      <p class="mt-2 font-sans text-sm leading-normal text-gray-300">
        {{ contribution.description }}
      </p>

      <p
        v-if="contribution.attribution"
        class="mt-2 font-sans text-xs text-gray-400"
      >
        {{ contribution.attribution.text }}
        <a
          :href="`https://github.com/${contribution.attribution.account}`"
          target="_blank"
          rel="noopener noreferrer"
          class="interactive-focus text-cobalt-300 underline hover:text-cobalt-100 transition-colors duration-[230ms]"
        >
          {{ contribution.attribution.account }}</a>.
      </p>

      <footer v-if="contribution.secondaryUrl" class="mt-3 font-sans text-sm">
        <a
          :href="contribution.secondaryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="interactive-focus text-gray-400 hover:text-cobalt-300 transition-colors duration-[230ms]"
        >
          {{ contribution.secondaryLabel }}
        </a>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  contribution: {
    type: Object,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
});

// Zero-padded ledger rank; the ordered list carries the semantics.
const rankLabel = computed(() => String(props.rank).padStart(2, "0"));
</script>
