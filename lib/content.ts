/* =========================================================
   CONTENT DECODED — Single source of truth
   Edit copy, links, prices and testimonials here. Every
   section reads from this file, so changes flow everywhere.
   ========================================================= */

export const site = {
  name: "Content Decoded",
  shortName: "CD",
  tagline: "Content, decoded. Growth, delivered.",
  // Used for SEO + the hero subline
  description:
    "Content Decoded is a content marketing & social media studio that turns short-form video into measurable growth — research, ideation, scripting, editing and publishing, handled end to end.",
  url: "https://contentdecoded.co",

  // ── Contact / conversion ──────────────────────────────
  email: "contentdecoded.co@gmail.com",
  calendly: "https://calendly.com/contentdecoded-co/30min",
  ctaLabel: "Book a discovery call",
  ctaShort: "Book a discovery call",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ── Trust marquee (shown under the hero) ──────────────── */
export const marqueeItems = [
  "Instagram Reels",
  "YouTube Shorts",
  "TikTok",
  "LinkedIn Video",
  "Hooks that convert",
  "Retention editing",
  "Full-funnel strategy",
  "Founder-led growth",
] as const;

/* ── Headline stats ────────────────────────────────────── */
export const stats = [
  { value: 18, suffix: "M+", label: "Organic views generated" },
  { value: 40, suffix: "+", label: "Brands scaled" },
  { value: 3.2, suffix: "x", decimals: 1, label: "Avg. engagement lift" },
  { value: 2500, suffix: "+", label: "Videos shipped" },
] as const;

/* ── What we do — the 4-step process (services + workflow merged) ─
   Icon keys map to components/icons.tsx                            */
export const steps = [
  {
    no: "01",
    icon: "research",
    title: "Research",
    body: "We study your brand, audience and niche to find the angles, hooks and formats that actually drive growth — not guesswork.",
  },
  {
    no: "02",
    icon: "script",
    title: "Script",
    body: "We write retention-first scripts and scroll-stopping hooks, mapped to your goals and written in your brand's voice.",
  },
  {
    no: "03",
    icon: "edit",
    title: "Film & Edit",
    body: "We guide the shoot, then turn your footage into polished, platform-native videos with captions, motion and sound design.",
  },
  {
    no: "04",
    icon: "publish",
    title: "Upload",
    body: "We publish, schedule and optimise every video across the platforms you sell on — then read the data and double down.",
  },
] as const;

/* ── Mini case studies (results) ───────────────────────── */
/** An optional image or video, served from /public. */
export type Media = { type: "image" | "video"; src: string; poster?: string };

export type CaseStudy = {
  tag: string;
  result: string;
  metric: string;
  body: string;
  /** Optional image or video shown at the top of the card.
   *  Drop the file in public/case-studies/ and reference it, e.g.
   *  { type: "image", src: "/case-studies/lumea-analytics.png" }
   *  { type: "video", src: "/case-studies/lumea.mp4", poster: "/case-studies/lumea.jpg" } */
  media?: Media;
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "DTC Skincare",
    result: "0 → 1.2M",
    metric: "views in 60 days",
    body: "Built a founder-led short-form engine that took a new brand from zero to 1.2M organic views and a 4× lift in inbound.",
    // media: { type: "image", src: "/case-studies/lumea-analytics.png" },
  },
  {
    tag: "B2B SaaS",
    result: "+318%",
    metric: "qualified demo bookings",
    body: "Founder-led video strategy turned a quiet LinkedIn into the company's top-performing pipeline source in one quarter.",
  },
  {
    tag: "Personal Brand",
    result: "12K → 140K",
    metric: "followers in 5 months",
    body: "A repeatable hook-and-edit system grew a coach's audience 10× and sold out two cohorts back to back.",
  },
];

/* ── Before / After transformations (real client screenshots) ─────
   NOT CURRENTLY SHOWN ON THE SITE. The Transformations section was
   removed; this data and the images in public/transformations/ are
   kept so the section can be restored later without re-uploading.
   Editing the labels below has no visible effect until it's re-added. */
export type Transformation = {
  before: string;
  after: string;
  label: string;
};

export const transformations: Transformation[] = [
  { before: "/transformations/before-6.png", after: "/transformations/after-6.png", label: "202 → 24.7K followers" },
  { before: "/transformations/before-1.png", after: "/transformations/after-1.png", label: "30.2K → 100K followers" },
  { before: "/transformations/before-7.png", after: "/transformations/after-7.png", label: "8,741 → 44.5K followers" },
  { before: "/transformations/before-4.png", after: "/transformations/after-4.png", label: "11K → 98.6K followers" },
  { before: "/transformations/before-5.png", after: "/transformations/after-5.png", label: "2,100 → 51.5K followers" },
  { before: "/transformations/before-2.png", after: "/transformations/after-2.png", label: "4,879 → 31.5K followers" },
  { before: "/transformations/before-3.png", after: "/transformations/after-3.png", label: "322 → 1,696 followers" },
];

/* ── Pricing tiers ─────────────────────────────────────── */
// Every plan includes the full process — research, ideation, scripting and
// editing. The difference between tiers is the number of videos per month.
export const pricing = [
  {
    name: "Decode",
    kicker: "Starter",
    price: "$800",
    cadence: "/ month",
    blurb: "15 videos a month to build momentum and a consistent presence.",
    featured: false,
    features: [
      "15 short-form videos / month",
      "7 sales-focused Instagram stories / month",
      "Research & strategy",
      "Scriptwriting",
      "Professional editing",
      "Publishing & uploading",
    ],
  },
  {
    name: "Amplify",
    kicker: "Most popular",
    price: "$1,000",
    cadence: "/ month",
    blurb: "20 videos a month to accelerate growth across your platforms.",
    featured: true,
    features: [
      "20 short-form videos / month",
      "10 sales-focused Instagram stories / month",
      "Research & strategy",
      "Scriptwriting",
      "Professional editing",
      "Publishing & uploading",
    ],
  },
  {
    name: "Dominate",
    kicker: "Scale",
    price: "$1,500",
    cadence: "/ month",
    blurb: "30 videos a month for brands that want to own the feed.",
    featured: false,
    features: [
      "30 short-form videos / month",
      "15 sales-focused Instagram stories / month",
      "Research & strategy",
      "Scriptwriting",
      "Professional editing",
      "Publishing & uploading",
    ],
  },
] as const;

/* ── FAQ ───────────────────────────────────────────────── */
export const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Most clients are fully onboarded within a week. After your discovery call we send a short questionnaire, build your strategy, and ship the first videos within two weeks.",
  },
  {
    q: "Do I need to be on camera?",
    a: "Yes. As the face of your personal brand, you're the one on camera — that's what builds the connection that actually converts. New to it? No problem: we give you a simple guide on exactly how to shoot, so filming is quick and stress-free.",
  },
  {
    q: "Which platforms do you cover?",
    a: "Instagram Reels, TikTok, YouTube Shorts and LinkedIn are our core. We repurpose every asset so one shoot fuels every channel you sell on.",
  },
  {
    q: "How soon will we see results?",
    a: "Short-form compounds. Most brands see real traction in 30–60 days as we learn what your audience responds to, with the biggest jumps from month three onward. We optimise for the metrics that lead to revenue — watch-time, saves, shares and profile visits — not vanity views.",
  },
  {
    q: "Who owns the content and the raw files?",
    a: "You do — 100%. Every video, script and raw file is yours to keep and repurpose however you like, both during and after we work together.",
  },
  {
    q: "How much of my time does this take each week?",
    a: "Under 30 minutes for most clients. After onboarding, you simply approve each content batch and send the footage we guide you to film — we handle research, scripting, editing and uploading.",
  },
  {
    q: "Do you guarantee views or virality?",
    a: "No honest agency can promise a viral hit, and we won't pretend to. What we guarantee is a proven system, consistent output, and relentless iteration on what's working — which is exactly what produces breakout videos over time.",
  },
  {
    q: "What makes you different from a freelancer or another agency?",
    a: "You get a full content engine, not a lone freelancer or a faceless content mill. Research, scripting, editing and uploading run as one system, every video ties back to your growth goals, and we obsess over the numbers that move your business.",
  },
] as const;

// We only use Instagram, Email and LinkedIn.
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/contentdecoded.co", icon: "instagram" },
  { label: "Email", href: "mailto:contentdecoded.co@gmail.com", icon: "mail" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
] as const;
