"use client";
import Image from "next/image";

/* Law firm logo names visible in the design screenshot */
const LOGOS = [
  { name: "Alliance Legal Partners",  file: null },
  { name: "Halavanau Law Office P.C.", file: null },
  { name: "Morgan Maxwell",            file: null },
  { name: "Erol Gulistan Law Firm",    file: null },
  { name: "Good Law",                  file: null },
  { name: "Attorney & Law",            file: null },
];
/* Replace file: null with the actual filename e.g. "alliance-legal.png"
   once logos are added to public/images/logos/ */

export default function TrustedBySection() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)", position: "relative", overflow: "hidden" }}>
      {/* Small flower bottom-left decorative — as seen in design */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-8%", left: "-5%",
        width: "clamp(220px,30vw,380px)", height: "clamp(220px,30vw,380px)",
        opacity: 0.45, pointerEvents: "none", mixBlendMode: "multiply",
      }}>
        <Image src="/images/Home page Small Flower light mode.jpg" alt="" fill style={{ objectFit: "contain" }}/>
      </div>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(3rem,6vw,7rem)", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.06em", marginBottom: "0.875rem" }}>
              Trusted by Leading Law Firms
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400, lineHeight: 1.1,
              color: "var(--text-dark)", marginBottom: "1.125rem",
            }}>
              Proven Results.<br/>
              <em style={{ fontStyle: "italic" }}>Lasting Partnerships.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.75, maxWidth: "340px" }}>
              We partner with ambitious law firms nationwide, delivering qualified
              cases, consistent growth, and measurable success.
            </p>
          </div>

          {/* RIGHT — 2×3 logo grid using the gold-border card bg */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(0.75rem,1.5vw,1.125rem)" }}>
            {LOGOS.map((logo) => (
              <div key={logo.name} style={{ position: "relative", aspectRatio: "3/2" }}>
                {/* Card background with gold border */}
                <Image
                  src="/images/our partner logo bg.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "fill", borderRadius: "0.75rem" }}
                />
                {/* Logo placeholder / actual logo on top */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "0.75rem", padding: "1rem",
                }}>
                  {logo.file ? (
                    <Image
                      src={`/images/logos/${logo.file}`}
                      alt={logo.name}
                      width={120} height={48}
                      style={{ objectFit: "contain", maxWidth: "80%", maxHeight: "60%" }}
                    />
                  ) : (
                    <p style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.65rem",
                      fontWeight: 600, color: "rgba(0,0,0,0.25)",
                      textAlign: "center", lineHeight: 1.4,
                    }}>
                      {logo.name}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
