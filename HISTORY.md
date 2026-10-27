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

Implemented — awaiting owner approval.

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
unchanged in this phase. TODO.md remains unchanged; Phase 4 has not started.
