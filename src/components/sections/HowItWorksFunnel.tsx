"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3,
  Bell,
  CheckCircle2,
  Clock3,
  Crosshair,
  FileCheck2,
  Headphones,
  MapPin,
  Scale,
  ShieldCheck,
  UsersRound,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type FunnelFeature = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

type FunnelDataset = {
  leadType: string;
  location: string;
  tags: [string, string, string];
  status: string;
  time: string;
  stackTitle: string;
  stack: [string, string, string, string];
  features: FunnelFeature[];
  eyebrow: string;
  title: string;
  description: string;
};

// One dataset per practice category (campaigns like hair relaxer sit inside Mass Tort).
const funnelDatasets: FunnelDataset[] = [
  {
    leadType: "Motor Vehicle Accident",
    location: "Los Angeles, CA",
    tags: ["High Intent", "Qualified", "Live Call"],
    status: "Lead revived",
    time: "2 min ago",
    stackTitle: "The Conversion Journey",
    stack: ["Leads", "Qualification", "Intake", "Signed Cases"],
    features: [
      { Icon: Crosshair, title: "High-Intent Leads", body: "We focus on quality over quantity." },
      { Icon: Clock3, title: "24/7 Coverage", body: "Never miss a lead. We're always on." },
      { Icon: ShieldCheck, title: "Case-Fit Screening", body: "Every prospect is checked before handoff." },
      { Icon: BarChart3, title: "More Signed Cases", body: "Our process is built to maximize results." },
    ],
    eyebrow: "Quality Prospects, Better Conversions.",
    title: "Personal Injury Leads",
    description: "We connect law firms with high-intent leads actively seeking legal help, helping you increase qualified consultations and signed cases efficiently.",
  },
  {
    leadType: "Mass Tort Claim",
    location: "Houston, TX",
    tags: ["Case Matched", "Verified", "Warm Transfer"],
    status: "Claim qualified",
    time: "4 min ago",
    stackTitle: "The Claim Qualification Journey",
    stack: ["Claim Leads", "Eligibility", "Verification", "Retainers"],
    features: [
      { Icon: Scale, title: "Case-Matched Claims", body: "Campaign criteria guide every qualification." },
      { Icon: Clock3, title: "Rapid Response", body: "Prospects are contacted while intent is high." },
      { Icon: CheckCircle2, title: "Verified Details", body: "Exposure and eligibility details are confirmed." },
      { Icon: BarChart3, title: "Scalable Volume", body: "Qualified claims flow into your pipeline." },
    ],
    eyebrow: "Qualified Claims, Predictable Growth.",
    title: "Mass Tort Acquisition",
    description: "Targeted campaigns and structured screening deliver qualified mass tort prospects that match your firm’s active case criteria.",
  },
];

const stackIcons = [UsersRound, ShieldCheck, Headphones, FileCheck2];
const stackWidths = ["86%", "76%", "66%", "56%"];
const swapTransition = { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const };
const flipTransition = { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const };

export default function HowItWorksFunnel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stackIndex, setStackIndex] = useState(0);
  const [connected, setConnected] = useState(false);
  const [showStackCards, setShowStackCards] = useState(false);
  const [started, setStarted] = useState(false);
  const reduceMotion = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const active = funnelDatasets[activeIndex];
  const stackActive = funnelDatasets[stackIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (reduceMotion) {
      const reveal = setTimeout(() => {
        setConnected(true);
        setShowStackCards(true);
      }, 0);
      return () => clearTimeout(reveal);
    }

    timers.current.push(
      setTimeout(() => setConnected(true), 150),
      setTimeout(() => setShowStackCards(true), 520),
    );

    const cycle = window.setInterval(() => {
      setConnected(false);
      setShowStackCards(false);
      timers.current.push(
        setTimeout(() => {
          setActiveIndex((current) => (current + 1) % funnelDatasets.length);
          setStackIndex((current) => (current + 1) % funnelDatasets.length);
        }, 420),
        setTimeout(() => setConnected(true), 1900),
        setTimeout(() => setShowStackCards(true), 3600),
      );
    }, 8200);

    return () => {
      window.clearInterval(cycle);
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduceMotion, started]);

  return (
    <section ref={sectionRef} className="ymg-section-padding relative isolate overflow-hidden bg-[#404040] text-[#f2d086] dark:bg-[#191917]">
      <div aria-hidden="true" className="ymg-radial-classic pointer-events-none absolute left-1/2 top-1/2 z-0 h-[936px] w-[1536px] max-w-none -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 mx-auto grid max-w-[1088px] gap-10 lg:grid-cols-[318px_170px_1px_minmax(390px,1fr)] lg:gap-x-[54px]">
        <div className="relative order-2 mx-auto min-h-[720px] w-full max-w-[318px] lg:order-none lg:min-h-[670px]">
          <AnimatePresence initial={false}>
            {connected && (
              <motion.svg
                key={`connector-${activeIndex}`}
                viewBox="0 0 144 103"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute left-1/2 top-[212px] z-0 w-[168px] -translate-x-1/2 overflow-visible lg:left-38 lg:top-[220px]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id={`connector-fill-${activeIndex}`} x1="76" y1="0" x2="76" y2="88" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D8B26B" />
                    <stop offset="1" stopColor="#DEB972" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M62.43 42.61C53 28.05 48.28 9.76 49.5 1.05C49.5 1.05 64.97.27 74.98.27C84.99.27 101 1.05 101 1.05C101 25.05 92.58 38.78 87.52 44.18C89 72.55 103.21 84.26 111.05 87.05H41C58.15 77.01 62.43 53.24 62.43 42.61Z"
                  fill={`url(#connector-fill-${activeIndex})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 0.15, duration: 0.65 }}
                />
                {[
                  "M82.24 23.18C78.58 36.08 75.55 67.09 92.69 88",
                  "M101 1.05C102.4 8.71 99.49 27.37 87.99 43.05M87 1.05C87 15.86 87.36 45.34 89.03 52.03C90.08 60.91 95.72 80.36 109.94 87.05",
                  "M68.43 23.18C72.09 36.08 75.12 67.09 57.97 88",
                  "M50 1.05C48.61 8.71 53.08 28.02 62.7 42.05M63.5 1.05C63.5 15.86 63.29 45.34 61.62 52.03C60.57 60.91 54.93 80.36 40.71 87.05",
                  "M76 1.05L75.45 86.52",
                ].map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    stroke={index === 0 || index === 2 ? "#CCA867" : "#D8B26B"}
                    strokeWidth={index === 4 ? 2.1 : 1.05}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ pathLength: { delay: 0.08 + index * 0.08, duration: 0.9, ease: "easeInOut" }, opacity: { delay: 0.08, duration: 0.18 } }}
                  />
                ))}
                {[{ rx: 71.5, ry: 14.5 }, { rx: 57.5, ry: 11 }, { rx: 47, ry: 9.5 }].map(({ rx, ry }, index) => (
                  <motion.ellipse
                    key={rx}
                    cx="72"
                    cy="87.5"
                    rx={rx}
                    ry={ry}
                    stroke="#D8B26B"
                    strokeOpacity={0.75 - index * 0.12}
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ pathLength: { delay: 0.62 + index * 0.1, duration: 0.65, ease: "easeOut" }, opacity: { delay: 0.62, duration: 0.2 } }}
                  />
                ))}
              </motion.svg>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`lead-${activeIndex}`}
              initial={{ rotateY: -90, rotateZ: -2, scale: 0.96 }}
              animate={{ rotateY: 0, rotateZ: 0, scale: 1 }}
              exit={{ rotateY: 90, rotateZ: 2, scale: 0.96 }}
              transition={{ ...flipTransition, duration: 0.42 }}
              style={{ transformPerspective: 1200, backfaceVisibility: "hidden" }}
              className="absolute left-1/2 top-0 z-30 h-[225px] w-[290px] -translate-x-1/2 rounded-[13px] border border-transparent bg-[#5b5b5b] px-[27px] py-[18px] text-white shadow-[0_16px_34px_rgba(0,0,0,0.14)] dark:border-[#D8B26B] dark:bg-[#191917] lg:left-0 lg:translate-x-0"
            >
              <p className="font-sans text-[0.78rem] font-semibold text-[#f2d086]">New Qualified Lead</p>
              <div className="absolute right-[16px] top-[-16px] flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#e1b866] bg-[#FFF5E0] text-[#3f3f3f] shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
                <Bell size={22} fill="#404040" strokeWidth={1.7} />
              </div>
              <div className="mt-[21px] flex items-center gap-3">
                <div className="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-full border-2 border-[#e1b866] bg-[#FFF5E0] text-[#404040]">
                  <UserRound size={27} fill="#404040" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="font-sans text-[1rem] font-semibold leading-tight text-[#EBC982]">{active.leadType}</h3>
                  <p className="mt-2 flex items-center gap-1 font-sans text-[0.72rem] text-white/70"><MapPin size={11} /> {active.location}</p>
                </div>
              </div>
              <div className="mt-[32px] grid grid-cols-3 gap-[15px]">
                {active.tags.map((label, index) => (
                  <span key={label} className={`flex h-[21px] items-center justify-center rounded-[3px] border px-1 text-center text-[0.5rem] leading-none ${index === 0 ? "border-[#8fd093]/20 bg-[#6aa26e]/45 text-[#91dc95]" : index === 1 ? "border-[#89c9f0]/20 bg-[#5182a0]/55 text-[#a6d8f6]" : "border-white/20 bg-white/10 text-white/70"}`}>{label}</span>
                ))}
              </div>
              <div className="mt-[18px] flex items-center gap-7 font-sans text-[0.76rem] text-white/65">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#75d382]" />{active.status}</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white/30" />{active.time}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`stack-${stackIndex}`}
              initial={{ rotateY: 90, rotateZ: 2, scale: 0.97 }}
              animate={{ rotateY: 0, rotateZ: 0, scale: 1 }}
              exit={{ rotateY: -90, rotateZ: -2, scale: 0.97 }}
              transition={flipTransition}
              style={{ transformPerspective: 1200, backfaceVisibility: "hidden" }}
              className="absolute left-1/2 top-[300px] z-10 h-[393px] w-[290px] -translate-x-1/2 overflow-hidden rounded-[13px] border border-transparent bg-[#5b5b5b] dark:border-[#D8B26B] dark:bg-[#191917] lg:left-0 lg:top-[310px] lg:translate-x-0"
            >
              <div className="relative flex h-full flex-col items-center gap-1 pt-[62px]">
                <motion.h3
                  initial={false}
                  animate={{ opacity: showStackCards ? 1 : 0, y: showStackCards ? 0 : -6 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-4 top-[18px] text-center text-[1rem] font-medium leading-tight text-[#EBC982]"
                >
                  {stackActive.stackTitle}
                </motion.h3>
                {stackActive.stack.map((label, index) => {
                  const StackIcon = stackIcons[index];
                  return (
                    <motion.div
                      key={`${label}-${index}`}
                      initial={false}
                      animate={showStackCards ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.96 }}
                      transition={{ duration: showStackCards ? 0.65 : 0.28, delay: showStackCards ? (stackActive.stack.length - 1 - index) * 0.32 : 0, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10 flex h-[58px] shrink-0 flex-col items-center justify-center text-[#34383d] drop-shadow-[0_5px_8px_rgba(0,0,0,0.12)] dark:text-[#D8B26B]"
                      style={{ width: stackWidths[index] }}
                    >
                      <svg viewBox="0 0 250 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                        <defs>
                          <linearGradient id={`stack-card-${stackIndex}-${index}`} x1="0" y1="0" x2="250" y2="60" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D9AD58" />
                            <stop offset="0.52" stopColor="#F0CF87" />
                            <stop offset="1" stopColor="#D8A94F" />
                          </linearGradient>
                        </defs>
                        <path className="dark:fill-[#191917] dark:stroke-[#D8B26B]" d="M12 1H238C244 1 247 6 245 12L224 51C222 56 218 59 212 59H38C32 59 28 56 26 51L5 12C3 6 6 1 12 1Z" fill={`url(#stack-card-${stackIndex}-${index})`} stroke="rgba(255,255,255,0.82)" strokeWidth="1.2" />
                      </svg>
                      <StackIcon size={17} strokeWidth={1.8} className="relative z-10" />
                      <span className="relative z-10 mt-0.5 text-[0.68rem] font-medium leading-none">{label}</span>
                    </motion.div>
                  );
                })}
                <div className="relative z-10 -mt-1 h-[88px] w-[250px]">
                  <AnimatePresence initial={false}>
                    {connected && (
                      <motion.svg
                        key={`bottom-connector-${stackIndex}`}
                        viewBox="53 379 244 97"
                        className="absolute inset-0 h-full w-full"
                        fill="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id={`bottom-connector-fill-${stackIndex}`} x1="177" y1="379" x2="177" y2="442" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D8B26B" />
                            <stop offset="1" stopColor="#F0CF87" />
                          </linearGradient>
                          <radialGradient id={`bottom-connector-ring-${stackIndex}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(177 433) scale(65 12)">
                            <stop stopColor="#F4D891" />
                            <stop offset="1" stopColor="#D8B26B" />
                          </radialGradient>
                        </defs>
                        {[{ cx: 175, cy: 440, rx: 121.5, ry: 24 }, { cx: 175, cy: 439.5, rx: 96.5, ry: 19 }, { cx: 176, cy: 439, rx: 79.5, ry: 15.5 }].map((ring, index) => (
                          <motion.ellipse
                            key={ring.rx}
                            {...ring}
                            stroke="#D8B26B"
                            strokeWidth="1.2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ pathLength: { delay: index * 0.12, duration: 0.6, ease: "easeOut" }, opacity: { delay: index * 0.12, duration: 0.2 } }}
                          />
                        ))}
                        <motion.ellipse cx="177" cy="433" rx="49.5" ry="9" fill={`url(#bottom-connector-ring-${stackIndex})`} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} style={{ transformOrigin: "177px 433px" }} />
                        <motion.path d="M217.91 433.86C217.06 436.97 214.42 439.27 211.22 439.63C203.8 440.47 190.09 441.87 180 442C167.81 442.16 150.47 440.52 141.83 439.6C138.6 439.25 135.94 436.96 135.08 433.82L122.78 389.12C121.38 384.03 125.22 379 130.5 379H222.5C227.79 379 231.62 384.03 230.22 389.12L217.91 433.86Z" fill={`url(#bottom-connector-fill-${stackIndex})`} fillOpacity="0.4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.9 }} />
                        <motion.path d="M162.38 435.18C149.86 415.85 143.6 391.59 145.22 380.03C145.22 380.03 165.74 379 179.02 379C192.3 379 213.55 380.03 213.55 380.03C213.55 411.87 202.38 430.1 195.67 437.26C187 439.2 170 439.2 162.38 435.18Z" fill={`url(#bottom-connector-fill-${stackIndex})`} fillOpacity="0.2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.9 }} />
                        {[
                          "M196.28 433C211.54 414.95 215.4 390.2 213.55 380.02",
                          "M196.5 433C195.35 421.5 194.97 399.68 194.97 380.02",
                          "M180 433C182.2 429 185.5 420 188.66 409.4",
                          "M180 433C177.5 429 173.5 420 170.33 409.4",
                          "M162.1 433C163.55 421.5 163.78 399.68 163.78 380.02",
                          "M162.72 433C149.95 415.82 144.02 390.2 145.87 380.02",
                          "M180 433L180.38 380.02",
                        ].map((path, index) => (
                          <motion.path
                            key={path}
                            d={path}
                            stroke="#D8B26B"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ pathLength: { delay: 0.42 + index * 0.05, duration: 1.45, ease: "easeInOut" }, opacity: { delay: 0.42, duration: 0.22 } }}
                          />
                        ))}
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative order-3 mx-auto w-full max-w-[430px] lg:order-none lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 gap-0 overflow-visible lg:h-[620px] lg:grid-cols-1 lg:grid-rows-4 lg:overflow-hidden lg:pr-1">
            {active.features.map(({ Icon, title, body }, index) => (
              <div key={title} className={`relative min-h-[132px] px-3 py-4 lg:flex lg:min-h-0 lg:flex-col lg:justify-center lg:px-0 lg:py-3 ${index % 2 === 0 ? "border-r border-[#d8b26b]/25 lg:border-r-0" : ""} ${index < 2 ? "border-b border-[#d8b26b]/20" : ""} ${index === 2 ? "lg:border-b lg:border-[#d8b26b]/20" : ""}`}>
                <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#e1b866] bg-[#FFF5E0] text-[#404040] shadow-[0_8px_16px_rgba(0,0,0,0.18)] dark:bg-[#191917] dark:text-[#D8B26B] lg:mb-2.5 lg:h-[42px] lg:w-[42px]">
                  <Icon size={20} strokeWidth={1.55} />
                </div>
                <h3 className="font-sans text-[0.88rem] font-semibold leading-tight text-[#EBC982] lg:text-[0.9rem]">{title}</h3>
                <p className="mt-2 max-w-[140px] font-sans text-[0.64rem] leading-[1.25] text-white/70 lg:mt-1.5 lg:text-[0.66rem]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden h-[620px] w-px bg-[#d8b26b]/65 lg:block" />

        <div className="relative order-1 flex items-center text-center lg:order-none lg:text-left" aria-live="polite">
          <Image
            src="/flowers/vcardBG.svg"
            alt=""
            width={273}
            height={196}
            className="pointer-events-none absolute right-[-96px] top-1/2 z-0 w-[460px] -translate-y-1/2"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`copy-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.35, 1] }}
              exit={{ opacity: [1, 0.25, 0] }}
              transition={swapTransition}
              className="relative z-10 mx-auto max-w-[390px] lg:mx-0 lg:max-w-[420px] lg:pt-[35px]"
            >
              <p className="border-b border-[#d8b26b]/15 pb-[13px] font-sans text-[1.28rem] font-normal leading-tight text-[#f2d086] lg:text-[1.38rem]">{active.eyebrow}</p>
              <h2 className="border-b border-[#d8b26b]/15 py-[15px] font-heading text-[clamp(2.25rem,7vw,2.65rem)] font-normal leading-[1.06] tracking-[0] text-[#EBC982]">{active.title}</h2>
              <p className="mt-[17px] font-sans text-[1rem] leading-[1.38] text-white/45">{active.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
