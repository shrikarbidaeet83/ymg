import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clientLogos } from "@/data/social-proof";
import { SHOW_CLIENT_LOGOS } from "@/data/site-flags";

/* Right under the hero: who already works with YMG, as a slow logo marquee with the review score. */
export default function ClientLogoStrip() {
  if (!SHOW_CLIENT_LOGOS) return null;
  const row = [...clientLogos, ...clientLogos];

  return (
    <section aria-label="Law firms that work with YMG Legal" className="ymg-logo-strip relative bg-[#FFF5E0] px-5 pb-14 pt-4 dark:bg-[#191917] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#8a6420] dark:text-[#EBC982]">Trusted by plaintiff firms across the US</p>
          <Link href="/about#clients" className="group inline-flex min-h-11 items-center gap-2 text-[0.88rem] font-semibold text-[#8a6420] hover:text-[#5e4416] dark:text-[#EBC982]">
            See the firms we work with
            <ArrowRight size={14} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="ymg-logo-marquee relative mt-5 overflow-hidden rounded-[18px] border border-[#ecdcb6] bg-white/60 py-4 dark:border-white/10 dark:bg-white/[0.03]">
          <ul className="ymg-logo-track flex w-max items-center gap-14 px-7">
            {row.map(({ name, src }, i) => (
              <li key={`${name}-${i}`} aria-hidden={i >= clientLogos.length} className="shrink-0">
                <Link href="/about#clients" tabIndex={i >= clientLogos.length ? -1 : undefined} className="block opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0">
                  <Image src={src} alt={i < clientLogos.length ? name : ""} width={170} height={56} className="h-14 w-auto max-w-[170px] object-contain" />
                </Link>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fffaf0] to-transparent dark:from-[#1d1d1b]" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fffaf0] to-transparent dark:from-[#1d1d1b]" />
        </div>
      </div>
    </section>
  );
}
