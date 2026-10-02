import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useThemeStore } from "@/stores/theme";

describe("useThemeStore", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    setActivePinia(createPinia());
  });

  it("adds the dark class to the document element", () => {
    const store = useThemeStore();
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    store.initTheme();

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("is idempotent when called repeatedly", () => {
    const store = useThemeStore();

    store.initTheme();
    store.initTheme();

    expect([...document.documentElement.classList]).toEqual(["dark"]);
  });
});
