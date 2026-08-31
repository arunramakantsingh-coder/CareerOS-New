# CareerOS-New — Legacy Reconciliation Map

This is the migration map from the legacy repository into the clean implementation. It intentionally separates **preserve**, **refactor**, **rebuild**, and **reference-only** material.

## Legacy implementation inventory observed

The source release contains a Next.js/TypeScript/Tailwind frontend, FastAPI/Python backend, PostgreSQL/Alembic foundation, pgvector-ready database configuration, tests, PowerShell/runtime scripts and Lovable reference exports. The source documentation reports 602 extracted files in the reconciled baseline, including 98 Python files, 29 TypeScript/TSX files, 19 Markdown files and 12 Alembic migrations.

## Treatment rules

| Legacy material | CareerOS-New treatment |
|---|---|
| Product/domain models | Preserve behavior; normalize into bounded domains |
| API behavior | Preserve compatible contracts where useful; remove duplication |
| Database schema | Reconcile into a clean migration chain |
| Existing migrations | Reference for data/intent; do not blindly copy migration mistakes |
| Frontend routes | Preserve route intent and user journeys |
| Frontend components | Reuse behavior selectively; consolidate styling/components |
| Lovable HTML/CSS/JS | Visual/reference source only; never production runtime |
| Generated build artifacts | Do not migrate |
| Environment secrets | Never migrate |
| Temporary scripts | Migrate only when they serve a documented workflow |
| Tests | Preserve useful assertions; rewrite brittle tests around new contracts |
| Documentation | Consolidate into a smaller canonical control plane |

## Domain mapping

### Career

Legacy concepts around career profile, evidence, Career Vault, resume sections, technologies, certifications, projects, achievements and provenance become one Career Intelligence boundary.

### Personas

Legacy persona models and persona skill weights become the Persona Engine. Candidate facts remain in Career Intelligence.

### Jobs

Legacy job source, discovery, listing, skill, responsibility, Job DNA and semantic discovery concepts become the Job Intelligence boundary.

### Matching

Legacy match dimensions and recommendations become the Matching Engine. Skill Gap observations are separated as their own persistent domain.

### Applications

Legacy resume generation, application package, Truth Check and application records become the Application Factory/CRM boundary.

### Companies and interviews

Company intelligence, recruiter data, interview preparation, live interview and related analytics are retained as separate bounded contexts with shared identity references.

### Mobility

Remote eligibility, location fit, salary intelligence, sponsorship and migration models become Mobility. Immigration rules remain versioned and source-backed.

## Known reconciliation risks

1. Multiple historical architectures exist in the source tree; one canonical architecture must win in the new repository.
2. Some source documentation describes intended functionality that was not fully runtime-verified.
3. Route/file existence must not be treated as proof of integration.
4. Tenant isolation must be tested across every user-owned domain.
5. Skill Gap Intelligence must be first-class, persistent and recalculable.
6. The 60% rule must have explicit 59/60/61 boundary tests.
7. Truth and application answers must be evidence-backed.
8. External source connectors must remain compliant with access controls and rate limits.
9. Migration/visa data requires official source provenance and effective dates.
10. UI and backend contracts must evolve together.

## Current source UI reference

The legacy project contains a Lovable export covering major CareerOS pages including Dashboard, Applications, Career Vault, Global Mobility, Interviews, Analytics and Settings. These assets are useful for visual comparison, but CareerOS-New will implement the final UI natively in Next.js/TypeScript/Tailwind.
