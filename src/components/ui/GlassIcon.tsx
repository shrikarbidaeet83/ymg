"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

/*
 * Glass icon used across the home page: a clear glass tile about 80% full of its tone's liquid.
 * The liquid has a simple spring model: when the tile moves (a panel opens, a tab changes) or the
 * pointer arrives, the surface tilts against the motion, overshoots and settles, with a light
 * ripple and a few rising bubbles. The icon floats in the liquid, under a glass sheen.
 */

export const glassTones = {
  gold: { from: "#ffe2a1", mid: "#e9b85a", to: "#a8741f", ink: "#7a5212", glow: "201,146,52" },
  teal: { from: "#8ef0d6", mid: "#2fb497", to: "#16705f", ink: "#0f5a4c", glow: "35,150,125" },
  violet: { from: "#e0c9ff", mid: "#9a6ff0", to: "#5b35b8", ink: "#4a2a99", glow: "123,79,208" },
  blue: { from: "#b9dcff", mid: "#5b9cf4", to: "#2a56c4", ink: "#1f43a0", glow: "58,111,216" },
  rose: { from: "#ffd0c7", mid: "#f07f6d", to: "#c0402f", ink: "#9e2f22", glow: "212,87,74" },
  green: { from: "#d2f5a9", mid: "#7cc64a", to: "#3f8a21", ink: "#2f6e16", glow: "78,154,47" },
  amber: { from: "#ffe6a8", mid: "#f6ab3a", to: "#c46a0d", ink: "#9c520a", glow: "224,138,30" },
  indigo: { from: "#cfd3ff", mid: "#7c84f2", to: "#3a3fb0", ink: "#2e3290", glow: "74,79,196" },
} as const;

export type GlassTone = keyof typeof glassTones;

/** Cycle used when a list of items each needs its own colour. */
export const toneCycle: GlassTone[] = ["gold", "teal", "violet", "blue", "rose", "green", "amber", "indigo"];

const sizes = {
  sm: { box: "h-10 w-10", radius: "rounded-[11px]" },
  md: { box: "h-12 w-12", radius: "rounded-[13px]" },
  lg: { box: "h-14 w-14", radius: "rounded-[15px]" },
  xl: { box: "h-16 w-16", radius: "rounded-[18px]" },
};

const LEVEL = 21; // liquid surface at rest, in a 0-100 box (about 80% full)
const BUBBLES = [
  { x: 28, r: 2.2, speed: 0.22 },
  { x: 62, r: 1.6, speed: 0.3 },
  { x: 78, r: 2.6, speed: 0.17 },
];

export default function GlassIcon({
  tone = "gold",
  size = "md",
  surface = "light",
  dim = false,
  mono = false,
  className = "",
  children,
}: {
  tone?: GlassTone;
  size?: keyof typeof sizes;
  /** The background the icon sits on, so the glass reads well. */
  surface?: "light" | "dark";
  /** Muted look for inactive states. */
  dim?: boolean;
  /** One-colour version for dark panels: smoky glass, a thin gold liquid and a gold icon. */
  mono?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const t = glassTones[tone];
  const s = sizes[size];
  const dark = surface === "dark";
  const id = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLSpanElement>(null);
  const liquidRef = useRef<SVGPathElement>(null);
  const crestRef = useRef<SVGPathElement>(null);
  const bubbleRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const liquid = liquidRef.current;
    const crest = crestRef.current;
    if (!root || !liquid || !crest) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let tilt = 0; // positive = surface higher on the left
    let tiltV = 0;
    let bob = 0; // vertical slosh
    let bobV = 0;
    let phase = Math.random() * Math.PI * 2;
    let lastX: number | null = null;
    let lastY: number | null = null;
    let raf = 0;
    let visible = false;
    const bubbleY = BUBBLES.map((_, i) => 100 - i * 22);

    const draw = () => {
      const pts: [number, number][] = [];
      const ripple = 1.3 + Math.min(3, Math.abs(tiltV) * 40 + Math.abs(tilt) * 4);
      for (let x = 0; x <= 100; x += 5) {
        const y = LEVEL + bob * 6 + tilt * 16 * ((x - 50) / 50) + Math.sin((x / 100) * Math.PI * 2.2 + phase) * ripple * 0.6;
        pts.push([x, y]);
      }
      const top = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y.toFixed(2)}`).join(" ");
      liquid.setAttribute("d", `${top} L100 110 L0 110 Z`);
      crest.setAttribute("d", top);
      return pts;
    };

    const surfaceAt = (pts: [number, number][], x: number) => pts[Math.max(0, Math.min(pts.length - 1, Math.round(x / 5)))][1];

    const step = () => {
      const rect = root.getBoundingClientRect();
      const vx = lastX === null ? 0 : rect.left - lastX;
      const vy = lastY === null ? 0 : rect.top - lastY;
      lastX = rect.left;
      lastY = rect.top;

      // Damped springs: moving right leaves the liquid behind (it piles up on the left), then it rocks back.
      tiltV += -0.07 * tilt - 0.09 * tiltV + Math.max(-6, Math.min(6, vx)) * 0.012;
      tilt = Math.max(-0.9, Math.min(0.9, tilt + tiltV));
      bobV += -0.08 * bob - 0.1 * bobV + Math.max(-6, Math.min(6, vy)) * 0.01;
      bob = Math.max(-0.8, Math.min(0.8, bob + bobV));
      phase += 0.045;

      const pts = draw();
      BUBBLES.forEach((b, i) => {
        bubbleY[i] -= b.speed;
        const surfaceY = surfaceAt(pts, b.x);
        if (bubbleY[i] < surfaceY + b.r + 1) bubbleY[i] = 100 + b.r;
        const el = bubbleRefs.current[i];
        if (el) {
          el.setAttribute("cy", bubbleY[i].toFixed(2));
          el.setAttribute("cx", (b.x + Math.sin(phase * 1.6 + i) * 1.2).toFixed(2));
        }
      });
      raf = visible ? requestAnimationFrame(step) : 0;
    };

    draw();
    if (reduce) return;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        lastX = null;
        lastY = null;
        raf = requestAnimationFrame(step);
      }
    });
    io.observe(root);

    // A nudge when the pointer arrives, as if the glass was tapped.
    const host = root.closest(".group") ?? root;
    const nudge = () => {
      tiltV += 0.09;
      bobV += 0.05;
    };
    host.addEventListener("pointerenter", nudge);

    return () => {
      io.disconnect();
      host.removeEventListener("pointerenter", nudge);
      cancelAnimationFrame(raf);
      raf = 0;
    };
  }, []);

  return (
    <span
      ref={rootRef}
      aria-hidden="true"
      className={`relative inline-flex shrink-0 overflow-hidden transition-[filter,opacity] duration-500 ${s.box} ${s.radius} ${dim ? "opacity-50 grayscale-[0.7]" : ""} ${className}`}
      style={mono ? {
        background: "linear-gradient(150deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(235,201,130,0.35), 0 8px 20px rgba(0,0,0,0.35)",
      } : {
        background: dark
          ? "linear-gradient(150deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04))"
          : "linear-gradient(150deg, rgba(255,255,255,0.95), rgba(255,255,255,0.55))",
        boxShadow: dark
          ? `inset 0 1px 0 rgba(255,255,255,0.45), inset 0 0 0 1px rgba(255,255,255,0.16), 0 10px 24px rgba(${t.glow},0.35)`
          : `inset 0 1px 0 rgba(255,255,255,1), inset 0 0 0 1px rgba(${t.glow},0.22), 0 10px 22px rgba(${t.glow},0.28), 0 2px 5px rgba(60,45,20,0.08)`,
      }}
    >
      {/* Liquid */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`liq-${id}`} x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" stopColor={mono ? "rgba(235,201,130,0.42)" : t.from} />
            <stop offset="0.45" stopColor={mono ? "rgba(216,178,107,0.22)" : t.mid} />
            <stop offset="1" stopColor={mono ? "rgba(168,123,37,0.12)" : t.to} />
          </linearGradient>
        </defs>
        <path ref={liquidRef} fill={`url(#liq-${id})`} opacity={mono ? 1 : dark ? 0.9 : 0.92} />
        {BUBBLES.map((b, i) => (
          <circle
            key={i}
            ref={(el) => {
              bubbleRefs.current[i] = el;
            }}
            cx={b.x}
            cy={100}
            r={b.r}
            fill={mono ? "rgba(235,201,130,0.35)" : "rgba(255,255,255,0.55)"}
            stroke={mono ? "rgba(235,201,130,0.7)" : "rgba(255,255,255,0.8)"}
            strokeWidth="0.4"
          />
        ))}
        <path ref={crestRef} fill="none" stroke={mono ? "rgba(235,201,130,0.9)" : "rgba(255,255,255,0.85)"} strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Glass sheen over the liquid */}
      <span className="pointer-events-none absolute inset-x-[8%] top-[4%] h-[40%] rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]" />
      <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 rotate-[25deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 group-hover:translate-x-[260%]" />

      {/* Icon floating in the liquid */}
      <span className={`relative m-auto flex items-center justify-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] ${mono ? "text-[#EBC982]" : "text-white"}`}>{children}</span>
    </span>
  );
}
