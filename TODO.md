# Current Work — Phase 3: Academic Identity

## Objective

Transform the top of the portfolio from an industry/backend-first presentation into a research-first academic identity suitable for Fall 2027 PhD applications.

The primary audience is:

- prospective PhD advisors
- graduate admissions reviewers
- research collaborators

---

## Research Positioning

The academic identity should be centered broadly on:

- artificial intelligence and machine learning
- intelligent and autonomous systems
- robotics
- multi-agent and multi-robot systems
- computer vision and perception
- planning, learning, and software-intensive intelligent systems

Current M.S. research in hyperspectral image classification must be represented accurately.

Do not imply that the current hyperspectral work is robotics research.

The software/backend engineering background should be presented as a strong enabling skill for research rather than as the primary identity.

The positioning should remain appropriate for faculty working in:

- robotics and autonomous systems
- multi-agent systems
- AI and machine learning
- computer vision
- hyperspectral imaging and remote sensing
- precision agriculture involving substantial AI/ML/CV
- software-intensive intelligent systems

Avoid both extremes:

- do not make the profile exclusively robotics-focused
- do not make it so broad that it appears unfocused

---

## In Scope

### Hero

Review and improve:

- kicker
- headline
- subheadline
- research-interest pills/highlights
- Academic CV visibility
- Google Scholar visibility
- GitHub visibility
- LinkedIn visibility
- email visibility
- hardcoded captions or wording that conflict with academic positioning

The Hero should communicate the candidate's academic identity within a few seconds.

---

### About / Background

Rewrite the About content as natural website copy rather than copied CV bullets.

It should communicate:

- current M.S. Computer Science status at Montana State University
- mechatronics/engineering background
- current research direction
- longer-term interests in robotics, multi-agent systems, AI/ML, and computer vision
- software-engineering experience as a research implementation strength

Avoid unnecessary biography or generic statements.

---

### Research Interests

Present research interests in a clear hierarchy rather than as an unstructured list of unrelated fields.

Possible conceptual hierarchy:

**Core**
- AI / Machine Learning
- Intelligent & Autonomous Systems

**Primary directions**
- Robotics
- Multi-Agent / Multi-Robot Systems
- Computer Vision & Perception
- Planning / Learning / Decision-Making

**Applied research domains**
- Hyperspectral Imaging
- Remote Sensing
- Precision Agriculture where substantial AI/ML/CV or autonomy is involved

The final implementation does not need to use these exact headings.

---

### Academic Links

Keep easy access to:

- Academic CV
- Google Scholar
- GitHub
- LinkedIn
- email

Do not add unnecessary links to the primary Hero.

---

### Metadata

Update relevant `index.html` metadata where necessary:

- page title
- description
- academic/research-oriented metadata
- stale backend/industry-first descriptions
- stale hosting assumptions if encountered within Phase 3 scope

Do not perform unrelated metadata or deployment refactoring.

---

## Writing Style

Prefer:

- clear research narrative
- concise academic wording
- evidence-based statements
- natural first-person writing where appropriate
- scannable research-interest labels
- specific terminology supported by the academic profile

Avoid:

- "AI enthusiast"
- generic "passionate about..." language
- exaggerated expertise
- unsupported research claims
- copying full CV bullets
- backend-first identity
- portraying hyperspectral research as robotics
- claiming willingness to work on any topic

---

## Relevant Context

Read:

- `AGENTS.md`
- `WIKI.md`
- `ROADMAP.md`
- this `TODO.md`
- `docs/ACADEMIC_PROFILE.md`

Inspect only relevant implementation files, especially:

- `src/app/model/siteModel.ts`
- Hero components
- About components
- navigation components where needed
- `index.html`
- relevant styling used by Hero/About

Do not reread completed Phase 1/1.5 reconciliation material unless resolving a specific factual conflict.

---

## Out of Scope

Do not yet:

- redesign Research Experience
- create the Education section
- create Teaching & Mentoring
- create Scholarships/Awards
- redesign Professional Experience
- redesign Leadership
- redesign Publications
- redesign Projects
- add organization or company logos
- create paper/project cross-linking
- overhaul Travel or Creator
- remove optional personal sections
- add dependencies
- start Phase 4

---

## Acceptance Criteria

Phase 3 is successful when:

- the first screen clearly presents an academic/research identity
- backend engineering is no longer the dominant identity
- research interests are clear but not artificially narrow
- current hyperspectral research is accurately represented
- robotics/multi-agent interests are clearly visible
- primary academic links are immediately accessible
- About reads naturally as website content rather than CV text
- metadata reflects the academic portfolio
- desktop and mobile Hero layouts remain readable
- light and dark themes remain usable
- no new accessibility regressions are introduced

---

## Verification

Run:

```bash
npm run build
npm run lint
git diff --check
```

Browser-check:

- desktop Hero
- approximately 375px viewport
- light theme
- dark theme
- Academic CV
- Google Scholar
- GitHub
- LinkedIn
- email
- navigation behavior
- text overflow / wrapping

---

## Completion Procedure

When implementation is complete but before approval:

1. update `HISTORY.md` with a concise Phase 3 implementation entry
2. update `ROADMAP.md` so Phase 3 is marked **Implemented — Awaiting Approval**
3. leave this `TODO.md` unchanged
4. report all changes
5. do not start Phase 4
6. do not commit or push