import { BadgeDollarSign, MapPin, Network, ShieldCheck } from "lucide-react";

const proofItems = [
  { icon: ShieldCheck, label: "15+ Years", detail: "Experience" },
  { icon: BadgeDollarSign, label: "Millions in Case", detail: "Value Generated" },
  { icon: Network, label: "Trusted by", detail: "100+ Law Firms" },
  { icon: MapPin, label: "Las Vegas", detail: "Based" },
];

export function ProofBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid overflow-hidden rounded-[6px] border border-[#e7d5ad] bg-white shadow-[0_10px_28px_rgba(73,59,33,0.16)] sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {proofItems.map(({ icon: Icon, label, detail }) => (
        <div
          key={label}
          className="flex min-h-[46px] items-center gap-4 border-[#e3d8be] px-6 py-4 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
        >
          <Icon size={31} strokeWidth={1.8} className="shrink-0 text-[#3f4245]" />
          <div className="text-sm font-semibold leading-tight text-[#4f5356]">
            {label}
            <span className="block">{detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MobileProofScroller({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-30 w-full min-w-0 lg:hidden ${className}`}>
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto rounded-[6px] border border-[#e7d5ad] bg-white shadow-[0_10px_28px_rgba(73,59,33,0.16)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {proofItems.map(({ icon: Icon, label, detail }) => (
          <div
            key={label}
            className="flex min-h-[54px] w-1/3 min-w-0 shrink-0 snap-start items-center justify-center gap-1 border-r border-[#e3d8be] px-1 py-2 last:border-r-0 min-[360px]:gap-2 min-[360px]:px-2 sm:w-1/4"
          >
            <Icon size={17} strokeWidth={1.8} className="shrink-0 text-[#3f4245] min-[360px]:size-[19px]" />
            <div className="min-w-0 text-left text-[0.5rem] font-semibold leading-tight text-[#4f5356] min-[360px]:text-[0.58rem]">
              {label}
              <span className="block">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
