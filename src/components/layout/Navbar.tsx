"use client";

import { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { YMGLogo } from "@/components/ui/logo";

type NavSubItem = {
  label: string;
  href: string;
  description: string;
  group?: string;
};

type NavDropdownItem = {
  label: string;
  href: string;
  description: string;
  children?: NavSubItem[];
};

type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Personal Injury Lead Generation",
        href: "/services/personal-injury-leads",
        description: "Qualified opportunities built around firm criteria",
      },
      {
        label: "MVA Lead Generation",
        href: "/services/mva-leads",
        description: "Motor vehicle accident opportunities",
      },
      {
        label: "Mass Tort Lead Generation",
        href: "/services/mass-tort-leads",
        description: "Claimant pipelines for active campaigns",
      },
      {
        label: "Legal Intake Services",
        href: "/services/legal-intake",
        description: "Screening, follow-up, and intake capacity",
      },
      {
        label: "Law Firm Marketing",
        href: "/services/law-firm-marketing",
        description: "Campaigns connected to growth outcomes",
        children: [
          {
            label: "Marketing Overview",
            href: "/services/law-firm-marketing",
            description: "Full-funnel marketing for law firms",
          },
          {
            label: "Google Search Ads",
            href: "/services/google-search-ads",
            description: "High-intent search campaigns",
            group: "Paid advertising",
          },
          {
            label: "Meta Ads",
            href: "/services/meta-ads",
            description: "Facebook and Instagram campaigns",
            group: "Paid advertising",
          },
          {
            label: "Local Services Ads",
            href: "/services/local-services-ads",
            description: "Pay-per-lead campaigns for calls",
            group: "Paid advertising",
          },
          {
            label: "SEO",
            href: "/services/seo",
            description: "Organic visibility for legal searches",
            group: "Organic & web",
          },
          {
            label: "AI Search (AIO)",
            href: "/services/ai-search",
            description: "Visibility in AI search experiences",
            group: "Organic & web",
          },
          {
            label: "Organic Social Media",
            href: "/services/organic-social-media",
            description: "On-brand content that builds trust",
            group: "Organic & web",
          },
          {
            label: "Website Design",
            href: "/services/website-design",
            description: "Conversion-focused legal websites",
            group: "Organic & web",
          },
        ],
      },
      {
        label: "Outsourced Paralegal & Law Firm Support",
        href: "/services/law-firm-support",
        description: "Flexible capacity for legal operations",
      },
    ],
  },
  { label: "Plans", href: "/plans" },
  { label: "Blog", href: "/blog" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact Us", href: "/contact" },
];

function isDropdownItemActive(item: NavDropdownItem, pathname: string) {
  return pathname === item.href || Boolean(item.children?.some((child) => pathname === child.href));
}

function isNavLinkActive(link: NavLink, pathname: string) {
  if (link.href === "/") return pathname === "/";
  return pathname === link.href || Boolean(link.dropdownItems?.some((item) => isDropdownItemActive(item, pathname)));
}

function groupChildren(children: NavSubItem[]) {
  const featured = children.filter((child) => !child.group);
  const groups: { title: string; items: NavSubItem[] }[] = [];

  for (const child of children) {
    if (!child.group) continue;
    const group = groups.find((entry) => entry.title === child.group);
    if (group) group.items.push(child);
    else groups.push({ title: child.group, items: [child] });
  }

  return { featured, groups };
}

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
        href="https://www.linkedin.com/company/ymglegal-attorney-marketing/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open LinkedIn"
        onClick={onAction}
        className="ymg-nav-action-button inline-flex h-10 w-10 items-center justify-center rounded-full text-[#172022] transition-all duration-200 hover:-translate-y-0.5"
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
        className="ymg-nav-action-button inline-flex h-10 w-10 items-center justify-center rounded-full text-[#172022] transition-all duration-200 hover:-translate-y-0.5"
      >
        {darkMode ? <Moon size={20} strokeWidth={1.9} /> : <Sun size={20} strokeWidth={1.9} />}
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sideItemsHidden, setSideItemsHidden] = useState(false);
  const [overDarkBackground, setOverDarkBackground] = useState(false);
  const [activePill, setActivePill] = useState<{ left: number; width: number } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState<string | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const dropdownCloseTimerRef = useRef<number | undefined>(undefined);
  const dropdownHoverTimerRef = useRef<number | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      window.clearTimeout(dropdownCloseTimerRef.current);
      window.clearTimeout(dropdownHoverTimerRef.current);
    };
  }, []);

  const openDesktopDropdown = (items: NavDropdownItem[]) => {
    window.clearTimeout(dropdownCloseTimerRef.current);
    if (desktopDropdownOpen) return;
    const currentIndex = items.findIndex((item) => isDropdownItemActive(item, pathname));
    setActiveDropdownIndex(currentIndex === -1 ? 0 : currentIndex);
    setDesktopDropdownOpen(true);
  };

  // Short delay so the cursor can travel from the trigger into the panel without it closing.
  const scheduleDesktopDropdownClose = () => {
    window.clearTimeout(dropdownCloseTimerRef.current);
    window.clearTimeout(dropdownHoverTimerRef.current);
    dropdownCloseTimerRef.current = window.setTimeout(() => setDesktopDropdownOpen(false), 180);
  };

  const closeDesktopDropdown = () => {
    window.clearTimeout(dropdownCloseTimerRef.current);
    window.clearTimeout(dropdownHoverTimerRef.current);
    setDesktopDropdownOpen(false);
  };

  // Small hover intent so moving diagonally toward the sub-menu doesn't flip to another parent.
  const previewDropdownItem = (index: number) => {
    window.clearTimeout(dropdownHoverTimerRef.current);
    dropdownHoverTimerRef.current = window.setTimeout(() => setActiveDropdownIndex(index), 90);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTouchY: number | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);
      if (currentScrollY <= 80 || currentScrollY < lastScrollY) {
        setSideItemsHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setSideItemsHidden(true);
      }
      lastScrollY = currentScrollY;
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.scrollY <= 80) return setSideItemsHidden(false);
      if (Math.abs(event.deltaY) < 2) return;
      setSideItemsHidden(event.deltaY > 0);
    };

    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentTouchY = event.touches[0]?.clientY;
      if (lastTouchY === null || currentTouchY === undefined) return;
      if (Math.abs(currentTouchY - lastTouchY) >= 4) {
        setSideItemsHidden(currentTouchY < lastTouchY);
        lastTouchY = currentTouchY;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "PageUp", "Home"].includes(event.key)) setSideItemsHidden(false);
      if (["ArrowDown", "PageDown", "End", " "].includes(event.key) && window.scrollY > 80) {
        setSideItemsHidden(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("wheel", handleWheel, { passive: true, capture: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleWheel, true);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
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
          const match = window.getComputedStyle(current).backgroundColor.match(/rgba?\(([^)]+)\)/);
          if (match) {
            const [red, green, blue, alpha = 1] = match[1].split(",").map(Number);
            if (alpha > 0.15) {
              isDark = 0.2126 * red + 0.7152 * green + 0.0722 * blue < 125;
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
  }, [pathname, darkMode, themeReady]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setDarkMode(getInitialDarkMode());
      setThemeReady(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("ymg-theme", darkMode ? "dark" : "light");
  }, [darkMode, themeReady]);

  useEffect(() => {
    let frameId = 0;

    const updateActivePill = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const nav = desktopNavRef.current;
        const activeLink = nav?.querySelector<HTMLElement>('[data-nav-active="true"]');

        if (!nav || !activeLink || activeLink.offsetWidth === 0) {
          setActivePill(null);
          return;
        }

        const activePillInset = 5;

        const navRect = nav.getBoundingClientRect();
        const activeRect = activeLink.getBoundingClientRect();

        setActivePill({
          left: activeRect.left - navRect.left + activePillInset,
          width: Math.max(0, activeRect.width - activePillInset * 2),
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
          scrolled && sideItemsHidden && "ymg-navbar-scrolled",
          overDarkBackground && sideItemsHidden && "ymg-navbar-over-dark"
        )}
      >
        <div className="ymg-navbar-shell mx-auto">
          <div className="ymg-navbar-inner max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="ymg-navbar-logo shrink-0"
            initial={false}
            animate={{
              opacity: sideItemsHidden ? 0 : 1,
              y: sideItemsHidden ? -10 : 0,
              scale: sideItemsHidden ? 0.92 : 1,
              filter: sideItemsHidden ? "blur(5px)" : "blur(0px)",
            }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: sideItemsHidden ? "none" : "auto" }}
          >
            <YMGLogo asLink variant="gold" />
          </motion.div>

          {/* Desktop nav */}
          <nav ref={desktopNavRef} className="ymg-nav-pill relative hidden h-[54px] items-center gap-4 overflow-visible rounded-full bg-[radial-gradient(circle_at_50%_0%,#EFCD86_0%,#EFCD86_48%,#D88268_100%)] px-4 shadow-[0_7px_12px_rgba(71,56,30,0.22)] min-[900px]:flex">
            <span
              className="ymg-nav-morph-surface"
              aria-hidden="true"
              style={darkMode ? { background: "#191917", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.28)" } : undefined}
            />
            {activePill && (
              <>
                <motion.span
                  className="ymg-nav-particle-trail absolute"
                  initial={false}
                  animate={{ x: activePill.left, width: activePill.width }}
                  transition={{ type: "spring", stiffness: 240, damping: 25, mass: 0.95 }}
                  aria-hidden="true"
                />
                <motion.span
                  className="ymg-nav-indicator absolute"
                  initial={false}
                  animate={{ x: activePill.left, width: activePill.width }}
                  transition={{ type: "spring", stiffness: 390, damping: 32, mass: 0.72 }}
                  aria-hidden="true"
                />
              </>
            )}
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(link, pathname);
              const hasMenu = Boolean(link.dropdownItems?.length);

              const navLinkClassName = cn(
                "ymg-nav-link relative z-10 flex h-full items-center gap-1 whitespace-nowrap rounded-full px-4 text-[1.02rem] font-medium text-[#4f5356] transition-all duration-200 hover:text-[#1f2529]",
                isActive ? "ymg-nav-active" : ""
              );

              const navLink = (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  data-nav-active={isActive ? "true" : undefined}
                  className={navLinkClassName}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown size={13} className="mt-px shrink-0 opacity-60" />
                    )}
                  </span>
                </Link>
              );

              if (!hasMenu) return navLink;

              const dropdownItems = link.dropdownItems ?? [];
              const activeItem = dropdownItems[activeDropdownIndex] ?? dropdownItems[0];
              const { featured, groups } = groupChildren(activeItem.children ?? []);

              const renderPanelLink = (item: NavSubItem | NavDropdownItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={(event) => {
                    closeDesktopDropdown();
                    event.currentTarget.blur();
                  }}
                  className="block rounded-[6px] px-3 py-2.5 text-left transition-colors duration-200 hover:bg-[#f4dfb7]/65"
                >
                  <span className="block text-[0.76rem] font-semibold leading-tight text-[#272c2f]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[0.62rem] leading-[1.3] text-[#65615a]">
                    {item.description}
                  </span>
                </Link>
              );

              return (
                <div
                  key={link.href}
                  className="z-20 flex h-full items-center"
                  onMouseEnter={() => openDesktopDropdown(dropdownItems)}
                  onMouseLeave={scheduleDesktopDropdownClose}
                  onFocus={() => openDesktopDropdown(dropdownItems)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeDesktopDropdown();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") closeDesktopDropdown();
                  }}
                >
                  <Link
                    href={link.href}
                    data-nav-active={isActive ? "true" : undefined}
                    aria-haspopup="true"
                    aria-expanded={desktopDropdownOpen}
                    onClick={(event) => {
                      closeDesktopDropdown();
                      event.currentTarget.blur();
                    }}
                    className={navLinkClassName}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={cn("mt-px shrink-0 opacity-60 transition-transform duration-200", desktopDropdownOpen && "rotate-180")}
                      />
                    </span>
                  </Link>
                  {/* Positioned against the nav pill; the top padding bridges the gap so hover isn't lost. */}
                  <div
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 pt-[10px] transition-all duration-200",
                      groups.length ? "w-[min(860px,calc(100vw-48px))]" : "w-[min(720px,calc(100vw-48px))]",
                      desktopDropdownOpen
                        ? "pointer-events-auto visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible translate-y-2 opacity-0"
                    )}
                  >
                    <div className="ymg-nav-dropdown flex rounded-[8px] border border-[#dfbd78]/70 bg-[#fff8e8]/95 shadow-[0_16px_34px_rgba(71,56,30,0.18)] backdrop-blur-xl">
                      <div className="w-[260px] shrink-0 border-r border-[#dfbd78]/45 p-2">
                        {dropdownItems.map((item, index) => {
                          const isPreviewed = index === activeDropdownIndex;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              data-active={isPreviewed ? "true" : undefined}
                              aria-current={pathname === item.href ? "page" : undefined}
                              onMouseEnter={() => previewDropdownItem(index)}
                              onMouseLeave={() => window.clearTimeout(dropdownHoverTimerRef.current)}
                              onFocus={() => setActiveDropdownIndex(index)}
                              onClick={(event) => {
                                closeDesktopDropdown();
                                event.currentTarget.blur();
                              }}
                              className={cn(
                                "block rounded-[6px] px-3 py-2.5 text-left transition-colors duration-200 hover:bg-[#f4dfb7]/65",
                                isPreviewed && "bg-[#f4dfb7]/65"
                              )}
                            >
                              <span className="flex items-center justify-between gap-2 text-[0.76rem] font-semibold leading-tight text-[#272c2f]">
                                {item.label}
                                <ChevronRight
                                  size={13}
                                  className={cn("shrink-0 opacity-0 transition-opacity duration-200", isPreviewed && "opacity-60")}
                                />
                              </span>
                              <span className="mt-1 block text-[0.62rem] leading-[1.3] text-[#65615a]">
                                {item.description}
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="min-w-0 flex-1 p-2">
                        {groups.length ? (
                          // Featured links and each group sit side by side so every section starts on the same row.
                          <div className="grid grid-cols-3 gap-x-2">
                            {[{ title: activeItem.label, items: featured }, ...groups].map((group) => (
                              <div key={group.title} className="min-w-0">
                                <p className="px-3 pb-1 pt-3 text-[0.61rem] font-bold uppercase tracking-[0.14em] text-[#9b7531]">
                                  {group.title}
                                </p>
                                {group.items.map(renderPanelLink)}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <p className="px-3 pb-1 pt-3 text-[0.61rem] font-bold uppercase tracking-[0.14em] text-[#9b7531]">
                              {activeItem.label}
                            </p>
                            {activeItem.children?.length
                              ? featured.map(renderPanelLink)
                              : renderPanelLink({ ...activeItem, label: `View ${activeItem.label}` })}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <motion.div
            className="ymg-nav-actions hidden shrink-0 min-[900px]:flex"
            initial={false}
            animate={{
              opacity: sideItemsHidden ? 0 : 1,
              y: sideItemsHidden ? -10 : 0,
              scale: sideItemsHidden ? 0.92 : 1,
              filter: sideItemsHidden ? "blur(5px)" : "blur(0px)",
            }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: sideItemsHidden ? "none" : "auto" }}
          >
            <HeaderActions darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "-mr-1.5 p-1.5 transition-colors min-[900px]:hidden",
              overDarkBackground ? "text-body-light" : "text-[#3d4145]"
            )}
            onClick={() => {
              setMobileOpenDropdown(null);
              setMobileOpenSubDropdown(null);
              setDrawerOpen(true);
            }}
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
              onClick={() => {
                setMobileOpenDropdown(null);
                setDrawerOpen(false);
              }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="ymg-mobile-drawer fixed top-0 right-0 bottom-0 z-[70] flex w-[80vw] max-w-[320px] flex-col bg-dark"
            >
              <div className="flex items-center justify-between px-6 h-[76px] border-b border-gold/10">
                <YMGLogo asLink variant="gold" />
                <button
                  className="text-body-light/70 hover:text-body-light p-1.5 -mr-1.5 transition-colors"
                  onClick={() => {
                    setMobileOpenDropdown(null);
                    setDrawerOpen(false);
                  }}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav
                data-lenis-prevent
                className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-8 pt-4"
              >
                {navLinks.map((link) => {
                  const isActive = isNavLinkActive(link, pathname);
                  const isDropdownOpen = mobileOpenDropdown === link.href;

                  return (
                    <Fragment key={link.href}>
                      {link.dropdownItems?.length ? (
                        <div
                          className={cn(
                            "flex items-center border-b border-gold/10 text-[0.95rem] font-semibold transition-colors duration-200",
                            isActive
                              ? "text-gold"
                              : "text-body-light/75 hover:text-gold"
                          )}
                        >
                          <Link
                            href={link.href}
                            onClick={() => {
                              setMobileOpenDropdown(null);
                              setDrawerOpen(false);
                            }}
                            className="min-w-0 flex-1 py-3.5"
                          >
                            {link.label}
                          </Link>
                          <button
                            type="button"
                            aria-label={`${isDropdownOpen ? "Close" : "Open"} ${link.label} menu`}
                            aria-expanded={isDropdownOpen}
                            onClick={() =>
                              setMobileOpenDropdown((current) =>
                                current === link.href ? null : link.href
                              )
                            }
                            className="flex h-12 w-12 shrink-0 items-center justify-end"
                          >
                            <ChevronDown
                              size={15}
                              className={cn(
                                "opacity-50 transition-transform duration-200",
                                isDropdownOpen && "rotate-180"
                              )}
                            />
                          </button>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => {
                            setMobileOpenDropdown(null);
                            setDrawerOpen(false);
                          }}
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
                      )}
                      {isDropdownOpen && link.dropdownItems?.map((item) => {
                        const isItemActive = isDropdownItemActive(item, pathname);
                        const isSubDropdownOpen = mobileOpenSubDropdown === item.href;
                        const itemClassName = cn(
                          "text-[0.82rem] font-medium transition-colors duration-200",
                          isItemActive
                            ? "text-gold"
                            : "text-body-light/60 hover:text-gold"
                        );

                        return (
                          <Fragment key={item.href}>
                            {item.children?.length ? (
                              <div className={cn("ml-4 flex items-center border-b border-gold/10", itemClassName)}>
                                <Link
                                  href={item.href}
                                  onClick={() => {
                                    setMobileOpenDropdown(null);
                                    setDrawerOpen(false);
                                  }}
                                  className="min-w-0 flex-1 py-3 pl-3"
                                >
                                  {item.label}
                                </Link>
                                <button
                                  type="button"
                                  aria-label={`${isSubDropdownOpen ? "Close" : "Open"} ${item.label} menu`}
                                  aria-expanded={isSubDropdownOpen}
                                  onClick={() =>
                                    setMobileOpenSubDropdown((current) =>
                                      current === item.href ? null : item.href
                                    )
                                  }
                                  className="flex h-11 w-12 shrink-0 items-center justify-end"
                                >
                                  <ChevronDown
                                    size={14}
                                    className={cn(
                                      "opacity-50 transition-transform duration-200",
                                      isSubDropdownOpen && "rotate-180"
                                    )}
                                  />
                                </button>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => {
                                  setMobileOpenDropdown(null);
                                  setDrawerOpen(false);
                                }}
                                className={cn("ml-4 border-b border-gold/10 py-3 pl-3", itemClassName)}
                              >
                                {item.label}
                              </Link>
                            )}
                            {isSubDropdownOpen && item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => {
                                  setMobileOpenDropdown(null);
                                  setDrawerOpen(false);
                                }}
                                className={cn(
                                  "ml-8 border-b border-gold/10 py-2.5 pl-3 text-[0.78rem] font-medium transition-colors duration-200",
                                  pathname === child.href
                                    ? "text-gold"
                                    : "text-body-light/50 hover:text-gold"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </Fragment>
                        );
                      })}
                    </Fragment>
                  );
                })}

                <div className="border-b border-gold/10 py-5">
                  <HeaderActions
                    darkMode={darkMode}
                    onAction={() => {
                      setMobileOpenDropdown(null);
                      setDrawerOpen(false);
                    }}
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
