/**
 * Activates focused links on Space (Enter already works natively).
 * Needed for router-link and other SPA anchors where Space may scroll instead.
 */
export function initLinkSpaceActivation() {
  document.addEventListener(
    "keydown",
    (event) => {
      const isSpace = event.key === " " || event.code === "Space";
      if (!isSpace || event.defaultPrevented) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]:not([aria-disabled='true'])");
      if (!link || link.isContentEditable) {
        return;
      }

      event.preventDefault();
      link.click();
    },
    true,
  );
}
