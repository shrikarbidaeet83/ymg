"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VB = { w: 900, h: 520, cx: 450, cy: 438, r: 360 };
const BADGE_STACK_OFFSET = 31;
const wheelOrigin = `${(VB.cx / VB.w) * 100}% ${(VB.cy / VB.h) * 100}%`;

function pt(deg: number) {
  const a = (deg * Math.PI) / 180;
  return {
    x: VB.cx + VB.r * Math.cos(a),
    y: VB.cy - VB.r * Math.sin(a),
  };
}

const pct = (p: { x: number; y: number }) => ({
  left: `${(p.x / VB.w) * 100}%`,
  top: `${(p.y / VB.h) * 100}%`,
});

const top = pt(90);
const guideLine = {
  x: top.x,
  y1: top.y,
  y2: top.y + 54,
};

const steps = [
  {
    key: "1",
    num: "01",
    angle: 90,
    title: "Generate",
    desc:
      "We launch targeted digital campaigns to attract high-intent legal prospects actively searching for help.",
  },
  {
    key: "2",
    num: "02",
    angle: 34,
    title: "Capture",
    desc:
      "Conversion-focused pages and intake flows collect prospect details the moment they are ready to act.",
  },
  {
    key: "3",
    num: "03",
    angle: -34,
    title: "Qualify",
    desc:
      "Every inquiry is screened for intent, case fit, location, and urgency before it reaches your team.",
  },
  {
    key: "4",
    num: "04",
    angle: -106,
    title: "Connect",
    desc:
      "Qualified prospects move into live intake, AI booking, or attorney review without losing momentum.",
  },
  {
    key: "5",
    num: "05",
    angle: 146,
    title: "Sign",
    desc:
      "Follow-up systems keep each prospect moving until consultations convert into retained cases.",
  },
];

const nodes = steps.map(({ key, num, angle }) => {
  const point = pt(angle);

  return {
    key,
    num,
    dotPos: pct(point),
    badgePos: pct({
      x: point.x,
      y: point.y - BADGE_STACK_OFFSET,
    }),
  };
});

const rotations = [0, -56, -124, -196, -304];

const stats = [
  { prefix: "$", target: 2.3, decimals: 1, suffix: "M+", label: "Case Value Generated" },
  { prefix: "", target: 25000, decimals: 0, suffix: "+", label: "Qualified Leads Delivered" },
  { prefix: "", target: 500, decimals: 0, suffix: "+", label: "Cases Signed" },
  { prefix: "", target: 98, decimals: 0, suffix: "%", label: "Client Retention Rate" },
];

function fmt(v: number, decimals: number) {
  return v.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function CaseAcquisitionSystem() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const select = <T extends Element>(selector: string) =>
        Array.from(section.querySelectorAll<T>(selector));

      gsap.set(select(".wheel-rotor"), {
        rotation: 0,
        transformOrigin: wheelOrigin,
      });
      gsap.set(select(".wheel-node"), { rotation: 0, transformOrigin: "50% 50%" });
      gsap.set(select(".vline"), { scaleY: 1, y: 0, transformOrigin: "top center" });
      gsap.set(select(".step-copy"), { opacity: 0, y: 34 });
      gsap.set(select(".step-copy-1"), { opacity: 1, y: 0 });
      gsap.set(
        select(".wheel-rotor, .wheel-node, .vline, .step-copy"),
        { force3D: true },
      );

      const pinTarget = section.querySelector(".case-pin") || section;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3600",
          pin: pinTarget,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      steps.slice(1).forEach((step, index) => {
        const previousStep = steps[index];
        const at = index * 1.25;
        const rotation = rotations[index + 1];

        tl.to(select(".wheel-rotor"), { rotation, duration: 1, ease: "power1.inOut" }, at)
          .to(select(".wheel-node"), { rotation: -rotation, duration: 1, ease: "power1.inOut" }, at)
          .to(select(".vline"), { scaleY: 0.68, y: 12, duration: 0.28, ease: "power2.in" }, at + 0.08)
          .to(select(".vline"), { scaleY: 1, y: 0, duration: 0.42, ease: "power2.out" }, at + 0.42)
          .to(select(`.step-copy-${previousStep.key}`), { opacity: 0, y: -22, duration: 0.32, ease: "power2.in" }, at + 0.1)
          .fromTo(
            select(`.step-copy-${step.key}`),
            { opacity: 0, y: 34 },
            { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" },
            at + 0.42,
          );
      });

      let countersPlayed = false;
      const playCounters = () => {
        if (countersPlayed) return;
        countersPlayed = true;

        select<HTMLElement>(".counter").forEach((el, i) => {
          const target = parseFloat(el.dataset.target || "0");
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const prefix = el.dataset.prefix || "";
          const suffix = el.dataset.suffix || "";
          const obj = { v: 0 };

          gsap.to(obj, {
            v: target,
            delay: i * 0.08,
            duration: 1.15,
            ease: "power1.out",
            lazy: false,
            onUpdate: () => {
              el.textContent = `${prefix}${fmt(obj.v, decimals)}${suffix}`;
            },
          });
        });
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        once: true,
        onEnter: playCounters,
      });
    }, section);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="case-acquisition-system"
      ref={root}
      className="case-acquisition-section relative isolate bg-[#f8efd9]"
    >
      <div className="case-pin flex min-h-[100svh] items-center overflow-hidden py-10 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-8">
          <div className="text-center">
            <p className="mb-1.5 text-[0.68rem] font-medium text-[#7a7c7e] sm:mb-2.5 sm:text-[0.78rem]">
              Our Proven 5-Step
            </p>
            <h2 className="text-[clamp(1.3rem,6vw,3rem)] font-semibold leading-tight text-[#202b36]">
              Case Acquisition System
            </h2>
          </div>

        <div
          className="relative left-1/2 mt-4 h-[392px] w-[calc(100vw+126px)] max-w-[610px] -translate-x-1/2 sm:mt-8 sm:h-[500px] sm:w-full sm:max-w-[900px] lg:h-[520px] lg:max-w-[980px]"
        >
          <div className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_17%_0)] sm:[clip-path:inset(0_0_13%_0)] lg:[clip-path:inset(0_0_11%_0)]">
            <svg
              viewBox={`0 0 ${VB.w} ${VB.h}`}
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <circle
                cx={VB.cx}
                cy={VB.cy}
                r={VB.r}
                stroke="#34383d"
                strokeWidth={1.35}
                opacity={0.72}
              />
            </svg>
          </div>

          <div className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_17%_0)] sm:[clip-path:inset(0_0_13%_0)] lg:[clip-path:inset(0_0_11%_0)]">
          <div className="wheel-rotor absolute inset-0 [will-change:transform]">
            {nodes.map(({ key, num, dotPos, badgePos }) => (
              <div key={num}>
                <span
                  className="gold-dot absolute z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ae63] shadow-[0_4px_12px_rgba(168,129,62,0.24)] sm:h-3.5 sm:w-3.5"
                  style={{ left: dotPos.left, top: dotPos.top }}
                />
              <div
                className={`wheel-node node-${key} absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-12 sm:w-12`}
                style={{ left: badgePos.left, top: badgePos.top }}
              >
                <div className="node-badge flex h-full w-full items-center justify-center rounded-full border border-[#eadbb7] bg-white text-[0.58rem] font-semibold text-[#3a3d42] shadow-[0_12px_34px_rgba(73,59,33,0.12)] [will-change:transform] sm:text-[0.82rem]">
                  {num}
                </div>
              </div>
              </div>
            ))}
          </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[86px] bg-[#f8efd9] sm:h-[104px] lg:h-[112px]" />

          <svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
          >
            <line
              className="vline"
              x1={guideLine.x}
              y1={guideLine.y1}
              x2={guideLine.x}
              y2={guideLine.y2}
              stroke="#3a3d42"
              strokeWidth={1.2}
              opacity={0.4}
            />
          </svg>

          <div className="absolute left-1/2 top-[34%] z-20 min-h-[88px] w-[216px] -translate-x-1/2 text-center sm:top-[35%] sm:min-h-[118px] sm:w-[82%] sm:max-w-[360px] lg:top-[32%]">
            {steps.map(({ key, title, desc }) => (
              <div
                key={key}
                className={`step-copy step-copy-${key} absolute inset-x-0 top-0 [will-change:transform,opacity]`}
                style={{ opacity: key === "1" ? 1 : 0 }}
              >
                <h3 className="text-[clamp(1.05rem,5.6vw,2rem)] font-semibold leading-tight text-[#2f3236]">
                  {title}
                </h3>
                <p className="mx-auto mt-1 max-w-[206px] text-[0.56rem] leading-[1.28] text-[#8a8c8e] sm:mt-2 sm:max-w-[330px] sm:text-[0.9rem] sm:leading-[1.55]">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="result-panel absolute bottom-[86px] left-1/2 z-30 w-[calc(100vw-24px)] max-w-[900px] -translate-x-1/2 rounded-[4px] bg-[#36393e] px-4 py-3 text-center shadow-[0_20px_44px_rgba(45,45,45,0.12)] sm:bottom-[104px] sm:w-[calc(100vw-46px)] sm:px-10 sm:py-7 lg:bottom-[112px]">
            <p className="mb-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-[#d8ae63] sm:mb-3 sm:text-[0.68rem] sm:tracking-[0.22em]">
              Case Results
            </p>
            <h3 className="result-heading text-[clamp(1rem,6.2vw,2.55rem)] font-semibold leading-tight text-[#d8ae63]">
              Real Results, Real Impact.
            </h3>
          </div>

          <div className="absolute bottom-[28px] left-1/2 z-30 grid w-[calc(100vw-24px)] max-w-[900px] -translate-x-1/2 grid-cols-4 gap-1 px-0.5 text-center sm:bottom-[36px] sm:w-[calc(100vw-46px)] sm:gap-4 sm:px-2 lg:bottom-[40px]">
            {stats.map(({ prefix, target, decimals, suffix, label }) => (
              <div key={label} className="stat min-w-0">
                <p
                  className="counter text-[clamp(0.66rem,4vw,1.8rem)] font-bold leading-none text-[#d8ae63]"
                  data-target={target}
                  data-decimals={decimals}
                  data-prefix={prefix}
                  data-suffix={suffix}
                >
                  {prefix}
                  {fmt(0, decimals)}
                  {suffix}
                </p>
                <p className="mt-1 text-[0.34rem] leading-tight text-[#6f7174] sm:mt-2 sm:text-[0.68rem]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="bottom-bar absolute bottom-0 left-1/2 z-30 h-1.5 w-[calc(100vw-24px)] max-w-[900px] -translate-x-1/2 rounded-full bg-[#1a1a18] sm:h-2 sm:w-[calc(100vw-46px)]" />
        </div>
        </div>
      </div>
    </section>
  );
}
