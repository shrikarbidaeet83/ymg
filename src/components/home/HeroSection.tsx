import Link from "next/link";
import Image from "next/image";

const STATS = [
  { value: "15+ Years",        label: "Experience" },
  { value: "Millions in Case", label: "Value Generated" },
  { value: "Trusted by",       label: "100+ Law Firms" },
  { value: "Las Vegas",        label: "Based" },
];

export default function HeroSection() {
  return (
    <>
      <section style={{
        background: "var(--ivory)",
        paddingTop: "clamp(5.5rem,8vw,7.5rem)",
        paddingBottom: "0",
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Big Flower watermark — top-right, prominent */}
        <div aria-hidden style={{
          position: "absolute", top: "-12%", right: "-10%",
          width: "clamp(420px,58vw,760px)", height: "clamp(420px,58vw,760px)",
          pointerEvents: "none", zIndex: 0, opacity: 0.7,
        }}>
          <Image src="/images/Home page Big Flower light mode (1).jpg" alt="" fill style={{ objectFit: "contain" }}/>
        </div>

        <div className="wrap" style={{ flex: 1, display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(2rem,4vw,4rem)",
            alignItems: "center",
            width: "100%",
            paddingBottom: "clamp(3rem,5vw,5rem)",
          }}>

            {/* LEFT — text */}
            <div>
              {/* Eyebrow label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "28px", height: "1.5px", background: "var(--gold)" }}/>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Legal Marketing & Intake
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--fs-hero)",
                fontWeight: 400, lineHeight: 1.06,
                color: "var(--text-dark)", marginBottom: "0",
              }}>
                From Intake to
              </h1>
              <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--fs-hero)",
                fontWeight: 700, fontStyle: "italic", lineHeight: 1.06,
                color: "var(--gold)", marginBottom: "1.5rem",
              }}>
                Retainer
              </h1>

              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--fs-body-hero)",
                color: "var(--text-mid)", lineHeight: 1.8,
                maxWidth: "420px", marginBottom: "2.25rem",
              }}>
                YMG legal is a premier legal marketing firm with over 15+ years
                of experience in acquiring cases using the power of online
                marketing. With our offices in Las Vegas, we have a specialized
                team to assist you with your law firm or legal marketing needs.
              </p>

              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                <Link href="/contact" className="btn btn-gold" style={{ fontSize: "0.875rem", paddingInline: "1.75rem" }}>
                  Contact us today
                </Link>
                <Link href="/about" className="btn" style={{
                  fontSize: "0.875rem", paddingInline: "1.75rem",
                  background: "transparent", border: "1.5px solid rgba(0,0,0,0.14)", color: "var(--text-mid)",
                }}>
                  Learn more
                </Link>
              </div>

              <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
                {["Results-focused approach", "No long-term contracts"].map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="7.5" r="7" stroke="rgba(201,168,76,0.35)"/>
                      <path d="M4.5 8l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--text-mid)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — girl + rings bg */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>

              {/* hero-rings-bg — gold arc lines behind the girl */}
              <div aria-hidden style={{
                position: "absolute", inset: "-15% -20% -10% -20%",
                pointerEvents: "none", zIndex: 0,
              }}>
                <Image
                  src="/images/hero-rings-bg.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", mixBlendMode: "multiply", opacity: 0.9 }}
                />
              </div>

              {/* Girl hero image */}
              <div style={{
                position: "relative", zIndex: 1,
                width: "clamp(280px,40vw,500px)",
                height: "clamp(340px,52vw,620px)",
              }}>
                <Image
                  src="/images/girl-hero.jpg"
                  alt="YMG Legal consultant"
                  fill
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  priority
                />
              </div>

              {/* Floating "Book Strategy call" dark card */}
              <div style={{
                position: "absolute", bottom: "clamp(1.5rem,3vw,2.5rem)", left: "0",
                background: "var(--walnut)", borderRadius: "0.875rem",
                padding: "1rem 1.375rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                minWidth: "175px", zIndex: 2,
                display: "flex", flexDirection: "column", gap: "0.4rem",
              }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "var(--gold-light)", letterSpacing: "0.04em" }}>
                  Book Strategy call
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "rgba(255,245,224,0.55)" }}>
                  Get more cases →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark stats bar */}
        <div style={{ background: "var(--charcoal)", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  padding: "clamp(1rem,2vw,1.5rem) 1rem",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <div style={{
                    width: "34px", height: "34px", borderRadius: "50%",
                    border: "1.5px solid rgba(201,168,76,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 700, color: "var(--ivory)", lineHeight: 1.2 }}>{s.value}</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "rgba(255,245,224,0.5)" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* "Book Strategy call" gold pill — pinned right of stats bar */}
          <Link href="/contact" style={{
            position: "absolute", right: "clamp(1rem,3vw,3rem)", top: "50%", transform: "translateY(-50%)",
            background: "var(--gold)", borderRadius: "0.5rem",
            padding: "0.625rem 1.125rem", display: "flex", alignItems: "center", gap: "0.5rem",
            textDecoration: "none",
          }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "var(--walnut)" }}>
              Book Strategy call
            </span>
            <div style={{
              width: "20px", height: "20px", borderRadius: "50%",
              background: "rgba(61,43,15,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="var(--walnut)" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1.5 4.5h6M4.5 1.5l3 3-3 3"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-girl { width: clamp(220px,70vw,320px) !important; height: clamp(260px,80vw,380px) !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stats-book-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
