const SERVICES = [
  {
    bg: "#EAF2FB",
    iconBg: "#DDEBF8",
    iconColor: "#4A90D9",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Lead Generation",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
  },
  {
    bg: "#F1ECFB",
    iconBg: "#E6DEF7",
    iconColor: "#7C4DFF",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="12" y2="16" />
      </svg>
    ),
    title: "Intake Services",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
  },
  {
    bg: "#E8F4F0",
    iconBg: "#D5EDE4",
    iconColor: "#2A9D8F",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
    title: "Case Acquisition",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
  },
  {
    bg: "#F5EFE0",
    iconBg: "#EFE5C8",
    iconColor: "#B8860B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "AI Booking",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
  },
];

export default function ServicesSection({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section style={{ background: isDark ? "var(--grad-walnut)" : "var(--ivory)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem,5vw,4rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: isDark ? "var(--gold)" : "var(--charcoal)",
              opacity: isDark ? 1 : 0.65,
              letterSpacing: "0.05em",
              marginBottom: "0.625rem",
            }}
          >
            About YMG - Legal
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3.25rem)",
              fontWeight: 400,
              color: isDark ? "var(--gold)" : "var(--charcoal)",
              lineHeight: 1.15,
            }}
          >
            Full-Funnel Legal Growth Solutions
          </h2>
        </div>

        <div
          className="svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "clamp(0.5rem,1vw,1rem)",
            alignItems: "center",
            paddingBlock: "1.5rem",
          }}
        >
          {SERVICES.map((svc, i) => {
            const tilts = ["-6deg", "-2deg", "2deg", "6deg"];
            const lifts = ["18px", "0px", "0px", "18px"];
            return (
            <div
              key={svc.title}
              className="svc-card"
              style={{
                background: "#FFFFFF",
                borderRadius: "1rem",
                padding: "clamp(1.375rem,2vw,1.625rem)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
                transform: `rotate(${tilts[i]}) translateY(${lifts[i]})`,
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0.625rem",
                  background: isDark ? "transparent" : svc.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  color: isDark ? "var(--charcoal)" : svc.iconColor,
                }}
              >
                {svc.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  marginBottom: "0.625rem",
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  color: "var(--charcoal)",
                  opacity: 0.7,
                }}
              >
                {svc.desc}
              </p>
            </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2,1fr) !important; }
          .svc-card { transform: none !important; }
        }
        @media (max-width: 540px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
