"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealDirection = "left" | "right" | "up";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -46, y: 0 }
      : direction === "right"
        ? { x: 46, y: 0 }
        : { x: 0, y: 34 };

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, ...offset, scale: 0.97, filter: "blur(8px)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
