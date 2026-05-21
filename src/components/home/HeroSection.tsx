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
      {/* ── Hero ── */}
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

        {/* Big Flower watermark — top-right background */}
        <div aria-hidden style={{
          position: "absolute", top: "-5%", right: "-8%",
          width: "clamp(380px,55vw,700px)", height: "clamp(380px,55vw,700px)",
          pointerEvents: "none", zIndex: 0, mixBlendMode: "multiply", opacity: 0.55,
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

            {/* ── LEFT — text ── */}
            <div>
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
                color: "var(--gold)", marginBottom: "1.25rem",
              }}>
                Retainer
              </h1>

              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--fs-body-hero)",
                color: "var(--text-mid)", lineHeight: 1.8,
                maxWidth: "400px", marginBottom: "2rem",
              }}>
                YMG legal is a premier legal marketing firm with over 15+ years
                of experience in acquiring cases using the power of online
                marketing. With our offices in Las Vegas, we have a specialized
                team to assist you with your law firm or legal marketing needs.
              </p>

              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1.375rem" }}>
                <Link href="/contact" className="btn btn-gold" style={{ fontSize: "0.875rem", paddingInline: "1.625rem" }}>
                  Contact us today
                </Link>
                <Link href="/about" className="btn" style={{
                  fontSize: "0.875rem", paddingInline: "1.625rem",
                  background: "transparent", border: "1.5px solid rgba(0,0,0,0.14)", color: "var(--text-mid)",
                }}>
                  Learn more
                </Link>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {["Results-focused approach", "No long-term contracts"].map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7.5l3 3 6-6" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--text-mid)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT — girl + rings bg ── */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>

              {/* hero-rings-bg — gold arc lines, fills the right side behind the girl */}
              <div aria-hidden style={{
                position: "absolute", inset: "-10% -15% -10% -15%",
                pointerEvents: "none", zIndex: 0,
              }}>
                <Image
                  src="/images/hero-rings-bg.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "contain", objectPosition: "right top", mixBlendMode: "multiply", opacity: 0.85 }}
                />
              </div>

              {/* Girl hero image — no border-radius, transparent bg blends with ivory */}
              <div style={{
                position: "relative", zIndex: 1,
                width: "clamp(260px,38vw,460px)",
                height: "clamp(320px,50vw,580px)",
              }}>
                <Image
                  src="/images/hero-girl-2.jpg"
                  alt="YMG Legal consultant"
                  fill
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  priority
                />
              </div>

              {/* Floating "Book Strategy call" dark card */}
              <div style={{
                position: "absolute", bottom: "clamp(1rem,3vw,2rem)", right: "0",
                background: "var(--walnut)", borderRadius: "0.75rem",
                padding: "0.875rem 1.25rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
                minWidth: "165px", zIndex: 2,
                display: "flex", flexDirection: "column", gap: "0.375rem",
              }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 700, color: "var(--gold-light)", letterSpacing: "0.03em" }}>
                  Book Strategy call
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "rgba(255,245,224,0.6)" }}>
                  Get more cases →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Dark stats bar ── */}
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
                    width: "32px", height: "32px", borderRadius: "50%",
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
            padding: "0.625rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem",
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
    </>
  );
}
