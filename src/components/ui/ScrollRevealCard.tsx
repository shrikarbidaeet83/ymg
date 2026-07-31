"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function ScrollRevealCard({
  children,
  className,
  index = 0,
}: ScrollRevealCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 34, scale: 0.96, filter: "blur(8px)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.72,
        delay: index * 0.1,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.article>
  );
}
