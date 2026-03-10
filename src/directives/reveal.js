const OBSERVER_ROOT_MARGIN = "0px 0px -12% 0px";
const OBSERVER_THRESHOLD = 0.12;

const normalizeConfig = (value) => {
  if (typeof value === "number") {
    return { delay: value };
  }

  if (typeof value === "object" && value !== null) {
    return value;
  }

  return {};
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealDirective = {
  mounted(el, binding) {
    if (typeof window === "undefined") {
      return;
    }

    const config = normalizeConfig(binding.value);
    const {
      delay = 0,
      duration = 640,
      distance = 18,
      origin = "bottom",
      once = true,
    } = config;

    if (prefersReducedMotion()) {
      el.classList.add("reveal-visible");
      return;
    }

    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${delay}ms`);
    el.style.setProperty("--reveal-duration", `${duration}ms`);
    el.style.setProperty("--reveal-distance", `${distance}px`);
    el.dataset.revealOrigin = origin;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("reveal-visible");
          if (once) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: OBSERVER_ROOT_MARGIN,
        threshold: OBSERVER_THRESHOLD,
      },
    );

    observer.observe(el);
    el.__revealObserver = observer;
  },

  unmounted(el) {
    if (el.__revealObserver) {
      el.__revealObserver.unobserve(el);
      el.__revealObserver.disconnect();
      delete el.__revealObserver;
    }
  },
};

export default revealDirective;
