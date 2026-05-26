const STATS = [
  { value: "$2.3M+",  label: "Case Value Generated" },
  { value: "25,000+", label: "Qualified Leads Delivered" },
  { value: "500+",    label: "Cases Signed" },
  { value: "98%",     label: "Client Retention Rate" },
];

export default function ResultsSection() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <div
          style={{
            background: "var(--grad-walnut)",
            borderRadius: "1.5rem",
            padding: "clamp(2.5rem,5vw,4rem) clamp(2rem,5vw,4rem)",
            marginBottom: "clamp(2rem,4vw,3rem)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--gold)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Case Results
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3.25rem)",
              fontWeight: 400,
              color: "var(--ivory)",
              lineHeight: 1.1,
            }}
          >
            Real Results, Real Impact.
          </h2>
        </div>

        <div
          className="results-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "clamp(1rem,2vw,1.75rem) 1rem",
                borderRight: i < 3 ? "1px solid rgba(64,64,64,0.12)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.625rem,3.5vw,2.5rem)",
                  fontWeight: 800,
                  color: "var(--gold-deep)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--charcoal)",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .results-grid { grid-template-columns: repeat(2,1fr) !important; }
          .results-grid > div:nth-child(2) { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
