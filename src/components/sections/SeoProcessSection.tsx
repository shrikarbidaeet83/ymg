"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Link2,
  Network,
  PenLine,
  Search,
  Settings,
  Wrench,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  CarouselControls,
  getClosestCardIndex,
  scrollToCard,
} from "@/components/sections/IncludedServicesCarousel";

const processSteps = [
  {
    title: "SEO Audit",
    Icon: Search,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Competitor Research",
    Icon: Network,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Keyword Strategy",
    Icon: Wrench,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Technical Optimization",
    Icon: Settings,
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Content Creation",
    Icon: PenLine,
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "Authority Building",
    Icon: Link2,
    iconBg: "bg-[#f5dfdf]",
    iconColor: "text-[#7a4b4b]",
  },
  {
    title: "Growth & Reporting",
    Icon: BarChart3,
    iconBg: "bg-[#e8e4fb]",
    iconColor: "text-[#514a78]",
  },
];

const processContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } },
};

const processCard = {
  hidden: { opacity: 0, x: -46, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SeoProcessSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(carouselRef.current, index);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[76px] lg:px-16 lg:py-[58px]">
      <Image
        src="/images/big_flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[7%] top-[8px] z-0 hidden w-[82px] opacity-[0.05] sm:block lg:w-[96px]"
      />
      <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[3%] top-[62px] z-0 hidden w-[30px] opacity-[0.05] lg:block"
      />
      <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[14%] top-[92px] z-0 hidden w-[34px] opacity-[0.045] lg:block"
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[900px]">
        <div className="text-center">
          <p className="text-[0.88rem] font-normal text-[#d9ae5d] sm:text-[1rem]">
            Our SEO Process
          </p>
          <h2 className="mt-5 font-heading text-[2rem] font-normal leading-[1.35] text-[#d9ae5d] sm:text-[2.35rem] lg:text-[2.05rem]">
            A Proven Process That
            <span className="mt-1 block">Drives Results</span>
          </h2>
        </div>

        <div className="mt-11 w-full min-w-0 lg:hidden">
          <div
            ref={carouselRef}
            onScroll={(event) => setActiveIndex(getClosestCardIndex(event.currentTarget))}
            className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
          >
            {processSteps.map(({ title, Icon, iconBg, iconColor }, index) => (
              <motion.article
                key={title}
                variants={processCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                className="relative flex min-h-[190px] w-[72vw] max-w-[240px] shrink-0 snap-center flex-col items-center justify-center rounded-[12px] border border-[#dfbd78] bg-[#fffdfa] px-5 pb-6 pt-8 text-center shadow-[0_8px_22px_rgba(0,0,0,0.16)] sm:w-[240px]"
              >
                <span className="absolute -top-[17px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#dfb761] text-[0.68rem] font-semibold text-[#4b463b] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`flex h-[48px] w-[48px] items-center justify-center rounded-[7px] border border-[#dfbd78]/70 shadow-[0_5px_10px_rgba(91,69,34,0.13)] ${iconBg}`}>
                  <Icon className={`h-[24px] w-[24px] ${iconColor}`} strokeWidth={1.65} />
                </span>
                <h3 className="mt-5 max-w-[155px] text-[0.86rem] font-medium leading-[1.3] text-[#4b4b4b]">
                  {title}
                </h3>
              </motion.article>
            ))}
          </div>
          <CarouselControls
            activeIndex={activeIndex}
            total={processSteps.length}
            onSelect={selectCard}
            theme="dark"
            label="SEO process step"
          />
        </div>

        <motion.div
          variants={processContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mt-[52px] hidden max-w-[840px] grid-cols-7 gap-[20px] lg:grid"
        >
          {processSteps.map(({ title, Icon, iconBg, iconColor }, index) => (
            <motion.article
              key={title}
              variants={processCard}
              className="relative flex min-h-[130px] flex-col items-center rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-3 pb-4 pt-7 text-center shadow-[5px_7px_10px_rgba(17,17,17,0.22)]"
            >
              <span className="absolute -top-[17px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#dfb761] text-[0.62rem] font-semibold text-[#4b463b] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#dfbd78]/70 shadow-[0_4px_8px_rgba(91,69,34,0.13)] ${iconBg}`}>
                <Icon className={`h-[18px] w-[18px] ${iconColor}`} strokeWidth={1.65} />
              </span>
              <h3 className="mt-4 text-[0.66rem] font-medium leading-[1.25] text-[#4b4b4b]">
                {title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
