import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section style={{ background: "var(--grad-walnut)", position: "relative", overflow: "hidden" }}>
      <div
        className="wrap"
        style={{
          position: "relative",
          zIndex: 1,
          paddingBlock: "clamp(3rem,5vw,4.5rem)",
        }}
      >
        <div
          className="cta-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(2rem,4vw,4rem)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(1.5rem,3vw,2.5rem)", flex: 1, minWidth: "280px" }}>
            <div
              style={{
                flexShrink: 0,
                width: "clamp(80px,9vw,108px)",
                height: "clamp(80px,9vw,108px)",
                position: "relative",
              }}
            >
              <Image
                src="/images/justice-scale grow your firm section icon-Photoroom.png"
                alt="Justice Scale"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.625rem,3.2vw,2.5rem)",
                  fontWeight: 400,
                  color: "var(--gold)",
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                }}
              >
                Ready to Grow Your Firm?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "rgba(255,245,224,0.65)",
                  lineHeight: 1.55,
                }}
              >
                Let&apos;s build your pipeline of qualified cases.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", flexShrink: 0 }}>
            <Link
              href="/contact"
              className="btn btn-gold"
              style={{ minWidth: "220px", justifyContent: "center" }}
            >
              Get More Cases
            </Link>
            <Link
              href="/contact"
              style={{
                minWidth: "220px",
                height: "var(--btn-h)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--fs-btn)",
                fontWeight: 600,
                color: "var(--gold)",
                textDecoration: "none",
                background: "transparent",
                border: "1.5px solid rgba(233,199,128,0.5)",
                borderRadius: "0.375rem",
              }}
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
