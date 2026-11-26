import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ContributionsView from "@/views/ContributionsView.vue";

describe("ContributionsView", () => {
  it("renders the sr-only page title and the visible open source heading", () => {
    const wrapper = mount(ContributionsView);

    const h1 = wrapper.get("h1");
    expect(h1.text()).toBe("Contributions");
    expect(h1.classes()).toContain("sr-only");

    const h2 = wrapper.get("h2");
    expect(h2.text()).toBe("Open Source Contributions");
    expect(h2.classes()).not.toContain("sr-only");
  });

  it("renders a card for every contribution in an ordered list", () => {
    const wrapper = mount(ContributionsView);

    const cards = wrapper.findAllComponents({ name: "ContributionCard" });
    expect(cards.length).toBe(3);

    const listItems = wrapper.findAll("ol > li");
    expect(listItems.length).toBe(cards.length);
  });

  it("presents contributions in signal-strength order", () => {
    const wrapper = mount(ContributionsView);

    const names = wrapper
      .findAllComponents({ name: "ContributionCard" })
      .map((card) => card.props("contribution").name);
    expect(names).toEqual([
      "Apex/VisualForce Semgrep ruleset",
      "system-scripts in the Xerj Corpus Hub",
      "Google MCP Server (Calendar and Tasks)",
    ]);
  });

  it("leads with the highest-signal contribution across the desktop grid", () => {
    const wrapper = mount(ContributionsView);

    const listItems = wrapper.findAll("ol > li");
    expect(listItems[0].classes()).toContain("md:col-span-2");
    expect(listItems[1].classes()).not.toContain("md:col-span-2");
    expect(listItems[2].classes()).not.toContain("md:col-span-2");
  });

  it("attributes the Semgrep contribution to the work GitHub account", () => {
    const wrapper = mount(ContributionsView);

    const attributed = wrapper
      .findAllComponents({ name: "ContributionCard" })
      .find((card) => card.props("contribution").attribution);

    expect(attributed.props("contribution").name).toBe(
      "Apex/VisualForce Semgrep ruleset",
    );
    expect(attributed.props("contribution").attribution).toContain(
      "garret-at-ncino",
    );
  });

  it("links each contribution to its live artifact", () => {
    const wrapper = mount(ContributionsView);

    const hrefs = wrapper.findAll("a").map((link) => link.attributes("href"));
    expect(hrefs).toContain(
      "https://github.com/semgrep/semgrep-rules/pull/3085",
    );
    expect(hrefs).toContain("https://hub.xerj.org/contributors/garretpatten");
    expect(hrefs).toContain(
      "https://m8ven.ai/mcp/garretpatten/google-mcp-server",
    );
    expect(hrefs).toContain("https://github.com/garretpatten/system-scripts");
    expect(hrefs).toContain(
      "https://github.com/garretpatten/google-mcp-server",
    );
  });

  it("opens every external link in a new tab safely", () => {
    const wrapper = mount(ContributionsView);

    for (const link of wrapper.findAll("a")) {
      expect(link.attributes("target")).toBe("_blank");
      expect(link.attributes("rel")).toContain("noopener");
      expect(link.attributes("rel")).toContain("noreferrer");
    }
  });
});
