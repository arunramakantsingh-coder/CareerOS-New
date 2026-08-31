# CareerOS-New — Rebuild Control Plane

## Purpose

This document controls the clean rebuild of `CareerOS-New` from the legacy `CareerOS` repository.

The objective is **reconstruction, reconciliation and improvement**, not a blind copy.

## Reference baseline

- Source repository: `arunramakantsingh-coder/CareerOS`
- Source branch: `release/v0.2-global-job-intelligence`
- Source latest observed commit: `6df1d3f3962a5b34d5ef160429e26cbcce8736f4`
- Target repository: `arunramakantsingh-coder/CareerOS-New`

The source branch is currently the most relevant implementation/reference line. Its documentation identifies v0.1 as the Personal Job & Interview Copilot baseline and v0.2 as Global Job Intelligence.

## Non-negotiable preservation rules

1. Do not delete product capabilities merely because the legacy implementation is messy.
2. Do not invent functionality to make a page appear complete.
3. Preserve the current route/module intent and the current UI information architecture before improving presentation.
4. Preserve evidence-backed/truthful career data behavior.
5. Preserve human approval for consequential application actions.
6. Preserve source provenance for jobs and external intelligence.
7. Preserve tenant isolation and security boundaries.
8. Preserve database migration history conceptually, but create a clean migration chain in the new repository rather than copying migration accidents blindly.
9. Every migrated module must be mapped to database → API → domain logic → UI → tests.
10. A feature is not VERIFIED because files exist; runtime evidence is required.

## Canonical product loop

```text
Career Profile
→ Career Vault / Passport
→ Personas
→ Job Discovery
→ Job Extraction
→ Job DNA
→ Capability & Evidence Matching
→ Eligibility / Hard Failures
→ 60%+ Opportunity Highlight
→ Skill Gap Intelligence
→ Global Opportunity Fit
→ Application Factory
→ Truth Validation
→ Human Approval
→ Application CRM
→ Company Intelligence
→ Interview Intelligence
→ Outcome
→ Analytics / Learning
```

## Seven product engines

1. Career Intelligence Engine
2. Persona Engine
3. Job Intelligence Engine
4. Matching Engine
5. Application Factory
6. Global Mobility Engine
7. Career CRM & Outcome Engine

Supporting layers include AI orchestration, truth/compliance, skill gaps, remote intelligence, company intelligence, analytics, connectors, security/governance and the web GUI.

## Current functional surface to preserve

The legacy documentation records these major UI areas:

- Dashboard
- Login
- Onboarding
- Career Passport
- Career Vault
- Personas
- Jobs
- Job detail
- Resume Studio
- Application Studio
- Applications
- Company Intelligence
- Interviews
- Live Interview
- Global Mobility
- Analytics
- Settings

The v0.2 direction additionally exposes Global Job Intelligence, Capability/Semantic Discovery, Job DNA, Career Capability Graph, Global Job Sources, Remote Intelligence, timezone compatibility, Salary Intelligence and sponsorship matching. Roadmap-only functionality must remain visibly marked as planned until its backend is real.

## Known legacy state

The source documentation states that the application is runnable locally and that Docker/PostgreSQL/backend/frontend/authentication were demonstrated, but that the overall release remained **IMPLEMENTED / RUNNABLE / NOT FULLY VERIFIED**. Known risks included tenant authorization coverage, migration integrity, hard-failure behavior, Truth & Compliance enforcement, capability/evidence maturity, frontend/backend contract drift and first-class Skill Gap Intelligence.

These are rebuild acceptance targets, not reasons to assume defects without testing.

## Rebuild phases

### Phase 0 — Reconnaissance

- Inventory repository tree.
- Read all control-plane/product/architecture/UI/testing/security documentation.
- Identify canonical domain models, routes, APIs, migrations and tests.
- Identify duplicated, legacy, generated and reference-only assets.
- Record current runtime claims separately from intended behavior.

### Phase 1 — Clean foundation

- Clean monorepo layout.
- Docker Compose.
- PostgreSQL/pgvector-ready database.
- FastAPI application.
- Next.js application.
- Shared configuration and environment contract.
- Health/readiness endpoints.
- Test harness.
- Port 3000 frontend / 8001 backend for local development.

### Phase 2 — Identity and shell

- Authentication.
- User/tenant context.
- Protected routes.
- Application shell.
- Navigation.
- Design system.

### Phase 3 — Career intelligence

- Career Profile.
- Career Vault.
- Evidence/provenance.
- Resume ingestion.
- Career Passport.
- Personas.
- Capability ontology.

### Phase 4 — Job intelligence

- Sources.
- Discovery.
- Canonical jobs.
- Deduplication.
- Job DNA.
- Matching.
- Explainability.
- 60% highlight rule.
- Skill Gap persistence and aggregation.

### Phase 5 — Applications and outcomes

- Resume Studio.
- Application Studio.
- Truth Check.
- Human approval.
- Application CRM.
- Company Intelligence.
- Interviews.
- Live Interview.
- Analytics.

### Phase 6 — Global opportunity

- Remote intelligence.
- Salary/location fit.
- Sponsorship.
- Mobility foundations.
- Versioned migration rules with official-source provenance.

### Phase 7 — Verification

For every module:

```text
IMPLEMENTED
→ EXECUTED
→ EVIDENCE CAPTURED
→ QA REVIEWED
→ UI ACCEPTED
→ STABILITY GATE
→ VERIFIED
```

## UI modernization rule

The UI will remain recognizably CareerOS while becoming more polished:

- premium professional SaaS aesthetic
- clear information hierarchy
- dense intelligence presented without visual clutter
- consistent cards, tables, chips, score indicators and detail panels
- responsive layouts
- strong empty/loading/error states
- accessible interaction states
- consistent typography, spacing and iconography
- feature state labels: Active / Beta / Planned / Coming Later

The redesign must improve usability and organization, not disguise incomplete backend behavior.
