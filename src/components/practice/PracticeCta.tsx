import Link from "next/link";

const STATS = [
  { label: "15+ Years\nExperience" },
  { label: "Millions in Case\nValue Generated" },
  { label: "Trusted by\n100+ Law Firms" },
  { label: "Las Vegas\nBased" },
];

export default function PracticeCta() {
  return (
    <section style={{ background: "var(--grad-walnut)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem,3vw,2.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--gold)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
            }}
          >
            Ready to Grow?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
              fontWeight: 400,
              color: "var(--gold)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build Your Next<br />
            Winning Campaign
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "rgba(255,245,224,0.75)",
              lineHeight: 1.7,
              maxWidth: "600px",
              marginInline: "auto",
              marginBottom: "1.75rem",
            }}
          >
            Partner with YMG Legal and start getting more qualified leads, more
            consultations, and more signed cases.
          </p>
          <div style={{ display: "inline-flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center" }}>
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
              }}
            >
              Get More Cases
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "2.875rem",
                paddingInline: "1.5rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--gold)",
                textDecoration: "none",
                border: "1.5px solid rgba(233,199,128,0.5)",
                borderRadius: "0.375rem",
              }}
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>

        <div
          className="practice-cta-stats"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(233,199,128,0.2)",
            borderRadius: "0.75rem",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            marginTop: "clamp(2rem,3vw,2.5rem)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "1.125rem 1rem",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(233,199,128,0.18)" : "none",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--gold)",
                whiteSpace: "pre-line",
                lineHeight: 1.4,
              }}
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .practice-cta-stats { grid-template-columns: 1fr 1fr !important; }
          .practice-cta-stats > div:nth-child(2) { border-right: none !important; }
          .practice-cta-stats > div:nth-child(1), .practice-cta-stats > div:nth-child(2) {
            border-bottom: 1px solid rgba(233,199,128,0.18);
          }
        }
        @media (max-width: 540px) {
          .practice-cta-stats { grid-template-columns: 1fr !important; }
          .practice-cta-stats > div { border-right: none !important; border-bottom: 1px solid rgba(233,199,128,0.18) !important; }
          .practice-cta-stats > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
