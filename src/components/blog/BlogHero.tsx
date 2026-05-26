export default function BlogHero() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(2.5rem,4vw,3.5rem)" }}>
      <div className="wrap">
        <div
          style={{
            position: "relative",
            borderRadius: "1rem",
            overflow: "hidden",
            minHeight: "clamp(240px,32vw,360px)",
            background:
              "linear-gradient(135deg, rgba(70,51,15,0.85), rgba(64,64,64,0.7)), linear-gradient(135deg, #46330F, #404040)",
            display: "flex",
            alignItems: "center",
            padding: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          <div style={{ maxWidth: "640px", position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                color: "var(--gold)",
                marginBottom: "0.75rem",
                letterSpacing: "0.02em",
              }}
            >
              Expert Strategies, Trends &amp; Industry Updates
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem,4.2vw,3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--ivory)",
                marginBottom: "1rem",
              }}
            >
              Insights That Drive<br />
              Legal Growth
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "rgba(255,245,224,0.85)",
                lineHeight: 1.65,
                maxWidth: "520px",
              }}
            >
              Discover actionable insights, proven marketing strategies, and
              the latest industry trends to help law firms generate more cases,
              scale faster, and stay ahead in a competitive market.
            </p>
          </div>

          {/* play button decoration */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              right: "clamp(2rem,5vw,4rem)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "clamp(50px,7vw,72px)",
              height: "clamp(50px,7vw,72px)",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--ivory)">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
