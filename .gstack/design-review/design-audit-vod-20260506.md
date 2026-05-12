# Design Review: VOD Listing

Date: 2026-05-06
Scope: `pages/vod.html`, mobile and desktop first impression

## Summary

- Baseline design score: 7.6 / 10
- Final design score: 8.1 / 10
- AI slop risk: medium-low -> low
- Fixed findings: 1 verified
- Deferred findings: 1

## FINDING-001: Mobile VOD hero headline broke Korean words

- Impact: High
- Status: Verified
- Evidence before: `.gstack/design-review/screens/vod-mobile-current.png`
- Evidence after: `.gstack/design-review/screens/finding-001-after.png`
- Commit: `f0c8010 style(design): FINDING-001 tighten vod hero headline`
- Files changed: `pages/vod.html`, `assets/css/app-pages.css`

The mobile VOD first screen rendered the headline with awkward Korean syllable breaks, which made the page feel less like a finished paid-learning service. The fix shortened the headline and added `word-break: keep-all` to the VOD hero title so the headline breaks by phrase instead of by syllable.

## DEFERRED-001: Mobile header action icons are visually ambiguous

- Impact: Medium
- Status: Deferred
- Evidence: `.gstack/design-review/screens/finding-001-after.png`

The mobile header has two small icon-only actions and one large circular action without visible labels. It is visually polished, but service comprehension is weaker because users cannot immediately tell whether these are search, notifications, profile, cart, or account actions. This should be handled as a global navigation pass, not as a VOD-only fix.

## PR Summary

Improved the VOD listing mobile first impression by preventing awkward Korean headline breaks and tightening the hero copy.
