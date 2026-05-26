const VERTICALS = [
  {
    label: "Personal Injury",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Mass Torts",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    label: "Hair Relaxer Cancer Lawsuit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    label: "Talcum Powder Lawsuits",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Tylenol Pregnancy Lawsuits",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function VerticalsGrid() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(2rem,4vw,3.5rem)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem,3vw,2.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--charcoal)",
              opacity: 0.7,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.625rem",
            }}
          >
            Our Focus, Your Growth
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.15,
            }}
          >
            Case Verticals We Drive
          </h2>
        </div>

        <div
          className="vert-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "1rem",
          }}
        >
          {VERTICALS.map((v) => (
            <div
              key={v.label}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(216,178,107,0.25)",
                borderRadius: "0.875rem",
                padding: "1.5rem 1rem",
                textAlign: "center",
                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.875rem" }}>{v.icon}</div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--charcoal)",
                  lineHeight: 1.35,
                }}
              >
                {v.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vert-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .vert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
