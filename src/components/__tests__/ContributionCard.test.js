import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ContributionCard from "@/components/ContributionCard.vue";

const baseContribution = {
  name: "My Contribution",
  verifier: "Example registry · merged",
  description: "A sample contribution description.",
  primaryUrl: "https://example.com/pull/1",
};

const mountCard = (contribution = baseContribution, rank = 1) =>
  mount(ContributionCard, {
    props: { contribution, rank },
  });

describe("ContributionCard", () => {
  it("renders the rank as a zero-padded number hidden from assistive tech", () => {
    const wrapper = mountCard(baseContribution, 2);

    const rank = wrapper.get("article > span");
    expect(rank.text()).toBe("02");
    expect(rank.attributes("aria-hidden")).toBe("true");
  });

  it("links the title to the primary artifact with safe external attributes", () => {
    const wrapper = mountCard();

    const title = wrapper.get("article a");
    expect(title.text()).toBe("My Contribution");
    expect(title.attributes("href")).toBe("https://example.com/pull/1");
    expect(title.attributes("target")).toBe("_blank");
    expect(title.attributes("rel")).toContain("noopener");
    expect(title.attributes("rel")).toContain("noreferrer");
  });

  it("renders the verifier meta line under the title", () => {
    const wrapper = mountCard();

    const meta = wrapper.get("article p.font-mono");
    expect(meta.text()).toBe("Example registry · merged");
  });

  it("renders the description", () => {
    const wrapper = mountCard();

    expect(wrapper.text()).toContain("A sample contribution description.");
  });

  it("renders the attribution note with a link to the account profile", () => {
    const wrapper = mountCard({
      ...baseContribution,
      attribution: {
        text: "Contributed under my work GitHub account,",
        account: "sample-account",
      },
    });

    const note = wrapper.get("article p.font-sans.text-xs");
    expect(note.text()).toContain("Contributed under my work GitHub account,");

    const account = note.get("a");
    expect(account.text()).toBe("sample-account");
    expect(account.attributes("href")).toBe(
      `https://github.com/${account.text()}`,
    );
    expect(account.attributes("target")).toBe("_blank");
    expect(account.attributes("rel")).toContain("noopener");
    expect(account.attributes("rel")).toContain("noreferrer");
    // The inline link needs a non-color distinction from surrounding text.
    expect(account.classes()).toContain("underline");
  });

  it("omits the attribution note when none is set", () => {
    const wrapper = mountCard();

    expect(wrapper.find("article p.font-sans.text-xs").exists()).toBe(false);
  });

  it("renders the secondary repository link when one is set", () => {
    const wrapper = mountCard({
      ...baseContribution,
      secondaryUrl: "https://github.com/garretpatten/repo",
      secondaryLabel: "Source repository",
    });

    const links = wrapper.findAll("article a");
    expect(links).toHaveLength(2);

    const secondary = links[1];
    expect(secondary.attributes("href")).toBe(
      "https://github.com/garretpatten/repo",
    );
    expect(secondary.attributes("target")).toBe("_blank");
    expect(secondary.attributes("rel")).toContain("noreferrer");
    expect(secondary.text()).toBe("Source repository");
  });

  it("omits the footer when no secondary url is set", () => {
    const wrapper = mountCard();

    expect(wrapper.find("article footer").exists()).toBe(false);
    expect(wrapper.findAll("article a")).toHaveLength(1);
  });
});
