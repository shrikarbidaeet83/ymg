import Link from "next/link";
import Image from "next/image";

function StatIcon({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}

const STATS = [
  {
    label: "15+ Years\nExperience",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l2.39 6.96H22l-6.18 4.49L18.18 22 12 17.27 5.82 22l2.36-8.55L2 8.96h7.61z" />
      </svg>
    ),
  },
  {
    label: "Millions in Case\nValue Generated",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    label: "Trusted by\n100+ Law Firms",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Las Vegas\nBased",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

/* Concentric gold rings behind girl */
function GoldRings() {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFCD86" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#D8B26B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {[400, 360, 320, 280, 240, 200, 160, 120].map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r}
          stroke="url(#ring)"
          strokeWidth={i === 0 ? 1 : 1.2}
          opacity={0.85 - i * 0.08}
        />
      ))}
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      style={{
        background: "var(--ivory)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(2.5rem,4vw,3.5rem)",
        paddingBottom: "clamp(1.5rem,2vw,2rem)",
      }}
    >
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gap: "clamp(1.5rem,3vw,2.5rem)",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem,5.5vw,5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--charcoal)",
                marginBottom: 0,
              }}
            >
              From Intake to
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem,5.5vw,5rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.05,
                color: "var(--gold-deep)",
                marginBottom: "1.5rem",
              }}
            >
              Retainer
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--charcoal)",
                opacity: 0.85,
                lineHeight: 1.7,
                maxWidth: "440px",
                marginBottom: "1.75rem",
              }}
            >
              YMG legal is a premier legal marketing firm with over 15+ years of
              experience in acquiring cases using the power of online marketing.
              With our offices in Las Vegas, we have a specialized team to
              assist you with your law firm or legal marketing needs.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "2.875rem",
                  paddingInline: "1.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--walnut)",
                  textDecoration: "none",
                  background: "var(--grad-gold)",
                  borderRadius: "0.375rem",
                  boxShadow: "0 2px 12px rgba(216,178,107,0.4)",
                }}
              >
                Contact us today
              </Link>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "2.875rem",
                  paddingInline: "1.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--gold-deep)",
                  textDecoration: "none",
                  background: "transparent",
                  border: "1.5px solid var(--gold-deep)",
                  borderRadius: "0.375rem",
                }}
              >
                Learn more
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              {["Results-focused approach", "No long-term contracts"].map(
                (t) => (
                  <div
                    key={t}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7.5l2.5 2.5L11 4.5"
                        stroke="var(--gold-deep)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        color: "var(--charcoal)",
                        opacity: 0.8,
                      }}
                    >
                      {t}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="hero-right"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              minHeight: "520px",
            }}
          >
            {/* Gold concentric rings behind */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-5% -10% -5% -10%",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              <GoldRings />
            </div>

            <div
              style={{
                position: "relative",
                width: "clamp(280px,40vw,480px)",
                height: "clamp(360px,55vw,600px)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/girl-hero-Photoroom.png"
                alt="YMG Legal consultant"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom stat strip — inside a rounded card */}

        <div>
          <div
            className="hero-stats"
            style={{
              marginTop: "clamp(1.5rem,2vw,2rem)",
              background: "#FFFFFF",
              border: "1px solid rgba(216,178,107,0.3)",
              borderRadius: "0.75rem",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderRight:
                    i < STATS.length - 1
                      ? "1px solid rgba(216,178,107,0.2)"
                      : "none",
                }}
              >
                <StatIcon>{s.icon}</StatIcon>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--charcoal)",
                    lineHeight: 1.35,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { min-height: 420px !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
          .hero-stats > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 540px) {
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-stats > div { border-right: none !important; border-bottom: 1px solid rgba(216,178,107,0.2) !important; }
          .hero-stats > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
