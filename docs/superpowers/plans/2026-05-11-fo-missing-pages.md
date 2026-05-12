# FO Missing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the missing FO static HTML screens that complete visible search, account, booking, payment, course, community, and support flows.

**Architecture:** Keep the existing static HTML architecture: one page per screen under `pages/`, shared visual rules in `assets/css/styles.css` and `assets/css/app-pages.css`, no backend behavior. Navigation uses real anchors so clicking primary controls lands on the next visible state.

**Tech Stack:** Static HTML, existing CSS design system, minimal inline JavaScript only where existing pages already need navigation.

---

### Task 1: Create FO Static Screens

**Files:**
- Create: `pages/search.html`
- Create: `pages/login.html`
- Create: `pages/mypage.html`
- Create: `pages/booking-complete.html`
- Create: `pages/booking-detail.html`
- Create: `pages/payment-status.html`
- Create: `pages/course-payment.html`
- Create: `pages/community-write.html`
- Create: `pages/community-report-complete.html`
- Create: `pages/support-inquiry.html`

- [ ] Add each screen with the existing header, footer, stylesheet links, and `theme-blue` body class.
- [ ] Use static form controls and buttons only; no backend functionality.
- [ ] Make every primary CTA point to an existing or newly created HTML screen.

### Task 2: Connect Existing FO Links

**Files:**
- Modify: `index.html`
- Modify: `pages/booking-payment.html`
- Modify: `pages/community.html`
- Modify: `pages/community-detail.html`
- Modify: `pages/support.html`
- Modify: course detail pages

- [ ] Send search icon links to `search.html`.
- [ ] Send profile links to `mypage.html`.
- [ ] Send booking/payment completion paths to the new completion/status pages.
- [ ] Add visible entry points for community writing and support inquiry.

### Task 3: Add Shared CSS

**Files:**
- Modify: `assets/css/app-pages.css`

- [ ] Add reusable layout styles for the new completion, account, search, and form screens.
- [ ] Keep dark-first design, gold/blue CTAs, and existing mobile breakpoints.

### Task 4: Verify

**Files:**
- Check all `index.html` and `pages/*.html`

- [ ] Run link existence check for local anchors and page links.
- [ ] Open representative pages in Playwright or inspect static output for obvious blank pages.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | not run | Not required; scope is FO publishing coverage, not product direction. |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | not run | Not requested. |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | not run | Static-page architecture is simple, but link and responsive checks are still needed before shipping. |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | issues_open | score: 6.5/10 -> 7.8/10, 5 decisions proposed |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | not run | Not relevant to FO static page coverage. |

- **UNRESOLVED:** Utility pages use one shared `flow` template; acceptable for coverage, but should be refined before final visual QA.
- **VERDICT:** Design coverage is directionally correct; run `/design-review` after visual polish or before final delivery.
