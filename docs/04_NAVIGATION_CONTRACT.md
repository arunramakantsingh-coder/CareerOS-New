# CareerOS-New — Navigation Contract

## Core rule

CareerOS has two navigation layers with **non-overlapping responsibilities**.

The vertical navigation is the **workspace/module navigator**. The horizontal bar is the **global command/context layer**.

They must never contain the same destination merely because it is convenient.

## Vertical navigation — WORKSPACE

The vertical rail answers: **"Where am I working?"**

### Home
- Dashboard

### Career OS
- Career Passport
- Career Vault
- Personas
- Resume Studio

### Opportunity Intelligence
- Global Jobs
- Job Discovery
- Saved Opportunities
- Job Sources

### Applications
- Application Studio
- Application Pipeline
- Companies

### Interviews
- Interview Prep
- Live Interview

### Career Intelligence
- Skill Gaps
- Market Intelligence
- Global Mobility
- Analytics

### System
- Settings

The vertical rail owns all persistent product destinations, active-module state, badges/counts and collapse behavior.

## Horizontal navigation — GLOBAL COMMAND / CONTEXT

The horizontal bar answers: **"What can I do or inspect from anywhere?"**

Left:
- current workspace breadcrumb/context
- optional back/forward navigation

Center:
- global semantic search
- command palette shortcut

Right:
- notifications/activity
- tasks/actions queue
- help/assistant
- user profile menu

The horizontal bar must NOT repeat Dashboard, Jobs, Applications, Resume, Settings, etc. Those belong exclusively to the vertical rail.

## Contextual secondary navigation

When a module has internal sections, use a page-local tab strip **inside the content area**, not the global horizontal header.

Example Job Intelligence:

`Overview | Recommended | Search | Saved | Sources`

Example Career Passport:

`Overview | Evidence | Capabilities | Experience | Preferences`

This gives us three distinct layers:

```text
VERTICAL      = product navigation
HORIZONTAL    = global commands/context
CONTENT TABS  = current module navigation
```

## Recruiting portal research incorporated

The navigation and discovery experience takes useful patterns from major recruiting products without copying their interfaces:

- LinkedIn: conversational/intent-driven job discovery is increasingly important.
- Indeed: profile, preferences, alerts and application flow should be easy to access.
- Glassdoor: jobs should connect naturally to company intelligence and salary context.
- Wellfound: remote eligibility, timezone, compensation/equity and company context should be visible early.
- ZipRecruiter: fast discovery and simple matching/filtering should remain approachable.

CareerOS goes further by making **career evidence + Job DNA + explainable matching + skill gaps + global mobility** first-class rather than treating the product as a job listing database.

## UX principle

A user should be able to:

1. Search globally from the top bar.
2. Move between major CareerOS modules from the vertical rail.
3. Use page-local tabs only for sections of the current module.
4. Never wonder why the same destination appears in two navigation bars.
