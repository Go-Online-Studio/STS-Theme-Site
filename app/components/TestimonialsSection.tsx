const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Wedding Planner",
    quote:
      "InviteStash turned a standard RSVP process into a premium experience. My clients are absolutely obsessed!",
    color: "text-primary",
    bg: "bg-primary-container/10",
  },
  {
    id: 2,
    name: "Marcus K.",
    role: "Birthday Host",
    quote:
      "The modern aesthetic perfectly matched my 30th birthday vibe. It's not just an invite, it's a mood.",
    color: "text-secondary",
    bg: "bg-secondary-container/10",
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Corporate Events",
    quote:
      "Finally, a way to make corporate mixers feel exciting. The tracking features are a total game-changer.",
    color: "text-tertiary",
    bg: "bg-tertiary-container/5",
  },
  {
    id: 4,
    name: "David L.",
    role: "Gala Organizer",
    quote:
      "The interactive elements are stunning. It's the first time guests actually complimented the invitation!",
    color: "text-primary-container",
    bg: "bg-primary/5",
  },
  {
    id: 5,
    name: "Liam M.",
    role: "Event Coordinator",
    quote:
      "The easiest way to create a digital invite I've ever used. The RSVP tracking is a complete lifesaver.",
    color: "text-primary",
    bg: "bg-primary-container/10",
  },
  {
    id: 6,
    name: "Chloe W.",
    role: "Bride-to-be",
    quote:
      "Our wedding website looked like it cost thousands, but it was done in under 10 minutes. Obsessed!",
    color: "text-secondary",
    bg: "bg-secondary-container/10",
  },
  {
    id: 7,
    name: "Rohan S.",
    role: "Tech Lead",
    quote:
      "Clean performance, beautiful UI, and great accessibility. This is the future of event planning.",
    color: "text-tertiary",
    bg: "bg-tertiary-container/5",
  },
  {
    id: 8,
    name: "Priya N.",
    role: "Baby Shower Host",
    quote:
      "The Stork & Stars template had all my friends asking where I made it. Could not recommend more!",
    color: "text-primary-container",
    bg: "bg-primary/5",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const initialChar = (name: string) => name[0];

export default function TestimonialsSection() {
  // Duplicate list for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 border-t border-outline-variant/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 scroll-reveal">
        <h2 className="text-headline-lg text-on-surface font-syne">
          What the Vibe-Makers Say
        </h2>
        <p className="text-body-md text-on-surface-variant mt-3">
          Real stories from people redefining digital invites.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="marquee-container relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="animate-marquee gap-5 py-2">
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="testimonial-card bg-surface rounded-2xl p-5 border border-outline-variant/30 ambient-shadow flex flex-col gap-3 animate-bob"
              style={{ animationDelay: `${(i % 7) * 0.5}s` }}
            >
              <Stars />
              <p className="text-body-md text-on-surface-variant italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center ${t.color} font-syne font-bold text-sm`}
                >
                  {initialChar(t.name)}
                </div>
                <div>
                  <p className="text-body-md font-semibold text-on-surface leading-tight">
                    {t.name}
                  </p>
                  <p className="text-label-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
