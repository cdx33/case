# Content updates — Round 2

Per-page content for the sidebar, summary card, section-opener small caps,
mono treatments, and "Read next" footer. Three pages: guardian-4.html,
chapter-2.html, evermatch.html.

`branchflow.html` keeps its existing Round 1 content. It only gets:
1. The pin removed (handled by the updated `case-choreography.js`)
2. The new "Read next" footer block at the bottom of the case-article

---

## Guardian 4 (`guardian-4.html`)

### Summary card (after hero, before Section 01)

```html
<aside class="summary-card">
  <p class="eyebrow">In short</p>
  <p><em>The setting.</em> A continuous glucose monitor whose application process hasn't meaningfully changed since 2006 — used at home by patients where the margin for error is high.</p>
  <p><em>The lens.</em> Three frameworks applied sequentially: Schema-Based Errors (which mental model failed), Rasmussen's SRK (which cognitive level), Norman (execution or planning).</p>
  <p><em>What followed.</em> Fourteen errors cross-classified; the most consequential (sensor lost with the needle) reads as a skill-level slip — only fixable physically. Three design interventions and a comparative test plan follow.</p>
</aside>
```

### Sidebar content (desktop `.case-sidebar--desktop` + mobile accordion)

```
ABOUT THIS PROJECT

Year       —  2025
Format     —  MSc Human Factors case study
Course     —  INM435
Role       —  Analysis · design proposal · test plan
Frameworks —  Schema-Based Errors · Rasmussen SRK · Norman
Output     —  3 design interventions · usability test plan

FINDINGS

14 errors classified across three frameworks
3 design interventions, targeting 11 of 14 errors
Comparative usability test plan with within-participant design
```

The eyebrow label for the second block is `Findings` (not `Outcomes`) —
this case is analytical, not measured.

### Section opener small caps (wrap first 2–3 words of each lead in `<span class="opener">`)

- **Section 01 (A medical device people use at home):** `The Medtronic` → `<span class="opener">The Medtronic</span> Guardian 4…`
- **Section 02 (Fourteen errors):** `A qualitative` → `<span class="opener">A qualitative</span> review of Medtronic user forums…`
- **Section 03 (Three frameworks):** `The fourteen` → `<span class="opener">The fourteen</span> errors look chaotic…`
- **Section 04 (Three interventions):** `Three design` → `<span class="opener">Three design</span> changes proposed, all low-cost…`
- **Section 05 (Testing the redesign):** `Three interventions` → `<span class="opener">Three interventions</span> are hypotheses, not facts…`
- **Section 06 (What's transferable):** `Three lessons` → `<span class="opener">Three lessons</span> that hold outside the medical-device context…`
- **Section 07 (Reflection):** `The proposal` → `<span class="opener">The proposal</span> is grounded in established frameworks…`

### Mono treatments

Wrap in `<code class="mono">` (or upgrade existing `<code>`):
- `Error 06` — every instance in body copy
- `INM435` — the course code in the meta strip
- `n = 12` — the participant count in Section 05 (currently `<em>n</em> = 12` or similar)

---

## Chapter 2 (`chapter-2.html`)

### Summary card (after hero, before Section 01)

```html
<aside class="summary-card">
  <p class="eyebrow">In short</p>
  <p><em>The placement.</em> Four months as a research-led product intern at a London recruitment-tech startup, sitting between product and engineering on the recruiter-view rebuild.</p>
  <p><em>What shipped.</em> An 8-stage candidate workflow synthesised from real recruiter transcripts and AI-generated JTBD personas; a provisional booking state machine with 19 system messages; a platform-wide UX copy audit with a voice & tone framework.</p>
  <p><em>One extra observation.</em> An API caching gap in the candidate search that was costing real Gemini spend — sketched and handed to engineering.</p>
</aside>
```

### Sidebar content

```
ABOUT THIS PROJECT

Year         —  Aug – Dec 2025
Format       —  Product internship (4 months)
Role         —  Research-led product intern
Company      —  Chapter 2
Sector       —  Recruitment tech
Tools        —  Figma · FigJam · Material 3

DELIVERABLES

8-stage candidate workflow adopted by product team
Provisional booking state machine + 19 message templates
Platform-wide voice & tone framework
API caching insight — lowered Gemini API spend
```

Eyebrow label for second block: `Deliverables` (this was a working
internship — things were built).

### Section openers

- **Section 01 (The placement):** `Chapter 2 is` → `<span class="opener">Chapter 2 is</span> a London-based recruitment-tech startup…`
- **Section 02 (Candidate workflow synthesis):** `The team had` → `<span class="opener">The team had</span> three things going in…`
- **Section 03 (Provisional booking journey):** `The brief:` → `<span class="opener">The brief:</span> define and redesign the provisional booking process…`
- **Section 04 (Platform UX writing audit):** `The recruiter view` → `<span class="opener">The recruiter view</span> had no copy system…`
- **Section 05 (One observation worth its own line):** `The pattern was:` → `<span class="opener">The pattern was:</span> recruiter runs a search…`
- **Section 06 (Reflection):** `Three things` → `<span class="opener">Three things</span> changed how I work as a result…`

### Mono treatments

Wrap in `<code class="mono">`:
- `Chapter 2` company name — leave as plain text (it's the company name, not a code specimen)
- `Aug – Dec 2025` in meta strip — keep as DM Sans with tabular figures
- API endpoint references, if any specific paths appear — likely none in body

(Chapter 2 has fewer "specimen" content items than the other pages.)

---

## EverMatch (`evermatch.html`)

### Summary card (after hero, before Section 01)

```html
<aside class="summary-card">
  <p class="eyebrow">In short</p>
  <p><em>The starting hypothesis.</em> That AI could improve on the form-and-photo dating paradigm by inferring compatibility from a smaller set of carefully chosen signals.</p>
  <p><em>Where the data took it.</em> The Stanford HCMST dataset's strongest predictors required relationship history — which the early-compatibility question doesn't have. Users wouldn't share enough to fix it.</p>
  <p><em>The pivot.</em> Stop building a matcher; build a chat companion that watches, asks lightly, learns over time. The pivot is the case.</p>
</aside>
```

### Sidebar content

```
ABOUT THIS PROJECT

Year       —  2025
Format     —  MSc project (single semester)
Role       —  Concept · research · design · build
Built with —  GPT · Stanford HCMST dataset
Method     —  Iterative prototyping, behavioural pivot

TAKEAWAYS

HCMST predictive analysis informed match logic
Prototype 1 → 2 pivot based on user trust signals
Behavioural learning > declared preference data
```

Eyebrow label for second block: `Takeaways` (the project's value is
methodological, not measurable).

### Section openers

- **Section 01 (The starting point):** `Dating apps` → `<span class="opener">Dating apps</span> ask for a lot up front…`
- **Section 02 (What the data says):** `To find` → `<span class="opener">To find</span> an empirical floor…`
- **Section 03 (Prototype one):** `The first prototype` → `<span class="opener">The first prototype</span> was a match engine…`
- **Section 04 (The pivot):** `The pivot took` → `<span class="opener">The pivot took</span> the question from…`
- **Section 05 (Prototype two):** `The redesigned` → `<span class="opener">The redesigned</span> prototype is a chat-companion…`
- **Section 06 (Answered, unanswered):** `The honest summary` → `<span class="opener">The honest summary</span> at the end of a short project…`
- **Section 07 (What this project taught me):** `EverMatch was` → `<span class="opener">EverMatch was</span> a single-semester academic project…`

### Mono treatments

Wrap in `<code class="mono">`:
- `HCMST` — every instance in body copy (already used 2–3 times)
- Dataset year ranges like `2017–2022` when they appear in the dataset context — *don't* wrap these in mono (they're prose dates, not codes)

---

## Read-next footer (all 4 case pages, including BranchFlow)

A new block at the bottom of each `.case-article`, immediately before the
closing `</div>` of the case-article wrapper. Goes inside the `.case-content`
column.

The order cycles: BranchFlow → Guardian 4 → Chapter 2 → EverMatch → BranchFlow.

```html
<aside class="read-next" aria-label="Continue reading">
  <p class="eyebrow">Read next</p>
  <a href="[next-case].html" class="read-next-link">
    <span class="read-next-title">[Next case title]</span>
    <span class="read-next-dek">[Next case dek]</span>
    <span class="read-next-arrow" aria-hidden="true">→</span>
  </a>
</aside>
```

### Per-page values:

**branchflow.html — next case is Guardian 4:**
- title: `Guardian 4 CGM`
- dek: `Cognitive ergonomics of a medical device people apply at home, every day.`
- href: `guardian-4.html`

**guardian-4.html — next case is Chapter 2:**
- title: `Chapter 2`
- dek: `Four months at a recruitment-tech startup. Three things shipped.`
- href: `chapter-2.html`

**chapter-2.html — next case is EverMatch:**
- title: `EverMatch`
- dek: `An AI matchmaker that became an AI companion.`
- href: `evermatch.html`

**evermatch.html — next case is BranchFlow:**
- title: `BranchFlow`
- dek: `A branching interface for AI-assisted research.`
- href: `branchflow.html`

### CSS for the read-next block

Add to each page's existing `<style>` block:

```css
/* ── Read next ────────────────────────────────────────────────── */
.read-next {
  margin: 5rem 0 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border-soft);
}
.read-next .eyebrow {
  margin-bottom: 1.25rem;
}
.read-next-link {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 1rem 2rem;
  text-decoration: none;
  color: var(--ink);
  padding: 1.25rem 0 1.5rem;
  border-bottom: 1px solid var(--border);
  transition: border-color 200ms ease, padding 200ms ease;
}
.read-next-link:hover {
  border-bottom-color: var(--accent);
  padding-bottom: 1.875rem;
}
.read-next-title {
  display: block;
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin: 0 0 0.5rem;
  grid-column: 1;
  grid-row: 1;
}
.read-next-dek {
  display: block;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--ink-soft);
  grid-column: 1;
  grid-row: 2;
  max-width: 36em;
}
.read-next-arrow {
  font-family: var(--sans);
  font-size: 1.5rem;
  color: var(--accent);
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: center;
  transition: transform 200ms ease;
}
.read-next-link:hover .read-next-arrow {
  transform: translateX(4px);
}
```

The accent colour referenced is the **destination** case's accent, not
the current page's. So on branchflow.html, the arrow is teal (Guardian 4
accent). On guardian-4.html, the arrow is aubergine (Chapter 2 accent).
Etc.

To do this: instead of `color: var(--accent)` on the arrow, use an inline
style on the specific instance: `<span class="read-next-arrow" style="color: #1F5F6B" aria-hidden="true">→</span>`.

Per-page arrow colours:
- On branchflow.html → next = Guardian 4 → arrow colour `#1F5F6B`
- On guardian-4.html → next = Chapter 2 → arrow colour `#5B3F6E`
- On chapter-2.html → next = EverMatch → arrow colour `#B85878`
- On evermatch.html → next = BranchFlow → arrow colour `#C4652A`

This subtly tells the reader "the next case has its own identity" without
shouting it.

---

## Article grid + sidebar — applies to all 3 new pages

The same `.case-article` grid wrapper from branchflow.html applies here.
Wrap the main case content (everything below the hero) in:

```html
<div class="case-article">
  <aside class="case-sidebar case-sidebar--desktop" aria-label="About this project">
    [sidebar content]
  </aside>

  <div class="case-content">
    <details class="case-sidebar-mobile">
      <summary>About this project ↓</summary>
      [same content as desktop sidebar]
    </details>

    <aside class="summary-card">
      [summary card content]
    </aside>

    <!-- all existing <section> blocks, unchanged -->

    <aside class="read-next" aria-label="Continue reading">
      [read-next content]
    </aside>
  </div>
</div>
```

The hero stays outside the case-article wrapper, as on branchflow.html.

---

## CSS to add to each of guardian-4.html, chapter-2.html, evermatch.html

All three pages need the same CSS additions that branchflow.html already
has (from Round 1). Copy the full block from branchflow.html's
`<style>` element, specifically:

- `.case-article` grid
- `.summary-card`
- `.case-sidebar--desktop`
- `.sidebar-fields`
- `.sidebar-outcomes`
- `.case-sidebar-mobile`
- `.section-num` (the upgraded oversized version)
- `h1.title` (the upgraded font-variation-settings)
- `.dek` (the SOFT axis setting)
- `.opener` (small caps)
- `.meta dd` (tabular figures)
- `--mono` token
- `.mono` class

Plus the new `.read-next` block defined above.

Plus the font loading update:
```
https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap
```

Plus the script tags at the bottom of `<body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.0.42/dist/lenis.min.js" defer></script>
<script src="scripts/case-choreography.js" defer></script>
```

Plus removing any existing CSS-only hero rise animation (if present on
these pages — branchflow.html had one, the others may too. Check each.)
