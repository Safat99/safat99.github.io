# Current Work — Phase 2

## Objective

Repair the remaining technical foundation before academic UI restructuring.

## In scope

- independent accordion state
- accordion accessibility
- collapsed content focus behavior
- fixed-height clipping
- active-navigation behavior
- stale/non-rendered navigation targets
- GitHub Pages / Vite asset-path consistency
- small technical blockers for later phases

## Already fixed

Do not redo:
- CreatorSlider conditional hook
- ThemeToggle cleanup
- unnecessary any casts
- baseline build/lint failures

## Out of scope

- academic content rewriting
- Hero redesign
- new sections
- project redesign
- logos
- publication/project cross-linking
- CSS visual redesign
- Phase 3 work

## Acceptance criteria

- accordion groups operate independently
- collapsed content is not keyboard-focusable
- active navigation does not target missing sections
- asset paths are deployment-safe
- npm run build passes
- npm run lint passes
- git diff --check passes

## Verification

npm run build
npm run lint
git diff --check