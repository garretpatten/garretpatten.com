import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import ProjectsView from "@/views/ProjectsView.vue";

const renderView = async () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/", name: "Home", component: { template: "<div />" } },
      {
        path: "/projects",
        name: "Projects",
        component: { template: "<div />" },
      },
      {
        path: "/contributions",
        name: "Contributions",
        component: { template: "<div />" },
      },
    ],
  });
  router.push("/projects");
  await router.isReady();

  return mount(ProjectsView, {
    global: {
      plugins: [router],
    },
  });
};

describe("ProjectsView", () => {
  it("renders the sr-only page title", async () => {
    const wrapper = await renderView();

    const h1 = wrapper.get("h1");
    expect(h1.text()).toBe("Projects");
    expect(h1.classes()).toContain("sr-only");
  });

  it("renders a card for every project", async () => {
    const wrapper = await renderView();

    const cards = wrapper.findAllComponents({ name: "ProjectCard" });
    expect(cards.length).toBeGreaterThan(0);

    const listItems = wrapper.findAll("ul > li");
    expect(listItems.length).toBe(cards.length);
  });

  it("renders project slugs and descriptions", async () => {
    const wrapper = await renderView();

    expect(wrapper.text()).toContain("codeowners-enforcer");
  });

  it("points readers to GitHub for more projects", async () => {
    const wrapper = await renderView();

    expect(wrapper.text()).toContain("Check out the rest of my projects");
  });

  it("cross-references the contributions page from overlapping projects", async () => {
    const wrapper = await renderView();

    const related = wrapper.findAll('a[href="/contributions"]');
    expect(related.length).toBe(2);
    for (const link of related) {
      expect(link.text()).toBe("Also on the Contributions page");
    }
  });
});
