# Codex Project Handoff

## Project

- React + TypeScript + Vite portfolio, deployed through GitHub Pages.
- Vite uses the `/` base for the `safat99.github.io` user site. Project detail pages
  use `#/detail/<slug>` fragments so direct loads and refreshes work without server
  rewrites; ordinary homepage anchors remain hash anchors.
- Purpose: a research-first academic portfolio for Fall 2027 PhD applications.
- Never invent academic facts, numbers, results, dates, publication status, or
  individual attribution. Use `docs/ACADEMIC_PROFILE.md` for factual content when
  needed; absence from the compact CV does not disprove historical facts.
- `media-source/` is private and ignored. Only reviewed public derivatives under
  `public/assets/media/` may be referenced by the site.

## Homepage and data architecture

`src/app/model/siteModel.ts` is the typed content source; `siteController.ts`
exposes it; `HomeView.tsx` composes the sections. Detail content shares the data
model and `DetailPageView.tsx` layout.

Current homepage order: Hero, Research Background, Research Experience,
Recent Updates, Research Experience, Publications & Research Outputs, Education,
Scholarships & Awards, Teaching & Mentoring, Professional Experience, Selected
Projects & Research Software, Technical Toolkit, Leadership, Technical Outreach &
Content, Footer.

## Phase state

- Phase 5 is complete.
- Phase 6A is approved.
- Phase 6B.1 and 6B.2 are implemented; 6B.2 includes seven evidence/detail routes.
- Phase 6B.3 Recent Updates is implemented, awaiting owner approval.
- Phase 6C is optional/deferred; no geolocation or weather service is required.
- Phase 6D accessibility, performance, metadata, routing, and deployment readiness
  is implemented; confirm GitHub Pages configuration and any custom domain before
  publishing.
- Phase 6E remains not started.

The canonical origin currently follows the repository name and existing metadata:
`https://safat99.github.io/`. Confirm that origin with the owner before deployment;
no dedicated social-preview image is approved. The existing `public/logo.png` is
wired as the favicon and touch icon but should be confirmed as final branding.

Recent Updates are manually curated in `src/content/recentUpdates.ts`; the homepage
sorts by date and shows three entries by default (configurable up to five). Add entries
with `npm run update:add`. LinkedIn may be a source/reference; the site must not scrape
LinkedIn or make runtime external API calls. The exact WHISPERS presentation-video
URL still needs owner input; do not infer it from search.

## Verification

Use Node 22.23.2 from `.nvmrc` (npm 10.9.8). Standard checks:

```sh
npm run build
npm run lint
git diff --check
```
