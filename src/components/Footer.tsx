import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "How it Works", href: "/how-it-works" },
];

const RESOURCES = [
  { label: "Case Results",        href: "/results" },
  { label: "Blog",                href: "/blog" },
  { label: "FAQs",                href: "/faqs" },
  { label: "Terms & Conditions",  href: "/terms" },
  { label: "Privacy Policy",      href: "/privacy-policy" },
];

const SERVICES = [
  "Legal Answering",
  "Legal Intake",
  "Contract & Retainer",
  "Live Chat & Text",
  "Mass Tort",
  "Virtual Assistants",
  "AI Powered Booking",
  "Outbound Acquisition",
];

const colHead: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8125rem",
  fontWeight: 700,
  color: "var(--charcoal)",
  marginBottom: "1rem",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8125rem",
  color: "var(--charcoal)",
  opacity: 0.7,
  textDecoration: "none",
  lineHeight: 2,
  display: "block",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ivory)",
        borderTop: "1px solid rgba(233,199,128,0.2)",
        paddingTop: "clamp(3rem,5vw,5rem)",
        paddingBottom: "1.5rem",
      }}
    >
      <div className="wrap">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.75fr 1fr 1fr 1fr",
            gap: "clamp(2rem,4vw,4rem)",
            paddingBottom: "clamp(2rem,4vw,3rem)",
            borderBottom: "1px solid rgba(233,199,128,0.18)",
            alignItems: "start",
          }}
        >
          <div>
            <Image
              src="/images/Footer  Logo-Photoroom.png"
              alt="YMG Legal"
              width={145}
              height={54}
              style={{ objectFit: "contain" }}
            />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                color: "var(--charcoal)",
                opacity: 0.7,
                lineHeight: 1.75,
                maxWidth: "240px",
                marginTop: "1.25rem",
              }}
            >
              We help law firms grow with a steady pipeline of qualified cases
            </p>
          </div>

          <div>
            <p style={colHead}>Quick Links</p>
            {QUICK_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <p style={colHead}>Resources</p>
            {RESOURCES.map((l) => (
              <Link key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <p style={colHead}>Services</p>
            {SERVICES.map((s) => (
              <span key={s} style={{ ...linkStyle, cursor: "default" }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            paddingTop: "1.25rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "var(--charcoal)",
              opacity: 0.55,
            }}
          >
            © {new Date().getFullYear()} YMG Legal. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
