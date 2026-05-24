# Portfolio Build Package

Everything Claude Code needs to build the multi-page portfolio site. Read
this once; then follow the **How to use this package** section at the bottom.

---

## What's in here

```
portfolio-package/
├── README.md                       ← you are here
├── PROMPT.md                       ← paste this into Claude Code
├── design-system.md                ← design tokens, components, layout rules
├── reference/
│   └── branchflow-case-study.html  ← the existing page (visual reference)
├── content/
│   ├── index.md                    ← landing page content
│   ├── guardian-4.md               ← Guardian 4 CGM case study
│   ├── chapter-2.md                ← combined internship case (3 projects)
│   └── evermatch.md                ← EverMatch case study
└── assets/
    ├── branchflow-workspace.jpg    ← existing BranchFlow screenshot
    ├── chapter-2-recruiter-workflow.jpg
    ├── chapter-2-bookings.jpg
    ├── chapter-2-writing-audit.jpg
    └── evermatch-portfolio.jpg
```

---

## What the build will produce

Five HTML pages, all single-file and self-contained, all sharing the same
design system but with per-project accent colours:

| File                  | Accent     | Purpose                                            |
|-----------------------|------------|----------------------------------------------------|
| `index.html`          | Terracotta | Landing — hero + project tiles + about + contact   |
| `branchflow.html`     | Terracotta | Deep case (already exists — see note below)        |
| `guardian-4.html`     | Deep teal  | Medical-device cognitive-ergonomics case           |
| `chapter-2.html`      | Aubergine  | Internship work — three projects in one page       |
| `evermatch.html`      | Dusty rose | Academic prototype with pivot narrative            |

---

## A note on BranchFlow

`branchflow.html` already exists. The reference page at
`reference/branchflow-case-study.html` is your design-system bible — every
component, every spacing rule, every CSS pattern lives in it. **Do not
modify it as part of this build.** Treat it as read-only reference.

Two small changes Claude Code should make to it during the build:

1. Update the top-nav: change the mark from "BranchFlow" to "Aron Ryszka —
   BranchFlow" (matches the convention of other case pages), and replace the
   in-page anchor links (`The gap`, `Design bet`, etc.) with a single
   `Back to work ↗` link pointing to `/index.html#work` — so all case pages
   share the same nav structure.
2. Rename the file to `branchflow.html` (drop the `-case-study` suffix) so
   the URL scheme is consistent across pages.

---

## A note on the assets

The `assets/` folder includes the existing BranchFlow screenshot plus
optimised renders of the four portfolio-document pages (Recruiter Workflow,
Bookings, UX Writing Audit, EverMatch). These were rendered from the PDFs
at the time of building this package.

The portfolio-document renders are full-page exhibits — they show
diagrams, wireframes, and tables embedded within the original document
layout. They work well as figures inside case-study sections because they
preserve the original visual context. If you ever want to swap them for
just-the-diagram crops, you can drop the cropped versions into the same
filenames and the pages will pick them up automatically.

---

## A note on the truth-corrections baked in

Two small but important corrections from the original portfolio PDFs are
already baked into the content:

1. **Recruiter Workflow synthesis** is described as working from *real
   recruiter transcripts plus AI-generated JTBD personas* — not direct
   interview participation. (Matches the CV; the PDF version was overstated.)
2. **The API caching observation** from the CV is included as its own
   section on the Chapter 2 page. It wasn't in the PDF and is worth
   surfacing — engineering-adjacent thinking reads well to senior reviewers.

---

## How to use this package

### Option A — From the Claude Code CLI (recommended)

1. Drop this entire `portfolio-package/` folder into the **root** of your
   portfolio repo (alongside `package.json` or your existing static-site
   structure).
2. Open Claude Code in the repo root: `claude` (or however you launch it).
3. Open `PROMPT.md`, copy the contents, paste into Claude Code as your
   first message.
4. Claude Code will read the design system, read the content briefs, look
   at the reference HTML, and build the five pages. You'll be asked to
   review each one before moving on.
5. Once it's done, commit the new files. The `portfolio-package/` folder
   can stay in the repo as documentation, or be deleted.

### Option B — If you're working file-by-file

If you'd rather build one page at a time:

1. Show Claude Code the design system, the reference HTML, and one content
   file at a time.
2. Ask it to produce the corresponding HTML.
3. Review, ask for revisions, commit, move on.

This is slower but gives more control. Recommended if you want to A/B test
visual decisions before they propagate.

### Option C — Static deploy

The five HTML files are static, single-file, and have no build step. They
can be deployed as-is to:

- Vercel (drag-drop the folder; root directory should contain `index.html`)
- GitHub Pages (push to `main`, set Pages to serve from root)
- Netlify drop
- Any S3 / CloudFront bucket

The assets (`/assets/*.jpg`) need to live in a folder named `assets`
relative to the HTML files — Claude Code will write the relative paths
that way by default.

---

## What you'll still want to do by hand

- **Add a CV download link** on the landing page if you want one. The CV
  isn't included in this package because it lives outside the portfolio's
  brand boundary — but if you'd like, drop a `cv.pdf` into `assets/` and
  ask Claude Code to add a `Download CV ↗` link in the contact section.
- **Take a Guardian 4 photograph or diagram.** The Guardian 4 case study
  doesn't currently have a visual exhibit. The case stands on its prose
  but would benefit from a single supporting image — a task-analysis
  diagram, a labelled photograph of the device, or a simple before/after
  of one of the proposed redesigns. Whatever you have or can make.
- **Decide on hosting.** I'd recommend Vercel — drag the folder onto
  vercel.com, you'll have a URL in 30 seconds. Custom domain after.
- **Add `og:image` social cards** if you want the site to share nicely on
  LinkedIn. One per case page. The current `<meta>` tags are baseline.
