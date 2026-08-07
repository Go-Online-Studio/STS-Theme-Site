const them = [
  "Static & lifeless designs",
  "Impossible to track RSVPs",
  "Painful to update details",
  "Gets lost in the chat scroll",
  "No analytics or insights",
];

const us = [
  "Interactive & engaging experiences",
  "Automated custom RSVP system",
  "Instant real-time updates",
  "A memorable dedicated link",
  "Full guest analytics dashboard",
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="max-w-7xl mx-auto px-6 py-20 border-t border-outline-variant/30"
    >
      <div className="text-center mb-14 scroll-reveal">
        <h2 className="text-headline-lg text-on-surface font-syne">The Upgrade is Real</h2>
        <p className="text-body-md text-on-surface-variant mt-3 max-w-xl mx-auto">
          See exactly why thousands of hosts switched to InviteStash.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-reveal">
        {/* Them */}
        <div className="rounded-2xl p-8 bg-surface-container-low border border-outline-variant/30 opacity-80 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.015) 10px, rgba(0,0,0,0.015) 11px)",
            }}
          />
          <div className="flex items-center gap-4 mb-7 relative z-10">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-outline"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3 className="text-headline-md text-outline font-syne">Boring WhatsApp Invites</h3>
          </div>
          <ul className="space-y-4 relative z-10">
            {them.map((item) => (
              <li key={item} className="flex items-center gap-3 text-body-md text-outline">
                <span className="text-error">
                  <XIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Us */}
        <div className="rounded-2xl p-8 bg-surface border border-primary-container/30 relative overflow-hidden ambient-shadow-md">
          {/* Glow */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,253,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="flex items-center gap-4 mb-7 relative z-10">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h3 className="text-headline-md font-syne gradient-text">Our Premium Invites</h3>
          </div>
          <ul className="space-y-4 relative z-10">
            {us.map((item) => (
              <li key={item} className="flex items-center gap-3 text-body-md text-on-surface">
                <span className="text-primary-container">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
