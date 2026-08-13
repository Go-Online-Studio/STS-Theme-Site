// Shared services data — single source of truth
// Used by: /services page, /services/[id] detail pages, ServicesSection

export interface ServicePricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface Service {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  badge: string | null;
  pricing: ServicePricingTier[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    id: "design",
    emoji: "✦",
    title: "Custom Design",
    tagline: "Every pixel crafted for impact.",
    description:
      "Our design team crafts tailor-made digital invitations that perfectly match your event's personality — from opulent Indian weddings with animated curtain reveals to playful birthday bashes with honey-bear themes. No two invites are the same.",
    longDescription:
      "A digital invitation is the first impression your guests get of your event — it should be breathtaking. Our design service goes far beyond a template fill-in. We study your event's mood, color palette, cultural context, and music preferences to build an animated e-invite that feels uniquely yours. Every element — from the opening animation to the font choices to the event schedule layout — is handcrafted by our design team. You'll receive a fully interactive HTML invite that guests can open on any device, and that will make them genuinely excited to attend.",
    features: [
      "Choose from 10+ premium animated templates",
      "Full personalization — names, dates, venue, itinerary",
      "Brand-matched color palettes & typography",
      "Multi-page invite with event schedule pages",
      "Background music integration",
      "Mobile-first, cross-device tested",
    ],
    accentFrom: "#007a94",
    accentTo: "#00d2fd",
    glowColor: "rgba(0, 210, 253, 0.15)",
    badge: "Most Popular",
    pricing: [
      {
        name: "Basic",
        price: "₹999",
        description: "Single-page static invite, perfect for simple events.",
        features: [
          "1 animated template",
          "Name & date personalization",
          "Shareable link",
          "Mobile responsive",
          "1 revision",
        ],
        cta: "Get Basic",
      },
      {
        name: "Standard",
        price: "₹1,999",
        description: "Multi-page invite with music and event schedule.",
        features: [
          "Premium animated template",
          "Full event itinerary pages",
          "Background music",
          "Photo gallery section",
          "Shareable link + QR code",
          "3 revisions",
        ],
        highlight: true,
        cta: "Get Standard",
      },
      {
        name: "Premium",
        price: "₹2,999",
        description: "Fully custom design built from scratch for you.",
        features: [
          "Custom design from scratch",
          "Unlimited pages",
          "Custom animations",
          "RSVP form integration",
          "Countdown timer",
          "Unlimited revisions",
          "Priority 24hr delivery",
        ],
        cta: "Get Premium",
      },
    ],
    faq: [
      {
        q: "How long does it take to design my invite?",
        a: "Standard and Basic orders are delivered within 48 hours. Premium custom designs take 3–5 business days.",
      },
      {
        q: "Can I see a preview before the final delivery?",
        a: "Yes — we share a live preview link for your approval before final delivery.",
      },
      {
        q: "What format will I receive?",
        a: "You receive a hosted link (URL) that you can share directly via WhatsApp, email, or SMS. We also provide a downloadable HTML file.",
      },
    ],
  },
  {
    id: "rsvp",
    emoji: "✉",
    title: "RSVP Management",
    tagline: "Track attendees with zero effort.",
    description:
      "Replace messy WhatsApp threads and spreadsheets with a streamlined RSVP dashboard. Guests respond in one tap — you see everything in real time.",
    longDescription:
      "Managing RSVPs for a large event used to mean chasing people on WhatsApp for weeks, manually updating spreadsheets, and still being unsure about the final headcount on the day. InviteBox's RSVP Management completely replaces that chaos. Guests tap a single button inside the invite — no app install, no registration — and their response is instantly reflected in your host dashboard. You can ask custom questions (dietary needs, table preferences, plus-ones), set an RSVP deadline, and trigger automated WhatsApp reminders for guests who haven't responded yet.",
    features: [
      "One-tap RSVP from the invite itself",
      "Custom questionnaire (dietary, plus-ones, table choice)",
      "Real-time response dashboard",
      "Automated follow-up reminders for non-responders",
      "CSV export for caterers and venues",
      "WhatsApp & Email confirmation for guests",
    ],
    accentFrom: "#a10090",
    accentTo: "#cb00b6",
    glowColor: "rgba(203, 0, 182, 0.12)",
    badge: null,
    pricing: [
      {
        name: "Starter",
        price: "₹499",
        description: "Basic RSVP collection for small events.",
        features: [
          "Up to 50 guests",
          "Yes/No RSVP",
          "Response dashboard",
          "CSV export",
        ],
        cta: "Get Starter",
      },
      {
        name: "Pro",
        price: "₹1,199",
        description: "Full-featured RSVP for medium to large events.",
        features: [
          "Up to 300 guests",
          "Custom questions",
          "Dietary & plus-one tracking",
          "Automated reminders",
          "WhatsApp confirmations",
          "CSV export",
        ],
        highlight: true,
        cta: "Get Pro",
      },
      {
        name: "Enterprise",
        price: "₹2,499",
        description: "Unlimited guests, full customization.",
        features: [
          "Unlimited guests",
          "Fully custom questionnaire",
          "Table/seat assignment",
          "Bulk WhatsApp & email reminders",
          "Dedicated support",
          "Priority CSV + PDF report",
        ],
        cta: "Get Enterprise",
      },
    ],
    faq: [
      {
        q: "Do guests need to install an app to RSVP?",
        a: "No. Guests simply tap the RSVP button inside the invite in their browser — no app, no account required.",
      },
      {
        q: "When do automated reminders go out?",
        a: "You set the reminder schedule. Typically 7 days before and 2 days before the RSVP deadline.",
      },
      {
        q: "Can I export the guest list for my caterer?",
        a: "Yes — you can download a full CSV with guest names, RSVP status, dietary preferences, and plus-one counts at any time.",
      },
    ],
  },
  {
    id: "analytics",
    emoji: "◈",
    title: "Guest Analytics",
    tagline: "Know your crowd before they arrive.",
    description:
      "Real-time insights into your guest list turn guesswork into confidence. See open rates, confirmations, dietary trends, and more.",
    longDescription:
      "You sent 200 invites — but how many actually opened it? Who confirmed, who declined, who's still undecided? What dietary preferences are most common? Where are your guests coming from? InviteBox Guest Analytics answers all of these questions in real time, through a beautifully designed dashboard built specifically for event hosts. You don't need to be a data analyst — the dashboard surfaces the key numbers you need at a glance, with trend graphs, dietary charts, and a shareable summary you can forward to your caterer or venue.",
    features: [
      "Live open-rate and view tracking per invite",
      "Confirmed / Declined / Pending breakdown",
      "Dietary & preference aggregation charts",
      "Geographic heatmap of your guest list",
      "Day-wise RSVP trend graph",
      "Shareable summary report for your venue",
    ],
    accentFrom: "#006075",
    accentTo: "#007a94",
    glowColor: "rgba(0, 96, 117, 0.15)",
    badge: "New",
    pricing: [
      {
        name: "Basic",
        price: "₹299",
        description: "Open-rate and RSVP count for small events.",
        features: [
          "Open rate tracking",
          "RSVP count breakdown",
          "7-day data retention",
        ],
        cta: "Get Basic",
      },
      {
        name: "Pro",
        price: "₹799",
        description: "Full analytics dashboard for your event.",
        features: [
          "All Basic features",
          "Dietary preference charts",
          "Day-wise trend graph",
          "Shareable report link",
          "30-day data retention",
        ],
        highlight: true,
        cta: "Get Pro",
      },
      {
        name: "Premium",
        price: "₹1,499",
        description: "Advanced analytics with heatmaps and exports.",
        features: [
          "All Pro features",
          "Geographic guest heatmap",
          "PDF report export",
          "Venue-ready summary",
          "Unlimited data retention",
          "Priority support",
        ],
        cta: "Get Premium",
      },
    ],
    faq: [
      {
        q: "Is this available for all invite types?",
        a: "Yes — analytics works with any invite created or hosted on InviteBox.",
      },
      {
        q: "How accurate is the open-rate tracking?",
        a: "We use unique tracking pixels per guest link, giving you accurate per-person open data — not just aggregate page views.",
      },
      {
        q: "Can I share the analytics report with my venue?",
        a: "Yes — Pro and Premium plans generate a shareable link and downloadable PDF report you can send to anyone.",
      },
    ],
  },
  {
    id: "delivery",
    emoji: "➤",
    title: "Instant Delivery",
    tagline: "Reach everyone with a single click.",
    description:
      "Send your invite to hundreds of guests simultaneously — via WhatsApp, email, or a shareable link. No app installs. Works on every device.",
    longDescription:
      "Getting your beautiful invite in front of every guest shouldn't be a logistical nightmare. InviteBox Instant Delivery lets you share with your entire guest list in seconds — through WhatsApp bulk share, email blast, or a single link you can post anywhere. No guest needs to install anything. The invite opens directly in their phone browser, renders beautifully, and plays the music and animations exactly as designed. You can also generate a QR code for physical invitation cards, schedule the send for a specific date, and get read receipts so you know exactly who has seen the invite.",
    features: [
      "WhatsApp direct share with one-click copy",
      "Bulk email delivery with custom subject lines",
      "Shareable link — works anywhere, no app needed",
      "QR code generation for physical invites",
      "Scheduled send — set it and forget it",
      "Read receipts and delivery confirmation",
    ],
    accentFrom: "#00677e",
    accentTo: "#00d2fd",
    glowColor: "rgba(0, 210, 253, 0.12)",
    badge: null,
    pricing: [
      {
        name: "Basic",
        price: "Free",
        description: "Shareable link included with every invite.",
        features: [
          "Shareable link",
          "WhatsApp one-click copy",
          "Unlimited shares",
        ],
        cta: "Included Free",
      },
      {
        name: "Pro",
        price: "₹599",
        description: "Bulk email + QR code for your event.",
        features: [
          "All Basic features",
          "Bulk email to 200 guests",
          "Custom email subject",
          "QR code generation",
          "Scheduled send",
        ],
        highlight: true,
        cta: "Get Pro",
      },
      {
        name: "Enterprise",
        price: "₹1,499",
        description: "Full delivery suite with read receipts.",
        features: [
          "All Pro features",
          "Bulk email to 1000+ guests",
          "Per-guest read receipts",
          "Delivery confirmation dashboard",
          "Priority sending queue",
          "Dedicated support",
        ],
        cta: "Get Enterprise",
      },
    ],
    faq: [
      {
        q: "Do guests need WhatsApp to receive the invite?",
        a: "No — WhatsApp is just one delivery channel. You can also share via email or any messaging app using the shareable link.",
      },
      {
        q: "Does the invite work on iPhones and Android?",
        a: "Yes — the invite is a web page that opens in any modern browser. It works on iOS Safari, Android Chrome, and all desktop browsers.",
      },
      {
        q: "Can I schedule the invite to be sent later?",
        a: "Yes — Pro and Enterprise plans allow you to schedule the bulk send for a specific date and time.",
      },
    ],
  },
];

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
