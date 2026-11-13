"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/*
 * Counts the number inside a figure like "15+ years", "3.1×", "−38%" or "<60s" up from zero the first
 * time it scrolls into view. Text without a single plain number ("24/7", "Las Vegas, NV") is shown as is.
 * Screen readers always get the final value.
 */
export default function CountText({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const match = /^(\D*?)(\d+(?:\.\d+)?)([^]*)$/.exec(value);
  const countable = Boolean(match) && !match![3].startsWith("/");
  const target = countable ? Number(match![2]) : 0;
  const decimals = countable ? (match![2].split(".")[1] ?? "").length : 0;
  const [n, setN] = useState<number | null>(null);
  const armed = useRef(false);

  // Server HTML carries the real value; reset to zero only once hydrated and still off screen.
  useEffect(() => {
    const el = ref.current;
    if (countable && !reduce && el && el.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      setN(0);
    }
  }, [countable, reduce]);

  useEffect(() => {
    if (!armed.current || !inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else armed.current = false;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  if (!countable) return <span>{value}</span>;
  const shown = n ?? target;
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {match![1]}
        {shown.toFixed(decimals)}
        {match![3]}
      </span>
    </span>
  );
}
