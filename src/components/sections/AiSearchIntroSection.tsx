"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const lensX = [0, 116, 58, 0];
const lensY = [0, 22, 36, 0];
const animationTimes = [0, 0.34, 0.7, 1];

export default function AiSearchIntroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[64px] text-[#d9ae5d] sm:px-10 sm:py-[82px] lg:px-16 lg:py-[72px]">
      <Image
        src="/images/big_flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[7%] top-[10px] z-0 hidden w-[96px] opacity-[0.05] sm:block"
      />
      <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[16%] top-[34px] z-0 hidden w-[30px] opacity-[0.045] lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1040px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-[62px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 text-center lg:text-left"
        >
          <p className="text-[0.88rem] font-normal uppercase text-[#d9ae5d] sm:text-[1rem]">
            What Is AI Search Optimization?
          </p>
          <h2 className="mt-6 font-heading text-[2rem] font-bold leading-[1.4] text-[#d9ae5d] sm:text-[2.45rem] lg:text-[2.15rem]">
            The Next Generation of
            <span className="mt-1 block">Search is AI-Powered</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[0.8rem] leading-[1.45] text-[#d9ae5d] sm:text-[0.9rem] lg:mx-0 lg:text-[0.82rem]">
            AI Search Optimization (AIO) prepares your website for modern AI-driven
            search experiences. Beyond traditional SEO, we optimize your website&apos;s
            structure, content, authority, and technical foundation so AI platforms can
            confidently surface your firm as the trusted answer. As more users rely on AI
            assistants to find legal services, your online presence needs to be built for
            both search engines and AI recommendation systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[330px] w-full max-w-[440px] sm:h-[370px]"
        >
          <Image
            src="/laptop.svg"
            alt="Laptop displaying an AI legal search recommendation"
            width={621}
            height={588}
            priority
            className="absolute left-1/2 top-[-24px] z-10 h-auto w-[360px] -translate-x-1/2 object-contain sm:top-[-48px] sm:w-[430px]"
          />

          <motion.div
            className="absolute left-[86px] top-[8px] z-30 h-[132px] w-[126px] sm:left-[86px] sm:top-0 sm:h-[147px] sm:w-[140px]"
            animate={reduceMotion ? undefined : { x: lensX, y: lensY }}
            transition={{ duration: 9, times: animationTimes, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute left-[18.5%] top-[1.5%] z-0 h-[75%] w-[76%] overflow-hidden rounded-full bg-[#171717]">
              <motion.div
                className="absolute left-[-197px] top-[-119px] h-[682px] w-[720px] sm:left-[-289px] sm:top-[-157px] sm:h-[814px] sm:w-[860px]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, -232, -116, 0],
                        y: [0, -44, -72, 0],
                      }
                }
                transition={{ duration: 9, times: animationTimes, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/laptop.svg"
                  alt=""
                  width={621}
                  height={588}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </div>
            <Image
              src="/glass.svg"
              alt="Animated magnifying glass"
              width={240}
              height={252}
              className="relative z-10 h-full w-full object-contain"
            />
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [7, 4, 7] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8px] top-[70px] z-20 h-[84px] w-[80px] sm:right-[-2px] sm:top-[58px] sm:h-[100px] sm:w-[96px]"
          >
            <Image
              src="/ailogo.svg"
              alt="AI recommendation"
              width={151}
              height={158}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
