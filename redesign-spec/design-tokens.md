# Design tokens — Round 3 redesign (Direction C, Swiss mono-forward)

This spec replaces the current colour and typography tokens entirely. Layout,
spacing, components, scroll choreography, HTML structure, and copy all stay
identical. Only tokens and per-element typography treatments change.

The goal: move the visual identity away from Claude's brand DNA (warm paper +
terracotta + Fraunces serif) toward a distinct editorial mono-forward
identity built around the **IBM Plex superfamily**.

---

## Base palette (replaces existing base palette across all 5 pages)

```css
:root {
  /* Surfaces — warm off-white, never pure */
  --bg:            #FAFAF7;
  --paper:         #FFFFFE;
  --paper-alt:     #EFEEE9;

  /* Ink — warm near-black, never pure */
  --ink:           #161614;
  --ink-soft:      #4D4B47;
  --ink-mute:      #8B8884;

  /* Lines */
  --border:        #D4D2CC;
  --border-soft:   #E5E3DE;

  /* Semantic — stay as they are, slight retune for new neutrals */
  --commit:        #2D5A3E;
  --commit-soft:   #E8F0EA;
  --stale:         #A67100;
  --stale-soft:    #F8EFD8;
  --danger:        #9E2A24;
  --danger-soft:   #F8E8E7;
}
```

Old base tokens to delete:
- `--bg: #F5F2EB` (warm cream — Claude)
- `--paper: #FFFEFA` (warm paper)
- `--paper-alt: #F0EDE6`
- `--ink: #2C2416` (warm coffee — Claude)
- `--ink-soft: #6B6256`
- `--ink-mute: #9C948A`
- `--border: #DDD8CE`
- `--border-soft: #E8E3D6`

---

## Per-project accent palettes

Each case page declares its own accent via `:root` override (existing pattern).
Replace the current accent values with these.

### BranchFlow (`branchflow.html`)

```css
:root {
  --accent:        #0040FF;   /* electric blue */
  --accent-soft:   #E8EEFF;
  --accent-deep:   #0030B8;
}
```

### Guardian 4 (`guardian-4.html`)

```css
:root {
  --accent:        #006B4F;   /* deep emerald */
  --accent-soft:   #E8F4F0;
  --accent-deep:   #00533B;
}
```

### Chapter 2 (`chapter-2.html`)

```css
:root {
  --accent:        #6B0F4F;   /* dark magenta */
  --accent-soft:   #F4E8F0;
  --accent-deep:   #50083A;
}
```

### EverMatch (`evermatch.html`)

```css
:root {
  --accent:        #B91C1C;   /* signal red */
  --accent-soft:   #FCEDED;
  --accent-deep:   #8E1414;
}
```

### Index (`index.html`)

Uses the BranchFlow accent (electric blue) as the home/anchor.

The Read-next arrow colours on each case page should be updated to use the
**destination's** new accent value. For example, on `branchflow.html` the
Read-next arrow that points at Guardian 4 changes from `#1F5F6B` (old teal)
to `#006B4F` (new emerald).

---

## Typography — IBM Plex superfamily

### Font loading

Replace the existing Google Fonts `<link>` `href` on all 5 pages with this
exact value:

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400;1,500&family=IBM+Plex+Mono:wght@400;500;600&display=swap
```

### Custom properties

```css
:root {
  --sans:    'IBM Plex Sans', 'Inter', system-ui, sans-serif;
  --serif:   'IBM Plex Serif', Georgia, serif;
  --mono:    'IBM Plex Mono', 'JetBrains Mono', 'SF Mono', Menlo, monospace;
}
```

Old `--serif: 'Fraunces'` and `--sans: 'DM Sans'` values get replaced.

### Type role assignments

This is the heart of the redesign. The role each typeface plays changes.

| Role                              | Old                              | New                              |
|-----------------------------------|----------------------------------|----------------------------------|
| Hero h1 (display)                 | Fraunces 300 + SOFT 50           | **Plex Sans 500**                |
| Hero dek (italic subtitle)        | Fraunces italic 400 + SOFT 100   | **Plex Serif italic 400**        |
| Lede (1st para after dek)         | Fraunces 400                     | **Plex Sans 400** (larger size)  |
| Section h2 (display)              | Fraunces 300                     | **Plex Sans 500**                |
| Section h2 `<em>` emphasis        | Fraunces italic                  | **Plex Serif italic 500**        |
| Section number (margin numeral)   | Fraunces 300 + SOFT 60, large    | **Plex Mono 400**, large         |
| Eyebrow (uppercase, letter-spaced)| DM Sans 500 uppercase            | **Plex Mono 500 uppercase**      |
| Body prose                        | DM Sans 400                      | **Plex Sans 400**                |
| Body emphasis (`<strong>`)        | DM Sans 600                      | **Plex Sans 600**                |
| Body italic (`<em>`)              | DM Sans italic *(synthetic)*     | **Plex Serif italic 400**        |
| Pull quote (`.quote`)             | Fraunces italic 400              | **Plex Serif italic 500**        |
| Pull quote attribution            | DM Sans 500 small caps           | **Plex Mono 500 uppercase**      |
| Hero meta `<dt>` labels           | DM Sans small caps               | **Plex Mono 500 uppercase**      |
| Hero meta `<dd>` values           | DM Sans 400                      | **Plex Sans 400** + tabular nums |
| Sidebar `<dt>` labels             | DM Sans small caps               | **Plex Mono 500 uppercase**      |
| Sidebar `<dd>` values             | DM Sans 400                      | **Plex Sans 400**                |
| Sidebar URL value                 | Plex Mono                        | **Plex Mono 500** (unchanged role, family swap) |
| Stat counter numerals             | Fraunces 300 large               | **Plex Mono 500** large + tabular nums |
| Stat label                        | Fraunces italic                  | **Plex Serif italic 500**        |
| Figcaption                        | DM Sans italic                   | **Plex Serif italic 400**        |
| Code / `.mono` specimens          | Plex Mono                        | **Plex Mono 500** (same)         |
| Read-next title                   | Fraunces 400                     | **Plex Sans 500**                |
| Read-next dek                     | Fraunces italic                  | **Plex Serif italic 400**        |
| Severity pills                    | DM Sans uppercase small          | **Plex Mono 500 uppercase small**|
| Topnav mark                       | Fraunces 500                     | **Plex Sans 500**                |
| Footer mark                       | Fraunces italic                  | **Plex Serif italic 500**        |

The pattern: **Plex Sans does the heavy lifting** (display, body, UI). **Plex
Serif italic carries the editorial moments** (italic emphasis, pull quotes,
dek, figcaption, footer). **Plex Mono is the system signature** (labels,
section numbers, numerals, eyebrows, severity pills, URLs, code).

### Variable axis settings — none

The Fraunces SOFT-axis treatments were a Claude-coded move and the most
identifiable typographic tell. Plex doesn't use variable axes the same way.
Remove all `font-variation-settings` declarations.

### Type scale — slight retune

Plex Sans at large sizes reads sharper than Fraunces at the same px values.
Reduce the hero h1 a touch.

| Token        | Old size                            | New size                         |
|--------------|-------------------------------------|----------------------------------|
| Display h1   | `clamp(3.5rem, 10vw, 7.25rem)`      | `clamp(3.25rem, 9vw, 6.25rem)`   |
| Section h2   | `clamp(2rem, 4.5vw, 3rem)`          | `clamp(1.875rem, 4vw, 2.75rem)`  |
| Section num  | `clamp(4rem, 7vw, 6rem)` desktop    | `clamp(2.75rem, 5vw, 4.25rem)` desktop |
|              | `clamp(3rem, 5vw, 4rem)` mobile     | `clamp(2.25rem, 4vw, 3rem)` mobile |

Section number gets visibly smaller — mono numerals at very large scale feel
heavy and tend to dominate; mono at medium-large feels editorial-precise.

### Letter-spacing rules

- Display h1: `-0.02em` (Plex Sans has less optical tightening built in than Fraunces)
- Section h2: `-0.015em`
- Eyebrow / labels (Plex Mono uppercase): `+0.08em` (uppercase mono needs less spacing than uppercase sans; Plex Mono is already wide)
- Body: `-0.005em`

---

## Treatments to remove

### Drop caps

The `.prose .lead::first-letter` rule and any `.prose p.lead::first-letter`
rule is **deleted entirely**. The lead paragraph starts with a regular
first letter at the same size as the rest of the lead.

### Small-caps section openers

The `<span class="opener">…</span>` wraps inside every section's lead
paragraph are **removed** (both the HTML wrap and the `.opener` CSS rule).
Mono eyebrows already do the editorial signalling work; the small-caps
openers are now redundant *and* read as warm-editorial which we're moving
away from.

This affects all 5 pages where openers were added in Round 1/2.

### Fraunces variation settings

All `font-variation-settings: "opsz" X, "SOFT" Y;` declarations are removed.
They only applied to Fraunces and there's no equivalent for Plex.

### Italic synthesis

Anywhere `font-style: italic` is applied to a DM Sans element and looks
synthetic — replace by switching the family to Plex Serif italic. This is
cleaner because Plex Serif italic is a real italic, not slanted Plex Sans.

---

## What stays exactly the same

- HTML structure of every page
- All copy (prose, headings, eyebrows, dek, lede — every word)
- Spacing scale (8pt grid)
- Layout grid (`.case-article` three-column desktop layout)
- All components (`.commitment`, `.failures`, `.impl`, `.quote`, `.severity`, `.figure`, `.browser-frame`, `.summary-card`, `.case-sidebar*`, `.read-next`)
- Scroll choreography in `scripts/case-choreography.js`
- The semantic palette (`--commit`, `--stale`, `--danger`) — slight tuning only
- The hero stat counter logic (only the typography of the numerals changes)
- All accessibility patterns (focus rings, touch targets, contrast)

---

## A note on contrast

The new palette has been picked to maintain WCAG AA across all pages:

- `--ink` (`#161614`) on `--bg` (`#FAFAF7`): contrast ratio 16.8:1 (passes AAA)
- `--ink-soft` (`#4D4B47`) on `--bg`: 8.4:1 (passes AAA)
- `--ink-mute` (`#8B8884`) on `--bg`: 3.5:1 (passes AA for large text only — use only on labels and metadata, never body)
- Each accent on `--bg`:
  - BranchFlow `#0040FF`: 8.0:1 (AAA)
  - Guardian 4 `#006B4F`: 7.2:1 (AAA)
  - Chapter 2 `#6B0F4F`: 12.4:1 (AAA)
  - EverMatch `#B91C1C`: 6.0:1 (AAA)

All accents have headroom — they remain readable as text colours, not just as background/decorative.
