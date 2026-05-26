import Image from "next/image";
import Link from "next/link";

export default function PracticeHero() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(3rem,5vw,5rem)" }}>
      <div className="wrap">
        <div
          className="practice-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,4vw,4rem)",
            alignItems: "center",
          }}
        >
          {/* LEFT — text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: "1rem",
              }}
            >
              We generate qualified leads and signed cases across high-demand legal categories.
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem,4.2vw,3.25rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--charcoal)",
                marginBottom: "1.25rem",
              }}
            >
              High-Value Case Verticals<br />
              We Specialize In
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--charcoal)",
                opacity: 0.75,
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                maxWidth: "440px",
              }}
            >
              From personal injury to mass tort campaigns, we help law firms scale
              client acquisition with targeted, performance-driven strategies.
            </p>
            <div style={{ display: "inline-flex", gap: "0.875rem", flexWrap: "wrap" }}>
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
                  color: "var(--gold-deep)",
                  textDecoration: "none",
                  border: "1.5px solid var(--gold-deep)",
                  borderRadius: "0.375rem",
                }}
              >
                Explore Opportunity
              </Link>
            </div>
          </div>

          {/* RIGHT — image */}
          <div
            className="practice-hero-image"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              maxWidth: "480px",
              marginInline: "auto",
            }}
          >
            <Image
              src="/images/justice-scale grow your firm section icon-Photoroom.png"
              alt="Lady Justice"
              fill
              style={{ objectFit: "contain", opacity: 0.92 }}
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .practice-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .practice-hero-image { max-width: 320px !important; }
        }
      `}</style>
    </section>
  );
}
