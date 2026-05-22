import Image from "next/image";

const PILLARS = [
  "Performance-based pricing",
  "Expert intake & qualification",
  "AI-powered call & booking",
  "Compliant & ethical marketing",
];

const METRICS = [
  { value: "+42%",   top: "Conversion Rate",     bot: "Industry Average" },
  { value: "+42%",   top: "Qualified Leads",      bot: "vs last quarter" },
  { value: "$2.3M+", top: "Case Value Generated", bot: "vs last quarter" },
];

export default function AboutSection() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      paddingBlock: "var(--section-py)",
    }}>
      {/* Section Gradient bg fills the whole section */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/Section Grediant-Photoroom.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* About section rings arc — bottom-right gold decoration */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-12%", right: "-6%",
        width: "clamp(300px,42vw,560px)", height: "clamp(300px,42vw,560px)",
        pointerEvents: "none", zIndex: 1, opacity: 0.25,
      }}>
        <Image src="/images/about-section-rings-bg-Photoroom.png" alt="" fill style={{ objectFit: "contain" }}/>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
          <div style={{ width: "24px", height: "1.5px", background: "rgba(201,168,76,0.6)" }}/>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "rgba(201,168,76,0.8)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            About YMG Legal
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2.5rem,6vw,6rem)", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400, lineHeight: 1.1,
              color: "var(--ivory)", marginBottom: "1.25rem",
            }}>
              Your Growth Partner<br/>
              <em style={{ fontStyle: "italic" }}>in Legal Success</em>
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "0.9375rem",
              color: "rgba(255,245,224,0.65)", lineHeight: 1.8,
              marginBottom: "2rem", maxWidth: "420px",
            }}>
              We are full-service legal marketing and intake company specializing
              in mass torts and personal injury. Our performance driven approach
              ensures you pay for results, not promises.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {PILLARS.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ flexShrink: 0, width: "20px", height: "20px", borderRadius: "50%", border: "1.5px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(255,245,224,0.85)", fontWeight: 500 }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Our Mission white card */}
            <div style={{
              background: "var(--white)", borderRadius: "1rem",
              padding: "clamp(1.5rem,3vw,2rem)", position: "relative",
              boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
            }}>
              {/* Target/scope icon top-right */}
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#E9C780" strokeWidth="1.5"/>
                  <circle cx="18" cy="18" r="10" stroke="#E9C780" strokeWidth="1.5"/>
                  <circle cx="18" cy="18" r="4" fill="#C9A84C"/>
                  <path d="M24 12l-3.5 3.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M27 9l-3 0 0 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "var(--text-mid)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.875rem" }}>Our Mission</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem,1.8vw,1.2rem)", fontWeight: 500, color: "var(--text-dark)", lineHeight: 1.55 }}>
                To help law firms grow with a predictable pipeline of qualified cases.
              </p>
            </div>

            {/* 3 metric cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem" }}>
              {METRICS.map((m) => (
                <div key={m.top} style={{
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.75rem", padding: "1.125rem 0.875rem",
                }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.375rem,2.5vw,1.75rem)", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1, marginBottom: "0.4rem" }}>
                    {m.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, color: "var(--ivory)", lineHeight: 1.3 }}>{m.top}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "rgba(255,245,224,0.42)", marginTop: "0.15rem" }}>{m.bot}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
