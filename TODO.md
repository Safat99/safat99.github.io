# Current Work: Phase 6B.2 | Public Media, Project Details, and Evidence Integration

**Phase 6: Current**

## Phase 6B.2: Public Media Selection, Visual Evidence, and Detail Pages

**Status: Implemented | Awaiting Approval**

- Use selected, reviewed derivatives from `public/assets/media/`; private originals
  and `media-source/` remain outside application imports.
- Keep the approved EMEC 361 instrumentation figure scoped to the EMEC 361 course card.
- Keep the six primary project cards and academic homepage order; provide reusable
  evidence-led detail pages for those projects and the RMA history page.
- Add selective repository figures with source-to-derivative provenance, inline
  non-autoplay YouTube demos for documented videos, and an embedded StatScope live
  demo. Do not use missing screenshots or private/unreviewed RMA media.
- Use hash detail routes (`#/detail/<slug>`) to preserve GitHub Pages refresh safety
  and existing section anchors without a routing dependency.
- Show only credential records supported by exact source details and verification
  links. The three proposed credentials remain pending evidence and are not rendered.
- Preserve external video hosting; do not copy archive videos or add auto-play.
- StatScope screenshots are absent from the current repository tree. Its linked
  Google Docs tutorial material needs editorial correction/review before public
  linking. No hyperspectral media is available; no substitute image should be made.
- The contribution/quantitative-evidence content audit is complete. Its private
  provenance and evidence gaps are recorded in the ignored
  `media-source/QUANTITATIVE_EVIDENCE_AUDIT.md`; no performance-improvement percentages
  or unverified scores were added. This refinement passes build, lint, diff checks,
  and browser checks at 1440px and 375px; repeat verification if Phase 6B.2 content
  changes again.

## Verification

Use Node 22.23.2 from `.nvmrc`; run `npm run build`, `npm run lint`, and
`git diff --check`. Browser-check desktop/mobile, Light/Dark, homepage, each detail
route, direct load/refresh, return navigation, evidence links, media paths, focus,
reduced motion, console errors, and horizontal overflow.

## Deferred phases

- Phase 6B.3 News / Recent Updates: not started.
- Phase 6C atmosphere refinement: optional weather-aware synchronization only after
  explicit product decisions. No geolocation or weather service is required for
  normal site operation.
- Later deployment, metadata, and production QA.

Phase 6B.1 remains awaiting approval. Phase 6B.2 is implemented and awaiting approval;
Phase 6B.3 and Phase 6C have not started. Do not commit or push before owner approval.
