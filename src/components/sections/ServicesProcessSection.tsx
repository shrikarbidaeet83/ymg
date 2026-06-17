"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "1",
    title: "We Capture Every Lead",
    desc: "Inbound calls, web forms, and live chats are answered immediately, 24/7, no exceptions.",
    node: { x: 220.7, y: 253.4 },
    copy: "left-[2%] top-[39%] max-w-[150px] text-right",
    hole: { x: 370.4, y: 293.7 },
    color: "#A9A891",
  },
  {
    num: "2",
    title: "We Follow Up, Fast",
    desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.",
    node: { x: 280.3, y: 434.3 },
    copy: "left-[12%] top-[78%] max-w-[175px] text-right",
    hole: { x: 419.2, y: 365.6 },
    color: "#AECAC9",
  },
  {
    num: "3",
    title: "We Qualify & Screen",
    desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.",
    node: { x: 527.1, y: 537 },
    copy: "left-[57%] top-[84%] max-w-[175px] text-left",
    hole: { x: 546.4, y: 383.2 },
    color: "#577271",
  },
  {
    num: "4",
    title: "We Handle the Paperwork",
    desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.",
    node: { x: 774, y: 336 },
    copy: "right-[-4%] top-[63%] max-w-[180px] text-left",
    hole: { x: 620.1, y: 317.7 },
    color: "#6C7249",
  },
  {
    num: "5",
    title: "You Get Signed Cases",
    desc: "Delivered to you, qualified, retained clients ready to move forward.",
    node: { x: 770.3, y: 182 },
    copy: "right-[1%] top-[28%] max-w-[178px] text-left",
    hole: { x: 634.5, y: 256.8 },
    color: "#8C7272",
  },
];

const NODE_SIZE = 64;
const PROCESS_CANVAS_WIDTH = 1000;
const PROCESS_CANVAS_HEIGHT = 600;
const PROCESS_CORE_CENTER = { x: 500, y: 260 };
const OUTER_RING_OFFSET = 10;
const OUTER_RING_STROKE = 3;
const OUTER_RING_SWEEP = 185;
const OUTER_RING_ELEMENT_SIZE = NODE_SIZE + OUTER_RING_OFFSET * 2;
const OUTER_RING_TOUCH_RADIUS = OUTER_RING_ELEMENT_SIZE / 3 - OUTER_RING_STROKE / 2;

function connectorAngle(node: { x: number; y: number }, hole: { x: number; y: number }) {
  const toHoleX = hole.x - node.x;
  const toHoleY = hole.y - node.y;

  return Math.atan2(toHoleX, -toHoleY) * (180 / Math.PI);
}

export default function ServicesProcessSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const select = <T extends Element>(selector: string) =>
        Array.from(section.querySelectorAll<T>(selector));

      gsap.set(select(".process-title"), { opacity: 0, y: 28 });
      gsap.set(select(".process-core"), { opacity: 0, scale: 0.82 });
      gsap.set(select(".process-ring-segment"), { opacity: 0, rotate: -18, transformOrigin: "50% 50%" });
      gsap.set(select(".process-line"), { opacity: 0, strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set(select(".process-node"), { opacity: 0, scale: 0.7 });
      gsap.set(select(".process-copy"), { opacity: 0, y: 16 });
      gsap.set(select(".type-text"), { width: "0%" });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4300",
          pin: true,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".process-core", { opacity: 1, scale: 1, duration: 0.75 })
        .to(".process-title", { opacity: 1, y: 0, duration: 0.65 }, "-=0.35")
        .to(".process-ring-segment", { opacity: 1, rotate: 0, stagger: 0.08, duration: 0.55 }, "-=0.2");

      steps.forEach((_, index) => {
        const step = index + 1;
        tl.to(`.process-line-${step}`, { opacity: 1, strokeDashoffset: 0, duration: 0.75 }, "+=0.1")
          .to(`.process-node-${step}`, { opacity: 1, scale: 1, duration: 0.42 }, "-=0.2")
          .to(`.process-copy-${step}`, { opacity: 1, y: 0, duration: 0.42 }, "-=0.08")
          .to(`.type-text-${step}`, { width: "100%", duration: 0.75, ease: "none" }, "-=0.24");
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-[#343434] px-4 text-[#e0b767] sm:px-8 lg:px-12"
    >
      <Image
        src="/images/Home page Big Flower light mode (1)-Photoroom.png"
        alt=""
        width={210}
        height={210}
        className="pointer-events-none absolute right-[8%] top-8 z-0 hidden w-[150px] opacity-[0.05] lg:block"
      />
      <Image
        src="/images/Home page Small Flower light mode-Photoroom.png"
        alt=""
        width={74}
        height={74}
        className="pointer-events-none absolute right-[3%] top-[18%] z-0 hidden w-[50px] opacity-[0.06] lg:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1180px] items-center py-16">
        <h2 className="absolute left-0 top-[12%] max-w-[300px] font-heading text-[clamp(1.65rem,2.35vw,2.3rem)] font-normal leading-[1.08] tracking-[0] text-[#e0b767]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="relative mx-auto h-[600px] w-full max-w-[980px]">
          <svg
            viewBox={`0 0 ${PROCESS_CANVAS_WIDTH} ${PROCESS_CANVAS_HEIGHT}`}
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
          >
            {steps.map(({ num, node, hole, color }) => {
              const dx = node.x - hole.x;
              const dy = node.y - hole.y;
              const length = Math.hypot(dx, dy);
              const endGap = OUTER_RING_TOUCH_RADIUS;
              const x1 = hole.x;
              const y1 = hole.y;
              const x2 = node.x - (dx / length) * endGap;
              const y2 = node.y - (dy / length) * endGap;

              return (
              <line
                key={num}
                className={`process-line process-line-${num}`}
                pathLength={1}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              );
            })}

          </svg>

          <div
            className="process-core absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(PROCESS_CORE_CENTER.x / PROCESS_CANVAS_WIDTH) * 100}%`,
              top: `${(PROCESS_CORE_CENTER.y / PROCESS_CANVAS_HEIGHT) * 100}%`,
            }}
          >
            <Image
              src="/images/circle.svg"
              alt=""
              width={293}
              height={293}
              className="process-ring-segment absolute inset-0 h-full w-full"
            />
            <div className="process-title absolute inset-0 flex flex-col items-center justify-center text-center font-sans">
              <span className="text-[0.95rem] font-semibold text-[#111]">Our</span>
              <span className="text-[1.85rem] font-bold leading-none text-[#8b2a91]">
                Process
              </span>
            </div>
          </div>

          {steps.map(({ num, title, desc, node, copy, color, hole }) => (
            <div key={num}>
              <div
                className={`process-node process-node-${num} absolute z-20 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] bg-[#f6f6ef] text-[1.55rem] font-bold shadow-[0_8px_24px_rgba(0,0,0,0.28)]`}
                style={{
                  left: `${(node.x / PROCESS_CANVAS_WIDTH) * 100}%`,
                  top: `${(node.y / PROCESS_CANVAS_HEIGHT) * 100}%`,
                  borderColor: color,
                  color,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-[-10px] rounded-full"
                  style={{
                    background: `conic-gradient(from ${connectorAngle(node, hole) - OUTER_RING_SWEEP}deg, ${color} 0deg ${OUTER_RING_SWEEP}deg, transparent ${OUTER_RING_SWEEP}deg 360deg)`,
                    WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${OUTER_RING_STROKE}px), #000 calc(100% - ${OUTER_RING_STROKE - 1}px))`,
                    mask: `radial-gradient(farthest-side, transparent calc(100% - ${OUTER_RING_STROKE}px), #000 calc(100% - ${OUTER_RING_STROKE - 1}px))`,
                  }}
                />
                {num}
              </div>
              <div className={`process-copy process-copy-${num} absolute z-20 ${copy}`}>
                <h3 className="text-[0.86rem] font-bold leading-tight text-[#e0b767]">
                  {title}
                </h3>
                <p className="mt-1 text-[0.64rem] leading-[1.35] text-[#9d9d9d]">
                  <span className={`type-text type-text-${num} inline-block overflow-hidden align-top`}>
                    {desc}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
