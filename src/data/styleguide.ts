/**
 * Style guide page — internal documentation of the template's design tokens.
 *
 * Buyers will use this page as a living reference: which colour roles exist,
 * which type scale entries are real (vs. one-offs), the spacing system, and
 * the breakpoint vocabulary.
 *
 * The values shown here must match the actual @theme tokens in global.css —
 * if you change one, change the other.
 */

export const meta = {
  title: "Style Guide — Studio Nord",
  description: "Internal documentation of the template's design tokens, type scale, spacing, and breakpoints.",
};

export const hero = {
  caption: "Internal · v 1.0.0",
  title: { lead: "Style guide —", accent: "tokens", line3: "and components." },
  body:
    "The document the template builds from. Colour tokens, type scale, spacing, and the small set of components used across every page.",
};

// Each token lists both notations the design references: hex (familiar,
// copy-paste friendly) and OKLCH (perceptually uniform, the format the
// palette is reasoned about in). OKLCH values are derived from the hex —
// keep them in sync if a hex changes.
export const colorTokens = [
  { name: "bg / light",      hex: "#F8F8F6", oklch: "oklch(97.9% 0.003 106.4)", use: "Background, light mode" },
  { name: "surface / light", hex: "#F1F0EE", oklch: "oklch(95.5% 0.003 84.6)",  use: "Cards, sections" },
  { name: "surface-2",       hex: "#EAE9E6", oklch: "oklch(93.4% 0.004 91.4)",  use: "Insets, stat panels" },
  { name: "text / primary",  hex: "#1F1F1D", oklch: "oklch(23.9% 0.004 106.7)", use: "Body, headings" },
  { name: "text / muted",    hex: "#686864", oklch: "oklch(51.6% 0.006 106.6)", use: "Captions, meta" },
  { name: "hairline",        hex: "#D8D7D3", oklch: "oklch(87.9% 0.006 95.1)",  use: "Rules, borders" },
  { name: "accent",          hex: "#FF5A1F", oklch: "oklch(68.2% 0.211 37.7)",  use: "CTAs, dot, hover" },
  { name: "bg / dark",       hex: "#1A1A18", oklch: "oklch(21.7% 0.004 106.7)", use: "Background, dark mode" },
];

export const typeSamples = [
  { name: "Display / Hero",   font: "Fraunces",   sizeCss: "clamp(3.5rem, 8vw, 9rem)", weight: 350, sample: "We design brands." },
  { name: "Display / Italic", font: "Fraunces",   sizeCss: "5rem",    weight: 350, italic: true, sample: "Quietly, carefully." },
  { name: "H1 / Section",     font: "Fraunces",   sizeCss: "4.5rem",  weight: 400, sample: "Selected work." },
  { name: "H2",               font: "Fraunces",   sizeCss: "2.6rem",  weight: 400, sample: "Three of us, on purpose." },
  { name: "H3",               font: "Fraunces",   sizeCss: "1.75rem", weight: 400, sample: "On the kerning." },
  { name: "Body",             font: "Geist",      sizeCss: "17px",    weight: 400, sample: "A brand system is a piece of music. There is a tempo, a chorus, and a long bridge where very little happens at all." },
  { name: "Mono / Label",     font: "Geist Mono", sizeCss: "11px",    weight: 500, sample: "AVAILABLE Q3 2026 · COPENHAGEN", mono: true },
  { name: "Mono / Caption",   font: "Geist Mono", sizeCss: "10px",    weight: 400, sample: "FIG. 01 — STUDIO PRINCIPAL, MARCH 2026", mono: true, muted: true },
];

export const trackingScale = [
  { name: "mono-x",       token: "--tracking-mono-x",       value: "0.14em",   use: "↳ mid-section labels" },
  { name: "mono-loose",   token: "--tracking-mono-loose",   value: "0.1em",    use: "SectionTag, footer headings" },
  { name: "mono",         token: "--tracking-mono",         value: "0.08em",   use: "Mono labels — default" },
  { name: "body",         token: "--tracking-body",         value: "-0.005em", use: "Body emphasis" },
  { name: "tight",        token: "--tracking-tight",        value: "-0.01em",  use: "h3/h4, captions" },
  { name: "snug",         token: "--tracking-snug",         value: "-0.015em", use: "Card titles, marginalia" },
  { name: "display",      token: "--tracking-display",      value: "-0.02em",  use: "Blockquotes, mid headings" },
  { name: "display-lg",   token: "--tracking-display-lg",   value: "-0.025em", use: "Section headings" },
  { name: "display-xl",   token: "--tracking-display-xl",   value: "-0.03em",  use: "Large display" },
  { name: "hero",         token: "--tracking-hero",         value: "-0.035em", use: "Page hero h1" },
  { name: "hero-xl",      token: "--tracking-hero-xl",      value: "-0.045em", use: "Largest editorial display" },
];

export const breakpoints = [
  { name: "sm",  px: "640px",  use: "Mobile landscape, large phones" },
  { name: "md",  px: "768px",  use: "Tablet portrait" },
  { name: "lg",  px: "1024px", use: "Tablet landscape, small laptop" },
  { name: "xl",  px: "1280px", use: "Laptop, desktop standard" },
  { name: "2xl", px: "1536px", use: "Wide desktop, large monitors" },
];
