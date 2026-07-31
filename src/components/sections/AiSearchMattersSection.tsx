"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Check, MessageCircle, Sparkles, X } from "lucide-react";

const questions = [
  "Best personal injury lawyer near me",
  "Who handles mass tort lawsuits?",
  "Which law firm specializes in truck accidents?",
  "Who is the best medical malpractice attorney?",
  "Which lawyer should I hire after a car accident?",
];

const chatRows = ["w-[54%]", "w-[78%]", "w-[48%]", "w-[76%]"];

export default function AiSearchMattersSection() {
  return (
    <section className="ymg-radial-deep relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-[64px] text-[#3d4145] sm:px-10 sm:py-[82px] lg:px-16 lg:py-[72px]">
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
        className="pointer-events-none absolute bottom-[30px] left-[1%] z-0 hidden w-[34px] opacity-[0.045] lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1040px] items-center gap-14 lg:grid-cols-[410px_minmax(0,1fr)] lg:gap-[72px]">
        <motion.div
          initial={{ opacity: 0, x: -42, y: 16, scale: 0.97, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[360px] w-full max-w-[410px]"
        >
          <div className="absolute left-[17%] top-0 z-20 flex h-[48px] w-[68%] items-center rounded-[11px] border border-[#d9ae5d] bg-[#fffaf0] px-5 shadow-[0_8px_18px_rgba(91,69,34,0.1)] dark:bg-[#1F1F1F] dark:border-[#D8B26B] dark:shadow-none">
            <span className="min-w-0 flex-1 text-[0.82rem] text-[#8a8985] dark:text-[#8E8E8E]">Ask AI anything...</span>
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#444] text-white dark:bg-[#404040]">
              <ArrowUpRight className="h-[15px] w-[15px]" strokeWidth={1.8} />
            </span>
          </div>

          <span className="absolute left-[22%] top-[48px] z-0 h-[72px] border-l border-dashed border-[#d9ae5d]/65" />
          <span className="absolute right-[22%] top-[48px] z-0 h-[72px] border-l border-dashed border-[#d9ae5d]/65" />

          <div className="absolute bottom-0 left-[17%] z-10 h-[240px] w-[68%] rounded-[12px] border border-[#d9ae5d] bg-[#fff9ed] px-3 py-4 shadow-[0_10px_22px_rgba(91,69,34,0.08)] dark:bg-[#1F1F1F] dark:border-[#D8B26B] dark:shadow-none">
            <X className="absolute right-6 top-6 h-[14px] w-[14px] text-[#d9cda8] dark:text-[#D8B26B]" strokeWidth={2} />
            <div className="space-y-[13px] pr-2">
              {chatRows.map((width, index) => (
                <motion.div
                  key={width}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.12 + index * 0.13 }}
                  className="grid grid-cols-[25px_minmax(0,1fr)] items-center gap-2"
                >
                  <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#e8dab6] text-white dark:border dark:border-[#D8B26B] dark:bg-transparent dark:text-[#D8B26B]">
                    <MessageCircle className="h-[13px] w-[13px]" strokeWidth={1.6} />
                  </span>
                  <span className="rounded-[8px] border border-[#d9ae5d] bg-[#fffaf0] px-3 py-2.5 dark:bg-[#1F1F1F] dark:border-[#D8B26B]">
                    <span className={`block h-[5px] rounded-full bg-[#ded7c7] dark:bg-[#555555] ${width}`} />
                    {index % 2 === 1 && (
                      <span className="mt-2 block h-[5px] w-[86%] rounded-full bg-[#e7dfce] dark:bg-[#666666]" />
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <span className="absolute left-[56px] top-[172px] z-0 h-px w-[calc(17%_-_56px)] border-t border-dashed border-[#d9ae5d]/65" />
          <span className="absolute left-[56px] top-[250px] z-0 h-px w-[calc(17%_-_56px)] border-t border-dashed border-[#d9ae5d]/65" />
          <span className="absolute right-[48px] top-[196px] z-0 h-px w-[calc(17%_-_48px)] border-t border-dashed border-[#d9ae5d]/65" />

          <Image
            src="/flowers/vcardBG.svg"
            alt=""
            width={520}
            height={520}
            className="pointer-events-none absolute bottom-[-74px] left-[-92px] z-0 w-[190px] rotate-[28deg]"
          />

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-8px] top-[140px] z-10 flex h-[64px] w-[64px] items-center justify-center rounded-[12px] border border-[#d9ae5d] bg-[#fffaf0] shadow-[0_8px_18px_rgba(91,69,34,0.1)] dark:bg-[#1F1F1F] dark:border-[#D8B26B] dark:shadow-none"
          >
            <Bot className="h-[31px] w-[31px] text-[#111] dark:text-[#D8B26B]" strokeWidth={1.7} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[78px] left-[-8px] z-10 flex h-[64px] w-[64px] items-center justify-center rounded-[12px] border border-[#d9ae5d] bg-[#fffaf0] shadow-[0_8px_18px_rgba(91,69,34,0.1)] dark:bg-[#1F1F1F] dark:border-[#D8B26B] dark:shadow-none"
          >
            <Sparkles className="h-[32px] w-[32px] text-[#7b6cff]" fill="#53d7d0" strokeWidth={1.3} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-16px] top-[164px] z-10 flex h-[64px] w-[64px] items-center justify-center rounded-[12px] border border-[#d9ae5d] bg-[#fffaf0] shadow-[0_8px_18px_rgba(91,69,34,0.1)] dark:bg-[#1F1F1F] dark:border-[#D8B26B] dark:shadow-none"
          >
            <span className="relative h-[32px] w-[32px] rotate-12">
              <span className="absolute left-0 top-0 h-[18px] w-[18px] rounded-[6px] bg-[#287be8]" />
              <span className="absolute right-0 top-0 h-[18px] w-[18px] rounded-[6px] bg-[#8f5de7]" />
              <span className="absolute bottom-0 left-0 h-[18px] w-[18px] rounded-[6px] bg-[#32c9a5]" />
              <span className="absolute bottom-0 right-0 h-[18px] w-[18px] rounded-[6px] bg-[#ef5d77]" />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 text-center lg:text-left"
        >
          <p className="text-[0.9rem] font-normal uppercase text-[#3d4145] sm:text-[1rem]">
            Why AI Search Matters
          </p>
          <h2 className="mt-6 font-heading text-[2rem] font-bold leading-[1.35] text-[#3d4145] sm:text-[2.45rem] lg:text-[2.15rem]">
            AI-Powered Search is Changing
            <span className="mt-1 block">How Clients Find Attorneys.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[0.82rem] leading-[1.45] text-[#55585a] sm:text-[0.92rem] lg:mx-0 lg:text-[0.84rem]">
            Millions of potential clients are now asking AI assistants for legal advice
            instead of browsing traditional search results.
          </p>
          <p className="mt-5 text-[0.86rem] font-semibold text-[#3d4145] sm:text-[0.94rem]">
            People ask questions like
          </p>

          <div className="mx-auto mt-4 max-w-[560px] space-y-2 text-left lg:mx-0">
            {questions.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex items-start gap-2 text-[0.8rem] leading-[1.35] text-[#55585a] sm:text-[0.88rem]"
              >
                <Check className="mt-0.5 h-[14px] w-[14px] shrink-0 text-[#d9ae5d]" strokeWidth={1.8} />
                {question}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
