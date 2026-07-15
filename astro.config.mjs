// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical origin used by canonical URLs, OG tags, RSS, and the sitemap.
  // Update this when you point a real domain at the site.
  site: 'https://tonyvoorhees.github.io',
  integrations: [
    alpinejs(),
    mdx(),
    sitemap({
      // Keep noindex / internal pages out of the sitemap: the style guide
      // (internal docs) and the 404 page both carry <meta name="robots" noindex>,
      // and a noindex URL in the sitemap is an inconsistency search engines flag.
      filter: (page) => !page.includes('/styleguide') && !page.includes('/404'),
    }),
  ],
  // Self-hosted, optimized web fonts. Astro generates a metric-adjusted
  // fallback per family to eliminate CLS during the swap.
  //
  // Only Geist + Geist Mono go through this integration. Fraunces is
  // self-hosted by hand (woff2 in public/fonts/fraunces/, @font-face in
  // src/styles/theme.css, preloaded in Layout.astro) because Astro's provider
  // can't pass through Fraunces' `opsz` (optical-size) axis — and the editorial
  // register depends on opsz=144 (display) for hero headings vs ~14 (text) for
  // body. Without explicit opsz the hierarchy collapses to the text cut.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['300 700'],
      fallbacks: ['ui-sans-serif', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: ['300 600'],
      fallbacks: ['ui-monospace', 'SF Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      optimizedFallbacks: true,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
