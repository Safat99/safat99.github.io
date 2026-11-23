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

**Status:** Complete | Approved

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

Phase 5A, 5B, and 5C are approved. Phase 5 is Complete; Phase 6 is Current.

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

**Status:** Approved

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
- Phase 6B media integration has progressed through 6B.2; 6B.3 is recorded below.
  Phase 6C remains optional and deferred.

Verification completed with Node 22.23.2/npm 10.9.8: build, lint, and diff checks
pass. Browser checks at 1440, 1024, 768, and 375 CSS pixels found no document-wide
horizontal overflow; Light, Dark, Auto under both system schemes, Rain, Snow,
preference persistence, reduced-motion reload behavior, keyboard operation, and
both carousel controls were exercised. The browser emulator changes media-query
matches without dispatching live `MediaQueryList` change events, so dynamic
Auto/reduced-motion updates were verified through the registered listeners in
code and by reloading under each emulated preference rather than by a live OS
preference change.

### Phase 6B.1: Technical Toolkit, Credentials, and Legacy Homepage Triage

**Status:** Implemented | Awaiting Approval

- Replaced the technology-card wall with four compact, evidence-supported groups:
  AI/ML & Scientific Computing; Robotics & Embedded Systems; Software & Distributed
  Systems; and Data & Infrastructure. No ratings or proficiency claims are used.
- No certificate records with exact titles, issuers, issue dates, and verification
  links were found in the repository or academic profile. No credentials are shown
  until evidence is supplied; credentials remain separate from Scholarships & Awards.
- Renamed the post-Leadership Creator section to Technical Outreach & Content and
  selected only three videos paired with established project evidence. Personal
  videos remain in the model but are not rendered on the academic homepage.
- Removed Travel and LinkedIn Recommendations from homepage rendering while preserving
  their model data and components for possible secondary pages. Updated footer links
  and replaced its legacy software-developer tagline.
- Homepage includes Leadership, Recent Updates, compact Technical Outreach & Content,
  then footer.
- Phase 6B.2 media candidates: selected research, projects, teaching/outreach, and
  leadership. Recommended future convention: `src/assets/media/` with profile,
  research, projects, teaching, leadership, and outreach subfolders; use optimized
  responsive images, useful alt text/captions, selective media, and externally hosted
  videos. No directories or media assets were added.

### Phase 6B.2: Public Media, Detail Pages, and Evidence Integration

**Status:** Implemented | Awaiting Approval

- Integrated the already-approved EMEC 361 instrumentation WebP into Teaching &
  Mentoring within the EMEC 361 course entry, with descriptive alt text, intrinsic
  dimensions, lazy loading, and a restrained responsive figure. It no longer appears
  to represent all teaching assignments.
- Added a small, provenance-documented set of public-repository diagrams and figures
  to the relevant project detail pages. Three owner-documented YouTube demonstrations
  have browser-playable, non-autoplay embeds. StatScope includes its interactive live
  demo; its README screenshot paths are absent from the current repository tree, so no
  substitute screenshot was created.
- Kept RMA imagery private because publication/privacy review is still pending.
  Hyperspectral research remains text-first; no substitute visual was introduced.
- Added reusable, data-driven detail pages for the six primary projects and a
  separate RMA / undergraduate robotics history page. Primary project cards and the
  RMA leadership entry link to the corresponding detail pages.
- Used `#/detail/<slug>` fragment routes. This keeps direct loads and refreshes on
  the GitHub Pages base path while leaving existing section anchors intact; no router
  dependency or server rewrite is required.
- Preserved collaboration and contribution boundaries, linked verified repositories,
  demonstrations, the BIM 2021 ResearchGate full text, and related research outputs.
  Videos remain hosted externally; no raw videos or private documents are public.
- The three proposed technical credentials remain unshown because exact credential
  records and verification URLs are not present in the current local factual sources.
- No verified institutional identity assets were available locally; no logos were
  added. Phase 6C remains optional and deferred.
- The EMEC 361 figure is attached only to its course card. The new public project
  derivatives have full source/dimension/size/transformation records in the private
  media shortlist. Repository screenshots for StatScope are missing from the live
  tree; only its working app is embedded. Project-specific tutorials with known
  statistical wording issues remain unlinked pending editorial correction.

Phase 6B.2 is implemented and awaiting approval. Do not commit or push before owner
approval.

### Phase 6B.2 contribution and quantitative-evidence audit

**Status:** Completed as a content-quality refinement; Phase 6B.2 remains Implemented | Awaiting Approval

- Audited research, education, awards, teaching, professional experience, leadership,
  projects, outreach, and all seven detail pages against the current academic profile,
  owner-updated project notes, public repository documentation, and publisher records.
- Added only sourced scope/contribution clarifications: Wiley's published author roles
  for the CUET review; autonomous-car lane-detection paths and operating modes; StatScope's four
  documented workflows; sleep-dataset aggregate scope; and emergency-project team
  experiment settings with attribution caveats.
- No improvement percentages or unverified model scores were added. The emergency
  repository's undefined bounding-box metric and the sleep-paper score remain withheld.
- Detailed claim-by-claim evidence and owner follow-up opportunities are in the ignored,
  private `media-source/QUANTITATIVE_EVIDENCE_AUDIT.md`; no private provenance is copied
  into public site content.
- Verification: Node 22.23.2/npm 10.9.8 build and lint pass; `git diff --check` passes.
  Browser checks covered the homepage and all seven detail routes at 1440px and 375px,
  Light/Dark/Auto behavior and persistence, base-path media, and detail/back navigation.
  No page overflow or application exceptions appeared. YouTube's embed logged the
  browser's unsupported AV1/codec warning, so actual video decoding was not verified.

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

### Phase 6B.3: Recent Updates / News

**Status:** Implemented | Awaiting Approval

- Added a small, manually curated local updates list and a restrained homepage
  section. No LinkedIn scraping, CMS, or runtime external API calls are used.
- Initial entries cover the WHISPERS 2026 presentation, Fall 2026 EMEC 361 teaching
  appointment, and Crawford Wildlife Habitat Scholarship recognition.
- The WHISPERS publication remains classified as accepted and is additionally
  identified as presented. The official program and IEEE GRSS conference pages are
  linked; no proceedings/paper URL is claimed.
- The exact presentation-video URL is absent from local records and remains an owner
  follow-up. IEEE/WHISPERS logos were not added.
- LinkedIn may be a source/reference for future manually curated updates; the website
  does not depend on LinkedIn scraping or runtime API access.
- Node 22.23.2 verification passed: build, lint, and diff check. Browser checks at
  1440px and 375px found no page overflow, broken images, or app/console errors;
  Light/Dark/Auto schemes, external link safety, and keyboard focus were checked.

### Phase 6D: Accessibility, Performance, Metadata, and Deployment Readiness

**Status:** Implemented | Owner deployment confirmation pending

- Added skip links, semantic landmarks, focusable main targets, descriptive
  icon-only link labels, meaningful new-tab relationships, and a not-found route.
- Preserved hash-based detail routing and aligned Vite's base with the user-site
  root. Direct loads, refresh, history navigation, and all seven detail routes were
  checked in the production preview.
- Added route-aware titles/descriptions and Open Graph/Twitter metadata, conservative
  Person JSON-LD, and root `robots.txt`/homepage sitemap. No OG image was invented.
- Lazy-loaded below-the-fold images/embeds, added image decoding/dimensions, removed
  YouTube autoplay, improved iframe fallbacks, and corrected obvious footer contrast.
- Build, lint, diff check, keyboard skip, theme persistence/system changes, responsive
  widths, and browser console were checked.
- Owner follow-up: confirm the canonical/custom domain and GitHub Pages settings,
  approve the existing logo as favicon/touch branding, and supply an OG image only
  if desired. The GitHub Pages settings endpoint was unavailable for verification.

### Deferred future work

- Phase 6C remains optional atmosphere/weather synchronization; geolocation,
  weather-service access, and automatic atmosphere switching are not required.
- Phase 6E remains not started.

Phase 6B.3 is implemented and awaiting approval. Do not commit or push before owner
approval.
