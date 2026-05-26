export default function HowHero() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(3rem,5vw,5rem)", overflow: "hidden" }}>
      <div className="wrap">
        <div
          className="how-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "clamp(2rem,5vw,4rem)",
            alignItems: "center",
          }}
        >
          <div>
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
              How It Works
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem,4.5vw,3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginBottom: "1.25rem",
              }}
            >
              From Lead to<br />
              Signed Cases
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--charcoal)",
                opacity: 0.8,
                lineHeight: 1.7,
                maxWidth: "440px",
              }}
            >
              A simple process designed to help law firms capture, qualify, and
              convert more cases efficiently.
            </p>
          </div>

          {/* floating lead cards */}
          <div style={{ position: "relative", minHeight: "320px" }}>
            <LeadCard
              style={{ top: "0%", left: "0%" }}
              title="New Qualified Lead"
              subtitle="Motor Vehicle Accident"
              location="Los Angeles, CA"
              tag="High Intent"
              tagColor="#2A9D8F"
            />
            <LeadCard
              style={{ top: "38%", left: "32%", zIndex: 2 }}
              title="Lead revived"
              subtitle="Qualified"
              location="2 min ago"
              tag="Live Call"
              tagColor="#7C4DFF"
            />
            <LeadCard
              style={{ top: "12%", right: "0%" }}
              title="New Qualified Lead"
              subtitle="High-Intent Leads"
              location="We focus on quality over quantity."
              tag="Qualified"
              tagColor="#D8B26B"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function LeadCard({
  style,
  title,
  subtitle,
  location,
  tag,
  tagColor,
}: {
  style: React.CSSProperties;
  title: string;
  subtitle: string;
  location: string;
  tag: string;
  tagColor: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        background: "#FFFFFF",
        border: "1px solid rgba(216,178,107,0.3)",
        borderRadius: "0.75rem",
        padding: "0.875rem 1rem",
        minWidth: "200px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "var(--charcoal)" }}>{title}</p>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.625rem",
            fontWeight: 700,
            color: "#FFFFFF",
            background: tagColor,
            padding: "0.15rem 0.5rem",
            borderRadius: "999px",
          }}
        >
          {tag}
        </span>
      </div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--charcoal)", opacity: 0.8, marginBottom: "0.2rem" }}>{subtitle}</p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--charcoal)", opacity: 0.55 }}>{location}</p>
    </div>
  );
}
