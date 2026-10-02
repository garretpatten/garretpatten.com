import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HobbiesView from "@/views/HobbiesView.vue";

describe("HobbiesView", () => {
  it("renders the sr-only page title", () => {
    const wrapper = mount(HobbiesView);

    const h1 = wrapper.get("h1");
    expect(h1.text()).toBe("Hobbies");
    expect(h1.classes()).toContain("sr-only");
  });

  it("renders one collapsed tab per hobby", () => {
    const wrapper = mount(HobbiesView);

    const tabs = wrapper.findAllComponents({ name: "HobbyTab" });
    expect(tabs.length).toBeGreaterThanOrEqual(1);
    expect(tabs.length).toBe(wrapper.findAll("button").length);

    for (const button of wrapper.findAll("button")) {
      expect(button.attributes("aria-expanded")).toBe("false");
    }
  });

  it("expands exactly one hobby at a time on click", async () => {
    const wrapper = mount(HobbiesView);

    const buttons = wrapper.findAll("button");
    await buttons[0].trigger("click");
    await wrapper.vm.$nextTick();

    let expanded = wrapper
      .findAll("button")
      .filter((b) => b.attributes("aria-expanded") === "true");
    expect(expanded).toHaveLength(1);
    expect(expanded[0].text()).toContain("Genealogy");

    const expandedButton = wrapper
      .findAll("button")
      .find((b) => b.attributes("aria-expanded") === "true");
    await expandedButton.trigger("click");
    await wrapper.vm.$nextTick();

    expanded = wrapper
      .findAll("button")
      .filter((b) => b.attributes("aria-expanded") === "true");
    expect(expanded).toHaveLength(0);
  });

  it("switches to another hobby when a different tab is clicked", async () => {
    const wrapper = mount(HobbiesView);

    await wrapper.findAll("button")[0].trigger("click");
    await wrapper.vm.$nextTick();

    await wrapper.findAll("button")[1].trigger("click");
    await wrapper.vm.$nextTick();

    const expanded = wrapper
      .findAll("button")
      .filter((b) => b.attributes("aria-expanded") === "true");
    expect(expanded).toHaveLength(1);
    expect(expanded[0].text()).toContain("Journaling");
  });
});
