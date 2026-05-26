const CARDS = [
  {
    iconBg: "#DDEBF8",
    iconColor: "#4A90D9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "24/7 Call Answering",
    desc: "Ensure every inquiry is answered promptly — day or night.",
  },
  {
    iconBg: "#E6DEF7",
    iconColor: "#7C4DFF",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Live Intake Specialists",
    desc: "Professionally trained agents handle legal inquiries with care and accuracy.",
  },
  {
    iconBg: "#D5EDE4",
    iconColor: "#2A9D8F",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Bilingual Support",
    desc: "Provide seamless communication with multilingual answering support.",
  },
  {
    iconBg: "#EFE5C8",
    iconColor: "#B8860B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    title: "Instant Lead Routing",
    desc: "Qualified leads are quickly routed to your intake or legal team.",
  },
];

export default function ServicesIncludes() {
  return (
    <section style={{ background: "var(--grad-walnut)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
            fontWeight: 400,
            color: "var(--gold)",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "clamp(2.5rem,4vw,3.5rem)",
          }}
        >
          What Our Legal Answering<br />
          Services Includes
        </h2>

        <div
          className="svc-inc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1rem",
          }}
        >
          {CARDS.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#FFFFFF",
                borderRadius: "0.875rem",
                padding: "1.5rem",
                boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.625rem",
                  background: c.iconBg,
                  color: c.iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.125rem",
                }}
              >
                {c.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  marginBottom: "0.5rem",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--charcoal)",
                  opacity: 0.7,
                  lineHeight: 1.65,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-inc-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .svc-inc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
