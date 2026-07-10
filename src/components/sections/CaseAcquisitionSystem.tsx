"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";

gsap.registerPlugin(ScrollTrigger);

const VB = { w: 900, h: 520, cx: 450, cy: 308, r: 360 };
const FRAME = { y: -40, h: 560 };
const wheelOrigin = `${(VB.cx / VB.w) * 100}% ${((VB.cy - FRAME.y) / FRAME.h) * 100}%`;

function pt(deg: number) {
  const a = (deg * Math.PI) / 180;
  return {
    x: VB.cx + VB.r * Math.cos(a),
    y: VB.cy - VB.r * Math.sin(a),
  };
}

const pct = (p: { x: number; y: number }) => ({
  left: `${(p.x / VB.w) * 100}%`,
  top: `${((p.y - FRAME.y) / FRAME.h) * 100}%`,
});

const top = pt(90);
const guideLine = {
  x: top.x,
  y1: top.y + 18,
  y2: top.y + 70,
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
    angle: -22,
    title: "Qualify",
    desc:
      "Every inquiry is screened for intent, case fit, location, and urgency before it reaches your team.",
  },
  {
    key: "4",
    num: "04",
    angle: -78,
    title: "Connect",
    desc:
      "Qualified prospects move into live intake, AI booking, or attorney review without losing momentum.",
  },
  {
    key: "5",
    num: "05",
    angle: -134,
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
  };
});

const rotations = steps.reduce<number[]>((targets, { angle }) => {
  let rotation = angle - 90;
  const previous = targets[targets.length - 1];

  while (previous !== undefined && rotation > previous) {
    rotation -= 360;
  }

  return [...targets, rotation];
}, []);

const stats = [
  { prefix: "$", target: 2.3, decimals: 1, suffix: "M+", label: "Case Value Generated" },
  { prefix: "", target: 25000, decimals: 0, suffix: "+", label: "Qualified Leads Delivered" },
  { prefix: "", target: 500, decimals: 0, suffix: "+", label: "Cases Signed" },
  { prefix: "", target: 98, decimals: 0, suffix: "%", label: "Client Retention Rate" },
];

const BADGE_SHADOW_IDLE = "0 8px 18px rgba(21,16,10,0.10)";
const BADGE_SHADOW_ACTIVE = "0 14px 28px rgba(168,129,62,0.24)";

function fmt(v: number, decimals: number) {
  return v.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

type CaseAcquisitionSystemProps = {
  bottomVariant?: "results" | "proof";
  showStepFlower?: boolean;
};

export default function CaseAcquisitionSystem({
  bottomVariant = "results",
  showStepFlower = false,
}: CaseAcquisitionSystemProps) {
  const root = useRef<HTMLDivElement>(null);
  const showResults = bottomVariant === "results";

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
      gsap.set(select(".node-badge-anchor"), {
        rotation: 0,
        transformOrigin: "0 0",
      });
      gsap.set(select(".vline"), { scaleY: 1, y: 0, transformOrigin: "top center" });
      gsap.set(select(".step-copy"), { opacity: 0, y: 34 });
      gsap.set(select(".step-copy-1"), { opacity: 1, y: 0 });
      gsap.set(select(".node-badge"), {
        scale: 1,
        boxShadow: BADGE_SHADOW_IDLE,
      });
      gsap.set(select(".gold-dot"), { scale: 1, opacity: 1 });
      gsap.set(select(".node-badge-1"), {
        scale: 1.08,
        boxShadow: BADGE_SHADOW_ACTIVE,
      });
      gsap.set(select(".gold-dot-1"), { scale: 1.18 });
      gsap.set(
        select(".wheel-rotor, .node-badge-anchor, .vline, .step-copy, .node-badge, .gold-dot"),
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
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.18, max: 0.32 },
            delay: 0.04,
            ease: "power1.inOut",
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.addLabel("step-1", 0);

      steps.slice(1).forEach((step, index) => {
        const previousStep = steps[index];
        const at = index * 1.25;
        const rotation = rotations[index + 1];

        tl.to(select(".wheel-rotor"), { rotation, duration: 1, ease: "power1.inOut" }, at)
          .to(select(".node-badge-anchor"), { rotation: -rotation, duration: 1, ease: "power1.inOut" }, at)
          .to(select(".vline"), { scaleY: 0.68, y: 12, duration: 0.28, ease: "power2.in" }, at + 0.08)
          .to(select(".vline"), { scaleY: 1, y: 0, duration: 0.42, ease: "power2.out" }, at + 0.42)
          .to(select(`.node-badge-${previousStep.key}`), {
            scale: 1,
            boxShadow: BADGE_SHADOW_IDLE,
            duration: 0.22,
            ease: "power2.out",
          }, at + 0.12)
          .to(select(`.gold-dot-${previousStep.key}`), {
            scale: 1,
            duration: 0.22,
            ease: "power2.out",
          }, at + 0.12)
          .to(select(`.step-copy-${previousStep.key}`), { opacity: 0, y: -22, duration: 0.32, ease: "power2.in" }, at + 0.1)
          .fromTo(
            select(`.step-copy-${step.key}`),
            { opacity: 0, y: 34 },
            { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" },
            at + 0.42,
          )
          .to(select(`.node-badge-${step.key}`), {
            scale: 1.16,
            boxShadow: BADGE_SHADOW_ACTIVE,
            duration: 0.22,
            ease: "power2.out",
          }, at + 0.44)
          .to(select(`.gold-dot-${step.key}`), {
            scale: 1.24,
            duration: 0.22,
            ease: "power2.out",
          }, at + 0.44)
          .to(select(`.node-badge-${step.key}`), {
            scale: 1.08,
            duration: 0.18,
            ease: "power1.out",
          }, at + 0.66)
          .to(select(`.gold-dot-${step.key}`), {
            scale: 1.18,
            duration: 0.18,
            ease: "power1.out",
          }, at + 0.66);

        tl.addLabel(`step-${step.key}`, at + 1);
      });

      if (showResults) {
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
      }
    }, section);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, [showResults]);

  return (
    <section
      id="case-acquisition-system"
      ref={root}
      className="case-acquisition-section relative isolate bg-[#FFF5E0]"
    >
      <div className="case-pin flex min-h-[620px] items-center overflow-hidden py-0 sm:min-h-[100svh]">
        <div className="mx-auto w-full max-w-6xl px-2.5 sm:px-8">
          <div className="relative z-30 text-center">
            <p className="mb-1 text-[0.52rem] font-medium text-[#7a7c7e] sm:mb-2.5 sm:text-[0.78rem]">
              Our Proven 5-Step
            </p>
            <h2 className="text-[1.38rem] font-semibold leading-tight text-[#202b36] sm:text-[clamp(1.3rem,6vw,3rem)]">
              Case Acquisition System
            </h2>
          </div>

        <div
          className="relative left-1/2 mt-9 h-[346px] w-full max-w-[350px] -translate-x-1/2 sm:mt-20 sm:h-[500px] sm:max-w-[900px] lg:mt-24 lg:h-[520px] lg:max-w-[980px]"
        >
          {showStepFlower && (
            <div className="pointer-events-none absolute inset-x-4 inset-y-8 z-0 translate-y-9 overflow-visible [clip-path:inset(-50%_0_36%_0)] sm:inset-0 sm:translate-y-0 sm:[clip-path:inset(-50%_0_13%_0)] lg:[clip-path:inset(-50%_0_11%_0)]">
              <div className="absolute left-1/2 top-1/2 aspect-[900/560] w-[552%] -translate-x-1/2 -translate-y-1/2 sm:h-full sm:w-auto">
                <Image
                  src="/flowers/half-circleBG.svg"
                  alt=""
                  width={1180}
                  height={848}
                  className="absolute ml-6 mt-[90px] w-[600px] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply sm:ml-10 sm:mt-[140px] sm:w-[920px] lg:ml-[55px] lg:mt-[160px] lg:w-[1080px]"
                  style={{ left: nodes[0].dotPos.left, top: nodes[0].dotPos.top }}
                />
              </div>
            </div>
          )}

          <div className="absolute inset-x-4 inset-y-8 z-10 translate-y-9 overflow-visible [clip-path:inset(-25%_-13%_36%_-13%)] sm:inset-0 sm:translate-y-1 sm:[clip-path:inset(-24%_-4%_13%_-4%)] lg:translate-y-0 lg:[clip-path:inset(-22%_-3%_11%_-3%)]">
            <svg
              viewBox={`0 ${FRAME.y} ${VB.w} ${FRAME.h}`}
              className="absolute left-1/2 top-1/2 aspect-[900/560] w-[122%] -translate-x-1/2 -translate-y-1/2 overflow-visible sm:h-full sm:w-auto"
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
          </div>

          <div className="absolute inset-x-4 inset-y-8 z-20 translate-y-9 overflow-visible [clip-path:inset(-50%_0_36%_0)] sm:inset-0 sm:translate-y-0 sm:[clip-path:inset(-50%_0_13%_0)] lg:[clip-path:inset(-50%_0_11%_0)]">
          <div className="absolute left-1/2 top-1/2 aspect-[900/560] w-[122%] -translate-x-1/2 -translate-y-1/2 sm:h-full sm:w-auto">
          <div className="wheel-rotor absolute inset-0 [will-change:transform]">
            {nodes.map(({ key, num, dotPos }) => (
              <div key={num}>
              <div
                className={`wheel-node node-${key} absolute z-10 h-0 w-0 [--badge-gap:18px] sm:[--badge-gap:22px]`}
                style={{ left: dotPos.left, top: dotPos.top }}
              >
                <span className={`gold-dot gold-dot-${key} absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ae63] shadow-[0_3px_8px_rgba(168,129,62,0.18)] sm:h-3.5 sm:w-3.5`} />
                <div className="node-badge-anchor absolute left-0 top-0 h-0 w-0 [will-change:transform]">
                  <div className={`node-badge node-badge-${key} absolute bottom-[var(--badge-gap)] left-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#eadbb7] bg-white text-[0.58rem] font-semibold text-[#3a3d42] shadow-[0_8px_18px_rgba(21,16,10,0.10)] sm:h-12 sm:w-12 sm:text-[0.82rem]`}>
                    {num}
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
          </div>
          </div>

          <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-[#FFF5E0] ${showResults ? "h-[66px] sm:h-[104px] lg:h-[112px]" : "h-[114px] sm:h-[274px] lg:h-[282px]"}`} />

          <div
            className={`absolute left-1/2 z-20 min-h-[76px] -translate-x-1/2 text-center sm:top-[16%] sm:min-h-[118px] sm:w-[82%] sm:max-w-[360px] lg:top-[21%] ${
              showResults ? "top-[39%] w-[230px]" : "top-[38%] w-[230px]"
            }`}
          >
            {steps.map(({ key, title, desc }) => (
              <div
                key={key}
                className={`step-copy step-copy-${key} absolute inset-x-0 top-0 [will-change:transform,opacity]`}
                style={{ opacity: key === "1" ? 1 : 0 }}
              >
                <h3 className="text-[1.15rem] font-semibold leading-tight text-[#24282c] sm:text-[clamp(1.05rem,5.6vw,2rem)]">
                  {title}
                </h3>
                <p
                  className={`mx-auto mt-2 font-medium leading-[1.42] text-[#666a6d] sm:mt-3 sm:max-w-[330px] sm:text-[0.9rem] sm:font-normal sm:leading-[1.52] ${
                    showResults ? "max-w-[210px] text-[0.62rem]" : "max-w-[205px] text-[0.56rem]"
                  }`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {showResults ? (
            <>
              <div className="result-panel absolute bottom-[58px] left-1/2 z-30 w-[calc(100vw-20px)] max-w-[320px] -translate-x-1/2 rounded-[4px] bg-[#36393e] px-4 py-2.5 text-center shadow-[0_10px_24px_rgba(21,16,10,0.12)] sm:bottom-[104px] sm:w-[calc(100vw-46px)] sm:max-w-[900px] sm:px-10 sm:py-7 lg:bottom-[112px]">
                <p className="mb-1.5 text-[0.46rem] font-semibold uppercase tracking-[0.16em] text-[#d8ae63] sm:mb-3 sm:text-[0.68rem] sm:tracking-[0.22em]">
                  Case Results
                </p>
                <h3 className="result-heading text-[1.18rem] font-semibold leading-tight text-[#EBC982] sm:text-[clamp(1rem,6.2vw,2.55rem)]">
                  Real Results, Real Impact.
                </h3>
              </div>

              <div className="absolute bottom-[21px] left-1/2 z-30 grid w-[calc(100vw-20px)] max-w-[320px] -translate-x-1/2 grid-cols-4 gap-1 px-0.5 text-center sm:bottom-[36px] sm:w-[calc(100vw-46px)] sm:max-w-[900px] sm:gap-4 sm:px-2 lg:bottom-[40px]">
                {stats.map(({ prefix, target, decimals, suffix, label }) => (
                  <div key={label} className="stat min-w-0">
                    <p
                      className="counter text-[0.82rem] font-bold leading-none text-[#d8ae63] sm:text-[clamp(0.66rem,4vw,1.8rem)]"
                      data-target={target}
                      data-decimals={decimals}
                      data-prefix={prefix}
                      data-suffix={suffix}
                    >
                      {prefix}
                      {fmt(target, decimals)}
                      {suffix}
                    </p>
                    <p className="mt-1 text-[0.36rem] leading-tight text-[#6f7174] sm:mt-2 sm:text-[0.68rem]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bottom-bar absolute bottom-0 left-1/2 z-30 h-1.5 w-[calc(100vw-20px)] max-w-[320px] -translate-x-1/2 rounded-full bg-[#1a1a18] sm:h-2 sm:w-[calc(100vw-46px)] sm:max-w-[900px]" />
            </>
          ) : (
            <>
              <div className="absolute bottom-[70px] left-1/2 z-30 w-[calc(100vw-20px)] max-w-[320px] -translate-x-1/2 sm:bottom-[230px] sm:w-[calc(100vw-46px)] sm:max-w-[900px] lg:hidden">
                <MobileProofScroller />
              </div>
              <div className="absolute bottom-[214px] left-1/2 z-30 hidden w-[calc(100vw-46px)] max-w-[900px] -translate-x-1/2 lg:block">
                <ProofBar />
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
