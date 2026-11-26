import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import ProjectCard from "@/components/ProjectCard.vue";

const renderCard = async (project) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/", name: "Home", component: { template: "<div />" } },
      {
        path: "/contributions",
        name: "Contributions",
        component: { template: "<div />" },
      },
    ],
  });
  router.push("/");
  await router.isReady();

  return mount(ProjectCard, {
    props: { project },
    global: {
      plugins: [router],
    },
  });
};

const baseProject = {
  name: "My Project",
  description: "A sample project description.",
};

describe("ProjectCard", () => {
  it("renders the repo name derived from the github slug", () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: {
          ...baseProject,
          github: "https://github.com/garretpatten/codeowners-enforcer",
        },
      },
    });

    expect(wrapper.text()).toContain("codeowners-enforcer");
  });

  it("falls back to the project name when no github url is set", () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
    });

    expect(wrapper.text()).toContain("My Project");
  });

  it("renders title as a link when github is provided", () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: {
          ...baseProject,
          github: "https://github.com/garretpatten/repo",
        },
      },
    });

    const link = wrapper.find("article a");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe(
      "https://github.com/garretpatten/repo",
    );
    expect(link.attributes("target")).toBe("_blank");
    expect(link.attributes("rel")).toContain("noopener");
  });

  it("renders title as plain span without a github url", () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
    });

    expect(wrapper.find("article a").exists()).toBe(false);
    expect(wrapper.find("article span").text()).toContain("My Project");
  });

  it("renders the description", () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
    });

    expect(wrapper.text()).toContain("A sample project description.");
  });

  it("renders the language with a color mapping", () => {
    const wrapper = mount(ProjectCard, {
      props: { project: { ...baseProject, language: "TypeScript" } },
    });

    const footer = wrapper.get("article footer");
    expect(footer.text()).toContain("TypeScript");

    const dot = footer.find(".rounded-full");
    expect(dot.classes()).toContain("bg-torch-500");
  });

  it("cross-references the contributions page when a related path is set", async () => {
    const wrapper = await renderCard({
      ...baseProject,
      github: "https://github.com/garretpatten/repo",
      language: "TypeScript",
      relatedPath: "/contributions",
      relatedLabel: "Also on the Contributions page",
    });

    const related = wrapper.find('article footer a[href="/contributions"]');
    expect(related.exists()).toBe(true);
    expect(related.text()).toBe("Also on the Contributions page");

    // Internal navigation stays in the same tab.
    expect(related.attributes("target")).toBeUndefined();
  });

  it("omits the footer when language and related path are missing", () => {
    const wrapper = mount(ProjectCard, {
      props: { project: baseProject },
    });

    expect(wrapper.find("article footer").exists()).toBe(false);
  });

  it.each([
    ["Lua", "bg-cobalt-500"],
    ["YAML", "bg-cobalt-600"],
    ["Shell", "bg-ruby-600"],
    ["TypeScript", "bg-torch-500"],
    ["Vue", "bg-sun-400"],
    ["Markdown", "bg-plum-600"],
  ])("maps %s to the %s language dot", (language, colorClass) => {
    const wrapper = mount(ProjectCard, {
      props: { project: { ...baseProject, language } },
    });

    const dot = wrapper.get("article footer .rounded-full");
    expect(dot.classes()).toContain(colorClass);
  });
});
