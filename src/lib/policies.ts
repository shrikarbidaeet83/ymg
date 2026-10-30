import fs from "node:fs";
import path from "node:path";

// Policy text lives in src/content/policies/*.md so counsel edits don't touch component code.
// The parser handles only what those files use: front matter, ## headings, paragraphs,
// "-" lists and pipe tables. Inline formatting is handled by PolicyLayout.

export type PolicySlug =
  | "privacy-policy"
  | "terms"
  | "sms-terms"
  | "cookie-policy"
  | "disclaimer"
  | "accessibility"
  | "compliance";

export type PolicyBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; header: string[]; rows: string[][] };

export type Policy = {
  slug: PolicySlug;
  title: string;
  updated: string;
  version: string;
  blocks: PolicyBlock[];
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function splitRow(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseBlocks(body: string): PolicyBlock[] {
  const blocks: PolicyBlock[] = [];
  const lines = body.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      const match = line.slice(3).match(/^(.*?)\s*\{#([\w-]+)\}$/);
      const text = match ? match[1] : line.slice(3);
      blocks.push({ type: "heading", id: match ? match[2] : slugify(text), text });
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = splitRow(lines[i]);
        if (!cells.every((cell) => /^:?-+:?$/.test(cell))) rows.push(cells);
        i++;
      }
      const [header = [], ...rest] = rows;
      blocks.push({ type: "table", header, rows: rest });
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(## |- |\|)/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

export function getPolicy(slug: PolicySlug): Policy {
  const raw = fs.readFileSync(path.join(process.cwd(), "src", "content", "policies", `${slug}.md`), "utf8");
  const frontMatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const meta: Record<string, string> = {};

  for (const line of frontMatter?.[1].split(/\r?\n/) ?? []) {
    const separator = line.indexOf(":");
    if (separator > 0) meta[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }

  return {
    slug,
    title: meta.title ?? slug,
    updated: meta.updated ?? "",
    version: meta.version ?? "",
    blocks: parseBlocks(frontMatter ? raw.slice(frontMatter[0].length) : raw),
  };
}
