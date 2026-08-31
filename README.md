# CareerOS New

**AI-Powered Global Career Operating System**

CareerOS-New is the clean rebuild of the CareerOS platform. The rebuild preserves the product intent and currently demonstrated application surface of the original `CareerOS` repository while removing accumulated structural drift and reorganizing the implementation around explicit domain boundaries.

## Source of truth

The legacy repository is retained as a reference and is **not modified by this rebuild**.

Reference repository: `arunramakantsingh-coder/CareerOS`

Reference release line: `release/v0.2-global-job-intelligence`

The rebuild follows this precedence:

1. Current repository implementation and verified runtime behavior
2. Current product/control-plane documentation
3. Historical/legacy material as context only

## Product principle

> **CareerOS is career-centric, not job-title-centric.**

The Career Vault is the authoritative evidence-backed career record. Personas are different market positions over the same evidence. Jobs become Job DNA. Matching operates over capabilities, evidence and constraints rather than title similarity alone.

## Rebuild objectives

- Preserve the current functional product scope and UI concepts.
- Reorganize frontend, backend, database and tests into clear bounded domains.
- Replace duplicated/unclear implementations with one canonical implementation per concern.
- Keep APIs, data models and UI contracts explicit.
- Make runtime verification a mandatory part of every milestone.
- Improve the visual system into a premium, modern career-intelligence workspace without inventing functionality.
- Keep AI provider-neutral and truth/compliance-first.
- Maintain a clean upgrade path from the current v0.1/v0.2 foundation toward later releases.

## Technology baseline

- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Backend:** FastAPI + Python + SQLAlchemy + Alembic
- **Database:** PostgreSQL with pgvector-ready architecture
- **Runtime:** Docker Compose
- **AI:** provider-neutral orchestration; deterministic logic first, retrieval/embeddings next, model calls where justified

## Local ports

CareerOS-New uses **3000 for the frontend** and **8001 for the backend API** in local development. Port 8000 is intentionally avoided.

## Rebuild status

`RECONNAISSANCE → FOUNDATION REBUILD → DOMAIN MIGRATION → UI REORGANIZATION → INTEGRATION → E2E VERIFICATION`

The repository must not be described as fully verified until executable runtime evidence supports that claim.

## Documentation

See `docs/` for the rebuild control plane, architecture, UI system, migration map, verification gates and legacy reconciliation notes.
