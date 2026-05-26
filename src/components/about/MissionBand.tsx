export default function MissionBand() {
  return (
    <section style={{ background: "#A9A9A9" }}>
      <div
        className="wrap"
        style={{
          paddingBlock: "clamp(1.25rem,2.5vw,1.75rem)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.9rem,1.2vw,1rem)",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.6,
            maxWidth: "780px",
            marginInline: "auto",
          }}
        >
          We are a performance-driven legal marketing partner helping law firms
          scale through qualified lead generation, intake excellence, and
          conversion-focused systems.
        </p>
      </div>
    </section>
  );
}
