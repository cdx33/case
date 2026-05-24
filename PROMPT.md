# Build Aron Ryszka's portfolio site

You're going to build a multi-page static portfolio site. Everything you need
is in the `portfolio-package/` folder in this repo. Read the files in this
order **before writing any code**:

1. `portfolio-package/README.md` — overall picture
2. `portfolio-package/design-system.md` — design tokens, components, layout rules
3. `portfolio-package/reference/branchflow-case-study.html` — the existing
   page. **This is your design bible.** Every visual pattern you need to
   replicate is here. Read it end-to-end before building anything.
4. `portfolio-package/content/index.md` — landing page content
5. `portfolio-package/content/guardian-4.md` — Guardian 4 case content
6. `portfolio-package/content/chapter-2.md` — Chapter 2 case content
7. `portfolio-package/content/evermatch.md` — EverMatch case content

## What you're producing

Five HTML files in the repo root (or in the appropriate output directory for
this repo's build system, if it has one — adapt to existing conventions):

| File              | Built from                                | Accent      |
|-------------------|-------------------------------------------|-------------|
| `index.html`      | `content/index.md`                        | `#C4652A`   |
| `branchflow.html` | `reference/branchflow-case-study.html`    | `#C4652A`   |
| `guardian-4.html` | `content/guardian-4.md`                   | `#1F5F6B`   |
| `chapter-2.html`  | `content/chapter-2.md`                    | `#5B3F6E`   |
| `evermatch.html`  | `content/evermatch.md`                    | `#B85878`   |

Plus copy the `portfolio-package/assets/*` files into a final-location
`assets/` folder that's a sibling of the HTML files.

## Build order

Build in this order. Stop after each step and let me review before moving on.

### Step 1 — Update branchflow.html

The reference HTML at `portfolio-package/reference/branchflow-case-study.html`
is already a working case study. Two small changes only:

1. **Update the top nav**: change the mark from `BranchFlow` to
   `Aron Ryszka — BranchFlow`. Replace the in-page anchor links
   (`#gap`, `#bet`, etc.) with a single `Back to work ↗` link pointing
   to `/index.html#work`.
2. **Save the result as `branchflow.html`** in the project's HTML output
   location (alongside where the other pages will live). The original
   file in `portfolio-package/reference/` stays untouched.

Don't change anything else. The body of this page is finished.

### Step 2 — Build index.html

This is the landing page. Use `content/index.md` as the content brief.

Key things to get right:
- The top nav uses `Aron Ryszka` as the mark, with three anchor links
  (`Work`, `About`, `Contact`).
- The hero follows the same structure as branchflow.html — eyebrow,
  Fraunces 300 title, italic dek, lede, meta `<dl>` grid, optional
  `.live-link` pill below.
- The **Selected work** section uses a new component — project tiles —
  spec'd in `design-system.md` (search for "Project tile"). Two-column
  grid on desktop, one on mobile. Each tile has its own accent left-border
  in the project's accent colour.
- About section uses the standard `.prose` + drop-cap pattern.
- Contact section uses a 3-column `<dl>` like the hero meta strip.
- Footer matches branchflow.html's structure.

Quality gate: when you screenshot this page, the project tiles should
read at-a-glance — eyebrow, title, italic pitch, body, link — with the
accent colour clearly different per tile.

### Step 3 — Build guardian-4.html

Use `content/guardian-4.md` as the content brief.

This is a deep case study, similar length and depth to branchflow.html.
The accent colour is `#1F5F6B` (deep teal) — replace ALL accent values
in `:root` with the teal palette specified in `design-system.md`.

Structural notes:
- Seven sections following the section-number pattern (01–07).
- The personal-disclosure callout in Section 01 uses the `.commitment`
  card pattern with `--accent` left border (not `--commit`) and label
  `Disclosure`. Same again for the method-note callout — when content
  uses these accent-bordered cards instead of sage, swap the colour.
- The three design-intervention cards in Section 04 also use
  `.commitment` cards with `--accent` left border, labels
  `Design intervention · I/II/III`.
- The `.failures` numbered-list component is used for the fourteen errors.
- No live demo, no browser frame on this page. Add `<figure class="figure">`
  with a placeholder image only IF Aron has supplied a Guardian 4
  visual; otherwise let the prose carry the page.

### Step 4 — Build chapter-2.html

Use `content/chapter-2.md` as the content brief.

Accent colour: `#5B3F6E` (aubergine). Apply the same `:root` override
pattern.

Structural notes:
- Six sections (01–06).
- Sections 02, 03, and 04 each contain a full-width figure embedding one
  of the portfolio-page renders from `assets/`. Filenames:
  - Section 02 figure: `chapter-2-recruiter-workflow.jpg`
  - Section 03 figure: `chapter-2-bookings.jpg`
  - Section 04 figure: `chapter-2-writing-audit.jpg`
- Each figure uses the standard `.figure` pattern from the reference HTML
  (the simple `<figure>` with `<img>` + `<figcaption>`, NOT the
  browser-frame component). Caption text is provided in the content brief.
- The method-note callout in Section 02 uses `.commitment` with `--accent`
  left border and label `Method note`.
- The pull quote in Section 02 uses the standard `.quote` pattern.

### Step 5 — Build evermatch.html

Use `content/evermatch.md` as the content brief.

Accent colour: `#B85878` (dusty rose). Same `:root` override pattern.

Structural notes:
- Seven sections (01–07).
- Section 02 has one full-width figure (`evermatch-portfolio.jpg`) using
  the standard `.figure` pattern.
- The Answered / Unanswered block in Section 06 uses the `.props` 2-col
  grid pattern from the reference (the design-bet props grid), but with
  two cards instead of four. The card labels use severity pills:
  `.severity.win` for Answered, `.severity.moderate` for Unanswered.

## Design rules — non-negotiable

Pulled from `design-system.md`. Use these as a quality gate before you
declare a page done:

1. **Spacing on the 8pt grid.** Never random values. `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64`.
2. **Two typefaces only.** Fraunces (serif) for display/headings/italics; DM
   Sans for body and UI. No others.
3. **One accent per page.** Override `--accent`, `--accent-soft`,
   `--accent-deep` on `:root`. Nothing else changes.
4. **Drop cap on the lead paragraph of every section.** It's a recurring
   editorial signature.
5. **Body prose max-width 38rem.** Reading line length matters.
6. **No icons in body copy.** Visual language is type + colour, not
   iconography.
7. **No emoji.**
8. **Respect `prefers-reduced-motion`.**
9. **All images need real `alt` text.** Not "decorative" — describe what's in
   the image and why it's in the case study.

## Quality verification (do this before declaring done)

For each page, after building:

1. Open the page in a headless browser at 1280×900. Take a full-page
   screenshot. Eyeball it. Is the visual hierarchy readable in a 3-second
   scan?
2. Repeat at 390×844 (mobile). Does the layout collapse cleanly? Are
   touch targets big enough?
3. Tab through the page. Does every interactive element have a visible
   focus state?
4. Validate the HTML (the file should parse as well-formed HTML5).
5. Check accent-colour consistency — search the file for every hex value
   and confirm only the four accent variations and the base palette
   appear. No drift.

## What "done" looks like

- All five HTML files exist and are valid HTML5.
- All five pages share identical chrome (top nav, footer, hero structure,
  typography, spacing).
- Per-project accent colours are correctly applied and consistent within
  each page.
- All assets are referenced via relative paths (`assets/foo.jpg`, not
  absolute URLs).
- The nav of every case study page has a `Back to work ↗` link pointing
  to `/index.html#work`.
- The landing page's project tiles all link to the correct case pages.
- Mobile renders are clean. Desktop renders are clean.

## What you should ask me about

If you find:
- A content claim you're not sure is accurate, **flag it and ask** — don't
  invent.
- A visual decision the design system doesn't cover, **flag it and ask** —
  don't make it unilaterally.
- A content file that seems to specify a component that doesn't exist in
  the reference HTML, **flag it and ask** — don't fake a component.

## What you should NOT do

- Don't introduce new typefaces, new colour tokens, or new spacing values.
- Don't add features the content brief doesn't ask for (e.g. dark mode
  toggle, language switcher, page transitions). Not yet.
- Don't change the reference BranchFlow HTML body content.
- Don't combine pages or move content around without asking.
- Don't generate visuals (SVGs, illustrations) the content brief doesn't
  explicitly call for. The portfolio uses screenshots and prose, not
  custom illustrations.

When you're ready, start with Step 1. Confirm what you're about to change
before you change it.
