export type LegalSection = {
  title?: string;
  paragraphs: string[];
  list?: string[];
};

export default function LegalPage({
  eyebrow,
  title,
  subtitle,
  meta,
  sections,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section style={{ background: "var(--grad-walnut)", paddingBlock: "clamp(3rem,5vw,4.5rem)" }}>
        <div className="wrap">
          {eyebrow && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.875rem",
              }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem,4.5vw,3.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--ivory)",
              marginBottom: subtitle ? "1rem" : 0,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "rgba(255,245,224,0.75)",
                lineHeight: 1.7,
                maxWidth: "640px",
              }}
            >
              {subtitle}
            </p>
          )}
          {meta && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                color: "var(--gold)",
                marginTop: "1.5rem",
              }}
            >
              {meta}
            </p>
          )}
        </div>
      </section>

      <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)" }}>
        <div className="wrap" style={{ maxWidth: "880px" }}>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: "2rem" }}>
              {s.title && (
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.25rem,2vw,1.625rem)",
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.title}
                </h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    color: "var(--charcoal)",
                    opacity: 0.85,
                    lineHeight: 1.75,
                    marginBottom: "0.75rem",
                  }}
                >
                  {p}
                </p>
              ))}
              {s.list && (
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
                  {s.list.map((item, k) => (
                    <li
                      key={k}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        color: "var(--charcoal)",
                        opacity: 0.85,
                        lineHeight: 1.75,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
