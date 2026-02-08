# Styling Guide

When to use Tailwind utilities vs global `.c-*` classes, and how design tokens work.

---

## Design Tokens (CSS Variables)

All theme-aware colors are defined as CSS variables in `src/styles/global.css`:

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg-primary` | `#FAFAF9` | `#0C0A09` | Page background |
| `--bg-surface` | `#FFFFFF` | `#1C1917` | Card/panel background |
| `--bg-elevated` | `#F5F5F4` | `#292524` | Hover states, badges |
| `--text-primary` | `#1C1917` | `#FAFAF9` | Headings, strong text |
| `--text-muted` | `#57534E` | `#A8A29E` | Body text, descriptions |
| `--text-subtle` | `#A8A29E` | `#78716C` | Captions, placeholders |
| `--accent` | `#0D9488` | `#2DD4BF` | Brand color, links, CTAs |
| `--accent-hover` | `#0F766E` | `#5EEAD4` | Hover state for accent |
| `--accent-muted` | `#CCFBF1` | `#134E4A` | Subtle accent backgrounds |
| `--border-default` | `#E7E5E4` | `#44403C` | Card borders, inputs |
| `--border-subtle` | `#F5F5F4` | `#292524` | Dividers |

**Usage:** `bg-[var(--bg-primary)]`, `text-[var(--accent)]`, `border-[var(--border-default)]`

Because tokens auto-switch between light/dark, you rarely need Tailwind `dark:` variants.

---

## Typography

| Element | Font | Tailwind class |
|---------|------|----------------|
| Headings | Plus Jakarta Sans | `font-heading` |
| Body | Source Sans 3 | `font-sans` (default) |
| Code | System mono | `font-mono` |

Base heading styles are set in `global.css` `@layer base`. Components override sizes with Tailwind utilities like `text-4xl md:text-5xl`.

---

## When to Use What

### Tailwind Utilities (in component markup)

Use for **one-off layout, spacing, and responsive adjustments**:

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
```

### Global `.c-*` Classes (in `global.css`)

Use for **patterns repeated across 3+ files**:

| Class | Purpose |
|-------|---------|
| `.c-container` | Max-width wrapper with responsive padding |
| `.c-section` | Vertical section padding (4rem / 5rem) |
| `.c-section-eyebrow` | Small uppercase accent label above section title |
| `.c-section-title` | Section heading (responsive sizing) |
| `.c-section-desc` | Section description (max-width, muted color) |
| `.c-btn` | Base button (flex, rounded, transition) |
| `.c-btn-primary` | Accent background, white text |
| `.c-btn-secondary` | Accent border, transparent background |
| `.c-btn-ghost` | No border, subtle hover |
| `.c-card` | Rounded border, surface background, hover effect |
| `.c-badge` / `.c-badge-accent` / `.c-badge-subtle` | Inline badge |
| `.c-input` | Form input/textarea with focus ring |
| `.c-link` | Inline link with icon, muted-to-accent hover |

### Prose Styles (in `prose.css`)

Applied to blog/project markdown content via `<div class="prose">`. Uses design tokens for automatic light/dark support.

---

## Rules

1. **No `@apply`** — write plain CSS in `global.css` layers instead.
2. **No hardcoded colors** — always use CSS variables or Tailwind's token-based arbitrary values.
3. **Prefer composition** — combine `.c-btn` + `.c-btn-primary` + Tailwind size utilities rather than creating many specific variants.
4. **Icons** — use `@lucide/astro` for all icons. Do not use inline SVGs.

---

## File Structure

```
src/styles/
├── global.css     # Tokens, base styles, .c-* components, animations
└── prose.css      # Blog/project markdown styles (imported by global.css)
```
