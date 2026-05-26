const STEPS = [
  "We handle your incoming calls and leads",
  "We follow up, quickly",
  "We process all information and hand it to you",
  "We manage scheduling efficiently",
  "Report, Analyze, Improve",
];

export default function GuideSection() {
  return (
    <section style={{ background: "var(--grad-walnut)", paddingBlock: "var(--section-py)", overflow: "hidden" }}>
      <div className="wrap">
        <div
          className="guide-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(2.5rem,5vw,5rem)",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Step of the way
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
                fontWeight: 400,
                color: "var(--gold)",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
            >
              How We Guide You Every<br />
              Step of the Way
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {STEPS.map((s) => (
                <li key={s} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
                      fontSize: "0.9375rem",
                      color: "rgba(255,245,224,0.9)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* clock decoration */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "clamp(220px,28vw,320px)",
                height: "clamp(220px,28vw,320px)",
                borderRadius: "50%",
                background: "#1A1A1A",
                border: "10px solid var(--charcoal)",
                position: "relative",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              }}
            >
              {/* hour markers */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * 360;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "2px",
                      height: "10px",
                      background: "rgba(233,199,128,0.7)",
                      transformOrigin: "50% calc(50% + clamp(70px,9vw,110px))",
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * clamp(95px,13vw,140px)))`,
                    }}
                  />
                );
              })}
              {/* hands */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "3px",
                  height: "clamp(60px,8vw,90px)",
                  background: "var(--gold)",
                  transformOrigin: "bottom center",
                  transform: "translate(-50%, -100%) rotate(45deg)",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "2px",
                  height: "clamp(75px,10vw,115px)",
                  background: "var(--gold)",
                  transformOrigin: "bottom center",
                  transform: "translate(-50%, -100%) rotate(120deg)",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  transform: "translate(-50%,-50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .guide-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
