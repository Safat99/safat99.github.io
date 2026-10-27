# Project History

## Phase 1 — Content model

Completed.

Key outcomes:
- academic model extended
- CGPA corrected
- research and teaching separated
- publication statuses introduced
- education/presentations/awards added

Verification:
- build PASS
- lint PASS

## Phase 1.5 — Historical recovery

Completed.

Key outcomes:
- verified historical project details restored
- project/evidence links reconciled
- IEOM and volunteer experience recovered
- quantitative highlights added
- source hierarchy formalized
- Crawford evidence added

Verification:
- build PASS
- lint PASS
- diff check PASS

## Phase 2 — Technical foundation

Implementation completed; awaiting owner approval before advancing TODO.

Key outcomes:
- independent professional, research, and leadership accordion state
- hidden collapsed panels excluded from focus/accessibility navigation, with
  button/region relationships and unrestricted expanded content height
- active navigation tracks rendered targets in page order, including at page end;
  no missing contact fallback, with `aria-current` and event/observer cleanup
- base-aware travel/recommendation assets and existing favicon; removed references
  to missing favicon variants, touch icon, and manifest (no new logo work)
- academic data, section order, dependencies, and existing visual design preserved

Verification (Node 22.23.2 / npm 10.9.8):
- npm run build PASS, no warnings
- npm run lint PASS, zero errors/warnings
- git diff --check PASS
- browser checks PASS: independent groups; Enter/Space and Tab behavior;
  collapsed links reject focus; mobile long panel (4,058px) is not clipped;
  hero/middle/bottom navigation; local image/CV/favicon responses and file signatures
  under /safat/; relative/root/base-prefixed asset URLs and external URL preservation

TODO remains Phase 2 until approval. Phase 3 has not started.


## Phase 3 — Academic identity

Approved by the owner before Phase 4 implementation.

- Replaced backend-first Hero copy with an AI/ML and intelligent-systems identity;
  accurately separated current hyperspectral research from broader robotics,
  multi-agent, perception, planning, and learning interests.
- Added model-backed academic kicker/current location, concise thesis evidence,
  labeled CV button, Scholar/GitHub/LinkedIn/YouTube icon buttons below the
  portrait/caption, email, and accessible copy feedback.
- Rewrote About around M.S./mechatronics background, research trajectory, and
  software engineering as an implementation strength; added applied-interest labels.
- Scoped Hero/About responsive styles and light-system/explicit-dark readability;
  existing Dark/Rain/Snow theme controls remain unchanged.
- Updated title, description, social metadata, profile links, structured data,
  current affiliation, and canonical host (safat99.github.io, inferred from origin).
  Removed the nonexistent search action and unverified social-image dimensions.
- Refinement: restored YouTube in Hero/Person metadata; retained GrabCAD in
  contact/metadata only. Icon buttons preserve aria-labels, title tooltips, 44px
  targets, wrapping, and visible keyboard focus. Applied requested capitalization,
  exact thesis/subline/engineering copy, and five applied-interest labels.
- No other sections, academic records, ordering, dependencies, or personal sections changed.

Verification (Node 22.23.2 / npm 10.9.8):
- npm run build PASS, no warnings; npm run lint PASS, zero errors/warnings;
  git diff --check PASS.
- Browser layout checks at effective CSS widths 1440px and 375px: no Hero/About
  overflow; sampled text/link contrast >8:1 light and >10:1 dark after transitions.
- Refinement browser checks PASS at 1440px/375px in light/dark: photo/icon alignment,
  no overflow, icon-only accessible names/tooltips, 44px buttons, visible 2px Tab
  focus, four direction pills/five applied-interest pills, CV/PDF and email copy.
- About navigation and active state PASS; email mailto/copy/live status PASS.
- CV response 200/application-pdf with valid PDF signature; direct separate-tab
  navigation PASS; link target _blank and no download confirmed. Normal popup-event
  observation is unavailable in the integrated browser; manual click confirmation
  in a regular browser remains useful.
- GitHub and Scholar return matching 200 pages. LinkedIn URL matches the verified
  profile, but automated requests return 999; login-dependent content not verified.

Confirm the intended published canonical URL before deployment; the Vite base is
unchanged in this phase. Phase 3 approved; TODO.md transitioned to Phase 4 at the owner’s request.


## Phase 4 — Academic experience

Implemented — Awaiting Approval.

- Reused typed experience records and the controller; added optional narrative
  summaries, structured course/instructor descriptions, and scoped public context.
- Split experience into research, education, teaching/mentoring, professional,
  and leadership sections. Summaries stay visible; each section owns accordion state.
- Prioritized the hyperspectral thesis, TrialWear (Spring–Summer 2026), protein
  scaffold gap filling, CUET multi-robot planning, and undergraduate MRTA research.
- TrialWear wording describes personal Flutter/Spring Boot prototype work, supported
  data/API/BLE contributions, and limits of production/clinical/hardware validation.
  Linked the verified MSU public context page with an explicit earlier-team disclaimer;
  no private artifacts or links published.
- Rendered four documented MSU courses with instructors and supported duties,
  FLL volunteer judging, Arduino/electronics and mobile-robotics instruction.
  BITAC is identified as paid collaborative technical knowledge sharing, including
  group discussion/presentations and future training/skill-development needs, not
  a formal instructor appointment.
- Preserved three software roles and their implementation depth; added secondary
  UIT technical support (May–August 2026, part-time) after those roles.
- Leadership preserves RMA, IEOM, Volunteer for Bangladesh, and CUET Chess Club;
  IEOM GOLD is explicitly chapter/team recognition.
- Education shows documented dates and understated GPA; no graduation estimate
  or undergraduate thesis dates invented. Official course links and verified instructor
  links are rendered inline; James Black remains unlinked because the supplied
  directory currently lacks a matching listing.
- Order: Hero, Background, Research, Education, Teaching, Professional, Skills,
  Leadership, then existing Projects, Publications, Creator, Travel, Recommendations,
  Footer. Personal sections remain; primary navigation emphasizes academic sections.
- Preserved Phase 3 Hero, publications/projects presentation, personal components,
  dependencies, awards, and private materials. Phase 5 not started.

Verification: Node 22.23.2/npm 10.9.8 build and lint PASS without warnings;
whitespace check PASS. Browser checks at CSS 1440px and 375px in light/dark:
no horizontal overflow or clipped expanded content; four course entries readable;
Enter/Space expansion, independent state, 2px focus, and academic navigation checked.
New academic anchor offsets accommodate the wrapping sticky navigation; active-section
tracking respects those offsets, including on narrow screens.
Public MSU TrialWear page verified; earlier project context is not evidence of
Safat's 2026 participation. TODO.md stays on Phase 4 pending approval.

Phase 4 refinement (still Implemented — Awaiting Approval): added NSF CCF-2307572
funding context to protein scaffold research without publication/authorship claims
or private evidence; expanded the CUET title to include the Directorate of Research
& Extension; retained research order/topic. Added optional courseUrl/instructorUrl
fields and safe, accessible inline links to all four official course catalogs and
Pearsall/Izurieta/Hartshorn pages. The supplied James Black directory candidate
(https://www.montana.edu/mie/directory/) is reachable but contains no matching listing;
no instructor link asserted. Corrected BITAC to Knowledge-Sharing Contributor with
paid group-based technical exchange and reciprocal learning. No assigned technical
subjects, equipment, curriculum modules, or formal teaching role asserted.
Architecture, styling, section order, private artifacts, and Phase 5 scope unchanged.

Refinement verification: build PASS with no warnings; lint PASS with zero
errors/warnings; git diff --check PASS. Browser checks at CSS 1440px/375px in
light/dark: seven course/instructor links have clear accessible names, safe
new-tab attributes, keyboard Tab access and visible 2px focus; no horizontal
overflow or clipped teaching/research text. NSF identifier, CUET topic/order,
and corrected BITAC title/description confirmed in the rendered page.

Final Phase 4 factual/timeline refinement — Implemented — Awaiting Approval:
- Added optional advisorUrl and course when fields, with inline advisor/PI names
  linked to research profiles (new tab, noopener/noreferrer, accessible labels,
  existing visible focus styling). TrialWear context remains separate.
- Verified Whitaker and Johnson institutional research identities in the rendered
  MSU directory pages, and Zhu on his official CS page. Banik's owner-provided
  Scholar URL returned 403 to automated retrieval; live content not verified.
- Parent GTA timeline is now “2025–Present · Multiple teaching appointments”;
  summary describes the full multi-semester record. Added owner-confirmed EMEC
  Fall 2025/Fall 2026 and ENSC Fall 2025 to the factual inventory and model.
- EMEC retains present tense for the current assignment; CSCI, ESOF, and ENSC
  descriptions use past tense with responsibilities preserved. CSCI Summer 2025
  and ESOF Spring 2025 were supplied in the request but are not already in the
  profile; labels remain omitted pending clarification, following its explicit
  conditional instruction.
- Preserved design, section architecture/order, research topics, Phase 5 scope,
  owner-edited course/instructor links, and BITAC wording. No private evidence.
Verification: Node 22.23.2/npm 10.9.8 build/lint/whitespace PASS without warnings
or errors. Browser at CSS 1440px/375px, light/dark: advisor names, safe link
attributes/labels, keyboard Tab access and 2px focus, semester labels, tense,
readability, and wrapping checked; no horizontal overflow or clipped text.
