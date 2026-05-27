import { ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

/**
 * Announces route changes for screen readers and moves focus to the page heading.
 */
export function useRouteAnnouncer() {
  const route = useRoute();
  const announcement = ref("");

  const updatePageMeta = async (to) => {
    const pageTitle = to.meta?.title ?? to.name ?? "Page";
    document.title =
      to.path === "/" ? "Garret Patten" : `${pageTitle} — Garret Patten`;
    announcement.value = `${pageTitle} page loaded`;

    await nextTick();
    const main = document.getElementById("main-content");
    const heading = main?.querySelector("h1");
    if (heading instanceof HTMLElement) {
      heading.focus({ preventScroll: true });
    } else if (main instanceof HTMLElement) {
      main.focus({ preventScroll: true });
    }
  };

  watch(
    () => route.fullPath,
    () => updatePageMeta(route),
    { immediate: true },
  );

  return { announcement };
}
