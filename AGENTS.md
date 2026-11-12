Academic Portfolio | Codex Instructions

## Project purpose

This repository is the academic/research portfolio of Sarker Safat Mahmud,
primarily intended for Fall 2027 PhD applications in Computer Science,
Robotics, AI, ML, Computer Vision and related areas.

The primary audience is:
- prospective PhD advisors
- robotics/AI/ML faculty
- graduate admissions committees
- research collaborators

This is NOT the industry/backend-focused version of the portfolio.

## Research positioning

The academic portfolio should present a coherent research identity centered on
AI, machine learning, and intelligent/autonomous systems.

Major areas of interest include:

- robotics and autonomous systems
- multi-agent and multi-robot systems
- machine learning and deep learning
- computer vision and perception
- planning, decision-making, and embodied/physical AI
- remote sensing, hyperspectral imaging, and precision-agriculture
  applications involving substantial AI/ML/CV or autonomy

Robotics and multi-agent systems are important long-term research interests,
but the portfolio should not imply that the candidate is unwilling to pursue
strong PhD opportunities in adjacent AI/ML, computer vision, remote sensing,
scientific ML, or software-intensive intelligent systems research.

The candidate's software engineering background should be presented as an
enabling research strength rather than as the primary identity of this
academic portfolio.

## Technology

The project uses:

- React
- TypeScript
- Vite
- CSS
- GitHub Pages

Do not introduce a new frontend framework unless explicitly requested.

Avoid adding dependencies unless they clearly improve the site and are approved.

## Current architecture

Important files:

- `src/app/model/siteModel.ts`
  Main source of portfolio content and typed site data.

- `src/app/controller/siteController.ts`
  Thin controller exposing the site model.

- `src/app/view/HomeView.tsx`
  Controls the order and composition of major portfolio sections.

- `src/app/view/components/sections/`
  Contains individual visual sections.

- `src/app/view/components/ui/`
  Contains reusable UI components.

- `public/`
  Contains static assets and documents.

Prefer extending the existing architecture rather than rewriting it.

## Source of truth

Maintain academic facts and their provenance in `docs/ACADEMIC_PROFILE.md`,
a comprehensive factual inventory rather than a copy of the selective public CV.
Absence from the compact CV is not evidence that a historical claim is false.

Use this source hierarchy:
1. Current academic CV / ACADEMIC_PROFILE.md: authoritative for current GPA,
   status, research, positions, publication status, and scholarship years.
2. Previous/longer CV: valid supplementary evidence for non-conflicting historical
   projects, technologies, experience, leadership, mentoring, and accomplishments.
3. Direct artifacts: repositories, publisher/DOI pages, videos, conference pages,
   and official university articles can verify details, links, results, and awards.
4. Legacy portfolio: candidate facts and URLs; do not automatically mark them verified.
5. Personal narratives/testimonials: separate and optional unless independently reviewed.

Newer authoritative facts override older conflicting information. Distinguish
conflicting/superseded, verified current, historically supported, directly verified,
awaiting verification, and personal/optional evidence. Preserve useful historical
information even when omitted from the compact CV. Verify live link identity when
network access permits; an access failure is not proof of falsity or a broken link.
Keep unverified candidate URLs in reconciliation notes, without claiming verification.

Quantitative claims need source support. Distinguish personal contributions from
project-level results and team awards; never turn collaborative results into an
individual achievement. Do not infer current "ongoing" status from an older CV.
Scope evidence articles to the years and facts they actually support; a 2025
Crawford article does not independently verify 2026 receipt or a combined award total.

Do NOT invent:
- degrees
- GPA
- dates
- publications
- research results
- awards
- job titles
- advisor relationships
- technologies used
- publication status

If information is missing or contradictory, flag it instead of guessing.

Existing text in `siteModel.ts` may be outdated and should NOT automatically
be treated as authoritative.

## Content priorities

For the academic portfolio, prioritize approximately:

1. Hero / academic identity
2. Research interests
3. Research experience
4. Publications and research outputs
5. Selected research projects
6. Teaching and mentoring
7. Professional software engineering experience
8. Technical skills
9. Awards and achievements
10. Leadership
11. Personal content

Travel, music, general creator content, and industry recommendations should
never appear above major academic/research sections.

## Development rules

For major modifications:

1. Inspect existing implementation first.
2. Explain the proposed change before making broad architectural changes.
3. Prefer small, reviewable changes.
4. Modify one logical section or feature at a time.
5. Reuse existing components and styling patterns when practical.
6. Preserve responsive behavior.
7. Preserve accessibility.
8. Avoid unnecessary animations or visual complexity.
9. Do not delete potentially reusable old components unless explicitly asked.
10. Do not commit or push changes unless explicitly requested.

For public assets, use Vite-compatible paths and avoid assumptions tied to the
old `/safat/` deployment path.

## Design direction

The desired style is:

- professional
- modern
- research-oriented
- clean
- technically sophisticated
- readable
- restrained rather than flashy

Faculty should be able to identify the candidate's research interests,
experience, publications, strongest projects, and contact information within
roughly 30–60 seconds.

Avoid making the site look like:
- a generic frontend developer portfolio
- a startup landing page
- a heavily animated personal blog
- a LinkedIn clone

## Verification

After implementation tasks, when applicable run:

`npm run build`

and:

`npm run lint`

Report:
- files changed
- what changed
- any build/lint problems
- assumptions made
- anything requiring human verification

## Communication

The repository owner has strong Java, Python, and backend experience but limited
React/TypeScript/frontend experience.

When explaining non-trivial frontend changes, briefly explain the relevant
React/TypeScript concept and, where useful, compare it with Java or Python.

Do not unnecessarily teach basic programming concepts.