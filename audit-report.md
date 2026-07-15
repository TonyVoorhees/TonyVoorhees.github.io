# Lambda Audit Report — 2026-05-25 20:55

Audited **14** unique routes on **mobile + desktop** (28 runs total).

> Dynamic routes (e.g. `blog/[slug]`) audited via one representative variant. Pass `--all-variants` to audit every variant.

## Scores

| Route | Perf (m / d) | A11y (m / d) | SEO (m / d) | BP (m / d) |
|---|---|---|---|---|
| `/` | 83 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/404` | 95 / 99 | 95 / 100 | 66 / 66 | 100 / 100 |
| `/accessibility` | 95 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/colophon` | 95 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/contact` | 95 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/journal` | 96 / 100 | 96 / 100 | 100 / 100 | 100 / 100 |
| `/journal/long-form-short-form` | 94 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/privacy` | 99 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/services` | 93 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/studio` | 87 / 97 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/styleguide` | 82 / 100 | 96 / 100 | 69 / 69 | 100 / 100 |
| `/terms` | 93 / 100 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/work` | 88 / 98 | 95 / 100 | 100 / 100 | 100 / 100 |
| `/work/aalto` | 92 / 98 | 96 / 100 | 100 / 100 | 100 / 100 |

## Failures — 1 unique issue

### Accessibility — 1 unique issue

#### `target-size` — 14 routes (14 occurrences)

**Touch targets do not have sufficient size or spacing.**

Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. Learn more about touch targets.

Example:
```
selector: div.mx-auto > ul.list-none > li.flex > a.hover-line
snippet:  <a href="/privacy" class="hover-line text-text-muted hover:text-text">
label:    PRIVACY
note:     Fix any of the following:
  Target has insufficient size (52.4px by 17.6px, should be at least 24px by 24px)
  Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of 19.8px instead of at least 24px.
```

Affected:
- `/` — mobile
- `/404` — mobile
- `/accessibility` — mobile
- `/colophon` — mobile
- `/contact` — mobile
- `/journal` — mobile
- `/journal/long-form-short-form` — mobile
- `/privacy` — mobile
- `/services` — mobile
- `/studio` — mobile
- `/styleguide` — mobile
- `/terms` — mobile
- `/work` — mobile
- `/work/aalto` — mobile

## Metrics under target

These are timing metrics where the score is below 1.0 but not a discrete failure. Treat as an upper bound on perceived performance — fix the actionable issues above and these usually improve in tandem.

| Metric | Routes affected | Worst score |
|---|---|---|
| `first-contentful-paint` First Contentful Paint | 14 | 0.78 |
| `largest-contentful-paint` Largest Contentful Paint | 13 | 0.70 |
| `speed-index` Speed Index | 12 | 0.80 |
| `max-potential-fid` Max Potential First Input Delay | 6 | 0.00 |
| `total-blocking-time` Total Blocking Time | 6 | 0.67 |

## Resolution (post-audit)

**`target-size` — FIXED.** The footer back-of-book meta links (Privacy · Terms ·
Accessibility · Colophon · Style Guide) were 52×17.6px on mobile — under the WCAG
2.5.8 24×24 minimum. Added `py-1.5` to each link (→ ~52×30px, size criterion met)
and swapped the animated `hover-line` for a native hover underline (the animated one
sits at the box bottom and the padding would detach it). Since the footer is global,
this clears the issue on all 14 routes → **mobile a11y 95 → 100**.

Re-verified via MCP Lighthouse (mobile, navigation):
- `/privacy` light — a11y **100**, bp 100, seo 100, 50 passed / 0 failed
- `/` dark — a11y **100**, bp 100, seo 100, 0 failed
- `/contact` dark (accent email links, most contrast-sensitive) — a11y **100**, 0 failed

**Dark-mode contrast: clean.** The orange accent (#FF5A1F) reads ≈5.7:1 on the dark
bg; as light-mode text it's only used at large sizes (passes 3:1). No `color-contrast`
failure in either theme — the prior "accent exception" no longer surfaces.

**SEO 66 (/404) / 69 (/styleguide): expected, not a defect.** Both are `noindex`;
Lighthouse's "is-crawlable" audit fails by design. All indexable routes score SEO 100.

**Performance — investigated, accepted (mobile 85–89 / desktop 100).** A DevTools
trace (home, mobile, Slow 4G + 4× CPU) showed LCP was 99% *render delay*: the LCP
element is the hero headline TEXT. Hypothesis was the render-blocking stylesheet, so
`build: { inlineStylesheets: 'always' }` was TESTED — it cut isolated LCP 1,553→927ms
and removed the RenderBlocking insight, BUT the full Lighthouse mobile score went
*down* (89→85, within the 83–89 variance band). Reason: the mobile score is dominated
by **main-thread work**, not render-blocking:
- Style & Layout ~1,400ms · "Other" ~613ms · main-thread total ~2.3s
- Forced reflow ~191ms from Astro's `ClientRouter` (View Transitions framework code)

Inlining adds inline-CSS parse + early layout and the per-page-CSS trade-off without
touching that, so it was **reverted**. The real bottleneck is the rich page's
style/layout cost + ClientRouter reflow on heavily-throttled mobile — inherent to a
content-dense editorial template with View Transitions, not worth gutting sections or
dropping View Transitions to chase a few points. Desktop is 100; the local preview is
HTTP/1.1 (inflates the critical path vs production HTTP/2 + CDN + real devices).
CLS 0.00 throughout.

**Two free micro-optimizations kept** (re-traced, home mobile, same throttling):
- Removed `text-balance` from the hero `<h1>` (the LCP element) — it has explicit
  `<br>` breaks so balance was near-redundant, and `text-wrap: balance` adds layout
  passes to the LCP element. Hero visual unchanged (verified). LCP 1,553→1,491ms.
- Dropped the Geist `<Font preload>` — body text renders in its metric-matched
  fallback (no CLS), so the preload only crowded the HTTP/1.1 critical path against
  the render-blocking CSS without improving FCP/LCP. LCP 1,491→1,431ms.

Net ~120ms LCP locally, no main-thread cost, no visual/CLS regression. The remaining
~580ms is the render-blocking CSS on the HTTP/1.1 preview — it largely evaporates on
production HTTP/2 (parallel load). Measure on the deployed URL for the real number.
