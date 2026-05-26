const FEATURES = [
  {
    title: "High Demand",
    desc: "Consistent, nationwide demand for these case types.",
  },
  {
    title: "Strong ROI",
    desc: "High case value and better returns for your firm.",
  },
  {
    title: "Proven Performance",
    desc: "Data-backed strategies that deliver qualified, ready-to-convert leads.",
  },
  {
    title: "Scalable Campaigns",
    desc: "Built to scale with predictable lead output and results.",
  },
];

export default function WhyVerticals() {
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
            Why These Verticals
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
            Built for High Demand.<br />
            Driven by Results.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "rgba(255,245,224,0.75)",
              marginTop: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginInline: "auto",
            }}
          >
            We focus on case types with high demand, strong economics, and
            proven conversion potential so your firm gets maximum ROI.
          </p>
        </div>

        <div
          className="why-vert-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1.25rem",
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(233,199,128,0.18)",
                borderRadius: "0.875rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,245,224,0.75)",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-vert-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .why-vert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
