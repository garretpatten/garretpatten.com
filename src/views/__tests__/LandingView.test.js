import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import LandingView from "@/views/LandingView.vue";

describe("LandingView", () => {
  const mountView = () => mount(LandingView);

  it("renders the hero with name and tagline", () => {
    const wrapper = mountView();

    expect(wrapper.get("h1").text()).toBe("Garret Patten");
    expect(wrapper.text()).toContain("Principal Product Security Engineer");
  });

  it("renders a value proposition section", () => {
    const wrapper = mountView();

    const sections = wrapper.findAll("section");
    expect(sections.length).toBeGreaterThanOrEqual(2);
    expect(sections[1].text()).toContain("difficult problems");
  });
});
