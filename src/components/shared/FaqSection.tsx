"use client";

import { useState } from "react";

const DEFAULT_FAQS = [
  {
    q: "What services does YMG Legal provide?",
    a: "We provide full-service legal marketing and intake — including lead generation, intake services, AI booking, contract & retainer services, and outbound acquisition campaigns.",
  },
  {
    q: "How does YMG Legal help law firms grow?",
    a: "We generate qualified leads, optimize intake processes, and improve conversion rates to help firms secure more signed cases.",
  },
  {
    q: "What types of law firms do you work with?",
    a: "We work with personal injury firms, mass tort practices, and other plaintiff-side legal practices across the United States.",
  },
  {
    q: "How can I get started with YMG Legal?",
    a: "Book a free strategy call from our Contact page. We'll review your firm's goals and design a custom acquisition plan.",
  },
  {
    q: "Do you provide exclusive leads?",
    a: "Yes — all leads delivered through our partnerships are exclusive to your firm and never shared with competitors.",
  },
];

export default function FaqSection({
  faqs = DEFAULT_FAQS,
  showEyebrow = true,
}: {
  faqs?: { q: string; a: string }[];
  showEyebrow?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <div
          className="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "start",
          }}
        >
          <div>
            {showEyebrow && (
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--charcoal)",
                  opacity: 0.7,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.875rem",
                }}
              >
                Frequently Asked Questions
              </p>
            )}
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
                fontWeight: 400,
                color: "var(--charcoal)",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Frequently Asked<br />
              Questions
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--charcoal)",
                opacity: 0.75,
                lineHeight: 1.7,
                maxWidth: "360px",
              }}
            >
              Find answers to common questions about our legal marketing
              services, intake solutions, lead generation process, and how we
              help law firms grow with qualified cases and measurable results.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(216,178,107,0.25)",
                    borderRadius: "0.625rem",
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      textAlign: "left",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                    }}
                  >
                    <span>{item.q}</span>
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.25rem 1.125rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: "var(--charcoal)",
                        opacity: 0.75,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
