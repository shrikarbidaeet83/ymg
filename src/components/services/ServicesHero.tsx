import Link from "next/link";

export default function ServicesHero() {
  return (
    <section
      style={{
        background: "var(--ivory)",
        paddingBlock: "clamp(3.5rem,6vw,5.5rem)",
        textAlign: "center",
      }}
    >
      <div className="wrap" style={{ maxWidth: "780px" }}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem,4.5vw,3.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--charcoal)",
            marginBottom: "1.25rem",
          }}
        >
          Professional Legal Answering<br />
          Services for Law Firms
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.125rem,1.6vw,1.4rem)",
            color: "var(--charcoal)",
            lineHeight: 1.5,
            marginBottom: "1.25rem",
          }}
        >
          Never miss a potential case with 24/7 legal call handling and intake support.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--charcoal)",
            opacity: 0.75,
            lineHeight: 1.7,
            marginBottom: "2rem",
            maxWidth: "640px",
            marginInline: "auto",
          }}
        >
          Our trained legal intake specialists handle every call with
          professionalism, urgency, and accuracy — helping your firm capture
          more qualified leads and improve client experience.
        </p>
        <div style={{ display: "inline-flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center" }}>
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
              boxShadow: "0 2px 12px rgba(216,178,107,0.4)",
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
              color: "var(--gold-deep)",
              textDecoration: "none",
              border: "1.5px solid var(--gold-deep)",
              borderRadius: "0.375rem",
            }}
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
