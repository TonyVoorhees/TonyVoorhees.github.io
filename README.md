# Lambda Minimal — Editorial Astro 6 Template for Design Studios

A minimal, editorial **Astro 6** template for design studios, agencies, and
portfolios. Light + dark theme, View Transitions, content collections for case
studies and journal entries, and a token-driven typographic system built on
**Fraunces** (display serif with optical-size axis) + **Geist** + **Geist Mono**.
Tailwind CSS v4.

**[Live demo →](https://lambda-minimal.netlify.app)**

> **Heads up** — this is a complete, designed editorial template. Every page
> is finished end-to-end, every editable string lives in typed `data/*.ts`
> files or MDX frontmatter, and the demo build was audited with Lighthouse:
> accessibility / SEO / best-practices 100 across all routes; performance
> 97–100 on desktop, 85–89 on mobile (the mobile band is bound by render-
> blocking CSS on the local HTTP/1.1 preview + a 4× CPU throttle — your
> production HTTP/2 + CDN lifts that materially). Once you customize, those
> numbers depend on your changes.

---

## Features

- **Astro 6 (6.3.3)** — fully typed, static output, latest version.
- **14 routes** — home, studio, work index + case-study detail, services,
  journal index + article detail, contact, four prose pages (privacy, terms,
  accessibility, colophon) via a `pages` content collection, plus 404 and a
  noindex styleguide.
- **Three content collections** (MDX + Zod schemas) — `work`, `journal`,
  and `pages`.
- **Light + dark theme** via `html[data-theme]` with an inline boot script
  that sets the theme before first paint (no flash) and survives View
  Transitions.
- **View Transitions** — `<ClientRouter />` enabled globally, with theme and
  scroll-lock continuity wired in.
- **Self-hosted fonts** — Geist + Geist Mono via Astro's font integration
  (metric-adjusted fallbacks for CLS-safe swap); Fraunces self-hosted by hand
  with the `opsz` (optical-size) axis intact for the display hierarchy, plus
  a metric-matched Georgia fallback face. Zero third-party font requests at
  runtime.
- **Token-driven design system** — colors, type, tracking, leading, container
  widths, and motion all live in `@theme` tokens in `src/styles/theme.css`.
  Edit there to re-skin everything.
- **Accessibility-first** — semantic landmarks, keyboard navigable,
  `prefers-reduced-motion` honored, focus states visible, WCAG AA contrast
  tokens.
- **SEO-complete** — per-page title + description, canonical, Open Graph,
  Twitter Cards, JSON-LD (`Organization` on every page, `WebSite` on home,
  `Article` on journal entries), sitemap, `robots.txt`.
- **Reveal-on-scroll** animation system — opt in by adding `data-animate`
  to any element; uses `IntersectionObserver`, honors reduced-motion.
- **Alpine.js** for the few interactive pieces (mobile menu, theme toggle,
  contact form state, work/journal filters, services FAQ).
- **Static output**, deploys to any host (Netlify / Vercel / Cloudflare /
  anywhere that serves HTML).

---

## Stack

- [Astro 6.3.3](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/vite`
- [Alpine.js 3](https://alpinejs.dev) — via `@astrojs/alpinejs`
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [TypeScript](https://www.typescriptlang.org) (strict)
- **Fonts:** [Fraunces](https://github.com/undercasetype/Fraunces),
  [Geist + Geist Mono](https://vercel.com/font)

Requires Node ≥ 22.12.

---

## Quick start

```bash
npm install
npm run dev
```

The site runs on `http://localhost:4321`.

### Scripts

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Starts the local dev server                   |
| `npm run build`    | Builds the production site to `./dist/`       |
| `npm run preview`  | Previews the production build locally         |
| `npm run astro`    | Runs any `astro` CLI command (`--help`, etc.) |

---

## Project structure

```
├── public/
│   ├── fonts/fraunces/           Self-hosted Fraunces (variable woff2 + OFL.txt)
│   ├── favicon.ico · favicon.svg · apple-touch-icon.png
│   ├── og-default.png            1200×630 — replace with your branded image
│   └── robots.txt
├── src/
│   ├── assets/                   Imagery (home, studio, work, journal)
│   ├── components/
│   │   ├── Header.astro          Sticky header + mobile menu + theme toggle
│   │   ├── Footer.astro          3-column footer + meta row + giant wordmark
│   │   ├── Btn.astro             Button primitive (variants)
│   │   ├── Placeholder.astro     Figure component — wraps <Image> with a
│   │   │                         striped fallback when no asset is supplied
│   │   ├── …                     Other primitives (Wordmark, ThemeToggle, etc.)
│   │   └── sections/             Page sections, grouped by route
│   ├── content/
│   │   ├── work/                 12 case studies (MDX)
│   │   ├── journal/              6 articles (MDX)
│   │   └── pages/                4 prose pages: privacy, terms, accessibility, colophon
│   ├── data/                     All editable copy (9 typed files — see below)
│   ├── layouts/
│   │   └── Layout.astro          Wraps every page (head, SEO, ClientRouter,
│   │                             theme boot, reveal-on-scroll)
│   ├── pages/                    Routes (see "Routes" below)
│   ├── styles/
│   │   ├── global.css            Entry — @imports the three below in order
│   │   ├── theme.css             Design tokens (the re-skin file)
│   │   ├── base.css              Element resets, body defaults, scroll-reveal
│   │   └── utilities.css         Reusable @utility component styles + .prose
│   └── content.config.ts         Content collection schemas (Zod)
├── astro.config.mjs
├── tsconfig.json                 Extends astro/tsconfigs/strict
├── LICENSE
└── README.md
```

---

## Routes

| Path                                              | Source                                                     | Purpose                                                                |
| ------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| `/`                                               | `src/pages/index.astro`                                    | Home — split B&W hero, featured work, studio statement, services, journal, contact CTA |
| `/studio`                                         | `src/pages/studio.astro`                                   | Studio — philosophy, team, press, availability                         |
| `/work`                                           | `src/pages/work/index.astro`                               | Work — filterable archive of case studies                              |
| `/work/[slug]`                                    | `src/pages/work/[slug].astro`                              | Work case-study detail (published body or in-production stub)          |
| `/services`                                       | `src/pages/services.astro`                                 | Services — blocks, process, pricing tiers, FAQ                         |
| `/journal`                                        | `src/pages/journal/index.astro`                            | Journal — featured + tag-filtered grid                                 |
| `/journal/[slug]`                                 | `src/pages/journal/[slug].astro`                           | Journal article detail with author + related                           |
| `/contact`                                        | `src/pages/contact.astro`                                  | Contact — form (mock by default — see below) + studio aside            |
| `/privacy` `/terms` `/accessibility` `/colophon`  | `src/pages/[slug].astro` (`pages` collection)              | Prose pages — drop a Markdown file in `src/content/pages/` to add more |
| `/404`                                            | `src/pages/404.astro`                                      | 404 (`noindex`)                                                        |
| `/styleguide`                                     | `src/pages/styleguide.astro`                               | Internal design-system docs (`noindex`, excluded from sitemap)         |

---

## Editing content

All editable copy lives in `src/data/`. Most customizations — strings, links,
prices, team members, FAQ entries, navigation, services tiers — happen here
without opening a component. Each file is typed; your editor will autocomplete
the shape.

### Data files

| File | What it controls |
|---|---|
| `src/data/site.ts`       | Site name, title, description, locale, theme colors, primary nav, footer groups, utility (back-of-book) links, social, address, copyright |
| `src/data/home.ts`       | Home page: hero copy, featured-work slugs, studio statement, services preview, clients band, awards, featured journal, testimonials, contact CTA |
| `src/data/studio.ts`     | Studio page: hero, philosophy, team members (name/role/bio), press mentions, availability |
| `src/data/work.ts`       | Work index: page meta + filter labels |
| `src/data/services.ts`   | Services page: hero, alternating blocks, process steps, three pricing tiers (Sprint / Project / Partnership), FAQ |
| `src/data/journal.ts`    | Journal index: page meta |
| `src/data/contact.ts`    | Contact: meta, hero, form config (project types, budgets, defaults, success copy), studio info (email/phone/address), map label |
| `src/data/notfound.ts`   | 404 page copy |
| `src/data/styleguide.ts` | Internal styleguide content (not user-facing) |

### Content collections

Three collections live under `src/content/`, each with a Zod schema in
`src/content.config.ts`. Add or edit MDX files — the schema validates the
frontmatter at build time.

#### Work case studies (MDX)

Add `src/content/work/your-project.mdx`:

```mdx
---
name: "Project Name"
client: "Client Name"
year: "2026"
type: "Branding"                       # Branding | Motion | Web | Print
chips: ["Identity", "Type", "Web"]     # filter chips shown on the detail page
scope: "Identity system + site"
recognition: "—"                       # awards line, "—" if none
img: "B&W studio detail — neutral backdrop, soft front light"
order: 1                               # lower = first in /work archive
status: "published"                    # "published" renders the MDX body; "in-production" uses the stub template
span: 2                                # grid span on /work (1 or 2)

# Optional images (Astro <Image> resolves these)
coverImage: "../../assets/work/index/your-project.png"
heroImage: "../../assets/work/detail/your-project/hero.png"

# Optional — only for the four entries featured on the home
homeImage: "../../assets/home/work/your-project.png"

# Optional credits, shown on published case-study pages
credits:
  - { k: "Year", v: "2026" }
  - { k: "Role", v: "Identity, Web" }
  - { k: "Team", v: "Sofie, Magnus" }
---

Your MDX body — headings, paragraphs, blockquotes, inline images.
```

Mark a project `status: "in-production"` to render the stub template (no body
required) — useful as a placeholder while you fill out the archive.

#### Journal articles (MDX)

Add `src/content/journal/your-article.mdx`:

```mdx
---
title: "Your article title"
excerpt: "One-line summary — used on the index card and as the meta description."
date: 2026-04-22
dateLabel: "22 · APR · 2026"           # editorial format shown on the page
read: "6 min read"
tag: "Craft"                            # Process | Craft | Tools | Industry | Studio
author: "Sofie Lindquist"
authorBio: "Art Director and co-founder at Studio Nord."
img: "B&W desk shot — manuscript margins and a worn ruler"
featured: false                         # one entry should be true → shown in the featured slot on /journal
status: "published"

coverImage: "../../assets/journal/your-article.png"
homeImage: "../../assets/home/journal/your-article.png"   # only for featured-on-home entries
---

Article body in MDX. The `.prose` styling is applied automatically.
```

#### Prose pages (Markdown / MDX)

Privacy, terms, accessibility, colophon — or any standalone text page — drop a
file in `src/content/pages/`. The filename becomes the URL
(`privacy.mdx → /privacy`). Link it from the footer's back-of-book row in
`src/data/site.ts → utilityLinks`.

```mdx
---
title: "Page title"
description: "Meta description shown on social cards."
updated: 2026-05-23
---

Your prose content. Rendered inside the shared `.prose` typography.
```

---

## Design tokens

The design system lives in `src/styles/theme.css` under `@theme`. Update the
hex values to retheme — every Tailwind utility built on these tokens
(`bg-bg`, `text-text-muted`, `border-hairline`, `tracking-display`,
`text-section`, `max-w-(--container-prose)`, etc.) picks up the change
automatically.

```css
@theme {
  /* Surfaces — light is the source of truth; the dark block below overrides */
  --color-bg:         #F8F8F6;
  --color-surface:    #F1F0EE;
  --color-surface-2: #EAE9E6;
  --color-text:       #1F1F1D;
  --color-text-muted: #686864;       /* WCAG AA on bg / surface / surface-2 */
  --color-hairline:   #D8D7D3;

  /* Accent — a single warm orange, used sparingly */
  --color-accent:     #FF5A1F;
  --color-on-accent:  #1F1F1D;       /* fixed dark in both themes — AA on the orange */

  /* Always-dark inversion block (e.g. the home ContactCta) — doesn't theme-swap */
  --color-dark-bg:    #1A1A18;
  --color-dark-text:  #EDEDEB;
  /* …dark-surface / dark-text-muted / dark-hairline / dark-heading / dark-outline */

  /* Typography */
  --font-serif: 'Fraunces', 'Fraunces Fallback', Georgia, 'Times New Roman', serif;
  --font-sans:  var(--font-geist);
  --font-mono:  var(--font-geist-mono);
  --font-weight-350: 350;            /* editorial display weight on the hero h1 */

  /* Type / tracking / line-height / container scales — see theme.css */

  /* Motion — light/dark swap duration, shared by <body> and themed surfaces */
  --theme-transition: 0.4s;
}

/* Dark mode — overrides the same role tokens on toggle */
html[data-theme="dark"] {
  --color-bg:         #1A1A18;
  --color-text:       #EDEDEB;
  /* … */
}
```

### Changing the accent

Replace `--color-accent` in the `@theme` block (and the dark override if you
choose a different dark-mode accent). The accent is used as text in a few
places — services tier prices, the email link in the contact aside, FAQ
markers — so keep contrast with `--color-bg` ≥ 3:1 for large text and
≥ 4.5:1 for body to stay WCAG AA.

### Light + dark wiring

`src/components/ThemeToggle.astro` flips `html[data-theme]` and persists it in
`localStorage.theme`. The inline boot script in `src/layouts/Layout.astro`
reads the stored value and applies the attribute **before first paint**, so
there's no flash on initial load. `astro:before-swap` copies the attribute
onto the incoming document so View Transitions stay consistent.

---

## SEO

Every page passes optional props to `<Layout>`:

```astro
<Layout
  title="Studio — Studio Nord"
  description="…"
  active="studio"
  image="/og-default.png"        // optional — defaults to /og-default.png
  ogType="website"               // "website" or "article"
  noindex={false}                // true for /404 + /styleguide
  publishedTime={…}              // ISO date string for journal articles
  author={…}                     // author name for journal articles
>
  …
</Layout>
```

`Layout.astro` emits the title, meta description, canonical URL, Open Graph
tags, Twitter Card, `theme-color` (light + dark via media queries), favicon
set, sitemap link, and JSON-LD: `Organization` on every page, `WebSite` on
the home, `Article` on journal entries.

---

## Sitemap & `robots.txt`

A sitemap is generated at build time via
[`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/).
After `npm run build` you'll find:

- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`

`/styleguide` and `/404` are excluded from the sitemap (both are `noindex`).
All other routes — including the four prose pages — are included.

`public/robots.txt` references the sitemap so search engines discover it
automatically.

### ⚠️ Before deploying to your real domain

You **must** update the site URL in **three places** — otherwise canonical
URLs, OG tags, and the sitemap will still point to the placeholder demo
domain (`lambda-minimal.netlify.app`):

1. **`astro.config.mjs`** — the `site` option:
   ```js
   export default defineConfig({
     site: 'https://your-studio.com',
     // …
   });
   ```
2. **`public/robots.txt`** — the `Sitemap:` line:
   ```
   Sitemap: https://your-studio.com/sitemap-index.xml
   ```
3. **`src/data/site.ts`** — the `url` field (used by the `Organization` JSON-LD
   as a fallback for the site origin).

After changing these, run `npm run build` and verify the canonical URLs in
`dist/index.html` point to your domain before pushing live.

---

## Replacing the OG image

`public/og-default.png` is the social-share image used by every page
(1200 × 630). Replace it with your own branded image — same filename, same
dimensions, PNG or JPEG (under ~300KB ideally). For per-page custom OG
images, pass `image="/og-pricing.png"` (etc.) to `<Layout>`.

---

## Contact form

The contact form in `src/components/sections/contact/Form.astro` is a **mock**
by default — it validates required fields client-side (name, email, message)
and renders a success state, but does **not** submit to any endpoint. The
mock's `submit(e)` handler at the top of the file is the one place to swap
in your integration. Some common options:

- **[Formspree](https://formspree.io)** — set `action="https://formspree.io/f/YOUR_ID"`
  on the `<form>` and replace the handler with a normal submit (or a
  `fetch()` POST).
- **[Web3Forms](https://web3forms.com)** — free, no account; replace the
  handler with a `fetch()` POST to `https://api.web3forms.com/submit` with
  your access key.
- **[Netlify Forms](https://docs.netlify.com/forms/setup/)** — add
  `data-netlify="true"` to the `<form>` and use plain `name` attributes;
  Netlify auto-detects on deploy.
- **Astro SSR endpoint** — enable an adapter (Node / Vercel / Cloudflare),
  add `src/pages/api/contact.ts`, and POST to it from the form. Pair with
  Resend / Mailchannels / SES to send mail.

The success state (`x-show="submitted"`) already renders the thank-you copy
from `src/data/contact.ts → form.thanks` once you wire the real submit.

### Studio map

`src/components/sections/contact/Aside.astro` ships with a placeholder map
**commented out** (along with its `Placeholder` import). To enable it,
uncomment the block, or drop in a Google Maps embed (`<iframe>` from Google
Maps → Share → "Embed a map") in its place — there's a guiding comment in
the file. The map label / alt copy lives in
`src/data/contact.ts → studio.map`.

---

## Performance

Designed for Lighthouse scores in the high 90s on desktop and the upper 80s
on mobile (on the local 4× CPU + Slow 4G preview; production HTTP/2 + CDN
lifts that further).

- **Self-hosted fonts.** Geist and Geist Mono come from Astro's `<Font />`
  integration, which downloads them at build, generates metric-adjusted
  fallbacks (`size-adjust` / `ascent-override` / `descent-override`), and
  serves same-origin. Fraunces is self-hosted by hand (latin + latin-ext
  variable woff2 in `public/fonts/fraunces/`, `@font-face` blocks in
  `theme.css`, plus a metric-matched Georgia fallback face called
  `Fraunces Fallback`). The reason for the manual setup: Astro's font
  integration can't pass through Fraunces' `opsz` (optical-size) axis,
  which the editorial display hierarchy drives to 144 on hero headings.
- **Fraunces preloaded only on the home page** — where the hero is the
  above-the-fold LCP text. Other pages don't preload, so the browser
  doesn't warn "preloaded but not used".
- **Responsive `<Image>`.** Every content image is served as a hashed
  `.webp` with `srcset` + `sizes`. Routed through `Placeholder.astro` so
  adding new imagery doesn't ship oversized originals by accident.
- **Static output** — every route is prerendered HTML.
- **View Transitions** make navigation feel instant without a SPA payload.
- **CLS designed to ≈ 0.** The metric-adjusted font fallbacks + explicit
  image dimensions remove the usual font-swap and image-pop layout shifts.

### Swapping fonts

The sans + mono families are configured in `astro.config.mjs` under
`fonts:`. To swap (say) Geist for Inter, replace `name` and `cssVariable`
on both entries, then update the references in `src/styles/theme.css`:

```css
--font-sans: var(--font-inter);
```

Astro will regenerate the metric-adjusted fallback on the next build.

For the serif, see the manual `@font-face` block at the top of
`theme.css` — replace the woff2 files in `public/fonts/<family>/` and
update the `src:` URLs accordingly.

---

## Customization tips

- **Colors, typography, spacing, containers** — Tailwind v4 is CSS-first.
  Add or edit `@theme` tokens in `src/styles/theme.css`; every utility
  built on those tokens picks up the change.
- **Reveal-on-scroll** — wired globally in `Layout.astro`. Opt in by adding
  `data-animate` to any element. Variant: `data-animate="fade"` (fade only,
  no Y motion). Honors `prefers-reduced-motion`.
- **View Transitions** — already enabled. Add `transition:name="…"` to
  specific elements for named animations.
- **Mobile menu** — `src/components/Header.astro`. Toggles via Alpine
  state (`open`), with body scroll lock, Escape close, and a unified
  open/close crossfade (overlay + opaque strip + control colours move
  together).
- **Light / dark mode** — `src/components/ThemeToggle.astro`. Persists in
  `localStorage.theme`, applied before paint by the boot script in
  `Layout.astro`.
- **Adding a top-level page** — drop a `.astro` file in `src/pages/`
  (e.g. `src/pages/process.astro`). For text-only pages, prefer the
  `pages` content collection — just add a Markdown file in
  `src/content/pages/` and link it from the footer.

---

## Legal pages

The four prose pages — **privacy, terms, accessibility, colophon** — ship
as `src/content/pages/*.mdx` with placeholder copy. They render through
`src/pages/[slug].astro` inside the shared `.prose` typography from
`src/styles/utilities.css`.

> ⚠️ **The placeholder text is not legal advice.** The privacy and terms
> pages are a starting outline — replace every section with copy that
> reflects your actual practices, and consult a lawyer in your jurisdiction
> before publishing. Keep the `updated` date in each MDX frontmatter
> current.

The accessibility statement describes the template's built-in posture
(WCAG AA tokens, keyboard nav, reduced-motion, etc.) — review and adjust
to your post-customization reality. The colophon lists the typefaces and
stack used by the demo; update it when you swap fonts or add tooling.

---

## Browser support

| Browser | Support |
|---|---|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |

Evergreen browsers (last 2 versions). Astro 6's build target is modern
ESM; legacy browsers are not supported.

---

## Deployment

Because the output is fully static, deploy to anywhere that serves HTML:

```bash
npm run build
# ./dist is ready to upload
```

Zero-config adapters exist for every major host —
<https://docs.astro.build/en/guides/deploy/>. For best mobile performance,
prefer hosts that serve HTTP/2 or HTTP/3 over a CDN (Netlify, Vercel,
Cloudflare Pages all do this by default).

---

## License

Sold under a commercial license — see [LICENSE](./LICENSE) for the full
terms. You may use this template on an unlimited number of personal and
client projects. Redistribution of the source code is not permitted.

---

## Support

Questions or issues? Reach out at **info@lambdastudio.io**.

Built by [Lambda Studio](https://lambdastudio.io).

---

## Credits

- **Fraunces** by Undercase Type — [SIL Open Font License 1.1](./public/fonts/fraunces/OFL.txt).
- **Geist** and **Geist Mono** by Vercel — SIL OFL 1.1.
- **Placeholder photography and copy** are fictional. The studio name
  (*Studio Nord*), addresses, team members, and case studies are
  invented for the demo.
- **Icons** are inline SVGs authored for this template.

Built on Astro 6.
