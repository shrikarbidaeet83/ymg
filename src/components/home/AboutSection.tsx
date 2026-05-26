const PILLARS = [
  "Performance-based pricing",
  "Expert intake & qualification",
  "AI-powered call & booking",
  "Compliant & ethical marketing",
];

const METRICS = [
  { value: "+42%",   top: "Conversion Rate",     bot: "Industry Average" },
  { value: "+42%",   top: "Qualified Leads",     bot: "vs last quarter" },
  { value: "$2.3M+", top: "Case Value Generated", bot: "vs last quarter" },
];

export default function AboutSection() {
  return (
    <section
      style={{
        background: "var(--grad-walnut)",
        paddingBlock: "var(--section-py)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--gold)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          About YMG Legal
        </p>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2.5rem,6vw,6rem)",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem,4vw,3.25rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--ivory)",
                marginBottom: "1.5rem",
              }}
            >
              Your Growth Partner<br />
              in Legal Success
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "rgba(255,245,224,0.7)",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "440px",
              }}
            >
              We are full-service legal marketing and intake company
              specializing in mass torts and personal injury. Our performance
              driven approach ensures you pay for results, not promises.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {PILLARS.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(233,199,128,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "rgba(255,245,224,0.9)",
                    }}
                  >
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "1rem",
                padding: "clamp(1.5rem,3vw,2rem)",
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="17" stroke="#E9C780" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="11" stroke="#E9C780" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="5" fill="#D8B26B" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.875rem",
                }}
              >
                Our Mission
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                  lineHeight: 1.5,
                  maxWidth: "260px",
                }}
              >
                To help law firms grow with a predictable pipeline of qualified cases.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem" }}>
              {METRICS.map((m) => (
                <div
                  key={m.top}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "0.75rem",
                    padding: "1rem 0.875rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                      marginBottom: "0.4rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {m.top}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--walnut)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6rem",
                      color: "var(--charcoal)",
                      opacity: 0.55,
                    }}
                  >
                    {m.bot}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
