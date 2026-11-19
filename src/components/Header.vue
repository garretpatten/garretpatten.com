<template>
  <header
    class="mb-8 pb-6 relative z-20 py-3"
    :inert="isMenuOpen ? true : undefined"
  >
    <!-- Mobile Header: Logo and Hamburger -->
    <div class="flex items-center justify-between md:hidden">
      <router-link
        to="/"
        :tabindex="isMenuOpen ? -1 : undefined"
        aria-label="Garret Patten, home"
        :aria-current="route.path === '/' ? 'page' : undefined"
        class="interactive-focus rounded-md hover:opacity-80 transition-opacity duration-[230ms]"
      >
        <img
          src="/cropped-monogram-gray.png"
          alt="Garret Patten"
          class="h-14 w-auto"
        />
      </router-link>

      <button
        v-show="!isMenuOpen"
        ref="menuToggleRef"
        class="p-1.5 text-gray-100 hover:text-cobalt-400 interactive-focus rounded-md transition-colors duration-[230ms] relative z-50 interactive-lift"
        aria-label="Open menu"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <svg
          aria-hidden="true"
          class="w-11 h-11"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Desktop Header: Logo and Nav -->
    <div class="hidden md:flex md:items-center md:justify-between gap-4">
      <router-link
        to="/"
        aria-label="Garret Patten, home"
        :aria-current="route.path === '/' ? 'page' : undefined"
        class="interactive-focus rounded-md hover:opacity-80 transition-opacity duration-[230ms]"
      >
        <img
          src="/cropped-monogram-gray.png"
          alt="Garret Patten"
          class="h-16 w-auto"
        />
      </router-link>

      <nav class="flex items-center gap-4" aria-label="Main">
        <router-link
          v-for="navRoute in routes"
          :key="navRoute.path"
          :to="navRoute.path"
          :aria-current="route.path === navRoute.path ? 'page' : undefined"
          :class="[
            desktopRouteClasses,
            getRouteStateClasses(navRoute.path),
            'interactive-focus',
          ]"
        >
          {{ navRoute.name }}
        </router-link>
        <SocialLinks />
      </nav>
    </div>
  </header>

  <!-- Mobile Menu Backdrop -->
  <Transition name="backdrop">
    <div
      v-if="isMenuOpen"
      role="presentation"
      class="fixed inset-0 bg-gray-950/75 backdrop-blur-md z-30 md:hidden"
      aria-hidden="true"
      @click="closeMenu"
    ></div>
  </Transition>

  <!-- Mobile Menu: Navigation Links -->
  <Transition name="menu">
    <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions (modal dialog keydown trap; focus lives on close button) -->
    <div
      v-if="isMenuOpen"
      ref="mobileMenuRef"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      class="fixed top-0 right-0 h-screen w-72 max-w-[85vw] bg-gray-900 shadow-xl z-40 md:hidden overflow-y-auto border-l border-gray-700"
      @keydown="handleMobileMenuKeydown"
    >
      <div class="flex justify-end p-4">
        <button
          ref="closeMenuRef"
          type="button"
          class="p-2 text-gray-100 hover:text-cobalt-400 interactive-focus rounded-md transition-colors duration-[230ms] interactive-lift"
          aria-label="Close menu"
          @click="closeMenu"
        >
          <svg
            aria-hidden="true"
            class="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav class="flex flex-col items-center gap-4 px-6 pb-6" aria-label="Menu">
        <router-link
          v-for="navRoute in routes"
          :key="navRoute.path"
          :to="navRoute.path"
          :aria-current="route.path === navRoute.path ? 'page' : undefined"
          :class="[
            mobileRouteClasses,
            getRouteStateClasses(navRoute.path),
            'interactive-focus',
          ]"
          @click="closeMenu"
        >
          {{ navRoute.name }}
        </router-link>
        <div class="pt-2 w-full flex justify-center items-center gap-4">
          <SocialLinks />
        </div>
      </nav>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMobileMenu } from "../composables/useMobileMenu";
import SocialLinks from "./SocialLinks.vue";

const route = useRoute();
const router = useRouter();
const { isMobileMenuOpen } = useMobileMenu();
const isMenuOpen = isMobileMenuOpen;
const mobileMenuRef = ref(null);
const menuToggleRef = ref(null);
const closeMenuRef = ref(null);

// Derive the nav list from the router's route table so adding a page only
// requires editing src/router/index.js.
const routes = router.options.routes.filter(
  (route) => route.path !== "/:pathMatch(.*)*",
);

const desktopRouteClasses =
  "text-lg font-medium text-gray-100 transition-colors duration-[230ms] hover:text-cobalt-300";
const mobileRouteClasses =
  "text-xl font-medium transition-colors duration-[230ms] py-3 text-center w-full text-gray-100 hover:text-cobalt-300";

/** Active navigation item is always yellow (sun) for consistency. */
const activeRouteClasses = "text-sun-400 border-b-2 border-sun-400";

const getRouteStateClasses = (path) =>
  route.path === path ? activeRouteClasses : "";

const focusCloseButton = () => {
  closeMenuRef.value?.focus();
};

const getMobileMenuFocusables = () => {
  if (!mobileMenuRef.value) {
    return [];
  }

  const selector =
    "a[href], button:not([disabled]), select:not([disabled]), textarea:not([disabled]), input:not([disabled])";

  return [...mobileMenuRef.value.querySelectorAll(selector)].filter(
    (el) => el.tabIndex !== -1,
  );
};

const handleMobileMenuKeydown = (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusables = getMobileMenuFocusables();
  if (focusables.length === 0) {
    return;
  }

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  nextTick(() => {
    menuToggleRef.value?.focus();
  });
};

watch(isMenuOpen, async (open) => {
  document.body.style.overflow = open ? "hidden" : "";
  if (open) {
    await nextTick();
    focusCloseButton();
  }
});

onUnmounted(() => {
  document.body.style.overflow = "";
});

watch(
  () => route.path,
  () => {
    closeMenu();
  },
);
</script>
