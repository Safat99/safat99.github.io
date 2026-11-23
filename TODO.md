# Current Work: Phase 6B.3 | Recent Updates / News

**Phase 6: Current**
**Phase 6B.3: Implemented | Awaiting Approval**

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
- Phases 6D and 6E remain not started.

Do not commit or push before owner approval.
