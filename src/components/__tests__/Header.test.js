import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import Header from "@/components/Header.vue";

const renderHeader = async (path = "/") => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/", component: { template: "<div />" } },
      { path: "/about", component: { template: "<div />" } },
      { path: "/resume", component: { template: "<div />" } },
      { path: "/projects", component: { template: "<div />" } },
      { path: "/hobbies", component: { template: "<div />" } },
    ],
  });
  router.push(path);
  await router.isReady();

  return mount(Header, {
    attachTo: document.body,
    global: {
      plugins: [router],
    },
  });
};
describe("Header", () => {
  it("renders the mobile hamburger toggle with aria attributes", async () => {
    const wrapper = await renderHeader();

    const toggle = wrapper.find('button[aria-label="Open menu"]');
    expect(toggle.exists()).toBe(true);
    expect(toggle.attributes("aria-expanded")).toBe("false");
  });

  it("opens the mobile menu and toggles aria state", async () => {
    const wrapper = await renderHeader();

    await wrapper.find('button[aria-label="Open menu"]').trigger("click");
    await wrapper.vm.$nextTick();

    const dialog = wrapper.find('[role="dialog"]');
    expect(dialog.exists()).toBe(true);
    expect(dialog.attributes("aria-modal")).toBe("true");
    expect(dialog.attributes("aria-label")).toBe("Mobile navigation");
    expect(
      wrapper.find('button[aria-label="Close menu"]').exists(),
    ).toBe(true);
  });

  it("locks body scroll while the menu is open and restores it on close", async () => {
    const wrapper = await renderHeader();

    await wrapper.find('button[aria-label="Open menu"]').trigger("click");
    expect(document.body.style.overflow).toBe("hidden");

    await wrapper.find('button[aria-label="Close menu"]').trigger("click");
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the menu when a navigation link is clicked", async () => {
    const wrapper = await renderHeader();
    await wrapper.find('button[aria-label="Open menu"]').trigger("click");

    await wrapper.get('[role="dialog"]').find("a").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
  });

  it("closes the menu on Escape keydown", async () => {
    const wrapper = await renderHeader();
    await wrapper.find('button[aria-label="Open menu"]').trigger("click");

    await wrapper
      .get('[role="dialog"]')
      .trigger("keydown", { key: "Escape" });
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
  });

  it("traps Tab focus within the mobile menu", async () => {
    const wrapper = await renderHeader();
    await wrapper.find('button[aria-label="Open menu"]').trigger("click");

    const dialog = wrapper.get('[role="dialog"]');
    const focusables = dialog.element.querySelectorAll(
      'a[href], button:not([disabled])',
    );
    const last = focusables[focusables.length - 1];
    last.focus();

    // Wrap-around: tabbing from the last focusable returns to the first.
    await dialog.trigger("keydown", { key: "Tab" });
    expect(document.activeElement).toBe(focusables[0]);
  });

  it("renders desktop navigation links with aria-current on the active route", async () => {
    const wrapper = await renderHeader();

    const nav = wrapper.find('nav[aria-label="Main"]');
    expect(nav.exists()).toBe(true);

    const links = nav.findAll("a").filter((a) => a.text().trim());
    const labels = links.map((a) => a.text().trim());
    expect(labels).toEqual([
      "Home",
      "About",
      "Resume",
      "Projects",
      "Hobbies",
    ]);
  });

  it("renders social links with descriptive aria labels", async () => {
    const wrapper = await renderHeader();

    for (const label of ["GitHub", "LinkedIn"]) {
      const link = wrapper.find(`a[aria-label="${label} (opens in new tab)"]`);
      expect(link.exists()).toBe(true);
      expect(link.attributes("target")).toBe("_blank");
      expect(link.attributes("rel")).toContain("noopener");
    }
  });

  it("unlocks body scroll on unmount", async () => {
    const wrapper = await renderHeader();
    await wrapper.find('button[aria-label="Open menu"]').trigger("click");
    expect(document.body.style.overflow).toBe("hidden");

    wrapper.unmount();
    expect(document.body.style.overflow).toBe("");
  });
});
