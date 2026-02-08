# Theme System

How the light/dark mode toggle works, and the rules it follows.

---

## Behavior

1. **First visit (no stored preference):** follow the system's `prefers-color-scheme` setting. If the system has no preference, default to light.
2. **After user toggles:** persist the choice in `localStorage` as `"light"` or `"dark"`. From that point on, ignore system changes.
3. **System preference changes:** only applied if no explicit user choice exists in `localStorage`.

---

## Implementation

### Flash prevention (inline `<head>` script)

A tiny inline script in `src/layouts/BaseLayout.astro` runs **before first paint** to set the `dark` class on `<html>`:

```html
<script is:inline>
  (function () {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })();
</script>
```

This prevents a flash of the wrong theme on page load.

### Theme module (`src/scripts/theme.ts`)

Handles post-load concerns:

- **View Transitions:** re-applies theme class after `astro:after-swap` (Astro replaces the DOM during view transitions, which can strip the class).
- **System change listener:** updates theme when the OS preference changes, but only if the user hasn't made an explicit toggle choice.

### Toggle button (`src/components/layout/Header.astro`)

Uses event delegation (listener on `document`) so it works after View Transitions without re-binding:

- Toggles the `dark` class on `<html>`
- Saves `"light"` or `"dark"` to `localStorage`

### CSS tokens

All colors switch automatically via CSS variables:

- Light tokens defined on `:root` in `src/styles/global.css`
- Dark tokens defined on `.dark` selector
- Components use `var(--bg-primary)`, `var(--accent)`, etc. — no `dark:` Tailwind variants needed for token-based colors.

---

## Testing

1. Clear `localStorage.theme` in DevTools to test first-visit behavior.
2. Use DevTools > Rendering > "Emulate CSS media feature prefers-color-scheme" to test system preference detection.
3. Toggle the button and refresh — the choice should persist.
