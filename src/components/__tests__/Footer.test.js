import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer", () => {
  it("renders a footer element", () => {
    const wrapper = mount(Footer);

    expect(wrapper.find("footer").exists()).toBe(true);
  });

  it("renders the Dijkstra quote", () => {
    const wrapper = mount(Footer);

    const text = wrapper.text();
    expect(text).toContain("Simplicity is a great virtue");
    expect(text).toContain("Edsger Dijkstra");
  });
});
