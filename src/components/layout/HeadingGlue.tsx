"use client";

import { useEffect } from "react";

// Lines of a heading, as word counts, measured from the rendered layout.
function lineWordCounts(heading: HTMLElement) {
  const tops: number[] = [];
  const counts: number[] = [];
  const tolerance = parseFloat(getComputedStyle(heading).fontSize) * 0.5;
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
    const re = /\S+/g;
    for (let m = re.exec(node.data); m; m = re.exec(node.data)) {
      if (/^[.,;:!?]+$/.test(m[0])) continue; // punctuation in its own span belongs to the word before it
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      const rect = range.getClientRects()[0];
      if (!rect) continue;
      const line = tops.findIndex((top) => Math.abs(top - rect.top) < tolerance);
      if (line === -1) {
        tops.push(rect.top);
        counts.push(1);
      } else counts[line]++;
    }
  }
  return counts;
}

// Lone-word lines (a lone last line counts double); Infinity when the text overflows.
function score(heading: HTMLElement) {
  if (heading.scrollWidth > heading.clientWidth + 1) return Infinity;
  const counts = lineWordCounts(heading);
  if (counts.length < 2) return 0;
  return counts.filter((c) => c === 1).length + (counts[counts.length - 1] === 1 ? 1 : 0);
}

// Joins the last two words with a no-break space; returns an undo, or null if there is nothing to join.
function glueLastPair(heading: HTMLElement): (() => void) | null {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n as Text);
  const text = nodes.map((n) => n.data).join("").trimEnd();
  const at = text.search(/[ \t\n]\S+$/);
  if (at < 0) return null;
  let offset = at;
  for (const node of nodes) {
    if (offset < node.data.length) {
      const original = node.data;
      node.data = original.slice(0, offset) + " " + original.slice(offset + 1);
      return () => {
        node.data = original;
      };
    }
    offset -= node.data.length;
  }
  return null;
}

// Headline rule: no line may hold a single word. Try narrower boxes (and, failing that, slightly
// smaller type), keep the layout with the fewest lone words, and as a last resort bind the final pair.
function fit(heading: HTMLElement) {
  heading.style.maxWidth = "";
  heading.style.fontSize = "";
  const words = (heading.textContent ?? "").trim().split(/\s+/).filter((w) => !/^[.,;:!?]+$/.test(w));
  if (words.length < 3 || score(heading) === 0) return;

  const width = heading.getBoundingClientRect().width;
  const baseSize = parseFloat(getComputedStyle(heading).fontSize);
  const search = () => {
    let best = { s: score(heading), w: "", f: "" };
    for (const scale of [1, 0.94, 0.88]) {
      const f = scale === 1 ? "" : `${baseSize * scale}px`;
      heading.style.fontSize = f;
      for (let w = width; w >= width * 0.55 && best.s > 0; w -= width * 0.03) {
        heading.style.maxWidth = `${Math.round(w)}px`;
        const s = score(heading);
        if (s < best.s) best = { s, w: heading.style.maxWidth, f };
      }
      if (best.s === 0) break;
    }
    heading.style.maxWidth = best.w;
    heading.style.fontSize = best.f;
    return best.s;
  };

  if (search() === 0) return;
  const counts = lineWordCounts(heading);
  if (counts[counts.length - 1] !== 1) return;
  const undo = glueLastPair(heading);
  if (!undo) return;
  heading.style.maxWidth = "";
  heading.style.fontSize = "";
  if (search() === Infinity) {
    undo(); // the joined pair is wider than the screen
    heading.style.maxWidth = "";
    heading.style.fontSize = "";
    search();
  }
}

export default function HeadingGlue() {
  useEffect(() => {
    let timer = 0;
    // Each heading's own size is watched too, so a late font swap triggers a refit.
    const sizes = new ResizeObserver(() => run());
    const run = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        document.querySelectorAll<HTMLElement>("h1, h2, h3").forEach((h) => {
          if (parseFloat(getComputedStyle(h).fontSize) < 22) return;
          fit(h);
          sizes.observe(h);
        });
      }, 120);
    };
    document.fonts?.ready.then(run);
    document.fonts?.addEventListener("loadingdone", run);
    run();
    const observer = new MutationObserver(run);
    observer.observe(document.body, { childList: true, subtree: true });
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastWidth) return; // phones fire resize when the address bar hides
      lastWidth = window.innerWidth;
      run();
    };
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      sizes.disconnect();
      document.fonts?.removeEventListener("loadingdone", run);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
