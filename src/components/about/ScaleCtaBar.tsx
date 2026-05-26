import Link from "next/link";

export default function ScaleCtaBar() {
  return (
    <section style={{ background: "var(--charcoal)" }}>
      <div
        className="wrap"
        style={{
          paddingBlock: "clamp(1.5rem,3vw,2.25rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(1.5rem,3vw,2.5rem)",
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem,2.8vw,2.25rem)",
            fontWeight: 400,
            color: "var(--gold)",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Ready to Scale Your Firm?
        </h2>
        <div style={{ display: "flex", gap: "0.875rem", flexShrink: 0 }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "2.875rem",
              paddingInline: "1.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--walnut)",
              textDecoration: "none",
              background: "var(--grad-gold)",
              borderRadius: "0.375rem",
            }}
          >
            Get More Cases
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "2.875rem",
              paddingInline: "1.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--gold)",
              textDecoration: "none",
              border: "1.5px solid rgba(233,199,128,0.5)",
              borderRadius: "0.375rem",
            }}
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
