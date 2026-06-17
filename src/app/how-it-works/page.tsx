import type { Metadata } from "next";
import Image from "next/image";
import {
  BarChart3,
  Bell,
  Clock3,
  Crosshair,
  MapPin,
  UserRound,
} from "lucide-react";
import ProcessScrollButton from "@/components/sections/ProcessScrollButton";
import ReadyGrowCtaSection from "@/components/sections/ReadyGrowCtaSection";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";

export const metadata: Metadata = {
  title: "How It Works | YMG Legal",
  description: "From lead to signed cases with YMG Legal.",
};

const floatingIcons = [
  {
    src: "/images/how_it_works/magnet-wave 1.svg",
    className:
      "left-[8.6%] top-[72%] rotate-[-24deg] max-sm:left-[10%] max-sm:top-[64%]",
  },
  {
    src: "/images/how_it_works/file-check-02 1.svg",
    className:
      "left-[25.2%] top-[67.3%] rotate-[-17deg] max-sm:left-[78%] max-sm:top-[49%]",
  },
  {
    src: "/images/how_it_works/call-calling 1.svg",
    className:
      "left-[44.2%] top-[67.7%] rotate-[-8deg] max-lg:left-[58%] max-sm:left-[13%] max-sm:top-[49%]",
  },
  {
    src: "/images/how_it_works/clipboard-list 1.svg",
    className:
      "left-[18%] top-[84.6%] rotate-[14deg] max-sm:left-[73%] max-sm:top-[69%]",
  },
  {
    src: "/images/how_it_works/clipboard-list 2.svg",
    className:
      "left-[36.3%] top-[84.9%] rotate-[11deg] max-lg:hidden",
  },
];

const processFeatures = [
  {
    Icon: Crosshair,
    title: "High - Intent Leads",
    body: "We focus on quality over quantity.",
  },
  {
    Icon: Clock3,
    title: "24/7 Coverage",
    body: "Never miss a lead We're always on.",
  },
  {
    Icon: BarChart3,
    title: "More Signed Cases",
    body: "Our process is build to maximize results.",
  },
  {
    Icon: Crosshair,
    title: "High - Intent Leads",
    body: "We focus on quality over quantity.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative isolate min-h-[690px] overflow-hidden bg-[#fff5e0] pt-[58px] text-[#3d4145] sm:min-h-[720px] lg:min-h-[720px]">
        <div className="relative z-10  mx-auto grid h-full min-h-[632px] w-full max-w-[1220px] grid-cols-1 px-[22px] pb-0 pt-[86px] sm:px-10 sm:pt-[108px] lg:grid-cols-[minmax(0,620px)_minmax(390px,1fr)] lg:px-[50px] lg:pb-0 lg:pt-[116px]">
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
            <Image
              src={src}
              alt=""
              width={42}
              height={42}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </section>

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-14 text-[#f2d086] sm:px-8 sm:py-16 lg:px-12 lg:py-[88px]">
     
      

        <div className="relative z-10 mx-auto grid max-w-[1088px] gap-10 lg:grid-cols-[318px_170px_1px_minmax(390px,1fr)] lg:gap-x-[54px]">
          <div className="relative order-2 mx-auto min-h-[720px] w-full max-w-[318px] lg:order-none lg:min-h-[670px]">
            <Image
              src="/images/how_it_works/back-layer-hwt.svg"
              alt=""
              width={144}
              height={103}
              className="pointer-events-none absolute left-1/2 top-[212px] z-0 w-[168px] -translate-x-1/2 opacity-95 lg:left-38 lg:top-[220px]"
            />
           

            <div className="absolute left-1/2 top-0 z-30 h-[225px] w-[290px] -translate-x-1/2 rounded-[13px] bg-[#5b5b5b] px-[27px] py-[18px] text-white shadow-[0_16px_34px_rgba(0,0,0,0.14)] lg:left-0 lg:translate-x-0">
              <p className="font-sans text-[0.78rem] font-semibold text-[#f2d086]">
                New Qualified Lead
              </p>
              <div className="absolute right-[16px] top-[-16px] flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#e1b866] bg-[#fff5e0] text-[#3f3f3f] shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
                <Bell size={22} fill="#404040" strokeWidth={1.7} />
              </div>

              <div className="mt-[21px] flex items-center gap-3">
                <div className="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-full border-2 border-[#e1b866] bg-[#fff5e0] text-[#404040]">
                  <UserRound size={27} fill="#404040" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="font-sans text-[1rem] font-semibold leading-tight text-[#f2d086]">
                    Motor Vehicle Accident
                  </h3>
                  <p className="mt-2 flex items-center gap-1 font-sans text-[0.72rem] text-white/70">
                    <MapPin size={11} /> Los Angeles, CA
                  </p>
                </div>
              </div>

              <div className="mt-[32px] grid grid-cols-3 gap-[15px]">
                {["High Intent", "Qualified", "Live Call"].map((label, index) => (
                  <span
                    key={label}
                    className={`flex h-[21px] items-center justify-center rounded-[3px] border text-[0.54rem] ${
                      index === 0
                        ? "border-[#8fd093]/20 bg-[#6aa26e]/45 text-[#91dc95]"
                        : index === 1
                          ? "border-[#89c9f0]/20 bg-[#5182a0]/55 text-[#a6d8f6]"
                          : "border-white/20 bg-white/10 text-white/70"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-[18px] flex items-center gap-7 font-sans text-[0.76rem] text-white/65">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#75d382]" />
                  Lead revived
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  2 min ago
                </span>
              </div>
            </div>

            <div className="absolute left-1/2 top-[300px] z-10 h-[393px] w-[290px] -translate-x-1/2 overflow-hidden rounded-[13px] bg-[#5b5b5b] lg:left-0 lg:top-[310px] lg:translate-x-0">
              <Image
                src="/images/how_it_works/pyramid.svg"
                alt=""
                width={351}
                height={476}
                className="h-full w-full object-fill"
              />
            </div>
          </div>

          <div className="relative order-3 mx-auto w-full max-w-[430px] lg:order-none lg:mx-0 lg:max-w-none">
            <div data-process-scroll className="grid grid-cols-2 gap-0 overflow-visible lg:max-h-[620px] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1 lg:pt-[64px] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
            {processFeatures.map(({ Icon, title, body }, index) => (
              <div
                key={title}
                className={`relative min-h-[132px] px-3 py-4 lg:min-h-0 lg:px-0 lg:py-0 lg:pb-[38px] ${index % 2 === 0 ? "border-r border-[#d8b26b]/25 lg:border-r-0" : ""} ${index < 2 ? "border-b border-[#d8b26b]/25 lg:border-b-[#d8b26b]/20" : ""} ${index >= 2 ? "lg:border-b lg:border-[#d8b26b]/20 lg:pt-[42px]" : ""} ${index === 1 ? "lg:pt-[42px]" : ""}`}
              >
                <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#e1b866] bg-[#fff5e0] text-[#404040] shadow-[0_8px_16px_rgba(0,0,0,0.18)] lg:mb-[18px] lg:h-[50px] lg:w-[50px]">
                  <Icon size={20} strokeWidth={1.55} className="lg:size-6" />
                </div>
                <h3 className="font-sans text-[0.88rem] font-semibold leading-tight text-[#f2d086] lg:text-[1.02rem]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[120px] font-sans text-[0.64rem] leading-[1.25] text-white/70 lg:mt-4 lg:max-w-[140px] lg:text-[0.74rem]">
                  {body}
                </p>
              </div>
            ))}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-12 bg-gradient-to-t from-[#404040] to-transparent lg:block" />
            <ProcessScrollButton />
          </div>

          <div className="hidden h-[620px] w-px bg-[#d8b26b]/65 lg:block" />

          <div className="relative order-1 flex items-center text-center lg:order-none lg:text-left">
            <div className="mx-auto max-w-[390px] lg:mx-0 lg:max-w-[420px] lg:pt-[35px]">
              <p className="border-b border-[#d8b26b]/15 pb-[13px] font-sans text-[1.28rem] font-normal leading-tight text-[#f2d086] lg:text-[1.38rem]">
                Quality Prospects, Better Conversions.
              </p>
              <h2 className="border-b border-[#d8b26b]/15 py-[15px] font-heading text-[clamp(2.25rem,7vw,2.65rem)] font-normal leading-[1.06] tracking-[0] text-[#f2d086]">
                High - Intent Leads
              </h2>
              <p className="mt-[17px] font-sans text-[1rem] leading-[1.38] text-white/45">
                We connect law firms with high-intent leads actively seeking
                legal help, helping you increase qualified consultations and
                signed cases efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReadyGrowCtaSection variant="cream" />
      <TestimonialContactSection showTestimonials={false} />
    </>
  );
}
