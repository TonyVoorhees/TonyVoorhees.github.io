/**
 * Studio (about) page content. Six sections in source order.
 */

export const meta = {
  title: "Studio — Tony Voorhees",
  description:
  "Tony Voorhees Studio is a Bay Area design practice helping founders and growing companies shape products, brands, and launch-ready experiences. I lead every project personally, bringing in specialists only when the work calls for it.",  
};

// ─── (01) Hero ─────────────────────────────────────────────────────────────
export const hero = {
  sectionTag: { num: "01", label: "How I do it" },
  title: { line1: "Product and", accent: "brand design,", line3: "the overlap is the work." },
  body:
  "25+ years in, and this is still where the work I care about most happens. I've learned the best ideas don't stop at the edge of a discipline. They carry through product, brand, and every decision that follows. That's the throughline this studio is built around.",
};

// ─── Studio image ──────────────────────────────────────────────────────────
export const studioImage = {
  label: "Studio view",
  caption: "Studio view",
};

// ─── (02) Philosophy ───────────────────────────────────────────────────────
export const philosophy = {
  sectionTag: { num: "02", label: "Philosophy" },
  intro:
    "Tony Voorhees Studio runs lean and connects deep. I lead every project personally, bringing in trusted specialists only when the work calls for it. Exactly the team your project needs.",
  studioModel:
    "It's a model that works especially well for founders, lean teams, and companies navigating growth — where decisions move quickly and every one of them shapes the results.",
  // The intro's first letter is enlarged as a drop cap by the
  // `.dropcap::first-letter` rule in global.css — no manual markup needed,
  // the full sentence lives here as plain text.
  marginalia: [
    {
      text: "On Scale",
      body:
        "Agencies, startups, and enterprise teams have taught me one thing: the best work happens when product and brand speak the same language. I've shipped design systems for EV charging networks and built brands from the ground up.  The scale changes. The standard doesn't.",
    },
    {
      text: "On Craft",
      body:
      "Detail-oriented doesn't mean slow. It means knowing where precision matters most and where speed creates momentum. Whether it's a brand mark or a CMS architecture decision, the care stays the same. What you describe is what gets built.",
    },
    {
      text: "On Collaboration",
      body:
        "I bring the right people into the conversation from the start: designer, developer, and client working together before decisions are made, not after. A flexible network means you're never paying for specialists you don't need — and never going without the ones you do.",
    },
    {
      text: "On AI",
      body:
        "AI is a tool, not a replacement for judgment. I use it where it earns its place — accelerating exploration, stress-testing directions, speeding up production — and I'm just as clear about where it doesn't belong. If your team is figuring out where AI belongs, I can help define the boundaries: what to automate, what stays human, and how to keep the work feeling intentional.",
    },
    {
      text: "On Guidance",
      body:
        "Some clients need a finished product. Others need confidence in a decision they're already making. I work a few different ways — as an embedded design partner, as an outside perspective brought in to pressure-test a critical decision, or alongside your team, sharing not just the work, but the thinking behind it.",
    },
  ],
};

// ─── (03)Founder ─────────────────────────────────────────────────────────────
export const founder = {
  name: "Tony Voorhees",
  role: "Founder & Designer",
  bio:
    "I help teams make sense of messy problems, keep product and message pointed in the same direction, and turn good ideas into things people can actually use. My bias is toward sharp thinking, clear systems, and decisions that hold up under pressure.",
  handle: "Full background on LinkedIn",
  link: "https://www.linkedin.com/in/tonyvoorhees/",
  caption: "Tony Voorhees 2026",
};

// ─── (04) Team ─────────────────────────────────────────────────────────────
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
      role: "Junior Designer & Creative Consultant",
      bio: "Designer in training, learning the ropes of design and development.",
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

// ─── (05) Press ────────────────────────────────────────────────────────────
export const press = {
  sectionTag: { num: "04", label: "Awards & Press" },
  items: [
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
    { year: "", title: "", kind: "" },
  ],
};

// ─── Availability strip ────────────────────────────────────────────────────
export const availability = {
  label: "Available for select projects",
  title: { lead: "Ready when", accent: "you are" },
  cta: { href: "/contact", label: "Let's Talk →" },
};
