"use client";

import { useState } from "react";

const AREAS = ["Personal Injury", "Mass Tort", "Hair Relaxer", "Talcum Powder", "Tylenol Pregnancy", "Other"];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "(424) 447-1147",
    href: "tel:4244471147",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "info@ymg-legal.com",
    href: "mailto:info@ymg-legal.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Las Vegas Nevada",
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://linkedin.com/company/ymg-legal",
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "2.875rem",
  padding: "0 0.875rem",
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  background: "#FFFFFF",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "0.5rem",
  color: "var(--charcoal)",
  outline: "none",
  appearance: "none",
};

export default function ContactSection({
  eyebrow = "Contact Us",
  heading = "Let's Start a Conversation",
  body,
  variant = "dark",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", practiceArea: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" style={{ background: isLight ? "var(--ivory)" : "var(--grad-walnut)", position: "relative" }}>
      <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBlock: "clamp(4rem,7vw,7rem)" }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: isLight ? "var(--charcoal)" : "var(--gold)",
            opacity: isLight ? 0.7 : 1,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.875rem",
          }}
        >
          {eyebrow}
        </p>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem,6vw,7rem)",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem,4vw,3.25rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: isLight ? "var(--charcoal)" : "var(--ivory)",
                marginBottom: body ? "1.25rem" : "2.5rem",
              }}
            >
              {heading}
            </h2>

            {body && (
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  color: isLight ? "var(--charcoal)" : "rgba(255,245,224,0.75)",
                  opacity: isLight ? 0.75 : 1,
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  maxWidth: "440px",
                }}
              >
                {body}
              </p>
            )}

            <div
              className="contact-items"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, auto)",
                gap: "clamp(1.5rem,3vw,2.5rem)",
                justifyContent: "start",
              }}
            >
              {CONTACT_ITEMS.map((item) => {
                const labelColor = isLight ? "var(--charcoal)" : "var(--gold)";
                const Label = item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8125rem",
                      color: labelColor,
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8125rem",
                      color: labelColor,
                    }}
                  >
                    {item.label}
                  </span>
                );
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: isLight ? "rgba(64,64,64,0.7)" : "rgba(255,245,224,0.6)" }}>{item.icon}</span>
                    {Label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — form card */}
          <div
            style={{
              background: isLight ? "var(--muted)" : "#FFFFFF",
              borderRadius: "1.125rem",
              padding: "clamp(1.875rem,3.5vw,2.5rem)",
              boxShadow: isLight ? "0 4px 24px rgba(70,51,15,0.1)" : "0 8px 56px rgba(0,0,0,0.2)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              Book Your Free Strategy Call
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                color: "var(--charcoal)",
                opacity: 0.7,
                marginBottom: "1.5rem",
              }}
            >
              Tell us about your firm and we&apos;ll show you how we can help.
            </p>

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <input name="fullName" type="text" required placeholder="Full Name" value={form.fullName} onChange={handle} style={inputStyle} />
                <input name="email" type="email" required placeholder="Email" value={form.email} onChange={handle} style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <input name="phone" type="tel" required placeholder="Phone Number" value={form.phone} onChange={handle} style={inputStyle} />
                <select name="practiceArea" required value={form.practiceArea} onChange={handle} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="" disabled>
                    Practice Area
                  </option>
                  {AREAS.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "3rem",
                  marginTop: "0.5rem",
                  background: "#1A1A1A",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "filter 0.15s",
                }}
              >
                Book My Free Call
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-items { grid-template-columns: repeat(2, auto) !important; }
        }
        @media (max-width: 480px) {
          .contact-items { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus {
          border-color: var(--gold-deep) !important;
          box-shadow: 0 0 0 3px rgba(233,199,128,0.15);
        }
      `}</style>
    </section>
  );
}
