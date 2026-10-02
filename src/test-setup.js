import { enableAutoUnmount } from "@vue/test-utils";
import { afterEach, vi } from "vitest";

enableAutoUnmount(afterEach);

window.scrollTo = vi.fn();
