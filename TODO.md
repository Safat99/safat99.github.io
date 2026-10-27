# Current Work — Phase 5: Research Evidence

Phase 4 approved and committed by the owner. Phase 5 is Current.

## Current scope — Phase 5A only

- Make Publications & Research Outputs directly scannable, preserving full authors,
  year, venue, accepted/published status, and verified DOI URLs.
- Render BIM 2021 separately as a research presentation, not a publication.
- Add a small relatedOutputs model field and compact links:
  - M.S. thesis → WHISPERS 2026 accepted paper (internal only).
  - CUET multi-robot research → Wiley review (internal + verified DOI).
  - Sleep-stage project → Springer/ICO paper (internal + verified DOI).
  - IoT Box → BIM 2021 presentation (internal only).
- Emphasize the candidate's unambiguous publication author names.
- Move outputs directly after Research Experience; preserve remaining section order.
- Preserve accessible keyboard/focus behavior, mobile layout, and light/dark readability.

## Deferred

Do not start Phase 5B/5C or Phase 6. No project-card redesign, StatScope,
additional robotics builds, research figures/tables/galleries, logos, Technical
Skills/personal redesign, or Awards UI. No dependencies, commits, or pushes.

## Verification

```bash
npm run build
npm run lint
git diff --check
```

Browser-check desktop/~375px, light/dark: output cards and types, status labels,
DOI/internal related links, presentation, full authors/author emphasis, keyboard
focus, no overflow, and active navigation after reordering.

## Completion

Record Phase 5A progress in HISTORY.md and ROADMAP.md. Phase 5 remains Current,
not complete. Keep TODO.md on Phase 5 and stop before Phase 5B pending approval.
