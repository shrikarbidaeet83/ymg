import type { Metadata } from "next";
import Image from "next/image";
import HowItWorksFunnel from "@/components/sections/HowItWorksFunnel";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";

export const metadata: Metadata = {
  title: "How It Works | YMG Legal",
  description: "From lead to signed cases with YMG Legal.",
};

const floatingIcons = [
  {
    src: "/images/how_it_works/magnet-wave 1.svg",
    className: "left-[8.6%] top-[72%] rotate-[-24deg] max-sm:left-[10%] max-sm:top-[64%]",
  },
  {
    src: "/images/how_it_works/file-check-02 1.svg",
    className: "left-[25.2%] top-[67.3%] rotate-[-17deg] max-sm:left-[78%] max-sm:top-[49%]",
  },
  {
    src: "/images/how_it_works/call-calling 1.svg",
    className: "left-[44.2%] top-[67.7%] rotate-[-8deg] max-lg:left-[58%] max-sm:left-[13%] max-sm:top-[49%]",
  },
  {
    src: "/images/how_it_works/clipboard-list 1.svg",
    className: "left-[18%] top-[84.6%] rotate-[14deg] max-sm:left-[73%] max-sm:top-[69%]",
  },
  {
    src: "/images/how_it_works/clipboard-list 2.svg",
    className: "left-[36.3%] top-[84.9%] rotate-[11deg] max-lg:hidden",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="ymg-section-padding-x relative isolate min-h-[690px] overflow-hidden bg-[#FFF5E0] pt-[58px] text-[#3d4145] sm:min-h-[720px] lg:min-h-[720px]">
        <div className="relative z-10 mx-auto grid h-full min-h-[632px] w-full max-w-[1220px] grid-cols-1 pb-0 pt-[86px] sm:pt-[108px] lg:grid-cols-[minmax(0,620px)_minmax(390px,1fr)] lg:pb-0 lg:pt-[116px]">
          <div className="max-w-[690px] text-center lg:text-left">
            <p className="font-sans text-[1.35rem] font-normal leading-none text-[#3d4145] sm:text-[1.5rem] lg:text-[1.46rem]">
              How It Works
            </p>
            <h1 className="mt-5 font-heading text-[clamp(2.55rem,8.7vw,3.28rem)] font-normal leading-[1.08] tracking-[0] text-[#424242] sm:mt-6 lg:whitespace-nowrap">
              From Lead to Signed Cases
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] font-sans text-[1rem] font-normal leading-[1.34] text-[#4e4e4e] sm:text-[1.28rem] lg:mx-0 lg:max-w-[660px] lg:text-[1.27rem]">
              A simple process designed to help law firms capture, qualify, and
              convert more cases efficiently.
            </p>
          </div>

          <div className="pointer-events-none relative mx-auto mt-[92px] h-[385px] w-full max-w-[430px] sm:mt-12 sm:h-[510px] lg:absolute lg:right-[58px] lg:top-[112px] lg:mt-0 lg:h-[595px] lg:w-[432px] lg:max-w-none">
            <Image
              src="/images/how_it_works/hero_section_how_it_works_bg.svg"
              alt=""
              width={432}
              height={595}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {floatingIcons.map(({ src, className }, index) => (
          <div
            key={index}
            className={`pointer-events-none absolute z-0 flex h-[42px] w-[42px] items-center justify-center opacity-95 ${className}`}
          >
            <Image src={src} alt="" width={42} height={42} className="h-full w-full object-contain" />
          </div>
        ))}
      </section>

      <HowItWorksFunnel />
      <TestimonialContactSection showTestimonials={false} contactVariant="home" />
    </>
  );
}
