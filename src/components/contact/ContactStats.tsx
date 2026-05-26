const STATS = [
  { label: "15+ Years\nExperience" },
  { label: "Millions in Case\nValue Generated" },
  { label: "Trusted by\n100+ Law Firms" },
  { label: "Las Vegas\nBased" },
];

export default function ContactStats() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(2rem,3vw,2.75rem)" }}>
      <div className="wrap">
        <div
          className="contact-stats"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(216,178,107,0.3)",
            borderRadius: "0.75rem",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "1.125rem 1.25rem",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(216,178,107,0.2)" : "none",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                whiteSpace: "pre-line",
                lineHeight: 1.4,
              }}
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-stats { grid-template-columns: 1fr 1fr !important; }
          .contact-stats > div:nth-child(2) { border-right: none !important; }
          .contact-stats > div:nth-child(1), .contact-stats > div:nth-child(2) {
            border-bottom: 1px solid rgba(216,178,107,0.2);
          }
        }
        @media (max-width: 540px) {
          .contact-stats { grid-template-columns: 1fr !important; }
          .contact-stats > div { border-right: none !important; border-bottom: 1px solid rgba(216,178,107,0.2) !important; }
          .contact-stats > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
