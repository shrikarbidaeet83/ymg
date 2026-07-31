"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "soft";

const offsets: Record<RevealDirection, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 34, scale: 1 },
  down: { x: 0, y: -30, scale: 1 },
  left: { x: -42, y: 0, scale: 1 },
  right: { x: 42, y: 0, scale: 1 },
  zoom: { x: 0, y: 10, scale: 0.9 },
  soft: { x: 0, y: 16, scale: 0.975 },
};

export default function MotionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.78,
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
              scale: offset.scale,
              filter: "blur(7px)",
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
