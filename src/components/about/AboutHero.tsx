import Image from "next/image";

const STATS = [
  {
    label: "15+ Years\nExperience",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.39 6.96H22l-6.18 4.49L18.18 22 12 17.27 5.82 22l2.36-8.55L2 8.96h7.61z" />
      </svg>
    ),
  },
  {
    label: "Millions in Case\nValue Generated",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    label: "Trusted by\n100+ Law Firms",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Las Vegas\nBased",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function AboutHero() {
  return (
    <section
      style={{
        background: "var(--ivory)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(2.5rem,4vw,3.5rem)",
        paddingBottom: "clamp(1.5rem,3vw,2.5rem)",
      }}
    >
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="about-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(1.5rem,3vw,2.5rem)",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--charcoal)",
                opacity: 0.7,
                marginBottom: "1rem",
              }}
            >
              About YMG Legal
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem,5vw,4.25rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              Driving Case<br />
              Growth for Modern<br />
              Law Firms
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--charcoal)",
                opacity: 0.8,
                lineHeight: 1.7,
                maxWidth: "440px",
                marginBottom: "2rem",
              }}
            >
              We combine performance marketing, expert intake, and conversion
              systems to deliver real, measurable results.
            </p>

            {/* Stats strip */}
            <div
              className="about-hero-stats"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(216,178,107,0.3)",
                borderRadius: "0.75rem",
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                maxWidth: "560px",
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    padding: "0.875rem 0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    borderRight: i < STATS.length - 1 ? "1px solid rgba(216,178,107,0.2)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "var(--ivory)",
                      border: "1px solid rgba(216,178,107,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold-deep)",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--charcoal)",
                      lineHeight: 1.3,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — US map + Lady Justice */}
          <div
            className="about-hero-right"
            style={{
              position: "relative",
              minHeight: "440px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.35,
                pointerEvents: "none",
              }}
            >
              {/* Simple US map silhouette as decorative SVG */}
              <svg viewBox="0 0 600 400" style={{ width: "100%", height: "100%" }} fill="var(--gold)">
                <path d="M50 180 Q80 140 130 145 L180 130 L240 150 L300 130 L370 145 L440 130 L500 150 L540 175 L550 220 L520 260 L470 280 L400 285 L340 300 L280 285 L220 290 L160 275 L100 250 L60 220 Z" />
              </svg>
            </div>
            <div style={{ position: "relative", width: "clamp(240px,38vw,420px)", height: "clamp(360px,52vw,560px)" }}>
              <Image
                src="/images/girl-hero-Photoroom.png"
                alt="Lady Justice"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .about-hero-right { min-height: 360px !important; }
        }
        @media (max-width: 540px) {
          .about-hero-stats { grid-template-columns: 1fr 1fr !important; }
          .about-hero-stats > div:nth-child(2) { border-right: none !important; }
          .about-hero-stats > div:nth-child(1), .about-hero-stats > div:nth-child(2) {
            border-bottom: 1px solid rgba(216,178,107,0.2);
          }
        }
      `}</style>
    </section>
  );
}
