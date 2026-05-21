/* Design: 5 fanned/overlapping cards, CENTER card is gold/amber bg (featured),
   others are white. Each card has star rating + quote + avatar + name/firm at bottom */

const CARDS = [
  {
    quote: "YMG Legal completely transformed our intake and lead quality. We went from chasing leads to consistently signing high-value cases every month.",
    role: "Managing Partner", firm: "Personal Injury Firm",
    featured: false, rotate: "-8deg", zIndex: 1, translateY: "20px",
  },
  {
    quote: "Their system works. From lead generation to intake, everything is streamlined. Our team now focuses on closing cases instead of filtering bad leads.",
    role: "Founder", firm: "Mass Tort Law Firm",
    featured: false, rotate: "-3deg", zIndex: 2, translateY: "8px",
  },
  {
    quote: "The biggest difference is their intake team. Every lead is handled professionally, and we only speak with serious, qualified clients.",
    role: "Partner", firm: "Injury Law Group",
    featured: true, rotate: "0deg", zIndex: 5, translateY: "0px",
  },
  {
    quote: "Within the first 60 days, we saw a significant increase in signed retainers. YMG isn't just marketing — they're a growth partner.",
    role: "Senior Attorney", firm: "Litigation Firm",
    featured: false, rotate: "3deg", zIndex: 2, translateY: "8px",
  },
  {
    quote: "We've worked with multiple marketing agencies before, but none delivered results like YMG. The quality of cases and consistency is unmatched.",
    role: "CEO", firm: "Legal Practice",
    featured: false, rotate: "8deg", zIndex: 1, translateY: "20px",
  },
];

function Stars({ gold }: { gold?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "0.875rem" }}>
      {[0,1,2,3,4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={gold ? "var(--gold)" : "var(--gold)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)", overflow: "hidden" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.06em", marginBottom: "0.625rem" }}>
            Client Testimonials
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 400, color: "var(--text-dark)" }}>
            What Our <em style={{ fontStyle: "italic" }}>Clients Say</em>
          </h2>
        </div>

        {/* Fanned cards — desktop */}
        <div className="hide-mobile" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "2rem",
          position: "relative",
          minHeight: "360px",
        }}>
          {CARDS.map((c, i) => (
            <div key={i} style={{
              width: "clamp(200px,18vw,240px)",
              minHeight: c.featured ? "340px" : "300px",
              background: c.featured ? "#F5C842" : "var(--white)",
              borderRadius: "1rem",
              padding: "clamp(1.125rem,2vw,1.5rem)",
              boxShadow: c.featured
                ? "0 12px 48px rgba(201,168,76,0.35)"
                : "0 4px 24px rgba(0,0,0,0.08)",
              transform: `rotate(${c.rotate}) translateY(${c.translateY})`,
              zIndex: c.zIndex,
              position: "relative",
              marginInline: "-0.875rem",
              display: "flex",
              flexDirection: "column",
              border: c.featured ? "none" : "1px solid rgba(201,168,76,0.12)",
              flexShrink: 0,
            }}>
              <Stars />
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                lineHeight: 1.65,
                color: c.featured ? "rgba(61,43,15,0.85)" : "var(--text-mid)",
                flex: 1,
                marginBottom: "1rem",
              }}>
                &ldquo;{c.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  background: c.featured ? "rgba(61,43,15,0.15)" : "rgba(201,168,76,0.15)",
                  flexShrink: 0, overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: c.featured ? "var(--walnut)" : "var(--text-dark)", lineHeight: 1.2 }}>
                    {c.role}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.66rem", color: c.featured ? "rgba(61,43,15,0.6)" : "var(--text-mid)", opacity: 0.8 }}>
                    {c.firm}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile list */}
        <div className="hide-desktop" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {CARDS.map((c, i) => (
            <div key={i} style={{
              background: c.featured ? "#F5C842" : "var(--white)",
              borderRadius: "1rem", padding: "1.25rem",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              border: c.featured ? "none" : "1px solid rgba(201,168,76,0.12)",
            }}>
              <Stars />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-mid)", marginBottom: "0.875rem" }}>
                &ldquo;{c.quote}&rdquo;
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-dark)" }}>{c.role}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--text-mid)", opacity: 0.7 }}>{c.firm}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
