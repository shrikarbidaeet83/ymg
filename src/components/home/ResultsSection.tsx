/* Design: ivory bg section, with a dark charcoal ROUNDED RECTANGLE card
   containing the title, then gold stats below it on the ivory bg */

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
          borderRadius: "1.25rem",
          padding: "clamp(2rem,4vw,3rem) clamp(2rem,5vw,4rem)",
          marginBottom: "clamp(2rem,4vw,3.5rem)",
          textAlign: "center",
        }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--gold)", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            Case Results
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem,4vw,3rem)",
            fontWeight: 400,
            color: "var(--ivory)",
            lineHeight: 1.1,
          }}>
            Real Results,{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Real Impact.</em>
          </h2>
        </div>

        {/* Stats — on ivory background, below the card */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "clamp(1rem,2vw,1.5rem) 1rem",
              borderRight: i < 3 ? "1px solid rgba(0,0,0,0.08)" : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.5rem,3.5vw,2.25rem)",
                fontWeight: 800,
                color: "var(--gold)",
                lineHeight: 1.1,
                marginBottom: "0.3rem",
              }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--text-mid)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Thin dark bottom rule */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginTop: "clamp(1rem,2vw,1.5rem)" }}/>
      </div>

      <style>{`
        @media (max-width: 640px) { .results-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
