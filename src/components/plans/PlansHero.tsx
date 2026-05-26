import Link from "next/link";

const PLANS = [
  {
    title: "Call Services",
    desc: "Reduce missed calls, capture every lead and be there for your clients — 24/7/365",
    items: [
      "Office hours and after-hours phone coverage",
      "Live transfer and call routing",
      "Appointment scheduling",
      "Reporting & analytics",
    ],
  },
  {
    title: "Intake Services",
    desc: "Screen potential clients and identify the right cases and opportunities",
    items: [
      "24/7/365 new client intake",
      "Web forms and online leads",
      "Outbound calling",
      "CRM/CMS integration",
      "Large-scale advertising and marketing campaigns",
    ],
    featured: true,
  },
  {
    title: "Contract & Retainer Services",
    desc: "Convert the right inquiries into paying clients",
    items: [
      "Resurrect lost leads",
      "Scheduled call-backs",
      "Smart Lead tracking",
      "Personalized welcome email",
      "HIPAA compliant and secure",
    ],
  },
];

export default function PlansHero() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(3rem,5vw,5rem)" }}>
      <div className="wrap">
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.25rem,2.2vw,1.75rem)",
            fontWeight: 400,
            color: "var(--charcoal)",
            textAlign: "center",
            lineHeight: 1.4,
            marginBottom: "clamp(2.5rem,4vw,3.5rem)",
            maxWidth: "880px",
            marginInline: "auto",
          }}
        >
          Our outbound call services are designed to increase your firm&apos;s
          revenue and enhance client engagement. Contact us to learn more.
        </p>

        <div
          className="plans-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "clamp(1.25rem,2vw,1.75rem)",
            alignItems: "stretch",
          }}
        >
          {PLANS.map((p) => (
            <div
              key={p.title}
              style={{
                background: "var(--muted)",
                border: "1px solid rgba(216,178,107,0.3)",
                borderRadius: "1rem",
                padding: "clamp(1.5rem,2.5vw,2rem)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 18px rgba(70,51,15,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.375rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.625rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--charcoal)",
                  opacity: 0.7,
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                {p.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "1.75rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {p.items.map((it) => (
                  <li key={it} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        color: "var(--charcoal)",
                        opacity: 0.85,
                        lineHeight: 1.55,
                      }}
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "2.875rem",
                  paddingInline: "1.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--walnut)",
                  textDecoration: "none",
                  background: "var(--grad-gold)",
                  borderRadius: "0.375rem",
                  boxShadow: "0 2px 10px rgba(216,178,107,0.3)",
                }}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .plans-grid { grid-template-columns: 1fr !important; max-width: 480px; margin-inline: auto; }
        }
      `}</style>
    </section>
  );
}
