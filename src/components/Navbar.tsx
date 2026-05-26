"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",           href: "/" },
  { label: "About",          href: "/about" },
  { label: "Services",       href: "/services" },
  { label: "Plans",          href: "/plans" },
  { label: "Blog",           href: "/blog" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact Us",     href: "/contact" },
];

const subscribeTheme = (cb: () => void) => {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
};
const getThemeSnapshot = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";
const getThemeServerSnapshot = () => "light" as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("ymg-theme", next); } catch {}
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 999,
        background: "var(--ivory)",
        borderBottom: "1px solid rgba(233,199,128,0.18)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.25rem",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/images/Hedar Navbar Logo-Photoroom.png"
            alt="YMG Legal"
            width={130}
            height={42}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop pill nav */}
        <nav
          className="nav-desktop"
          style={{
            background: "var(--grad-gold)",
            borderRadius: "999px",
            padding: "3px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: "999px",
              padding: "0.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.1rem",
            }}
          >
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: active ? 700 : 500,
                    color: active ? "var(--ivory)" : "var(--charcoal)",
                    textDecoration: "none",
                    padding: "0.45rem 0.9rem",
                    borderRadius: "999px",
                    background: active ? "var(--grad-gold)" : "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right icons — desktop */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "var(--grad-gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--walnut)", border: "none", cursor: "pointer", padding: 0,
            }}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            href="https://linkedin.com/company/ymg-legal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "var(--grad-gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--walnut)", textDecoration: "none",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none", border: "none", cursor: "pointer", padding: "0.5rem",
            flexDirection: "column", gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: "22px", height: "2px",
                background: "var(--charcoal)", borderRadius: "2px",
              }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile-menu"
          style={{
            background: "var(--ivory)",
            borderTop: "1px solid rgba(233,199,128,0.18)",
            padding: "1rem var(--gutter) 1.5rem",
            display: "flex", flexDirection: "column", gap: "1rem",
          }}
        >
          {NAV_LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: "1rem",
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--gold-deep)" : "var(--charcoal)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            style={{
              alignSelf: "flex-start",
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--grad-gold)", color: "var(--walnut)",
              border: "none", cursor: "pointer",
              padding: "0.5rem 0.9rem", borderRadius: "999px",
              fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 600,
            }}
          >
            {theme === "dark" ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
                Light mode
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                Dark mode
              </>
            )}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
