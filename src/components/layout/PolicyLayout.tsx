import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { Policy, PolicyBlock } from "@/lib/policies";
import { ArrowUpRight, Mail } from "lucide-react";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import PolicyToc from "@/components/layout/PolicyToc";

// One plain line under each title, so a visitor knows what the page covers before reading it.
const summaries: Record<string, string> = {
  "privacy-policy":
    "What we collect, why we collect it, who we share it with, and the choices you have.",
  terms: "The rules for using the YMG Legal website and services.",
  "sms-terms": "How our text messages work and how to stop them at any time.",
  "cookie-policy":
    "The cookies and similar tools on this site, and how to control them.",
  disclaimer:
    "YMG Legal is a marketing and support company, not a law firm. Here is what that means for you.",
  accessibility:
    "Our commitment to a site everyone can use, and how to tell us when something gets in the way.",
  compliance:
    "How we handle consent, TCPA and advertising rules across every campaign.",
};

const related = [
  { slug: "privacy-policy", label: "Privacy Policy", href: "/privacy-policy" },
  { slug: "terms", label: "Terms of Use", href: "/terms" },
  { slug: "sms-terms", label: "SMS Terms", href: "/sms-terms" },
  { slug: "cookie-policy", label: "Cookie Policy", href: "/cookie-policy" },
  { slug: "disclaimer", label: "Disclaimer", href: "/disclaimer" },
  { slug: "accessibility", label: "Accessibility", href: "/accessibility" },
  { slug: "compliance", label: "Compliance", href: "/compliance" },
];

// Finds the "]" that closes the "[" at `start`, allowing nested brackets such as
// "[Insert retention periods, e.g., consumer leads [X] years]".
function closingBracket(text: string, start: number) {
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "[") depth++;
    if (text[i] === "]" && --depth === 0) return i;
  }
  return -1;
}

// Inline Markdown: **bold**, [text](href) links, and bare [placeholders] that YMG or counsel
// still has to fill in. Placeholders are highlighted so they can't ship unnoticed.
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let buffer = "";
  let i = 0;

  const flush = () => {
    if (buffer) nodes.push(buffer);
    buffer = "";
  };

  while (i < text.length) {
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end > i) {
        flush();
        nodes.push(
          <strong key={i} className="font-semibold text-[#0B231D]">
            {renderInline(text.slice(i + 2, end))}
          </strong>,
        );
        i = end + 2;
        continue;
      }
    }

    if (text[i] === "[") {
      const end = closingBracket(text, i);
      if (end > i) {
        const label = text.slice(i + 1, end);
        const href =
          text[end + 1] === "("
            ? text.slice(end + 2, text.indexOf(")", end))
            : null;
        flush();

        if (href) {
          const className =
            "font-medium text-[#0B231D] underline decoration-[#C8A24E] decoration-2 underline-offset-4 hover:text-[#8C6B22]";
          nodes.push(
            href.startsWith("/") ? (
              <Link key={i} href={href} className={className}>
                {label}
              </Link>
            ) : (
              <a key={i} href={href} className={className}>
                {label}
              </a>
            ),
          );
          i = text.indexOf(")", end) + 1;
        } else {
          nodes.push(
            <mark
              key={i}
              className="rounded-[4px] bg-[#D6B263]/20 px-1 text-[#5A4413] outline-dashed outline-1 outline-[#C8A24E]/60"
            >
              [{label}]
            </mark>,
          );
          i = end + 1;
        }
        continue;
      }
    }

    buffer += text[i];
    i++;
  }

  flush();
  return nodes;
}

function renderBlock(block: PolicyBlock, index: number) {
  switch (block.type) {
    case "heading": {
      // "3. How we use information": the number set apart in brass.
      const m = block.text.match(/^(\d+)\.\s+(.*)$/);
      return (
        <h2
          key={index}
          id={block.id}
          className="mt-16 flex scroll-mt-28 items-baseline gap-4 border-t border-[#0B231D]/10 pt-10 text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal leading-tight text-[#0B231D] first:mt-0 first:border-t-0 first:pt-0"
        >
          {m ? (
            <>
              <span className="w-10 shrink-0 text-[0.8em] text-[#8C6B22]">
                {m[1].padStart(2, "0")}
              </span>
              <span>{m[2]}</span>
            </>
          ) : (
            block.text
          )}
        </h2>
      );
    }
    case "paragraph":
      return (
        <p key={index} className="mt-5">
          {renderInline(block.text)}
        </p>
      );
    case "list":
      return (
        <ul
          key={index}
          className="mt-5 space-y-3 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.72em] [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:rounded-full [&>li]:before:bg-[#1E9E6A] [&>li]:before:content-['']"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div
          key={index}
          className="mt-5 overflow-x-auto rounded-[14px] border border-[#0B231D]/12"
        >
          <table className="w-full min-w-[560px] border-collapse text-left text-[0.92rem]">
            <thead className="bg-[#F0F4F1]">
              <tr>
                {block.header.map((cell, cellIndex) => (
                  <th
                    key={cellIndex}
                    scope="col"
                    className="px-4 py-3 font-semibold text-[#0B231D]"
                  >
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-[#0B231D]/10">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function PolicyLayout({ policy }: { policy: Policy }) {
  const headings = policy.blocks.flatMap((block) =>
    block.type === "heading" ? [{ id: block.id, text: block.text }] : [],
  );
  const words = policy.blocks
    .map((b) =>
      b.type === "list"
        ? b.items.join(" ")
        : b.type === "table"
          ? b.rows.flat().join(" ")
          : b.text,
    )
    .join(" ")
    .split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  const others = related.filter((r) => r.slug !== policy.slug);

  return (
    <div className="ymg-site">
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-16 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-20 print:bg-white print:pt-0 print:text-black">
        <HeroBackdrop src="/images/services/firm-support.jpg" />
        <div className="mx-auto max-w-[1200px]">
          <nav
            aria-label="Breadcrumb"
            className="text-[0.88rem] text-[#F5F1E8]/60"
          >
            <Link href="/" className="inline-block py-2 hover:text-[#D6B263]">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className="text-[#F5F1E8]/85">Legal</span>
          </nav>
          <h1 className="mt-6 max-w-[22ch] text-[clamp(2.18rem,4.32vw,3.84rem)] leading-[1] tracking-[-0.02em]">
            {policy.title}
          </h1>
          {summaries[policy.slug] && (
            <p className="mt-6 max-w-[38rem] text-[1.15rem] leading-[1.6] text-[#C9C3B4]">
              {summaries[policy.slug]}
            </p>
          )}
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#F5F1E8]/12 pt-6 text-[0.95rem]">
            <div>
              <dt className="text-[#B9B2A3]">Last updated</dt>
              <dd className="mt-1 font-semibold text-[#F5F1E8]">
                {renderInline(policy.updated)}
              </dd>
            </div>
            <div>
              <dt className="text-[#B9B2A3]">Reading time</dt>
              <dd className="mt-1 font-semibold text-[#F5F1E8]">
                About {minutes} min
              </dd>
            </div>
            <div>
              <dt className="text-[#B9B2A3]">Sections</dt>
              <dd className="mt-1 font-semibold text-[#F5F1E8]">
                {headings.length}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="bg-white px-5 pb-24 pt-14 text-[#2E3A35] sm:px-10 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-[1200px] lg:grid lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          {headings.length > 1 && (
            <div className="mb-12 lg:mb-0">
              <PolicyToc headings={headings} />
            </div>
          )}

          {/* A div, not <article>: globals.css boxes every dark-mode <article> as a card. */}
          <div
            data-policy-version={policy.version}
            className="ymg-policy-body max-w-[760px] text-[1.08rem] leading-[1.75] lg:col-start-2"
          >
            {policy.blocks.map((block, index) => (
              <Fragment key={index}>{renderBlock(block, index)}</Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Questions, then the other legal pages */}
      <section className="bg-[#F0F4F1] px-5 py-20 sm:px-10 lg:px-12 lg:py-24 print:hidden">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="max-w-[19ch] text-[clamp(1.9rem,3.04vw,2.56rem)] leading-[1.05] tracking-[-0.015em] text-[#0B231D]">
              Questions about{" "}
              <span className="text-[#8C6B22]">this policy?</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-[1.06rem] leading-[1.6] text-[#4E5A54]">
              Write or call us. A real person reads every message and replies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:privacy@ymg-legal.com"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#0B231D] px-6 text-[1rem] font-semibold text-[#F5F1E8] transition-colors hover:bg-[#102E26]"
              >
                <Mail size={18} aria-hidden="true" /> privacy@ymg-legal.com
              </a>
            </div>
          </div>
          <div>
            <p className="text-[1.05rem] font-semibold text-[#4E5A54]">
              Other legal pages
            </p>
            <ul className="mt-4 border-t border-[#0B231D]/12">
              {others.map(({ label, href }) => (
                <li key={href} className="border-b border-[#0B231D]/12">
                  <Link
                    href={href}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span className="ymg-num text-[1.45rem] leading-tight text-[#0B231D] transition-colors group-hover:text-[#8C6B22]">
                      {label}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0B231D] transition-colors group-hover:bg-[#0B231D] group-hover:text-[#D6B263]">
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
