import Image from "next/image";

export default function HowItWorksSection() {
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
            Our Proven 5 Step
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4vw,3.25rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
            }}
          >
            Case Acquisition System
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "780px",
            marginInline: "auto",
          }}
        >
          <Image
            src="/images/Case Acquisition System illustration-Photoroom.png"
            alt="5-step case acquisition arc diagram"
            width={860}
            height={460}
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          {/* Centered Generate label inside arc */}
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              textAlign: "center",
              maxWidth: "300px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.25rem,2vw,1.625rem)",
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: "0.5rem",
              }}
            >
              Generate
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                color: "var(--charcoal)",
                opacity: 0.7,
                lineHeight: 1.6,
              }}
            >
              We launch targeted digital campaigns to attract high-intent legal
              prospects actively searching for help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
