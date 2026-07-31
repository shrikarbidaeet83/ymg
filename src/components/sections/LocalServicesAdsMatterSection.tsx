"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const searches = [
  "Personal Injury Lawyer Near Me",
  "Car Accident Attorney",
  "Truck Accident Lawyer",
  "Slip & Fall Attorney",
  "Medical Malpractice Lawyer",
  "Wrongful Death Attorney",
];

export default function LocalServicesAdsMatterSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-[62px] text-[#3d4145] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[68px]">
      <Image
        src="/images/big_flowers.webp"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute bottom-[-42px] left-[5%] z-0 hidden w-[120px] opacity-[0.045] sm:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute bottom-[34px] left-[2%] z-0 hidden w-[34px] opacity-[0.045] lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1040px] items-center gap-12 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-[70px]">
        <motion.div
          initial={{ opacity: 0, x: -36, y: 18, scale: 0.94, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[270px] w-full max-w-[430px] sm:h-[310px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 38, scale: 0.84, rotate: -8, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[-8px] top-[0px] z-10 w-[390px] sm:left-[-22px] sm:top-[-8px] sm:w-[470px]"
          >
            <Image
              src="/ads-2nd-thumb.svg"
              alt="Local Services Ads dashboard card"
              width={527}
              height={301}
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, y: 14, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 text-center lg:text-left"
        >
          <p className="text-[0.88rem] font-normal uppercase text-[#3d4145] sm:text-[1rem]">
            Why Local Services Ads Matter
          </p>
          <h2 className="mt-5 font-heading text-[2rem] font-bold leading-[1.35] text-[#3d4145] sm:text-[2.45rem] lg:text-[2.12rem]">
            Reach Clients at the Exact
            <span className="mt-1 block">Moment They Need an Attorney</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[0.8rem] leading-[1.42] text-[#55585a] sm:text-[0.9rem] lg:mx-0 lg:text-[0.82rem]">
            Legal clients search for attorneys when they need immediate help. Local
            Services Ads position your firm in front of those prospects before they
            see traditional search results.
          </p>

          <div className="mx-auto mt-6 grid max-w-[560px] gap-6 text-left sm:grid-cols-[1.1fr_1fr] lg:mx-0">
            <div>
              <p className="text-[0.78rem] font-semibold text-[#3d4145]">Common searches include</p>
              <div className="mt-3 space-y-1.5">
                {searches.map((search, index) => (
                  <motion.div
                    key={search}
                    initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.22 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2 text-[0.72rem] leading-tight text-[#55585a] sm:text-[0.78rem]"
                  >
                    <Check className="h-[12px] w-[12px] shrink-0 text-[#d9ae5d]" strokeWidth={1.8} />
                    {search}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.72, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.78rem] font-semibold leading-[1.45] text-[#3d4145] sm:pt-7"
            >
              With Google Screened verification and premium placement, your law firm
              earns trust before the first conversation even begins.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
