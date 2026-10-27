# Academic Portfolio Roadmap

This roadmap tracks the major implementation phases for the research-first academic portfolio.

---

## Phase 1 — Reconcile Content and Extend the Model

**Status:** Complete

Established the academic data model and reconciled current academic information.

Key outcomes:

- education model added
- research and teaching records separated
- professional and leadership experience structured
- publication status represented explicitly
- research presentations added
- scholarships and awards added
- selected research projects structured
- current M.S. CGPA corrected to 3.50 / 4.00

---

## Phase 1.5 — Historical Content Recovery and Evidence Reconciliation

**Status:** Complete

Recovered useful historical information that had been omitted from the compact academic CV while preserving current authoritative facts.

Key outcomes:

- historical leadership and volunteering restored
- verified project repositories and demonstrations restored
- supporting project details recovered
- evidence/source hierarchy formalized
- quantitative highlights prepared
- current versus historical versus unverified claims distinguished
- Crawford Scholarship evidence incorporated
- academic profile expanded into a comprehensive factual inventory

---

## Phase 2 — Technical Foundation

**Status:** Complete

Repaired technical issues that could interfere with the academic redesign.

Key outcomes:

- independent accordion state
- improved accordion accessibility
- collapsed content removed from keyboard navigation
- long expanded content no longer clips
- active-section navigation corrected
- non-rendered navigation targets handled
- Vite/GitHub Pages asset paths normalized
- favicon and local asset paths corrected
- mobile and keyboard behavior verified

Verification:

- `npm run build` — PASS
- `npm run lint` — PASS
- `git diff --check` — PASS
- browser verification — PASS

---

## Phase 3 — Academic Identity

**Status:** Complete — Approved

Research-first Hero, background, research directions, applied interests, accessible
portrait profile links, and academic metadata approved by the owner.

---

## Phase 4 — Academic Experience

**Status:** Complete — Approved and committed by the owner

Separated research, education, teaching/mentoring, professional experience, and
leadership. Completed advisor/course links, teaching timelines and tense,
TrialWear prototype attribution/privacy, NSF funding context, CUET appointment,
BITAC knowledge sharing, and secondary UIT experience. Preserved approved Hero.

---

## Phase 5 — Research Evidence

**Status:** Current

Make research outputs and technical evidence directly scannable.

### Phase 5A — Implemented, awaiting review

- Publications & Research Outputs now follows Research Experience.
- Four fully visible publication citations retain full authors, year, venue,
  accepted/published status, author emphasis, and three verified DOI actions.
- BIM 2021 appears separately as a research presentation, not a publication.
- Compact related-output links connect thesis→WHISPERS, CUET→Wiley,
  sleep-stage project→Springer/ICO, and IoT Box→BIM presentation.
- WHISPERS and BIM use internal targets without invented publication URLs.
- Desktop/mobile, light/dark, keyboard, anchor focus, navigation, and checks pass.

Phase 5 is not complete. TODO.md stays on Phase 5. Phase 5B/5C and Phase 6
have not started; further implementation requires owner direction.

Planned scope:

- publications
- publication status
- research presentations
- selected research projects
- paper/project cross-links
- GitHub repositories
- demos/videos
- quantitative evidence
- scholarships and awards
- project-level versus personal-contribution attribution

Important relationships include:

- hyperspectral thesis ↔ WHISPERS 2026
- sleep-stage project ↔ Springer publication
- multi-robot research ↔ Wiley review paper
- IoT Box ↔ BIM presentation / GitHub / video
- technical projects ↔ verified repositories and demonstrations

---

## Phase 6 — Presentation and Final Verification

**Status:** Pending

Complete visual refinement and production readiness.

Planned scope:

- visual hierarchy and spacing
- organization/company logos where useful
- optional personal-content decisions
- mobile refinement
- accessibility
- reduced-motion behavior
- metadata and social sharing
- final navigation/footer synchronization
- GitHub Pages deployment paths
- final CV/DOI/repository/demo link verification
- production deployment QA