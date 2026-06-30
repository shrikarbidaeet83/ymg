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
    copy: "left-[1.5%] top-[39%] w-[150px] text-right",
    hole: { x: 370.4, y: 293.7 },
    color: "#A9A891",
    lineEndGap: 29,
  },
  {
    num: "2",
    title: "We Follow Up, Fast",
    desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.",
    node: { x: 280.3, y: 434.3 },
    copy: "left-[10.5%] top-[82%] w-[175px] text-right",
    hole: { x: 419.2, y: 365.6 },
    color: "#AECAC9",
    lineEndGap: 29,
  },
  {
    num: "3",
    title: "We Qualify & Screen",
    desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.",
    node: { x: 527.1, y: 537 },
    copy: "left-[58.5%] top-[84%] w-[175px] text-left",
    hole: { x: 546.4, y: 383.2 },
    color: "#577271",
    lineEndGap: 29,
  },
  {
    num: "4",
    title: "We Handle the Paperwork",
    desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.",
    node: { x: 774, y: 336 },
    copy: "left-[82.5%] top-[63%] w-[180px] text-left",
    hole: { x: 620.1, y: 317.7 },
    color: "#6C7249",
    lineEndGap: 29,
  },
  {
    num: "5",
    title: "You Get Signed Cases",
    desc: "Delivered to you, qualified, retained clients ready to move forward.",
    node: { x: 770.3, y: 182 },
    copy: "left-[82.5%] top-[28%] w-[178px] text-left",
    hole: { x: 634.5, y: 256.8 },
    color: "#8C7272",
    lineEndGap: 29,
  },
];

export default function ServicesProcessSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    let ctx: ReturnType<typeof gsap.context> | undefined;
    let cancelled = false;

    const init = () => {
      if (cancelled) return;

      ctx = gsap.context(() => {
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
          paused: true,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.to(".process-core", { opacity: 1, scale: 1, duration: 0.6 })
          .to(".process-title", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
          .to(".process-ring-segment", { opacity: 1, rotate: 0, stagger: 0.06, duration: 0.45 }, "-=0.15");

        steps.forEach((_, index) => {
          const step = index + 1;
          tl.to(`.process-line-${step}`, { opacity: 1, strokeDashoffset: 0, duration: 0.4 }, "+=0.04")
            .to(`.process-node-${step}`, { opacity: 1, scale: 1, duration: 0.28 }, "-=0.15")
            .to(`.process-copy-${step}`, { opacity: 1, y: 0, duration: 0.28 }, "-=0.06")
            .to(`.type-text-${step}`, { width: "100%", duration: 0.4, ease: "none" }, "-=0.16");
        });
      }, section);
    };

    const ready = (document.fonts?.ready ?? Promise.resolve()).then(
      () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
    );
    ready.then(init);

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-[#303030] bg-[radial-gradient(circle_at_48%_45%,rgba(95,70,25,0.45),transparent_45%)] px-4 text-[#e2c681] sm:px-8 lg:px-12"
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

      <div className="relative z-10 mx-auto h-[820px] w-full max-w-[402px] md:hidden">
        <h2 className="absolute left-0 top-[96px] w-full max-w-[900px] pl-10 text-left font-heading text-[clamp(1.45rem,7vw,1.8rem)] font-normal leading-[1.08] text-[#e0b767]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="absolute left-[4.27%] top-[285px] h-[455.73px] w-[94.92%]">
          {(() => {
            const core = { x: 88, y: 189 };
            const coreSize = 132;
            const coreRadius = coreSize / 2;
            const holeRadius = coreRadius - 7;
            const orbitRadius = 142;
            const nodes = [
              { num: "1", degree: 0, size: 42, color: "#A9A891", title: "We Capture Every Lead", desc: "Inbound calls, web forms, and live chats are answered immediately — 24/7, no exceptions.", copy: "left-[33%] top-[18px] w-[62%]" },
              { num: "2", degree: 45, x: 190.79, y: 100, holeDegree: 45, size: 42, color: "#AECAC9", title: "We Follow Up, Fast", desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.", copy: "left-[59%] top-[72px] w-[39%]" },
              { num: "3", degree: 90, size: 42, color: "#577271", title: "We Qualify & Screen", desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.", copy: "left-[70%] top-[176px] w-[28%]" },
              { num: "4", degree: 135, x: 209.87, y: 265.41, holeDegree: 135, size: 44, color: "#6C7249", title: "We Handle the Paperwork", desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.", copy: "left-[66%] top-[252px] w-[32%]" },
              { num: "5", degree: 180, size: 42, color: "#8C7272", title: "You Get Signed Cases", desc: "Delivered to you — qualified, retained clients ready to move forward.", copy: "left-[35%] top-[320px] w-[40%] text-left" },
            ].map((node) => {
              const radians = ((node.degree - 90) * Math.PI) / 180;
              return {
                ...node,
                x: node.x ?? core.x + Math.cos(radians) * orbitRadius,
                y: node.y ?? core.y + Math.sin(radians) * orbitRadius,
              };
            });
            const mobileNodes = nodes.map((node) => {
              const dx = node.x - core.x;
              const dy = node.y - core.y;
              const length = Math.hypot(dx, dy);
              const nodeGap = node.size / 2 + 5;
              const holeRadians = (((node.holeDegree ?? node.degree) - 90) * Math.PI) / 180;
              return {
                ...node,
                angle: (Math.atan2(dy, dx) * 180) / Math.PI,
                holeX: core.x + Math.cos(holeRadians) * holeRadius,
                holeY: core.y + Math.sin(holeRadians) * holeRadius,
                lineEndX: node.x - (dx / length) * nodeGap,
                lineEndY: node.y - (dy / length) * nodeGap,
              };
            });

            return (
              <>
                <svg viewBox="0 0 381.58 455.73" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
                  {mobileNodes.map(({ num, lineEndX, lineEndY, holeX, holeY, color }) => (
                    <line key={num} className={`process-line process-line-${num}`} pathLength={1} x1={holeX} y1={holeY} x2={lineEndX} y2={lineEndY} stroke={color} strokeWidth="1.7" strokeLinecap="round" />
                  ))}
                </svg>

                <div
                  className="process-core absolute -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18),inset_0_2px_6px_rgba(255,255,255,0.25)]"
                  style={{ left: `${(core.x / 381.58) * 100}%`, top: core.y, width: coreSize, height: coreSize }}
                >
                  <div className="process-ring-segment absolute inset-0 rounded-full bg-[conic-gradient(from_-22.5deg,#a9a891_0deg_45deg,#aecac9_45deg_90deg,#577271_90deg_135deg,#6c7249_135deg_180deg,#8c7272_180deg_225deg,#a9a891_225deg_360deg)] shadow-[inset_0_2px_6px_rgba(255,255,255,0.25)]" />
                  <div className="absolute inset-[14px] rounded-full border border-white/90 bg-[#f7f7f2] shadow-[inset_0_2px_6px_rgba(255,255,255,0.25)]" />
                  <div className="absolute inset-[25px] rounded-full border border-[#c9c9c9] bg-[linear-gradient(#fafafa,#e8e8e8)] shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]" />
                  {mobileNodes.map(({ num, holeX, holeY, color }) => (
                    <span
                      key={num}
                      className="absolute z-20 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e1910]"
                      style={{ left: holeX - core.x + coreRadius, top: holeY - core.y + coreRadius, border: `1.5px solid ${color}` }}
                    />
                  ))}
                  <div className="process-title absolute inset-0 flex flex-col items-center justify-center text-center font-sans">
                    <span className="text-[0.62rem] font-semibold text-[#111]">Our</span>
                    <span className="text-[1.18rem] font-extrabold leading-none text-[#8b2a91]">Process</span>
                  </div>
                </div>

                {mobileNodes.map(({ num, x, y, size, angle, color, title, desc, copy }) => (
                  <div key={num}>
                    <div
                      className={`process-node process-node-${num} absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] bg-[#f6f6ef] text-[0.86rem] font-bold shadow-[0_3px_9px_rgba(0,0,0,0.28)]`}
                      style={{ left: `${(x / 381.58) * 100}%`, top: y, width: size, height: size, borderColor: color, color }}
                    >
                      <span
                        className="pointer-events-none absolute inset-[-5px] rounded-full"
                        style={{
                          background: `conic-gradient(from ${angle - 92}deg, ${color} 0deg 184deg, transparent 184deg 360deg)`,
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 1.7px), #000 calc(100% - 1px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 1.7px), #000 calc(100% - 1px))",
                        }}
                      />
                      {num}
                    </div>
                    <div className={`process-copy process-copy-${num} absolute z-30 min-w-0 text-left ${copy}`}>
                      <h3 className="break-words text-[0.47rem] font-bold leading-[1.18] text-[#e0b767]">{title}</h3>
                      <p className="mt-2 break-words text-[0.37rem] leading-[1.35] text-[#aaa]">
                        <span className={`type-text type-text-${num} block max-w-full overflow-hidden whitespace-normal`}>{desc}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            );
          })()}
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden min-h-[100svh] w-full md:block md:max-w-[700px] md:pb-10 md:pt-16 lg:hidden">
        <h2 className="process-title max-w-[900px] font-heading text-[clamp(2.25rem,5.2vw,3.4rem)] font-normal md:pl-8 lg:pl-0 xl:pl-0 leading-[1.1] tracking-[0] text-[#e2c681]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="relative aspect-[900/590] w-full md:mt-5 lg:-mt-1 xl:-mt-1">
          {(() => {
            const core = { x: 190, y: 220 };
            const coreSize = 185;
            const coreRadius = coreSize / 2;
            const holeRadius = coreRadius - 9;
            const desktopSteps = [
              { num: "1", x: 260, y: 65, color: "#A9A891", title: "We Capture Every Lead", desc: "Inbound calls, web forms, and live chats are answered immediately — 24/7, no exceptions.", copy: "left-[34%] top-[8%] w-[30%]" },
              { num: "2", x: 395, y: 155, color: "#AECAC9", title: "We Follow Up, Fast", desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.", copy: "left-[54%] top-[22%] w-[27%]" },
              { num: "3", x: 440, y: 275, color: "#577271", title: "We Qualify & Screen", desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.", copy: "left-[60%] top-[43%] w-[28%]" },
              { num: "4", x: 375, y: 390, color: "#6C7249", title: "We Handle the Paperwork", desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.", copy: "left-[51%] top-[63%] w-[31%]" },
              { num: "5", x: 200, y: 405, color: "#8C7272", title: "You Get Signed Cases", desc: "Delivered to you — qualified, retained clients ready to move forward.", copy: "left-[0.5%] top-[66%] w-[18%] text-right" },
            ].map((step) => {
              const dx = step.x - core.x;
              const dy = step.y - core.y;
              const length = Math.hypot(dx, dy);
              const nodeGap = 38;
              return {
                ...step,
                angle: (Math.atan2(dy, dx) * 180) / Math.PI,
                holeX: core.x + (dx / length) * holeRadius,
                holeY: core.y + (dy / length) * holeRadius,
                lineEndX: step.x - (dx / length) * nodeGap,
                lineEndY: step.y - (dy / length) * nodeGap,
              };
            });

            return (
              <>
                <svg viewBox="0 0 900 590" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
                  {desktopSteps.map(({ num, holeX, holeY, lineEndX, lineEndY, color }) => (
                    <line key={num} className={`process-line process-line-${num}`} pathLength={1} x1={holeX} y1={holeY} x2={lineEndX} y2={lineEndY} stroke={color} strokeWidth="2" strokeLinecap="round" />
                  ))}
                </svg>

                <div
                  className="process-core absolute -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18),inset_0_2px_6px_rgba(255,255,255,0.25)]"
                  style={{ left: `${(core.x / 900) * 100}%`, top: `${(core.y / 590) * 100}%`, width: `${(coreSize / 900) * 100}%`, aspectRatio: "1" }}
                >
                  <div className="process-ring-segment absolute inset-0 rounded-full bg-[conic-gradient(from_8deg,#a9a891_0deg_39deg,#aecac9_39deg_77deg,#577271_77deg_110deg,#6c7249_110deg_147deg,#8c7272_147deg_187deg,#a9a891_187deg_360deg)] shadow-[inset_0_2px_6px_rgba(255,255,255,0.25)]" />
                  <div className="absolute inset-[13%] rounded-full border-2 border-white/90 bg-[#f8f8f3] shadow-[inset_0_2px_6px_rgba(255,255,255,0.25)]" />
                  <div className="absolute inset-[23%] rounded-full border border-[#c9c9c9] bg-[linear-gradient(#fafafa,#e8e8e8)] shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]" />
                  {desktopSteps.map(({ num, holeX, holeY, color }) => (
                    <span
                      key={num}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e1910] md:h-[8px] md:w-[8px] lg:h-[10px] lg:w-[10px]"
                      style={{ left: `${((holeX - core.x + coreRadius) / coreSize) * 100}%`, top: `${((holeY - core.y + coreRadius) / coreSize) * 100}%`, border: `1.5px solid ${color}` }}
                    />
                  ))}
                  <div className="process-title absolute inset-0 flex flex-col items-center justify-center text-center font-sans">
                    <span className="text-[clamp(0.72rem,1.3vw,0.95rem)] font-semibold text-[#111]">Our</span>
                    <span className="text-[clamp(1.35rem,2.6vw,1.9rem)] font-extrabold leading-none text-[#9c249f]">Process</span>
                  </div>
                </div>

                {desktopSteps.map(({ num, x, y, angle, color, title, desc, copy }) => (
                  <div key={num}>
                    <div
                      className={`process-node process-node-${num} absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6f6ef] font-bold shadow-[0_8px_24px_rgba(0,0,0,0.28)] md:h-[50px] md:w-[50px] md:border-[4px] md:text-[1.15rem] lg:h-[64px] lg:w-[64px] lg:border-[5px] lg:text-[1.5rem]`}
                      style={{ left: `${(x / 900) * 100}%`, top: `${(y / 590) * 100}%`, borderColor: color, color }}
                    >
                      <span
                        className="pointer-events-none absolute rounded-full md:inset-[-8px] lg:inset-[-10px]"
                        style={{
                          background: `conic-gradient(from ${angle - 92}deg, ${color} 0deg 185deg, transparent 185deg 360deg)`,
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                        }}
                      />
                      {num}
                    </div>
                    <div className={`process-copy process-copy-${num} absolute z-20 ${copy}`}>
                      <h3 className="text-[clamp(0.68rem,1.35vw,0.9rem)] font-bold leading-tight text-[#e2c681]">{title}</h3>
                      <p className="mt-2 text-[clamp(0.58rem,1.2vw,0.86rem)] leading-[1.45] lg:mt-3 text-white/60">
                        <span className={`type-text type-text-${num} inline-block overflow-hidden align-top`}>{desc}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            );
          })()}
        </div>
      </div>
      <div className="relative z-10 mx-auto hidden min-h-[100svh] w-full max-w-[1180px] items-center py-16 lg:flex">
        <h2 className="absolute left-0 top-[12%] max-w-[300px] font-heading text-[clamp(1.65rem,2.35vw,2.3rem)] font-normal leading-[1.08] tracking-[0] text-[#e0b767]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="relative mx-auto h-[600px] w-full max-w-[980px]">
          <svg viewBox="0 0 1000 600" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
            {steps.map(({ num, node, hole, color, lineEndGap }) => {
              const dx = node.x - hole.x;
              const dy = node.y - hole.y;
              const length = Math.hypot(dx, dy);
              const x2 = node.x - (dx / length) * lineEndGap;
              const y2 = node.y - (dy / length) * lineEndGap;

              return (
                <line
                  key={num}
                  className={`process-line process-line-${num}`}
                  pathLength={1}
                  x1={hole.x}
                  y1={hole.y}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth="2.2"
                  strokeLinecap="butt"
                />
              );
            })}
          </svg>

          <div className="process-core absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2" style={{ left: "50%", top: `${(260 / 600) * 100}%` }}>
            <Image src="/images/circle.svg" alt="" width={293} height={293} className="process-ring-segment absolute inset-0 h-full w-full" />
            <div className="process-title absolute inset-0 flex flex-col items-center justify-center text-center font-sans">
              <span className="text-[0.95rem] font-semibold text-[#111]">Our</span>
              <span className="text-[1.85rem] font-bold leading-none text-[#8b2a91]">Process</span>
            </div>
          </div>

          {steps.map(({ num, title, desc, node, copy, color, hole }) => (
            <div key={num}>
              <div
                className={`process-node process-node-${num} absolute z-20 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] bg-[#f6f6ef] text-[1.55rem] font-bold shadow-[0_8px_24px_rgba(0,0,0,0.28)]`}
                style={{ left: `${(node.x / 1000) * 100}%`, top: `${(node.y / 600) * 100}%`, borderColor: color, color }}
              >
                <span
                  className="pointer-events-none absolute inset-[-10px] rounded-full"
                  style={{
                    background: `conic-gradient(from ${(Math.atan2(hole.x - node.x, -(hole.y - node.y)) * 180) / Math.PI - 185}deg, ${color} 0deg 185deg, transparent 185deg 360deg)`,
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                  }}
                />
                {num}
              </div>
              <div className={`process-copy process-copy-${num} absolute z-20 ${copy}`}>
                <h3 className="text-[0.86rem] font-bold leading-tight text-[#e0b767]">{title}</h3>
                <p className="mt-1 text-[0.64rem] leading-[1.35] text-[#9d9d9d]">
                  <span className={`type-text type-text-${num} inline-block overflow-hidden align-top`}>{desc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>    </section>
  );
}
