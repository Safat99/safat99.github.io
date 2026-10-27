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
