"use client";
import Image from "next/image";

const LOGOS = [
  { name: "Alliance Legal Partners",   file: null },
  { name: "Halavanau Law Office P.C.", file: null },
  { name: "Morgan Maxwell",             file: null },
  { name: "Erol Gulistan Law Firm",     file: null },
  { name: "Good Law",                   file: null },
  { name: "Attorney & Law",             file: null },
];

export default function TrustedBySection() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)", position: "relative", overflow: "hidden" }}>

      {/* Small flower — bottom-left decorative */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-10%", left: "-6%",
        width: "clamp(240px,32vw,420px)", height: "clamp(240px,32vw,420px)",
        opacity: 0.5, pointerEvents: "none",
      }}>
        <Image src="/images/Home page Small Flower light mode-Photoroom.png" alt="" fill style={{ objectFit: "contain" }}/>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "clamp(3rem,6vw,7rem)", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "24px", height: "1.5px", background: "var(--gold)" }}/>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Trusted by Leading Law Firms
              </p>
            </div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400, lineHeight: 1.1,
              color: "var(--text-dark)", marginBottom: "1.25rem",
            }}>
              Proven Results.<br/>
              <em style={{ fontStyle: "italic" }}>Lasting Partnerships.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.78, maxWidth: "360px" }}>
              We partner with ambitious law firms nationwide, delivering qualified
              cases, consistent growth, and measurable success.
            </p>
          </div>

          {/* RIGHT — 2×3 logo grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(0.75rem,1.5vw,1.125rem)" }}>
            {LOGOS.map((logo) => (
              <div key={logo.name} style={{ position: "relative", aspectRatio: "3/2" }}>
                <Image
                  src="/images/our partner logo bg-Photoroom.png"
                  alt=""
                  fill
                  style={{ objectFit: "fill", borderRadius: "0.875rem" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "0.875rem", padding: "1rem",
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
                      fontFamily: "var(--font-sans)", fontSize: "0.72rem",
                      fontWeight: 600, color: "rgba(0,0,0,0.3)",
                      textAlign: "center", lineHeight: 1.45,
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

      <style>{`
        @media (max-width: 768px) {
          .trusted-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
