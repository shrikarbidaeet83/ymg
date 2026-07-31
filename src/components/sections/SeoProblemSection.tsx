"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  CarouselControls,
  getClosestCardIndex,
  scrollToCard,
} from "@/components/sections/IncludedServicesCarousel";

const problems = [
  "Low Google Visibility",
  "Poor Website Structure",
  "Wrong Keywords",
  "Thin Content",
  "Weak Backlinks",
  "Slow Website",
];

const cardReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SeoProblemSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(carouselRef.current, index);
  };

  return (
    <section className="ymg-radial-wide relative isolate overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[76px] lg:px-16 lg:py-[58px]">
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[900px]">
        <div className="text-center">
          <p className="text-[0.88rem] font-normal text-[#d9ae5d] sm:text-[1rem]">
            The Problem
          </p>
          <h2 className="mt-5 font-heading text-[2rem] font-normal leading-[1.35] text-[#d9ae5d] sm:text-[2.35rem] lg:text-[2.05rem]">
            Why Most Law Firms Never
            <span className="mt-1 block">Reach Page One</span>
          </h2>
        </div>

        <div className="mt-10 w-full min-w-0 lg:hidden">
          <div
            ref={carouselRef}
            onScroll={(event) => setActiveIndex(getClosestCardIndex(event.currentTarget))}
            className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
          >
            {problems.map((problem) => (
              <motion.article
                key={problem}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                className="flex min-h-[180px] w-[72vw] max-w-[240px] shrink-0 snap-center flex-col items-center justify-center rounded-[12px] border border-[#dfbd78] bg-[#fffdfa] px-5 py-6 text-center shadow-[0_8px_22px_rgba(0,0,0,0.16)] sm:w-[240px]"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[7px] border border-[#D9B46D] bg-transparent">
                  <X className="h-[25px] w-[25px] text-[#d83927]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 max-w-[150px] text-[0.86rem] font-medium leading-[1.3] text-[#4b4b4b]">
                  {problem}
                </h3>
              </motion.article>
            ))}
          </div>
          <CarouselControls
            activeIndex={activeIndex}
            total={problems.length}
            onSelect={selectCard}
            theme="dark"
            label="SEO problem"
          />
        </div>

        <motion.div
          className="mx-auto mt-[46px] hidden max-w-[720px] grid-cols-6 gap-[22px] lg:grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16 } },
          }}
        >
          {problems.map((problem) => (
            <motion.article
              key={problem}
              variants={cardReveal}
              className="flex min-h-[120px] flex-col items-center rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-3 py-4 text-center shadow-[5px_7px_10px_rgba(17,17,17,0.22)]"
            >
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#D9B46D] bg-transparent">
                <X className="h-[20px] w-[20px] text-[#d83927]" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[0.68rem] font-medium leading-[1.25] text-[#4b4b4b]">
                {problem}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
