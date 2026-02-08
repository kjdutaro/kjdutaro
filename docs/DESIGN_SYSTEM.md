# Portfolio Design System

Clean, minimal, professional, and modern. Slightly unique and memorable without being flashy. Easy on the eyes in light and dark mode. Readable, calm, and approachable.

---

## 1. Color Palette

### Light mode

| Role | Variable | HEX | Tailwind usage |
|------|----------|-----|----------------|
| **Background (page)** | `--bg-primary` | `#FAFAF9` | `bg-[var(--bg-primary)]` |
| **Background (surface/card)** | `--bg-surface` | `#FFFFFF` | `bg-[var(--bg-surface)]` |
| **Background (elevated)** | `--bg-elevated` | `#F5F5F4` | `bg-[var(--bg-elevated)]` |
| **Text (primary)** | `--text-primary` | `#1C1917` | `text-[var(--text-primary)]` |
| **Text (muted)** | `--text-muted` | `#57534E` | `text-[var(--text-muted)]` |
| **Text (subtle)** | `--text-subtle` | `#A8A29E` | `text-[var(--text-subtle)]` |
| **Border (default)** | `--border-default` | `#E7E5E4` | `border-[var(--border-default)]` |
| **Border (subtle)** | `--border-subtle` | `#F5F5F4` | `border-[var(--border-subtle)]` |
| **Accent (brand)** | `--accent` | `#0D9488` | `text-[var(--accent)]` / `bg-[var(--accent)]` |
| **Accent (hover)** | `--accent-hover` | `#0F766E` | Hover states |
| **Accent (muted bg)** | `--accent-muted` | `#CCFBF1` | `bg-[var(--accent-muted)]` |
| **Focus ring** | `--focus-ring` | `#0D9488` | `focus-visible:ring-[var(--focus-ring)]` |

### Dark mode

| Role | Variable | HEX | Notes |
|------|----------|-----|--------|
| **Background (page)** | `--bg-primary` | `#0C0A09` | Warm near-black |
| **Background (surface/card)** | `--bg-surface` | `#1C1917` | Slightly elevated |
| **Background (elevated)** | `--bg-elevated` | `#292524` | Cards, dropdowns |
| **Text (primary)** | `--text-primary` | `#FAFAF9` | High contrast |
| **Text (muted)** | `--text-muted` | `#A8A29E` | Body, secondary |
| **Text (subtle)** | `--text-subtle` | `#78716C` | Placeholders, captions |
| **Border (default)** | `--border-default` | `#44403C` | Cards, inputs |
| **Border (subtle)** | `--border-subtle` | `#292524` | Dividers |
| **Accent (brand)** | `--accent` | `#2DD4BF` | Teal, good on dark |
| **Accent (hover)** | `--accent-hover` | `#5EEAD4` | Hover states |
| **Accent (muted bg)** | `--accent-muted` | `#134E4A` | Badges, highlights |
| **Focus ring** | `--focus-ring` | `#2DD4BF` | Same as accent |

**Rationale:** Warm stone/neutral base (not pure gray) for a calmer feel. Teal accent is professional, accessible (WCAG AA on both modes), and slightly distinctive without being loud.

---

## 2. Typography

### Font families

| Use | Variable | Stack | Tailwind |
|-----|----------|------|----------|
| **Headings** | `--font-heading` | Gondens, InterVariable, system-ui, sans-serif | `font-heading` |
| **Body** | `--font-sans` | InterVariable, system-ui, sans-serif | `font-sans` |
| **Monospace / code** | `--font-mono` | ui-monospace, "Cascadia Code", "JetBrains Mono", monospace | `font-mono` |

### Font sizes and weights

| Element | Size (rem) | Tailwind | Weight | Line height | Letter spacing |
|---------|------------|----------|--------|-------------|----------------|
| **H1 (hero)** | 3rem / 3.75rem / 4rem | `text-4xl md:text-5xl lg:text-6xl` | 700 | 1.1 | -0.025em |
| **H2 (section)** | 1.875rem / 2.25rem | `text-2xl md:text-3xl` | 600 | 1.25 | -0.02em |
| **H3 (card title)** | 1.25rem | `text-xl` | 600 | 1.3 | -0.01em |
| **H4** | 1.125rem | `text-lg` | 600 | 1.4 | 0 |
| **Body** | 1rem | `text-base` | 400 | 1.65 | 0 |
| **Body small** | 0.875rem | `text-sm` | 400 | 1.5 | 0 |
| **Caption** | 0.75rem | `text-xs` | 400 | 1.4 | 0.02em |
| **Button** | 0.9375rem (15px) | `text-[0.9375rem]` or `text-sm` | 500 | 1.25 | 0 |

### Implementation (Tailwind v4)

- Use `font-heading` for H1–H4.
- Use `font-sans` for body and UI.
- Use `font-mono` for code snippets and tech tags.
- Heading sizes: `tracking-tight` (-0.025em to -0.01em); body: default tracking.

---

## 3. Spacing / layout system

### Section spacing

| Context | Vertical padding | Tailwind | Max width (content) |
|---------|------------------|----------|----------------------|
| **Hero** | 4rem–6rem top/bottom | `py-16 md:py-24 lg:py-28` | `max-w-4xl` or `max-w-5xl` |
| **Standard section** | 4rem–5rem | `py-16 md:py-20` | `max-w-4xl` or `max-w-5xl` |
| **Tight section** | 3rem–4rem | `py-12 md:py-16` | same |
| **Container padding** | 1rem–2rem horizontal | `px-4 md:px-6 lg:px-8` | — |

### Card spacing

- Card internal padding: `p-5 md:p-6` (1.25rem–1.5rem).
- Gap between card elements: `gap-3` or `gap-4`.
- Gap between cards in grid: `gap-6 md:gap-8`.

### Project grid

- **Desktop (lg):** 2 columns, `grid-cols-1 lg:grid-cols-2`, `gap-6 md:gap-8`.
- **Tablet (md):** 1 or 2 columns, same gap.
- **Mobile:** 1 column, `gap-6`.

### Responsive breakpoints (Tailwind default)

- `sm`: 640px  
- `md`: 768px  
- `lg`: 1024px  
- `xl`: 1280px  

Use `max-w-5xl mx-auto px-4 md:px-6 lg:px-8` for main content wrapper.

---

## 4. Component design

### Buttons

| Variant | Background | Text | Border | Hover | Active | Focus |
|---------|------------|------|--------|-------|--------|--------|
| **Primary** | `--accent` | white | none | `--accent-hover` | Slightly darker | ring 2px `--focus-ring` |
| **Secondary** | transparent | `--accent` | 1px `--accent` | `--accent-muted` (bg) | — | ring 2px `--focus-ring` |
| **Ghost** | transparent | `--text-primary` | none | `--bg-elevated` | — | ring 2px `--focus-ring` |

- Height: `h-10` or `h-11` (40–44px).
- Padding: `px-5 py-2.5` or `px-6 py-3`.
- Border radius: `rounded-lg` (0.5rem).
- Transition: `transition-colors duration-200`.
- Min touch target: 44×44px.

**Tailwind examples:**

- Primary: `bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:opacity-90 rounded-lg px-5 py-2.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]`
- Secondary: `border border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent-muted)] dark:hover:bg-[var(--accent-muted)] rounded-lg px-5 py-2.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`

### Links

- Default: `text-[var(--accent)]`.
- Hover: `text-[var(--accent-hover)]` and/or `underline`.
- Transition: `transition-colors duration-150`.
- Focus: `focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-sm`.

### Cards (project / content cards)

- Background: `--bg-surface`.
- Border: `1px solid var(--border-default)`.
- Border radius: `rounded-xl` (0.75rem).
- Shadow (light): `0 1px 3px rgba(0,0,0,0.06)`.
- Shadow (dark): `0 1px 3px rgba(0,0,0,0.2)` or none.
- Hover: subtle border change to `--accent` and/or shadow `0 4px 12px rgba(0,0,0,0.08)` (light), `0 4px 12px rgba(0,0,0,0.25)` (dark).
- Transition: `transition-all duration-200`.

### Inputs / forms

- Background: `--bg-surface`.
- Border: `1px solid var(--border-default)`.
- Border radius: `rounded-lg`.
- Padding: `px-3 py-2.5` or `px-4 py-3`.
- Focus: `ring-2 ring-[var(--focus-ring)] ring-offset-2 ring-offset-[var(--bg-primary)]`, border color to accent.
- Placeholder: `--text-subtle`.
- Error: border and/or text using a semantic error color (e.g. `#DC2626` light, `#F87171` dark).

---

## 5. Hero and project section layout

### Hero

- **Background:** Solid `--bg-primary`. Optional: very subtle gradient or pattern (low contrast).
- **Alignment:** Left-align text on desktop; center optional on mobile. `text-left md:text-left` with `max-w-3xl` or `max-w-2xl` for copy.
- **Structure:**
  - Small optional label above name (e.g. “Web Developer”) in `--text-muted`, `text-sm` or `text-base`.
  - H1: name + role, accent on name or key phrase.
  - Subheading: one short line (role/tagline).
  - Body: 2–3 lines, `max-w-xl` or `max-w-2xl`.
  - CTAs: horizontal flex, `gap-3` or `gap-4`, primary + secondary.
- **Min height:** `min-h-[calc(100vh-80px)]` or `min-h-[70vh]` so hero doesn’t feel cramped.
- **CTA placement:** Directly under body paragraph; same alignment as text.

### Projects

- **Layout:** CSS Grid, `grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8`.
- **Card layout:**
  - Image on top (if present): `aspect-video` or fixed `h-44 md:h-48`, `object-cover`, `rounded-t-xl` (or rounded only on top).
  - Content block below: title, description, tech tags, then links (Code / Demo).
- **Spacing:** Padding inside card `p-5 md:p-6`; between title and description `mb-2`; between description and tags `mt-3`; between tags and links `mt-4 pt-4 border-t border-[var(--border-subtle)]`.
- **Hover:** Card: border color to `--accent`, slight shadow; image: `scale-105` with `transition-transform duration-300` and `overflow-hidden` on wrapper.
- **Featured:** Optional left border `border-l-4 border-l-[var(--accent)]` or “Featured” badge using `--accent-muted` background.

---

## 6. Light / dark mode handling

### What to switch

- **Always switch:** `--bg-primary`, `--bg-surface`, `--bg-elevated`, `--text-primary`, `--text-muted`, `--text-subtle`, `--border-default`, `--border-subtle`, `--accent`, `--accent-hover`, `--accent-muted`, `--focus-ring`.
- **Keep:** Semantic colors (success, error, warning) can have light/dark variants; use same variable names and redefine in `.dark`.

### Implementation

- Use class-based dark mode: `class="dark"` on `<html>` (you already do).
- Define all token values in `:root` (light) and `.dark` (dark).
- Use CSS variables in Tailwind via `var(--...)` so components don’t need `dark:` for tokens (e.g. `bg-[var(--bg-primary)]`).

### Theme toggle icon

- **Lucide:** `Sun` for “switch to light” (shown in dark mode), `Moon` for “switch to dark” (shown in light mode). Or `SunMoon` for a single icon that reflects state.
- Size: `size-5` (20px). Color: `text-[var(--text-muted)]` with hover `text-[var(--text-primary)]`.
- Ensure focus ring for keyboard users.

### Contrast

- In both modes, keep body text (e.g. `--text-muted`) at least 4.5:1 against `--bg-primary` (WCAG AA). The palette above meets this.
- Accent links/buttons: at least 3:1 for large text, 4.5:1 for small text. Teal on light `#0D9488` and on dark `#2DD4BF` are chosen for that.

---

## 7. Design tokens summary (implementation reference)

### CSS variables (paste into `global.css`)

**Light (`:root`):**

```css
--bg-primary: #FAFAF9;
--bg-surface: #FFFFFF;
--bg-elevated: #F5F5F4;
--text-primary: #1C1917;
--text-muted: #57534E;
--text-subtle: #A8A29E;
--border-default: #E7E5E4;
--border-subtle: #F5F5F4;
--accent: #0D9488;
--accent-hover: #0F766E;
--accent-muted: #CCFBF1;
--focus-ring: #0D9488;
```

**Dark (`.dark`):**

```css
--bg-primary: #0C0A09;
--bg-surface: #1C1917;
--bg-elevated: #292524;
--text-primary: #FAFAF9;
--text-muted: #A8A29E;
--text-subtle: #78716C;
--border-default: #44403C;
--border-subtle: #292524;
--accent: #2DD4BF;
--accent-hover: #5EEAD4;
--accent-muted: #134E4A;
--focus-ring: #2DD4BF;
```

### Tailwind-friendly quick reference

| Token | Light | Dark | Example class |
|-------|--------|------|----------------|
| Page bg | `#FAFAF9` | `#0C0A09` | `bg-[var(--bg-primary)]` |
| Card bg | `#FFFFFF` | `#1C1917` | `bg-[var(--bg-surface)]` |
| Primary text | `#1C1917` | `#FAFAF9` | `text-[var(--text-primary)]` |
| Muted text | `#57534E` | `#A8A29E` | `text-[var(--text-muted)]` |
| Border | `#E7E5E4` | `#44403C` | `border-[var(--border-default)]` |
| Accent | `#0D9488` | `#2DD4BF` | `bg-[var(--accent)]` `text-[var(--accent)]` |

### Typography (Tailwind)

- Headings: `font-heading font-semibold md:font-bold tracking-tight`
- Body: `font-sans text-base text-[var(--text-muted)] leading-relaxed`
- Small: `text-sm text-[var(--text-muted)]`
- Code: `font-mono text-sm`

### Spacing (Tailwind)

- Section: `py-16 md:py-20 px-4 md:px-6 lg:px-8`
- Hero: `py-16 md:py-24 lg:py-28`
- Card: `p-5 md:p-6`
- Gaps: `gap-3`, `gap-4`, `gap-6 md:gap-8`

### Radii and shadows

- Card: `rounded-xl`
- Button / input: `rounded-lg`
- Shadow (card): `shadow-sm` (Tailwind) or custom `0 1px 3px rgba(0,0,0,0.06)` (light)

### Implementation notes

- **Theme-aware colors:** Use CSS variables in Tailwind so light/dark switch automatically: `bg-[var(--bg-primary)]`, `text-[var(--accent)]`, `border-[var(--border-default)]`. The utilities `bg-accent` / `text-accent` use the static teal from `tailwind.config.mjs`; for components that must change in dark mode, use `var(--accent)`.
- **Tokens are defined in** `src/styles/global.css` (`:root` for light, `.dark` for dark). Legacy aliases (`--accent-primary`, `--border-primary`, etc.) remain so existing components keep working until you migrate to the canonical names.
- **Tailwind v4:** Use `@custom-variant dark (&:where(.dark, .dark *));` and class-based dark mode; avoid duplicating token values in Tailwind config when using CSS variables.

Use this doc as the single source of truth when implementing or refactoring components in Astro + Tailwind v4.
