import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/* ─── Work ────────────────────────────────────────────────────────────────
 * Each case study is one MDX file. Entries with status: "published" have a
 * complete editorial body; entries with status: "in-production" only carry
 * metadata and render under the placeholder template at /work/[slug].
 *
 * The image fields are optional — when missing, the page falls back to the
 * striped placeholder. This lets buyers add their own work entries without
 * supplying every asset up front.
 */
const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      client: z.string(),
      year: z.string(),
      type: z.enum(["Branding", "Motion", "Web", "Print"]),
      /** Filter chips shown on the detail page header. */
      chips: z.array(z.string()),
      /** One-line scope summary shown in the sticky info bar. */
      scope: z.string(),
      /** Recognition / awards line shown in the sticky info bar. "—" if none. */
      recognition: z.string(),
      /** Caption for the placeholder when no image is supplied. */
      img: z.string(),
      /** Order in the /work archive — lower numbers come first. */
      order: z.number(),
      /** "published" entries render their MDX body; "in-production" use the stub template. */
      status: z.enum(["published", "in-production"]).default("in-production"),
      /** Grid span on /work — 1 or 2 columns. */
      span: z.number().min(1).max(2).default(1),
      /** Credits for the editorial detail page (published entries only). */
      credits: z.array(z.object({ k: z.string(), v: z.string() })).optional(),

      /** Thumbnail used on /work archive grid. */
      coverImage: image().optional(),
      /** Large hero image on /work/[slug] detail page. */
      heroImage: image().optional(),
      /** Variant used in the home FeaturedWork editorial spread (different
       *  crop than coverImage to fit the asymmetric layout). Only the four
       *  featured entries set this. */
      homeImage: image().optional(),
    }),
});

/* ─── Journal ─────────────────────────────────────────────────────────────
 * Same shape as work: published entries have a full MDX body, stubs use a
 * placeholder template at /journal/[slug].
 */
const journal = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/journal" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      /** Human-friendly date string in the editorial format (e.g. "12 · APR · 2026"). */
      dateLabel: z.string(),
      read: z.string(),
      tag: z.enum(["Process", "Craft", "Tools", "Industry", "Studio"]),
      author: z.string(),
      authorBio: z.string().optional(),
      /** Caption for the placeholder when no image is supplied. */
      img: z.string(),
      /** When true, the entry is the featured one on /journal. Only one should be true. */
      featured: z.boolean().default(false),
      status: z.enum(["published", "in-production"]).default("in-production"),

      /** Used on /journal index (featured card + index grid) and on the
       *  /journal/[slug] detail page hero. One image covers all three. */
      coverImage: image().optional(),
      /** Variant used in the home FeaturedJournal section. Only the three
       *  featured entries set this. */
      homeImage: image().optional(),
    }),
});

/* ─── Pages ───────────────────────────────────────────────────────────────
 * Standalone text pages — privacy, terms, accessibility, colophon, or any
 * simple long-form page. Each is one Markdown/MDX file in src/content/pages/;
 * the file name becomes the URL (privacy.mdx → /privacy), rendered by
 * src/pages/[slug].astro inside the shared `.prose` typography. To add a page,
 * drop a new file here with the three frontmatter fields below — no routing or
 * component work needed. Link it from the footer in src/data/site.ts.
 */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    /** Meta description for SEO + social cards. */
    description: z.string(),
    /** Shown as "Last updated · <date>" in the page header. */
    updated: z.coerce.date(),
  }),
});

export const collections = { work, journal, pages };
