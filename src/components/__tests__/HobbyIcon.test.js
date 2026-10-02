import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HobbyIcon from "@/components/HobbyIcon.vue";

const cases = [
  "reading",
  "genealogy",
  "systems",
  "music",
  "journaling",
];

describe("HobbyIcon", () => {
  it.each(cases)("renders exactly one svg for %s", (hobbyId) => {
    const wrapper = mount(HobbyIcon, {
      props: { hobbyId, iconClass: "w-6 h-6" },
    });

    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.findAll("svg")).toHaveLength(1);
  });

  it("applies the iconClass to the rendered svg", () => {
    const wrapper = mount(HobbyIcon, {
      props: { hobbyId: "reading", iconClass: "custom-class" },
    });

    expect(wrapper.get("svg").classes()).toContain("custom-class");
  });

  it("renders nothing for an unknown hobby id", () => {
    const wrapper = mount(HobbyIcon, {
      props: { hobbyId: "unknown", iconClass: "w-6 h-6" },
    });

    expect(wrapper.find("svg").exists()).toBe(false);
  });
});
