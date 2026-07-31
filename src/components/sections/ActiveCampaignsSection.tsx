import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealCard from "@/components/ui/ScrollRevealCard";

const campaigns = [
  {
    title: "Mass Torts",
    description: "Acquire and scale high-volume cases with targeted digital campaigns.",
    icon: "/Wha-We-Serve/mass-torts.png",
    iconBackground: "bg-[#dce9ff]",
  },
  {
    title: "Personal Injury",
    description: "Drive qualified injury leads with consistent acquisition strategies.",
    icon: "/Wha-We-Serve/personal-injury.png",
    iconBackground: "bg-[#efd8ff]",
  },
  {
    title: "Talcum Powder",
    description: "Connect with affected audiences through focused case marketing.",
    icon: "/Wha-We-Serve/Talcum-Powder.png",
    iconBackground: "bg-[#fff1d8]",
  },
  {
    title: "Hair Relaxer",
    description: "Generate high-intent opportunities through data-led campaigns.",
    icon: "/Wha-We-Serve/Hair-Relaxer.png",
    iconBackground: "bg-[#d9fff3]",
  },
];

export default function ActiveCampaignsSection() {
  return (
    <section className="active-campaigns-section ymg-radial-wide ymg-section-padding relative isolate overflow-hidden bg-[#FFF5E0]">
      <Image
        src="/flowers/ppbg.svg"
        alt=""
        width={522}
        height={375}
        className="active-campaign-dark-flower pointer-events-none absolute -left-[34px] top-[12px] z-0 w-[310px] opacity-[0.62] sm:w-[360px] lg:w-[400px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-center text-[30px] font-semibold leading-tight text-[#3d4145] sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[52px]">
            Active Campaign&apos;s
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {campaigns.map((campaign, index) => (
            <ScrollRevealCard
              key={campaign.title}
              index={index}
              className="active-campaign-card flex min-h-[320px] flex-col rounded-[24px] border border-[#D8B26B] bg-white p-5 text-left shadow-[0_10px_24px_rgba(82,64,34,0.08)] sm:min-h-[340px] sm:p-6"
            >
              <div className={`flex h-[76px] w-[76px] items-center justify-center rounded-[8px] ${campaign.iconBackground}`}>
                <Image
                  src={campaign.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-[43px] w-[43px] object-contain"
                />
              </div>

              <h3 className="mt-6 text-[23px] font-medium leading-tight text-[#3d4145] sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px]">
                {campaign.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.5] text-[#8E8E8E] lg:text-[17px] 2xl:text-[18px]">
                {campaign.description}
              </p>
              <Link
                href="/practice-areas"
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-[#C99D4F] transition-colors hover:text-[#D8B26B] dark:text-[#D8B26B] lg:text-[15px] 2xl:text-[16px]"
              >
                Explore <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </ScrollRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
