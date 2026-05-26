import Image from "next/image";

const LOGOS = [
  "Law Logo",
  "Halavanau Law Office P.C.",
  "Alliance Legal",
  "Erol Gulistan Law Firm",
  "Good Law",
  "Attorney & Law",
];

export default function TrustedBySection() {
  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "var(--section-py)", position: "relative", overflow: "hidden" }}>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="trusted-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "clamp(3rem,6vw,7rem)",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                opacity: 0.7,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Trusted by Leading Law Firms
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginBottom: "1.25rem",
              }}
            >
              Proven Results.<br />
              Lasting Partnerships.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--charcoal)",
                opacity: 0.75,
                lineHeight: 1.75,
                maxWidth: "380px",
              }}
            >
              We partner with ambitious law firms nationwide, delivering
              qualified cases, consistent growth, and measurable success.
            </p>
          </div>

          {/* RIGHT — staircase 3 rows of 2 logos, alternating offset */}
          <div className="trusted-stack" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[0, 1, 2].map((row) => {
              const offset = row === 0 ? "0%" : row === 1 ? "12%" : "0%";
              return (
                <div
                  key={row}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    paddingLeft: offset,
                    paddingRight: row === 2 ? "12%" : "0%",
                  }}
                >
                  {[LOGOS[row * 2], LOGOS[row * 2 + 1]].map((logo) =>
                    logo ? (
                      <div key={logo} style={{ position: "relative", aspectRatio: "3/2" }}>
                        <Image
                          src="/images/our partner logo bg-Photoroom.png"
                          alt=""
                          fill
                          style={{ objectFit: "fill", borderRadius: "0.875rem" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "rgba(64,64,64,0.4)",
                              textAlign: "center",
                              lineHeight: 1.45,
                            }}
                          >
                            {logo}
                          </p>
                        </div>
                      </div>
                    ) : null,
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trusted-grid { grid-template-columns: 1fr !important; }
          .trusted-stack > div { padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
