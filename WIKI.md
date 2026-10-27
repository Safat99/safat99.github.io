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

src/app/view/components/sections/
- visible sections

src/app/view/components/ui/
- reusable UI

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

Node: 22.23.2
npm: 10.9.8