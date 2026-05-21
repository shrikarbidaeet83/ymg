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
      {/* Section Gradient bg image fills the entire section */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/Section Grediant.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* About section rings bg — bottom-right gold arc decoration */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-10%", right: "-8%",
        width: "clamp(280px,40vw,520px)", height: "clamp(280px,40vw,520px)",
        pointerEvents: "none", zIndex: 1, opacity: 0.18, mixBlendMode: "screen",
      }}>
        <Image src="/images/about-section-rings-bg.jpg" alt="" fill style={{ objectFit: "contain" }}/>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "rgba(201,168,76,0.75)", letterSpacing: "0.06em", marginBottom: "1rem" }}>
          About YMG - Legal
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2.5rem,6vw,6rem)", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 400, lineHeight: 1.1,
              color: "var(--ivory)", marginBottom: "1.125rem",
            }}>
              Your Growth Partner<br/>
              <em style={{ fontStyle: "italic" }}>in Legal Success</em>
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "0.9375rem",
              color: "rgba(255,245,224,0.65)", lineHeight: 1.78,
              marginBottom: "1.75rem", maxWidth: "400px",
            }}>
              We are full-service legal marketing and intake company specializing
              in mass torts and personal injury. Our performance driven approach
              ensures you pay for results, not promises.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PILLARS.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="8.5" cy="8.5" r="8" stroke="rgba(201,168,76,0.45)"/>
                    <path d="M5.5 9l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(255,245,224,0.82)", fontWeight: 500 }}>
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
              boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
            }}>
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="15" stroke="#E9C780" strokeWidth="1.5"/>
                  <circle cx="17" cy="17" r="9.5" stroke="#E9C780" strokeWidth="1.5"/>
                  <circle cx="17" cy="17" r="4" fill="#C9A84C"/>
                  <path d="M23 11l-3.5 3.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M26 8l-3 0 0 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "0.75rem" }}>Our Mission</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem,1.8vw,1.2rem)", fontWeight: 500, color: "var(--text-dark)", lineHeight: 1.55 }}>
                To help law firms grow with a predictable pipeline of qualified cases.
              </p>
            </div>

            {/* 3 metric cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem" }}>
              {METRICS.map((m) => (
                <div key={m.top} style={{
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem", padding: "1rem 0.875rem",
                }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.375rem,2.5vw,1.75rem)", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1, marginBottom: "0.35rem" }}>
                    {m.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, color: "var(--ivory)", lineHeight: 1.3 }}>{m.top}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "rgba(255,245,224,0.42)", marginTop: "0.1rem" }}>{m.bot}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
