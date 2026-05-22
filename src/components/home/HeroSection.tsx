import Link from "next/link";
import Image from "next/image";

/* Decorative flame SVG */
function FlameIcon({
  size = 18,
  opacity = 0.18,
}: {
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ opacity }}
    >
      <path
        d="M12 2C12 2 9 7 9 11c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1-.5-2-1-3 0 0 3 3 3 7a6 6 0 01-12 0c0-5 4-10 4-10z"
        fill="#C9A84C"
      />
    </svg>
  );
}

/* Concentric rings SVG decoration */
function ConcentricRings() {
  const rings = [760, 620, 490, 370, 260, 160];
  return (
    <svg
      aria-hidden
      viewBox="0 0 760 760"
      fill="none"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFCD86" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#D8B26B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {rings.map((d, i) => (
        <circle
          key={d}
          cx="380"
          cy="380"
          r={d / 2}
          stroke="url(#ringGrad)"
          strokeWidth={i === 0 ? 1 : i === 1 ? 1.5 : 2}
          fill="none"
          opacity={0.9 - i * 0.12}
        />
      ))}
    </svg>
  );
}

/* Bottom info-bar data */
const INFO_COLS = [
  {
    label: "Offices",
    value: "Las Vegas, NV",
    icon: (
      <svg
        width="15"
        height="15"
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
  {
    label: "Call Us",
    value: "(702) 555-0198",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@ymg-legal.com",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <polyline points="8 10 12 14 16 10" />
      </svg>
    ),
  },
  {
    label: "Practice Areas",
    value: "Personal Injury & More",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
      </svg>
    ),
  },
  {
    label: "Experience",
    value: "15+ Years",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const RESPONSIVE_CSS =
  "@media (max-width: 900px) { .hero-right { display: none !important; } .hero-grid { grid-template-columns: 1fr !important; } } @media (max-width: 700px) { .info-bar { flex-wrap: wrap !important; } .info-bar > * { border-right: none !important; border-bottom: 1px solid rgba(233,199,128,0.1) !important; } }";

export default function HeroSection() {
  return (
    <>
      <section
        style={{
          background: "#FFF5E0",
          paddingTop: "clamp(5.5rem,8vw,7.5rem)",
          paddingBottom: "0",
          position: "relative",
          overflow: "hidden",
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Scattered decorative flame patterns */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div style={{ position: "absolute", top: "12%", left: "8%" }}>
            <FlameIcon size={22} opacity={0.13} />
          </div>
          <div style={{ position: "absolute", top: "28%", left: "3%" }}>
            <FlameIcon size={14} opacity={0.1} />
          </div>
          <div style={{ position: "absolute", top: "55%", left: "6%" }}>
            <FlameIcon size={18} opacity={0.11} />
          </div>
          <div style={{ position: "absolute", top: "72%", left: "12%" }}>
            <FlameIcon size={12} opacity={0.09} />
          </div>
          <div style={{ position: "absolute", top: "18%", left: "42%" }}>
            <FlameIcon size={10} opacity={0.08} />
          </div>
          <div style={{ position: "absolute", top: "65%", left: "38%" }}>
            <FlameIcon size={16} opacity={0.09} />
          </div>
        </div>

        {/* Big flower watermark top-right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-12%",
            right: "-10%",
            width: "clamp(420px,58vw,760px)",
            height: "clamp(420px,58vw,760px)",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.7,
          }}
        >
          <Image
            src="/images/Home page Big Flower light mode (1)-Photoroom.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          className="wrap"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: "clamp(2rem,4vw,4rem)",
              alignItems: "center",
              width: "100%",
              paddingBottom: "clamp(3rem,5vw,5rem)",
            }}
          >
            {/* LEFT */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "1.5px",
                    background: "var(--gold)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Legal Marketing &amp; Intake
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--fs-hero)",
                  fontWeight: 400,
                  lineHeight: 1.06,
                  color: "#404040",
                  marginBottom: 0,
                }}
              >
                From Intake to
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--fs-hero)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  lineHeight: 1.06,
                  color: "var(--gold)",
                  marginBottom: "0.2rem",
                }}
              >
                Retainer
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem,3vw,2.75rem)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  color: "#6C614D",
                  marginBottom: "1.5rem",
                }}
              >
                We Handle It All.
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--fs-body-hero)",
                  color: "#4A4A4A",
                  lineHeight: 1.8,
                  maxWidth: "430px",
                  marginBottom: "2.25rem",
                }}
              >
                YMG Legal is a premier legal marketing firm with over 15+ years
                of experience acquiring cases through the power of online
                marketing. With offices in Las Vegas, we have a specialized team
                to assist your law firm with all legal marketing needs.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  flexWrap: "wrap",
                  marginBottom: "1.75rem",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    height: "3rem",
                    paddingInline: "1.75rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#3D2B0F",
                    textDecoration: "none",
                    background:
                      "linear-gradient(135deg, #EFCD86 0%, #D8B26B 50%, #C9A84C 100%)",
                    borderRadius: "0.375rem",
                    boxShadow: "0 4px 16px rgba(201,168,76,0.35)",
                    transition: "filter 0.18s, transform 0.14s",
                  }}
                >
                  Contact Us Today
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    height: "3rem",
                    paddingInline: "1.75rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#6C614D",
                    textDecoration: "none",
                    background: "transparent",
                    border: "1.5px solid #D8B26B",
                    borderRadius: "0.375rem",
                    transition: "background 0.15s, color 0.15s",
                  }}
                >
                  Learn More
                </Link>
              </div>

              <div
                style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}
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
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <circle
                          cx="7.5"
                          cy="7.5"
                          r="7"
                          stroke="rgba(201,168,76,0.35)"
                        />
                        <path
                          d="M4.5 8l2 2 4-4"
                          stroke="var(--gold)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          color: "#4A4A4A",
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
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-20% -15% -10% -20%",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                <ConcentricRings />
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "clamp(280px,40vw,500px)",
                  height: "clamp(340px,52vw,620px)",
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

              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(1.5rem,3vw,2.5rem)",
                  left: "0",
                  background: "var(--walnut)",
                  borderRadius: "0.875rem",
                  padding: "1rem 1.375rem",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                  minWidth: "175px",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--gold-light)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Book Strategy Call
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    color: "rgba(255,245,224,0.55)",
                  }}
                >
                  Get more cases
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div
          style={{
            background: "#0B241E",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="wrap">
            <div
              className="info-bar"
              style={{
                display: "flex",
                alignItems: "stretch",
                justifyContent: "space-between",
              }}
            >
              {INFO_COLS.map((col, i) => (
                <div
                  key={col.label}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    padding: "clamp(0.875rem,1.5vw,1.25rem) 0.875rem",
                    borderRight:
                      i < INFO_COLS.length - 1
                        ? "1px solid rgba(233,199,128,0.1)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      border: "1.5px solid rgba(201,168,76,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                    }}
                  >
                    {col.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "rgba(255,245,224,0.4)",
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        marginBottom: "0.15rem",
                      }}
                    >
                      {col.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#E9C176",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {col.value}
                    </p>
                  </div>
                </div>
              ))}

              <div
                style={{
                  width: "1px",
                  background: "rgba(233,199,128,0.1)",
                  flexShrink: 0,
                  margin: "0.5rem 0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding:
                    "clamp(0.875rem,1.5vw,1.25rem) 0 clamp(0.875rem,1.5vw,1.25rem) 1rem",
                  flexShrink: 0,
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    height: "2rem",
                    paddingInline: "1rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#3D2B0F",
                    textDecoration: "none",
                    background:
                      "linear-gradient(135deg, #EFCD86 0%, #C9A84C 100%)",
                    borderRadius: "0.375rem",
                    boxShadow: "0 2px 10px rgba(201,168,76,0.35)",
                    whiteSpace: "nowrap",
                    transition: "filter 0.15s",
                  }}
                >
                  Book a Call
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M1.5 4.5h6M4.5 1.5l3 3-3 3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: "2rem",
                    paddingInline: "1rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#E9C176",
                    textDecoration: "none",
                    background: "transparent",
                    border: "1px solid rgba(201,168,76,0.35)",
                    borderRadius: "0.375rem",
                    whiteSpace: "nowrap",
                    transition: "background 0.15s",
                  }}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
    </>
  );
}
