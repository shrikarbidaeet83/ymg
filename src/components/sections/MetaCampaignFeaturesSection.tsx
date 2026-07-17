"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChartNoAxesColumnIncreasing,
  Crosshair,
  LayoutTemplate,
  MapPin,
  RefreshCw,
  SplitSquareHorizontal,
  UserRoundPlus,
  Workflow,
  type LucideIcon,
} from "lucide-react";

function FacebookGlyph({ className }: { className?: string; strokeWidth?: number }) {
  return <span className={`font-sans text-[1.55rem] font-semibold leading-none ${className ?? ""}`}>f</span>;
}

function InstagramGlyph({ className }: { className?: string; strokeWidth?: number }) {
  return <span className={`font-sans text-[1.1rem] font-bold leading-none ${className ?? ""}`}>◎</span>;
}

function PanelsTopLeftIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return <LayoutTemplate className={className} strokeWidth={strokeWidth} />;
}

const campaignFeatures = [
  { label: "Facebook\nAdvertising", Icon: FacebookGlyph, bg: "bg-[#e1ecff]", color: "text-[#4267b2]" },
  { label: "Instagram\nAdvertising", Icon: InstagramGlyph, bg: "bg-[#ffe2ef]", color: "text-[#b54a7c]" },
  { label: "Local Audience\nTargeting", Icon: MapPin, bg: "bg-[#e3f5e8]", color: "text-[#5f8b67]" },
  { label: "Lead Generation\nCampaigns", Icon: UserRoundPlus, bg: "bg-[#f4e6ff]", color: "text-[#7a5b92]" },
  { label: "Performance\nReporting", Icon: ChartNoAxesColumnIncreasing, bg: "bg-[#fff1c7]", color: "text-[#b88927]" },
  { label: "Retargeting\nCampaigns", Icon: RefreshCw, bg: "bg-[#e2f5ef]", color: "text-[#4f8675]" },
  { label: "Video &\nCarousel Ads", Icon: PanelsTopLeftIcon, bg: "bg-[#f5e6dd]", color: "text-[#9b6a55]" },
  { label: "A/B Creative\nTesting", Icon: SplitSquareHorizontal, bg: "bg-[#edf0f4]", color: "text-[#65717e]" },
  { label: "Conversion\nTracking", Icon: Crosshair, bg: "bg-[#eee8f4]", color: "text-[#735d86]" },
  { label: "Continuous\nOptimization", Icon: Workflow, bg: "bg-[#e6efe7]", color: "text-[#5f7f62]" },
];

function CampaignFeature({ feature, index }: { feature: (typeof campaignFeatures)[number]; index: number }) {
  const reduceMotion = useReducedMotion();
  const Icon = feature.Icon as LucideIcon;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96, filter: "blur(9px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.58, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-h-[132px] w-[185px] shrink-0 snap-center flex-col items-center justify-center px-4 text-center sm:w-auto"
    >
      <div className={`flex h-[48px] w-[48px] items-center justify-center rounded-[6px] border border-[#dfbd78]/45 ${feature.bg} shadow-[0_6px_14px_rgba(0,0,0,0.24)]`}>
        <Icon className={`h-[23px] w-[23px] ${feature.color}`} strokeWidth={1.7} />
      </div>
      <p className="mt-5 whitespace-pre-line text-[0.9rem] font-bold leading-[1.18] text-[#d9ae5d]">
        {feature.label}
      </p>
      {index % 5 !== 4 && (
        <span className="absolute right-0 top-1/2 hidden h-[76px] w-px -translate-y-1/2 bg-white/18 lg:block" />
      )}
    </motion.article>
  );
}

export default function MetaCampaignFeaturesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-16 text-[#d9ae5d] sm:px-10 sm:py-20 lg:px-16 lg:pb-[88px] lg:pt-[72px]">
      <Image src="/images/big_flowers.png" alt="" width={190} height={190} className="pointer-events-none absolute right-[7%] top-[-14px] z-0 h-auto w-[116px] opacity-[0.055]" />
      <Image src="/images/small_flowers.png" alt="" width={125} height={125} className="pointer-events-none absolute right-[3%] top-[26px] z-0 h-auto w-[36px] opacity-[0.055]" />
      <Image src="/images/small_flowers.png" alt="" width={125} height={125} className="pointer-events-none absolute right-[14%] top-[90px] z-0 h-auto w-[48px] opacity-[0.055]" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[2.25rem] font-bold leading-tight text-[#d9ae5d] sm:text-[2.75rem] lg:text-[2.65rem]"
        >
          Campaign Features
        </motion.h2>

        <div className="mt-16 -mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:mx-0 lg:mt-[96px] lg:grid lg:grid-cols-5 lg:gap-x-0 lg:gap-y-[72px] lg:overflow-visible lg:px-0 lg:pb-0">
          {campaignFeatures.map((feature, index) => (
            <CampaignFeature key={feature.label} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-[34px] hidden h-px w-[96%] origin-left bg-white/18 lg:block"
        />
      </div>
    </section>
  );
}
