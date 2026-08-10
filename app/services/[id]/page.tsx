import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getServiceById } from "@/data/services";
import Navbar from "../../components/Navbar";

// Required for static export — pre-generate all 4 service pages
export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const svc = getServiceById(id);
  if (!svc) return { title: "Service Not Found — InviteStash" };
  return {
    title: `${svc.title} — InviteStash Services`,
    description: svc.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const svc = getServiceById(id);
  if (!svc) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden
          className="absolute -top-32 left-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${svc.accentTo}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="absolute -top-10 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${svc.accentFrom}, transparent)`,
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-8">
            <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-on-surface transition-colors">Services</Link>
            <span>/</span>
            <span className="text-on-surface">{svc.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — title block */}
            <div>
              {svc.badge && (
                <span
                  className="inline-block text-label-sm font-bold px-3 py-1 rounded-full mb-5 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                  }}
                >
                  {svc.badge}
                </span>
              )}

              {/* Big icon */}
              <div
                className="text-6xl font-bold leading-none mb-5"
                style={{
                  background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {svc.emoji}
              </div>

              <h1 className="text-4xl md:text-5xl font-syne font-bold text-on-surface mb-3 leading-tight">
                {svc.title}
              </h1>
              <p
                className="text-lg font-medium mb-5"
                style={{
                  background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {svc.tagline}
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {svc.longDescription}
              </p>

              <div className="flex gap-3 mt-8 flex-wrap">
                <a
                  href="#pricing"
                  className="gradient-btn px-7 py-3 rounded-full text-label-md flex items-center gap-2"
                >
                  View Pricing
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/services"
                  className="px-7 py-3 rounded-full text-label-md border border-outline-variant/50 text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  Other Services
                </Link>
              </div>
            </div>

            {/* Right — features card */}
            <div
              className="rounded-3xl border border-outline-variant/30 p-8 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${svc.glowColor}, transparent)`,
                boxShadow: `0 0 60px ${svc.glowColor}`,
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
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-body-md text-on-surface">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6 border-t border-outline-variant/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-on-surface mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
              Choose the plan that fits your event. No hidden fees, no subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {svc.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "border-transparent scale-[1.03]"
                    : "border-outline-variant/30 bg-surface-container-low hover:border-outline-variant/60"
                }`}
                style={
                  plan.highlight
                    ? {
                        background: `linear-gradient(160deg, ${svc.glowColor}, rgba(255,255,255,0.02))`,
                        boxShadow: `0 0 60px ${svc.glowColor}, 0 0 0 1px ${svc.accentFrom}40`,
                      }
                    : {}
                }
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-label-sm font-bold px-4 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                    }}
                  >
                    ★ Most Chosen
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-label-md text-on-surface-variant font-semibold mb-1">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-syne font-bold text-on-surface">{plan.price}</span>
                    {plan.period && (
                      <span className="text-body-sm text-on-surface-variant mb-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-body-sm text-on-surface-variant">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-on-surface">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full text-label-md font-semibold transition-all duration-200 ${
                    plan.highlight
                      ? "text-white shadow-md hover:opacity-90"
                      : "hover:bg-primary/10"
                  }`}
                  style={
                    plan.highlight
                      ? {
                          background: `linear-gradient(135deg, ${svc.accentFrom}, ${svc.accentTo})`,
                        }
                      : {
                          border: `1.5px solid ${svc.accentFrom}50`,
                          color: svc.accentFrom,
                        }
                  }
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-syne font-bold text-on-surface mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {svc.faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-outline-variant/30 bg-surface p-6"
              >
                <p className="text-label-md font-semibold text-on-surface mb-2">{item.q}</p>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ───────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-outline-variant/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-syne font-bold text-on-surface mb-8 text-center">
            Explore Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services
              .filter((s) => s.id !== svc.id)
              .map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.id}`}
                  className="group rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 hover:border-outline-variant/60 transition-all duration-200 hover:shadow-lg"
                >
                  <div
                    className="text-2xl font-bold mb-3"
                    style={{
                      background: `linear-gradient(135deg, ${other.accentFrom}, ${other.accentTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {other.emoji}
                  </div>
                  <h3 className="text-label-md font-semibold text-on-surface mb-1">{other.title}</h3>
                  <p className="text-body-sm text-on-surface-variant">{other.tagline}</p>
                  <div
                    className="mt-4 text-label-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: other.accentTo }}
                  >
                    View details →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${svc.accentFrom} 0%, ${svc.accentTo} 100%)`,
          }}
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "#fff" }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-syne font-bold text-white mb-3">
              Ready to get started?
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8 text-body-md">
              Browse our template gallery and we&apos;ll set up {svc.title.toLowerCase()} for your event.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#gallery"
                className="bg-white font-semibold px-8 py-3.5 rounded-full text-label-md hover:bg-white/90 transition-colors flex items-center gap-2"
                style={{ color: svc.accentFrom }}
              >
                Browse Templates
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-3.5 rounded-full text-label-md hover:bg-white/10 transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-outline-variant/20 py-8 px-6 text-center">
        <p className="text-body-sm text-on-surface-variant">
          © 2025 InviteStash. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
