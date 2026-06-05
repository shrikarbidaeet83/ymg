"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
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
  { label: "Blog", href: "/blog" },
  { label: "Practice Areas", href: "/practice-areas", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          "ymg-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-gold/20"
            : "bg-[#f8efd9]/85 backdrop-blur-sm"
        )}
      >
        <div className="ymg-navbar-inner max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between gap-6">
          {/* Logo */}
          <YMGLogo asLink variant="gold" className="ymg-navbar-logo" />

          {/* Desktop nav */}
          <nav className="ymg-nav-pill hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "ymg-nav-link flex items-center gap-0.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    isActive
                      ? "text-gold underline underline-offset-4 decoration-gold/50"
                      : scrolled
                        ? "text-body-light/75 hover:text-gold"
                        : "text-[#5d5f61]/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={13} className="opacity-60 mt-px shrink-0" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="ymg-nav-actions hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+18000000000"
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                scrolled
                  ? "text-body-light/65 hover:text-body-light"
                  : "text-[#5d5f61]/70 hover:text-[#3d4145]"
              )}
            >
              <Phone size={13} className="text-gold/70" />
              +1 (800) 000-0000
            </a>

            <Link
              href="/contact"
              className="ymg-nav-cta border border-gold text-gold px-5 py-2 rounded-btn text-sm font-medium transition-all duration-200 hover:bg-gold hover:text-dark hover:shadow-gold-glow"
            >
              Book Strategy Call
            </Link>
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
      </header>

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
                        "flex items-center justify-between py-3.5 text-[0.95rem] font-medium border-b border-gold/10 transition-colors duration-200",
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

                <a
                  href="tel:+18000000000"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-2 py-3.5 text-sm text-body-light/60 hover:text-body-light transition-colors border-b border-gold/10"
                >
                  <Phone size={13} className="text-gold/70" />
                  +1 (800) 000-0000
                </a>
              </nav>

              <div className="px-6 pb-10 pt-6">
                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="block w-full text-center border border-gold text-gold px-5 py-3 rounded-btn text-sm font-medium transition-all duration-200 hover:bg-gold hover:text-dark"
                >
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
