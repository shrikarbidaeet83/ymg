import Image from "next/image";

const STEPS = [
  { num: "01", title: "Generate",  desc: "We launch targeted digital campaigns to attract high-intent legal prospects actively searching for help." },
  { num: "02", title: "Qualify",   desc: "AI-driven intake screens and qualifies leads in real time, instantly separating serious cases from noise." },
  { num: "03", title: "Engage",    desc: "Intake specialists follow up instantly via call, text, and live chat to keep prospects warm." },
  { num: "04", title: "Book",      desc: "Qualified leads are scheduled automatically and synced directly to your calendar." },
  { num: "05", title: "Sign",      desc: "We support the retainer process end-to-end for a smooth, confident close." },
];

/*
  Arc image has 5 dots at positions (as % of image width/height):
    01 → top-center  (~50%, 2%)
    02 → right       (~92%, 48%)
    03 → bottom-right (not shown in image, implied)
    04 → bottom-left  (not shown in image, implied)
    05 → left        (~8%, 48%)
  Labels sit outside each dot with their step title + description.
*/

type LabelPos = {
  top?: string; bottom?: string;
  left?: string; right?: string;
  textAlign: "left" | "right" | "center";
  maxWidth: string;
};

const LABEL_POSITIONS: LabelPos[] = [
  // 01 — top center
  { top: "-18%", left: "50%", textAlign: "center", maxWidth: "220px" },
  // 02 — right side
  { top: "30%", right: "-26%", textAlign: "left", maxWidth: "190px" },
  // 03 — bottom right (below arc, right quadrant)
  { bottom: "-8%", right: "8%", textAlign: "left", maxWidth: "190px" },
  // 04 — bottom left (below arc, left quadrant)
  { bottom: "-8%", left: "8%", textAlign: "right", maxWidth: "190px" },
  // 05 — left side
  { top: "30%", left: "-26%", textAlign: "right", maxWidth: "190px" },
];

const LABEL_TRANSFORMS = [
  "translateX(-50%)",   // 01 center
  "none",               // 02 right
  "none",               // 03 bottom-right
  "none",               // 04 bottom-left
  "none",               // 05 left
];

export default function HowItWorksSection() {
  return (
    <section style={{ background: "var(--ivory)", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)", overflow: "visible" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem,4vw,3rem)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-mid)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Our Proven 5-Step
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 400, color: "var(--text-dark)" }}>
            Case Acquisition System
          </h2>
        </div>

        {/* Arc diagram — desktop */}
        <div className="hide-mobile" style={{
          position: "relative",
          width: "100%",
          maxWidth: "820px",
          marginInline: "auto",
          paddingTop: "10%",    /* room for label above arc */
          paddingBottom: "14%", /* room for labels below arc */
          paddingInline: "14%", /* room for labels on sides */
        }}>
          {/* The arc illustration */}
          <div style={{ position: "relative", width: "100%" }}>
            <Image
              src="/images/Case Acquisition System illustration.jpg"
              alt="5-step case acquisition arc diagram"
              width={860}
              height={440}
              style={{ width: "100%", height: "auto", display: "block" }}
            />

            {/* Step labels — positioned relative to arc image */}
            {STEPS.map((step, i) => (
              <div key={step.num} style={{
                position: "absolute",
                ...LABEL_POSITIONS[i],
                transform: LABEL_TRANSFORMS[i],
                textAlign: LABEL_POSITIONS[i].textAlign,
                maxWidth: LABEL_POSITIONS[i].maxWidth,
              }}>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.1rem,2vw,1.5rem)",
                  fontWeight: 400,
                  color: "var(--text-dark)",
                  marginBottom: "0.3rem",
                  lineHeight: 1.1,
                }}>
                  {step.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.7rem,0.95vw,0.8rem)",
                  color: "var(--text-mid)",
                  lineHeight: 1.6,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback list */}
        <div className="hide-desktop" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
          {STEPS.map((s) => (
            <div key={s.num} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                border: "1.5px solid rgba(201,168,76,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "var(--text-dark)" }}>{s.num}</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.25rem" }}>{s.title}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
