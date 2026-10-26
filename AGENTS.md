Academic Portfolio — Codex Instructions

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

Academic facts must come from:

`docs/ACADEMIC_PROFILE.md`

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