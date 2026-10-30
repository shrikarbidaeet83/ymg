import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/*
 * One header for every home section: a gold-dot eyebrow, a two-tone heading and, on the right,
 * an optional pill link. Repeating this quiet structure is what makes the page read as one site.
 */
export default function SectionHeader({
  eyebrow,
  title,
  accent,
  intro,
  action,
  tone = "light",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  intro?: ReactNode;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
      <div className="max-w-[720px]">
        <p className={`flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] ${dark ? "text-[#EBC982]" : "text-[#8a6420] dark:text-[#EBC982]"}`}>
          <span className="h-2 w-2 rounded-full bg-[#D8B26B] ring-4 ring-[#D8B26B]/20" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className={`mt-3 text-[2rem] leading-[1.06] tracking-[-0.01em] sm:text-[2.6rem] lg:text-[3rem] ${dark ? "text-white" : "text-[#2f3236] dark:text-[#f5ecd8]"}`}>
          {title}
          {accent && <span className={dark ? "text-[#EBC982]" : "text-[#b8893a] dark:text-[#EBC982]"}> {accent}</span>}
        </h2>
        {intro && (
          <p className={`mt-4 max-w-[34rem] text-[1.04rem] leading-[1.6] ${dark ? "text-white/70" : "text-[#5e6064] dark:text-[#bdb6a6]"}`}>{intro}</p>
        )}
      </div>
      {children}
      {action && (
        <Link
          href={action.href}
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
