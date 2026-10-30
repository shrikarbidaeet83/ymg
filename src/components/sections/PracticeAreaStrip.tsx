import Image from "next/image";
import { activeItems, practiceAreas } from "@/data/practice-areas";

type Cell = {
  key: string;
  label: string;
  detail: string;
  icon?: string;
  Icon?: (typeof practiceAreas)[number]["items"][number]["Icon"];
  isCategory: boolean;
};

// Each practice area is followed by its active case types / campaigns, so a
// category and its campaigns never read as equals.
const cells: Cell[] = practiceAreas.flatMap((area) => {
  const [first, ...rest] = area.title.split(" ");
  return [
    { key: area.slug, label: first, detail: rest.join(" "), icon: area.icon, Icon: area.Icon, isCategory: true },
    ...activeItems(area).map((item) => ({
      key: `${area.slug}-${item.short}`,
      label: item.label,
      detail: item.detail,
      icon: item.icon,
      Icon: item.Icon,
      isCategory: false,
    })),
  ];
});

export default function PracticeAreaStrip({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const hero = variant === "hero";
  // The hero bar is capped at ~1010px, so it keeps the compact desktop sizes.
  const iconSize = hero ? "lg:h-[26px] lg:w-[26px]" : "lg:h-[26px] lg:w-[26px] xl:h-[30px] xl:w-[30px]";
  const textSize = hero ? "lg:text-[13px]" : "lg:text-[13px] xl:text-[14px] 2xl:text-[15px]";
  const categorySize = hero ? "lg:text-[12px]" : "lg:text-[12px] xl:text-[13px] 2xl:text-[14px]";
  const size =
    hero
      ? "min-h-[66px] sm:min-h-[70px] sm:gap-3 sm:px-4 sm:py-3"
      : "min-h-[66px] sm:min-h-[74px] sm:gap-3 sm:px-5 sm:py-4";

  return (
    <div className="ymg-practice-marquee flex w-max">
      {[...cells, ...cells].map(({ key, label, detail, icon, Icon, isCategory }, index) => {
        const duplicate = index >= cells.length;
        const nextIsCategory = cells[(index + 1) % cells.length]?.isCategory;

        return (
          <div
            key={`${variant}-${key}-${index}`}
            aria-hidden={duplicate || undefined}
            className={`relative flex w-[calc((100vw-40px)/3)] shrink-0 items-center justify-center gap-2 px-2 py-3 text-left after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-[#e1d5bf] sm:w-[calc((100vw-64px)/3)] lg:gap-3 lg:px-4 ${size} ${
              isCategory ? "ymg-practice-category bg-[#fbf1dc] lg:w-[160px]" : "lg:w-[190px]"
            } ${nextIsCategory ? "after:h-full after:bg-[#d8b26b]" : ""}'}`}
          >
            {Icon ? (
              <Icon
                aria-hidden="true"
                strokeWidth={1.3}
                className={`h-[22px] w-[22px] shrink-0 text-[#4a4d51] sm:h-[30px] sm:w-[30px] ${iconSize}`}
              />
            ) : icon ? (
              <Image
                src={icon}
                alt=""
                width={32}
                height={32}
                className={`h-[21px] w-[21px] shrink-0 object-contain sm:h-[31px] sm:w-[31px] ${iconSize}`}
              />
            ) : null}
            <p
              className={`min-w-0 leading-tight text-[#3d4145] ${
                isCategory
                  ? `text-[12px] font-bold uppercase tracking-[0.06em] sm:text-[13px] ${categorySize}`
                  : `text-[13px] font-medium sm:text-[14px] ${textSize}`
              }`}
            >
              <span className="block lg:whitespace-nowrap">{label}</span>
              <span className="block lg:whitespace-nowrap">{detail}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
