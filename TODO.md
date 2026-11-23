# Current Work: Phase 6D | Deployment Readiness

**Phase 6: Current**
**Phase 6D: Implemented | Owner deployment confirmation pending**

## Prior phase follow-up: Phase 6B.3

**Status:** Implemented | Awaiting Approval
- Recent Updates use manually curated local data in `src/app/model/siteModel.ts`;
  do not scrape LinkedIn, add a CMS, or make runtime external API calls.
- WHISPERS 2026 remains an accepted output and is also identified as presented on
  November 18, 2026. Use the official conference program and IEEE GRSS event links.
- Do not link a DOI/proceedings record or presentation video until an exact URL is
  verified. The presentation-video URL still needs owner input.
- Keep news concise, accessible, responsive, and subordinate to the academic
  narrative. LinkedIn is only an optional source/reference.

## Verification

Use `.nvmrc` (Node 22.23.2) and run:

```sh
npm run build
npm run lint
git diff --check
```

Browser-check desktop/mobile, Light/Dark/Auto, keyboard focus, external links,
navigation, no horizontal overflow, and browser console.

## Deferred

- Phase 6C is optional/deferred; no geolocation or weather service is needed.
- Phase 6D is implemented. Before publishing, confirm the root canonical/custom
  domain and GitHub Pages settings (the Pages settings endpoint was unavailable).
- Approve `public/logo.png` as favicon/touch branding or provide a dedicated icon;
  optionally provide an approved social-preview image. No image was generated.
- Phase 6E remains not started.

Do not commit or push before owner approval.
