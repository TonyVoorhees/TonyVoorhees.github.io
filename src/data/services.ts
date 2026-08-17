/**
 * Services page content. Five sections in source order.
 */

export const meta = {
  title: "Services — Tony Voorhees Studio",
  description:
    "Solo studio, multiple disciplines. Useful, memorable, built to last.",
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "Approach" },
  title: { lead: "How", accent: "I work" },
  body:
    "Whether I’m cruising down the mountain or climbing up, I’m always looking for the best line. I approach product, brand, and design systems the same way: read the terrain, understand the conditions, and find the line that connects strategy, experience, and identity from idea to launch.",
};

// ─── Service blocks ────────────────────────────────────────────────────────
export const blocks = [
  {
    n: "01",
    name: "Product Design",
    desc: "I think in systems, not screens. Every product is grounded in research, proven through prototypes, and built to scale — so it still holds together and holds its identity years later.",
    deliverables: [
      "User research + synthesis",
      "User flows + journey maps",
      "Interactive prototypes",
      "Design system + component library",
    ],
    idealFor:
      "Series A–C startups scaling past their founder-designed phase, companies repositioning or with a complex product needing simplification.",
    price: "Full Studio · 4–6 Week Trial → Ongoing",
    example: "Seek AI",
  },
  {
    n: "02",
    name: "Brand Identity",
    desc: "I consider every touchpoint — print, screen, motion — down to the ones you didn't know mattered.",
    deliverables: [
      "Brand strategy + positioning",
      "Voice & messaging framework",
      "Logo suite + visual identity system",
      "Brand guidelines",
    ],
    idealFor:
      "Startups finding their voice; SMBs looking to level up.",
    price: "Starter to Full Studio · 2–4 Weeks",
    example: "Cape Atlantis Shells",
  },
  {
    n: "03",
    name: "Build & Launch",
    desc: "A starter package (0–1) for people who need to test an idea fast. I develop brand identity and a website faster than most — strategy, design, and development, all in one.",
    deliverables: [
      "Brand identity (logo, color, type)",
      "Website design + development",
      "Launch-ready in weeks, not months",
      "Built to test, structured to scale if it works",
    ],
    idealFor:
      "Founders launching a new product or brand from the ground up; teams that need strategy, design, and a live site in one engagement.",
    price: "Full Studio · 4-6 Weeks",
    example: "Wes Moore BMX",
  },
  /*{
    n: "04",
    name: "Print Production",
    desc: "From books to apparel, I work with reliable vendors and partners to turn ideas into tangible goods.",
    deliverables: [
      "Books + editorial print",
      "Apparel & merch",
      "Packaging & tangible goods",
      "Vendor sourcing + production management",
    ],
    idealFor:
      "Authors, creators, influencers, startups, and SMBs looking to engage IRL.",
    price: "Starter · Timeline Varies",
    example: "Peggy the Panda — book",
  },*/
];

// ─── (02) Process ──────────────────────────────────────────────────────────
/*export const process = {
  sectionTag: { num: "02", label: "Process" },
  title: { lead: "Five stages,", accent: "one rhythm" },
  stages: [
    { n: "I", name: "Discovery", desc: "A week of listening, sketching, and asking better questions than the brief did." },
    { n: "II", name: "Direction", desc: "Two or three visual territories — defended in prose, not in mood boards." },
    { n: "III", name: "Design", desc: "We design the whole system from one decision outward. No deck of \"options to pick from.\"" },
    { n: "IV", name: "Build", desc: "Hand-coded, accessible by default. The CMS is part of the design." },
    { n: "V", name: "Launch", desc: "A quiet handoff, with a Loom, a Notion, and a six-month aftercare window." },
  ],
};*/

// ─── (02) Pricing tiers ────────────────────────────────────────────────────
export const tiers = {
  sectionTag: { num: "02", label: "Engagement" },
  title: { lead: "Three ways", accent: "in" },
  note: "All prices in USD",
  items: [
    {
      name: "Basecamp",
      duration: "2 weeks",
      price: "$3,000+",
      desc: "One designer, one week of direction, one week of execution. Best for a focused deliverable.",
      features: [
        "One scope (e.g. logo, landing page)",
        "Weekly working sessions, half or full days",
        "Source files + handoff deliverables",
        "Additional cost for revisions after week 2",
      ],
      recommended: false,
      ctaLabel: "Let's Ride →",
    },
    {
      name: "Summit",
      duration: "4-6 weeks",
      price: "$14,000+",
      desc: "The full studio, end-to-end. Where most of my work lives. Brand strategy, design, and development all in one.",
      features: [
        "Full strategy + design + build",
        "Brand package - voice, visuals, & guides.",
        "Website build – index and one subpage template",
        "Six-month aftercare",
      ],
      recommended: true,
      ctaLabel: "Start a project →",
    },
    {
      name: "Expedition",
      duration: "20-40 Week",
      price: "$20,000+ /mo",
      desc: "A retained relationship for companies with an ongoing design cadence.",
      features: [
        "Dedicated team time, four days / wk",
        "Monthly direction reviews",
        "Priority on new work",
        "Studio Slack channel",
      ],
      recommended: false,
      ctaLabel: "Let's Talk →",
    },
  ],
};

// ─── (04) FAQ ──────────────────────────────────────────────────────────────
export const faq = {
  sectionTag: { num: "04", label: "Questions, answered" },
  items: [
    {
      q: "How do you scope a project?",
      a: "A first call (free, 30 min) to understand the brief. We follow up with a one-page proposal — scope, timeline, fee — within 24 hours. If it fits, we send a contract and a deposit invoice—no agency dance.",
    },
    {
      q: "What type of companies do you work with?",
      a: "All types — Startups, SMBs, and sometimes agencies and fortune 500 companies.",
    },
    {
      q: "What if my project doesn't fit your tiers?",
      a: "The tiers are a guide, not a menu. Tell me what you're working on, and I willl write a custom proposal.",
    },
    {
      q: "Do you offer equity-for-design arrangements?",
      a: "Occasionally, for founders I already know and for projects I believe in. Not as a general policy.",
    },
    {
      q: "When can you start?",
      a: "Currently available now, but it can change quickly. I try to be flexible, but it depends on the gig.",
    },
    {
      q: "Do you work remotely or on-site?",
      a: "Most of my work is done remote, but I can accommodate on-site visits that are within reason.",
    },
  ],
};
