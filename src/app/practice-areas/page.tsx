import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import CriteriaScreening from "@/components/illustrations/CriteriaScreening";
import { activeItems, practiceAreas, type PracticeArea } from "@/data/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas & Active Campaigns | YMG Legal",
  description:
    "Case acquisition and intake support for plaintiff law firms across personal injury, mass torts, class action, medical malpractice, workers' compensation and Social Security disability.",
};

// Areas with a dedicated service page link there; the rest go to a conversation.
const serviceLink: Record<string, { href: string; label: string }> = {
  "personal-injury": { href: "/services/personal-injury-leads", label: "Personal Injury Lead Generation" },
  "mass-torts": { href: "/services/mass-tort-leads", label: "Mass Tort & Class Action Lead Generation" },
  "class-action": { href: "/services/class-action-leads", label: "Class Action Lead Generation" },
};

function AreaIcon({ area, size = 34 }: { area: PracticeArea; size?: number }) {
  if (area.icon) return <Image src={area.icon} alt="" width={48} height={48} className="h-[38px] w-[38px] object-contain" />;
  if (area.Icon) return <area.Icon size={size} strokeWidth={1.4} className="text-[#3d4145]" aria-hidden="true" />;
  return null;
}

export default function PracticeAreasPage() {
  return (
    <div className="bg-[#FFF5E0]">
      {/* Hero */}
      <section className="ymg-section-padding relative isolate overflow-hidden !pt-[150px] lg:!pt-[170px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute right-[-80px] top-[45%] -z-10 w-[320px] -translate-y-1/2 opacity-70 mix-blend-multiply sm:w-[460px] lg:w-[580px]"
        />
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[1rem] font-medium text-[#8a6420]">Six litigation types · one acquisition and intake partner</p>
          <h1 className="mt-4 max-w-[16ch] text-[2.6rem] leading-[1.04] text-[#2f3236] sm:text-[3.4rem] lg:text-[4rem]">
            Practice Areas &amp; <span className="text-[#c9a14f]">Active Campaigns</span>
          </h1>
          <p className="mt-6 max-w-[40rem] text-[1.08rem] leading-[1.6] text-[#55585c]">
            YMG Legal has active campaign and intake experience across these litigation types. Every campaign is built
            around the case criteria your firm sets. Specific campaigns, jurisdictions, and availability change over time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[6px] bg-[#D8B26B] px-6 py-4 font-semibold text-[#2f3236] shadow-[0_8px_18px_rgba(168,123,37,0.22)] hover:bg-[#cfa65b]"
            >
              Ask About Current Campaigns <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Practice areas on this page" className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {practiceAreas.map((area) => (
              <a
                key={area.slug}
                href={`#${area.slug}`}
                className="group flex flex-col gap-3 rounded-[14px] border border-[#ead3a0] bg-white px-4 py-4 transition-colors hover:border-[#c9a14f]"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-[10px] ${area.iconBackground}`}>
                  <AreaIcon area={area} size={26} />
                </span>
                <span className="text-[0.98rem] font-semibold leading-snug text-[#2f3236]">{area.title}</span>
                <span className="text-[0.85rem] text-[#77797c]">{activeItems(area).length} case {activeItems(area).length === 1 ? "type" : "types"}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* One block per area */}
      {practiceAreas.map((area, index) => {
        const link = serviceLink[area.slug];
        const dark = index % 2 === 1;
        return (
          <section
            key={area.slug}
            id={area.slug}
            className={`ymg-section-padding scroll-mt-24 ${dark ? "ymg-area-dark bg-[#3d4145]" : "bg-[#FFF5E0]"}`}
          >
            <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
              <div>
                <span className={`flex h-16 w-16 items-center justify-center rounded-[12px] ${area.iconBackground}`}>
                  <AreaIcon area={area} />
                </span>
                <h2 className={`mt-6 text-[2rem] leading-[1.1] sm:text-[2.5rem] ${dark ? "text-[#EBC982]" : "text-[#2f3236]"}`}>{area.title}</h2>
                <p className={`mt-4 max-w-[30rem] text-[1.06rem] leading-[1.6] ${dark ? "text-[#e8dfcc]" : "text-[#5e6064]"}`}>{area.description}</p>
                <Link
                  href={link?.href ?? "/contact"}
                  className={`mt-6 inline-flex items-center gap-2 text-[1rem] font-semibold ${dark ? "text-[#EBC982] hover:text-white" : "text-[#8a6420] hover:text-[#5e4416]"}`}
                >
                  {link?.label ?? `Discuss a ${area.title} campaign`} <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {activeItems(area).map((item) => (
                  <li
                    key={item.short}
                    className={`flex gap-3.5 rounded-[14px] px-4 py-4 ${dark ? "border border-white/12 bg-white/[0.05]" : "border border-[#ece2cc] bg-white"}`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${dark ? "bg-[#D8B26B]/15 text-[#EBC982]" : "bg-[#fbf0d9] text-[#8a6420]"}`}>
                      {item.Icon ? (
                        <item.Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                      ) : item.icon ? (
                        <Image src={item.icon} alt="" width={22} height={22} className={`h-[22px] w-[22px] object-contain ${dark ? "invert" : ""}`} />
                      ) : null}
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-[1rem] font-semibold leading-snug ${dark ? "text-[#f5ecd8]" : "text-[#2f3236]"}`}>
                        {`${item.label} ${item.detail}`.trim()}
                      </span>
                      <span className={`mt-1 block text-[0.92rem] leading-[1.5] ${dark ? "text-[#c9c1b0]" : "text-[#6b6e72]"}`}>{item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Built around the firm's criteria */}
      <section className="ymg-section-padding bg-[#FFF5E0]">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center lg:gap-12">
          <div>
            <h2 className="text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem]">Every campaign runs on your criteria</h2>
            <p className="mt-4 text-[1.06rem] leading-[1.6] text-[#5e6064]">
              Geography, timing, injury, treatment, liability, existing representation: your firm sets the requirements and
              every inquiry is screened against them before it reaches your team.
            </p>
          </div>
          <CriteriaScreening />
        </div>
      </section>

      <section className="ymg-contact-section ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" homeTypography />
        </div>
      </section>
    </div>
  );
}
