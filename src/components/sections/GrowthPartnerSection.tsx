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
  { icon: CircleDollarSign, label: "Firm-defined case criteria" },
  { icon: UserRound, label: "Structured intake and qualification" },
  { icon: CalendarDays, label: "Connected workflows and reporting" },
  { icon: ShieldCheck, label: "Consent-aware marketing practices" },
];

const stats = [
  { icon: Target, value: "Custom", label: "Firm-Defined", sub: "Case Criteria" },
  { icon: Crosshair, value: "Clear", label: "Qualification", sub: "Workflows" },
  { icon: BarChart3, value: "Better", label: "Reporting", sub: "Visibility" },
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
      className={`ymg-growth-partner-section ymg-radial-deep ymg-section-padding relative isolate overflow-hidden ${
        isLight ? "bg-[#FFF5E0] text-[#3d4145]" : "bg-[#404040] text-[#d9ae5d]"
      }`}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_345px] lg:gap-16">
        <div className="max-w-[540px] text-left max-[1023px]:mx-auto max-[1023px]:text-center">
          <p className={`text-[14px] font-normal lg:text-[15px] 2xl:text-[16px] ${useGoldText ? "text-[#EBC982]" : "text-[#3d4145]"}`}>
            About YMG - Legal
          </p>

          <h2 className={`ymg-practice-hero-title mt-4 text-[30px] font-normal leading-[1.16] tracking-[-0.02em] sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[52px] ${useGoldText ? "text-[#EBC982]" : "text-[#3d4145]"}`}>
            <span className="block whitespace-nowrap">Your Growth Partner</span>
            <span className="block whitespace-nowrap">in Legal Success</span>
          </h2>

          <p className={`mt-4 max-w-[560px] text-[16px] leading-[1.5] lg:text-[17px] 2xl:text-[18px] ${useGoldText ? "text-[#d9ae5d]" : "text-[#55585a]"}`}>
            We combine legal marketing, case acquisition, intake, and law firm support
            into connected workflows built around your firm&apos;s growth objectives.
          </p>

          <ul className="mt-6 space-y-3.5 max-[1023px]:mx-auto max-[1023px]:w-fit max-[1023px]:text-left">
            {missionBullets.map(({ icon: Icon, label }) => (
              <li key={label} className={`grid grid-cols-[18px_1fr] items-center gap-3 text-[16px] lg:text-[17px] 2xl:text-[18px] ${useGoldText ? "text-[#d9ae5d]" : "text-[#8a8c8e]"}`}>
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
            <h3 className={`pr-20 text-[23px] font-normal leading-tight sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px] ${whiteCards ? "text-[#404040]" : isLight ? "text-[#3d4145]" : "text-[#EBC982]"}`}>
              Our Mission
            </h3>
            <div className={`mt-5 h-px w-[166px] ${isLight ? "bg-[#D8B26B]" : "bg-[#d9ae5d]"}`} />
            <p className={`mt-7 max-w-[320px] text-[19px] leading-[1.48] sm:text-[21px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] ${whiteCards ? "text-[#404040]" : isLight ? "text-[#8a8c8e]" : "text-[#d9ae5d]"}`}>
              To help law firms connect acquisition, intake, and support into a stronger growth process.
            </p>
          </div>

          <div className={`mt-4 rounded-[5px] border px-5 py-4 ${isLight ? `border-[#D8B26B] ${whiteCards ? "bg-white" : "bg-[#FFF5E0]"} shadow-[3px_4px_8px_rgba(86,65,31,0.08)]` : "border-[#d9ae5d] bg-[#404040]/65"}`}>
            <div className="space-y-3">
              {stats.map(({ icon: Icon, value, label, sub }) => (
                <div key={label} className={`grid grid-cols-[32px_90px_1fr] items-center gap-3 ${whiteCards ? "text-[#404040]" : isLight ? "text-[#8a8c8e]" : "text-[#d9ae5d]"}`}>
                  <Icon size={27} strokeWidth={1.45} className={isLight ? "text-[#D8B26B]" : ""} />
                  <p className="text-[19px] font-bold leading-none sm:text-[21px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">{value}</p>
                  <p className="text-[13px] leading-[1.2] sm:text-[14px] lg:text-[15px] 2xl:text-[16px]">
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
