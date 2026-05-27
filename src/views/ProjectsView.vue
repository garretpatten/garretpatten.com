<template>
  <div class="max-w-6xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">Projects</h1>

    <!-- Projects Carousel -->
    <section
      aria-labelledby="projects-carousel-heading"
      class="projects-carousel-shell soft-enter"
    >
      <h2 id="projects-carousel-heading" class="sr-only">
        Featured projects
      </h2>

      <div class="relative">
        <button
          type="button"
          class="carousel__prev interactive-focus"
          aria-label="Previous project"
          @click="goPrev"
        >
          <CarouselIcon name="arrowLeft" />
        </button>

        <button
          type="button"
          class="carousel__next interactive-focus"
          aria-label="Next project"
          @click="goNext"
        >
          <CarouselIcon name="arrowRight" />
        </button>

        <Carousel
          ref="carouselRef"
          v-model="currentSlide"
          :items-to-show="itemsToShow"
          :wrap-around="true"
          :autoplay="6000"
          :pause-autoplay-on-hover="true"
          class="projects-carousel"
          aria-label="Project carousel"
          @init="syncCarouselFocusability"
          @slide-end="syncCarouselFocusability"
        >
          <Slide v-for="project in projects" :key="project.name">
            <div class="px-2">
              <ProjectCard :project="project" />
            </div>
          </Slide>
        </Carousel>

        <ol class="carousel__pagination" role="list">
          <li
            v-for="(project, index) in projects"
            :key="project.name"
            class="carousel__pagination-item"
          >
            <button
              type="button"
              class="carousel__pagination-button interactive-focus"
              :class="{
                'carousel__pagination-button--active':
                  activeSlideIndex === index,
              }"
              :aria-label="`Go to project slide ${index + 1} of ${projects.length}`"
              :aria-current="activeSlideIndex === index ? 'true' : undefined"
              @click="goToSlide(index)"
            />
          </li>
        </ol>
      </div>
    </section>

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
          <p class="font-heading text-lg font-medium text-ruby-400 mb-1">
            Simplicity is the apex of design
          </p>
          <p class="font-sans text-sm text-gray-400 leading-relaxed">
            Complexity signals incomplete understanding.
          </p>
        </div>
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="font-heading text-lg font-medium text-sun-400 mb-1">
            Outcomes are the objective
          </p>
          <p class="font-sans text-sm text-gray-400 leading-relaxed">
            Implementations are transient and disposable.
          </p>
        </div>
        <div
          class="bg-gray-900/90 border border-gray-700 rounded-xl p-5 md:p-6 text-left"
        >
          <p class="font-heading text-lg font-medium text-cobalt-400 mb-1">
            Quality is a prerequisite
          </p>
          <p class="font-sans text-sm text-gray-400 leading-relaxed">
            Security, correctness, and reliability are foundational
            requirements, not aspirations.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { Carousel, Slide, Icon as CarouselIcon } from "vue3-carousel";
import ProjectCard from "../components/ProjectCard.vue";

const itemsToShow = ref(1);
const carouselRef = ref(null);
const currentSlide = ref(0);

const updateItemsToShow = () => {
  if (window.innerWidth >= 1024) {
    itemsToShow.value = 3;
  } else if (window.innerWidth >= 640) {
    itemsToShow.value = 2;
  } else {
    itemsToShow.value = 1;
  }
  syncCarouselFocusability();
};

const syncCarouselFocusability = () => {
  nextTick(() => {
    const root = carouselRef.value?.$el;
    if (!root) {
      return;
    }

    root.setAttribute("tabindex", "-1");

    root.querySelectorAll(".carousel__slide").forEach((slide) => {
      const hidden =
        slide.getAttribute("aria-hidden") === "true" ||
        slide.classList.contains("carousel_slide--clone");

      if ("inert" in slide) {
        slide.inert = hidden;
      }

      slide
        .querySelectorAll("a[href], button, input, select, textarea")
        .forEach((element) => {
          if (hidden) {
            element.setAttribute("tabindex", "-1");
            element.dataset.carouselTabDisabled = "true";
          } else if (element.dataset.carouselTabDisabled) {
            element.removeAttribute("tabindex");
            delete element.dataset.carouselTabDisabled;
          }
        });
    });
  });
};

const goPrev = () => {
  carouselRef.value?.prev();
};

const goNext = () => {
  carouselRef.value?.next();
};

const goToSlide = (index) => {
  carouselRef.value?.slideTo(index);
};

const activeSlideIndex = computed(() => {
  const count = projects.value.length;
  if (!count) {
    return 0;
  }

  const raw = currentSlide.value;
  return ((raw % count) + count) % count;
});

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
  nextTick(syncCarouselFocusability);
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
.projects-carousel-shell {
  padding: 1rem 0;
  margin-bottom: 3rem;
}

.projects-carousel {
  padding: 0 2.5rem;
}

/* Pagination pills render on ::after, not the button element */
.projects-carousel-shell :deep(.carousel__pagination-button::after) {
  background-color: rgb(189, 174, 147); /* gray-300 — Gruvbox fg3 */
}

.dark .projects-carousel-shell :deep(.carousel__pagination-button::after) {
  background-color: rgb(124, 111, 100); /* gray-600 */
}

.projects-carousel-shell :deep(.carousel__pagination-button--active::after) {
  background-color: rgb(149, 84, 113); /* iris-700 */
}

.dark
  .projects-carousel-shell
  :deep(.carousel__pagination-button--active::after) {
  background-color: rgb(249, 224, 144); /* sun-300 */
}

.projects-carousel-shell
  :deep(
    .carousel__pagination-button:hover:not(
        .carousel__pagination-button--active
      )::after
  ) {
  background-color: rgb(59, 113, 109); /* cobalt-700 */
}

.dark
  .projects-carousel-shell
  :deep(
    .carousel__pagination-button:hover:not(
        .carousel__pagination-button--active
      )::after
  ) {
  background-color: rgb(137, 199, 188); /* cobalt-300 */
}

.projects-carousel-shell .carousel__prev,
.projects-carousel-shell .carousel__next,
.projects-carousel-shell .carousel__pagination-button {
  @apply rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950;
}

.projects-carousel-shell .carousel__prev,
.projects-carousel-shell .carousel__next {
  color: rgb(59, 113, 109); /* cobalt-700 */
}

.dark .projects-carousel-shell .carousel__prev,
.dark .projects-carousel-shell .carousel__next {
  color: rgb(137, 199, 188); /* cobalt-300 */
}
</style>
