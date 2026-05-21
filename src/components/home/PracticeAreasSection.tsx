/* Design: white horizontal bar, 5 items in a row separated by vertical dividers,
   each item has a small icon on the left + text label */

const AREAS = [
  {
    label: "Mass\nTorts",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    label: "Personal\nInjury",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: "Tylenol Pregnancy\nLawsuits",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    label: "Hair Relaxer\nCancer Lawsuit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    label: "Talcum Powder\nLawsuits",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
];

export default function PracticeAreasSection() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem,4vw,3.5rem)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.06em", marginBottom: "0.625rem" }}>
            What We Serve
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 400, color: "var(--text-dark)" }}>
            Practice Areas We <em style={{ fontStyle: "italic" }}>Specialize in</em>
          </h2>
        </div>

        {/* White bar with 5 items + vertical dividers */}
        <div style={{
          background: "var(--white)",
          borderRadius: "0.875rem",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          border: "1px solid rgba(201,168,76,0.1)",
          display: "flex",
          alignItems: "stretch",
          overflow: "hidden",
        }}>
          {AREAS.map((area, i) => (
            <div key={area.label} style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "clamp(1.125rem,2vw,1.625rem) clamp(0.875rem,1.5vw,1.375rem)",
              borderRight: i < AREAS.length - 1 ? "1px solid rgba(201,168,76,0.18)" : "none",
            }}>
              <div style={{ flexShrink: 0 }}>{area.icon}</div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.75rem,1vw,0.875rem)",
                fontWeight: 600,
                color: "var(--text-dark)",
                lineHeight: 1.35,
                whiteSpace: "pre-line",
              }}>
                {area.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .practice-bar { flex-direction: column !important; }
          .practice-bar > div { border-right: none !important; border-bottom: 1px solid rgba(201,168,76,0.18); }
          .practice-bar > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
