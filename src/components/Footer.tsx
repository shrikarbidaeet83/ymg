"use client";

import Link from "next/link";
import Image from "next/image";

/* Design: IVORY background, YMG dark logo left, tagline below, then 3 columns:
   Quick Links | Resources | Services */

const QUICK_LINKS = [
  { label: "Home",          href: "/" },
  { label: "About Us",      href: "/about" },
  { label: "Services",      href: "/services" },
  { label: "How it Works",  href: "/how-it-works" },
  { label: "Privacy Policy",href: "/privacy-policy" },
];

const RESOURCES = [
  { label: "Case Results",       href: "/results" },
  { label: "Blog",               href: "/blog" },
  { label: "FAQ's",              href: "/faqs" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy",     href: "/privacy-policy" },
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
  marginBottom: "0.875rem",
  letterSpacing: "0.02em",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8125rem",
  color: "var(--text-mid)",
  textDecoration: "none",
  lineHeight: "2",
  display: "block",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer style={{
      background: "var(--ivory)",
      borderTop: "1px solid rgba(201,168,76,0.18)",
      paddingTop: "clamp(2.5rem,4vw,4rem)",
      paddingBottom: "1.5rem",
    }}>
      <div className="wrap">
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: "clamp(2rem,4vw,4rem)",
          paddingBottom: "clamp(2rem,3vw,3rem)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          alignItems: "start",
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "0.875rem" }}>
              <Image
                src="/images/Footer  Logo.jpg"
                alt="YMG Legal"
                width={140}
                height={52}
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            {/* Vertical divider under logo */}
            <div style={{ width: "1px", height: "2rem", background: "rgba(201,168,76,0.3)", marginBottom: "0.875rem" }}/>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--text-mid)", lineHeight: 1.7, maxWidth: "240px" }}>
              We help law firm grow with a steady pipeline of qualified cases
            </p>
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
          paddingTop: "1.25rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "0.625rem",
        }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--text-mid)", opacity: 0.6 }}>
            © {new Date().getFullYear()} YMG Legal. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <Link href="/terms-and-conditions" style={{ ...linkStyle, lineHeight: 1 }}>Terms</Link>
            <Link href="/privacy-policy"       style={{ ...linkStyle, lineHeight: 1 }}>Privacy</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
