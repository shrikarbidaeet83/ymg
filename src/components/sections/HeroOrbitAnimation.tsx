"use client";

import type { CSSProperties, ReactElement } from "react";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCheck, Megaphone, MoreHorizontal, Users } from "lucide-react";

/** True once we know the viewport is at/above Tailwind's `sm` breakpoint (640px). */
function useIsDesktop() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const query = window.matchMedia("(min-width: 640px)");
      const handleChange = () => onStoreChange();
      query.addEventListener("change", handleChange);
      return () => query.removeEventListener("change", handleChange);
    },
    () => window.matchMedia("(min-width: 640px)").matches,
    () => false,
  );
}

/* ─── data ─────────────────────────────────────────────────── */
/* Items orbiting the center icon, positioned to match the reference
   layout: Case Growth (upper-left) and Leads Overview (left, just
   below center) on the left side; the bars + envelope badges
   clustered together at the bottom-left; the message badge at top
   center; Campaign Performance (upper-right) and the megaphone card
   (right, slightly below center) on the right, with the people badge
   floating outside the ring in the gap between them. Angle 0 = right,
   90 = bottom, 180 = left, -90 = top (clockwise). Each item can set
   its own `radius` (% of container) to override the default for its
   kind — used here so the people badge sits further out than the
   other badges. */

type BadgeGlyph = "message" | "bars" | "envelope" | "people";

/* `mobileAngle`/`mobileRadius` let an item sit somewhere different on
   small screens — used below so the Leads Overview card can move
   further out on desktop (to stop covering a ring dot) without
   pushing it off-screen on mobile, where it keeps its original spot. */
type OrbitItem =
  | { angle: number; radius?: number; mobileAngle?: number; mobileRadius?: number; kind: "badge"; glyph: BadgeGlyph; label: string; tone: "dark" | "light" }
  | { angle: number; radius?: number; mobileAngle?: number; mobileRadius?: number; kind: "caseGrowth" }
  | { angle: number; radius?: number; mobileAngle?: number; mobileRadius?: number; kind: "campaign" }
  | { angle: number; radius?: number; mobileAngle?: number; mobileRadius?: number; kind: "leads" }
  | { angle: number; radius?: number; mobileAngle?: number; mobileRadius?: number; kind: "megaphone" };

const orbitItems: OrbitItem[] = [
  { angle: -90, kind: "badge", glyph: "message", label: "Messages", tone: "dark" },
  { angle: -30, kind: "campaign" },
  { angle: 5, radius: 50, kind: "badge", glyph: "people", label: "Clients", tone: "light" },
  { angle: 38, kind: "megaphone" },
  { angle: 90, kind: "badge", glyph: "envelope", label: "Email", tone: "light" },
  { angle: 175, radius: 49, mobileAngle: 172, mobileRadius: 42, kind: "leads" },
  { angle: 115, kind: "badge", glyph: "bars", label: "Reports", tone: "dark" },
  { angle: 220, kind: "caseGrowth" },
];

const RING_RADIUS_PCT = 39;
const CARD_RADIUS_PCT = 42;

function orbitPosition(angle: number, radiusPct: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    left: `${(50 + radiusPct * Math.cos(radians)).toFixed(3)}%`,
    top: `${(50 + radiusPct * Math.sin(radians)).toFixed(3)}%`,
  };
}

/* A 3-point [0, -amplitude, 0] keyframe animation eased "easeInOut"
   spends a large chunk of a long duration decelerating to a near-stop
   at each turn — which reads as visible stutter ("stopping then
   moving") rather than a smooth float. Sampling a full sine cycle into
   many small linear steps removes that lingering pause: each segment
   is short enough that the easing is imperceptible, so the motion
   reads as one continuous, perfectly smooth bob. */
/* ─── center target icon ───────────────────────────────────── */
/* Pops in first with a rotating scale-up, then settles into a slow
   continuous pulse once revealed. */

function CenterIcon() {
  return (
    <motion.div
      className="ymg-orbit-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="ymg-orbit-center-surface relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#f3cb84] to-[#c4923f] shadow-[0_22px_45px_rgba(168,129,62,0.5),inset_0_2px_2px_rgba(255,255,255,0.5),inset_0_-4px_8px_rgba(150,100,30,0.4)] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
      >
        <span className="pointer-events-none absolute left-1.5 top-1.5 h-3 w-5 rounded-full bg-white/40 blur-[3px]" aria-hidden="true" />
        <TargetGlyph className="relative h-[31px] w-[31px] sm:h-[67px] sm:w-[67px] lg:h-[78px] lg:w-[78px]" />
      </motion.div>
    </motion.div>
  );
}

function TargetGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`ymg-orbit-target-glyph ${className}`} aria-hidden="true">
      <defs>
        <filter id="targetGlyphShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#5c3d10" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#targetGlyphShadow)" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round">
        <circle cx="30" cy="32" r="22" />
        <circle cx="30" cy="32" r="13" />
        <circle cx="30" cy="32" r="3.4" fill="#fff" stroke="none" />
        <path d="M30 32 L50 12" />
        <path d="M44 8 L54 8 L54 18 Z" fill="#fff" stroke="none" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ─── concentric dashed rings ──────────────────────────────── */
/* Three rings, all in one SVG (so stroke widths/dash patterns scale
   responsively with the container instead of via CSS border tricks):
    - inner halo: hugs the center icon, dashed, filled with a faint
      theme tint — like an outer layer peeking out from behind it.
    - middle ring: dashed, with 4 small theme-colored dots at the
      top/right/bottom/left compass points.
    - outer ring: the main orbit guide the cards/badges sit on —
      thicker stroke and wider dash spacing than the inner two. */

const INNER_HALO_RADIUS = 13;
const MIDDLE_RING_RADIUS = 21;

function OrbitRings() {
  return (
    <motion.svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r={INNER_HALO_RADIUS}
        fill="#d9ae5d"
        fillOpacity="0.12"
        stroke="#d8ae63"
        strokeOpacity="0.55"
        strokeWidth="0.4"
      />
      <circle
        cx="50"
        cy="50"
        r={MIDDLE_RING_RADIUS}
        fill="none"
        stroke="#d8ae63"
        strokeOpacity="0.45"
        strokeWidth="0.35"
        strokeDasharray="1 1.2"
      />
      {[-90, 0, 90, 180].map((angle) => {
        const radians = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={50 + MIDDLE_RING_RADIUS * Math.cos(radians)}
            cy={50 + MIDDLE_RING_RADIUS * Math.sin(radians)}
            r="1.4"
            fill="#d9ae5d"
          />
        );
      })}
      <circle
        cx="50"
        cy="50"
        r={RING_RADIUS_PCT}
        fill="none"
        stroke="#d8ae63"
        strokeOpacity="0.5"
        strokeWidth="0.35"
        strokeDasharray="1 1.2"
      />
    </motion.svg>
  );
}

/* ─── card content: mini data visualizations ───────────────── */
/* Each card renders a small, brand-colored chart built from plain
   SVG/CSS — no chart library, no raster images, so it stays crisp
   and on-palette at any size. */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const CASE_GROWTH_POINTS = [18, 58, 104, 96, 150, 210];

function CaseGrowthCard() {
  const w = 200;
  const h = 96;
  const max = 220;
  const stepX = w / (CASE_GROWTH_POINTS.length - 1);
  const coords = CASE_GROWTH_POINTS.map((v, i) => ({ x: i * stepX, y: h - (v / max) * h }));
  const linePath = coords.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <div className="ymg-orbit-card w-20 rounded-lg border border-[#eadfca] bg-white p-1.5 text-left shadow-[0_16px_34px_rgba(73,59,33,0.16)] sm:w-52 sm:rounded-2xl sm:p-4 lg:w-60">
      <p className="ymg-orbit-card-title text-[0.5rem] font-semibold text-[#3a3d42] sm:text-sm">Case Growth</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 h-8 w-full sm:mt-2 sm:h-20" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="caseGrowthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9ae5d" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d9ae5d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#caseGrowthFill)" />
        <path d={linePath} fill="none" stroke="#d9ae5d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {coords.map((p) => (
          <circle key={p.x} cx={p.x} cy={p.y} r="3" fill="#fff" stroke="#d9ae5d" strokeWidth="2" />
        ))}
      </svg>
      <div className="ymg-orbit-axis mt-1 hidden justify-between text-[0.6rem] font-medium text-[#a3a5a7] sm:flex">
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

const CAMPAIGN_WAVE_POINTS = [10, 40, 28, 55, 38, 65, 92];

function CampaignPerformanceCard() {
  const w = 200;
  const h = 50;
  const max = 100;
  const stepX = w / (CAMPAIGN_WAVE_POINTS.length - 1);
  const coords = CAMPAIGN_WAVE_POINTS.map((v, i) => ({ x: i * stepX, y: h - (v / max) * h }));
  const linePath = coords.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <div className="ymg-orbit-card w-24 rounded-lg border border-[#eadfca] bg-white p-1.5 text-left shadow-[0_16px_34px_rgba(73,59,33,0.16)] sm:w-56 sm:rounded-2xl sm:p-4 lg:w-64">
      <div className="flex items-center justify-between">
        <p className="ymg-orbit-card-title text-[0.5rem] font-semibold text-[#3a3d42] sm:text-sm">Campaign Performance</p>
        <MoreHorizontal className="h-2.5 w-2.5 text-[#a3a5a7] sm:h-3.5 sm:w-3.5" aria-hidden="true" />
      </div>

      <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2">
        <div className="ymg-orbit-stat rounded-md bg-[#fbf4e4] p-1.5 sm:rounded-lg sm:p-2">
          <Users className="h-2.5 w-2.5 text-[#d9ae5d] sm:h-4 sm:w-4" strokeWidth={1.8} aria-hidden="true" />
          <p className="ymg-orbit-gold-text mt-1 text-[0.65rem] font-bold text-[#3a3d42] sm:mt-1.5 sm:text-base">128</p>
          <p className="text-[0.4rem] text-[#8a8c8e] sm:text-[0.6rem]">New Leads</p>
        </div>
        <div className="ymg-orbit-stat rounded-md bg-[#f3f3f1] p-1.5 sm:rounded-lg sm:p-2">
          <BarChart3 className="h-2.5 w-2.5 text-[#3a3d42] sm:h-4 sm:w-4" strokeWidth={1.8} aria-hidden="true" />
          <p className="ymg-orbit-gold-text mt-1 text-[0.65rem] font-bold text-[#3a3d42] sm:mt-1.5 sm:text-base">86</p>
          <p className="text-[0.4rem] text-[#8a8c8e] sm:text-[0.6rem]">Qualified Cases</p>
        </div>
      </div>

      <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 h-5 w-full sm:mt-3 sm:h-11" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="campaignFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9ae5d" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d9ae5d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#campaignFill)" />
        <path d={linePath} fill="none" stroke="#d9ae5d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="3.5" fill="#d9ae5d" />
      </svg>
    </div>
  );
}

const LEADS_BREAKDOWN = [
  { label: "New Leads", pct: 40, color: "#d9ae5d" },
  { label: "In Progress", pct: 25, color: "#f3e2c0" },
  { label: "Qualified", pct: 35, color: "#3a3d42" },
];

function LeadsOverviewCard() {
  const stops: string[] = [];
  let cursor = 0;
  for (const slice of LEADS_BREAKDOWN) {
    stops.push(`${slice.color} ${cursor}% ${cursor + slice.pct}%`);
    cursor += slice.pct;
  }

  return (
    <div className="ymg-orbit-card w-20 rounded-lg border border-[#eadfca] bg-white p-1.5 text-left shadow-[0_16px_34px_rgba(73,59,33,0.16)] sm:w-52 sm:rounded-2xl sm:p-4 lg:w-60">
      <p className="ymg-orbit-card-title text-[0.5rem] font-semibold text-[#3a3d42] sm:text-sm">Leads Overview</p>
      <div className="mt-1.5 flex items-center gap-2 sm:mt-3 sm:gap-4">
        <div
          className="relative h-8 w-8 shrink-0 rounded-full sm:h-20 sm:w-20"
          style={{ background: `conic-gradient(${stops.join(", ")})` }}
          aria-hidden="true"
        >
          <div className="ymg-orbit-donut-hole absolute inset-[22%] rounded-full bg-white" />
        </div>
        <ul className="hidden flex-col gap-1.5 sm:flex">
          {LEADS_BREAKDOWN.map((slice) => (
            <li key={slice.label} className="flex items-center gap-1.5 text-[0.68rem] font-medium text-[#5a5c5e]">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: slice.color }} aria-hidden="true" />
              {slice.label}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1 sm:hidden">
          {LEADS_BREAKDOWN.map((slice) => (
            <li key={slice.label} className="flex items-center gap-1" aria-label={slice.label}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: slice.color }} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MegaphoneCard() {
  return (
    <div className="ymg-orbit-card w-20 rounded-lg border border-[#eadfca] bg-white p-1.5 text-left shadow-[0_16px_34px_rgba(73,59,33,0.16)] sm:w-52 sm:rounded-2xl sm:p-4 lg:w-60">
      <div className="flex items-start gap-1.5 sm:gap-3">
        <span className="ymg-orbit-gold-badge flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-[#d9ae5d] sm:h-10 sm:w-10 sm:rounded-xl">
          <Megaphone className="h-3 w-3 text-white sm:h-5 sm:w-5" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="flex flex-1 flex-col gap-1 pt-0.5 sm:gap-1.5 sm:pt-1">
          <span className="ymg-orbit-copy-line h-1 w-full rounded-full bg-[#ece9e2] sm:h-1.5" />
          <span className="ymg-orbit-copy-line h-1 w-4/5 rounded-full bg-[#ece9e2] sm:h-1.5" />
        </div>
      </div>
      <div className="ymg-orbit-outreach mt-1.5 flex items-center justify-between rounded-md bg-[#fbf4e4] px-1.5 py-1 sm:mt-3 sm:rounded-lg sm:px-2.5 sm:py-2">
        <span className="text-[0.4rem] font-semibold text-[#3a3d42] sm:text-[0.68rem]">Outreach Sent</span>
        <span className="ymg-orbit-gold-badge flex h-3.5 w-3.5 items-center justify-center rounded sm:h-5 sm:w-5 sm:rounded-md bg-[#d9ae5d]">
          <CheckCheck className="h-2 w-2 text-white sm:h-3 sm:w-3" strokeWidth={2.5} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

/* ─── glossy 3D icon badge ──────────────────────────────────── */
/* Mimics a glossy plastic/3D app-icon: a squircle surface with a
   top-to-bottom gradient, an embossed bevel via inset shadows (light
   edge on top, dark edge on bottom), a soft blurred "gloss" highlight
   in the top-left corner — and, unlike a flat icon glyph, the icon
   itself is a chunky solid "sticker" shape with its own gradient,
   inner highlight, and drop-shadow so it visibly sits on the badge. */

const GLYPHS: Record<BadgeGlyph, (props: { className?: string }) => ReactElement> = {
  message: MessageGlyph,
  bars: BarsGlyph,
  envelope: EnvelopeGlyph,
  people: PeopleGlyph,
};

/* Base badge is h-12/14/16 (48/56/64px) with a h-7/8/9 (28/32/36px)
   glyph inside. Message is scaled 1.3x and bars 1.15x per request;
   other glyphs keep the base size. */
const BADGE_SIZE_CLASS: Record<BadgeGlyph, string> = {
  message: "h-[35px] w-[35px] sm:h-[73px] sm:w-[73px] lg:h-[83px] lg:w-[83px]",
  bars: "h-[30px] w-[30px] sm:h-[64px] sm:w-[64px] lg:h-[74px] lg:w-[74px]",
  envelope: "h-7 w-7 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
  people: "h-7 w-7 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
};

const GLYPH_SIZE_CLASS: Record<BadgeGlyph, string> = {
  message: "h-[20px] w-[20px] sm:h-[42px] sm:w-[42px] lg:h-[47px] lg:w-[47px]",
  bars: "h-[17px] w-[17px] sm:h-[37px] sm:w-[37px] lg:h-[41px] lg:w-[41px]",
  envelope: "h-4 w-4 sm:h-8 sm:w-8 lg:h-9 lg:w-9",
  people: "h-4 w-4 sm:h-8 sm:w-8 lg:h-9 lg:w-9",
};

function Badge3D({ glyph, tone, label }: { glyph: BadgeGlyph; tone: "dark" | "light"; label: string }) {
  const isDark = tone === "dark";
  const Glyph = GLYPHS[glyph];

  return (
    <div
      className={`ymg-orbit-badge relative flex items-center justify-center overflow-hidden rounded-[28%] ${BADGE_SIZE_CLASS[glyph]} ${
        isDark
          ? "bg-gradient-to-b from-[#4a4d52] to-[#1f2125] shadow-[0_12px_26px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_-3px_6px_rgba(0,0,0,0.45)]"
          : "bg-gradient-to-b from-[#fdf2da] to-[#ead2a3] shadow-[0_12px_26px_rgba(168,129,62,0.3),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(168,129,62,0.3)]"
      }`}
      aria-label={label}
      role="img"
    >
      <span className="pointer-events-none absolute left-2 top-2 h-3 w-6 rounded-full bg-white/40 blur-[3px]" aria-hidden="true" />
      <Glyph className={`relative ${GLYPH_SIZE_CLASS[glyph]}`} />
    </div>
  );
}

/* Shared gradient stops for the gold "sticker" glyphs — light at the
   top, deeper gold at the bottom, giving each shape a rounded,
   extruded feel rather than a flat fill. */
function GoldGlyphDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3cb84" />
        <stop offset="100%" stopColor="#cf9a4d" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-60%" y="-60%" width="220%" height="220%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>
  );
}

function MessageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <GoldGlyphDefs id="msg" />
      <g filter="url(#msg-shadow)">
        <rect x="6" y="10" width="52" height="34" rx="13" fill="url(#msg-fill)" />
        <path d="M14 44 L14 57 L27 44 Z" fill="url(#msg-fill)" />
        <rect x="11" y="14" width="42" height="6" rx="3" fill="#fff" opacity="0.22" />
      </g>
      <circle cx="22" cy="27" r="4" fill="#fff" />
      <circle cx="32" cy="27" r="4" fill="#fff" />
      <circle cx="42" cy="27" r="4" fill="#fff" />
    </svg>
  );
}

function BarsGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <GoldGlyphDefs id="bars" />
      <g filter="url(#bars-shadow)">
        <rect x="13" y="34" width="11" height="20" rx="4" fill="url(#bars-fill)" />
        <rect x="27" y="22" width="11" height="32" rx="4" fill="url(#bars-fill)" />
        <rect x="41" y="9" width="11" height="45" rx="4" fill="url(#bars-fill)" />
      </g>
      <rect x="13" y="34" width="11" height="4" rx="2" fill="#fff" opacity="0.3" />
      <rect x="27" y="22" width="11" height="4" rx="2" fill="#fff" opacity="0.3" />
      <rect x="41" y="9" width="11" height="4" rx="2" fill="#fff" opacity="0.3" />
    </svg>
  );
}

function EnvelopeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <GoldGlyphDefs id="env" />
      <g filter="url(#env-shadow)">
        <rect x="7" y="14" width="50" height="38" rx="9" fill="url(#env-fill)" />
      </g>
      <path d="M7 18 L32 36 L57 18" fill="none" stroke="#a9772f" strokeOpacity="0.55" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="11" y="18" width="42" height="6" rx="3" fill="#fff" opacity="0.18" />
    </svg>
  );
}

function PeopleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <GoldGlyphDefs id="ppl" />
      <g filter="url(#ppl-shadow)">
        <path d="M4 54 Q4 34 21 34 Q38 34 38 54 Z" fill="url(#ppl-fill)" opacity="0.85" />
        <circle cx="21" cy="23" r="9" fill="url(#ppl-fill)" opacity="0.85" />
        <path d="M26 54 Q26 34 43 34 Q60 34 60 54 Z" fill="url(#ppl-fill)" opacity="0.85" />
        <circle cx="43" cy="23" r="9" fill="url(#ppl-fill)" opacity="0.85" />
        <path d="M14 56 Q14 30 32 30 Q50 30 50 56 Z" fill="url(#ppl-fill)" />
        <circle cx="32" cy="18" r="11" fill="url(#ppl-fill)" />
      </g>
      <rect x="22" y="11" width="20" height="5" rx="2.5" fill="#fff" opacity="0.25" />
    </svg>
  );
}

/* ─── a single orbiting badge or card ──────────────────────── */
/* Split across two nested motion elements so the one-shot "pop in"
   and the never-ending "float" run independently: the outer div
   positions the item on the circle and plays the finite pop-in,
   staggered by `index`; the inner div starts an infinite gentle
   up/down float as soon as it mounts (invisible until the outer
   pop-in reveals it, so the float feels seamless once revealed). */

function OrbitItemView({ item, index }: { item: OrbitItem; index: number }) {
  const isDesktop = useIsDesktop();
  const angle = !isDesktop && item.mobileAngle !== undefined ? item.mobileAngle : item.angle;
  const defaultRadius = item.kind === "badge" ? RING_RADIUS_PCT : CARD_RADIUS_PCT;
  const radius = !isDesktop && item.mobileRadius !== undefined ? item.mobileRadius : item.radius ?? defaultRadius;
  const position = orbitPosition(angle, radius);

  const popDelay = 0.9 + index * 0.12;
  const floatDuration = 7.5 + (index % 4) * 0.55;
  const floatDelay = -(index * 0.85);
  const floatStyle = {
    "--ymg-float-duration": `${floatDuration}s`,
    "--ymg-float-delay": `${floatDelay}s`,
    "--ymg-float-x": `${2 + (index % 3)}px`,
    "--ymg-float-y": `${5 + (index % 4)}px`,
  } as CSSProperties;

  return (
    <motion.div
      className={`absolute ymg-orbit-item-${item.kind}`}
      style={position}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: popDelay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="ymg-orbit-anchor">
        <div className="ymg-orbit-float" style={floatStyle}>
          <div className="ymg-orbit-item-content">
            {item.kind === "badge" && <Badge3D glyph={item.glyph} tone={item.tone} label={item.label} />}
            {item.kind === "caseGrowth" && <CaseGrowthCard />}
            {item.kind === "campaign" && <CampaignPerformanceCard />}
            {item.kind === "leads" && <LeadsOverviewCard />}
            {item.kind === "megaphone" && <MegaphoneCard />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── public component ─────────────────────────────────────── */
/* Drop into the hero's right-hand stage in place of (or alongside)
   other visuals. Renders a relative, square-aspect box that fills
   its parent — size it via the parent's width/max-width. */

export default function HeroOrbitAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`ymg-hero-orbit relative aspect-square w-full ${className}`}>
      <OrbitRings />
      <CenterIcon />
      {orbitItems.map((item, index) => (
        <OrbitItemView key={item.angle} item={item} index={index} />
      ))}
    </div>
  );
}
