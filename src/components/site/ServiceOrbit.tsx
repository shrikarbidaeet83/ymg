import type { LucideIcon } from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";

const tones: GlassTone[] = [
  "teal",
  "blue",
  "violet",
  "rose",
  "green",
  "amber",
  "indigo",
  "gold",
];
const toneAt = (i: number) => tones[i % tones.length];

const heroTrust = [
  { value: "15+ years", label: "in legal marketing" },
  { value: "24/7", label: "live intake available" },
  { value: "Compliance-first", label: "consent and TCPA aware" },
];

/* The trust row under a service hero. */
export function HeroTrust() {
  return (
    <ul
      data-reveal-group
      className="mt-14 grid gap-5 border-t border-[#F5F1E8]/12 pt-8 sm:grid-cols-3 lg:mt-20"
    >
      {heroTrust.map(({ value, label }) => (
        <li
          key={value}
          className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
        >
          <span className="ymg-num whitespace-nowrap text-[1.5rem] leading-none text-[#F5F1E8]">
            {value}
          </span>
          <span className="text-[0.92rem] text-[#B9B2A3]">{label}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Hero visual: the capabilities orbit the service, each one a glass icon ─── */

const BOX = 440;
const HUB = BOX / 2;

export default function ServiceOrbit({
  label,
  cards,
}: {
  label: string;
  cards: { title: string; Icon: LucideIcon }[];
}) {
  const [accent, ...rest] = label.split("\n");
  const radius = 162;
  const start = cards.length === 4 ? -45 : -90;
  const nodes = cards.map((_, i) => {
    const a = ((start + (360 / cards.length) * i) * Math.PI) / 180;
    return { x: HUB + radius * Math.cos(a), y: HUB + radius * Math.sin(a) };
  });

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[460px]"
      role="img"
      aria-label={`${label.replace("\n", " ")}: ${cards.map((c) => c.title).join(", ")}`}
    >
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${BOX} ${BOX}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <circle cx={HUB} cy={HUB} r={radius} stroke="rgba(245,241,232,0.12)" />
        <circle
          cx={HUB}
          cy={HUB}
          r={radius - 58}
          stroke="rgba(214,178,99,0.18)"
          strokeDasharray="2 7"
        />
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={HUB}
            y1={HUB}
            x2={n.x}
            y2={n.y}
            stroke="rgba(214,178,99,0.22)"
          />
        ))}
        {/* A brass spark travels the outer ring */}
        <g
          className="origin-center animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
          style={{ transformOrigin: `${HUB}px ${HUB}px` }}
        >
          <circle cx={HUB} cy={HUB - radius} r="3.5" fill="#D6B263" />
          <circle
            cx={HUB}
            cy={HUB - radius}
            r="9"
            fill="#D6B263"
            opacity="0.18"
          />
        </g>
      </svg>

      {/* The hub */}
      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6B263]/50 bg-[radial-gradient(circle_at_35%_30%,#17402F,#0B231D_70%)] shadow-[0_0_0_10px_rgba(214,178,99,0.06),0_30px_60px_rgba(0,0,0,0.35)]">
        <span className="block ymg-num px-3 text-center text-[clamp(1rem,2.4vw,1.35rem)] leading-[1.15] text-[#F5F1E8]">
          <span className="text-[#D6B263]">{accent}</span>
          {rest.length > 0 && (
            <>
              <br />
              {rest.join(" ")}
            </>
          )}
        </span>
      </div>

      {cards.map(({ title, Icon }, i) => (
        <div
          key={title}
          className="absolute flex w-[104px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center sm:w-[124px]"
          style={{
            left: `${(nodes[i].x / BOX) * 100}%`,
            top: `${(nodes[i].y / BOX) * 100}%`,
          }}
        >
          <GlassIcon tone={toneAt(i)} size="md" surface="dark">
            <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
          </GlassIcon>
          <span className="text-[0.78rem] font-medium leading-tight text-[#F5F1E8]/85 sm:text-[0.82rem]">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
