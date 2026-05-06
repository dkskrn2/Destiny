# Content VOD Quote Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add static service-ready content/blog, VOD watching, and community quote-writing flows.

**Architecture:** Create four focused static HTML pages and extend existing shared CSS. Existing home, course, and community pages link into the new pages without adding JavaScript or backend behavior.

**Tech Stack:** Static HTML, CSS, existing `styles.css` and `app-pages.css`, local Python static server for verification.

---

### Task 1: Add New Static Pages

**Files:**
- Create: `pages/content.html`
- Create: `pages/content-detail.html`
- Create: `pages/community-write-quote.html`
- Create: `pages/vod-watch.html`

- [ ] **Step 1: Create content listing page**

Use the existing `site-header`, `site-footer`, and `theme-blue` classes. Include featured content, category chips, post cards, popular tags, recommended VOD, and consultation CTA.

- [ ] **Step 2: Create content detail page**

Add article metadata, table of contents, article body, key summary, related content, and a logged-in user quote CTA linking to `community-write-quote.html`.

- [ ] **Step 3: Create quote-writing page**

Add quoted source card, selected quote sentence, title input, category selector, body textarea, publish checklist, and static submit CTA.

- [ ] **Step 4: Create VOD watch page**

Add static video player mock, current lesson info, curriculum playlist, note textarea, progress summary, and CTAs to community quote writing and booking.

### Task 2: Connect Existing Pages

**Files:**
- Modify: `index.html`
- Modify: `pages/community.html`
- Modify: `pages/course-basic.html`
- Modify: `pages/course-ten.html`
- Modify: `pages/course-flow.html`
- Modify: `pages/course-sinsal.html`

- [ ] **Step 1: Add content navigation**

Add `콘텐츠` to the home header and add a content quick entry/section link from the home page.

- [ ] **Step 2: Add community quote cases**

Update `pages/community.html` with a content quote post and a VOD lesson question post so the feed shows non-general post types.

- [ ] **Step 3: Add VOD watch CTAs**

Update each course detail page primary actions so users can move from course detail to `vod-watch.html`.

### Task 3: Add Shared Styles

**Files:**
- Modify: `assets/css/app-pages.css`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Add content and quote components**

Add layout classes for content listing, article detail, source quote cards, quote compose form, and community feed quote cards.

- [ ] **Step 2: Add VOD watch components**

Add layout classes for the video player mock, lesson playlist, progress card, note panel, and mobile responsiveness.

- [ ] **Step 3: Ensure responsive behavior**

Extend existing media queries so content, quote, and VOD layouts collapse to one column on tablet/mobile.

### Task 4: Verify and Commit

**Files:**
- All changed files

- [ ] **Step 1: Static checks**

Run: `git diff --check`
Expected: no output and exit code 0.

- [ ] **Step 2: Link and page checks**

Run a local Python server and verify `/`, `/pages/content.html`, `/pages/content-detail.html`, `/pages/community-write-quote.html`, `/pages/vod-watch.html`, `/pages/community.html`, and `/pages/course-basic.html` return `200`.

- [ ] **Step 3: Regression search**

Run: `rg -n "(love|career|today|wealth)\\.html" . --glob "*.html" --glob "*.css" --glob "*.js"`
Expected: no matches.

- [ ] **Step 4: Commit and push**

Commit with `feat: add content vod quote flow` and push `main`.
