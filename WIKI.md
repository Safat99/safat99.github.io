# Academic Portfolio Wiki

## Purpose

Research-first portfolio for Fall 2027 PhD applications.

Primary audience:
- prospective PhD advisors
- graduate admissions committees
- research collaborators

## Research positioning

Core identity:
AI/ML and intelligent/autonomous systems researcher.

Major areas:
- robotics and autonomous systems
- multi-agent and multi-robot systems
- machine learning
- computer vision
- planning and perception
- hyperspectral / remote sensing applications

Software engineering is an enabling research strength.

## Technical stack

React + TypeScript + Vite + CSS + GitHub Pages.

## Architecture

ACADEMIC_PROFILE.md
        ↓
siteModel.ts
        ↓
siteController.ts
        ↓
HomeView.tsx
        ↓
section components

## Important files

src/app/model/siteModel.ts
- runtime portfolio data

src/app/view/HomeView.tsx
- page composition/order

src/app/view/DetailPageView.tsx
- shared project and historical-activity detail-page presentation
- route selected by the `#/detail/<slug>` URL fragment in `src/App.tsx`

src/app/view/components/sections/
- visible sections

src/app/view/components/ui/
- reusable UI

public/assets/media/
- publication-cleared, optimized static derivatives only
- private originals remain in the ignored `media-source/` archive

docs/ACADEMIC_PROFILE.md
- comprehensive verified academic profile

## Source hierarchy

Current CV/profile
→ current authoritative facts

Older CV
→ historical supplementary facts

Direct artifacts
→ project/evidence verification

Legacy portfolio
→ candidate historical details

## Commands

npm run dev
npm run build
npm run lint

Node: 22.23.2 (`.nvmrc`)
npm: 10.9.8

## Detail pages and media

Detail pages use hash fragments (`#/detail/<slug>`) so GitHub Pages can serve and
refresh them at the configured Vite base path without history rewrites or a router
dependency. Existing section anchors such as `#projects` remain unchanged.

Only selected, reviewed derivatives under `public/assets/media/` may be referenced by
the application. `media-source/` is archival/private and must never be imported into
application code. Keep large videos externally hosted; project detail pages may use
lazy YouTube players and a lazy embedded live web app. Figures use descriptive alt
text, captions, intrinsic dimensions, and links to full-size local files.

EMEC instrumentation media is scoped to the EMEC 361 course record. Selected diagrams
and figures from the owner's public project repositories support the relevant detail
pages; source-to-derivative provenance is maintained in the private media shortlist.
RMA imagery remains private pending review, and no hyperspectral visual has been
supplied.
The proposed Coursera/HackerRank credentials are not displayed until exact credential
details and verification URLs are available.

## Contribution and quantitative-evidence audit

The Phase 6B.2 audit records private provenance and completeness assessments in the
ignored `media-source/QUANTITATIVE_EVIDENCE_AUDIT.md`. Public numerical claims are
limited to documented scope/scale; no performance-improvement percentages were added.
Repository-reported outcomes are kept distinct from personal contribution, and
unclear emergency-vehicle/sleep metrics remain withheld. The audit does not establish
independent reproducibility or statistical validation of external projects.
