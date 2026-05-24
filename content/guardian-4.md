# guardian-4.html — Cognitive ergonomics of the Medtronic Guardian 4 CGM

**File path:** `guardian-4.html`
**Accent colour:** `#1F5F6B` (deep teal)
**Page title:** `Guardian 4 CGM — A cognitive-ergonomics case study by Aron Ryszka`
**Meta description:** `An MSc Human Factors case study applying Schema-Based Errors, Rasmussen's SRK model, and Norman's framework to a continuous glucose monitor used by 17 years of unchanged design.`

---

## Top nav

- Mark: `Aron Ryszka — Guardian 4` (with `--accent` dot)
- Links: `Back to work ↗` (links to `/index.html#work`) — single link is fine, this is a deep case
- *Alternative:* full set `The device · Errors · Frameworks · Redesign` if preferred

---

## Hero

**Eyebrow:** `Case Study`

**Title:** `Guardian 4`

**Dek (italic):**
> Cognitive ergonomics of a medical device I use every day.

**Lede:**
A continuous glucose monitor that's saved more than one life — and one whose application process has barely changed since 2006. This case study analyses why users make the errors they make, using three established human-factors frameworks, and proposes three low-cost design interventions grounded in the analysis.

**Meta strip (4 items):**

| Author | Format | Year | Course |
|--------|--------|------|--------|
| Aron Ryszka, 2025 | MSc Human Factors case study | 2025 | INM435 |

---

## Section 01 — The device

**Section number:** `01`
**Section title:** `A medical device people <em>use at home</em>`

**Lead paragraph (with drop-cap):**

The Medtronic Guardian 4 is a continuous glucose monitor (CGM) — a small sensor worn on the body that reads interstitial glucose every few minutes and feeds the data to an insulin pump or a phone. It is one of the most commonly NHS-prescribed CGMs for Type 1 diabetes. It is also, by application complexity, the closest thing to medical equipment a patient will ever attach to themselves at home.

**Body:**

The Guardian 4 launched in late 2023. Its predecessor launched in 2006. The application process — the sequence of physical steps the user performs every seven days to start a new sensor — has not meaningfully changed across that 17-year span. The sensor is applied via a one-press serter, the needle has to be removed manually, three adhesive patches are applied in a specific order, a transmitter is clicked on, and the system is paired with the pump. Skipping any step or doing them in the wrong order can render a £55 sensor unusable.

The comparable device for most users is the **Freestyle Libre 2** — a CGM the size of a £2 coin, applied in a single press, scanned with a phone via NFC, and lasting two weeks (versus one for Guardian 4). I've used both. The contrast is the case study.

**Pull quote:**

> *"It's well worth it when things finally start working for you."*
> — Minute-Pilot5282, r/Medtronic780g

**Personal-note callout** (use a `.commitment`-style card, but with `--accent` left border instead of `--commit`, label "Disclosure"):

I have used the Guardian 4 for a year as a Type 1 diabetic. The error patterns described below come from three sources: published cognitive-ergonomics literature, qualitative analysis of CGM forums and review sites, and my own use. Personal experience is treated here as a domain-knowledge primer, not as primary data.

---

## Section 02 — Fourteen errors

**Section number:** `02`
**Section title:** `Fourteen <em>errors</em>`

**Lead paragraph (with drop-cap):**

A qualitative review of Medtronic user forums and CGM communities, combined with my own use, identified fourteen recurring application errors. Some are slips of attention; some are reasonable misapplications of mental models learned from other devices; some are the device's design genuinely fighting the user. Grouped by stage of application:

**Use the `.failures` numbered-list pattern. Each item has a strong serif title and a sans body.**

01. **Procedure imported from another CGM**
    User applies a procedure learned from Guardian 3 or Libre. The devices look similar; the procedures differ.

02. **Step misread or misinterpreted**
    Instructions are not always unambiguous. A user reading carefully can still take the wrong step.

03. **Step skipped under distraction**
    Application takes time; the user is interrupted; they resume incorrectly.

04. **Serter button difficulty**
    The one-press serter requires firm two-button compression. Users with reduced grip strength struggle.

05. **Wrong part of needle pressed during removal**
    The needle has small grips; misidentification leads to pulling the wrong thing.

06. **Sensor removed accidentally with the needle**
    The most consequential error. The user intends to remove the needle and removes the entire sensor with it — £55 lost, eight hours without monitoring before a replacement is available.

07. **Patch applied instead of removing the needle**
    Often intentional — users apply the patch first to anchor the sensor, then try to remove the needle. This is now the safer route.

08. **Patches applied out of order**
    The strip patch (Patch 3) must be applied before the oval patches; doing it the other way prevents the strip from sitting flat.

09. **Patches applied in the wrong rotation**
    The patches have an intended orientation; the user picks the wrong axis.

10. **Patch omitted**
    Three patches required; user forgets one. The sensor will fail within hours.

11. **Transmitter connected before oval patches applied**
    Transmitter is satisfying to click on. Users connect it eagerly, then can't reach underneath to apply the patches.

12. **Transmitter connected without applying patches at all**
    User thinks the process is complete after the click. It isn't.

13. **Wrong-point resumption after interruption**
    Resumed task at the wrong step; the patient cannot tell from the device's state which step they're on.

14. **Process assumed complete prematurely**
    The transmitter clicks; the LED flashes; the user assumes done. The sensor still needs pump-side activation.

**Closing paragraph:**

Fourteen errors is not a long list. But this is a high-stakes context: the most severe outcomes — a missed sensor leading to undetected hypoglycaemia — can be life-threatening for the 20–25% of patients who lack hypoglycaemia awareness. The bar for error frequency is therefore not "tolerable across a typical user base." It's "as close to zero as design can reach."

---

## Section 03 — Three frameworks

**Section number:** `03`
**Section title:** `Three <em>frameworks</em>`

**Lead paragraph:**

The fourteen errors look chaotic; classified through the right frameworks, they aren't. The analysis applies three lenses sequentially — each catches what the others miss.

### Schema-Based Error Types

**Body:**

Reason's schema theory holds that users carry mental templates ("schemas") for sequences they've performed before. Errors come from one of three failure modes: the **wrong schema activated** (you applied a Libre procedure to a Guardian); the **correct schema activated wrongly** (you pulled when you should have pressed); or the **schema not activated at all** (you forgot to apply a patch).

Twelve of fourteen Guardian 4 errors fall into one of these three categories. The remaining two are device-mechanical (Errors 04, 05) and are partly schema-related anyway.

### Rasmussen's SRK Model

**Body:**

Skill, Rule, Knowledge — three levels of cognitive control mapped to how automatic the action is. Skill-based actions are unconscious (System 1 in Kahneman's terms); rule-based actions consult known if-then patterns; knowledge-based actions require slow, deliberate reasoning (System 2). Errors at each level have different causes and different fixes.

Most Guardian 4 errors live at the **rule-based** level — users have learned an if-then for application but the if-then isn't the device's actual procedure. A handful are **knowledge-based** (first-time users, unfamiliar instructions). The serter-button failures are **skill-based**.

### Norman's Error Model

**Body:**

Norman classifies errors into **slips** (you knew what to do; you did it wrong) and **mistakes** (you didn't know what to do; you planned the wrong thing). Reason's **lapses** (memory failures of omission) round out the categorisation.

Where SRK explains the cognitive level the user was operating at, Norman explains whether the failure was in execution or in planning. Sensor-removed-with-needle is a slip; transmitter-connected-before-patches is a mistake; patch-omitted is a lapse.

### Cross-model analysis

A 14-row cross-classification table maps every error against all three frameworks. The complete table is in the linked report; the headline finding: **the most consequential error in the dataset — accidentally removing the sensor while removing the needle (Error 06) — classifies as "correct schema activated wrongly · skill-based · slip."** That cross-classification is what makes the redesign possible. A slip-class error at the skill level cannot be fixed by clearer instructions. It can only be fixed by changing what the user's hand can do.

---

## Section 04 — Three interventions

**Section number:** `04`
**Section title:** `Three <em>interventions</em>`

**Lead paragraph:**

Three design changes proposed, all low-cost relative to the device's £55 unit cost, and each targeted at a specific cluster of errors from the cross-model analysis. Together they address eleven of the fourteen errors.

### Use the `.commitment` callout pattern — three cards in a vertical stack (or 1-col grid). Replace the `--commit` border with `--accent`.

**Card 1**

- **Label:** `Design intervention · I`
- **Title:** `Colour-coded, numbered instruction guide`
- **Body:**
  Split application into two visual phases — *attach* and *activate* — each its own colour. Number every patch and every component to match the order it appears in the sequence. The intervention costs almost nothing per unit; pure inking and printing.
- **Targets:** Errors 01, 02, 03, 08, 09, 10, 13 — lapses and mistakes driven by memory and sequencing failures (rule-based).

**Card 2**

- **Label:** `Design intervention · II`
- **Title:** `Needle-component redesign`
- **Body:**
  Replace the pull-removal action with a press-release mechanism — the needle pops out after a clear button press, mirroring the action Medtronic already uses on its own infusion sets. Larger, more obvious buttons. Distinct from the sensor body.
- **Targets:** Error 06 — the catastrophic-cost slip. A skill-level fix for a skill-level failure.

**Card 3**

- **Label:** `Design intervention · III`
- **Title:** `Reorder: patch before needle`
- **Body:**
  Move the first oval patch in the procedure from after needle removal to before it. Users already do this informally; standardising it removes the temptation to pull while unattached and prevents the most common path to sensor displacement.
- **Targets:** Errors 06, 07, 11 — sequencing-driven mistakes.

---

## Section 05 — How I'd test this

**Section number:** `05`
**Section title:** `How I'd <em>test it</em>`

**Lead paragraph:**

Three interventions are hypotheses, not facts. The case study includes a usability-testing plan that the redesign would need to pass before it could be claimed as a fix.

**Body:**

**Method:** Comparative usability testing, redesigned device against current Guardian 4. Within-participant design, counterbalanced order.

**Participants:** Twelve, recruited across two cohorts — six experienced Guardian 4 users (six months or more of use) and six first-time CGM users. The split matters: skill-based errors only show up in habitual users, and knowledge-based errors only show up in new ones.

**Measures:**
- *Quantitative:* error frequency per stage, time-to-completion, abandonment rate, severity-weighted error score.
- *Qualitative:* think-aloud during application, semi-structured interview after.

**Analysis:** Errors observed in the redesign mapped back to the same three frameworks used in the original analysis. If the framework-classification distribution shifts — fewer slips, fewer lapses, similar mistakes — the redesign succeeded at its targets. If error frequency drops but the same classes recur, the redesign attacked the wrong layer.

**Limit acknowledged:** Single-session evaluation cannot capture learning effects across weeks of use. A four-week diary study after the initial test would be the proper follow-up. The MSc scope didn't permit it.

---

## Section 06 — What's transferable

**Section number:** `06`
**Section title:** `What's <em>transferable</em>`

**Lead paragraph:**

Three lessons that hold outside the medical-device context.

Use the `.impl` numbered-list pattern.

01. **Three frameworks are stronger than one.** Schema-based analysis tells you which mental model failed; SRK tells you the cognitive level; Norman tells you whether it was execution or planning. Each catches errors the others miss. For multi-stage tasks where errors are diverse, single-framework analysis under-classifies.

02. **Catastrophic-cost errors need physical fixes, not informational ones.** Clearer instructions don't solve skill-level slips. The hand has to be physically prevented from doing the wrong thing — or designed so the wrong thing is harder than the right thing.

03. **Familiarity is a hazard.** Users coming from a different device of the same class will import their old schema. Where two devices serve the same function but procedure differs significantly, the new device either has to look obviously different (visual differentiation) or has to make the old schema fail safely on first attempt.

---

## Section 07 — Reflection

**Section number:** `07`
**Section title:** `Reflection`

**Lead paragraph:**

The proposal is grounded in established frameworks and a year of personal use. It would still need testing against real users to claim impact. What this case study *can* honestly claim is that the analytical method works — applying three frameworks to a complex sequential task produced a clearer map of where failures cluster, and that map turned into design interventions that target specific error classes rather than the symptoms.

If the redesign reduced the rate of Error 06 alone — sensor lost with the needle — Medtronic would recoup the cost of the design change in under a year of warranty claims. That is not the point of the case study; it is, however, an answer to the question of whether human-factors analysis pays for itself.

---

## Footer

Same as index, but with `Aron Ryszka` mark, year `2026`, colophon
`MSC HUMAN FACTORS · COGNITIVE ERGONOMICS CASE STUDY`.
