"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, MousePointerClick, Phone, Rocket, TrendingUp } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Benefit = {
  title: string;
  body: string;
  iconBg: string;
  iconColor: string;
  iconName?: "trending" | "eye" | "click" | "phone" | "rocket";
};

const iconMap = {
  trending: TrendingUp,
  eye: Eye,
  click: MousePointerClick,
  phone: Phone,
  rocket: Rocket,
};

export default function OrganicBenefitStack({ benefits }: { benefits: Benefit[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      const cards = cardRefs.current.filter(Boolean);
      const distance = 224;

      gsap.set(cards, {
        y: (index) => index * distance,
        zIndex: (index) => index + 1,
      });
      gsap.set(cards[0], { y: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 88px",
          end: `+=${distance * (cards.length - 1)}`,
          pin: stage,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.slice(1).forEach((card, index) => {
        timeline.to(card, { y: 0, ease: "none", duration: 1 }, index);
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto mt-[48px] max-w-[330px] lg:hidden">
      <div ref={stageRef} className="relative h-[224px]">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.iconName ?? "trending"];

          return (
            <article
              key={benefit.title}
              ref={(node) => {
                if (node) cardRefs.current[index] = node;
              }}
              className="absolute inset-x-0 top-0 min-h-[196px] rounded-[5px] border border-[#e2b75f] bg-white px-[10px] py-[13px] text-[#4a4a4a] shadow-[7px_8px_9px_rgba(17,17,17,0.22)]"
            >
              <div className={`mb-[22px] flex h-[34px] w-[34px] items-center justify-center rounded-[4px] border border-[#e2b75f] shadow-[0_4px_7px_rgba(91,69,34,0.16)] ${benefit.iconBg}`}>
                <Icon className={`h-[19px] w-[19px] ${benefit.iconColor}`} strokeWidth={1.65} />
              </div>
              <h3 className="text-[0.75rem] font-semibold leading-tight text-[#3d3d3d]">
                {benefit.title}
              </h3>
              <p className="mt-[16px] text-[0.68rem] leading-[1.28] text-[#969696]">
                {benefit.body}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
