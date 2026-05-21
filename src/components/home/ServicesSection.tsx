/* Design: ivory bg, 4 white cards slightly tilted/rotated, each with a
   colored rounded-square icon background (blue, purple, teal, cream/tan) */

const SERVICES = [
  {
    iconBg: "#DDEEFF",  // light blue
    iconColor: "#4A90D9",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Lead Generation",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
    rotate: "-3deg",
  },
  {
    iconBg: "#EDE9FE",  // light purple
    iconColor: "#7C4DFF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/>
      </svg>
    ),
    title: "Intake Services",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
    rotate: "-1deg",
  },
  {
    iconBg: "#D4F5EC",  // light teal/mint
    iconColor: "#2A9D8F",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Case Acquisition",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
    rotate: "1deg",
  },
  {
    iconBg: "#F5EDD4",  // cream/tan
    iconColor: "#B8860B",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8l2 2 4-4"/>
      </svg>
    ),
    title: "AI Booking",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
    rotate: "3deg",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        background: "var(--ivory)",
        paddingBlock: "var(--section-py)",
      }}
    >
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem,5vw,4.5rem)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.06em", marginBottom: "0.75rem" }}>
            About YMG - Legal
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            fontWeight: 400,
            color: "var(--text-dark)",
            lineHeight: 1.15,
          }}>
            Full-Funnel Legal Growth Solutions
          </h2>
        </div>

        {/* 4 tilted cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "clamp(0.875rem,2vw,1.5rem)",
            alignItems: "start",
          }}
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              style={{
                background: "var(--white)",
                borderRadius: "1.125rem",
                padding: "clamp(1.25rem,2.5vw,1.75rem)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                transform: `rotate(${svc.rotate})`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Colored icon square */}
              <div
                style={{
                  width: "52px", height: "52px",
                  borderRadius: "0.875rem",
                  background: svc.iconBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.125rem",
                  color: svc.iconColor,
                }}
              >
                {svc.icon}
              </div>

              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "var(--text-dark)",
                marginBottom: "0.625rem",
              }}>
                {svc.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.825rem",
                lineHeight: 1.65,
                color: "var(--text-mid)",
              }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
