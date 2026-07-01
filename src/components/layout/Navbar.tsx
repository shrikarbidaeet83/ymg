"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { YMGLogo } from "@/components/ui/logo";

type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Plans", href: "/plans" },
  { label: "Blog", href: "/blog" },
  { label: "Practice Areas", href: "/practice-areas", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];  

function getInitialDarkMode() {
  if (typeof window === "undefined") return false;

  const savedTheme = window.localStorage.getItem("ymg-theme");
  if (savedTheme) return savedTheme === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function HeaderActions({
  darkMode,
  onAction,
  onToggleDarkMode,
}: {
  darkMode: boolean;
  onAction?: () => void;
  onToggleDarkMode: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open LinkedIn"
        onClick={onAction}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[#d9ae5d] text-[#3d4145] shadow-[0_8px_14px_rgba(71,56,30,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#efcd86]"
      >
        <span className="font-sans text-[1.45rem] font-medium leading-none tracking-[0]">
          in
        </span>
      </a>
      <button
        type="button"
        aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={darkMode}
        onClick={() => {
          onToggleDarkMode();
          onAction?.();
        }}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[#d9ae5d] text-[#3d4145] shadow-[0_8px_14px_rgba(71,56,30,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#efcd86]"
      >
        {darkMode ? <Moon size={20} strokeWidth={1.9} /> : <Sun size={20} strokeWidth={1.9} />}
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overDarkBackground, setOverDarkBackground] = useState(false);
  const [activePill, setActivePill] = useState<{ left: number; width: number } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const headerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const updateBackgroundTheme = () => {
      const header = headerRef.current;
      if (!header) return;

      const sampleY = Math.min(window.innerHeight - 1, header.offsetTop + header.offsetHeight / 2);
      const elements = document.elementsFromPoint(window.innerWidth / 2, sampleY);
      let isDark = false;

      outer: for (const element of elements) {
        if (header.contains(element)) continue;

        let current: Element | null = element;
        while (current) {
          const color = window.getComputedStyle(current).backgroundColor;
          const match = color.match(/rgba?\(([^)]+)\)/);

          if (match) {
            const values = match[1].split(",").map(Number);
            const [red, green, blue, alpha = 1] = values;

            if (alpha > 0.15) {
              const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
              isDark = luminance < 125;
              break outer;
            }
          }

          current = current.parentElement;
        }
      }

      setOverDarkBackground(isDark);
    };

    const scheduleThemeUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateBackgroundTheme);
    };

    scheduleThemeUpdate();
    window.addEventListener("scroll", scheduleThemeUpdate, { passive: true });
    window.addEventListener("resize", scheduleThemeUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleThemeUpdate);
      window.removeEventListener("resize", scheduleThemeUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("ymg-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    let frameId = 0;

    const updateActivePill = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const nav = desktopNavRef.current;
        const activeLink = nav?.querySelector<HTMLElement>('[aria-current="page"]');

        if (!nav || !activeLink || activeLink.offsetWidth === 0) return;

        setActivePill({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      });
    };

    updateActivePill();
    const resizeObserver = new ResizeObserver(updateActivePill);
    if (desktopNavRef.current) resizeObserver.observe(desktopNavRef.current);
    window.addEventListener("resize", updateActivePill);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateActivePill);
    };
  }, [pathname]);

  const toggleDarkMode = () => setDarkMode((current) => !current);

  return (
    <>
      <motion.header
        ref={headerRef}
        layoutRoot
        className={cn(
          "ymg-navbar fixed left-0 right-0 top-5 z-50 transition-all duration-300",
          scrolled && "ymg-navbar-scrolled",
          overDarkBackground && "ymg-navbar-over-dark"
        )}
      >
        <div className="ymg-navbar-shell mx-auto">
          <div className="ymg-navbar-inner max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between gap-6">
          {/* Logo */}
          <YMGLogo asLink variant="gold" className="ymg-navbar-logo" />

          {/* Desktop nav */}
          <nav ref={desktopNavRef} className="ymg-nav-pill relative hidden h-[54px] items-center gap-4 overflow-visible rounded-full border border-white/80 bg-[radial-gradient(circle_at_50%_0%,#EFCD86_0%,#EFCD86_48%,#D88268_100%)] px-4 shadow-[0_7px_12px_rgba(71,56,30,0.22)] lg:flex">
            <span className="ymg-nav-morph-surface" aria-hidden="true" />
            {activePill && (
              <motion.span
                className="ymg-nav-indicator absolute"
                initial={false}
                animate={{ x: activePill.left, width: activePill.width }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 34,
                  mass: 0.8,
                }}
                aria-hidden="true"
              />
            )}
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "ymg-nav-link relative z-10 flex h-full items-center gap-1 whitespace-nowrap rounded-full px-4 text-[1.02rem] font-medium text-[#4f5356] transition-all duration-200 hover:text-[#1f2529]",
                    isActive ? "ymg-nav-active" : ""
                  )}
                >
                  <motion.span
                    className="relative z-10 flex items-center gap-1"
                    animate={{
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 28,
                      mass: 0.55,
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown size={13} className="mt-px shrink-0 opacity-60" />
                    )}
                  </motion.span>
                </Link>
              );
            })}
          </nav>

          <div className="ymg-nav-actions hidden shrink-0 lg:flex">
            <HeaderActions darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "lg:hidden p-1.5 -mr-1.5 transition-colors",
              scrolled ? "text-body-light" : "text-[#3d4145]"
            )}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black"
              onClick={() => setDrawerOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[80vw] max-w-[320px] bg-dark flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[76px] border-b border-gold/10">
                <YMGLogo asLink variant="gold" />
                <button
                  className="text-body-light/70 hover:text-body-light p-1.5 -mr-1.5 transition-colors"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col px-6 pt-4 flex-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={cn(
                        "flex items-center justify-between border-b border-gold/10 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200",
                        isActive
                          ? "text-gold"
                          : "text-body-light/75 hover:text-gold"
                      )}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown size={15} className="opacity-50" />
                      )}
                    </Link>
                  );
                })}

                <div className="border-b border-gold/10 py-5">
                  <HeaderActions
                    darkMode={darkMode}
                    onAction={() => setDrawerOpen(false)}
                    onToggleDarkMode={toggleDarkMode}
                  />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
