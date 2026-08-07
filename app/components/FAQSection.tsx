const faqs = [
  {
    id: "send",
    question: "How do I send my invites?",
    answer:
      "You can send invites via email, SMS, or share a direct link through any messaging platform. Our system ensures high deliverability and beautiful link previews on all devices.",
  },
  {
    id: "rsvp",
    question: "Can I track RSVPs in real-time?",
    answer:
      "Yes! Every template includes an integrated RSVP system. Monitor responses, dietary requirements, and custom questions directly from your dashboard, updated live.",
  },
  {
    id: "customize",
    question: "Are the templates customizable?",
    answer:
      "Absolutely. You can customize colors, fonts, layouts, and add your own media to make the design truly yours — all while maintaining the premium structural aesthetics.",
  },
  {
    id: "guests",
    question: "Is there a guest limit?",
    answer:
      "Base plans support up to 500 guests. Enterprise and custom event plans can scale to tens of thousands of recipients effortlessly.",
  },
  {
    id: "refund",
    question: "What is your refund policy?",
    answer:
      "We offer a full refund within 7 days of purchase if you haven't published your invite. Once published and shared, we offer credits towards your next event.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="max-w-3xl mx-auto px-6 py-20 border-t border-outline-variant/30"
    >
      <div className="text-center mb-12 scroll-reveal">
        <h2 className="text-headline-lg text-on-surface font-syne">
          Frequently Asked Questions
        </h2>
        <p className="text-body-md text-on-surface-variant mt-3">
          Everything you need to know. Can&apos;t find an answer? Chat with us.
        </p>
      </div>

      <div className="space-y-3 scroll-reveal">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            id={`faq-${faq.id}`}
            className="group bg-surface-container-low rounded-xl border border-outline-variant/40 overflow-hidden"
          >
            <summary className="flex justify-between items-center text-headline-md text-on-surface cursor-pointer p-5 hover:bg-surface-container transition-colors">
              <span className="text-body-lg font-semibold font-hanken">
                {faq.question}
              </span>
              <svg
                className="accordion-icon shrink-0 ml-4 text-on-surface-variant"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="px-5 pb-5 text-body-md text-on-surface-variant">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
