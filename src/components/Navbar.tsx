"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("ymg-theme") === "dark";
  });
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("ymg-theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

const NAV_LINKS = [
  { label: "Home", href: "/", active: true, dropdown: false },
  { label: "About Us", href: "/about", active: false, dropdown: false },
  { label: "Services", href: "/services", active: false, dropdown: true },
  { label: "Blog", href: "/blog", active: false, dropdown: false },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    active: false,
    dropdown: true,
  },
  { label: "Contact Us", href: "/contact", active: false, dropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "var(--ivory)",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.25s, border-bottom 0.25s",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "5rem",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/images/LOGO-Photoroom.png"
            alt="YMG Legal"
            width={155}
            height={50}
            style={{ objectFit: "contain", objectPosition: "left" }}
            priority
          />
        </Link>

        {/* Pill nav â€” desktop */}
        <nav
          className="hide-mobile"
          style={{
            background:
              "linear-gradient(135deg, #EFCD86 0%, #D8B26B 50%, #C9A84C 100%)",
            borderRadius: "999px",
            padding: "2px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 16px rgba(201,168,76,0.22)",
          }}
        >
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: "999px",
              padding: "0.28rem 0.28rem",
              display: "flex",
              alignItems: "center",
              gap: "0.05rem",
            }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: l.active ? 700 : 500,
                  color: l.active ? "var(--ivory)" : "var(--walnut)",
                  textDecoration: "none",
                  padding: "0.42rem 0.85rem",
                  borderRadius: "999px",
                  background: l.active
                    ? "linear-gradient(135deg, #EFCD86 0%, #C9A84C 100%)"
                    : "transparent",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.22rem",
                  whiteSpace: "nowrap",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                {l.label}
                {l.dropdown && (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 4l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right icon buttons â€” desktop */}
        <div
          className="hide-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/ymg-legal"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #EFCD86 0%, #C9A84C 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--walnut)",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(201,168,76,0.3)",
              transition: "filter 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.filter =
                "brightness(1.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.filter = "none")
            }
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Dark / Light mode toggle */}
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #EFCD86 0%, #C9A84C 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--walnut)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(201,168,76,0.3)",
              transition: "filter 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.filter =
                "brightness(1.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.filter = "none")
            }
          >
            {dark ? (
              /* Sun â€” shown in dark mode to switch back to light */
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              /* Moon â€” shown in light mode to switch to dark */
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hide-desktop"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--walnut)",
                borderRadius: "2px",
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  open && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : open && i === 2
                      ? "rotate(-45deg) translate(5px,-5px)"
                      : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--ivory)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            padding: "1.25rem var(--gutter) 1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: l.active ? 700 : 500,
                color: l.active ? "var(--gold-dark)" : "var(--text-dark)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
