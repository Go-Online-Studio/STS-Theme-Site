import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Services — InviteStash",
  description:
    "Explore InviteStash's full suite of services: custom e-invite design, RSVP management, guest analytics, and instant delivery. Everything you need to host effortlessly.",
};

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
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section id="services-list" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.id}`}
              id={`service-${svc.id}`}
              className="relative rounded-3xl border border-outline-variant/30 bg-surface-container-low overflow-hidden group hover:border-outline-variant/60 transition-all duration-300"
              style={{ boxShadow: `0 0 40px ${svc.glowColor}` }}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at top left, ${svc.glowColor} 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    {svc.badge && (
                      <span
                        className="inline-block text-label-sm font-bold px-3 py-1 rounded-full mb-3 text-white"
                        style={{
                          background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                        }}
                      >
                        {svc.badge}
                      </span>
                    )}
                    <div
                      className="text-4xl font-bold leading-none"
                      style={{
                        background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {svc.emoji}
                    </div>
                  </div>
                  {/* Arrow — shows on hover */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      borderColor: `${svc.accentFrom}50`,
                      color: svc.accentTo,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-2xl font-syne font-bold text-on-surface mb-2">{svc.title}</h2>
                <p
                  className="text-label-md font-medium mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {svc.tagline}
                </p>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-6 flex-1">
                  {svc.description}
                </p>

                {/* Features preview — first 3 */}
                <ul className="space-y-2 mb-6">
                  {svc.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-body-sm text-on-surface-variant">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: svc.accentTo }}
                      />
                      {f}
                    </li>
                  ))}
                  <li className="text-body-sm text-on-surface-variant opacity-60">
                    +{svc.features.length - 3} more included…
                  </li>
                </ul>

                {/* CTA row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-label-md font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: svc.accentTo }}
                  >
                    View details & pricing →
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    From {svc.pricing[0].price}
                  </span>
                </div>
              </div>
            </Link>
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
            <div
              aria-hidden
              className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
              style={{
                background: "linear-gradient(to right, transparent, #007a94, #00d2fd, transparent)",
              }}
            />
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-xl font-syne font-bold text-white relative z-10"
                  style={{ background: "linear-gradient(135deg, #007a94, #00d2fd)" }}
                >
                  {s.step}
                </div>
                <h3 className="text-headline-md font-syne text-on-surface mb-3">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #006075 0%, #007a94 50%, #00677e 100%)" }}
        >
          <div aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "#00d2fd" }} />
          <div aria-hidden className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: "#cb00b6" }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
              Ready to create your invite?
            </h2>
            <p className="text-body-md text-white/70 max-w-xl mx-auto mb-10">
              Join hundreds of couples, families, and event planners who trust InviteStash for their most important moments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#gallery" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-label-md hover:bg-white/90 transition-colors flex items-center gap-2">
                Browse Templates
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/" className="border border-white/30 text-white px-8 py-3.5 rounded-full text-label-md hover:bg-white/10 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-outline-variant/20 py-8 px-6 text-center">
        <p className="text-body-sm text-on-surface-variant">© 2025 InviteStash. All rights reserved.</p>
      </footer>
    </div>
  );
}
