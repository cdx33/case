# chapter-2.html — Four months at Chapter 2

**File path:** `chapter-2.html`
**Accent colour:** `#5B3F6E` (aubergine)
**Page title:** `Chapter 2 — Product internship work by Aron Ryszka`
**Meta description:** `Four months as a research-led product intern at Chapter 2, a recruitment-tech startup. Three deliverables shipped across research, service design, and content systems.`

---

## Top nav

- Mark: `Aron Ryszka — Chapter 2`
- Links: `Back to work ↗` → `/index.html#work`

---

## Hero

**Eyebrow:** `Internship Case`

**Title:** `Chapter 2`

**Dek (italic):**
> Four months at a recruitment-tech startup. Three things shipped.

**Lede:**
A research-led product internship at Chapter 2, a London recruitment-tech startup. Three deliverables shipped — a candidate workflow synthesised from transcripts and AI personas, an end-to-end booking journey, and a platform-wide copy audit. Plus one engineering insight that lowered our Gemini API spend.

**Meta strip:**

| Author | Role | Duration | Tools |
|--------|------|----------|-------|
| Aron Ryszka, 2025 | Product Intern (UX-led) | Aug – Dec 2025 | Figma · FigJam · Material 3 |

---

## Section 01 — The placement

**Section number:** `01`
**Section title:** `The <em>placement</em>`

**Lead paragraph (with drop-cap):**

Chapter 2 is a London-based recruitment-tech startup building tooling for in-house recruiters. I joined for four months as a product intern — research-led, sitting between the product manager and the engineering team. The three deliverables below are the ones I'd put on a placement debrief. The fourth (an API caching observation) sits at the bottom because it didn't need a deliverable to land.

**Body:**

The placement coincided with the team rebuilding the recruiter view of the platform from the ground up. That timing was lucky: I joined when there were big questions on the table — what does the recruiter actually do, in what order, with what tools, against what brief — and the team needed answers more than they needed polish. Most of what follows came out of that window.

---

## Section 02 — Candidate workflow synthesis

**Section number:** `02`
**Section title:** `Candidate workflow <em>synthesis</em>`

**Lead paragraph:**

Mapping the recruiter's end-to-end candidate journey, from client brief to placement, to identify high-impact intervention points for the product.

**Body:**

The team had three things going in: a small library of real recruiter interview transcripts collected before I joined; a sprint of AI-generated JTBD personas the product manager had commissioned; and a near-universal sense from leadership that the recruiter view of the platform was working *around* recruiters' actual flow, not with it. What was missing was a workflow map that synthesised both sources into a single picture.

That synthesis was my work. I read the transcripts, coded recurring activity types, and stress-tested the AI-generated personas against what real recruiters described. Where the personas held up, I kept them; where they didn't — there was a strong fit on tool use, a weak fit on the timing of placement decisions — I dropped or rewrote them. The output was an **eight-stage candidate workflow map**, structured as: *Get Brief · Clarify Role · Plan Sourcing · Inbound Side · Outbound Side · Plan Tools · Screen & List · Maintain Pool.* Each stage carried goals, actions, inputs and outputs, recruiter pain points, and product opportunity areas.

The map was adopted by the product team to guide design and roadmap decisions across the rebuild.

**Pull quote (one of the more useful workflow findings, in the recruiter's voice — paraphrased from the transcripts):**

> *"The brief is the worst part. By the time the brief is clean enough to source from, half the time has already gone."*
> — Workflow finding, Stage 01 (Get Brief)

**Figure placeholder:**

Use `.figure` to display `/assets/chapter-2-recruiter-workflow.jpg` (full width, max 920px). Figcaption: *Eight-stage candidate workflow map. Each stage has its own goals, pain points, and product opportunity areas — used to guide sprint prioritisation across the recruiter-view rebuild.*

**Method-note callout** (use the personal-disclosure `.commitment` pattern with `--accent` left border, label "Method note"):

The interviews underpinning this synthesis were conducted before I joined the team; I worked from the transcripts. The AI-generated personas were treated as exploratory artefacts to widen the hypothesis space, not as primary evidence — every persona claim that survived to the final map was anchored to something a real recruiter had said.

---

## Section 03 — Provisional booking journey

**Section number:** `03`
**Section title:** `Provisional booking <em>journey</em>`

**Lead paragraph:**

Designing the end-to-end candidate booking journey, from provisional sent through to confirmed booking and platform-level integration.

**Body:**

The brief: define and redesign the provisional booking process — booking states, transition logic, and Worksome (contract platform) integration — so the engineering team could implement the functionality. The previous design had two states (booked / not booked) and a lot of edge cases the recruiters were navigating by Slack.

I built a service blueprint covering five states (*Provisional Sent · Provisional Accepted · In Progress · Booking Confirmed · Cancelled*), with explicit transition rules between them and triggers for the Worksome integration at the contract stage. Every transition produced a system event; every system event produced both an in-product notification and an email to the client and candidate. The blueprint listed all of them.

The deliverable to engineering was a 19-event message specification — every email, every notification, in every state combination, with subject line, body, and trigger condition. I wrote the copy for each message in the voice-and-tone framework I'd built for the platform (see next section) so the recruiter-facing and candidate-facing voices stayed coherent across the system.

**Figure placeholder:**

Use `.figure` for `/assets/chapter-2-bookings.jpg`. Figcaption: *Provisional booking flow with state transitions and Worksome integration triggers. Five booking states; 19 templated system messages.*

**Inline list (use a tight `<ul>` in `.prose`):**

What the design delivered to engineering:
- Five-state booking machine with explicit transition rules
- Trigger map for the Worksome integration (contract creation, signing, cancellation)
- 19 message templates with subject, body, and trigger condition
- A status-visibility specification for the recruiter view (what each user sees in each state)

---

## Section 04 — Platform UX writing audit

**Section number:** `04`
**Section title:** `Platform UX writing <em>audit</em>`

**Lead paragraph:**

A platform-wide copy audit of the recruiter view, with a voice-and-tone framework grounded in the company's brand principles.

**Body:**

The recruiter view had no copy system. Button labels were inconsistent across screens (*Save · Submit · Confirm* in different places for similar actions); status logic varied; helper text was authored ad-hoc per feature. I audited the full recruiter surface — every button, every status, every system message, every form field — flagged the inconsistencies, and proposed standardised replacements.

The framework underneath the audit is a voice chart built against six company brand principles — *Efficient · Trustworthy · Connects · Energetic · Innovative · Client-Centric* — broken down into five axes: concepts, vocabulary, verbosity, grammar, punctuation, capitalisation. Where the brand principles pulled in different directions (efficiency wants short; trustworthiness wants complete; client-centricity wants warm), the chart specifies which wins in which context.

The chart became the authoring spec for both my own work on the booking messages and for subsequent product copy authored by other team members after I left.

**Figure placeholder:**

Use `.figure` for `/assets/chapter-2-writing-audit.jpg`. Figcaption: *Voice-and-tone matrix: six company brand principles × six writing dimensions. Used as the authoring spec for new product copy.*

**Inline outcome list:**

What the audit produced:
- A 60-item recommendation list, prioritised by user-facing visibility
- Standardised microcopy for every action verb across the recruiter view (Save / Send / Edit / Cancel / Confirm)
- A voice-and-tone matrix tying every writing decision back to brand principles
- Implementation directly in the codebase for the booking-message templates (HTML/CSS edits)

---

## Section 05 — One observation worth its own line

**Section number:** `05`
**Section title:** `One observation, <em>worth its own line</em>`

**Lead paragraph:**

Mid-placement, while running the recruiter-view rebuild past the engineering team, I noticed the candidate search was re-running the same Gemini API call every time a recruiter navigated back from a result detail page.

**Body:**

The pattern was: recruiter runs a search, opens a candidate, navigates back, search re-runs from scratch. Every back-navigation cost an API call. At the volume the platform was running, that was a meaningful share of the monthly LLM bill — searches the recruiter had already performed within the last few minutes were being run again because the result wasn't being cached.

I flagged it, sketched a cache-on-search-result pattern, and handed it to engineering. The fix wasn't designerly. The observation came from sitting next to engineering enough to spot the call pattern in dev tools while reviewing a flow.

What it taught me: research-led product roles in small teams aren't only about the user-facing surface. Sometimes the highest-leverage move is the one that doesn't change what the user sees.

---

## Section 06 — Reflection

**Section number:** `06`
**Section title:** `Reflection`

**Lead paragraph:**

Four months at Chapter 2 was the first time I'd worked in product proper — close to engineering, close to the brief, close to a real backlog. Three things changed how I work as a result.

Use the `.impl` numbered-list pattern.

01. **Synthesis beats discovery in small teams.** A four-person product team rarely has bandwidth for new primary research. The leverage is in synthesising what the team already has — transcripts on a hard drive, half-finished personas, a Slack channel of recruiter feedback — into something the whole team can actually use. The workflow map was my biggest contribution; it was built from material that already existed.

02. **AI artefacts widen the hypothesis space; they don't replace evidence.** The AI-generated personas were useful for exactly that. They surfaced edge cases I'd have missed on the transcript pass alone. None of them became findings in their own right. Every claim in the final workflow map traced back to something a recruiter actually said.

03. **The wrong word is the wrong concept underneath.** The writing audit isn't a separate practice from the design audit; it *is* a design audit. The reason buttons were inconsistent across the recruiter view was that the team had never agreed what those buttons *were*. Naming things makes the design clearer.

---

## Footer

Same as other case study pages; mark `Aron Ryszka`, year `2026`, colophon
`CHAPTER 2 · PRODUCT INTERNSHIP · AUG–DEC 2025`.
