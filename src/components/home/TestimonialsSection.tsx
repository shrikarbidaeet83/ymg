const CARDS = [
  {
    quote: "YMG Legal completely transformed our intake and lead quality. We went from chasing leads to consistently signing high-value cases every month.",
    role: "Managing Partner",
    firm: "Personal Injury Firm",
    featured: false,
    bg: "#FFFFFF",
    rotate: "-9deg",
    zIndex: 1,
    translateY: "28px",
  },
  {
    quote: "Their system works. From lead generation to intake, everything is streamlined. Our team now focuses on closing cases instead of filtering bad leads.",
    role: "Founder",
    firm: "Mass Tort Law Firm",
    featured: false,
    bg: "#FFFFFF",
    rotate: "-4deg",
    zIndex: 2,
    translateY: "10px",
  },
  {
    quote: "The biggest difference is their intake team. Every lead is handled professionally, and we only speak with serious, qualified clients.",
    role: "Partner",
    firm: "Injury Law Group",
    featured: true,
    bg: "#B5A88A",
    rotate: "0deg",
    zIndex: 5,
    translateY: "-10px",
  },
  {
    quote: "Within the first 60 days, we saw a significant increase in signed retainers. YMG isn't just marketing — they're a growth partner.",
    role: "Senior Attorney",
    firm: "Litigation Firm",
    featured: false,
    bg: "#FFFFFF",
    rotate: "4deg",
    zIndex: 2,
    translateY: "10px",
  },
  {
    quote: "We've worked with multiple marketing agencies before, but none delivered results like YMG. The quality of cases and consistency is unmatched.",
    role: "CEO",
    firm: "Legal Practice",
    featured: false,
    bg: "#FFFFFF",
    rotate: "9deg",
    zIndex: 1,
    translateY: "28px",
  },
];

function Stars({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section
      style={{
        background: isDark ? "transparent" : "#EFE9E0",
        paddingBlock: "var(--section-py)",
        overflow: "hidden",
      }}
    >
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem,5vw,4.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: isDark ? "var(--gold)" : "var(--charcoal)",
              opacity: isDark ? 1 : 0.7,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.625rem",
            }}
          >
            Client Testimonials
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3.25rem)",
              fontWeight: 400,
              color: isDark ? "var(--ivory)" : "var(--charcoal)",
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div
          className="testimonials-fan"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBlock: "3rem",
            position: "relative",
            minHeight: "400px",
          }}
        >
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                width: "clamp(200px,17vw,235px)",
                minHeight: c.featured ? "340px" : "300px",
                background: c.bg,
                borderRadius: "1rem",
                padding: "clamp(1.25rem,2vw,1.625rem)",
                boxShadow: c.featured ? "0 16px 56px rgba(0,0,0,0.18)" : "0 4px 24px rgba(0,0,0,0.09)",
                transform: `rotate(${c.rotate}) translateY(${c.translateY})`,
                zIndex: c.zIndex,
                position: "relative",
                marginInline: "-1rem",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
              }}
            >
              <Stars color={c.featured ? "#FFFFFF" : "#E9C780"} />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                  color: c.featured ? "#FFFFFF" : "var(--charcoal)",
                  flex: 1,
                  marginBottom: "1.125rem",
                }}
              >
                &ldquo;{c.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: c.featured ? "rgba(255,255,255,0.25)" : "rgba(233,199,128,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.featured ? "#FFFFFF" : "var(--gold-deep)"} strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: c.featured ? "#FFFFFF" : "var(--charcoal)",
                      lineHeight: 1.2,
                    }}
                  >
                    {c.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.66rem",
                      color: c.featured ? "rgba(255,255,255,0.8)" : "var(--charcoal)",
                      opacity: c.featured ? 1 : 0.6,
                      marginTop: "0.1rem",
                    }}
                  >
                    {c.firm}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-fan { flex-direction: column; align-items: stretch; min-height: 0 !important; }
          .testimonial-card {
            width: 100% !important;
            transform: none !important;
            margin-inline: 0 !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
