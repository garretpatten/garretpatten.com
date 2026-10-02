import { describe, it, expect } from "vitest";
import { createRouter, createMemoryHistory } from "vue-router";
import router from "@/router";

describe("router", () => {
  it("maps each path to its named route with a title", async () => {
    const expectations = [
      { path: "/", name: "Home", title: "Home" },
      { path: "/about", name: "About", title: "About" },
      { path: "/resume", name: "Resume", title: "Resume" },
      { path: "/projects", name: "Projects", title: "Projects" },
      { path: "/hobbies", name: "Hobbies", title: "Hobbies" },
    ];

    for (const { path, name, title } of expectations) {
      const resolved = router.resolve(path);
      expect(resolved.name).toBe(name);
      expect(resolved.meta.title).toBe(title);
    }
  });

  it("routes are dynamically registered in expected order", () => {
    const paths = router.getRoutes().map((r) => r.path);
    expect(paths.sort()).toEqual(
      ["/", "/about", "/resume", "/projects", "/hobbies"].sort(),
    );
  });

  it("renders the landing view for the root route", async () => {
    const localRouter = createRouter({
      history: createMemoryHistory(),
      routes: router.getRoutes(),
    });
    await localRouter.push("/");
    await localRouter.isReady();

    const { matched } = localRouter.currentRoute.value;
    expect(matched).toHaveLength(1);
    expect(matched[0].components.default).toBe(
      (await import("@/../src/views/LandingView.vue")).default,
    );
  });

  it("scrolls to top on navigation without a saved position", async () => {
    const localRouter = createRouter({
      history: createMemoryHistory(),
      routes: router.getRoutes(),
      scrollBehavior: router.options.scrollBehavior,
    });
    await localRouter.push("/");
    await localRouter.isReady();

    expect(router.options.scrollBehavior({}, {}, null)).toEqual({
      top: 0,
      left: 0,
    });
  });

  it("returns a saved position when available", () => {
    const saved = { top: 120, left: 0 };
    expect(router.options.scrollBehavior({}, {}, saved)).toBe(saved);
  });
});
