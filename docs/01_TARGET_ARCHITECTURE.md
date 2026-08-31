# CareerOS-New — Target Architecture

## Architectural intent

CareerOS-New uses a clean modular monorepo while keeping the original technology baseline.

```text
careeros-new/
├── backend/
│   ├── app/
│   │   ├── core/                 # config, security, logging, errors
│   │   ├── db/                   # engine, session, base, migrations
│   │   ├── identity/             # users, tenants, authentication
│   │   ├── career/               # passport, vault, evidence, ontology
│   │   ├── personas/             # persona definitions and weights
│   │   ├── jobs/                 # sources, discovery, canonical jobs, Job DNA
│   │   ├── matching/             # dimensions, scoring, explanations
│   │   ├── skill_gaps/            # observations and aggregates
│   │   ├── applications/         # resume/application/truth/approval
│   │   ├── companies/             # company/recruiter intelligence
│   │   ├── interviews/            # preparation/live interview
│   │   ├── mobility/              # remote/salary/visa/migration
│   │   ├── analytics/             # metrics and learning
│   │   └── api/                  # versioned route composition
│   └── tests/
├── frontend/
│   ├── src/
│   │   ├── app/                  # Next.js routes
│   │   ├── components/
│   │   │   ├── ui/               # primitive design system
│   │   │   ├── shell/            # navigation, command/search, workspace chrome
│   │   │   ├── career/
│   │   │   ├── jobs/
│   │   │   ├── matching/
│   │   │   ├── applications/
│   │   │   ├── interviews/
│   │   │   └── mobility/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── lib/                  # API client, utilities
│   │   ├── styles/
│   │   └── types/
│   └── tests/
├── database/
│   └── seeds/
├── docs/
├── scripts/
└── docker-compose.yml
```

## Domain boundaries

### Identity

Owns user identity, tenant context, authentication and authorization. Tenant IDs are derived from authenticated context, never trusted from arbitrary client input.

### Career Intelligence

Owns Career Profile, Career Passport, Career Vault, evidence, provenance, resume ingestion and the career ontology.

### Persona Engine

Creates market-facing personas from the same Career Vault. Personas alter positioning and scoring weights; they do not duplicate candidate facts.

### Job Intelligence

Owns source registry, discovery, normalization, canonicalization, deduplication and Job DNA.

### Matching

Consumes Career Vault + Persona + Job DNA + user preferences and emits explainable dimensions, hard failures, recommendation and evidence.

### Skill Gap Intelligence

Records every observed match/partial/missing capability and derives cumulative market gaps from persisted observations.

### Application Factory

Produces truthful application artifacts from verified evidence and requires human approval for consequential actions.

### CRM / Outcomes

Tracks applications, recruiters, interviews, offers, rejections, outcomes and learning signals.

### Mobility

Owns remote eligibility, timezone, location, salary, sponsorship and versioned immigration/migration data.

## API contract

All APIs are grouped by domain and versioned under `/api/v1`.

A route is considered complete only when:

```text
schema
→ service/domain logic
→ persistence
→ authorization
→ tests
→ frontend integration
```

## Data principles

- PostgreSQL is the system of record.
- pgvector readiness is retained for semantic discovery/matching.
- Applied migrations are immutable.
- Provenance is retained for extracted or externally sourced facts.
- User-owned data is tenant-scoped.
- Derived aggregates are recalculable from observations where practical.
- Secrets never enter source control.

## AI architecture

```text
User/API request
      ↓
Deterministic validation
      ↓
Domain rules / retrieval
      ↓
Embeddings when useful
      ↓
Fast model for routine transformation
      ↓
Stronger model for complex reasoning
      ↓
Structured result + provenance
      ↓
Truth/compliance validation
```

The application must remain functional for foundational workflows without requiring a paid external AI provider.

## Error model

API errors use a predictable JSON shape with machine-readable code, user-safe message and request/correlation ID. Internal stack traces are not exposed to clients.

## Observability

Every request should be traceable through a correlation/request ID. Logs must be structured and must not expose passwords, tokens, secrets or unnecessary PII.
