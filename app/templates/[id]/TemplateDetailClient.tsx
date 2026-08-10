"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Template } from "@/data/templates";

const journeySteps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Instant Delivery",
    color: "text-primary-container",
    borderHover: "group-hover:border-primary-container",
    title: "Arrival",
    desc: "The journey begins with a pulse in their pocket. A high-contrast notification that signals something extraordinary is about to happen.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
      </svg>
    ),
    label: "Custom Music & Map",
    color: "text-tertiary",
    borderHover: "group-hover:border-tertiary",
    title: "Atmosphere",
    desc: "As the link opens, the room shifts. Synchronized audio and vibrant aesthetics create an immediate sensory immersion.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    label: "RSVP Intelligence",
    color: "text-secondary",
    borderHover: "group-hover:border-secondary",
    title: "Connection",
    desc: "Confirmation with a single tap. The excitement builds as they join a curated circle, tracked in real-time for your perfect hosting.",
  },
];

interface Props {
  template: Template;
  related: Template[];
}

export default function TemplateDetailClient({ template, related }: Props) {
  const router = useRouter();
  const mockupRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLElement[]>([]);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (mockupRef.current) {
        mockupRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px) rotate(${3 + x * 5}deg)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-active")),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal-el").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <style>{`
        .reveal-el {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-el.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
        .glass-card {
          background: rgba(255,255,255,0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .hero-glow {
          filter: blur(120px);
        }
      `}</style>

      <Navbar />

      <main>
        {/* ── Immersive Hero ──────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
          {/* Hero glow bg */}
          <div
            ref={glowRef}
            aria-hidden
            className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${template.accentColor}25 0%, rgba(203,0,182,0.08) 100%)`,
            }}
          />

          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center relative gap-12">
            {/* Left: Text */}
            <div className="w-full md:w-3/5 z-20">
              {/* Breadcrumb */}
              <div className="reveal-el flex items-center gap-2 text-label-sm text-on-surface-variant mb-6">
                <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
                <span>/</span>
                <Link href="/#gallery" className="hover:text-on-surface transition-colors">Gallery</Link>
                <span>/</span>
                <span className="text-on-surface">{template.name}</span>
              </div>

              <div className="reveal-el flex flex-col gap-1 mb-5">
                <span className="text-label-md text-secondary-container tracking-[0.3em] uppercase">
                  {template.tag}
                </span>
                <h1 className="font-syne font-extrabold text-[clamp(3rem,10vw,7rem)] leading-[0.9] text-on-surface">
                  {template.name}
                </h1>
              </div>

              <p className="reveal-el text-body-lg text-on-surface-variant max-w-lg mb-10">
                {template.description ?? `${template.style} — a premium animated digital invitation crafted for your most important moments.`}
              </p>

              {/* Price + CTAs */}
              <div className="reveal-el flex flex-col gap-6">
                <div>
                  <span className="text-label-sm text-secondary tracking-widest uppercase block mb-1">
                    {template.category} Invitation
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-syne font-bold text-4xl text-primary">
                      {template.displayPrice ?? template.price}
                    </span>
                    <span className="text-label-sm text-outline line-through opacity-60">
                      {/* show ~40% higher as strike-through */}
                      {template.displayPrice
                        ? template.displayPrice.replace(/[\d,]+/, (n) => Math.round(Number(n.replace(/,/g, "")) * 1.4).toLocaleString("en-IN"))
                        : ""}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    className="group bg-on-surface text-background px-8 py-4 rounded-full font-syne font-semibold text-lg flex items-center gap-3 hover:bg-primary transition-all shadow-2xl"
                    onClick={() => {
                      // contact / order action
                    }}
                  >
                    Claim this Invite
                    <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  {template.liveUrl && (
                    <a
                      href={template.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full font-syne font-semibold text-lg flex items-center gap-2 text-on-surface border border-outline-variant hover:bg-surface-container-low transition-all"
                    >
                      View Demo
                    </a>
                  )}

                  <button className="px-8 py-4 rounded-full font-syne font-semibold text-lg flex items-center gap-2 text-secondary border border-secondary/30 hover:bg-secondary/10 transition-all">
                    Inquiry Now
                  </button>
                </div>
              </div>

              {/* Social proof */}
              <div className="reveal-el mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "https://i.pravatar.cc/40?img=1",
                    "https://i.pravatar.cc/40?img=2",
                    "https://i.pravatar.cc/40?img=3",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                  ))}
                </div>
                <span className="text-label-sm text-on-surface-variant/70 uppercase tracking-widest">
                  2,400+ Curators Joined
                </span>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0">
              <div className="relative group">
                <div
                  className="absolute -inset-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px]"
                  style={{ background: `${template.accentColor}40` }}
                />
                {/* Phone frame */}
                <div
                  ref={mockupRef}
                  className="relative z-10 glass-card p-4 rounded-[4rem] shadow-2xl"
                  style={{ transform: "rotate(3deg)", transition: "transform 0.1s ease-out" }}
                >
                  <div className="w-full max-w-[300px] aspect-[9/19] relative rounded-[3rem] overflow-hidden shadow-inner">
                    <Image
                      src={template.imageSrc}
                      alt={template.imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-10 -left-16 glass-card p-4 rounded-2xl shadow-xl hidden lg:block animate-bounce" style={{ animationDuration: "4s" }}>
                  <svg className="text-secondary-container mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                  </svg>
                  <p className="text-label-sm text-on-surface whitespace-nowrap">Integrated Audio Flow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Digital Journey ─────────────────────────── */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="reveal-el text-center mb-24">
              <span className="text-label-md text-primary-container tracking-[0.4em] uppercase mb-4 block">
                The Guest Sequence
              </span>
              <h2 className="font-syne font-bold text-5xl md:text-7xl text-on-surface">
                The Digital Journey
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Connector line */}
              <div aria-hidden className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-outline-variant/20 -z-10" />

              {journeySteps.map((step, i) => (
                <div
                  key={step.title}
                  className="reveal-el flex flex-col items-center text-center group"
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-background border border-outline-variant/30 flex items-center justify-center mb-6 ${step.borderHover} group-hover:scale-110 transition-all duration-500 shadow-sm glass-card ${step.color}`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-syne font-semibold text-2xl text-on-surface mb-4">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant max-w-xs italic">{step.desc}</p>
                  <div className={`mt-4 text-label-sm ${step.color} uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Highlights / What's Included ─────────────────── */}
        {template.highlights && template.highlights.length > 0 && (
          <section className="py-24 px-6 bg-surface-container-low/50 border-t border-outline-variant/10">
            <div className="max-w-7xl mx-auto">
              <div className="reveal-el mb-16">
                <span className="text-label-md text-on-surface-variant tracking-[0.3em] uppercase block mb-4">What&apos;s Included</span>
                <h2 className="font-syne font-bold text-5xl text-on-surface">Everything you need.</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {template.highlights.map((h, i) => (
                  <div
                    key={h}
                    className="reveal-el glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                      style={{ background: template.accentColor }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-body-md text-on-surface font-medium">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Curated Discovery (Related) ──────────────────── */}
        {related.length > 0 && (
          <section className="py-32 bg-surface-container-low/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="reveal-el flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
                <div className="max-w-xl">
                  <span className="text-label-md text-on-surface-variant tracking-[0.3em] uppercase block mb-4">The Catalog</span>
                  <h2 className="font-syne font-bold text-5xl text-on-surface">Curated Discovery</h2>
                  <p className="text-body-lg text-on-surface-variant mt-4">
                    Beyond this invite, discover other realms of digital elegance for your distinct vision.
                  </p>
                </div>
                <Link
                  href="/#gallery"
                  className="group text-label-md text-on-surface flex items-center gap-3 border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all"
                >
                  EXPLORE THE ARCHIVE
                  <svg className="group-hover:translate-x-2 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Asymmetric grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Large card */}
                {related[0] && (
                  <div
                    className="reveal-el md:col-span-7 group cursor-pointer"
                    style={{ transitionDelay: "100ms" }}
                    onClick={() => router.push(`/templates/${related[0].id}`)}
                  >
                    <div className="overflow-hidden rounded-3xl aspect-[16/10] relative mb-5">
                      <Image src={related[0].imageSrc} alt={related[0].imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-label-sm uppercase tracking-widest">{related[0].category}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-syne font-semibold text-2xl text-on-surface">{related[0].name}</h4>
                        <p className="text-label-md text-on-surface-variant mt-1">{related[0].style} &amp; {related[0].displayPrice ?? related[0].price}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tall card */}
                {related[1] && (
                  <div
                    className="reveal-el md:col-span-5 md:mt-12 group cursor-pointer"
                    style={{ transitionDelay: "300ms" }}
                    onClick={() => router.push(`/templates/${related[1].id}`)}
                  >
                    <div className="overflow-hidden rounded-3xl aspect-[4/5] relative mb-5">
                      <Image src={related[1].imageSrc} alt={related[1].imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div>
                      <h4 className="font-syne font-semibold text-2xl text-on-surface">{related[1].name}</h4>
                      <p className="text-label-md text-on-surface-variant mt-1">{related[1].style} &amp; {related[1].displayPrice ?? related[1].price}</p>
                    </div>
                  </div>
                )}

                {/* Square card */}
                {related[2] && (
                  <div
                    className="reveal-el md:col-span-4 md:-mt-24 group cursor-pointer"
                    style={{ transitionDelay: "500ms" }}
                    onClick={() => router.push(`/templates/${related[2].id}`)}
                  >
                    <div className="overflow-hidden rounded-3xl aspect-square relative mb-5">
                      <Image src={related[2].imageSrc} alt={related[2].imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div>
                      <h4 className="font-syne font-semibold text-2xl text-on-surface">{related[2].name}</h4>
                      <p className="text-label-md text-on-surface-variant mt-1">{related[2].style} &amp; {related[2].displayPrice ?? related[2].price}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
