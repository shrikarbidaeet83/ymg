import Image from "next/image";

const STEPS = [
  { num: "01", title: "Generate",  desc: "We launch targeted digital campaigns to attract high-intent legal prospects actively searching for help." },
  { num: "02", title: "Qualify",   desc: "AI-driven intake screens and qualifies leads in real time." },
  { num: "03", title: "Engage",    desc: "Intake specialists follow up instantly via call, text, and live chat." },
  { num: "04", title: "Book",      desc: "Qualified leads are scheduled automatically, synced to your calendar." },
  { num: "05", title: "Sign",      desc: "We support the retainer process for a smooth close." },
];

export default function HowItWorksSection() {
  return (
    <section style={{ background: "var(--ivory)", paddingTop: "var(--section-py)", paddingBottom: "0", overflow: "hidden" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>
            Our Proven 5-Step
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 400, color: "var(--text-dark)" }}>
            Case Acquisition System
          </h2>
        </div>

        {/* Arc illustration + Generate text */}
        <div style={{ position: "relative", width: "100%", maxWidth: "860px", marginInline: "auto" }}>
          {/* The actual arc illustration from the provided asset */}
          <Image
            src="/images/Case Acquisition System illustration.jpg"
            alt="5-step case acquisition arc diagram"
            width={860}
            height={440}
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          {/* "Generate" text + desc overlaid at center bottom of arc */}
          <div style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "clamp(240px,35%,360px)",
          }}>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem,3vw,2.25rem)",
              fontWeight: 400,
              color: "var(--text-dark)",
              marginBottom: "0.625rem",
            }}>
              {STEPS[0].title}
            </h3>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.8rem,1.1vw,0.875rem)",
              color: "var(--text-mid)",
              lineHeight: 1.65,
            }}>
              {STEPS[0].desc}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile fallback list */}
      <div className="hide-desktop" style={{ padding: "2rem var(--gutter)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {STEPS.map((s) => (
          <div key={s.num} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              border: "1.5px solid rgba(201,168,76,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "var(--text-dark)" }}>{s.num}</span>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.2rem" }}>{s.title}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
