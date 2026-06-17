import Image from "next/image";
import { Check } from "lucide-react";

const missionBullets = [
  "Performance-based pricing",
  "Expert intake & qualification",
  "AI-powered call & booking",
  "Compliant & ethical marketing",
];

const stats = [
  { value: "+42%", label: "Conversion Rate", sub: "Industry Average" },
  { value: "+42%", label: "Qualified Leads", sub: "vs last quarter" },
  { value: "$2.3M+", label: "Case Value Generated", sub: "vs last quarter" },
];

export default function GrowthPartnerSection() {
  return (
    <section className="ymg-about relative isolate overflow-hidden bg-[#404040] py-10 text-white sm:py-14 lg:py-20">
      <div className="ymg-about-inner relative z-10 mx-auto px-5 sm:px-8 lg:px-12" style={{ maxWidth: "1440px" }}>
        <div className="ymg-about-grid grid items-center gap-9 lg:grid-cols-[1fr_minmax(430px,520px)] lg:gap-14">
          <div className="ymg-about-copy order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d8ae63]">
              About YMG - Legal
            </p>

            <h2 className="text-[clamp(1.85rem,5vw,3.2rem)] font-semibold leading-[1.08] text-[#d8ae63]">
              Your Growth Partner
              <span className="mt-[0.1em] block">in Legal Success</span>
            </h2>

            <p className="ymg-about-text mx-auto mt-5 max-w-[500px] text-[0.88rem] leading-[1.75] text-[#efd99f] lg:mx-0">
              We are full-service legal marketing and intake company specializing
              in mass torts and personal injury. Our performance driven approach
              ensures you pay for results, not promises.
            </p>

            <ul className="ymg-about-list mx-auto mt-7 max-w-[340px] space-y-3 text-left lg:mx-0">
              {missionBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-[0.85rem] font-medium text-[#efd99f]"
                >
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#d8ae63]/55 text-[#d8ae63]">
                    <Check size={8} strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="ymg-about-card-wrap order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="ymg-about-card-cluster relative w-full max-w-[520px] pb-0 lg:pb-16">
              <div className="ymg-mission-card relative min-h-[214px] w-full rounded-[8px] bg-white px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:min-h-[240px] sm:px-9 sm:py-9 lg:min-h-[286px]">
                <Image
                  src="/images/mission-bullseye.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="pointer-events-none absolute right-7 top-7 h-16 w-16 object-contain sm:right-8 sm:top-8 sm:h-20 sm:w-20"
                />
                <h3 className="mb-2.5 pr-20 text-[1.35rem] font-medium text-[#3a3d42] sm:pr-24 sm:text-[1.65rem]">
                  Our Mission
                </h3>
                <div className="mb-3 h-px w-32 bg-[#d8ae63]" />
                <p className="max-w-[330px] pt-5 text-[1.08rem] leading-[1.56] text-[#8a8c8e] sm:text-[1.24rem] lg:text-[1.4rem]">
                  To help law firms grow with a predictable pipeline of qualified
                  cases.
                </p>
              </div>

              <div className="ymg-about-stats mt-3 grid gap-2.5 sm:grid-cols-3 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[calc(100%-40px)] lg:-translate-x-1/2">
                {stats.map(({ value, label, sub }) => (
                  <div
                    key={label}
                    className="rounded-[6px] border border-[#eadfca] bg-white px-3 py-3 text-left shadow-[0_10px_26px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-[0.56rem] font-semibold leading-tight text-[#3a3d42] sm:text-[0.62rem]">
                      {label}
                    </p>
                    <p className="mt-1.5 text-[1.15rem] font-bold leading-none text-[#3a3d42] sm:text-[1.35rem]">
                      {value}
                    </p>
                    <p className="mt-1 text-[0.54rem] text-[#777] sm:text-[0.58rem]">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
