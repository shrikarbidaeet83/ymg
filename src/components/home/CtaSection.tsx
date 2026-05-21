import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Section Gradient bg */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/images/Section Grediant.jpg" alt="" fill style={{ objectFit: "cover" }}/>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBlock: "clamp(3.5rem,6vw,5.5rem)" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(2rem,4vw,4rem)",
          flexWrap: "wrap",
        }}>

          {/* LEFT — icon + text */}
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(1.5rem,3vw,2.5rem)", flex: 1, minWidth: "280px" }}>

            {/* Justice scale image */}
            <div style={{
              flexShrink: 0,
              width: "clamp(80px,9vw,108px)",
              height: "clamp(80px,9vw,108px)",
              position: "relative",
            }}>
              <Image
                src="/images/justice-scale grow your firm section icon.jpg"
                alt="Justice Scale"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.625rem,3.2vw,2.5rem)",
                fontWeight: 400,
                color: "var(--ivory)",
                lineHeight: 1.15,
                marginBottom: "0.5rem",
              }}>
                Ready to Grow Your Firm?
              </h2>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.875rem,1.2vw,1rem)",
                color: "rgba(255,245,224,0.6)",
                lineHeight: 1.55,
              }}>
                Let&apos;s build your pipeline of qualified cases together.
              </p>
            </div>
          </div>

          {/* RIGHT — stacked buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", flexShrink: 0 }}>
            <Link href="/contact" className="btn btn-gold" style={{ minWidth: "220px", justifyContent: "center", fontSize: "0.9375rem" }}>
              Get More Cases
            </Link>
            <Link href="/contact" className="btn" style={{
              minWidth: "220px", justifyContent: "center", fontSize: "0.9375rem",
              background: "transparent",
              border: "1.5px solid rgba(255,245,224,0.28)",
              color: "var(--ivory)",
            }}>
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
