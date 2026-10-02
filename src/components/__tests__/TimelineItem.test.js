import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TimelineItem from "@/components/TimelineItem.vue";

const item = {
  role: "Senior Security Engineer",
  company: "Acme Corp",
  location: "Remote",
  start: "2020",
  end: "Present",
  bullets: ["Did a thing", "Did another thing"],
};

describe("TimelineItem", () => {
  it("renders role, company, and location", () => {
    const wrapper = mount(TimelineItem, { props: { item } });

    expect(wrapper.text()).toContain(item.role);
    expect(wrapper.text()).toContain(item.company);
    expect(wrapper.text()).toContain(`· ${item.location}`);
  });

  it("renders the date range", () => {
    const wrapper = mount(TimelineItem, { props: { item } });

    expect(wrapper.text()).toContain(`2020 – Present`);
  });

  it("renders bullets as a list", () => {
    const wrapper = mount(TimelineItem, { props: { item } });

    const bullets = wrapper.findAll("li");
    expect(bullets).toHaveLength(2);
    expect(bullets[0].text()).toBe("Did a thing");
    expect(bullets[1].text()).toBe("Did another thing");
  });

  it("omits the bullet list when empty", () => {
    const wrapper = mount(TimelineItem, {
      props: { item: { ...item, bullets: [] } },
    });

    expect(wrapper.find("ul").exists()).toBe(false);
  });

  it("omits the bullet list when not provided", () => {
    const wrapper = mount(TimelineItem, {
      props: { item: { role: "X", company: "Y", start: "1", end: "2" } },
    });

    expect(wrapper.find("ul").exists()).toBe(false);
  });

  it("hides location separator when not provided", () => {
    const wrapper = mount(TimelineItem, {
      props: { item: { ...item, location: undefined } },
    });

    expect(wrapper.text()).not.toContain("·");
  });
});
