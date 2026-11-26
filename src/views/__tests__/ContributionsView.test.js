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

  it("renders a ledger row for every contribution in an ordered list", () => {
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

  it("numbers the ledger rows so the signal order reads visually", () => {
    const wrapper = mount(ContributionsView);

    const ranks = wrapper
      .findAll("ol > li article > span")
      .map((rank) => rank.text());
    expect(ranks).toEqual(["01", "02", "03"]);
  });

  it("labels each entry with the third party that accepted it", () => {
    const wrapper = mount(ContributionsView);

    const verifiers = wrapper
      .findAll("article p.font-mono")
      .map((line) => line.text());
    expect(verifiers).toEqual([
      "Semgrep rules · merged #3085",
      "Xerj Corpus Hub · selected",
      "M8ven Trust Index · verified publisher",
    ]);
  });

  it("links each contribution title to its live artifact exactly once", () => {
    const wrapper = mount(ContributionsView);

    const rows = wrapper.findAll("ol > li");
    const artifacts = [
      "https://github.com/semgrep/semgrep-rules/pull/3085",
      "https://hub.xerj.org/contributors/garretpatten",
      "https://m8ven.ai/mcp/garretpatten/google-mcp-server",
    ];

    artifacts.forEach((url, index) => {
      const title = rows[index].get("a");
      expect(title.attributes("href")).toBe(url);

      const linksToArtifact = rows[index]
        .findAll("a")
        .filter((link) => link.attributes("href") === url);
      expect(linksToArtifact).toHaveLength(1);
    });
  });

  it("links the repositories behind the accepted work", () => {
    const wrapper = mount(ContributionsView);

    const hrefs = wrapper.findAll("a").map((link) => link.attributes("href"));
    expect(hrefs).toContain("https://github.com/garretpatten/system-scripts");
    expect(hrefs).toContain(
      "https://github.com/garretpatten/google-mcp-server",
    );
  });

  it("attributes the Semgrep contribution to the work GitHub account", () => {
    const wrapper = mount(ContributionsView);

    const attributed = wrapper
      .findAllComponents({ name: "ContributionCard" })
      .find((card) => card.props("contribution").attribution);

    expect(attributed.props("contribution").name).toBe(
      "Apex/VisualForce Semgrep ruleset",
    );

    const account = attributed.get("p.font-sans.text-xs a");
    expect(attributed.text()).toContain("work GitHub account");
    expect(account.attributes("href")).toBe(
      `https://github.com/${account.text()}`,
    );
    expect(account.attributes("target")).toBe("_blank");
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
