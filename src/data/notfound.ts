/**
 * 404 page content. The page is structured as two sections: a display
 * "above the fold" with the editorial concept, and an Index sitemap below.
 */

export const display = {
  eyebrowLeft: { name: "Studio Nord", italic: "Errata" },
  eyebrowRight: "404",
  error: { kind: "Error 404", message: "Page not found" },
  title: { line1: "Even editorial publications", accent: "have blank pages." },
  body:
    "This page might have been retired, moved to the archive, or simply never made it to print. Find your way back to the cover, or browse the index of completed work.",
  primaryCta: { href: "/", label: "Return to the cover" },
  secondaryCta: { href: "/work", label: "Browse the index" },
  footnoteLeft: "Continue below",
  footnoteRight: "Volume 08 · Erratum 01",
};

export const sitemap = [
  { n: "01", path: "/",        label: "The cover" },
  { n: "02", path: "/work",    label: "All chapters" },
  { n: "03", path: "/journal", label: "The journal" },
  { n: "04", path: "/studio",  label: "About the studio" },
  { n: "05", path: "/contact", label: "Get in touch" },
];

export const colophon = "A blank page is still a page. Thank you for turning it.";
