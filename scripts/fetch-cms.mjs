#!/usr/bin/env node
/*
 * Pulls this site's PUBLISHED content from the YMG CMS (cms.ymg-legal.com)
 * into src/data/cms.generated.json before every build (npm "prebuild"),
 * so all CMS content is baked into the static site.
 *
 *   CMS_URL         e.g. https://cms.ymg-legal.com
 *   CMS_READ_TOKEN  this site's read token (CMS -> Sites page, Super Admin)
 *   CMS_SITE        optional override of the site code below
 *
 * - Neither env var set  -> writes an empty file; the site uses only its
 *   own hard-coded content (local dev, CI without secrets).
 * - Set but CMS fails    -> exits 1 and FAILS THE BUILD, so Amplify keeps
 *   the last good deploy instead of publishing a site missing content.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = process.env.CMS_SITE || "ymg";
const TYPES = ["blog", "page", "careers", "testimonials", "faqs"];
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "cms.generated.json");

const empty = { enabled: false, site: SITE, themeCss: "", blog: [], page: [], careers: [], testimonials: [], faqs: [] };

function write(data) {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, `${JSON.stringify(data, null, 2)}\n`);
}

const base = (process.env.CMS_URL || "").replace(/\/$/, "");
const token = process.env.CMS_READ_TOKEN || "";

if (!base || !token) {
  write(empty);
  console.log("[cms] CMS_URL / CMS_READ_TOKEN not set: using the site's built-in content only.");
  process.exit(0);
}

async function get(path, as = "json") {
  const res = await fetch(`${base}/api/public/${SITE}/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
  return as === "text" ? res.text() : res.json();
}

try {
  const out = { ...empty, enabled: true, fetchedAt: new Date().toISOString() };
  out.themeCss = await get("theme", "text");
  for (const type of TYPES) {
    const body = await get(`${type}?html=1`);
    out[type] = body.items ?? [];
  }
  write(out);
  console.log(`[cms] ${SITE}: ${TYPES.map((t) => `${out[t].length} ${t}`).join(", ")}`);
} catch (err) {
  console.error(`[cms] Could not load content from ${base}: ${err.message}`);
  console.error("[cms] Failing the build so the live site keeps its last good version.");
  process.exit(1);
}
