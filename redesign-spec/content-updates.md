# Content updates — Round 1

All five HTML files get the positioning text update. **Only** branchflow.html
gets the new summary card and "About this project" sidebar in this round
— other case study pages get them in Round 2.

---

## Positioning update (all 5 pages)

### index.html — hero dek

The current dek is "UX research and design." Replace with:

> **Product UX, research-led.**

### index.html — about section opening

Find: "I'm Aron — a UX researcher based in London, with an MSc in User
Experience Engineering from City, University of London."

Replace with:

> I'm Aron — a London-based product UX designer, working research-first with an MSc in User Experience Engineering from City, University of London.

### Other pages — top nav mark

No change needed. The mark stays as "Aron Ryszka — [Project Name]".

---

## BranchFlow — new components

### Summary card (after hero, before Section 01)

```html
<aside class="summary-card">
  <p class="eyebrow">In short</p>
  <p><em>The problem.</em> Chat interfaces don't support sustained research — five documented failure modes around context, drift, cognition, metacognition.</p>
  <p><em>The bet.</em> Interface architecture (not better models) can address them: branching, curated context, explicit commit, goal visibility.</p>
  <p><em>What surfaced.</em> The conceptual model landed (4 of 4 articulated it unprompted). The verb surface didn't — clarity-of-concept ≠ clarity-of-action. Five transferable lessons for AI research tools.</p>
</aside>
```

The italic emphasis on lead-ins uses `<em>` which inherits Fraunces italic
via the existing CSS. No new tag types needed.

### About this project sidebar

Lives in the left margin (sticky on desktop, accordion on mobile).

**Desktop HTML structure:**

```html
<aside class="case-sidebar" aria-label="About this project">
  <p class="eyebrow">About this project</p>

  <dl class="sidebar-fields">
    <div><dt>Year</dt><dd>2025–26</dd></div>
    <div><dt>Format</dt><dd>MSc capstone</dd></div>
    <div><dt>Role</dt><dd>Research · concept · design · build</dd></div>
    <div><dt>Method</dt><dd>Research-through-design</dd></div>
    <div><dt>Stack</dt><dd>React · Gemini 2.5 Flash</dd></div>
    <div><dt>Demo</dt><dd><a href="https://branchingv2.vercel.app/" target="_blank" rel="noopener noreferrer"><code class="mono">branchingv2.vercel.app</code> <span aria-hidden="true">↗</span></a></dd></div>
  </dl>

  <p class="eyebrow eyebrow-spaced">Outcomes</p>
  <ul class="sidebar-outcomes">
    <li>4 of 4 participants articulated the conceptual model unprompted</li>
    <li>Mean SUS 60 (range 45–80)</li>
    <li>Two pilots and four valid think-aloud sessions</li>
  </ul>
</aside>
```

**Mobile fallback:** wrap the entire `<aside class="case-sidebar">` in a
`<details>` element when viewport drops below 760px (via CSS swap, see
design-spec). Pure CSS solution preferred over JS toggle for accessibility.

Alternative: keep the same HTML structure, and use CSS to hide the
sidebar on mobile and show a separate `<details>` block. Simpler: render
both, use `display: none` toggling.

Actually simplest: render the sidebar as a `<details>` always, with
`open` attribute set on desktop via media query. CSS:

```css
.case-sidebar { /* default closed-able */ }
@media (min-width: 960px) {
  details.case-sidebar > summary { display: none; }
  details.case-sidebar[open] > * { display: revert; }
  details.case-sidebar:not([open]) > *:not(summary) { display: revert; }
  /* sidebar is always "open" on desktop, summary is hidden */
}
```

Hmm — this is getting complex. **Recommendation:** use a `<details>`
element on mobile only, and a regular `<aside>` on desktop. Render both
in HTML, toggle visibility via CSS media query. Two HTML blocks, both
with the same content; that's the cleanest approach.

```html
<!-- Desktop sidebar -->
<aside class="case-sidebar case-sidebar--desktop" aria-label="About this project">
  [content as above]
</aside>

<!-- Mobile accordion -->
<details class="case-sidebar-mobile">
  <summary>About this project <span aria-hidden="true">↓</span></summary>
  [same content as above]
</details>
```

```css
.case-sidebar--desktop { display: none; }
.case-sidebar-mobile { display: block; }
@media (min-width: 960px) {
  .case-sidebar--desktop { display: block; }
  .case-sidebar-mobile { display: none; }
}
```

The content duplication is fine for this small amount; the trade-off is
worth the clarity.

### Section opener small caps (apply to all 7 sections)

Each section's lead paragraph (`.prose .lead`) gets its first 2 words
wrapped in `<span class="opener">`. Exact words to wrap per section:

- **Section 01 (The gap chat doesn't close):** `Researchers, academic` →
  `<span class="opener">Researchers, academic</span> writers, and knowledge workers…`
- **Section 02 (The design bet):** `Once learned,` →
  `<span class="opener">Once learned,</span> branching architecture and explicit commit semantics…`
- **Section 03 (The artefact):** `BranchFlow is` →
  `<span class="opener">BranchFlow is</span> a single-page React app backed by a serverless LLM proxy…`
- **Section 04 (How I tested it):** `Research-through-design` →
  `<span class="opener">Research-through-design</span> (Zimmerman, Forlizzi & Evenson, 2007), four phases…`
- **Section 05 (What surfaced):** `Reflexive thematic` →
  `<span class="opener">Reflexive thematic</span> analysis (Braun & Clarke, 2019)…`
- **Section 06 (Design implications):** `Five generalisable` →
  `<span class="opener">Five generalisable</span> lessons for AI research tools…`
- **Section 07 (What this study couldn't answer):** `The design's` →
  `<span class="opener">The design's</span> core cognitive claim…`

### Mono treatments — body content

Find each instance below in `branchflow.html` and wrap in `<code class="mono">` (or upgrade an existing `<code>`):

- `[PROPOSED_ACTIONS]` (Section 03 commitment 1) — already in `<code>`, ensure the new mono styling applies
- `n = 4` (in Section 04 SUS text — appears as `<em>n</em>&nbsp;=&nbsp;4`) — wrap as `<code class="mono">n = 4</code>`
- `n ≥ 8` (Section 07 — currently in `<em>` tag) — wrap as `<code class="mono">n ≥ 8</code>`

### Section numeral upgrade (visual only)

The existing `.section-num` HTML stays the same. The CSS changes to
position it as an oversized margin numeral. See design-spec.md, section
"Oversized margin numerals."

---

## Files NOT touched in Round 1

- index.html — gets only the dek + about-section text change (no summary card, no sidebar, no scroll choreography)
- guardian-4.html — gets only the topnav consistency check
- chapter-2.html — gets only the topnav consistency check
- evermatch.html — gets only the topnav consistency check

After branchflow.html is approved on Vercel, Round 2 propagates the
sidebar + summary card + scroll choreography to the other case study pages.
