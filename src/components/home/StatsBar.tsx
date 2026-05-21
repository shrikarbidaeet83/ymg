const stats = [
  { value: "Las Vegas", label: "Based" },
  { value: "15+", label: "Years Experience" },
  { value: "Millions", label: "in Case Value Generated" },
  { value: "100+", label: "Trusted Law Firms" },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background: "var(--walnut)",
        borderTop: "1px solid rgba(233,199,128,0.15)",
        borderBottom: "1px solid rgba(233,199,128,0.15)",
        paddingBlock: "clamp(1.5rem,3vw,2.5rem)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--inner-gap)",
            textAlign: "center",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                paddingInline: "1rem",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(233,199,128,0.15)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Noto Serif, serif",
                  fontSize: "clamp(1.25rem,2.5vw,2rem)",
                  fontWeight: 700,
                  color: "var(--champagne-gold)",
                  marginBottom: "0.2rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "clamp(0.75rem,1.2vw,0.875rem)",
                  color: "var(--ivory-glow)",
                  opacity: 0.72,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
