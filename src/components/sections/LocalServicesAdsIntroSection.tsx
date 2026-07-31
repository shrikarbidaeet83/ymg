"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocalServicesAdsIntroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[68px]">
      <Image
        src="/images/big_flowers.webp"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[4%] top-[-10px] z-0 hidden w-[98px] opacity-[0.05] sm:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[16%] top-[38px] z-0 hidden w-[30px] opacity-[0.055] lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1040px] items-center gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-[58px]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 text-center lg:text-left"
        >
          <p className="text-[0.88rem] font-normal uppercase text-[#d9ae5d] sm:text-[1rem]">
            What Are Local Services Ads?
          </p>
          <h2 className="mt-5 font-heading text-[2rem] font-bold leading-[1.35] text-[#d9ae5d] sm:text-[2.45rem] lg:text-[2.15rem]">
            Connect with High-Intent
            <span className="mt-1 block">Clients Ready to Hire</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[0.8rem] leading-[1.42] text-[#d9ae5d] sm:text-[0.9rem] lg:mx-0 lg:text-[0.82rem]">
            Local Services Ads (LSAs) place your law firm above traditional search
            ads and organic listings, giving your firm premium visibility when
            potential clients are searching for legal help. Unlike traditional PPC
            campaigns, you only pay for qualified leads, making LSAs one of the most
            cost-effective ways to generate new legal cases.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, y: 18, scale: 0.94, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[300px] w-full max-w-[560px] sm:h-[350px] lg:h-[330px]"
        >
          <motion.div
            initial={{ opacity: 0, x: 42, y: 26, rotate: 10, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-[-18px] top-[-34px] z-10 w-[355px] sm:right-[-8px] sm:top-[-58px] sm:w-[440px] lg:right-[-18px] lg:top-[-50px] lg:w-[430px]"
          >
            <Image
              src="/Mac-Book-Air-15.svg"
              alt="Google Local Services Ads on a laptop"
              width={641}
              height={562}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -34, y: 22, rotate: -6, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[4px] top-[72px] z-20 w-[150px] sm:left-[-2px] sm:top-[74px] sm:w-[184px] lg:left-[6px] lg:top-[72px] lg:w-[178px]"
          >
            <Image
              src="/ads-card.svg"
              alt="Local Services Ads benefits"
              width={237}
              height={239}
              className="h-auto w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.2)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
