/**
 * Studio (about) page content. Six sections in source order.
 */

export const meta = {
  title: "Studio — Tony Voorhees",
  description:
    "Tony Voorhees is a solo practice in Northern California. I work with founders, editors, and product leads on a handful of projects each year.",
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "On craft" },
  title: { line1: "On craft,", accent: "clarity", line3: "and quiet ambition." },
  body:
    "Tony Voorhees is a solo practice in Northern California. I work with founders, editors, and product leads on a handful of projects each year. I keep my calendar small on purpose.",
};

// ─── Studio image ──────────────────────────────────────────────────────────
export const studioImage = {
  label: "View from the my office window",
  caption: "mount tamalpais - Marin County, CA",
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
  sectionTag: { num: "03", label: "Team" },
  est: "EST. 2023",
  members: [
    {
      name: "Tony Voorhees",
      role: "Founder & Designer",
      bio: "I work across product and brand — and the overlap between them is where I do my best work.",
      img: "",
      links: ["@tonyvoorhees"],
    },
    {
      name: "Hudson Voorhees",
      role: "Apprentice & Creative  Consultant",
      bio: "Creative in training, learning the ropes of design and development.",
      img: "",
      links: ["@hudsonvoorhees"],
    },
    {
      name: "JoJo & Wabi",
      role: "Emotional Support",
      bio: "Two years ago, they joined the studio as emotional support animals.",
      img: "",
      links: ["@jojowabi"],
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
  title: { lead: "Q4 2026 —", accent: "two slots remaining" },
  cta: { href: "/contact", label: "Let's Talk →" },
};
