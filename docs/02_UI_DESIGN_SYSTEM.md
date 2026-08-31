# CareerOS-New — UI Design System & Reorganization

## Design goal

Preserve the recognizable CareerOS information architecture while making the product feel like a premium modern career-intelligence workspace rather than a collection of independent pages.

## Visual direction

- Premium professional SaaS
- Executive workspace feel
- Calm, high-contrast information hierarchy
- Information-dense but never visually noisy
- Responsive desktop-first workspace with strong tablet/mobile behavior
- Subtle depth, restrained motion and consistent surfaces
- Clear distinction between live capabilities and roadmap items

## Global shell

```text
┌─────────────────────────────────────────────────────────────┐
│ CareerOS logo   Global Search / Command      Alerts  Profile│
├───────────────┬─────────────────────────────────────────────┤
│ Workspace     │ Page header                                │
│               │ title · context · primary action           │
│ Dashboard     ├─────────────────────────────────────────────┤
│ Career        │                                             │
│ Opportunities │ Main intelligence workspace                │
│ Applications  │                                             │
│ Interviews    │                                             │
│ Intelligence  │                                             │
│ Analytics     │                                             │
│ Settings      │                                             │
└───────────────┴─────────────────────────────────────────────┘
```

The sidebar is organized around user intent rather than backend implementation details.

### Primary navigation

**Home**
- Dashboard

**Career**
- Career Passport
- Career Vault
- Personas
- Resume Studio

**Opportunities**
- Global Job Intelligence
- Jobs
- Capability Discovery
- Job Sources

**Applications**
- Application Studio
- Applications
- Company Intelligence

**Interviews**
- Interview Prep
- Live Interview

**Intelligence**
- Skill Gaps
- Analytics
- Global Mobility

**System**
- Settings

Roadmap-only entries carry a visible `Planned` label and are never represented as operational.

## Dashboard composition

The dashboard should be an executive snapshot of the candidate's career operating system.

1. **Career readiness header** — positioning, completeness, evidence coverage.
2. **Opportunity pulse** — discovered jobs, high-potential 60%+ matches, saved opportunities.
3. **Top opportunities** — rich job cards with score dimensions and explanation.
4. **Skill-gap pulse** — repeated market gaps and priority.
5. **Applications** — pipeline status and upcoming actions.
6. **Interview radar** — upcoming interviews and preparation.
7. **Global opportunity** — remote/mobility readiness.

## Job card hierarchy

A job card must communicate value before requiring a click.

```text
Company / source
Advertised Role
Location · work mode · salary

Career Fit     72%     Skill Match     64% ★
Experience     81%     Remote Fit      90%

WHY IT MATCHES
2–3 concise evidence-backed reasons

MATCHED     Partial     TRANSFERABLE     MISSING

[View Job DNA] [Analyze] [Save]
```

The 60% threshold is visually prominent but is never presented as automatic application approval.

## Score visualization

Use consistent semantic score components rather than decorative gauges everywhere:

- compact percentage badge for cards
- progress bar for detailed dimensions
- comparison grid for job detail
- trend chart for analytics

Every score must have a tooltip or nearby explanation of what it means.

## Career Vault presentation

Use a two-level model:

- **Passport view:** polished executive representation.
- **Vault view:** evidence-level editable record with provenance.

A fact should visibly distinguish verified evidence, user-entered information, imported information and derived/AI interpretation.

## Persona presentation

Each persona is a workspace lens:

- role positioning
- target roles
- capability strengths
- evidence coverage
- target geographies
- compensation/work-mode preferences
- match performance

Use comparison mode to show how two personas interpret the same career evidence differently.

## Application Studio

Use a horizontal/vertical progression:

`Job → Persona → Evidence → Resume → Truth Check → Materials → Answers → Approval`

Each stage has a completion state and exposes the source evidence used.

## States

Every route must have designed:

- loading
- empty
- populated
- validation error
- API error
- permission denied
- unavailable/roadmap
- success confirmation

## Accessibility

- keyboard navigation
- visible focus
- semantic headings
- accessible form labels
- non-color-only status communication
- reduced-motion support
- sufficient contrast
- responsive text sizing

## Component rules

Build reusable primitives before page-specific styling:

- Button
- Input
- Select
- Dialog
- Sheet
- Tabs
- Badge
- Tooltip
- Card
- Data table
- Score indicator
- Status indicator
- Empty state
- Skeleton
- Alert
- Command/search
- Timeline
- Evidence chip

Page components compose these primitives instead of defining their own visual language.
