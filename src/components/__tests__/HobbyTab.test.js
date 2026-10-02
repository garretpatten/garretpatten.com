import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HobbyTab from "@/components/HobbyTab.vue";

const hobby = {
  id: "reading",
  title: "Reading",
  content: ["First paragraph.", "Second paragraph."],
  list: ["Book one", "Book two"],
  currently: "A Tail of Two Cities",
};

describe("HobbyTab", () => {
  it("renders collapsed by default", () => {
    const wrapper = mount(HobbyTab, { props: { hobby } });

    expect(wrapper.find("button").attributes("aria-expanded")).toBe("false");
    expect(wrapper.find('[role="region"]').exists()).toBe(false);
    expect(wrapper.text()).toContain("Reading");
  });

  it("renders expanded content with correct aria wiring", () => {
    const wrapper = mount(HobbyTab, {
      props: { hobby, isExpanded: true },
    });

    const button = wrapper.get("button");
    expect(button.attributes("aria-expanded")).toBe("true");
    expect(button.attributes("aria-controls")).toBe("hobby-content-reading");
    expect(button.attributes("id")).toBe("hobby-heading-reading");

    const region = wrapper.get('[role="region"]');
    expect(region.attributes("aria-labelledby")).toBe("hobby-heading-reading");
    expect(region.attributes("id")).toBe("hobby-content-reading");
  });

  it("renders paragraphs and optional list and currently text when expanded", () => {
    const wrapper = mount(HobbyTab, {
      props: { hobby, isExpanded: true },
    });

    const text = wrapper.text();
    expect(text).toContain("First paragraph.");
    expect(text).toContain("Second paragraph.");
    expect(wrapper.findAll("li")).toHaveLength(2);
    expect(text).toContain("Currently:");
    expect(text).toContain("A Tail of Two Cities");
  });

  it("emits toggle on click", async () => {
    const wrapper = mount(HobbyTab, { props: { hobby } });

    await wrapper.get("button").trigger("click");

    expect(wrapper.emitted("toggle")).toHaveLength(1);
  });

  it("does not render list or currently when not provided", () => {
    const wrapper = mount(HobbyTab, {
      props: {
        hobby: { id: "music", title: "Music", content: ["Note."] },
        isExpanded: true,
      },
    });

    expect(wrapper.find("ul").exists()).toBe(false);
    expect(wrapper.text()).not.toContain("Currently:");
  });
});
