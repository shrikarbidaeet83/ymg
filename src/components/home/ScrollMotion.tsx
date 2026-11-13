"use client";

import { useEffect } from "react";

/*
 * One scroll-motion layer for the whole home page, so every section enters the same way.
 *
 *   data-reveal            the element rises and fades in once, the first time it scrolls into view
 *   data-reveal-group      its direct children reveal one after another (staggered)
 *   data-reveal-delay="n"  extra delay in ms
 *   data-parallax="0.12"   decorative layer that drifts at that fraction of the scroll speed
 *
 * The page renders fully visible without JS. Hiding starts only once this runs, and anything already
 * on screen at that moment is marked visible first, so nothing flashes. The look lives in globals.css.
 */
export default function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Group children are revealed as individual items with a stepped delay.
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
        el.style.setProperty("--reveal-delay", `${Number(group.dataset.revealDelay ?? 0) + Math.min(i, 8) * 70}ms`);
      });
    });
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    items.forEach((el) => {
      if (el.dataset.revealDelay && !el.style.getPropertyValue("--reveal-delay")) el.style.setProperty("--reveal-delay", `${el.dataset.revealDelay}ms`);
      if (el.getBoundingClientRect().top < window.innerHeight) el.setAttribute("data-visible", "");
    });
    root.classList.add("ymg-motion");

    // Once revealed, drop the attributes so the element's own hover transitions apply again.
    const timers: number[] = [];
    const settle = (el: HTMLElement, after: number) =>
      timers.push(window.setTimeout(() => el.removeAttribute("data-reveal"), after + parseFloat(el.style.getPropertyValue("--reveal-delay") || "0")));

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.setAttribute("data-visible", "");
          settle(el, 1000);
          io.unobserve(el);
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    items.forEach((el) => (el.hasAttribute("data-visible") ? settle(el, 0) : io.observe(el)));

    // Parallax: transform only, and only for layers near the viewport.
    const layers = reduce ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      layers.forEach((el) => {
        const box = (el.parentElement ?? el).getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) return;
        const offset = (box.top + box.height / 2 - vh / 2) * Number(el.dataset.parallax);
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    if (layers.length) {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("ymg-motion");
    };
  }, []);

  return null;
}
