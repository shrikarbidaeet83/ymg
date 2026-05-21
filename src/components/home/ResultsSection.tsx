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

        {/* Dark rounded rectangle card */}
        <div style={{
          background: "var(--charcoal)",
          borderRadius: "1.5rem",
          padding: "clamp(2.5rem,5vw,4rem) clamp(2rem,5vw,4rem)",
          marginBottom: "clamp(2.5rem,4vw,4rem)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* subtle gold glow in center */}
          <div aria-hidden style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "60%", height: "100%",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}/>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Case Results
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem,4.5vw,3.25rem)",
            fontWeight: 400,
            color: "var(--ivory)",
            lineHeight: 1.1,
          }}>
            Real Results,{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Real Impact.</em>
          </h2>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "clamp(1rem,2vw,1.75rem) 1rem",
              borderRight: i < 3 ? "1px solid rgba(0,0,0,0.08)" : "none",
              textAlign: "left",
            }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.625rem,3.5vw,2.5rem)",
                fontWeight: 800,
                color: "var(--gold)",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.4 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", marginTop: "clamp(1rem,2vw,1.5rem)" }}/>
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
