import { describe, it, expect } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
  it("renders the sr-only page title", () => {
    const wrapper = mount(AboutView);

    const h1 = wrapper.get("h1");
    expect(h1.text()).toBe("About");
    expect(h1.classes()).toContain("sr-only");
  });

  it("renders the portrait image with alt text", () => {
    const wrapper = mount(AboutView);

    const img = wrapper.get("img");
    expect(img.attributes("alt")).toBe("Garret Patten");
  });

  it("renders bio paragraphs", () => {
    const wrapper = mount(AboutView);

    expect(wrapper.findAll("p").length).toBeGreaterThan(2);
    expect(wrapper.text()).toContain("problem solver");
  });
});
