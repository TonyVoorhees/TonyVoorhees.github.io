/**
 * Studio (about) page content. Six sections in source order.
 */

export const meta = {
  title: "Studio — Studio Nord",
  description:
    "Studio Nord is a three-person practice in Copenhagen. We work with founders, editors, and product leads on a handful of projects each year.",
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "On craft" },
  title: { line1: "On craft,", accent: "clarity", line3: "and quiet ambition." },
  body:
    "Studio Nord is a three-person practice in Copenhagen. We work with founders, editors, and product leads on a handful of projects each year. We keep our calendar small on purpose.",
};

// ─── Studio image ──────────────────────────────────────────────────────────
export const studioImage = {
  label: "three creative professionals in a minimal studio environment — editorial composition, B&W",
  caption: "FIG. 02 — The studio, Sankt Peders Stræde, February 2026",
};

// ─── (02) Philosophy ───────────────────────────────────────────────────────
export const philosophy = {
  sectionTag: { num: "02", label: "Philosophy" },
  intro:
    "We started Studio Nord because we wanted to work on fewer things, more carefully. A small practice means a small surface for ego — and a large surface for craft. The brief passes through every set of hands in the studio. Nothing is delegated to a department of one.",
  // The intro's first letter is enlarged as a drop cap by the
  // `.dropcap::first-letter` rule in global.css — no manual markup needed,
  // the full sentence lives here as plain text.
  marginalia: [
    {
      text: "On scale",
      body:
        "We have stayed three on purpose. Three is small enough that every project keeps its grain — every kerning pair, every easing curve, every margin. Five would mean a meeting about the meeting. Ten would mean a process about the process. We have nothing against growth; we have a great deal against blur.",
    },
    {
      text: "On the work",
      body:
        "We work in branding, motion direction, and editorial website builds. The trio shares a vocabulary — editorial typography, restrained palettes, an intolerance for visual noise. We treat a stylesheet with the same care as a master grid in InDesign: it is the document that quietly governs all the other documents.",
    },
    {
      text: "On clients",
      body:
        "The studio runs on long relationships. Most of our work each year is a continuation of last year's, with the same founders and editors who hired us when they had less to spend and more to prove. We're proud of that. New work comes by referral — from previous clients, from designers we admire, from one or two writers who keep an eye on the studio.",
    },
    {
      text: "On the city",
      body:
        "Copenhagen is a quiet city. The studio is a quiet studio. We think that has helped the work more than any tool or process ever has.",
    },
  ],
};

// ─── (03) Team ─────────────────────────────────────────────────────────────
export const team = {
  sectionTag: { num: "03", label: "Three of us" },
  est: "EST. 2018",
  members: [
    {
      name: "Sofie Lindquist",
      role: "Art Director / Co-founder",
      bio: "Twelve years in editorial and brand. Previously at Spin (London) and Designstudio. Teaches type at KADK.",
      img: "editorial portrait, B&W, soft natural light, neutral background",
      links: ["sofie.dk", "@sofielindquist"],
    },
    {
      name: "Magnus Holm",
      role: "Designer / Co-founder",
      bio: "Identity, motion, and the occasional album sleeve. Studied at the Royal Danish Academy. Loves a grid.",
      img: "editorial portrait, B&W, soft window light, neutral background",
      links: ["magnusholm.co", "@m.holm"],
    },
    {
      name: "Ida Skov",
      role: "Developer / Co-founder",
      bio: "Ten years building editorial websites for studios. A deep suspicion of frameworks that ship more than they save, and a quiet preference for the tools that don't.",
      img: "editorial portrait, B&W, studio doorway light, neutral background",
      links: ["idaskov.dev", "@idaskov"],
    },
  ],
};

// ─── (04) Press ────────────────────────────────────────────────────────────
export const press = {
  sectionTag: { num: "04", label: "Awards & Press" },
  items: [
    { year: "2026", title: "It's Nice That — Studio Visit", kind: "Feature" },
    { year: "2026", title: "Type Directors Club Annual", kind: "Award" },
    { year: "2025", title: "Eye Magazine, Issue 109", kind: "Print interview" },
    { year: "2025", title: "Awwwards SOTY Nominee", kind: "Nomination" },
    { year: "2025", title: "Klassekampen — Design column", kind: "Quote" },
    { year: "2024", title: "AIGA Eye on Design", kind: "Feature" },
    { year: "2024", title: "Brand New — Noted", kind: "Review" },
    { year: "2023", title: "Codrops Collective", kind: "Inclusion" },
  ],
};

// ─── Availability strip ────────────────────────────────────────────────────
export const availability = {
  label: "Currently booking",
  title: { lead: "Q3 2026 —", accent: "two slots remaining" },
  cta: { href: "/contact", label: "Start a conversation →" },
};
