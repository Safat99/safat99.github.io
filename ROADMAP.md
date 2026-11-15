# Academic Portfolio Roadmap

This roadmap tracks the major implementation phases for the research-first academic portfolio.

---

## Phase 1: Reconcile Content and Extend the Model

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

## Phase 1.5: Historical Content Recovery and Evidence Reconciliation

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

## Phase 2: Technical Foundation

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

- `npm run build` | PASS
- `npm run lint` | PASS
- `git diff --check` | PASS
- browser verification | PASS

---

## Phase 3: Academic Identity

**Status:** Complete | Approved

Research-first Hero, background, research directions, applied interests, accessible
portrait profile links, and academic metadata approved by the owner.

---

## Phase 4: Academic Experience

**Status:** Complete | Approved and committed by the owner

Separated research, education, teaching/mentoring, professional experience, and
leadership. Completed advisor/course links, teaching timelines and tense,
TrialWear prototype attribution/privacy, NSF funding context, CUET appointment,
BITAC knowledge sharing, and secondary UIT experience. Preserved approved Hero.

---

## Phase 5: Research Evidence

**Status:** Current

Make research outputs and technical evidence directly scannable.

### Phase 5A: Complete, approved and committed by the owner

- Publications & Research Outputs now follows Research Experience.
- Four fully visible publication citations retain full authors, year, venue,
  accepted/published status, author emphasis, and three verified DOI actions.
- BIM 2021 appears separately as a research presentation, not a publication.
- Compact related-output links connect thesis→WHISPERS, CUET→Wiley,
  sleep-stage project→Springer/ICO, and IoT Box→BIM presentation.
- WHISPERS and BIM use internal targets without invented publication URLs.
- Desktop/mobile layout, keyboard focus, anchor navigation, and build checks pass; no conventional light/dark theme verification is claimed.

### Phase 5B: Complete, approved and committed by the owner

- Audited nine public repositories and corrected claims to match source evidence.
- Six selected homepage projects in display order: OpenCV autonomous car,
  StatScope, NFLE sleep scoring, emergency vehicles, IoT Box, mechanical vibration.
  Refined title/subtitle hierarchy and visible Contribution labels preserve the
  static grid, classifications, safeguards, and existing evidence/output links.
- Typed selection/category/contribution/evidence records preserve three secondary
  archive candidates; early builds and omitted work classified in factual inventory.
- Responsive shared-card grid, academic colors, precise evidence links, short
  output references; publication relationships preserved.
- No public archive, filters, galleries, extra robotics builds, or private artifacts.

Phase 5 is Complete after owner approval of 5A, 5B, and 5C. Phase 6 is Not Started.

### Phase 5C: Approved

- Added a dedicated Scholarships & Awards section between Education and
  Teaching & Mentoring; the final order places Selected Projects after Professional Experience.
- Featured the 2025 and 2026 Crawford Wildlife Habitat Scholarships separately,
  with distinct research themes and a two-time-recipient statement.
- Linked the 2025 MSU Alumni Foundation article with its evidence scope explicit;
  it supports the 2025 inaugural cohort and project only, not the 2026 award.
- Added the 2017 CUET Technical Scholarship, three grouped robotics competition
  placements, the 2019 Best Volunteer Award, and IEOM GOLD as chapter/team
  recognition with no invented award year.
- Added Awards navigation and a footer quick link. Kept the other recognition
  compact and did not add a statistics dashboard or unsupported metrics.
- Phase 5A, 5B, and 5C are Approved. Phase 5 is Complete; Phase 6 is Not Started.

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

## Phase 6: Presentation and Final Verification

**Status:** Current

### Phase 6A: Visual Foundation, Theme Architecture, and Responsive Cleanup

**Status:** Implemented | Awaiting Approval

- Added independent Light/Dark/Auto base appearance and None/Rain/Snow atmosphere
  preferences. Auto follows the operating system; existing Rain/Snow effects remain
  available as optional overlays.
- Migrated legacy theme preferences and persisted the two new preferences separately.
- Consolidated shared semantic color tokens and applied them to academic sections,
  navigation, technical skills, personal carousels, and footer surfaces.
- Added reduced-motion handling for CSS transitions/animations and atmospheric canvas
  effects.
- Bounded the Creator and Recommendations carousel tracks and made their cards shrink
  to the available viewport, addressing mobile page overflow at its source.
- Phase 6B media integration and Phase 6C weather synchronization remain Not Started.

Verification completed with Node 22.23.2/npm 10.9.8: build, lint, and diff checks
pass. Browser checks at 1440, 1024, 768, and 375 CSS pixels found no document-wide
horizontal overflow; Light, Dark, Auto under both system schemes, Rain, Snow,
preference persistence, reduced-motion reload behavior, keyboard operation, and
both carousel controls were exercised. The browser emulator changes media-query
matches without dispatching live `MediaQueryList` change events, so dynamic
Auto/reduced-motion updates were verified through the registered listeners in
code and by reloading under each emulated preference rather than by a live OS
preference change.

Complete visual refinement and production readiness.

Planned scope:

- visual hierarchy and spacing
- organization/company logos where useful
- optional personal-content decisions
- mobile refinement
- media architecture: organized project/research/teaching/awards asset locations,
  optimized formats, responsive images, accessible alt text/captions, selective
  homepage media, and external video embeds/links instead of large stored video files
- accessibility
- metadata and social sharing
- final navigation/footer synchronization
- GitHub Pages deployment paths
- Phase 6C: optional weather-aware atmosphere synchronization, deferred; no
  geolocation, network weather lookup, or automatic atmosphere switching in 6A
- final CV/DOI/repository/demo link verification
- production deployment QA
