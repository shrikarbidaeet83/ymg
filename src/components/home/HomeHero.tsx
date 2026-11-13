"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play, Star, Volume2, VolumeX } from "lucide-react";
import { rating, reviewerInitials } from "@/data/social-proof";

// YMG brand film. Plays muted in the frame; visitors can watch it with sound.
const BRAND_FILM = { src: "/videos/ymg-brand-video.mp4", poster: "/videos/ymg-brand-poster.jpg" };

// Confirmed by YMG (Service Deck).
const proof = [
  { value: "15+", label: "years in legal marketing" },
  { value: "24/7", label: "US-based intake" },
  { value: "6", label: "practice areas served" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // The film reports its average colour; a soft wash behind it follows the scene.
  const onAmbient = useCallback((r: number, g: number, b: number) => {
    sectionRef.current?.style.setProperty("--amb", `${Math.round(r)} ${Math.round(g)} ${Math.round(b)}`);
  }, []);

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      ref={sectionRef}
      style={{ "--amb": "216 178 107" } as React.CSSProperties}
      className="ymg-video-hero relative isolate overflow-hidden bg-[#FFF5E0] text-[#2f3236] dark:bg-[#191917] dark:text-[#f5ecd8] lg:flex lg:min-h-[100svh] lg:items-center"
    >
      {/* Backdrop: warm light from the right that takes on the film's colour, and a fine gold grid */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute -right-[10%] top-[8%] h-[80%] w-[70%] rounded-full opacity-60 blur-[90px] transition-[background-color] duration-[1500ms] dark:opacity-40"
          style={{ backgroundColor: "rgb(var(--amb) / 0.55)" }}
        />
        <div data-parallax="-0.15" className="absolute -left-[10%] bottom-[-20%] h-[60%] w-[50%] rounded-full bg-[radial-gradient(closest-side,rgba(216,178,107,0.35),transparent)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-60 dark:opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(168,123,37,0.16) 1px, transparent 1.4px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(70% 70% at 70% 45%, #000, transparent 80%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#FFF5E0] dark:to-[#191917]" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-5 pb-16 pt-[120px] sm:px-10 lg:px-12 lg:pb-12 lg:pt-[110px] xl:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
          {/* Copy */}
          <div className="min-w-0">
            <motion.p
              {...rise(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#e6d3a8] bg-white/80 py-1.5 pl-2 pr-4 text-[0.85rem] font-medium text-[#4b4e52] shadow-[0_6px_16px_rgba(82,64,34,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-[#d9d1c0]"
            >
              <span className="flex h-6 items-center gap-1.5 rounded-full bg-[#e3f2ee] px-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#1d6b5e] dark:bg-[#23796b]/30 dark:text-[#8be0c8]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#23796b] opacity-70 motion-safe:animate-ping dark:bg-[#6fd1b8]" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#23796b] dark:bg-[#6fd1b8]" />
                </span>
                24/7
              </span>
              Built only for plaintiff law firms
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-[2.7rem] leading-[1.02] tracking-[-0.02em] text-[#2b2d31] dark:text-[#f5ecd8] sm:text-[3.6rem] lg:text-[clamp(2.52rem,5.28vh,3.36rem)]"
            >
              Qualified Cases. <span className="text-[#b8893a] dark:text-[#EBC982]">Stronger Intake.</span>{" "}
              <span className="whitespace-nowrap">Scalable Support.</span>
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-6 max-w-[33rem] text-[1.08rem] leading-[1.6] text-[#55585c] dark:text-[#bdb6a6] sm:text-[1.15rem]">
              We generate the leads, answer every call 24/7, and guide clients to a signed retainer, so your attorneys can focus
              on practicing law.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact#booking"
                className="ymg-hero-primary group relative inline-flex h-[58px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#2b2d31] pl-7 pr-2 text-[1.02rem] font-semibold text-white shadow-[0_18px_40px_rgba(43,45,49,0.28)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] dark:bg-[#D8B26B] dark:text-[#1f2023]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[520%]"
                />
                Book a free strategy call
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#D8B26B] text-[#1f2023] transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-[#1f2023] dark:text-[#EBC982]">
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </Link>
            </motion.div>

            <motion.div {...rise(0.3)}>
              <ReviewLine />
            </motion.div>

            <motion.div {...rise(0.36)} className="hidden lg:block">
              <ProofRow />
            </motion.div>
          </div>

          {/* Film */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.05, delay: 0.2, ease }}
            className="relative mx-auto w-full min-w-0 max-w-[760px] lg:max-w-[min(100%,calc((100svh-210px)*1.62))]"
          >
            <BrandFilm reduce={Boolean(reduce)} onAmbient={onAmbient} />
          </motion.div>

          {/* On phones the proof row follows the film, so the film is seen sooner */}
          <div className="lg:hidden">
            <ProofRow />
          </div>
        </div>
      </div>
    </section>
  );
}

// PLACEHOLDER review score (src/data/social-proof.ts); replace with YMG's real one.
function ReviewLine() {
  return (
    <Link href={rating.href} className="group mt-6 inline-flex items-center gap-3 py-1 text-[0.88rem] text-[#55585c] dark:text-[#bdb6a6]">
      <span className="flex -space-x-2" aria-hidden="true">
        {reviewerInitials.map((initials, i) => (
          <span
            key={initials}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FFF5E0] text-[0.66rem] font-bold text-white dark:border-[#191917]"
            style={{ background: ["#c99a45", "#23796b", "#5b6fd8", "#b5523a"][i % 4] }}
          >
            {initials}
          </span>
        ))}
      </span>
      <span className="leading-tight">
        <span className="flex items-center gap-1 text-[#d9a441]" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
          ))}
          <strong className="ml-1 text-[0.9rem] font-semibold text-[#2b2d31] dark:text-[#f5ecd8]">{rating.score}</strong>
        </span>
        <span className="block group-hover:underline group-hover:underline-offset-4">
          from {rating.count} {rating.label}
        </span>
      </span>
    </Link>
  );
}

function ProofRow() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#e6d6b0] pt-6 dark:border-white/10 lg:mt-9 lg:flex lg:gap-10">
      {proof.map(({ value, label }) => (
        <p key={label} className="leading-tight">
          <span className="block font-heading text-[1.7rem] text-[#2b2d31] dark:text-[#f5ecd8]">{value}</span>
          <span className="text-[0.82rem] text-[#6b6e72] dark:text-[#a9a59b]">{label}</span>
        </p>
      ))}
    </div>
  );
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/*
 * The brand film in a clean, light frame. It plays muted in a loop; a centred "Watch with sound"
 * button restarts it with sound, and a control bar appears on hover. A blurred copy of the
 * playing frame glows behind the frame and the hero's backdrop follows its colour.
 */
function BrandFilm({ reduce, onAmbient }: { reduce: boolean; onAmbient: (r: number, g: number, b: number) => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const glowRef = useRef<HTMLCanvasElement>(null);
  const userPaused = useRef(reduce);
  const scrubbing = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState({ current: 0, duration: 0 });

  // Autoplay (muted) while on screen, unless the visitor paused it or prefers less motion.
  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) void video.play().catch(() => {});
        else if (!entry.isIntersecting) video.pause();
        // Stop the edge light while the hero is off screen.
        stage.style.setProperty("--edge-state", entry.isIntersecting ? "running" : "paused");
      },
      { threshold: 0.3 }
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // Sample the frame for the glow and the backdrop colour, smoothing between samples.
  useEffect(() => {
    const video = videoRef.current;
    const canvas = glowRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!video || !canvas || !ctx) return;
    const avg = { r: 216, g: 178, b: 107 };
    let raf = 0;
    let last = 0;
    const sample = () => {
      if (video.readyState < 2) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let r = 0;
      let g = 0;
      let b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      const n = data.length / 4;
      avg.r += (r / n - avg.r) * 0.3;
      avg.g += (g / n - avg.g) * 0.3;
      avg.b += (b / n - avg.b) * 0.3;
      // Keep the wash warm and light: blend toward brand gold so dark scenes don't muddy the cream page.
      onAmbient(avg.r * 0.5 + 216 * 0.5, avg.g * 0.5 + 178 * 0.5, avg.b * 0.5 + 107 * 0.5);
    };
    const loop = (t: number) => {
      if (t - last > 200) {
        sample();
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      sample();
    };
    video.addEventListener("play", start);
    video.addEventListener("pause", stop);
    video.addEventListener("loadeddata", sample);
    video.addEventListener("seeked", sample);
    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("play", start);
      video.removeEventListener("pause", stop);
      video.removeEventListener("loadeddata", sample);
      video.removeEventListener("seeked", sample);
    };
  }, [onAmbient]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      void video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  }, []);

  const toggleSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) {
      video.volume = 1;
      userPaused.current = false;
      void video.play().catch(() => {});
    }
    setMuted(video.muted);
  }, []);

  // Watching with sound starts the film from the beginning, so the narration makes sense.
  const watchWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    setMuted(false);
    userPaused.current = false;
    void video.play().catch(() => {});
  }, []);

  const seekTo = (clientX: number, track: HTMLElement) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setTime({ current: video.currentTime, duration: video.duration });
  };

  const progress = time.duration ? time.current / time.duration : 0;

  return (
    <div ref={stageRef} className="relative">
      {/* Glow from the playing frame */}
      <canvas
        ref={glowRef}
        width={32}
        height={18}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[6%] -inset-y-[10%] -z-10 hidden h-[120%] w-[112%] opacity-70 blur-[60px] saturate-[1.3] dark:block"
      />

      {/* Soft colour orbs drifting behind the glass (transform-only animation, blurred once) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="ymg-orb absolute -left-[8%] -top-[14%] h-[55%] w-[45%] rounded-full bg-[#EBC982] opacity-70 blur-[60px] dark:opacity-30" />
        <span className="ymg-orb ymg-orb-2 absolute -bottom-[16%] -right-[6%] h-[55%] w-[42%] rounded-full bg-[#9fd9c8] opacity-60 blur-[60px] dark:opacity-20" />
        <span className="ymg-orb ymg-orb-3 absolute right-[18%] -top-[10%] h-[35%] w-[28%] rounded-full bg-[#f4b6a5] opacity-40 blur-[50px] dark:opacity-15" />
      </div>

      {/* Frame: a light ring travels the gold edge of a frosted glass bezel */}
      <div className="relative overflow-hidden rounded-[32px] p-[1.5px] shadow-[0_40px_90px_rgba(82,64,34,0.25),0_12px_28px_rgba(82,64,34,0.1)] dark:shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] [animation-play-state:var(--edge-state,running)] bg-[conic-gradient(from_0deg,rgba(235,201,130,0.15)_0deg,rgba(255,255,255,0.95)_50deg,rgba(235,201,130,0.9)_90deg,rgba(235,201,130,0.15)_150deg,rgba(235,201,130,0.15)_210deg,rgba(201,154,69,0.85)_260deg,rgba(235,201,130,0.15)_320deg)] will-change-transform motion-reduce:animate-none"
        />
        <div className="relative rounded-[30.5px] bg-[linear-gradient(150deg,rgba(255,255,255,0.78),rgba(255,250,240,0.55))] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(201,154,69,0.2)] dark:bg-none dark:bg-[#232427]/85 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-3">
          {/* Glass sheen across the bezel */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[30.5px] bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0)_70%,rgba(235,201,130,0.25)_100%)] dark:opacity-30" />
          <div className="group relative overflow-hidden rounded-[22px] bg-[#1c1d1f] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.25)]">
            <video
              ref={videoRef}
              className="block aspect-video w-full cursor-pointer object-cover"
              src={BRAND_FILM.src}
              poster={BRAND_FILM.poster}
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
              onLoadedMetadata={(e) => setTime({ current: 0, duration: e.currentTarget.duration })}
              onTimeUpdate={(e) => {
                if (!scrubbing.current) setTime({ current: e.currentTarget.currentTime, duration: e.currentTarget.duration });
              }}
              onClick={togglePlay}
              aria-label="YMG Legal brand film"
            />

            {/* Centre call to watch with sound, until sound is on */}
            {muted && (
              <button
                type="button"
                onClick={watchWithSound}
                className="absolute left-3 top-3 flex items-center gap-3 rounded-full border border-white/25 bg-[rgba(22,22,24,0.55)] py-1.5 pl-1.5 pr-4 text-[0.88rem] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-md transition-[transform,background-color] duration-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] hover:scale-[1.04] hover:bg-[rgba(22,22,24,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC982] sm:left-4 sm:top-4"
              >
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(145deg,#f6dca0,#c99a45)] text-[#1f2023] shadow-[0_4px_12px_rgba(201,154,69,0.55),inset_0_1px_0_rgba(255,255,255,0.6)]">
                  <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#D8B26B] opacity-60 motion-safe:animate-ping" />
                  <Play size={15} fill="currentColor" className="relative translate-x-[1px]" aria-hidden="true" />
                </span>
                <span className="text-left leading-tight">
                  Watch with sound
                  <span className="block text-[0.75rem] font-medium text-white/70">Meet YMG Legal · {formatTime(time.duration || 82)}</span>
                </span>
              </button>
            )}

            {/* Control bar */}
            <div
              className={`absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-full border border-white/20 bg-[rgba(22,22,24,0.55)] px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-md transition-[transform,opacity] duration-300 sm:inset-x-5 sm:bottom-4 ${
                muted ? "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100" : ""
              }`}
            >
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause brand film" : "Play brand film"}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#f6dca0,#c99a45)] text-[#1f2023] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {playing ? <Pause size={14} fill="currentColor" aria-hidden="true" /> : <Play size={14} fill="currentColor" className="translate-x-[1px]" aria-hidden="true" />}
              </button>
              <div
                role="slider"
                tabIndex={0}
                aria-label="Seek"
                aria-valuemin={0}
                aria-valuemax={Math.round(time.duration)}
                aria-valuenow={Math.round(time.current)}
                aria-valuetext={`${formatTime(time.current)} of ${formatTime(time.duration)}`}
                onPointerDown={(e) => {
                  scrubbing.current = true;
                  e.currentTarget.setPointerCapture(e.pointerId);
                  seekTo(e.clientX, e.currentTarget);
                }}
                onPointerMove={(e) => {
                  if (scrubbing.current) seekTo(e.clientX, e.currentTarget);
                }}
                onPointerUp={(e) => {
                  scrubbing.current = false;
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }}
                onPointerCancel={() => {
                  scrubbing.current = false;
                }}
                onKeyDown={(e) => {
                  const video = videoRef.current;
                  if (!video) return;
                  if (e.key === "ArrowRight") video.currentTime = Math.min(video.duration, video.currentTime + 5);
                  if (e.key === "ArrowLeft") video.currentTime = Math.max(0, video.currentTime - 5);
                }}
                className="group/track relative flex h-6 min-w-0 flex-1 cursor-pointer touch-none items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC982]"
              >
                <span className="relative h-1.5 w-full rounded-full bg-white/30">
                  <span className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#c99a45,#EBC982)]" style={{ width: `${progress * 100}%` }} />
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_3px_rgba(235,201,130,0.45)] transition-transform group-hover/track:scale-110"
                    style={{ left: `${progress * 100}%` }}
                  />
                </span>
              </div>
              <span className="shrink-0 text-[0.75rem] tabular-nums text-white/80">
                {formatTime(time.current)} / {formatTime(time.duration)}
              </span>
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Turn sound on" : "Turn sound off"}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {muted ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Floor reflection */}
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-8 left-[10%] right-[10%] h-10 rounded-[50%] bg-[radial-gradient(closest-side,rgba(82,64,34,0.28),transparent)] blur-md dark:bg-[radial-gradient(closest-side,rgba(0,0,0,0.6),transparent)]" />
    </div>
  );
}
