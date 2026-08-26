# Tony Voorhees Studio

Source for [tonyvoorhees.com](https://tonyvoorhees.com/) — product design, brand identity, and creative direction, built and maintained by Tony Voorhees.

Built with Astro, MDX, and Tailwind CSS. Static output, deployed via GitHub Actions.

## Stack

- [Astro](https://astro.build/) — static site generation, content collections, View Transitions
- MDX — case studies, journal entries, and legal/info pages as content
- Tailwind CSS v4 — token-driven styling
- Alpine.js — the few interactive touches (menu, theme toggle) that need client-side state
- Fraunces + Geist / Geist Mono — self-hosted, no third-party font requests

## Structure

```
src/
  assets/       images, organized by section (home, studio, work, journal)
  components/   layout + section components
  content/      MDX collections — work, journal, pages (privacy/terms/etc.)
  data/         typed config — site meta, nav, home/studio/services copy,
                contact, journal + work index, 404 and styleguide content
  layouts/      base page layout
  pages/        route files
  styles/       global CSS, design tokens
```

Case studies and journal entries are edited as MDX in `src/content/`. Site copy that isn't tied to a single page — nav, footer, studio bio, services tiers, contact info — lives in typed `src/data/*.ts` files.

## Local development

```
npm install
npm run dev       # localhost:4321
npm run build     # static output to dist/
npm run preview   # serve the production build locally
```

Requires Node ≥ 22.12.

## Deployment

Pushes to `main` build and deploy automatically via GitHub Actions to GitHub Pages, serving tonyvoorhees.com via a custom domain. `main` is branch-protected — changes go through a PR with a passing build check before merging.

## Credits

Started from a Lambda Studio Astro template. Copy, imagery, components, and structure are original from here.

- Fraunces by Undercase Type — [SIL Open Font License 1.1](./public/fonts/fraunces/OFL.txt)
- Geist and Geist Mono by Vercel — SIL OFL 1.1

## License

The `LICENSE` file in this repo covers the base template only, under Lambda Studio's commercial terms. All content, copy, imagery, and case studies on this site are original to Tony Voorhees Studio and are not licensed for reuse — see [Terms](https://tonyvoorhees.com/terms).