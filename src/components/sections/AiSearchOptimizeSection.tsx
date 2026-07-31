"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BrainCircuit,
  FilePenLine,
  Network,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  CarouselControls,
  getClosestCardIndex,
  scrollToCard,
} from "@/components/sections/IncludedServicesCarousel";

const optimizationItems = [
  {
    title: "Website Structure",
    body: "Create a well-organized website architecture that AI systems can easily understand, navigate, and trust.",
    Icon: Network,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Content Optimization",
    body: "Develop authoritative legal content that directly answers client questions and aligns with AI search intent.",
    Icon: FilePenLine,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Entity & Brand Authority",
    body: "Strengthen your firm's online identity through consistent business information, citations, and trusted authority signals.",
    Icon: ShieldCheck,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Technical SEO",
    body: "Optimize page speed, structured data, indexing, metadata, internal linking, and crawlability.",
    Icon: Settings,
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Knowledge Graph Optimization",
    body: "Develop a recognizable brand that supports sustainable client acquisition and long-term business growth.",
    Icon: BrainCircuit,
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "EEAT Enhancement",
    body: "Improve Experience, Expertise, Authoritativeness, and Trustworthiness throughout your website and content.",
    Icon: Award,
    iconBg: "bg-[#f5dfdf]",
    iconColor: "text-[#7a4b4b]",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 42, scale: 0.96, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AiSearchOptimizeSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(carouselRef.current, index);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[64px] text-[#d9ae5d] sm:px-10 sm:py-[82px] lg:px-16 lg:py-[72px]">
      <Image
        src="/images/big_flowers.webp"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[6%] top-[12px] z-0 hidden w-[96px] opacity-[0.05] sm:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[14%] top-[42px] z-0 hidden w-[30px] opacity-[0.045] lg:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[9%] top-[118px] z-0 hidden w-[38px] opacity-[0.045] lg:block"
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1040px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[2rem] font-bold leading-[1.35] text-[#d9ae5d] sm:text-[2.45rem] lg:text-[2.15rem]"
        >
          What We Optimize
          <span className="mt-1 block">for AI Search</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-full min-w-0 lg:hidden"
        >
          <div
            ref={carouselRef}
            onScroll={(event) => setActiveIndex(getClosestCardIndex(event.currentTarget))}
            className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
          >
            {optimizationItems.map(({ title, body, Icon, iconBg, iconColor }) => (
              <motion.article
                key={title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }}
                className="flex min-h-[270px] w-[76vw] max-w-[270px] shrink-0 snap-center flex-col rounded-[14px] border border-[#dfbd78] bg-[#fffdfa] p-5 text-left shadow-[0_8px_22px_rgba(0,0,0,0.16)] sm:w-[270px]"
              >
                <span className={`flex h-[48px] w-[48px] items-center justify-center rounded-[7px] border border-[#dfbd78]/70 shadow-[0_5px_10px_rgba(91,69,34,0.14)] ${iconBg}`}>
                  <Icon className={`h-[24px] w-[24px] ${iconColor}`} strokeWidth={1.65} />
                </span>
                <h3 className="mt-5 text-[0.9rem] font-semibold leading-tight text-[#3d4145]">
                  {title}
                </h3>
                <p className="mt-4 text-[0.78rem] leading-[1.4] text-[#8f8f8f]">
                  {body}
                </p>
              </motion.article>
            ))}
          </div>
          <CarouselControls
            activeIndex={activeIndex}
            total={optimizationItems.length}
            onSelect={selectCard}
            theme="dark"
            label="AI search optimization"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { delayChildren: 0.16, staggerChildren: 0.16 } } }}
          className="mt-[58px] hidden grid-cols-6 gap-[14px] lg:grid"
        >
          {optimizationItems.map(({ title, body, Icon, iconBg, iconColor }) => (
            <motion.article
              key={title}
              variants={reveal}
              className="flex min-h-[236px] flex-col rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-3 py-4 text-left shadow-[5px_7px_10px_rgba(17,17,17,0.22)]"
            >
              <span className={`flex h-[38px] w-[38px] items-center justify-center rounded-[6px] border border-[#dfbd78]/70 shadow-[0_4px_8px_rgba(91,69,34,0.13)] ${iconBg}`}>
                <Icon className={`h-[20px] w-[20px] ${iconColor}`} strokeWidth={1.65} />
              </span>
              <h3 className="mt-5 text-[0.75rem] font-semibold leading-[1.25] text-[#3d4145]">
                {title}
              </h3>
              <p className="mt-4 text-[0.68rem] leading-[1.35] text-[#929292]">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
