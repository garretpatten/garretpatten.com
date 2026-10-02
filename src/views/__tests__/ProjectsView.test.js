import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ProjectsView from "@/views/ProjectsView.vue";

describe("ProjectsView", () => {
  it("renders the sr-only page title", () => {
    const wrapper = mount(ProjectsView);

    const h1 = wrapper.get("h1");
    expect(h1.text()).toBe("Projects");
    expect(h1.classes()).toContain("sr-only");
  });

  it("renders a card for every project", () => {
    const wrapper = mount(ProjectsView);

    const cards = wrapper.findAllComponents({ name: "ProjectCard" });
    expect(cards.length).toBeGreaterThan(0);

    const listItems = wrapper.findAll("ul > li");
    expect(listItems.length).toBe(cards.length);
  });

  it("renders project slugs and descriptions", () => {
    const wrapper = mount(ProjectsView);

    expect(wrapper.text()).toContain("codeowners-enforcer");
  });

  it("points readers to GitHub for more projects", () => {
    const wrapper = mount(ProjectsView);

    expect(wrapper.text()).toContain("Check out the rest of my projects");
  });
});
