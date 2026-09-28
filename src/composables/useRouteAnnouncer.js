import { ref, watch } from "vue";
import { useRoute } from "vue-router";

/**
 * Keeps the document title in sync with the route and announces page loads
 * through an aria-live region. Focus management for view changes lives in
 * App.vue, which restores focus when the incoming view has settled.
 */
export function useRouteAnnouncer() {
  const route = useRoute();
  const announcement = ref("");

  watch(
    () => route.fullPath,
    () => {
      const pageTitle = route.meta?.title ?? route.name ?? "Page";
      document.title =
        route.path === "/" ? "Garret Patten" : `${pageTitle} — Garret Patten`;
      announcement.value = `${pageTitle} page loaded`;
    },
    { immediate: true },
  );

  return { announcement };
}
