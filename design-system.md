# Design System

This is the design system for Aron Ryszka's portfolio. Use it as the
authoritative spec when building new pages. When in doubt, look at
`reference/branchflow-case-study.html` — it's the worked example of every
pattern below.

---

## Philosophy

Editorial, calm, paper-feeling. Generous whitespace. Restrained colour. Type
does most of the work. Every element earns its place — if removing it doesn't
hurt, remove it.

Inspired by long-form digital reading (The Browser, Aeon) and design
portfolios that respect the eye (Frank Chimero, Pentagram case studies).
Avoid: SaaS-default Inter-everywhere look, neon accents, hero gradients,
animated illustrations, anything that says "AI startup 2024."

---

## Colour tokens

All values are CSS custom properties on `:root`. The base palette is shared;
each project page overrides `--accent` (and its derivatives) only.

### Base palette (shared across all pages)

```css
--bg:           #F5F2EB;   /* page background — warm paper */
--paper:        #FFFEFA;   /* card / surface */
--paper-alt:    #F0EDE6;   /* secondary surface */
--border:       #DDD8CE;   /* primary border */
--border-soft:  #E8E3D6;   /* hairline */
--ink:          #2C2416;   /* primary text */
--ink-soft:     #6B6256;   /* secondary text */
--ink-mute:     #9C948A;   /* tertiary text, labels */
--commit:       #5A7C5A;   /* sage — confirmed / success state */
--commit-soft:  #EDF4ED;
--stale:        #C49000;   /* amber — pending / warning */
--stale-soft:   #FEF7E0;
--danger:       #B5403A;   /* red — critical / error */
--danger-soft:  #FCEEED;
```

### Per-project accent (the only thing that changes per page)

Set these on `:root` inside each project page. The base palette stays
identical across all pages — the accent is the only variation.

| Project        | --accent  | --accent-soft | --accent-deep |
|----------------|-----------|---------------|---------------|
| Index / home   | `#C4652A` | `#FBF0E8`     | `#A8541F`     |
| BranchFlow     | `#C4652A` | `#FBF0E8`     | `#A8541F`     |
| Guardian 4     | `#1F5F6B` | `#E8F2F4`     | `#164751`     |
| Chapter 2      | `#5B3F6E` | `#EFE9F2`     | `#452F54`     |
| EverMatch      | `#B85878` | `#F8E8EE`     | `#9B4262`     |

`--accent-soft` is used for tint backgrounds (hover states, pull-quote
backgrounds, severity pills); `--accent-deep` is used sparingly for hover
states on links and buttons.

---

## Typography

Two typefaces, served from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
```

```css
--serif:  'Fraunces', Georgia, 'Times New Roman', serif;
--sans:   'DM Sans', 'Segoe UI', system-ui, sans-serif;
```

### Scale (Major Third — ratio 1.25)

| Token       | Size                              | Use                                 |
|-------------|-----------------------------------|--------------------------------------|
| Display     | `clamp(3.25rem, 9vw, 6rem)`       | Hero h1 only                         |
| Section h2  | `clamp(2rem, 4.5vw, 3rem)`        | Section titles                       |
| Subhead h3  | `1.375rem`                        | Theme/sub-section titles             |
| Lead        | `1.25rem`                         | Section opener paragraph             |
| Body        | `1.0625rem` (17px)                | Default body                         |
| Body-sm     | `0.9375rem` (15px)                | Caption, secondary copy              |
| Eyebrow     | `0.75rem`, uppercase, +0.18em LS  | Section labels                       |
| Caption     | `0.875rem`                        | Figcaption, meta                     |

**Rules:**
- Display, h2, h3, lead, eyebrow use **Fraunces** (serif).
- Body, captions, UI use **DM Sans** (sans).
- Line height: 1.65 body, 1.0–1.3 headings.
- Letter-spacing: tighter as text gets bigger (`-0.025em` at h2+, `-0.005em` at body, `+0.14–0.18em` on eyebrows/all-caps).
- Italic is for emphasis (always Fraunces italic, never sans italic).
- Maximum prose width: `38rem` (~608px). Don't let body lines exceed ~75 characters.

### The drop-cap

First paragraph of each section uses a serif drop-cap on the first letter,
sized ~4.25rem in `--accent`. See `.prose p.lead::first-letter` in the
reference HTML.

---

## Spacing (8pt grid)

All spacing is `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128px`. Never
random values.

**The most important rule:** internal padding inside a component must be
**less than or equal to** the gap between components. When violated, things
feel disconnected from their containers.

### Vertical rhythm

- Section padding: `4rem` mobile, `6rem` desktop
- Section title to body: `2.5rem`
- Paragraph to paragraph: `1.25rem`
- Between cards: `1.25rem`
- Inside card: `1.75rem 1.875rem`

### Containers

```css
--container:       min(720px, calc(100% - 3rem));  /* body prose */
--container-wide:  min(940px, calc(100% - 3rem));  /* grids, diagrams */
--container-full:  min(1100px, calc(100% - 3rem)); /* nav, footer */
```

---

## Components

These are the components used across the site. All exist in
`reference/branchflow-case-study.html` — copy their HTML and CSS as the
starting point, change content only.

### Top nav (`.topnav`)
Sticky, blurred-backdrop, hairline border-bottom. Mark on left (project
name in Fraunces, with `--accent` dot). Anchor links on right (hidden
below 760px). Same component on every page — only the mark text and the
link set changes.

### Hero (`.hero`)
- Eyebrow (uppercase, `--accent`)
- h1 title (Display size, Fraunces 300)
- Dek (italic Fraunces, 32ch max)
- Lede (one short paragraph, Fraunces 400, 52ch max)
- Meta `<dl>` grid (4 items: Author, Format/Year, Method, Built/Role)
- Optional `.live-link` pill (CTA to live demo, see BranchFlow)

### Section (`<section>` + `.section-head` + `.prose`)
- Section number ("01", "02"…) in Fraunces 300, `--accent`, with " /" suffix
- Section title — can include `<em>` for italic accent-coloured emphasis on
  one word
- `.prose` wraps the body content, max-width 38rem

### Pull quote (`blockquote.quote`)
2px left border in `--accent`, italic Fraunces body, `<cite>` attribution
in DM Sans small-caps below. Max-width 36em.

### Hero stat (`.hero-stat`)
For headline findings. Big Fraunces numeral in `--accent`, italic label
below. Hairline rules on either side at vertical centre. See the "4 of 4"
example in BranchFlow.

### Severity pill (`.severity`)
Small uppercase pill for theme severity. Variants:
- `.severity.critical` → `--danger-soft` bg, `--danger` text
- `.severity.major`    → `--stale-soft` bg, `--stale` text
- `.severity.moderate` → `--paper-alt` bg, `--ink-soft` text
- `.severity.win`      → `--commit-soft` bg, `--commit` text

### Numbered list (`.failures`, `.impl`)
List items prefixed with `01`, `02`… in serif accent colour, hairline rules
above and below each item, with a strong serif item title and a sans body.

### Commitment callout (`.commitment`)
Card with left border in `--commit` (sage). Uppercase label, serif title,
sans body. Used to highlight non-negotiable design decisions.

### Browser-frame preview (`.browser-frame`)
Used to display a project screenshot with browser chrome. Includes three
window-dot indicators, a URL pill, and an "Open in new tab ↗" link. The
viewport content is a clickable link to the live demo, with a hover-state
"Open" pill that surfaces in the bottom-right corner. Used for projects
with live demos (BranchFlow); for projects without, use a simple `.figure`
with a screenshot.

### Project tile (index page only — new pattern)
On the landing page, each project gets a tile in a 2-column grid:
- Eyebrow line: year and project type
- Serif title (Fraunces 400, ~1.75rem)
- One-sentence pitch (Fraunces italic, lede style)
- 2–3-sentence body
- "Read case →" link in `--accent`
- Subtle left border in the project's own accent colour
- Hover: gentle lift (`translateY(-2px)`) + accent border thickens

---

## Layout

- Single-column body prose (max 38rem)
- Two-column grids for props / commitments (1 col on mobile)
- 2-column project tile grid on index (1 col on mobile)
- Generous section breaks (hairline border-bottom, 4–6rem padding)
- Sticky topnav with blur backdrop

---

## Motion

Used sparingly. Only `transform` and `opacity` (never `width`/`height`).

- Hero load: staggered fade-up on `eyebrow`, `title`, `dek`, `lede`, `meta`
  (80ms delays, 700ms duration, ease-out)
- Project tile hover: `transform: translateY(-2px)` over 180ms ease-out
- Link hover: colour transition 150ms ease
- Browser-frame screenshot hover: subtle `scale(1.015)` over 600ms
- Respect `prefers-reduced-motion: no-preference`

---

## Accessibility

- All interactive elements have visible focus state (`outline: 2px solid var(--accent); outline-offset: 3px`)
- Touch targets: 44×44px minimum
- Body text contrast: 4.5:1 minimum (test with `--ink` on `--bg`)
- Images have meaningful `alt` text
- Section landmarks use semantic HTML (`<section>`, `<header>`, `<footer>`, `<nav>`, `<main>`)
- Skip-to-content link at top of body (technically optional but adds polish)

---

## What NOT to do

- ❌ Don't use icons in body copy (the visual language is type + colour, no iconography)
- ❌ Don't use box-shadows except on the browser-frame preview
- ❌ Don't add emoji
- ❌ Don't use rounded corners larger than 10px (browser-frame max)
- ❌ Don't centre body text (left-align always; only the hero-stat is centred)
- ❌ Don't use more than ONE accent colour per page
- ❌ Don't introduce new typefaces
- ❌ Don't add dividers between every paragraph — let whitespace do it
