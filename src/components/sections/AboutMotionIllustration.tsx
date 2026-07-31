"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const revealEase = [0.22, 1, 0.36, 1] as const;

const layers = [
  {
    clipPath: "polygon(0 0, 100% 0, 100% 44%, 0 44%)",
    x: [0, 1.5, 0],
    y: [0, -3, 0],
    duration: 7.2,
  },
  {
    clipPath: "polygon(0 41%, 39% 41%, 40% 100%, 0 100%)",
    x: [0, -1.5, 0],
    y: [0, -2.5, 0],
    duration: 6.6,
  },
  {
    clipPath: "polygon(35% 39%, 72% 39%, 73% 100%, 36% 100%)",
    x: [0, 1.2, 0],
    y: [0, -2, 0],
    duration: 5.2,
  },
  {
    clipPath: "polygon(68% 40%, 100% 40%, 100% 100%, 69% 100%)",
    x: [0, -1, 0],
    y: [0, -2.5, 0],
    duration: 6,
  },
];

export default function AboutMotionIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      aria-label="YMG Legal team collaborating with attorneys"
      className="relative mx-auto aspect-[3/2] w-full max-w-[690px]"
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.965, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 1.05, ease: revealEase }}
    >
      {layers.map((layer, index) => (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          key={layer.clipPath}
          style={{ clipPath: layer.clipPath }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: layer.x,
                  y: layer.y,
                }
          }
          transition={{
            duration: layer.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src="/about-motion.webp"
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 1023px) 92vw, 52vw"
            className="object-contain dark:hidden"
          />
          <Image
            src="/about-motion-dark.webp"
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 1023px) 92vw, 52vw"
            className="hidden object-contain dark:block"
          />
        </motion.div>
      ))}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[47%] top-[59%] h-[16%] w-[18%] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.025, 1],
                opacity: [0.08, 0.16, 0.08],
              }
        }
        transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
        style={{
          background: "radial-gradient(circle, rgba(216,178,107,.42) 0%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />
    </motion.figure>
  );
}
