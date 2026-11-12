# Project History

## Phase 1: Content model

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

## Phase 1.5: Historical recovery

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

## Phase 2: Technical foundation

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


## Phase 3: Academic identity

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


## Phase 4: Academic experience

Approved and committed by the owner before Phase 5A.

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

Phase 4 refinement (still Implemented | Awaiting Approval): added NSF CCF-2307572
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

Final Phase 4 factual/timeline refinement | Implemented | Awaiting Approval:
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


## Phase 5A: Publications, presentations, and research cross-links

Implemented; Phase 5 remains Current and incomplete. Phase 4 was approved and
committed by the owner before this transition. TODO.md now tracks Phase 5A only.

- Added a simple optional relatedOutputs list to experience/project records and
  a small shared renderer for internal citation targets and optional DOI links.
- Replaced publication accordions with scannable citations showing complete
  author arrays, years, venues, concise descriptions, visible Accepted/Published
  labels, and one clear DOI action per verified URL. Accepted status is preserved.
- Candidate's unambiguous names are emphasized in publication author lists.
  Retained all presentation author strings without guessing which abbreviated
  presentation author should be emphasized or expanding their names.
- Rendered BIM 2021 under Research Presentations, clearly separate from papers;
  no proceedings publication asserted.
- Four supported relationships: M.S. thesis→WHISPERS accepted paper (internal);
  CUET multi-robot planning→Wiley review (internal + DOI);
  CAP/NFLE sleep-stage project→Springer/ICO chapter (internal + DOI);
  IoT Box→BIM presentation (internal).
- No WHISPERS publication URL or BIM proceedings/DOI URL invented. Existing
  verified DOI strings and bibliography facts reused from the academic profile.
  No additional publication links inferred for TrialWear or protein research.
- New output section immediately follows Research Experience; all other sections
  retain relative ordering. Primary navigation follows the rendered section order.
- Research links remain visible when details are closed; project changes only
  add compact related links, preserving existing cards/pagination and content.
- Reused the academic palette and responsive styling; new CSS is scoped to
  outputs/related links. No dependencies, private artifacts, figures, tables,
  project redesign, Awards UI, Phase 5B/5C, or Phase 6 implementation.

Verification (Node 22.23.2 / npm 10.9.8): build PASS without warnings; lint PASS
with zero errors/warnings; git diff --check PASS. Browser checks at CSS 1440px
and 375px, light/dark: five visible output records (one accepted, three published,
one presentation), all four publication author lists/emphasis, safe DOI actions,
2px keyboard focus, no horizontal overflow or clipped citation text. All four
internal related targets tested, including sleep/IoT links through project pages;
anchor navigation focuses the output card below the sticky header and marks
Publications active. No clipping in existing project cards/book containers.


### Phase 5 attribution correction: before Phase 5B

Separated reproduction-based undergraduate MRTA work (existing NuBot
`dynamic_task_allocation` ROS/Gazebo implementation) from later independent
experimental multi-robot software, using the owner's review. Removed the
undergraduate research entry/project card and independent-method/evaluation
claims from public site data; corrected About to describe experience and
experimental exploration. Preserved legitimate robotics/coordination interests,
CUET research assistantship, Wiley review, and existing output cross-links.

The factual inventory retains accurate undergraduate historical context and
records the separate multi-robot-path-finding repository as “Experimental
Multi-Robot Warehouse Coordination / RL Prototype”, Experimental / Incomplete,
with owner-reviewed implementation scope, action/state mismatch, training and
logic limitations, and no defensible quantitative evaluation. No successful
research/baseline/convergence/collision-free claims or public project card added.
GitHub retrieval failed; implementation details are attributed to the owner's
review, not independently verified in this pass. The purpose is accurate
attribution and defensible PhD-application claims. Phase 5 remains Current;
Phase 5B has not started. No design, architecture, or dependencies changed.

Correction verification: Node 22.23.2/npm 10.9.8 build PASS without warnings;
lint PASS with zero errors/warnings; git diff --check PASS. Targeted public-model
search confirms undergraduate MRTA/vacancy-chain/auction claims are absent.
The academic inventory was updated locally; it remains Git-ignored under the
repository's existing policy and is not included in the tracked diff.


## Phase 5B: Selected Projects & Research Software

Implemented | Awaiting Approval. Phase 5 remains Current/incomplete. Phase 5A
approved and committed by the owner before this work.

Audit completed before implementation: all nine requested public repository trees
and selected implementation files inspected. StatScope Flutter/Dart calculations
and screens; autonomous-car lane/motor integration; IoT firmware/interface;
vibration Arduino/MATLAB pipeline; sleep EDF/annotation/exploratory LSTM;
collaborative emergency VGG16/VGG19 dual-head workflow; UrbanSound MFCC/inference;
Health Flask-RESTX/MediaPipe service and Java scaffold; pedestrian VGG16 regression.
The ignored factual inventory records source tree revisions and method limitations.
No external code execution, numerical validation, training, or hardware tests.

Classification:
- PRIMARY: StatScope; OpenCV lane-following car; CAP/NFLE sleep scoring;
  collaborative emergency-vehicle detection; NodeMCU IoT Box; mechanical vibration.
- SECONDARY: UrbanSound8K (useful inference/GUI but external training assets);
  Health AI Receptionist face-detection prototype (not a complete recognition/
  microservice system); pedestrian VGG16 experiments (overlap with stronger CV work).
- HISTORICAL/EARLY: Line Follower, Arduino GameBot/TinkerCAD, PIR alarm projects.
  SoccerBot and standalone RoboFight builds need project-specific evidence.
- OMIT/INTERNAL: reproduction-based undergraduate MRTA and incomplete warehouse/RL.
  TrialWear stays in Research Experience without a duplicate project/private artifacts.

Model: single typed project inventory uses selection (primary/secondary/historical),
2–3 category tags per selected project, concise contribution, methods/tools,
optional status, precise evidenceLinks, and existing relatedOutputs. Nine records
retain six primary and three secondary projects; historical facts stay in the
inventory document. No duplicate runtime archive model or relationship framework.

UI: reused CardView and academic section palette for a two-column desktop / one-
column mobile grid with all six selected cards visible. Removed project pagination
from this section without deleting the reusable FlipBook component. Precise GitHub,
Live Demo, Video Demo links use safe new tabs and accessible project-specific labels.
Short Springer/ICO and BIM labels point to existing output cards, avoiding duplicate
citations. Existing thesis/WHISPERS and CUET/Wiley references remain untouched.
No page reordering, new route/filter/archive, dependency, visual-gallery, Awards,
Skills, Creator, Travel, Phase 5C, or Phase 6 implementation.

Evidence: all nine repo API/source requests succeeded; StatScope live HTML returns
its Flutter deployment. Car/IoT/vibration video oEmbed identifies the owner and
matching project titles; full playback not tested. Used vibration YouTube in place
of redundant login-dependent LinkedIn; original evidence preserved in inventory.
Early Line Follower/PIR video metadata verified; GameBot candidate returned oEmbed
400, retained as historical candidate without claiming live verification.

Attribution corrections: car is tutorial-inspired lane following, not general
self-driving novelty; sleep repository's exploratory LSTM is not the full published
CNN implementation; emergency methods are collaborative, not sole personal results;
StatScope estimates are normal approximations, not validated statistical research
results. Health complete face-recognition/microservice claims and pedestrian three-
model code comparisons are not promoted. No new quantitative performance claims.

Verification: Node 22.23.2/npm 10.9.8 build PASS without warnings; lint PASS with
zero errors/warnings; git diff --check PASS. Browser at CSS 1440px/375px in
light/dark: six cards, 2–3 category tags, correct two-/one-column layout, no
horizontal overflow or clipped titles/content, safe named external links and
2px keyboard focus. Projects active navigation PASS. Both project output links
reach/focus the existing Springer/BIM cards and activate Publications; all five
existing research outputs remain. Scoped tag/list color fix prevents legacy
shared-card colors from reducing light-theme contrast. StatScope live page loads
a Flutter view; no numerical correctness or training/hardware result validated.
The detailed academic inventory update is local/Git-ignored under existing policy.


### Phase 5B final wording/presentation refinement

Implemented | Awaiting Approval; Phase 5 remains Current.
Added optional project subtitle and reused CardView subtitle rendering directly
below headings with scoped secondary typography. Display order/title → subtitle:
1. OpenCV-Based Autonomous Car with Raspberry Pi → Vision-Based Lane-Following Robot
2. StatScope → Statistical Power & Study Planning
3. Sleep-Stage Classification for NFLE Patients → CAP Sleep Database
4. Emergency Vehicle Detection → Classification & Bounding-Box Prediction
5. NodeMCU IoT Box → Smart Home Automation System
6. Mechanical Vibration Analysis → Arduino & ADXL335 Car-Body Sensing

Order conveys robotics-first presentation, not research ranking. Contribution
paragraphs now have semantic bold labels; Methods & tools unchanged. Fixed missing
space in the Square Health architecture/ERD summary. Six projects, static two-/one-
column grid, classifications, all attribution/qualification text, evidence/output
URLs, and secondary/historical inventory preserved. No Phase 5C/6 or archive work.

Refinement verification: Node 22.23.2/npm 10.9.8 build PASS without warnings;
lint PASS with zero errors/warnings; git diff --check PASS. Browser CSS 1440px/
375px in light/dark confirms exact six-project order, subtitles directly below
headings with secondary typography, six semantic Contribution labels, preserved
Methods & tools labels, ten safe external evidence links and unchanged related
output targets, two-/one-column grid, 2px keyboard focus, and no clipping/overflow.


### Phase 5B: BIM conference-paper evidence correction

Phase 5 Current; Phase 5B Implemented | Awaiting Approval. Corrected the separate
BIM output to Conference Paper · September 2021 · Presented, with the exact
ResearchGate record title and a single Full Text · ResearchGate action. NodeMCU
retains its implementation text, tools, GitHub/video URLs and internal output link;
its label now says Conference Paper · BIM 2021 · Presented. Main publication
collection and “3 published + 1 accepted” count unchanged. No DOI/indexing/journal
or indexed proceedings claim added. No Phase 5C, redesign, commit, or push.

Evidence: ResearchGate record 354860121 explicitly identifies Conference Paper,
September 2021, BIM 2021 and public full-text uploads. Acceptance/presentation
is owner-confirmed. Seven authors are reported, but accessible text reveals
only four profiles; both PDF links failed retrieval and direct requests/browser
were blocked (403/temporary access restriction). Exact complete paper byline
cannot be verified yet. Older four-name source array retained for reconciliation
but suppressed publicly rather than presenting it as complete. The UI refers
visitors to the full-text record for authors. Owner-provided paper/byline needed
to finish the authorship requirement; no missing author names/order guessed.
Updated the ignored factual inventory to supersede presentation-only taxonomy.

BIM correction verification: Node 22.23.2/npm 10.9.8 build PASS without warnings;
lint PASS with zero errors/warnings; git diff --check PASS. Browser CSS 1440px/
375px confirms corrected NodeMCU label/target, one ResearchGate full-text action,
noopener/noreferrer + new-tab behavior, 2px keyboard focus, long-title wrapping,
no clipping/overflow, and unchanged main collection (3 Published + 1 Accepted).
Complete seven-author wrapping cannot be checked until the paper byline is supplied.
