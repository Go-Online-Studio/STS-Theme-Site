"use client";

import Link from "next/link";

const services = [
  {
    id: "design",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Custom Design",
    desc: "Tailor-made aesthetics for your event. Every pixel crafted for impact.",
    accentColor: "text-primary",
    glowColor: "bg-primary-container/10",
    offset: "md:mt-0",
    bg: "bg-surface-container-low",
  },
  {
    id: "rsvp",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
    title: "RSVP Management",
    desc: "Track attendees seamlessly. Custom questions, dietary needs, +1 tracking.",
    accentColor: "text-secondary",
    glowColor: "bg-secondary-container/10",
    offset: "md:mt-10",
    bg: "bg-surface-container",
  },
  {
    id: "analytics",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Guest Analytics",
    desc: "Real-time insights into your guest list. Know who's coming before they arrive.",
    accentColor: "text-tertiary",
    glowColor: "bg-tertiary-container/5",
    offset: "md:mt-5",
    bg: "bg-surface-container",
  },
  {
    id: "delivery",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
    title: "Instant Delivery",
    desc: "Reach everyone with a single click — email, SMS, or shareable link.",
    accentColor: "text-primary-container",
    glowColor: "bg-primary/5",
    offset: "md:mt-14",
    bg: "bg-surface-container-high",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-20 border-t border-outline-variant/30"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left heading */}
        <div className="md:w-1/3 md:pt-4 scroll-reveal">
          <h2 className="text-headline-lg text-on-surface font-syne mb-4">Our Services</h2>
          <p className="text-body-md text-on-surface-variant">
            Everything you need to host effortlessly. Designed for modern event creators
            who care about the experience.
          </p>
          <Link
            href="/services"
            className="gradient-btn mt-8 px-6 py-3 rounded-full text-label-md flex items-center gap-2 w-fit"
          >
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Right grid — staggered, each card links to /services#id */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <Link
              key={svc.id}
              href={`/services#service-${svc.id}`}
              id={`service-${svc.id}`}
              className={`service-card p-6 scroll-reveal ${svc.bg} ${svc.offset} cursor-pointer`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow blob */}
              <div
                aria-hidden
                className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl ${svc.glowColor}`}
              />
              <div className={`${svc.accentColor} mb-4 relative z-10`}>{svc.icon}</div>
              <h3 className="text-headline-md text-on-surface relative z-10 mb-2">
                {svc.title}
              </h3>
              <p className="text-body-md text-on-surface-variant relative z-10">
                {svc.desc}
              </p>
              {/* Arrow hint */}
              <div className={`mt-4 relative z-10 flex items-center gap-1 text-label-sm font-medium ${svc.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                Learn more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
