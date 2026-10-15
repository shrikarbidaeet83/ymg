import Image from "next/image";
import { BadgeDollarSign, MapPin, Network, ShieldCheck } from "lucide-react";

const proofItems = [
  { icon: ShieldCheck, label: "Firm-Defined", detail: "Case Criteria" },
  { icon: BadgeDollarSign, label: "Flexible", detail: "Delivery Models" },
  { icon: Network, label: "Connected", detail: "Workflows" },
  { icon: MapPin, label: "Las Vegas", detail: "Nevada" },
];

export function ServiceHeroFlowers() {
  return (
    <>
      <Image
        src="/flowers/vcardBG.svg"
        alt=""
        width={960}
        height={960}
        priority
        className="pointer-events-none absolute right-[-11%] top-[55%] z-0 w-[180px] -translate-y-1/2 sm:w-[240px] lg:right-[19%] lg:w-[280px]"
      />
      <Image
        src="/flowers/vcardBG.svg"
        alt=""
        width={960}
        height={960}
        priority
        className="pointer-events-none absolute left-[2%] top-[64%] z-0 hidden w-[480px] -translate-y-1/2 translate-x-[10vw] rotate-[38deg] lg:block"
      />
    </>
  );
}

export function ServiceHeroProof() {
  return (
    <div className="relative z-10 mx-auto mt-12 w-full max-w-[880px] sm:mt-14">
      <MobileProofScroller />
      <div className="hidden lg:block">
        <ProofBar darkGold className="ymg-proof-bar" />
      </div>
    </div>
  );
}

export function ProofBar({ className = "", darkGold = false }: { className?: string; darkGold?: boolean }) {
  return (
    <div
      className={`grid overflow-hidden rounded-[6px] border border-[#e7d5ad] bg-white shadow-[0_10px_28px_rgba(73,59,33,0.16)] sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {proofItems.map(({ icon: Icon, label, detail }) => (
        <div
          key={label}
          className="flex min-h-[46px] items-center gap-4 border-[#e3d8be] px-6 py-4 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
        >
          <Icon size={31} strokeWidth={1.8} className={`shrink-0 text-[#3f4245] ${darkGold ? "dark:text-[#D8B26B]" : ""}`} />
          <div className={`text-sm font-semibold leading-tight text-[#4f5356] ${darkGold ? "dark:text-[#D8B26B]" : ""}`}>
            {label}
            <span className="block">{detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MobileProofScroller({ className = "" }: { className?: string }) {
  const marqueeItems = [...proofItems, ...proofItems];

  return (
    <div className={`relative z-30 w-full min-w-0 lg:hidden ${className}`}>
      <div className="overflow-hidden rounded-[6px] border border-[#e7d5ad] bg-white shadow-[0_10px_28px_rgba(73,59,33,0.16)] dark:border-[#D8B26B]/70 dark:bg-[#191917] dark:shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
        <div className="ymg-proof-marquee flex w-max">
        {marqueeItems.map(({ icon: Icon, label, detail }, index) => (
          <div
            key={`${label}-${index}`}
            aria-hidden={index >= proofItems.length}
            className="flex min-h-[54px] w-[calc((100vw-20px)/3)] max-w-[110px] shrink-0 items-center justify-center gap-1 border-r border-[#e3d8be] px-1 py-2 min-[360px]:gap-2 min-[360px]:px-2 sm:w-[225px] sm:max-w-none"
          >
            <Icon size={17} strokeWidth={1.8} className="shrink-0 text-[#3f4245] min-[360px]:size-[19px] dark:text-[#D8B26B]" />
            <div className="min-w-0 text-left text-[0.5rem] font-semibold leading-tight text-[#4f5356] min-[360px]:text-[0.58rem] dark:text-[#D8B26B]">
              {label}
              <span className="block">{detail}</span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
