"use client";

import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home",           href: "/" },
  { label: "About Us",       href: "/about" },
  { label: "Services",       href: "/services" },
  { label: "How it Works",   href: "/how-it-works" },
  { label: "Case Results",   href: "/results" },
  { label: "Contact Us",     href: "/contact" },
];

const RESOURCES = [
  { label: "Blog",               href: "/blog" },
  { label: "FAQ's",              href: "/faqs" },
  { label: "Privacy Policy",     href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const SERVICES = [
  "Legal Answering",
  "Legal Intake",
  "Contract & Retainer",
  "Live Chat & Text",
  "Mass Tort",
  "Virtual Assistants",
  "AI-Powered Booking",
  "Outbound Acquisition",
];

const colHead: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8125rem",
  fontWeight: 700,
  color: "var(--text-dark)",
  marginBottom: "1rem",
  letterSpacing: "0.01em",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8125rem",
  color: "var(--text-mid)",
  textDecoration: "none",
  lineHeight: "2.1",
  display: "block",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer style={{
      background: "var(--ivory)",
      borderTop: "1px solid rgba(201,168,76,0.18)",
      paddingTop: "clamp(3rem,5vw,5rem)",
      paddingBottom: "1.5rem",
    }}>
      <div className="wrap">

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.75fr 1fr 1fr 1fr",
          gap: "clamp(2rem,4vw,4rem)",
          paddingBottom: "clamp(2.5rem,4vw,3.5rem)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          alignItems: "start",
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <Image
                src="/images/Footer  Logo-Photoroom.png"
                alt="YMG Legal"
                width={145}
                height={54}
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <div style={{ width: "1px", height: "2rem", background: "rgba(201,168,76,0.3)", marginBottom: "1rem" }}/>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--text-mid)", lineHeight: 1.75, maxWidth: "240px" }}>
              We help law firms grow with a steady pipeline of qualified cases.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.625rem", marginTop: "1.25rem" }}>
              <a href="https://linkedin.com/company/ymg-legal" target="_blank" rel="noopener noreferrer"
                style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  border: "1.5px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--gold)", textDecoration: "none",
                }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={colHead}>Quick Links</p>
            {QUICK_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <p style={colHead}>Resources</p>
            {RESOURCES.map((l) => (
              <Link key={l.href} href={l.href} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={colHead}>Services</p>
            {SERVICES.map((s) => (
              <span key={s} style={{ ...linkStyle, cursor: "default" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "1.375rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "0.625rem",
        }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--text-mid)", opacity: 0.55 }}>
            © {new Date().getFullYear()} YMG Legal. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ label: "Terms", href: "/terms-and-conditions" }, { label: "Privacy", href: "/privacy-policy" }].map((l) => (
              <Link key={l.href} href={l.href} style={{ ...linkStyle, lineHeight: 1 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
