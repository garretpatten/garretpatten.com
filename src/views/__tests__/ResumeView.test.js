import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ResumeView from "@/views/ResumeView.vue";

describe("ResumeView", () => {
  it("renders the sr-only page title", () => {
    const wrapper = mount(ResumeView);

    const h1 = wrapper.get("h1");
    expect(h1.text()).toBe("Resume");
    expect(h1.classes()).toContain("sr-only");
  });

  it("renders the four main sections", () => {
    const wrapper = mount(ResumeView);

    const headings = wrapper.findAll("h2").map((h) => h.text());
    expect(headings).toEqual([
      "Summary",
      "Skills",
      "Experience",
      "Education",
    ]);
  });

  it("renders skill tags", () => {
    const wrapper = mount(ResumeView);

    expect(wrapper.text()).toContain("Application Security");
  });

  it("renders a timeline item for each experience", () => {
    const wrapper = mount(ResumeView);

    const items = wrapper.findAllComponents({ name: "TimelineItem" });
    expect(items.length).toBeGreaterThanOrEqual(1);
  });

  it("renders education entries", () => {
    const wrapper = mount(ResumeView);

    expect(wrapper.findAll("h3").length).toBeGreaterThanOrEqual(1);
  });
});
