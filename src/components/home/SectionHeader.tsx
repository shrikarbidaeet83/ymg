import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/*
 * One header for every home section: a two-tone heading and, on the right, an optional pill link.
 * No label above the heading; the heading carries its own weight.
 */
export default function SectionHeader({
  title,
  accent,
  intro,
  action,
  tone = "light",
  align = "start",
  children,
}: {
  title: ReactNode;
  accent?: ReactNode;
  intro?: ReactNode;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
  /** "center" is for the full-width bands that open and close the page story. */
  align?: "start" | "center";
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={`ymg-own-colors ${center ? "flex flex-col items-center gap-5 text-center" : "flex flex-wrap items-end justify-between gap-x-10 gap-y-5"}`}>
      <div className={center ? "max-w-[820px]" : "max-w-[720px]"}>
        <h2 data-reveal className={`text-[2rem] leading-[1.06] tracking-[-0.01em] sm:text-[2.6rem] lg:text-[3rem] ${dark ? "text-white" : "text-[#2f3236] dark:text-[#f5ecd8]"}`}>
          {title}
          {accent && <span className={dark ? "text-[#EBC982]" : "text-[#b8893a] dark:text-[#EBC982]"}> {accent}</span>}
        </h2>
        {intro && (
          <p data-reveal data-reveal-delay="80" className={`mt-4 max-w-[34rem] ${center ? "mx-auto" : ""} text-[1.04rem] leading-[1.6] ${dark ? "text-white/70" : "text-[#5e6064] dark:text-[#bdb6a6]"}`}>{intro}</p>
        )}
      </div>
      {children}
      {action && (
        <Link
          href={action.href}
          data-reveal
          data-reveal-delay="160"
          className={`group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-[0.92rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] ${
            dark
              ? "border-white/25 text-white hover:border-[#EBC982] hover:text-[#EBC982]"
              : "border-[#d9c9a4] bg-white/70 text-[#2f3236] hover:border-[#2f3236] dark:border-white/20 dark:bg-white/[0.05] dark:text-[#f5ecd8] dark:hover:border-[#EBC982]"
          }`}
        >
          {action.label}
          <ArrowUpRight size={16} strokeWidth={2} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
