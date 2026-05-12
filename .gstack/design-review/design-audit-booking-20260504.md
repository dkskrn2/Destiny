# Design Audit: Booking Flow

Date: 2026-05-04
Target: `pages/booking.html`

## Scores

- Design Score: B-
- AI Slop Score: C+
- Goodwill: 72/100

## Findings

### FINDING-001: Booking task started too low on desktop

Impact: Medium
Category: Visual hierarchy, task flow
Evidence: `screens/booking-desktop-before.png`

The booking page opened like a marketing hero first and a reservation tool second. The first actual decision, consultant selection, started too far down the page for a task-oriented booking flow.

Fix: Reduced booking hero vertical padding and display scale so the first actionable step appears sooner.

Status: verified
Commit: `e409c03`
Files changed: `assets/css/app-pages.css`
After: `screens/booking-desktop-after.png`

### FINDING-002: Mobile timetable required too much scrolling

Impact: High
Category: Responsive UX
Evidence: `screens/booking-mobile-before.png`

On mobile, date tabs and time slots stacked as one long column. This made the core action, choosing a time, feel slower than it needed to be.

Fix: Changed mobile date and time slot grids to two columns and tightened the card dimensions.

Status: verified
Commit: `86a371a`
Files changed: `assets/css/app-pages.css`
After: `screens/booking-mobile-after.png`

### FINDING-003: Selectable cards lacked strong interaction states

Impact: Medium
Category: Interaction states, accessibility
Evidence: `screens/booking-desktop-before.png`

Consultant cards and time slots were clickable, but hover and keyboard focus states were underpowered. Hidden radio inputs need visible feedback so users can trust what changed.

Fix: Added hover transitions and `:focus-within` / `:focus-visible` states for consultant cards, date tabs, and time slots.

Status: verified by CSS inspection and visual pass
Commit: `00a303c`
Files changed: `assets/css/app-pages.css`

## Goodwill Dashboard

- Start: 70
- Consultant selection visible and clear: 70 -> 78
- Time slot selection initially too long on mobile: 78 -> 66
- Pricing shown before submit: 66 -> 71
- Focus states improved: 71 -> 72
- Final: 72/100, healthy but still can be more task-dense

## Remaining UX Debt

- The page still uses a lot of rounded panels, so it keeps some "generated dashboard" feel from the wider design system.
- The final submit panel appears after all fields on mobile; a future version could use a compact sticky bottom CTA after a valid time is selected.
- The inline JavaScript updates summary state, but a full interaction regression test was not added because this static repo does not have Playwright as a local dependency.

## Summary

Design review found 3 issues and fixed 3. Design score moved from C+ to B-. AI slop score moved from C to C+.

PR summary: Design review found 3 booking flow issues, fixed 3. Design score C+ -> B-, AI slop score C -> C+.
