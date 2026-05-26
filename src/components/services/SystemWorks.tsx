const STEPS = [
  {
    title: "Call Reception",
    desc: "Incoming calls are answered by trained legal intake specialists.",
    side: "right",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--walnut)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Lead Qualification",
    desc: "We gather important case details and verify lead quality.",
    side: "left",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--walnut)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Intake & Routing",
    desc: "Qualified inquiries are routed directly to your team or CRM.",
    side: "right",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--walnut)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10" />
        <path d="M20.49 15A9 9 0 015.64 18.36L1 14" />
      </svg>
    ),
  },
  {
    title: "Follow-Up Support",
    desc: "Ensure timely communication and improved conversion opportunities.",
    side: "left",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--walnut)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

// Step icon positions along the road (percent of width / height).
// Pattern: right, left, right, left — matching design.
const NODE_POS = [
  { x: 70, y: 14 },
  { x: 30, y: 38 },
  { x: 70, y: 62 },
  { x: 30, y: 86 },
];

export default function SystemWorks() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem,4vw,3.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--charcoal)",
              opacity: 0.7,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.625rem",
            }}
          >
            System Works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.875rem,3.5vw,2.75rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.15,
            }}
          >
            How Our Legal Answering System Works
          </h2>
        </div>

        <div
          className="sysworks-stage"
          style={{
            position: "relative",
            maxWidth: "920px",
            marginInline: "auto",
            aspectRatio: "920 / 520",
          }}
        >
          {/* Road SVG */}
          <svg
            viewBox="0 0 920 520"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          >
            {/* gold pillar — start (top-LEFT, where road begins) */}
            <rect x="240" y="0" width="18" height="48" fill="#D8B26B" rx="3" />
            {/* gold pillar — end (bottom-RIGHT, where road terminates) */}
            <rect x="662" y="472" width="18" height="48" fill="#D8B26B" rx="3" />

            {/* road shape — wide stroke. Compact snake; pillars and U-bends at ~28%/72% of viewBox so labels have room outside. */}
            <path
              d="M 258 26
                 C 360 26, 560 26, 642 26
                 C 712 26, 712 200, 642 200
                 C 540 200, 380 200, 278 200
                 C 208 200, 208 320, 278 320
                 C 380 320, 540 320, 642 320
                 C 712 320, 712 450, 642 450
                 C 540 450, 380 450, 278 450
                 C 208 450, 208 496, 320 496
                 C 460 496, 580 496, 662 496"
              fill="none"
              stroke="#2A2A2A"
              strokeWidth="38"
              strokeLinecap="round"
            />
            <path
              d="M 258 26
                 C 360 26, 560 26, 642 26
                 C 712 26, 712 200, 642 200
                 C 540 200, 380 200, 278 200
                 C 208 200, 208 320, 278 320
                 C 380 320, 540 320, 642 320
                 C 712 320, 712 450, 642 450
                 C 540 450, 380 450, 278 450
                 C 208 450, 208 496, 320 496
                 C 460 496, 580 496, 662 496"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="9 11"
              strokeLinecap="round"
            />
          </svg>

          {/* Step icons — sit on the road at NODE_POS */}
          {STEPS.map((step, i) => {
            const p = NODE_POS[i];
            return (
              <div
                key={`icon-${step.title}`}
                style={{
                  position: "absolute",
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: "translate(-50%, -50%)",
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  background: "var(--grad-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(216,178,107,0.45)",
                  zIndex: 3,
                }}
              >
                {step.icon}
              </div>
            );
          })}

          {/* Step labels — positioned outside the road's outer wall */}
          {STEPS.map((step, i) => {
            const p = NODE_POS[i];
            const onRight = step.side === "right";
            return (
              <div
                key={`label-${step.title}`}
                className="sysworks-label"
                style={{
                  position: "absolute",
                  top: `${p.y}%`,
                  transform: "translateY(-50%)",
                  ...(onRight
                    ? { left: "80%", textAlign: "left" }
                    : { right: "80%", textAlign: "right" }),
                  width: "170px",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "var(--charcoal)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    color: "var(--charcoal)",
                    opacity: 0.7,
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback — stacked rows */}
        <div className="sysworks-mobile" style={{ display: "none", marginTop: "1.5rem" }}>
          {STEPS.map((step) => (
            <div
              key={step.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "var(--grad-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--charcoal)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    color: "var(--charcoal)",
                    opacity: 0.7,
                    lineHeight: 1.55,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sysworks-stage { display: none; }
          .sysworks-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
