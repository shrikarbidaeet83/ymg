"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  FileSignature,
  Rocket,
  Check,
  Headset,
  ShieldCheck,
  BriefcaseBusiness,
  Megaphone,
  PhoneCall,
  Play,
  Target,
  Pause,
  Share2,
  Star,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import {
  caseStudy,
  clientLogos,
} from "@/data/social-proof";
import { SHOW_CLIENT_LOGOS } from "@/data/site-flags";
import { testimonials } from "@/components/sections/TestimonialContactSection";
import CountText from "@/components/ui/CountText";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";

/*
 * Home page world: evergreen and brass on bone.
 * Evergreen (#0B231D) is the firm's ink and its full-bleed bands; brass (#C8A24E, the logo's gold) is reserved
 * for the one action and the figures that matter; bone (#F5F1E8) is the reading ground. Caslon carries the
 * headlines, Inter the reading. Photos in /public/images/home are Unsplash placeholders until YMG supplies its own.
 */

const ease = [0.23, 1, 0.32, 1] as const;

function BookCall() {
  return (
    <Link
      href="/contact#booking"
      className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#F5F1E8] pl-7 pr-2 text-[1rem] font-semibold text-[#0B231D] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F1E8]"
    >
      Book a free strategy call
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B231D] text-[#D6B263] transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
      </span>
    </Link>
  );
}


function Stars({
  size = 13,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} className="fill-current" />
      ))}
    </span>
  );
}

/* ─── 1. Hero: the people, on film ────────────────────────── */

// The hero names YMG's four service categories (the Services menu), one at a time, so the first line a visitor
// reads covers the whole offer rather than one practice or one service.
const serviceCategories = [
  "Case Acquisition",
  "Intake & Conversion",
  "Law Firm Marketing",
  "Law Firm Support",
];
const CATEGORY_MS = 2400;

// Confirmed facts only (CEO-approved deck + the site's compliance page).
const heroTrust = [
  { title: "15+ years", note: "in legal marketing", Icon: Award },
  { title: "24/7 live intake", note: "US-based team, Las Vegas", Icon: Headset },
  { title: "Live in 1 week", note: "campaigns, at the fastest", Icon: Rocket },
  {
    title: "Compliance-first",
    note: "consent and TCPA aware",
    Icon: ShieldCheck,
  },
  { title: "No lock-in", note: "no long-term contracts", Icon: FileSignature },
];
const QUOTE_MS = 7000;

// Verified client words for the hero: the case result first, then three firms.
const heroQuotes = [
  ...(caseStudy.show
    ? [
        {
          text: caseStudy.quote,
          who: `${caseStudy.role}, ${caseStudy.firm.toLowerCase()}`,
          result: "3.1× signed cases in 90 days",
        },
      ]
    : []),
  ...testimonials
    .slice(0, 3)
    .map((t) => ({ text: t.text, who: `${t.name}, ${t.firm}`, result: "" })),
];

function useTicker(length: number, ms: number, paused: boolean) {
  // Steps through 0..length-1 every `ms`; holds still for reduced motion.
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || paused || length < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % length), ms);
    return () => window.clearTimeout(id);
  }, [index, length, ms, paused, reduce]);
  return [index, setIndex] as const;
}

export function StoryHero() {
  const reduce = useReducedMotion();
  const [filmOpen, setFilmOpen] = useState(false);
  const [category] = useTicker(serviceCategories.length, CATEGORY_MS, false);
  // Quotes advance when their progress bar finishes, so pausing the bar (hover, focus) pauses the rotation exactly.
  const [quote, setQuote] = useState(0);
  const [quotePaused, setQuotePaused] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  // Autoplay needs the muted property set before play; React only sets it after hydration.
  useEffect(() => {
    const el = video.current;
    if (!el || reduce) return;
    el.muted = true;
    el.play().catch(() => {});
  }, [reduce]);
  const current = heroQuotes[quote];
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, transform: "translateY(26px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section className="ymg-hx-hero ymg-dark-hero relative isolate flex min-h-[100svh] flex-col overflow-hidden text-[#F5F1E8]">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#071813]">
        <video
          ref={video}
          className="ymg-hx-video absolute inset-0 h-full w-full object-cover"
          src={reduce ? undefined : "/videos/hero-loop.mp4"}
          poster="/videos/hero-loop-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[#0B231D]/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,19,0.92)_0%,rgba(7,24,19,0.72)_38%,rgba(7,24,19,0.15)_70%,rgba(7,24,19,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B231D] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] flex-1 items-center gap-14 px-5 pb-12 pt-[130px] sm:px-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16 lg:px-12">
        <div>
          <motion.p
            {...rise(0)}
            className="flex flex-wrap items-center gap-x-2 text-[1rem] font-medium leading-[1.6] text-[#D9D2C3]"
          >
            <span className="sr-only">
              One partner for plaintiff law firms: case acquisition, intake and
              conversion, law firm marketing and law firm support.
            </span>
            <span aria-hidden="true">One partner for plaintiff firms:</span>
            <span
              aria-hidden="true"
              className="relative inline-flex h-[1.6em] items-center overflow-hidden"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={serviceCategories[category]}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, transform: "translateY(100%)" }
                  }
                  animate={{ opacity: 1, transform: "translateY(0%)" }}
                  exit={{ opacity: 0, transform: "translateY(-100%)" }}
                  transition={{ duration: 0.55, ease }}
                  className="font-semibold text-[#D6B263]"
                >
                  {serviceCategories[category]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 max-w-[20ch] text-[clamp(2.18rem,4vw,3.68rem)] leading-[1.02] tracking-[-0.02em] text-[#F5F1E8]"
          >
            Qualified cases. Stronger intake.{" "}
            <span className="text-[#D6B263]">Scalable support.</span>
          </motion.h1>
          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-[34rem] text-[1.12rem] leading-[1.65] text-[#D9D2C3] sm:text-[1.2rem]"
          >
            We generate the leads, answer every call 24/7, and guide clients to
            a signed retainer, so your attorneys can focus on practicing law.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <BookCall />
          </motion.div>
          <motion.button
            {...rise(0.3)}
            type="button"
            onClick={() => setFilmOpen(true)}
            className="group mt-6 inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-[#D9D2C3] transition-colors hover:text-[#D6B263] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F1E8]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5F1E8]/30 transition-colors group-hover:border-[#D6B263]">
              <Play size={12} className="translate-x-px fill-current" aria-hidden="true" />
            </span>
            Watch the 90-second film
          </motion.button>
        </div>

        {/* Client words, in rotation: proof where the decision is made */}
        {current && (
          <motion.figure
            {...rise(0.4)}
            onMouseEnter={() => setQuotePaused(true)}
            onMouseLeave={() => setQuotePaused(false)}
            onFocus={() => setQuotePaused(true)}
            onBlur={() => setQuotePaused(false)}
            className="hidden lg:block"
          >
            <div
              className="flex gap-1.5"
              role="tablist"
              aria-label="Client quotes"
            >
              {heroQuotes.map((q, i) => (
                <button
                  key={q.who}
                  type="button"
                  role="tab"
                  aria-selected={i === quote}
                  aria-label={`Quote ${i + 1} of ${heroQuotes.length}`}
                  onClick={() => setQuote(i)}
                  className="relative h-10 flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B263]"
                >
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-[#F5F1E8]/20">
                    <span
                      key={`${quote}-${i}`}
                      className={`absolute inset-y-0 left-0 bg-[#D6B263] ${
                        i < quote
                          ? "w-full"
                          : i === quote
                            ? reduce
                              ? "w-full"
                              : "ymg-hx-progress w-full"
                            : "w-0"
                      }`}
                      style={
                        i === quote && !reduce
                          ? {
                              animationDuration: `${QUOTE_MS}ms`,
                              animationPlayState: quotePaused
                                ? "paused"
                                : "running",
                            }
                          : undefined
                      }
                      onAnimationEnd={
                        i === quote
                          ? () => setQuote((q) => (q + 1) % heroQuotes.length)
                          : undefined
                      }
                    />
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-6 h-[300px] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={quote}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, transform: "translateY(12px)" }
                  }
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  exit={{ opacity: 0, transform: "translateY(-8px)" }}
                  transition={{ duration: 0.5, ease }}
                >
                  <Stars size={14} className="text-[#D6B263]" />
                  <blockquote
                    className="ymg-num mt-4 text-[1.35rem] leading-[1.38] text-[#F5F1E8]"
                    style={{ fontWeight: 400 }}
                  >
                    &ldquo;{current.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-[0.92rem] text-[#B9B2A3]">
                    <span className="font-semibold text-[#F5F1E8]">
                      {current.who}
                    </span>
                    {current.result && (
                      <span className="block text-[#D6B263]">
                        {current.result}
                      </span>
                    )}
                  </figcaption>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.figure>
        )}
      </div>

      {/* Confirmed facts in one full-width row along the foot of the hero. */}
      <motion.ul
        {...rise(0.42)}
        className="relative mx-auto grid w-full max-w-[1320px] grid-cols-2 gap-x-6 gap-y-5 border-t border-[#F5F1E8]/15 px-5 pb-10 pt-7 sm:px-10 md:grid-cols-3 lg:grid-cols-5 lg:px-12"
      >
        {heroTrust.map(({ title, note, Icon }) => (
          <li key={title} className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D6B263]/15 text-[#D6B263]"
              aria-hidden="true"
            >
              <Icon size={18} strokeWidth={1.8} />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.98rem] font-bold text-[#F5F1E8]">
                {title}
              </span>
              <span className="text-[0.84rem] text-[#C9C3B4]">{note}</span>
            </span>
          </li>
        ))}
      </motion.ul>
      <FilmDialog open={filmOpen} onClose={() => setFilmOpen(false)} />
    </section>
  );
}

/* ─── 1b. The brand film: full screen, then it steps aside for the story ─── */

// One colour per category, so the four read apart at a glance (the gold stays with the headline).
const filmCategories = [
  {
    label: "Case Acquisition",
    href: "/services#case-acquisition",
    Icon: Target,
    color: "#3FC8A8",
  },
  {
    label: "Intake & Conversion",
    href: "/services/legal-intake",
    Icon: PhoneCall,
    color: "#6FA8FF",
  },
  {
    label: "Law Firm Marketing",
    href: "/services/law-firm-marketing",
    Icon: Megaphone,
    color: "#B38CFF",
  },
  {
    label: "Law Firm Support",
    href: "/services/law-firm-support",
    Icon: BriefcaseBusiness,
    color: "#FF8F7A",
  },
];

/*
 * Scroll-driven on wide screens: the film first fills the screen, then glides into a framed panel on the
 * right while the text rises in on the left. The section is pinned while that happens, so the motion is
 * tied to the scroll and reverses with it. Phones and reduced motion get the film and text stacked.
 */
const fmt = (t: number) => {
  if (!Number.isFinite(t) || t < 0) return "0:00";
  const m = Math.floor(t / 60);
  const sec = Math.floor(t % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
};

/*
 * The brand film with its own controls: play/pause, a timeline to jump anywhere, sound, and share.
 * It starts muted on its own when it scrolls into view (unless the visitor paused it) and pauses when it leaves.
 */
function FilmPlayer({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shared, setShared] = useState<"" | "copied">("");

  // Sound is wanted on from the start. Browsers only allow audible autoplay after the visitor has interacted
  // with the page (or for sites they use often), so: try with sound first, fall back to muted if refused,
  // and turn the sound on at the visitor's first click, tap or key press, unless they muted it themselves.
  const userMuted = useRef(false);
  const start = (el: HTMLVideoElement) => {
    el.muted = userMuted.current;
    el.play()
      .then(() => setMuted(el.muted))
      .catch(() => {
        el.muted = true;
        setMuted(true);
        el.play().catch(() => {});
      });
  };

  useEffect(() => {
    const el = video.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el.offsetParent !== null) {
          if (!userPaused.current) start(el);
        } else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    const unmuteOnFirstGesture = () => {
      if (userMuted.current || !el.muted) return;
      const wasPlaying = !el.paused;
      el.muted = false;
      setMuted(false);
      // If the browser still refuses sound, go back to playing muted rather than stopping.
      if (wasPlaying)
        el.play().catch(() => {
          el.muted = true;
          setMuted(true);
          el.play().catch(() => {});
        });
    };
    const events = ["pointerdown", "keydown", "touchend"] as const;
    events.forEach((e) =>
      window.addEventListener(e, unmuteOnFirstGesture, {
        once: true,
        passive: true,
      }),
    );
    return () => {
      io.disconnect();
      events.forEach((e) =>
        window.removeEventListener(e, unmuteOnFirstGesture),
      );
    };
  }, [reduce]);

  const togglePlay = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      el.play().catch(() => {});
    } else {
      userPaused.current = true;
      el.pause();
    }
  };
  const toggleSound = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    userMuted.current = el.muted;
    setMuted(el.muted);
    if (el.paused) {
      userPaused.current = false;
      el.play().catch(() => {});
    }
  };
  const seek = (value: number) => {
    const el = video.current;
    if (!el || !duration) return;
    el.currentTime = value;
    setTime(value);
  };
  const share = async () => {
    const url = `${window.location.origin}/#film`;
    const data = {
      title: "YMG Legal: one partner, from first click to signed retainer",
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared("copied");
      window.setTimeout(() => setShared(""), 2000);
    } catch {
      /* the visitor closed the share sheet */
    }
  };

  const progress = duration ? (time / duration) * 100 : 0;
  const btn =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#F5F1E8] transition-colors hover:bg-[#F5F1E8]/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B263]";

  return (
    <div className="group/film relative h-full w-full">
      <video
        ref={video}
        src="/videos/ymg-brand-video.mp4"
        poster="/videos/ymg-brand-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        className="h-full w-full cursor-pointer object-cover"
      />

      {/* Control bar */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071813]/90 via-[#071813]/55 to-transparent px-3 pb-3 pt-10 sm:px-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause film" : "Play film"}
            className={btn}
          >
            {playing ? (
              <Pause size={18} className="fill-current" aria-hidden="true" />
            ) : (
              <Play
                size={18}
                className="translate-x-px fill-current"
                aria-hidden="true"
              />
            )}
          </button>
          <span
            className={`shrink-0 tabular-nums text-[0.8rem] text-[#F5F1E8]/80 ${compact ? "hidden sm:inline" : ""}`}
          >
            {fmt(time)} / {fmt(duration)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={time}
            onChange={(e) => seek(Number(e.currentTarget.value))}
            aria-label="Film timeline"
            aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
            className="ymg-film-range mx-1 h-6 min-w-0 flex-1 cursor-pointer"
            style={{ "--p": `${progress}%` } as React.CSSProperties}
          />
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Turn sound on" : "Mute"}
            className={btn}
          >
            {muted ? (
              <VolumeX size={18} aria-hidden="true" />
            ) : (
              <Volume2 size={18} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={share}
            aria-label="Share the film"
            className={btn}
          >
            <Share2 size={17} aria-hidden="true" />
          </button>
        </div>
        {shared === "copied" && (
          <p
            role="status"
            className="absolute -top-2 right-4 rounded-full bg-[#F5F1E8] px-3 py-1 text-[0.78rem] font-semibold text-[#0B231D]"
          >
            Link copied
          </p>
        )}
      </div>

      {/* Sound invitation until the visitor turns it on */}
      {muted && (
        <button
          type="button"
          onClick={toggleSound}
          className="absolute left-4 top-4 inline-flex h-10 items-center gap-2 rounded-full bg-[#071813]/70 pl-1.5 pr-4 text-[0.85rem] font-semibold text-[#F5F1E8] backdrop-blur-md transition-colors hover:bg-[#071813] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B263]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D6B263] text-[#0B231D]">
            <Volume2 size={14} aria-hidden="true" />
          </span>
          Watch with sound
        </button>
      )}
    </div>
  );
}

/* ─── 1b. One case, start to finish: the four services working as one process ─── */

const journey = [
  {
    time: "9:41 PM",
    title: "Searches for a lawyer",
    detail: "“truck accident lawyer near me” finds your ad first.",
    service: "Law Firm Marketing",
    href: "/services/law-firm-marketing",
    Icon: Megaphone,
  },
  {
    time: "9:42 PM",
    title: "Calls your firm",
    detail: "A qualified inquiry from a campaign built on your case types.",
    service: "Case Acquisition",
    href: "/services/personal-injury-leads",
    Icon: Target,
  },
  {
    time: "9:42 PM",
    title: "Answered live",
    detail: "A US-based intake specialist picks up, nights and weekends included.",
    service: "Intake & Conversion",
    href: "/services/legal-intake",
    Icon: PhoneCall,
  },
  {
    time: "9:51 PM",
    title: "Screened on your criteria",
    detail: "Liability, injuries, treatment and statute of limitations checked.",
    service: "Intake & Conversion",
    href: "/services/legal-intake",
    Icon: ShieldCheck,
  },
  {
    time: "10:04 PM",
    title: "Retainer e‑signed",
    detail: "Your agreement signed on the claimant’s phone, the same night.",
    service: "Contract & Retainer",
    href: "/services/retainer-signing",
    Icon: FileSignature,
  },
  {
    time: "Next morning",
    title: "Case file on your desk",
    detail: "Synced to your CRM, with medical records already requested.",
    service: "Law Firm Support",
    href: "/services/law-firm-support",
    Icon: BriefcaseBusiness,
  },
];
const JOURNEY_MS = 2200;

export function CaseJourney() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (reduce || !inView) return;
    const id = window.setTimeout(
      () => setStep((s) => (s + 1) % journey.length),
      step === journey.length - 1 ? JOURNEY_MS * 2 : JOURNEY_MS,
    );
    return () => window.clearTimeout(id);
  }, [step, inView, reduce]);
  const shown = reduce ? journey.length - 1 : step;

  return (
    <section
      ref={root}
      aria-labelledby="journey-title"
      className="ymg-hx-film relative overflow-hidden bg-[#0B231D] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end">
          <h2
            id="journey-title"
            className="max-w-[24ch] text-[clamp(2.02rem,3.36vw,3.04rem)] leading-[1.04] tracking-[-0.015em] text-[#F5F1E8]"
          >
            One partner, from first click to{" "}
            <span className="text-[#D6B263]">signed retainer.</span>
          </h2>
          <p className="text-[1.08rem] leading-[1.65] text-[#C9C3B4]">
            Most firms juggle a marketing agency, a lead vendor, an answering
            service and outside support. YMG runs it as one process. Here is one
            injury case, followed from the search to the file.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-3">
          {/* The rail: fills up to the current step on wide screens */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-[2px] bg-[#F5F1E8]/12 lg:block">
            <span
              className="absolute inset-y-0 left-0 bg-[#D6B263] transition-[width] duration-700 ease-out"
              style={{ width: `${(shown / (journey.length - 1)) * 100}%` }}
            />
          </span>
          {journey.map(({ time, title, detail, service, href, Icon }, i) => {
            const on = i === shown;
            const done = i < shown;
            return (
              <li key={title} className="relative">
                <span
                  aria-hidden="true"
                  className={`relative z-10 hidden h-14 w-14 items-center justify-center rounded-full border-2 transition-colors duration-500 lg:flex ${
                    on
                      ? "border-[#D6B263] bg-[#D6B263] text-[#0B231D]"
                      : done
                        ? "border-[#1E9E6A] bg-[#0B231D] text-[#1E9E6A]"
                        : "border-[#F5F1E8]/20 bg-[#0B231D] text-[#F5F1E8]/60"
                  }`}
                >
                  {done ? <Check size={22} strokeWidth={2.6} /> : <Icon size={22} strokeWidth={1.8} />}
                </span>
                <div
                  className={`mt-0 h-full rounded-2xl border p-5 transition-[background-color,border-color,transform] duration-500 lg:mt-5 ${
                    on
                      ? "border-[#D6B263]/60 bg-[#F5F1E8] text-[#0B231D] shadow-[0_30px_60px_rgba(0,0,0,0.35)] lg:-translate-y-1"
                      : "border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.05]"
                  }`}
                >
                  <span className={`block text-[0.8rem] font-bold tracking-[0.04em] ${on ? "text-[#8C6B22]" : "text-[#D6B263]"}`}>
                    {time}
                  </span>
                  <span className={`mt-2 block text-[1.06rem] font-bold leading-snug ${on ? "text-[#0B231D]" : "text-[#F5F1E8]"}`}>
                    {title}
                  </span>
                  <span className={`mt-2 block text-[0.9rem] leading-[1.55] ${on ? "text-[#4E5A54]" : "text-[#C9C3B4]"}`}>
                    {detail}
                  </span>
                  <Link
                    href={href}
                    className={`mt-4 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold underline-offset-4 hover:underline ${on ? "text-[#0B231D]" : "text-[#F5F1E8]"}`}
                  >
                    {service} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#F5F1E8]/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.88rem] text-[#C9C3B4]">
            A sample case path. Steps, timing and services depend on your engagement.
          </p>
          <BookCall />
        </div>
      </div>
    </section>
  );
}

export function FilmFeature() {
  const reduce = useReducedMotion();
  const stage = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ["start start", "end end"],
  });

  // 0–0.12 full screen · 0.12–0.55 the film moves right and shrinks · 0.5–0.72 the text arrives · then holds.
  // The panel the film settles into keeps the film's own 16:9 shape, so the whole frame stays visible:
  // 45% of the stage wide, 9/16 of that tall, centred vertically. Measured from the pinned stage itself.
  const stageBox = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 1440, h: 900 });
  useEffect(() => {
    const el = stageBox.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const finalW = box.w * 0.45;
  const finalH = Math.min(finalW * (9 / 16), box.h * 0.8);
  const panel = {
    left: box.w * 0.52,
    top: (box.h - finalH) / 2,
    width: finalH * (16 / 9),
    height: finalH,
  };
  const range = [0.12, 0.55];
  const left = useTransform(scrollYProgress, range, [0, panel.left]);
  const top = useTransform(scrollYProgress, range, [0, panel.top]);
  const width = useTransform(scrollYProgress, range, [box.w, panel.width]);
  const height = useTransform(scrollYProgress, range, [box.h, panel.height]);
  const radius = useTransform(scrollYProgress, range, [0, 18]);
  // Opacity is mapped with functions on purpose: framer hands simple opacity ranges to the browser's scroll
  // timeline, which measures this pinned stage wrongly and fades the text back out at the end.
  const ramp = (v: number, from: number, to: number) =>
    Math.min(1, Math.max(0, (v - from) / (to - from)));
  const shade = useTransform(
    scrollYProgress,
    (v) => 0.35 * (1 - ramp(v, 0.12, 0.4)),
  );
  const textOpacity = useTransform(scrollYProgress, (v) => ramp(v, 0.5, 0.72));
  const textY = useTransform(scrollYProgress, [0.5, 0.72], [40, 0]);
  const textTransform = useTransform(textY, (y) => `translateY(${y}px)`);

  const copy = (
    <>
      <h2 className="max-w-[20ch] text-[clamp(2.02rem,3.2vw,3.04rem)] leading-[1.04] tracking-[-0.015em] text-[#F5F1E8]">
        One partner, from first click to{" "}
        <span className="text-[#D6B263]">signed retainer.</span>
      </h2>
      <p className="mt-6 max-w-[30rem] text-[1.08rem] leading-[1.65] text-[#C9C3B4]">
        Most firms juggle a marketing agency, a lead vendor, an answering
        service and outside support. YMG runs it as one process, on the case
        criteria your firm sets.
      </p>
      {/* Always two by two, every pill the same width and height */}
      <ul className="mt-9 grid max-w-[30rem] grid-cols-2 gap-2.5">
        {filmCategories.map(({ label, href, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className="group flex h-14 w-full items-center gap-2.5 rounded-full bg-[#F5F1E8] pl-1.5 pr-3 text-[0.8rem] font-semibold leading-tight text-[#0B231D] sm:h-12 sm:gap-3 sm:pr-4 sm:text-[0.92rem] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B263]"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B231D] text-[#D6B263]"
                aria-hidden="true"
              >
                <Icon size={17} strokeWidth={2} />
              </span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section
      ref={stage}
      id="film"
      aria-label="YMG Legal brand film"
      className="ymg-hx-film relative bg-[#0B231D] text-[#F5F1E8] lg:h-[260vh]"
    >
      {/* Wide screens: pinned stage */}
      <div
        ref={stageBox}
        className="sticky top-0 hidden h-[100svh] overflow-hidden lg:block"
      >
        <motion.div
          style={
            reduce
              ? { ...panel, borderRadius: 18 }
              : { left, top, width, height, borderRadius: radius }
          }
          className="absolute overflow-hidden bg-black shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
        >
          <FilmPlayer />
          <motion.div
            aria-hidden="true"
            style={{ opacity: reduce ? 0 : shade }}
            className="pointer-events-none absolute inset-0 bg-[#071813]"
          />
        </motion.div>
        <div className="pointer-events-none relative mx-auto flex h-full max-w-[1320px] items-center px-12">
          <motion.div
            style={
              reduce
                ? undefined
                : { opacity: textOpacity, transform: textTransform }
            }
            className="pointer-events-auto w-[44%]"
          >
            {copy}
          </motion.div>
        </div>
      </div>

      {/* Phones and tablets: stacked */}
      <div className="px-5 py-20 sm:px-10 lg:hidden">
        <div className="relative aspect-video overflow-hidden rounded-[14px] bg-black">
          <FilmPlayer compact />
        </div>
        <div className="mt-10">{copy}</div>
      </div>
    </section>
  );
}

/* ─── 2. The firms, on the same evergreen as the film above ─── */

export function TrustBand() {
  if (!SHOW_CLIENT_LOGOS) return null;
  const row = [...clientLogos, ...clientLogos];
  // The panel's own colour; the smoke at both ends fades into exactly this.
  const panel = "#102E26";
  return (
    <section
      aria-label="Law firms that work with YMG Legal"
      className="ymg-hx-logos px-5 py-14 sm:px-10 lg:px-12"
    >
      <div
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[24px] border border-[#F5F1E8]/10 py-9"
        style={{ backgroundColor: panel }}
      >
        <p className="mb-7 px-5 text-center text-[0.9rem] font-medium text-[#B9B2A3]">
          Trusted by plaintiff firms across the US
        </p>
        <div className="ymg-logo-marquee relative overflow-hidden">
          <ul className="ymg-logo-track flex w-max items-center gap-20 px-10">
            {row.map(({ name, src }, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= clientLogos.length}
                className="shrink-0"
              >
                <Image
                  src={src}
                  alt={i < clientLogos.length ? name : ""}
                  width={170}
                  height={56}
                  className="h-14 w-auto max-w-[180px] object-contain opacity-90 [filter:brightness(0)_invert(1)]"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Smoke at both ends: logos blur and dissolve into the panel instead of being cut off. */}
        {(["left", "right"] as const).map((side) => (
          <span
            key={side}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 ${side === "left" ? "left-0" : "right-0"} w-[22%] min-w-[110px]`}
          >
            <span
              className="absolute inset-0 backdrop-blur-[6px]"
              style={{
                maskImage: `linear-gradient(to ${side === "left" ? "right" : "left"}, #000 25%, transparent)`,
                WebkitMaskImage: `linear-gradient(to ${side === "left" ? "right" : "left"}, #000 25%, transparent)`,
              }}
            />
            <span
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to ${side === "left" ? "right" : "left"}, ${panel} 8%, ${panel}E6 35%, ${panel}00)`,
              }}
            />
            {/* soft drifting wisps */}
            <span
              className={`ymg-hx-smoke absolute top-1/2 h-24 w-24 -translate-y-1/2 rounded-full blur-2xl ${side === "left" ? "left-2" : "right-2"}`}
              style={{ backgroundColor: `${panel}`, opacity: 0.9 }}
            />
            <span
              className={`ymg-hx-smoke absolute top-[18%] h-16 w-20 rounded-full bg-[#F5F1E8]/[0.07] blur-2xl ${side === "left" ? "left-10" : "right-10"}`}
              style={{ animationDelay: "-4s" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── 2b. Services, each with a face: what it covers, what it works with ─── */

const serviceTones: GlassTone[] = ["teal", "blue", "violet", "rose"];

const tailoredServices = [
  {
    name: "Case Acquisition",
    href: "/services#case-acquisition",
    image: "/images/home/svc-acquisition-crash.jpg",
    alt: "Two cars damaged in a collision",
    lead: "Qualified cases from search, social, video and live calls.",
    proof: "Campaigns live in as little as 1 week",
    includes: [
      "Google & YouTube ads",
      "Meta campaigns",
      "Pay-per-call",
      "Outbound acquisition",
    ],
  },
  {
    name: "Intake & Conversion",
    href: "/services/legal-intake",
    image: "/images/home/svc-intake.jpg",
    alt: "Intake specialist on a call",
    lead: "Every call answered and moved to a signed retainer.",
    proof: "24/7 live intake, US-based team",
    includes: [
      "Screening on your criteria",
      "Follow-up by call, text, email",
      "E-sign retainers",
      "Live chat & AI booking",
    ],
  },
  {
    name: "Law Firm Marketing",
    href: "/services/law-firm-marketing",
    image: "/images/home/svc-marketing-search.jpg",
    alt: "A Google search on a phone",
    lead: "Be the firm people find first, and the one they call.",
    proof: "15+ years in legal marketing",
    includes: [
      "SEO & AI search",
      "Local Services Ads",
      "Website design",
      "Organic social",
    ],
  },
  {
    name: "Law Firm Support",
    href: "/services/law-firm-support",
    image: "/images/home/svc-support-files.jpg",
    alt: "Case files organised in stacks",
    lead: "Records and admin handled, so attorneys practice law.",
    proof: "Scoped to your caseload",
    includes: [
      "Medical records retrieval",
      "Case chronologies",
      "Paralegal support",
      "Virtual assistants",
    ],
  },
];

/* Four services side by side, so a visitor sees the whole offer at once and picks the one they need. */
const serviceIcons = [Target, Headset, Megaphone, BriefcaseBusiness];

export function TailoredServices() {
  return (
    <section className="ymg-hx-services px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2
            data-reveal
            className="max-w-[22ch] text-[clamp(2.02rem,3.68vw,3.36rem)] leading-[1.02] tracking-[-0.015em] text-[#0B231D]"
          >
            What YMG does for <span className="text-[#8C6B22]">your firm.</span>
          </h2>
          <p
            data-reveal
            className="max-w-[32rem] text-[1.08rem] leading-[1.6] text-[#4E5A54] lg:pb-2"
          >
            Four services that take a case from the first ad to a signed
            retainer, and support the work after it. Use one, or run them
            together as one system, scoped to your case types and markets.
          </p>
        </div>

        <ul
          data-reveal-group
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4"
        >
          {tailoredServices.map(
            ({ name, href, image, alt, lead, proof, includes }, i) => {
              const Icon = serviceIcons[i];
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#0B231D]/10 bg-white shadow-[0_18px_40px_rgba(11,35,29,0.10),0_2px_6px_rgba(11,35,29,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[#C8A24E]/60 hover:shadow-[0_32px_64px_rgba(11,35,29,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24E]"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-[#0B231D]">
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#071813]/45 to-transparent"
                      />
                      <span className="absolute left-4 top-4">
                        <GlassIcon
                          tone={serviceTones[i]}
                          size="md"
                          surface="dark"
                        >
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </GlassIcon>
                      </span>
                      <span className="absolute bottom-3 left-4 right-4 text-[0.8rem] font-semibold text-[#F5F1E8]">
                        {proof}
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col p-6">
                      <span className="ymg-num block text-[1.6rem] leading-tight text-[#0B231D]">
                        {name}
                      </span>
                      <span className="mt-2 block text-[0.96rem] leading-[1.55] text-[#4E5A54]">
                        {lead}
                      </span>
                      <span className="mb-6 mt-5 grid gap-2">
                        {includes.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="flex items-center gap-2 text-[0.9rem] text-[#0B231D]"
                          >
                            <Check
                              size={14}
                              strokeWidth={2.6}
                              className="shrink-0 text-[#1E9E6A]"
                              aria-hidden="true"
                            />
                            {item}
                          </span>
                        ))}
                      </span>
                      <span className="mt-auto flex items-center justify-between gap-3 border-t border-[#0B231D]/10 pt-5 text-[0.95rem] font-semibold text-[#0B231D] transition-colors group-hover:text-[#8C6B22]">
                        <span className="mt-1">Explore {name}</span>
                        <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F4F1] transition-colors group-hover:bg-[#0B231D] group-hover:text-[#D6B263]">
                          <ArrowRight
                            size={16}
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            },
          )}
        </ul>

        <p data-reveal className="mt-10 text-center text-[1rem] text-[#4E5A54]">
          Not sure which you need?{" "}
          <Link
            href="/contact#booking"
            className="font-semibold text-[#0B231D] underline decoration-[#C8A24E] decoration-2 underline-offset-4 hover:text-[#8C6B22]"
          >
            Book a free strategy call
          </Link>{" "}
          and we will map it with you.
        </p>
      </div>
    </section>
  );
}

/* ─── 3. What slow intake costs ───────────────────────────── */

// YMG client data (deck, chapter 01). Always labelled.
const losses = [
  { value: "35%", label: "of inquiries lost" },
  { value: "48%", label: "of calls missed after hours" },
  { value: "60%", label: "of leads never followed up" },
  { value: "30+", label: "hours a week on admin" },
];

/* ─── 2c. Compliance: the controls law firms look for first (content guide, Compliance page) ─── */

const complianceItems = [
  { title: "Consent-aware acquisition", note: "Consent captured and documented at the source.", Icon: FileSignature },
  { title: "TCPA-conscious campaigns", note: "Calls and texts run within consent rules.", Icon: ShieldCheck },
  { title: "Lead-source tracking", note: "Every inquiry traced back to its campaign.", Icon: Target },
  { title: "Your qualification criteria", note: "Screening runs on the criteria your firm sets.", Icon: Check },
  { title: "Intake documentation", note: "Calls, answers and decisions on record.", Icon: BriefcaseBusiness },
  { title: "Controlled data access", note: "Defined handling procedures and access controls.", Icon: Headset },
];

const complianceTones: GlassTone[] = ["teal", "blue", "violet", "gold", "rose", "indigo"];

export function ComplianceBand() {
  return (
    <section
      aria-labelledby="compliance-title"
      className="ymg-hx-compliance bg-[#F0F4F1] px-5 py-20 sm:px-10 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2
            id="compliance-title"
            className="text-[clamp(1.9rem,2.72vw,2.4rem)] leading-[1.06] tracking-[-0.015em] text-[#0B231D]"
          >
            Built with <span className="text-[#8C6B22]">compliance</span> in mind.
          </h2>
          <p className="mt-5 text-[1.02rem] leading-[1.6] text-[#4E5A54]">
            Campaigns and intake are structured around advertising, consent,
            privacy and professional-responsibility rules. Requirements vary by
            jurisdiction, so we define them with each firm.
          </p>
          <Link
            href="/compliance"
            className="mt-6 inline-flex items-center gap-2 text-[0.98rem] font-semibold text-[#0B231D] underline decoration-[#C8A24E] decoration-2 underline-offset-4 hover:text-[#8C6B22]"
          >
            How we handle compliance <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
          {complianceItems.map(({ title, note, Icon }, i) => (
            <li
              key={title}
              className="rounded-2xl border border-[#0B231D]/10 bg-white p-4 shadow-[0_14px_32px_rgba(11,35,29,0.08)] sm:p-5"
            >
              <GlassIcon tone={complianceTones[i % complianceTones.length]} size="md">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </GlassIcon>
              <span className="mt-4 block text-[1.04rem] font-bold text-[#0B231D]">
                {title}
              </span>
              <span className="mt-1.5 hidden text-[0.92rem] leading-[1.5] text-[#4E5A54] sm:block">
                {note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CostStory() {
  return (
    <section className="ymg-hx-cost px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2
            data-reveal
            className="max-w-[19ch] text-[clamp(2.02rem,3.68vw,3.36rem)] leading-[1.02] tracking-[-0.015em] text-[#F5F1E8]"
          >
            Most firms lose cases before the first conversation.
          </h2>
          <div data-reveal>
            <span className="block ymg-num text-[clamp(4.6rem,10vw,8.5rem)] leading-[0.85] text-[#D6B263]">
              <CountText value="$250K+" />
            </span>
            <p className="mt-4 max-w-[26rem] text-[1.05rem] leading-[1.55] text-[#C9C3B4]">
              Average revenue a firm loses each year to slow intake and
              unmanaged leads.
            </p>
          </div>
        </div>
        <dl
          data-reveal-group
          className="mt-16 grid grid-cols-2 gap-x-8 border-t border-[#F5F1E8]/15 lg:mt-20 lg:grid-cols-4"
        >
          {losses.map(({ value, label }) => (
            <div
              key={label}
              className="border-b border-[#F5F1E8]/15 py-8 lg:border-b-0"
            >
              <dt className="sr-only">{label}</dt>
              {/* Oxblood marks the losses: the one place the site uses red */}
              <span aria-hidden="true" className="mb-5 block h-[3px] w-10 rounded-full bg-[#D6B263]" />
              <dd className="ymg-num text-[3rem] leading-none text-[#F5F1E8]">
                <CountText value={value} />
              </dd>
              <dd className="mt-3 text-[0.98rem] text-[#B9B2A3]">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[0.82rem] text-[#8C9690]">
          Based on YMG client data.
        </p>
      </div>
    </section>
  );
}

/* ─── The brand film, opened from the hero ───────────────── */

const FILM = {
  src: "/videos/ymg-brand-video.mp4",
  poster: "/videos/ymg-brand-poster.jpg",
};

function FilmDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      video.current?.play().catch(() => {});
    } else if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={dialog}
      onClose={() => {
        video.current?.pause();
        onClose();
      }}
      onClick={(e) => e.target === dialog.current && onClose()}
      aria-label="YMG Legal film"
      className="m-auto w-[min(1100px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-[#071813]/85 backdrop:backdrop-blur-sm"
    >
      <div className="relative aspect-video overflow-hidden rounded-[12px] bg-black">
        <video
          ref={video}
          src={FILM.src}
          poster={FILM.poster}
          controls
          playsInline
          preload="none"
          className="h-full w-full"
        />
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1E8] text-[#0B231D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24E]"
        aria-label="Close film"
      >
        <X size={20} aria-hidden="true" />
      </button>
    </dialog>
  );
}

/* ─── Proof ──────────────────────────────────────────────── */

/* One client's result in their own words, shown under the review carousel. */
export function CaseQuote() {
  if (!caseStudy.show) return null;
  // The result as a story: the team that answers after hours on the left, the client's words and numbers on the right.
  return (
    <figure
      data-reveal
      className="mt-20 grid overflow-hidden rounded-[28px] bg-[#0B231D] text-[#F5F1E8] lg:mt-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
    >
      <div className="relative min-h-[300px] lg:min-h-[520px]">
        <Image
          src="/images/home/intake-team.jpg"
          alt="YMG intake specialists taking calls"
          fill
          sizes="(min-width: 1024px) 620px, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B231D]/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0B231D]/40"
        />
        <span className="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-full bg-[#F5F1E8] py-2 pl-2 pr-4 text-[0.88rem] font-semibold text-[#0B231D] shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F9D7A] text-white">
            <PhoneCall size={14} aria-hidden="true" />
          </span>
          Calls after 6 pm, answered live
        </span>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
        <span className="flex items-center gap-3 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#D6B263]">
          Client result · {caseStudy.period}
        </span>
        <blockquote className="ymg-num mt-5 text-[clamp(1.8rem,2.8vw,2.6rem)] leading-[1.15] text-[#F5F1E8]">
          &ldquo;{caseStudy.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5 text-[0.98rem] text-[#C9C3B4]">
          <span className="font-semibold text-[#F5F1E8]">{caseStudy.role}</span>{" "}
          · {caseStudy.firm}, {caseStudy.region}
        </figcaption>
        <dl className="mt-9 grid grid-cols-3 gap-3">
          {caseStudy.metrics.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-[16px] border border-[#F5F1E8]/12 bg-[#F5F1E8]/[0.05] p-4"
            >
              <dt className="sr-only">{label}</dt>
              <dd className="ymg-num text-[clamp(1.8rem,2.6vw,2.4rem)] leading-none text-[#D6B263]">
                <CountText value={value} />
              </dd>
              <dd className="mt-2 text-[0.82rem] leading-snug text-[#C9C3B4]">
                {label}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-[0.78rem] text-[#8C9690]">
          Results vary by firm, market and case type.
        </p>
      </div>
    </figure>
  );
}

/* ─── 8. The close, full bleed ───────────────────────────── */

const promises = [
  { value: "30 min", label: "free strategy call" },
  { value: "48 hrs", label: "custom proposal" },
  { value: "1 wk", label: "to launch, at fastest" },
];

export function CloseStory() {
  return (
    <section className="ymg-hx-close relative isolate overflow-hidden px-5 py-28 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/images/home/close-courthouse.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B231D]/80" />
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0B231D]/70 to-transparent" />
      </div>
      <div className="mx-auto max-w-[1320px]">
        <h2
          data-reveal
          className="max-w-[20ch] text-[clamp(2.35rem,5.12vw,4.8rem)] leading-[1] tracking-[-0.02em] text-[#F5F1E8]"
        >
          Your next signed case starts with{" "}
          <span className="text-[#D6B263]">one call.</span>
        </h2>
        <div
          data-reveal
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <BookCall />
        </div>
        <dl
          data-reveal-group
          className="mt-16 grid max-w-[640px] grid-cols-3 border-t border-[#F5F1E8]/15 pt-8"
        >
          {promises.map(({ value, label }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="ymg-num text-[2.2rem] leading-none text-[#F5F1E8]">
                <CountText value={value} />
              </dd>
              <dd className="mt-2 text-[0.9rem] text-[#B9B2A3]">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-[0.92rem] text-[#B9B2A3]">
          No long-term contracts required to start.
        </p>
      </div>
    </section>
  );
}
