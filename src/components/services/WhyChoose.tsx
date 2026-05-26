const REASONS = [
  {
    title: "Never Miss a Lead",
    desc: "24/7 answering support ensures every opportunity is captured.",
  },
  {
    title: "Professional Client Experience",
    desc: "Deliver a reliable and responsive first impression for every caller.",
  },
  {
    title: "Faster Intake Process",
    desc: "Streamlined workflows improve response times and lead handling.",
  },
  {
    title: "Legal Industry Expertise",
    desc: "Specialized support tailored for law firms and legal campaigns.",
  },
];

export default function WhyChoose() {
  return (
    <section style={{ background: "var(--grad-walnut)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
            fontWeight: 400,
            color: "var(--gold)",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "clamp(2.5rem,4vw,3.5rem)",
          }}
        >
          Why Law Firms Choose<br />
          YMG Legal
        </h2>

        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 0,
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          {REASONS.map((r, idx) => (
            <div
              key={r.title}
              className={`why-col why-col-${idx}`}
              style={{
                padding: "0 1.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.375rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(216,178,107,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,245,224,0.78)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                  <polyline points="14 6 4 17 1 14" opacity="0.85" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,245,224,0.7)",
                  lineHeight: 1.65,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-col-0, .why-col-1, .why-col-2 { border-right: 1px solid rgba(216,178,107,0.22); }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2,1fr) !important; row-gap: 2rem !important; }
          .why-col-1 { border-right: none !important; }
        }
        @media (max-width: 540px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-col-0, .why-col-1, .why-col-2 { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
