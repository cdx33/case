# Design spec — Round 1 redesign

This spec extends the existing design system (still authoritative — see the
current BranchFlow page as the worked example of the baseline). What
follows are the *additions* and *upgrades* for the redesign. Apply them to
`branchflow.html` in this round; we propagate to other pages after sign-off.

---

## Direction

**Stripe Press as the primary reference.** Editorial substance with
scroll-driven choreography. Confident type at scale, ordered margins,
disciplined motion. Restraint, not minimalism — every element earns its
place.

**Pentagram's "About this project" pattern** for case study metadata —
sticky sidebar in the left margin on desktop, accordion on mobile.

**Apple-style narrative beats** — section reveals on scroll, one
"signature moment" per page that uses pin or counter mechanics.

---

## New components

### 1. About this project sidebar (`.case-sidebar`)

Sticky sidebar in the left margin. Lives on every case study page.

**Desktop behaviour:**
- Position: `sticky`, `top: 96px` (clear of the topnav)
- Width: 220px
- Lives in the page's left margin, *outside* the main reading column
- Stays visible throughout the case study; releases at the footer

**Mobile behaviour (< 760px):**
- Becomes a `<details>` accordion immediately under the summary card
- Default state: closed
- Summary label: "About this project ↓"

**Content structure:**
```
[Eyebrow:] ABOUT THIS PROJECT

[Field — small caps label, tabular figures value]
Year       —  2025–26
Format     —  MSc capstone
Role       —  Research · concept · design · build
Method     —  Research-through-design
Stack      —  React · Gemini 2.5 Flash
Demo       —  branchingv2.vercel.app ↗

[Divider]

[Eyebrow:] OUTCOMES

4 of 4 participants articulated the conceptual model unprompted
Mean SUS 60 (range 45–80)
Two pilots and four valid think-aloud sessions
```

**Visual specs:**
- Eyebrow style same as existing `.eyebrow` (uppercase, accent colour, +0.14em)
- Labels in DM Sans, small caps via `font-variant-caps: all-small-caps`, ink-mute colour
- Values in DM Sans, ink colour, **tabular figures** via `font-variant-numeric: tabular-nums`
- Lines separated by a 1px hairline at the top of each field row
- Outcomes are bullet-free; each on its own line, separated by 0.5rem
- "Demo" value uses mono (IBM Plex Mono) for the URL, with `↗` in accent colour
- Outer border: none. The sidebar lives in negative space, no card chrome.

### 2. Summary card (`.summary-card`)

Sits at the top of the main reading column, immediately after the hero,
before Section 01. Three lines, scannable in five seconds.

**Visual specs:**
- Background: `var(--accent-soft)` (very subtle tint of the page accent)
- Border: 1px solid `color-mix(in srgb, var(--accent) 20%, transparent)`
- Border-radius: 6px
- Padding: 2rem 2.25rem on desktop, 1.5rem 1.5rem on mobile
- Width: matches main reading column (max 38rem)
- Eyebrow label at top: "IN SHORT" (uppercase, accent, +0.14em)
- Three lines below, each prefixed by an italic Fraunces lead-in:
  - *The problem.* …
  - *The bet.* …
  - *What surfaced.* …
- The italic lead-ins are accent-coloured Fraunces italic, weight 500
- The body of each line is DM Sans, 17px, line-height 1.55

**HTML structure:**
```html
<aside class="summary-card">
  <p class="eyebrow">In short</p>
  <p><em>The problem.</em> Chat interfaces don't support sustained research — five documented failure modes around context, drift, cognition, metacognition.</p>
  <p><em>The bet.</em> Interface architecture (not better models) can address them: branching, curated context, explicit commit, goal visibility.</p>
  <p><em>What surfaced.</em> The conceptual model landed (4 of 4 articulated it unprompted). The verb surface didn't — clarity-of-concept ≠ clarity-of-action. Five transferable lessons for AI research tools.</p>
</aside>
```

### 3. Oversized margin numerals (signature element)

Section numbers shift from inline-small (current) to oversized in the left margin.

**Visual specs:**
- Font: Fraunces 300, `opsz` 144, `SOFT` 60
- Size: `clamp(4rem, 9vw, 7rem)`
- Colour: `var(--accent)`
- Position: hangs in the left margin, vertically aligned to the section title's first line
- No trailing " /" (the existing pattern). Just the numeral.
- On mobile: scales down to 3rem, stays inline above the section title

This is the page's visual rhythm — the reader sees these huge numerals march
down the left edge as they scroll.

### 4. Mono treatment for technical specimens (`.mono`)

Wrap dataset names, error codes, version numbers, and other "specimen"
content in `<code class="mono">` (or just `<code>`). Uses **IBM Plex Mono**.

**Where to use it:**
- `HCMST` (dataset name) → mono
- `[PROPOSED_ACTIONS]` → already mono via `<code>`, upgrade to Plex Mono
- `Error 06` → mono with the number tabular
- `n = 4` → mono
- Vercel URLs in body copy → mono

**Visual specs:**
- Font: 'IBM Plex Mono', monospace
- Size: 0.875em (slightly smaller than body)
- Background: very subtle paper-alt tint
- Padding: 0.125em 0.4em
- Border-radius: 3px
- Border: 1px solid var(--border-soft)

### 5. Section-opener small caps

The first 2–3 words of each section's lead paragraph render in small caps.

**Example:**
> ONCE LEARNED, branching architecture and explicit commit semantics
> reduce sustained cognitive load by externalising state…

**Visual specs:**
- Wrap the opening words in `<span class="opener">`
- `.opener { font-variant-caps: all-small-caps; letter-spacing: 0.04em; font-weight: 500; }`
- Inherits the Fraunces serif of the lead paragraph
- Applied to ONE lead paragraph per section (the `.prose .lead` paragraph)

---

## Typography upgrades

### Hero h1 — larger

**Old:** `clamp(3.25rem, 9vw, 6rem)`
**New:** `clamp(3.5rem, 10vw, 7.25rem)`

Plus, on the hero h1 only, add:
- `font-variation-settings: "opsz" 144, "SOFT" 50;`
- The SOFT axis rounds the letterforms slightly — warmer, more inviting

### Dek — softer Fraunces italic

The dek (italic subtitle under h1) gains the SOFT axis:
- `font-variation-settings: "SOFT" 100;`
- Reads handwritten-warm vs the current precision-italic

### Tabular figures everywhere numbers appear in metadata

Add `font-variant-numeric: tabular-nums` to:
- `.meta dd` (hero meta strip)
- `.case-sidebar` values
- Any stat block numerals

### IBM Plex Mono — add to font load

Update the Google Fonts link to include Plex Mono:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Set:
```css
--mono: 'IBM Plex Mono', 'SF Mono', Menlo, monospace;
```

---

## Layout — three-column grid

The case study layout shifts from single-column to three-column on desktop:

```
┌─────────┬───────────────────┬─────────┐
│ sidebar │  reading column   │ margin  │
│ 220px   │  max 640px        │ flex    │
│ sticky  │                   │ (empty) │
└─────────┴───────────────────┴─────────┘
```

**CSS:**
```css
.case-article {
  display: grid;
  grid-template-columns: 220px minmax(0, 640px) 1fr;
  gap: 3rem;
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: 2rem;
}

.case-sidebar { grid-column: 1; }
.case-content { grid-column: 2; }

@media (max-width: 960px) {
  .case-article {
    grid-template-columns: minmax(0, 640px);
    justify-content: center;
  }
  .case-sidebar { grid-column: 1; }
  .case-content { grid-column: 1; }
}
```

The section numeral lives inside the reading column, but positioned absolute
to overflow left into the sidebar gutter at desktop sizes.

**Hero remains full-width** (above the article grid). The hero block sits
above the three-column layout. The grid kicks in for everything below the
hero.

---

## Scroll choreography

Library: **GSAP + ScrollTrigger** for triggers and timelines.
Smooth scroll: **Lenis** (desktop only; mobile uses native scroll).

Both via CDN. No bundler.

### Hero arrival (page load, not scroll)

Staggered fade-up on:
- eyebrow → 0ms
- h1 title → 80ms
- dek → 220ms
- lede → 340ms
- meta strip → 460ms
- live-link pill → 580ms

Duration: 700ms each. Easing: `cubic-bezier(0.2, 0.6, 0.2, 1)`. Translate-Y: 8px → 0.

### Summary card reveal (on scroll into view)

When `.summary-card` enters viewport (trigger at top 80%):
- Card itself fades up, opacity 0 → 1, y 16 → 0, 600ms
- Three `<p>` lines reveal in sequence at 120ms stagger after the card

### Section reveals (on scroll into view)

When a `<section>` enters viewport (trigger at top 75%):
- Section numeral scales up: `scale(0.85) → scale(1)`, 700ms, ease-out
- Section title h2 fades up: 16 → 0, opacity 0 → 1, 600ms, delayed 80ms
- Lead paragraph fades up: 12 → 0, 600ms, delayed 160ms

### Sequential lists (failures, themes, implications)

When the list enters viewport:
- Each `<li>` reveals in sequence: opacity 0 → 1, y 12 → 0
- Stagger: 100ms between items
- Total duration: ~140ms per item

### Propositions grid

Four cards reveal in reading order: top-left, top-right, bottom-left,
bottom-right. 140ms stagger. 600ms duration each.

### The hero-stat (4 of 4)

When the `.hero-stat` enters viewport:
- The numerals count from 0 → 4 over 800ms with `easeOut`
- The "of" word fades in at 200ms
- The label fades up at 600ms

Implementation: a small counter function. The "4" elements should be set
up as `<span class="stat-num" data-target="4">0</span>` and the JS animates
the textContent from 0 to data-target.

### The artefact section — pin the browser-frame (desktop only)

When Section 03's browser-frame enters viewport:
- Pin the browser-frame as a sticky element
- Continue scrolling content past it on the right (the two commitment cards
  appear sequentially)
- Release when the section ends

**Implementation detail:** use ScrollTrigger's `pin` mode on the
`.figure.live-preview` element, with `endTrigger` set to the
`.commitments` div's bottom. Only enable when viewport > 960px (skip on
mobile).

### Reduced motion

Wrap every animation in:
```js
if (matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  // run animation
} else {
  // set final state immediately
}
```

---

## What stays exactly the same

- All existing CSS tokens (colour, spacing, type scale baselines)
- All existing components (`.commitment`, `.failures`, `.impl`, `.quote`, `.severity`, etc.)
- The browser-frame component
- The footer
- The topnav structure
- All copy that isn't explicitly changed in `content-updates.md`

---

## What gets added to the HTML head

```html
<!-- existing google fonts link gets Plex Mono appended (see typography section) -->

<!-- new: animation libraries via CDN, before closing </body> -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.0.42/dist/lenis.min.js"></script>
<script src="scripts/case-choreography.js"></script>
```

The `case-choreography.js` file is provided in this package.
