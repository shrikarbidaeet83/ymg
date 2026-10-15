import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { Policy, PolicyBlock } from "@/lib/policies";

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
          <strong key={i} className="font-semibold text-[#2f3336] dark:text-[#e8dcc4]">
            {renderInline(text.slice(i + 2, end))}
          </strong>
        );
        i = end + 2;
        continue;
      }
    }

    if (text[i] === "[") {
      const end = closingBracket(text, i);
      if (end > i) {
        const label = text.slice(i + 1, end);
        const href = text[end + 1] === "(" ? text.slice(end + 2, text.indexOf(")", end)) : null;
        flush();

        if (href) {
          const className = "font-medium text-[#8a6424] underline underline-offset-2 hover:text-[#5f4416] dark:text-[#D8B26B]";
          nodes.push(
            href.startsWith("/") ? (
              <Link key={i} href={href} className={className}>
                {label}
              </Link>
            ) : (
              <a key={i} href={href} className={className}>
                {label}
              </a>
            )
          );
          i = text.indexOf(")", end) + 1;
        } else {
          nodes.push(
            <mark key={i} className="rounded-[3px] bg-[#f4dfb7] px-1 text-[#5f4416] dark:bg-[#D8B26B]/25 dark:text-[#e8dcc4]">
              [{label}]
            </mark>
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
    case "heading":
      return (
        <h2
          key={index}
          id={block.id}
          className="mt-12 scroll-mt-28 font-heading text-[clamp(1.4rem,2.4vw,1.75rem)] font-normal leading-tight text-[#3d4145] first:mt-0 dark:text-[#D8B26B]"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-4">
          {renderInline(block.text)}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-6 marker:text-[#b38a43]">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={index} className="mt-5 overflow-x-auto rounded-[6px] border border-[#dfbd78]/70">
          <table className="w-full min-w-[560px] border-collapse text-left text-[0.92rem]">
            <thead className="bg-[#f4dfb7]/60 dark:bg-[#D8B26B]/10">
              <tr>
                {block.header.map((cell, cellIndex) => (
                  <th key={cellIndex} scope="col" className="px-4 py-3 font-semibold text-[#3d4145] dark:text-[#e8dcc4]">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-[#dfbd78]/50">
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
  const headings = policy.blocks.filter((block) => block.type === "heading");

  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#55585a]">
      <div className="ymg-section-padding-x mx-auto max-w-[1120px] pb-24 pt-[128px] lg:pt-[150px] print:pt-0">
        <div className="mx-auto max-w-[760px] border-b border-[#dfbd78]/70 pb-8 lg:mx-0 lg:ml-[260px]">
          <h1 className="font-heading text-[clamp(2.1rem,4.4vw,3.25rem)] font-normal leading-tight text-[#3d4145] dark:text-[#D8B26B]">
            {policy.title}
          </h1>
          <p className="mt-4 text-[0.95rem]">Last updated: {renderInline(policy.updated)}</p>
        </div>

        <div className="mt-10 lg:grid lg:grid-cols-[220px_minmax(0,760px)] lg:gap-10">
          {headings.length > 1 && (
            <nav aria-label="On this page" className="ymg-policy-toc mb-10 lg:mb-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#9b7531]">On this page</p>
                <ol className="mt-3 space-y-2 border-l border-[#dfbd78]/70 text-[0.85rem]">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="-ml-px block border-l border-transparent pl-3 leading-snug transition-colors hover:border-[#9b7531] hover:text-[#3d4145] dark:hover:text-[#D8B26B]"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          )}

          {/* A div, not <article>: globals.css boxes every dark-mode <article> as a card. */}
          <div
            data-policy-version={policy.version}
            className="ymg-policy-body mx-auto max-w-[760px] text-[1.05rem] leading-[1.65] lg:col-start-2 lg:mx-0"
          >
            {policy.blocks.map((block, index) => (
              <Fragment key={index}>{renderBlock(block, index)}</Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
