import Image from "next/image";
import {
  BarChart3,
  CalendarDays,
  CircleDollarSign,
  Crosshair,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";

const missionBullets = [
  { icon: CircleDollarSign, label: "Performance-based pricing" },
  { icon: UserRound, label: "Expert intake & qualification" },
  { icon: CalendarDays, label: "AI-powered call & booking" },
  { icon: ShieldCheck, label: "Compliant & ethical marketing" },
];

const stats = [
  { icon: Target, value: "+42%", label: "Conversion Rate", sub: "Industry Average" },
  { icon: Crosshair, value: "+42%", label: "Qualified Leads", sub: "vs last quarter" },
  { icon: BarChart3, value: "$2.3M+", label: "Case Value Generated", sub: "vs last quarter" },
];

export default function GrowthPartnerSection({
  variant = "dark",
  backgroundColor,
  goldText = false,
  whiteCards = false,
}: {
  variant?: "dark" | "light";
  backgroundColor?: string;
  goldText?: boolean;
  whiteCards?: boolean;
}) {
  const isLight = variant === "light";
  const useGoldText = !isLight || goldText;

  return (
    <section
      id="growth-partner"
      style={backgroundColor ? { backgroundColor } : undefined}
      className={`ymg-section-padding relative isolate overflow-hidden ${
        isLight ? "bg-[#FFF5E0] text-[#3d4145]" : "bg-[#404040] text-[#d9ae5d]"
      }`}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_345px] lg:gap-16">
        <div className="max-w-[540px] text-left">
          <p className={`text-[0.95rem] font-normal sm:text-[1.05rem] ${useGoldText ? "text-[#EBC982]" : "text-[#3d4145]"}`}>
            About YMG - Legal
          </p>

          <h2 className={`ymg-practice-hero-title mt-4 text-[clamp(2.25rem,5vw,2.85rem)] font-normal leading-[1.16] tracking-[-0.02em] ${useGoldText ? "text-[#EBC982]" : "text-[#3d4145]"}`}>
            Your Growth Partner
            <span className="block">in Legal Success</span>
          </h2>

          <p className={`mt-4 max-w-[520px] text-[0.92rem] leading-[1.42] sm:text-[1rem] ${useGoldText ? "text-[#d9ae5d]" : "text-[#55585a]"}`}>
            We are full-service legal marketing and intake company specializing
            in mass torts and personal injury. Our performance driven approach
            ensures you pay for results, not promises.
          </p>

          <ul className="mt-6 space-y-3.5">
            {missionBullets.map(({ icon: Icon, label }) => (
              <li key={label} className={`flex items-center gap-3 text-[0.92rem] sm:text-[1rem] ${useGoldText ? "text-[#d9ae5d]" : "text-[#8a8c8e]"}`}>
                <Icon size={17} strokeWidth={1.45} className="shrink-0" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:justify-self-end">
          <div className={`relative min-h-[228px] rounded-[5px] border px-7 py-5 ${isLight ? `border-[#D8B26B] ${whiteCards ? "bg-white" : "bg-[#FFF5E0]"} shadow-[3px_4px_8px_rgba(86,65,31,0.08)]` : "border-[#d9ae5d] bg-[#404040]/65"}`}>
            <Image
              src="/goal-vec.svg"
              alt=""
              width={90}
              height={90}
              className="absolute right-5 top-3 h-[72px] w-[72px] object-contain"
            />
            <h3 className={`pr-20 text-[1.85rem] font-normal leading-tight ${whiteCards ? "text-[#404040]" : isLight ? "text-[#3d4145]" : "text-[#EBC982]"}`}>
              Our Mission
            </h3>
            <div className={`mt-5 h-px w-[166px] ${isLight ? "bg-[#D8B26B]" : "bg-[#d9ae5d]"}`} />
            <p className={`mt-7 max-w-[285px] text-[1.35rem] leading-[1.48] sm:text-[1.45rem] ${whiteCards ? "text-[#404040]" : isLight ? "text-[#8a8c8e]" : "text-[#d9ae5d]"}`}>
              To help law firms grow with a predictable pipeline of qualified cases.
            </p>
          </div>

          <div className={`mt-4 rounded-[5px] border px-5 py-4 ${isLight ? `border-[#D8B26B] ${whiteCards ? "bg-white" : "bg-[#FFF5E0]"} shadow-[3px_4px_8px_rgba(86,65,31,0.08)]` : "border-[#d9ae5d] bg-[#404040]/65"}`}>
            <div className="space-y-3">
              {stats.map(({ icon: Icon, value, label, sub }) => (
                <div key={label} className={`grid grid-cols-[32px_90px_1fr] items-center gap-3 ${whiteCards ? "text-[#404040]" : isLight ? "text-[#8a8c8e]" : "text-[#d9ae5d]"}`}>
                  <Icon size={27} strokeWidth={1.45} className={isLight ? "text-[#D8B26B]" : ""} />
                  <p className="text-[1.35rem] font-bold leading-none">{value}</p>
                  <p className="text-[0.68rem] leading-[1.12]">
                    {label}
                    <span className="block">{sub}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
