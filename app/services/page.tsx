import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — InviteStash",
  description:
    "Explore InviteStash's full suite of services: custom e-invite design, RSVP management, guest analytics, and instant delivery. Everything you need to host effortlessly.",
};

const services = [
  {
    id: "design",
    emoji: "✦",
    title: "Custom Design",
    tagline: "Every pixel crafted for impact.",
    description:
      "Our design team crafts tailor-made digital invitations that perfectly match your event's personality — from opulent Indian weddings with animated curtain reveals to playful birthday bashes with honey-bear themes. No two invites are the same.",
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
  },
  {
    id: "rsvp",
    emoji: "✉",
    title: "RSVP Management",
    tagline: "Track attendees with zero effort.",
    description:
      "Replace messy WhatsApp threads and spreadsheets with a streamlined RSVP dashboard. Guests respond in one tap — you see everything in real time. Custom questions, dietary needs, plus-one tracking, and instant notifications keep you effortlessly organized.",
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
  },
  {
    id: "analytics",
    emoji: "◈",
    title: "Guest Analytics",
    tagline: "Know your crowd before they arrive.",
    description:
      "Real-time insights into your guest list turn guesswork into confidence. See who opened the invite, who's confirmed, who hasn't responded, and what dietary preferences you need to plan for — all in one clean dashboard designed for event hosts.",
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
  },
  {
    id: "delivery",
    emoji: "➤",
    title: "Instant Delivery",
    tagline: "Reach everyone with a single click.",
    description:
      "Send your invite to hundreds of guests simultaneously through their preferred channel — WhatsApp, email, or a shareable link they can forward. No app installs required for guests. Works perfectly on every device, operating system, and browser.",
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
  },
];

const steps = [
  {
    step: "01",
    title: "Pick Your Template",
    desc: "Browse our curated gallery of premium animated e-invite templates. Filter by wedding, birthday, corporate, and more.",
  },
  {
    step: "02",
    title: "Personalize It",
    desc: "Share your event details — names, dates, venue, schedule. Our team customizes every element to match your vision.",
  },
  {
    step: "03",
    title: "Send & Celebrate",
    desc: "Share via WhatsApp, email, or link. Track RSVPs in real time and walk into your event fully prepared.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Navbar strip ─────────────────────────────────────── */}
      <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-headline-md font-syne font-bold tracking-tight text-primary-container"
          >
            InviteStash
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Ambient blobs */}
        <div
          aria-hidden
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #007a94, transparent)" }}
        />
        <div
          aria-hidden
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #cb00b6, transparent)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-container/10 border border-primary-container/20 rounded-full px-4 py-1.5 text-label-sm text-primary-container mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse inline-block" />
            Everything you need to host effortlessly
          </div>
          <h1 className="text-5xl md:text-6xl font-syne font-bold text-on-surface leading-tight mb-6">
            Services Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #007a94, #00d2fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modern Events
            </span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            From the moment you pick a template to the day your guests arrive —
            InviteStash handles every detail with elegance and precision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#gallery"
              className="gradient-btn px-8 py-3.5 rounded-full text-label-md flex items-center gap-2"
            >
              Browse Templates
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#services-list"
              className="px-8 py-3.5 rounded-full text-label-md border border-outline-variant/50 text-on-surface hover:bg-surface-container-low transition-colors"
            >
              Explore Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Services List ─────────────────────────────────────── */}
      <section id="services-list" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-8">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={`service-${svc.id}`}
              className="relative rounded-3xl border border-outline-variant/30 bg-surface-container-low overflow-hidden group"
              style={{ boxShadow: `0 0 60px ${svc.glowColor}` }}
            >
              {/* Glow bg */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse at ${i % 2 === 0 ? "top left" : "top right"}, ${svc.glowColor} 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left — info */}
                <div className="p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    {svc.badge && (
                      <span
                        className="inline-block text-label-sm font-semibold px-3 py-1 rounded-full mb-5"
                        style={{
                          background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                          color: "#fff",
                        }}
                      >
                        {svc.badge}
                      </span>
                    )}

                    {/* Emoji icon */}
                    <div
                      className="text-4xl font-bold mb-4 leading-none"
                      style={{
                        background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {svc.emoji}
                    </div>

                    <h2 className="text-3xl font-syne font-bold text-on-surface mb-2">
                      {svc.title}
                    </h2>
                    <p
                      className="text-label-md font-medium mb-5"
                      style={{
                        background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {svc.tagline}
                    </p>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <Link
                    href="/#gallery"
                    className="mt-8 inline-flex items-center gap-2 text-label-md font-semibold group/link w-fit"
                    style={{
                      background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Get Started
                    <svg
                      className="group-hover/link:translate-x-1 transition-transform"
                      style={{ color: svc.accentTo }}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Right — feature list */}
                <div
                  className="p-10 lg:p-14 lg:border-l border-outline-variant/20"
                  style={{
                    background: `linear-gradient(135deg, ${svc.glowColor}, transparent)`,
                  }}
                >
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-6 font-semibold">
                    What&apos;s included
                  </p>
                  <ul className="space-y-4">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                          }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeLinecap="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-body-md text-on-surface">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="bg-surface-container-low border-t border-outline-variant/20 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-on-surface mb-4">
              How It Works
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
              From zero to a stunning digital invitation in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line — desktop only */}
            <div
              aria-hidden
              className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, #007a94, #00d2fd, transparent)",
              }}
            />

            {steps.map((s) => (
              <div key={s.step} className="relative text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-xl font-syne font-bold text-white relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #007a94, #00d2fd)",
                  }}
                >
                  {s.step}
                </div>
                <h3 className="text-headline-md font-syne text-on-surface mb-3">
                  {s.title}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006075 0%, #007a94 50%, #00677e 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30"
            style={{ background: "#00d2fd" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "#cb00b6" }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
              Ready to create your invite?
            </h2>
            <p className="text-body-md text-white/70 max-w-xl mx-auto mb-10">
              Join hundreds of couples, families, and event planners who trust
              InviteStash for their most important moments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#gallery"
                className="bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-label-md hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Browse Templates
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/"
                className="border border-white/30 text-white px-8 py-3.5 rounded-full text-label-md hover:bg-white/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ─────────────────────────────────────── */}
      <footer className="border-t border-outline-variant/20 py-8 px-6 text-center">
        <p className="text-body-sm text-on-surface-variant">
          © 2025 InviteStash. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
