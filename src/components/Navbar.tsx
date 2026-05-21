"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home",           href: "/",              active: true,  dropdown: false },
  { label: "About",          href: "/about",          active: false, dropdown: false },
  { label: "Services",       href: "/services",       active: false, dropdown: true  },
  { label: "Plans",          href: "/plans",          active: false, dropdown: false },
  { label: "Blog",           href: "/blog",           active: false, dropdown: false },
  { label: "Practice Areas", href: "/practice-areas", active: false, dropdown: true  },
  { label: "Contact Us",     href: "/contact",        active: false, dropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      background: "var(--ivory)",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.05)" : "none",
      transition: "box-shadow 0.25s",
    }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "5rem", gap: "1rem",
      }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/images/LOGO.jpg"
            alt="YMG Legal"
            width={160}
            height={52}
            style={{ objectFit: "contain", objectPosition: "left" }}
            priority
          />
        </Link>

        {/* ── Pill nav (desktop) ── */}
        <nav className="hide-mobile" style={{
          background: "var(--gold)",
          borderRadius: "999px",
          padding: "0.3rem 0.4rem",
          display: "flex", alignItems: "center", gap: "0.1rem",
        }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: l.active ? 700 : 500,
              color: l.active ? "var(--walnut)" : "rgba(61,43,15,0.78)",
              textDecoration: "none",
              padding: "0.45rem 0.875rem",
              borderRadius: "999px",
              background: l.active ? "var(--ivory)" : "transparent",
              display: "inline-flex", alignItems: "center", gap: "0.2rem",
              whiteSpace: "nowrap",
              transition: "background 0.15s, color 0.15s",
            }}>
              {l.label}
              {l.dropdown && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* ── Right icons ── */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              border: "1.5px solid rgba(201,168,76,0.45)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--gold)", textDecoration: "none",
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <button style={{
            width: "34px", height: "34px", borderRadius: "50%",
            border: "1.5px solid rgba(201,168,76,0.45)",
            background: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--gold)",
          }} aria-label="Settings">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
            </svg>
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button className="hide-desktop" onClick={() => setOpen(!open)} aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "5px" }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "2px",
              background: "var(--walnut)", borderRadius: "2px",
              transition: "transform 0.2s, opacity 0.2s",
              transform: open && i === 0 ? "rotate(45deg) translate(5px,5px)" : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
              opacity: open && i === 1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--ivory)", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "1.25rem var(--gutter) 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 500, color: "var(--text-dark)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
