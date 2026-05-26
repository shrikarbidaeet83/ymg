const STEPS = [
  {
    title: "Leads",
    desc: "We connect law firms with high-intent leads actively seeking legal help.",
  },
  {
    title: "Qualification",
    desc: "We verify lead quality and gather important case details.",
  },
  {
    title: "Intake",
    desc: "Qualified inquiries are routed directly to your team or CRM.",
  },
  {
    title: "Signed Cases",
    desc: "More signed cases — our process is built to maximize results.",
  },
];

export default function ConversionJourney() {
  return (
    <section style={{ background: "var(--grad-walnut)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem,4vw,3.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--gold)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Quality Prospects, Better Conversions
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
              fontWeight: 400,
              color: "var(--gold)",
              lineHeight: 1.15,
            }}
          >
            The Conversion Journey
          </h2>
        </div>

        <div
          className="journey-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1.25rem",
            position: "relative",
          }}
        >
          {STEPS.map((s, i) => (
            <div key={s.title} style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "var(--grad-gold)",
                  color: "var(--walnut)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  boxShadow: "0 4px 14px rgba(216,178,107,0.4)",
                }}
              >
                {i + 1}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,245,224,0.75)",
                  lineHeight: 1.65,
                  maxWidth: "200px",
                  marginInline: "auto",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
