import { Check } from "lucide-react";

/* The hero's key points, set as a quiet row of green ticks under the calls to action. */
export default function HeroPoints({ points }: { points: string[] }) {
  return (
    <ul className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-3 text-[1.05rem] font-semibold text-[#F5F1E8]"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E9E6A] text-white">
            <Check size={14} strokeWidth={3} aria-hidden="true" />
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}
