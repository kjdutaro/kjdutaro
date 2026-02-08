/**
 * Theme management — 2-state toggle (light / dark).
 *
 * Behavior:
 * 1. First visit: follow system `prefers-color-scheme`; default to light.
 * 2. After user toggles: persist in `localStorage` and stop auto-following system.
 * 3. A minimal inline script in BaseLayout.astro prevents flash (FOUC).
 * 4. This module handles post-load sync and view-transition re-application.
 */

const THEME_KEY = "theme";

/** Read the effective theme: stored preference > system > light. */
function getTheme(): "dark" | "light" {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** Apply theme class to <html> without writing to localStorage. */
function apply(theme: "dark" | "light") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/** Toggle between light and dark, persisting the user's choice. */
export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  apply(next);
}

/* ---- Lifecycle hooks ---- */

// Re-apply after Astro view transitions swap the DOM.
document.addEventListener("astro:after-swap", () => apply(getTheme()));

// Listen for system preference changes.
// Only act when no explicit user choice is stored.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      apply(e.matches ? "dark" : "light");
    }
  });
