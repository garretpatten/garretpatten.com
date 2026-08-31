<template>
  <div
    class="w-full rounded-lg border border-gray-700 bg-gray-900/90 overflow-hidden transition-colors duration-[230ms]"
    :class="{ 'border-sun-400/50': isExpanded }"
  >
    <button
      type="button"
      class="w-full flex items-center justify-between gap-4 px-6 py-4 text-left rounded-lg transition-colors duration-[230ms] hover:bg-gray-800 focus-visible:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      @click="toggle"
      :aria-expanded="isExpanded"
      :aria-controls="`hobby-content-${hobby.id}`"
      :id="`hobby-heading-${hobby.id}`"
    >
      <span class="text-xl font-bold flex items-center gap-2" :class="titleClasses">
        <HobbyIcon :hobby-id="hobby.id" :icon-class="iconClasses" />
        {{ hobby.title }}
      </span>
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-gray-400 transition-transform duration-[230ms] flex-shrink-0"
        :class="{ 'rotate-180': isExpanded }"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition-all duration-[230ms] ease-out"
      leave-active-class="transition-all duration-[230ms] ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[2000px] opacity-100"
      leave-from-class="max-h-[2000px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-if="isExpanded"
        :id="`hobby-content-${hobby.id}`"
        role="region"
        :aria-labelledby="`hobby-heading-${hobby.id}`"
        class="px-6 pb-6 overflow-hidden"
      >
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

          <div v-if="hobby.currently" class="mt-4">
            <p class="text-base font-semibold text-gray-100 mb-1">Currently:</p>
            <p class="text-base text-gray-300">
              {{ hobby.currently }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from "vue";
import HobbyIcon from "./HobbyIcon.vue";

const props = defineProps({
  hobby: {
    type: Object,
    required: true,
  },
  isExpanded: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle"]);

const titleClasses = computed(() =>
  props.isExpanded ? "text-sun-400" : "text-gray-100"
);

const iconClasses = computed(() =>
  props.isExpanded
    ? "w-6 h-6 text-sun-400"
    : "w-6 h-6 text-cobalt-400"
);

const toggle = () => {
  emit("toggle");
};
</script>
