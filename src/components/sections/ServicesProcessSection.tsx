"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Desktop composition is authored in a 1000x600 viewBox. The ring image
// (circle.svg, exported from Figma node 1458_536) is centered at (500, 260)
// and scaled so its outer radius is ~133 units. The `dot` coordinates below
// are the exact anchor-dot centers baked into circle.svg, mapped into this
// viewBox â€” so every connector line originates precisely from a dot.
const CORE = { x: 500, y: 260 };
const NODE_ORBIT = 245; // radius of the numbered-circle orbit
const NODE_GAP = 32; // numbered circles are 64 units wide in this viewBox

const steps = [
  {
    num: "1",
    title: "We Capture Every Lead",
    desc: "Inbound calls, web forms, and live chats are answered immediately, 24/7, no exceptions.",
    dot: { x: 370.4, y: 293.7 },
    copy: "left-[-5.5%] top-[43%] w-[210px] text-right",
    color: "#A9A891",
  },
  {
    num: "2",
    title: "We Follow Up, Fast",
    desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.",
    dot: { x: 419.2, y: 365.6 },
    copy: "left-[7%] top-[81%] w-[168px] text-right",
    color: "#AECAC9",
  },
  {
    num: "3",
    title: "We Qualify & Screen",
    desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.",
    dot: { x: 546.4, y: 383.2 },
    copy: "left-[63%] top-[87%] w-[210px] text-left",
    color: "#577271",
  },
  {
    num: "4",
    title: "We Handle the Paperwork",
    desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.",
    dot: { x: 620.1, y: 317.7 },
    copy: "left-[78%] top-[56%] w-[180px] text-left",
    color: "#6C7249",
  },
  {
    num: "5",
    title: "You Get Signed Cases",
    desc: "Delivered to you, qualified, retained clients ready to move forward.",
    dot: { x: 634.5, y: 256.8 },
    copy: "left-[80%] top-[32%] w-[178px] text-left",
    color: "#8C7272",
  },
].map((step) => {
  // Angle from the core through the baked-in dot; the node sits farther out
  // along the same ray, so the connector reads as one continuous radial line.
  const angle = Math.atan2(step.dot.y - CORE.y, step.dot.x - CORE.x);
  const nx = CORE.x + Math.cos(angle) * NODE_ORBIT;
  const ny = CORE.y + Math.sin(angle) * NODE_ORBIT;
  return {
    ...step,
    node: { x: nx, y: ny },
    lineEnd: {
      x: nx - Math.cos(angle) * NODE_GAP,
      y: ny - Math.sin(angle) * NODE_GAP,
    },
    // Compass bearing pointing back toward the core, used to face the node's
    // coloured arc inward (toward the connector).
    inwardBearing: (Math.atan2(CORE.x - nx, -(CORE.y - ny)) * 180) / Math.PI,
  };
});

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
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        tl.to(".process-core", { opacity: 1, scale: 1, duration: 0.8 }, 0.1)
          .to(".process-title", { opacity: 1, y: 0, duration: 0.55 }, 0.25)
          .to(".process-ring-segment", { opacity: 1, rotate: 0, stagger: 0.03, duration: 0.55 }, 0.35);

        steps.forEach((_, index) => {
          const step = index + 1;
          tl.to(`.process-line-${step}`, { opacity: 1, strokeDashoffset: 0, duration: 0.28 }, step)
            .to(`.process-node-${step}`, { opacity: 1, scale: 1, duration: 0.3 }, step + 0.14)
            .to(`.process-copy-${step}`, { opacity: 1, y: 0, duration: 0.28 }, step + 0.34)
            .to(`.type-text-${step}`, { width: "100%", duration: 0.42, ease: "none" }, step + 0.48);
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
      className="ymg-section-padding-x relative isolate overflow-hidden bg-[#303030] bg-[radial-gradient(circle_at_48%_45%,rgba(95,70,25,0.45),transparent_45%)] text-[#e2c681]"
    >
      <Image
        src="/flowers/vcardBG.svg"
        alt=""
        width={273}
        height={196}
        className="pointer-events-none absolute right-0 top-5 z-0 w-[140px] sm:top-7 sm:w-[210px] lg:right-[3%] lg:top-8 lg:w-[273px]"
      />

      <div className="relative z-10 mx-auto h-[600px] w-full max-w-[402px] md:hidden">
        <h2 className="absolute left-0 top-[72px] w-full max-w-[900px] pl-10 text-left font-heading text-[clamp(1.45rem,7vw,1.8rem)] font-normal leading-[1.08] text-[#EBC982]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="absolute left-[4.27%] top-[195px] h-[455.73px] w-[94.92%]">
          {(() => {
            const core = { x: 88, y: 189 };
            const coreSize = 132;
            const coreRadius = coreSize / 2;
            const holeRadius = coreRadius - 7;
            const orbitRadius = 142;
            const nodes = [
              { num: "1", degree: 0, size: 42, color: "#A9A891", title: "We Capture Every Lead", desc: "Inbound calls, web forms, and live chats are answered immediately â€” 24/7, no exceptions.", copy: "left-[33%] top-[18px] w-[62%]" },
              { num: "2", degree: 45, x: 190.79, y: 100, holeDegree: 45, size: 42, color: "#AECAC9", title: "We Follow Up, Fast", desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.", copy: "left-[59%] top-[72px] w-[39%]" },
              { num: "3", degree: 90, size: 42, color: "#577271", title: "We Qualify & Screen", desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.", copy: "left-[70%] top-[176px] w-[28%]" },
              { num: "4", degree: 135, x: 209.87, y: 265.41, holeDegree: 135, size: 44, color: "#6C7249", title: "We Handle the Paperwork", desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.", copy: "left-[66%] top-[252px] w-[32%]" },
              { num: "5", degree: 180, size: 42, color: "#8C7272", title: "You Get Signed Cases", desc: "Delivered to you â€” qualified, retained clients ready to move forward.", copy: "left-[35%] top-[320px] w-[40%] text-left" },
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
              const nodeGap = node.size / 2;
              const holeRadians = (((node.holeDegree ?? node.degree) - 90) * Math.PI) / 180;
              return {
                ...node,
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

                {mobileNodes.map(({ num, x, y, size, color, title, desc, copy }) => (
                  <div key={num}>
                    <div
                      className={`process-node process-node-${num} absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] bg-[#f6f6ef] text-[0.86rem] font-bold shadow-[0_3px_9px_rgba(0,0,0,0.28)]`}
                      style={{ left: `${(x / 381.58) * 100}%`, top: y, width: size, height: size, borderColor: color, color }}
                    >
                      {num}
                    </div>
                    <div className={`process-copy process-copy-${num} absolute z-30 min-w-0 text-left ${copy}`}>
                      <h3 className="break-words text-[0.47rem] font-bold leading-[1.18] text-[#EBC982]">{title}</h3>
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

      <div className="relative z-10 mx-auto hidden w-full md:flex md:max-w-[700px] md:flex-col md:pt-28 md:pb-8 lg:hidden">
        <h2 className="process-title w-full text-center font-heading text-[clamp(2.25rem,5.2vw,3.4rem)] font-normal leading-[1.1] tracking-[0] text-[#EBC982]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="relative mx-auto mt-12 aspect-[900/590] w-full shrink-0">
          {(() => {
            const core = { x: 190, y: 220 };
            const coreSize = 185;
            const coreRadius = coreSize / 2;
            const holeRadius = coreRadius - 9;
            const desktopSteps = [
              { num: "1", x: 260, y: 65, color: "#A9A891", title: "We Capture Every Lead", desc: "Inbound calls, web forms, and live chats are answered immediately â€” 24/7, no exceptions.", copy: "left-[34%] top-0 w-[32%]" },
              { num: "2", x: 395, y: 155, color: "#AECAC9", title: "We Follow Up, Fast", desc: "Rapid outbound follow-up via call, text, and email ensures no lead goes cold.", copy: "left-[54%] top-[22%] w-[27%]" },
              { num: "3", x: 440, y: 275, color: "#577271", title: "We Qualify & Screen", desc: "Trained specialists identify real opportunities and filter out unqualified inquiries.", copy: "left-[60%] top-[43%] w-[28%]" },
              { num: "4", x: 375, y: 390, color: "#6C7249", title: "We Handle the Paperwork", desc: "Intake forms, contracts, and retainer agreements are processed efficiently and securely.", copy: "left-[51%] top-[63%] w-[31%]" },
              { num: "5", x: 200, y: 405, color: "#8C7272", title: "You Get Signed Cases", desc: "Delivered to you â€” qualified, retained clients ready to move forward.", copy: "left-[23%] top-[80%] w-[28%] text-left" },
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
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(core.x / 900) * 100}%`, top: `${(core.y / 590) * 100}%`, width: `${(coreSize / 900) * 100}%`, aspectRatio: "1" }}
                >
                  <div className="process-core relative h-full w-full rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18),inset_0_2px_6px_rgba(255,255,255,0.25)]">
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
                      <h3 className="text-[clamp(0.75rem,1.45vw,0.9rem)] font-bold leading-tight text-[#EBC982]">{title}</h3>
                      <p className="mt-2 text-[clamp(0.66rem,1.25vw,0.8rem)] leading-[1.45] text-white/60">
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
      <div className="relative z-10 mx-auto hidden min-h-[680px] w-full max-w-[1180px] items-center py-16 lg:flex">
        <h2 className="absolute left-1/2 top-[12%] w-full max-w-[520px] -translate-x-1/2 text-center font-heading text-[clamp(1.65rem,2.35vw,2.3rem)] font-normal leading-[1.08] tracking-[0] text-[#EBC982]">
          From First Contact
          <span className="block">to Signed Retainer</span>
        </h2>

        <div className="relative mx-auto aspect-[5/3] w-full max-w-[800px]">
          <svg viewBox="0 0 1000 600" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
            {steps.map(({ num, dot, lineEnd, color }) => (
              <line
                key={num}
                className={`process-line process-line-${num}`}
                pathLength={1}
                x1={dot.x}
                y1={dot.y}
                x2={lineEnd.x}
                y2={lineEnd.y}
                stroke={color}
                strokeWidth="2.2"
                strokeLinecap="butt"
              />
            ))}
          </svg>

          <div className="process-core absolute aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2" style={{ left: `${(CORE.x / 1000) * 100}%`, top: `${(CORE.y / 600) * 100}%` }}>
            <Image src="/images/circle.svg" alt="" width={293} height={293} className="process-ring-segment absolute inset-0 h-full w-full" />
            <div className="process-title absolute inset-0 flex flex-col items-center justify-center text-center font-sans">
              <span className="text-[0.95rem] font-semibold text-[#111]">Our</span>
              <span className="text-[1.85rem] font-bold leading-none text-[#8b2a91]">Process</span>
            </div>
          </div>

          {steps.map(({ num, title, desc, node, copy, color, inwardBearing }) => (
            <div key={num}>
              <div
                className={`process-node process-node-${num} absolute z-20 flex aspect-square w-[6.4%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] bg-[#f6f6ef] text-[clamp(1.2rem,2.4vw,1.55rem)] font-bold shadow-[0_8px_24px_rgba(0,0,0,0.28)]`}
                style={{ left: `${(node.x / 1000) * 100}%`, top: `${(node.y / 600) * 100}%`, borderColor: color, color }}
              >
                <span
                  className="pointer-events-none absolute inset-[-2px] rounded-full"
                  style={{
                    background: `conic-gradient(from ${inwardBearing - 92}deg, ${color} 0deg 184deg, transparent 184deg 360deg)`,
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
                  }}
                />
                {num}
              </div>
              <div className={`process-copy process-copy-${num} absolute z-20 ${copy}`}>
                <h3 className="text-[0.86rem] font-bold leading-tight text-[#EBC982]">{title}</h3>
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

