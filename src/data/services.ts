/**
 * Services page content. Five sections in source order.
 */

export const meta = {
  title: "Services — Studio Nord",
  description:
    "Four practices, one studio: art direction, brand identity, motion direction, and editorial websites. How we engage, how we price.",
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "What we do" },
  title: { lead: "Services —", accent: "how", line3: "we work." },
  body:
    "Four practices, one studio. We rarely take on a project that uses only one of them — most of our best work lives in the seams between them.",
};

// ─── Service blocks ────────────────────────────────────────────────────────
export const blocks = [
  {
    n: "01",
    name: "Art Direction",
    desc: "We set the visual register for a brand, campaign, or product — and stay close enough to defend it through production.",
    deliverables: [
      "Visual research deck",
      "Direction document",
      "Production oversight",
      "Talent + photo direction",
    ],
    idealFor:
      "Founders launching a new venture; brands repositioning after a Series A; editors planning an issue.",
    price: "From €18,000",
    example: "Hjem Magazine — Issue 04",
  },
  {
    n: "02",
    name: "Brand Identity",
    desc: "Systems that hold up across every surface: print, screen, motion. A wordmark is the easy part — the grid is the work.",
    deliverables: [
      "Logotype + marque",
      "Type + colour system",
      "Brand guidelines (Notion + PDF)",
      "Templates + production files",
    ],
    idealFor:
      "Studios, foundries, roasteries, and product companies that want to grow without losing their grain.",
    price: "From €34,000",
    example: "Kjeld & Co. — full identity",
  },
  {
    n: "03",
    name: "Motion Direction",
    desc: "Short-form motion for launch films, social, and interface. Hand-eased, never templated.",
    deliverables: [
      "Storyboard + animatic",
      "15s / 30s / 60s edits",
      "Lottie / GIF / MP4 deliverables",
      "Sound design partner",
    ],
    idealFor:
      "Launches, campaigns, and product moments that deserve more than a Premiere preset.",
    price: "From €12,000",
    example: "Meridian Type — release film",
  },
  {
    n: "04",
    name: "Editorial websites",
    desc: "Hand-built websites with editorial typography, considered transitions, and a CMS the team will actually use.",
    deliverables: [
      "Sitemap + wireframes",
      "Design system",
      "Custom build",
      "CMS setup + handoff",
    ],
    idealFor:
      "Studios, journals, B2B SaaS, and founders who care that the site reads as well as it scrolls.",
    price: "From €24,000",
    example: "Feltland.com — full build",
  },
];

// ─── (02) Process ──────────────────────────────────────────────────────────
export const process = {
  sectionTag: { num: "02", label: "Process" },
  title: { lead: "Five stages,", accent: "one rhythm" },
  stages: [
    { n: "I", name: "Discovery", desc: "A week of listening, sketching, and asking better questions than the brief did." },
    { n: "II", name: "Direction", desc: "Two or three visual territories — defended in prose, not in mood boards." },
    { n: "III", name: "Design", desc: "We design the whole system from one decision outward. No deck of \"options to pick from.\"" },
    { n: "IV", name: "Build", desc: "Hand-coded, accessible by default. The CMS is part of the design." },
    { n: "V", name: "Launch", desc: "A quiet handoff, with a Loom, a Notion, and a six-month aftercare window." },
  ],
};

// ─── (03) Pricing tiers ────────────────────────────────────────────────────
export const tiers = {
  sectionTag: { num: "03", label: "Engagement" },
  title: { lead: "Three ways", accent: "in" },
  note: "All prices ex. VAT · DKK / EUR / USD",
  items: [
    {
      name: "Sprint",
      duration: "2 weeks",
      price: "€6,000",
      desc: "One designer, one week of direction, one week of execution. Best for a focused deliverable.",
      features: [
        "One scope (e.g. landing page)",
        "Daily working sessions",
        "Source + built files at handoff",
        "No revisions after week 2",
      ],
      recommended: false,
      ctaLabel: "Enquire →",
    },
    {
      name: "Project",
      duration: "8–14 weeks",
      price: "€34,000+",
      desc: "The full studio, end-to-end. Our standard engagement and where most of our work lives.",
      features: [
        "Full strategy + design + build",
        "Three feedback rounds",
        "Brand guidelines included",
        "Six-month aftercare",
      ],
      recommended: true,
      ctaLabel: "Start a project →",
    },
    {
      name: "Partnership",
      duration: "Quarterly",
      price: "€18,000 /mo",
      desc: "A retained relationship for studios with an ongoing design cadence. Two slots per year.",
      features: [
        "Dedicated team time, four days / wk",
        "Quarterly direction reviews",
        "Priority on new work",
        "Studio Slack channel",
      ],
      recommended: false,
      ctaLabel: "Enquire →",
    },
  ],
};

// ─── (04) FAQ ──────────────────────────────────────────────────────────────
export const faq = {
  sectionTag: { num: "04", label: "Questions, answered" },
  items: [
    {
      q: "How do you scope a project?",
      a: "A first call (free, 30 min) to understand the brief. We follow up with a one-page proposal — scope, timeline, fee — within 48 hours. If it fits, we send a contract and a deposit invoice. No agency dance.",
    },
    {
      q: "Do you work with companies outside Denmark?",
      a: "Yes — most of our work is remote, with two or three on-site weeks per year for kick-offs and shoots. We work in CET but overlap comfortably with EST and PST.",
    },
    {
      q: "What if my project doesn't fit your tiers?",
      a: "The tiers are a guide, not a menu. Tell us what you're working on and we'll write a custom proposal. We turn down more projects than we take — clarity is kinder for both sides.",
    },
    {
      q: "Do you offer equity-for-design arrangements?",
      a: "Occasionally, for founders we already know and for projects we already believe in. Not as a general policy.",
    },
    {
      q: "Can we hire you for a single deliverable, like a logo?",
      a: "Rarely. Logos are downstream of a brand, and brands are downstream of a business. We can usually help most by widening the scope, not narrowing it.",
    },
    {
      q: "When can you start?",
      a: "Currently booking Q3 2026 — two slots remaining as of this week. Q4 is open and Q1 2027 has early-bird placeholder time for repeat clients.",
    },
  ],
};
