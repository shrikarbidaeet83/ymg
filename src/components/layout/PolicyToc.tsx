"use client";

import { useEffect, useState } from "react";

/*
 * The policy's sections, with the one being read marked in green and a reading-progress line.
 * Wide screens keep it beside the text; phones get it as a closed "On this page" list.
 */
export default function PolicyToc({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  const [active, setActive] = useState(headings[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current = els[0]?.id ?? "";
      for (const el of els)
        if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
      const body = document.querySelector<HTMLElement>(".ymg-policy-body");
      if (body) {
        const r = body.getBoundingClientRect();
        const p = (line - r.top) / Math.max(r.height - line, 1);
        setProgress(Math.min(1, Math.max(0, p)));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  const list = (
    <ol className="relative mt-4 space-y-1 text-[0.94rem]">
      <span
        aria-hidden="true"
        className="absolute bottom-1 left-0 top-1 w-[2px] rounded-full bg-[#0B231D]/10"
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-1 w-[2px] origin-top rounded-full bg-[#1E9E6A] transition-[height] duration-200"
        style={{ height: `calc(${progress * 100}% - 0.5rem)` }}
      />
      {headings.map(({ id, text }) => {
        const on = id === active;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={on ? "location" : undefined}
              className={`block rounded-r-[10px] py-1.5 pl-4 pr-2 leading-snug transition-colors ${
                on
                  ? "bg-[#E3F4EC] font-semibold text-[#0B231D]"
                  : "text-[#4E5A54] hover:text-[#0B231D]"
              }`}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="On this page" className="ymg-policy-toc">
      <details className="rounded-[18px] border border-[#0B231D]/12 bg-[#F0F4F1] px-5 py-4 lg:hidden">
        <summary className="cursor-pointer text-[1rem] font-semibold text-[#0B231D]">
          On this page
        </summary>
        {list}
      </details>
      <div className="hidden lg:sticky lg:top-28 lg:block">
        <p className="text-[1rem] font-semibold text-[#0B231D]">On this page</p>
        {list}
      </div>
    </nav>
  );
}
