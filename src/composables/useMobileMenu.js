import { ref } from "vue";

/**
 * Shared state for the mobile navigation menu. The App shell needs to know
 * when the menu is open so it can mark the content behind the modal dialog
 * as `inert` for assistive technology.
 */
const isMobileMenuOpen = ref(false);

export function useMobileMenu() {
  return {
    isMobileMenuOpen,
  };
}
