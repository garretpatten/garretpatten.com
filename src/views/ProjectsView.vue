<template>
  <div class="max-w-6xl mx-auto">
    <!-- Projects Carousel -->
    <Carousel
      :items-to-show="itemsToShow"
      :wrap-around="true"
      :autoplay="6000"
      :pause-autoplay-on-hover="true"
      class="projects-carousel mb-12 soft-enter"
    >
      <Slide v-for="project in projects" :key="project.name">
        <div class="px-2">
          <ProjectCard :project="project" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <!-- Engineering Philosophy -->
    <section
      class="text-center max-w-2xl mx-auto soft-enter soft-enter-delay-1"
    >
      <h2
        class="text-sm font-semibold uppercase tracking-wider text-torch-400 mb-6"
      >
        Engineering Philosophy
      </h2>
      <div class="space-y-4">
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="text-lg font-medium text-ruby-400 mb-1">
            Simplicity is the apex of design
          </p>
          <p class="text-sm text-gray-400 leading-relaxed">
            Complexity signals incomplete understanding.
          </p>
        </div>
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="text-lg font-medium text-sun-400 mb-1">
            Outcomes are the objective
          </p>
          <p class="text-sm text-gray-400 leading-relaxed">
            Implementations are transient and disposable.
          </p>
        </div>
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="text-lg font-medium text-cobalt-400 mb-1">
            Quality is a prerequisite
          </p>
          <p class="text-sm text-gray-400 leading-relaxed">
            Security, correctness, and reliability are foundational
            requirements, not aspirations.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import ProjectCard from "../components/ProjectCard.vue";

const itemsToShow = ref(1);

const updateItemsToShow = () => {
  if (window.innerWidth >= 1024) {
    itemsToShow.value = 3;
  } else if (window.innerWidth >= 640) {
    itemsToShow.value = 2;
  } else {
    itemsToShow.value = 1;
  }
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
});

const projects = ref([
  {
    name: "Arch Setup Scripts",
    description:
      "Scripts to automate the setup of my Arch Linux desktop environments (install packages, configure settings, and more).",
    github: "https://github.com/garretpatten/arch-setup-scripts",
  },
  {
    name: "Codeowner Verifier",
    description:
      "A GitHub Action that verifies that modified files within a pull request are owned by code owners.",
    github: "https://github.com/garretpatten/codeowner-verifier",
  },
  {
    name: "Dotfiles",
    description:
      "My personal dotfiles for Arch Linux, macOS, and Ubuntu; this repository serves as a submodule for the setup scripts repositories.",
    github: "https://github.com/garretpatten/dotfiles",
  },
  {
    name: "garretpatten.com",
    description:
      "This portfolio website (built with Vue 3, Vite, Tailwind CSS, and Vue Router).",
    github: "https://github.com/garretpatten/garretpatten.com",
  },
  {
    name: "macOS Setup Scripts",
    description:
      "Scripts to automate the setup of my macOS desktop environments (install packages, configure settings, and more).",
    github: "https://github.com/garretpatten/macOS-setup-scripts",
  },
  {
    name: "System Scripts",
    description:
      "A repository of scripts I use to automate tasks on my systems.",
    github: "https://github.com/garretpatten/system-scripts",
  },
  {
    name: "Ubuntu Setup Scripts",
    description:
      "Scripts to automate the setup of my Ubuntu desktop environments (install packages, configure settings, and more).",
    github: "https://github.com/garretpatten/ubuntu-setup-scripts",
  },
]);
</script>

<style scoped>
.projects-carousel {
  padding: 1rem 0;
}

/* Pagination pills render on ::after, not the button element */
:deep(.carousel__pagination-button::after) {
  background-color: rgb(189, 174, 147); /* gray-300 — Gruvbox fg3 */
}

.dark :deep(.carousel__pagination-button::after) {
  background-color: rgb(124, 111, 100); /* gray-600 */
}

:deep(.carousel__pagination-button--active::after) {
  background-color: rgb(149, 84, 113); /* iris-700 */
}

.dark :deep(.carousel__pagination-button--active::after) {
  background-color: rgb(249, 224, 144); /* sun-300 */
}

:deep(
  .carousel__pagination-button:hover:not(
      .carousel__pagination-button--active
    )::after
) {
  background-color: rgb(59, 113, 109); /* cobalt-700 */
}

.dark
  :deep(
    .carousel__pagination-button:hover:not(
        .carousel__pagination-button--active
      )::after
  ) {
  background-color: rgb(137, 199, 188); /* cobalt-300 */
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: rgb(59, 113, 109); /* cobalt-700 */
}

.dark :deep(.carousel__prev),
.dark :deep(.carousel__next) {
  color: rgb(137, 199, 188); /* cobalt-300 */
}
</style>
