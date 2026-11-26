import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ContributionCard from "@/components/ContributionCard.vue";

const baseContribution = {
  name: "My Contribution",
  description: "A sample contribution description.",
  primaryUrl: "https://example.com/pull/1",
  primaryLabel: "View pull request",
};

describe("ContributionCard", () => {
  it("renders the contribution name as plain text", () => {
    const wrapper = mount(ContributionCard, {
      props: { contribution: baseContribution },
    });

    expect(wrapper.text()).toContain("My Contribution");
    expect(wrapper.find("article > div a").exists()).toBe(false);
  });

  it("renders the description", () => {
    const wrapper = mount(ContributionCard, {
      props: { contribution: baseContribution },
    });

    expect(wrapper.text()).toContain("A sample contribution description.");
  });

  it("renders the attribution note when one is set", () => {
    const wrapper = mount(ContributionCard, {
      props: {
        contribution: {
          ...baseContribution,
          attribution: "Contributed under my work GitHub account.",
        },
      },
    });

    const note = wrapper.get("article p.text-xs");
    expect(note.text()).toContain("Contributed under my work GitHub account.");
  });

  it("omits the attribution note when none is set", () => {
    const wrapper = mount(ContributionCard, {
      props: { contribution: baseContribution },
    });

    expect(wrapper.find("article p.text-xs").exists()).toBe(false);
  });

  it("renders the primary link with safe external attributes", () => {
    const wrapper = mount(ContributionCard, {
      props: { contribution: baseContribution },
    });

    const link = wrapper.get("article footer a");
    expect(link.attributes("href")).toBe("https://example.com/pull/1");
    expect(link.attributes("target")).toBe("_blank");
    expect(link.attributes("rel")).toContain("noopener");
    expect(link.attributes("rel")).toContain("noreferrer");
    expect(link.text()).toBe("View pull request");
  });

  it("omits the secondary link when no secondary url is set", () => {
    const wrapper = mount(ContributionCard, {
      props: { contribution: baseContribution },
    });

    expect(wrapper.findAll("article a")).toHaveLength(1);
  });

  it("renders the secondary link when one is set", () => {
    const wrapper = mount(ContributionCard, {
      props: {
        contribution: {
          ...baseContribution,
          secondaryUrl: "https://github.com/garretpatten/repo",
          secondaryLabel: "Source repository",
        },
      },
    });

    const links = wrapper.findAll("article a");
    expect(links).toHaveLength(2);

    const secondary = links[1];
    expect(secondary.attributes("href")).toBe(
      "https://github.com/garretpatten/repo",
    );
    expect(secondary.attributes("target")).toBe("_blank");
    expect(secondary.attributes("rel")).toContain("noopener");
    expect(secondary.text()).toBe("Source repository");
  });
});
