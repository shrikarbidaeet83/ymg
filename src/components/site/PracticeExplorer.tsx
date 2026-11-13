"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  Ambulance,
  ArrowRight,
  HardHat,
  Pill,
  Stethoscope,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import PhotoCard from "@/components/site/PhotoCard";
import { activeItems, practiceAreas } from "@/data/practice-areas";

// Per area: its tab icon and colour, its photo, and where its "learn more" goes.
const look: Record<
  string,
  {
    Icon: LucideIcon;
    tone: GlassTone;
    photo: string;
    alt: string;
    link?: { href: string; label: string };
  }
> = {
  "personal-injury": {
    Icon: Ambulance,
    tone: "rose",
    photo: "/images/services/pi-ambulance.jpg",
    alt: "An ambulance on a city street",
    link: {
      href: "/services/personal-injury-leads",
      label: "Personal injury leads",
    },
  },
  "mass-torts": {
    Icon: Pill,
    tone: "violet",
    photo: "/images/services/mass-tort.jpg",
    alt: "Prescription pills spilling from a bottle",
    link: { href: "/services/mass-tort-leads", label: "Mass tort leads" },
  },
  "class-action": {
    Icon: UsersRound,
    tone: "blue",
    photo: "/images/services/class-action-gavel.jpg",
    alt: "A judge's gavel",
    link: { href: "/services/class-action-leads", label: "Class action leads" },
  },
  "medical-malpractice": {
    Icon: Stethoscope,
    tone: "teal",
    photo: "/images/areas/medical-malpractice.jpg",
    alt: "A surgical team in an operating room",
  },
  "workers-compensation": {
    Icon: HardHat,
    tone: "amber",
    photo: "/images/areas/workers-comp.jpg",
    alt: "Two construction workers in hard hats on a job site",
  },
  "social-security-disability": {
    Icon: Accessibility,
    tone: "green",
    photo: "/images/areas/ssd.jpg",
    alt: "A man in a wheelchair at home",
  },
};

/*
 * The six practice areas. Wide screens: a row of tabs and one open area. Phones and tablets: every area
 * stacked in order (title, photo, then its case types), so nothing is hidden behind a tap.
 */
export default function PracticeExplorer() {
  const [active, setActive] = useState(0);

  // Links like /practice-areas#mass-torts open that area's tab.
  useEffect(() => {
    const pick = () => {
      const i = practiceAreas.findIndex(
        (a) => `#${a.slug}` === window.location.hash,
      );
      if (i >= 0) setActive(i);
    };
    pick();
    window.addEventListener("hashchange", pick);
    return () => window.removeEventListener("hashchange", pick);
  }, []);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Practice areas"
        className="hidden gap-2 lg:grid lg:grid-cols-6"
      >
        {practiceAreas.map((area, i) => {
          const { Icon, tone } = look[area.slug];
          const on = i === active;
          return (
            <button
              key={area.slug}
              type="button"
              role="tab"
              id={`area-tab-${area.slug}`}
              aria-selected={on}
              aria-controls={area.slug}
              onClick={() => setActive(i)}
              className={`flex flex-col items-start gap-4 rounded-[20px] border p-5 text-left transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24E] ${
                on
                  ? "border-[#0B231D] bg-[#0B231D] text-[#F5F1E8] shadow-[0_20px_40px_rgba(11,35,29,0.2)]"
                  : "border-[#0B231D]/12 bg-white text-[#0B231D] hover:border-[#0B231D]/30"
              }`}
            >
              <GlassIcon tone={tone} size="md" surface={on ? "dark" : "light"}>
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </GlassIcon>
              <span className="text-[1.02rem] font-semibold leading-snug">
                {area.title}
              </span>
              <span
                className={`text-[0.88rem] ${on ? "text-[#B9B2A3]" : "text-[#4E5A54]"}`}
              >
                {activeItems(area).length} case{" "}
                {activeItems(area).length === 1 ? "type" : "types"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-24 lg:mt-12 lg:block">
        {practiceAreas.map((area, i) => {
          const { photo, alt, link } = look[area.slug];
          const items = activeItems(area);
          return (
            <section
              key={area.slug}
              id={area.slug}
              role="tabpanel"
              aria-labelledby={`area-tab-${area.slug}`}
              className={`scroll-mt-28 ${i === active ? "" : "lg:hidden"}`}
            >
              <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-10 lg:gap-x-16">
                <h2 className="max-w-[19ch] self-end text-[clamp(1.9rem,3.2vw,2.72rem)] leading-[1.04] tracking-[-0.015em] text-[#0B231D] md:col-start-2 md:row-start-1">
                  {area.title}
                </h2>
                <div className="md:col-start-1 md:row-span-2 md:row-start-1">
                  <PhotoCard
                    photo={{ src: photo, alt }}
                    highlights={[
                      `${items.length} case ${items.length === 1 ? "type" : "types"}`,
                      "Screened on your criteria",
                    ]}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="self-start md:col-start-2 md:row-start-2">
                  <p className="max-w-[32rem] text-[1.1rem] leading-[1.6] text-[#4E5A54]">
                    {area.description}
                  </p>
                  <ul className="mt-7 grid gap-x-6 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                    {items.map((item) => (
                      <li
                        key={item.short}
                        className="flex gap-3 border-t border-[#0B231D]/10 py-4"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0F4F1] text-[#0B231D]">
                          {item.Icon ? (
                            <item.Icon
                              size={17}
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                          ) : item.icon ? (
                            <Image
                              src={item.icon}
                              alt=""
                              width={18}
                              height={18}
                              className="h-[18px] w-[18px] object-contain"
                            />
                          ) : null}
                        </span>
                        <span className="min-w-0">
                          <span className="flex flex-wrap items-baseline gap-x-2 text-[1.02rem] font-semibold leading-snug text-[#0B231D]">
                            {item.short}
                            {item.mdl && (
                              <span className="text-[0.8rem] font-semibold text-[#8C6B22]">
                                {item.mdl}
                              </span>
                            )}
                          </span>
                          <span className="mt-1 block text-[0.94rem] leading-[1.5] text-[#4E5A54]">
                            {item.description}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={link?.href ?? "/contact#booking"}
                    className="group mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0B231D] px-6 py-3 text-[0.98rem] font-semibold text-[#F5F1E8] transition-colors hover:bg-[#102E26]"
                  >
                    {link?.label ??
                      `Discuss a ${area.title.toLowerCase()} campaign`}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
