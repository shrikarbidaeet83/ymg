"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorksFloatingIcon({
  src,
  className,
  delay,
}: {
  src: string;
  className: string;
  delay: number;
}) {
  return (
    <div className={`pointer-events-none absolute z-0 flex h-[42px] w-[42px] items-center justify-center opacity-95 ${className}`}>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.4, delay, ease: [0.45, 0, 0.55, 1], repeat: Infinity }}
        className="h-full w-full [will-change:transform]"
      >
        <Image src={src} alt="" width={42} height={42} className="h-full w-full object-contain" />
      </motion.div>
    </div>
  );
}
