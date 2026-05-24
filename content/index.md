# index.html — Landing page

**File path:** `index.html`
**Accent colour:** `#C4652A` (terracotta — same as BranchFlow, since this is the home/anchor)
**Page title:** `Aron Ryszka — UX Researcher`
**Meta description:** `Selected UX research and design work by Aron Ryszka — MSc UX Engineering at City, University of London, with a copywriting background. London.`

---

## Top nav

- Mark (left): "Aron Ryszka" in Fraunces 500, with the `--accent` dot prefix
- Links (right): `Work` (#work), `About` (#about), `Contact` (#contact)

---

## Hero

**Eyebrow:** `Portfolio`

**Title (h1):** `Aron Ryszka`

**Dek (italic, ~28ch):**
> A UX researcher with a copywriter's ear.

**Lede (one paragraph, ~50ch wide):**

My background is in copywriting and content; I now work in UX research and design. That mix means I think about what users need to *understand*, not just what they see. Currently finishing an MSc in UX Engineering at City, University of London — looking for research roles where understanding the problem is where the work starts.

**Meta strip (4 items):**

| Author | Role | Based in | Available |
|--------|------|----------|-----------|
| Aron Ryszka | UX Researcher | London, UK | From January 2026 |

**Live-link pill (under the meta strip):**

→ `aron.ryszka@gmail.com` (mailto: link, in the styled `.live-link a` pill) and beside it: `LinkedIn ↗` (link in `.live-link-url` style, but as a real link to `https://www.linkedin.com/in/aron-ryszka/`)

---

## Section 01 — Selected work

**Section number:** `01`
**Section title:** `Selected <em>work</em>` (with "work" in italic accent)

**Lead paragraph (in `.prose`):**

> Four projects from the last twelve months. One MSc capstone, one human-factors case study, three deliverables from a product internship, and one academic prototype that taught me more by failing than it would have by succeeding.

### Project tiles

A 2-column grid (1 col on mobile). Each tile is a card with:
- Left border in the project's accent colour (4px wide)
- Eyebrow line: `YEAR · CATEGORY` in DM Sans uppercase, project accent colour
- Serif title in Fraunces 400, ~1.75rem
- Italic Fraunces one-line pitch
- 2–3-sentence body in DM Sans
- "Read the case →" link at the bottom in project accent colour
- Hover state: `transform: translateY(-2px)`, accent left-border thickens to 5px

---

#### Tile 1 — BranchFlow

- **Accent variable:** `#C4652A`
- **Eyebrow:** `2025–26 · MSc CAPSTONE`
- **Title:** `BranchFlow`
- **Pitch (italic):** `A branching interface for AI-assisted research.`
- **Body:**
  A working React app testing whether interface architecture — branches, curated context, explicit commit semantics — can address five documented failure modes of chat-style LLMs for sustained intellectual work. Two pilots and four think-aloud sessions; 4 of 4 participants articulated the conceptual model unprompted.
- **Link:** `Read the case →` → `/branchflow.html`

#### Tile 2 — Guardian 4 CGM

- **Accent variable:** `#1F5F6B`
- **Eyebrow:** `2025 · MSC HUMAN FACTORS`
- **Title:** `Guardian 4 CGM`
- **Pitch (italic):** `Cognitive ergonomics of a medical device I use every day.`
- **Body:**
  A cognitive-ergonomics analysis of Medtronic's continuous glucose monitor, applying Schema-Based Error Types, Rasmussen's SRK model, and Norman's framework against my own year of personal use. Three low-cost design interventions and a usability-testing plan grounded in the analysis.
- **Link:** `Read the case →` → `/guardian-4.html`

#### Tile 3 — Chapter 2

- **Accent variable:** `#5B3F6E`
- **Eyebrow:** `2025 · PRODUCT INTERNSHIP`
- **Title:** `Chapter 2`
- **Pitch (italic):** `Four months at a recruitment-tech startup. Three things shipped.`
- **Body:**
  An end-to-end candidate workflow synthesised from real recruiter transcripts and AI-generated JTBD personas. A provisional-booking state architecture and its in-product messaging. A platform-wide UX copy audit with a voice-and-tone framework. Plus one API caching insight that lowered cost.
- **Link:** `Read the case →` → `/chapter-2.html`

#### Tile 4 — EverMatch

- **Accent variable:** `#B85878`
- **Eyebrow:** `2025 · MSC PROJECT`
- **Title:** `EverMatch`
- **Pitch (italic):** `An AI matchmaker that became an AI companion.`
- **Body:**
  An exploration of what AI can — and can't — do for dating. Started with the Stanford HCMST dataset and a GPT-plus-clustering match engine. Pivoted, after testing exposed the limits of structured data, to a behavioural chat-companion model that earns trust before it asks for input.
- **Link:** `Read the case →` → `/evermatch.html`

---

## Section 02 — About

**Section number:** `02`
**Section title:** `About`

**In `.prose`:**

I'm Aron — a UX researcher based in London, finishing an MSc in User Experience Engineering at City, University of London. Before that, I worked as a copywriter for a Polish home-décor retailer, then spent two years as a door supervisor in UK hospitality — which taught me more about reading rooms and de-escalation than any course since.

Most recently I spent four months at **Chapter 2**, a recruitment-tech startup, as a research-led product intern. I synthesised real recruiter interview transcripts with AI-generated JTBD personas to produce an 8-stage workflow map that guided the team's roadmap. I designed the platform's booking journey, audited every line of copy in the recruiter view, and proposed an API caching change that lowered our Gemini API spend.

My approach: **understand the problem before solving it**. That sounds obvious. It isn't. Most of the friction in the products I've worked on came from skipping that step — from a brief that assumed it knew the answer, or a feature that solved the wrong problem fluently. The copywriting background is why I'm sensitive to this. The wrong word is almost always the wrong concept underneath. Fixing one without the other never works.

What I'm looking for: a UX research role on a team that treats research as the start of the work, not the end of it. Comfortable with AI in the loop — sceptical about it doing the loop for me.

---

## Section 03 — Contact

**Section number:** `03`
**Section title:** `Get in <em>touch</em>`

**In `.prose` (centred or left-aligned, designer's call — left-aligned recommended):**

The fastest way is email. London-based, available for full-time research roles from **January 2026**.

**Contact list (use the meta `<dl>` pattern from the hero, 3 columns on desktop):**

| Email | LinkedIn | Phone |
|-------|----------|-------|
| `aron.ryszka@gmail.com` | `aron-ryszka` | `+44 7851 052 053` |

Each is a working link (`mailto:`, full LinkedIn URL `https://www.linkedin.com/in/aron-ryszka/`, `tel:` link).

---

## Footer

Same structure as BranchFlow footer:

- Mark: `Aron Ryszka` (italic Fraunces, `--ink-soft`)
- Below mark: `London · 2026`
- Below that, in colophon (uppercase small-cap, `--ink-mute`): `UX RESEARCH & DESIGN · OPEN TO ROLES`
