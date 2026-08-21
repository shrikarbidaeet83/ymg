# Architecture

## What this site is

The agency's own marketing site. It sells YMG's services — SEO, paid search,
case acquisition, answering, website design — to law firms.

That makes it structurally different from the other two sites in this org.
Those exist to capture consumer leads and are wired end to end into `core-api`,
MongoDB and the CRM. This one is a brochure. A very well-produced brochure with
a lot of motion work in it, but a brochure.

---

## Stack

| Thing | Choice |
|---|---|
| Framework | Next.js 16, App Router |
| Language | TypeScript 5 |
| Styling | Tailwind 4, shadcn-style token layer |
| Animation | GSAP 3, Framer Motion 12, Lenis smooth scroll |
| Components | Base UI (`@base-ui/react`), `lucide-react` |
| Utilities | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Fonts | Afacad Flux (display) + Manrope (body), via `next/font` |

`package.json` pins overrides for `postcss` and `sharp`, which is worth
noticing if a dependency bump behaves oddly.

The animation stack is the notable part. Three libraries doing overlapping
jobs — GSAP for timeline work, Framer Motion for component transitions, Lenis
for scroll smoothing. It is heavier than the other repos by a wide margin, and
it is what gives the site its feel.

### Next 16

Same caveats as the CIH repo. `params` is a Promise, `middleware.ts` is now
`proxy.ts`, page components are server components unless marked `'use client'`.
When something does not behave the way you expect, read
`node_modules/next/dist/docs/` rather than working from memory.

---

## Routes

Flat App Router structure, no route groups.

| Route | Notes |
|---|---|
| `/` | Home |
| `/about` | |
| `/how-it-works` | |
| `/plans` | Pricing |
| `/practice-areas` | |
| `/faqs` | |
| `/contact` | Contains the non-submitting form + booking widget |
| `/blog` | Listing, from `src/data/blog.ts` |
| `/blog/[slug]` | Single post |
| `/services` | Index |
| `/services/seo` | |
| `/services/ai-search` | |
| `/services/case-acquisition` | |
| `/services/digital-marketing` | |
| `/services/google-search-ads` | |
| `/services/legal-answering` | |
| `/services/local-services-ads` | |
| `/services/meta-ads` | |
| `/services/organic-social-media` | |
| `/services/website-design` | |
| `/privacy-policy` | |
| `/terms` | |

Eleven service pages under `/services`. Each is its own folder with its own
`page.tsx`, composed from section components. Adding a twelfth is a matter of
copying the closest existing one and adding it to the nav.

---

## Pages are thin, sections do the work

This is the one structural convention that matters.

`src/components/sections/` holds around 60 components, and a page is mostly an
ordered list of them. Look at the naming and the pattern is obvious:

```
AboutCoreValuesSection.tsx      AboutJourneySection.tsx
AboutMissionVisionSection.tsx   AboutProcessSection.tsx
AboutWhatWeDoSection.tsx        AboutMotionIllustration.tsx

AiSearchIntroSection.tsx        AiSearchBenefitsSection.tsx
AiSearchMattersSection.tsx      AiSearchOptimizeSection.tsx
AiSearchProcessSection.tsx

LocalServicesAdsIntroSection.tsx     LocalServicesAdsBenefitsSection.tsx
LocalServicesAdsMatterSection.tsx    LocalServicesAdsManageSection.tsx
LocalServicesAdsProcessSection.tsx
```

Sections are prefixed with the page they belong to and named for what they
contain. Most are used exactly once. That is fine — the point is that a page
file stays readable and a section can be reordered or dropped without
untangling anything.

Genuinely shared pieces live in `components/ui/`:

| File | Role |
|---|---|
| `button.tsx` | CVA-based button variants |
| `logo.tsx` | |
| `MotionReveal.tsx` | Framer Motion reveal wrapper |
| `ScrollReveal.tsx` | Scroll-triggered reveal |
| `ScrollRevealCard.tsx` | Card variant of the same |

And layout in `components/layout/`: `Navbar`, `Footer`, `SmoothScroll`.

`SmoothScroll` wraps the app with Lenis. It affects every scroll interaction on
the site, so if scrolling feels wrong somewhere, start there rather than with
the component you were looking at.

---

## The contact form does not submit

Worth stating plainly because it looks like a bug and is not one you should
"fix" without asking.

`src/components/sections/ContactConversationContent.tsx` contains:

```tsx
<form className="mt-4 grid gap-2 lg:mt-5 lg:gap-3">
  …
</form>
```

No `onSubmit`. No `action`. No handler anywhere in the file. Nothing in the
repo posts to anything — a search for `fetch(` across `src/` returns nothing.

The actual conversion path is a GoHighLevel booking widget, embedded as an
iframe in `src/components/sections/LeadConnectorBookingCalendar.tsx`:

```tsx
const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/qkkfpsTMiOAVsIxG3WrZ";
```

That widget handles scheduling and lands the enquiry in GoHighLevel directly,
bypassing `core-api` entirely.

So: the form is presentational. If someone wants it working, that is a real
piece of work — a backend endpoint, validation, CRM push — and it should be a
deliberate decision, not a drive-by fix.

---

## Blog

Static. `src/data/blog.ts` exports a typed array:

```ts
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // pre-formatted display string, e.g. "May 12, 2026"
  category: string;
  readTime: string;    // hand-written, e.g. "4 min read"
  body: string;        // plain text, \n\n between paragraphs
};
```

No API, no CMS, no database. `body` is plain text with escaped newlines rather
than HTML, which sidesteps the `dangerouslySetInnerHTML` question the other two
sites both have open.

Adding a post means adding an object to the array. `date` and `readTime` are
written by hand — nothing computes them.

This is, honestly, the right call for a site with a handful of articles. The
other two repos have half-built API-backed blogs that currently render nothing.

---

## No backend, no environment

There are zero `process.env` references in `src/`. No `.env`, no `.env.example`,
nothing to configure. `next.config.ts` is five lines:

```ts
const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};
```

No custom headers, no CSP, no image `remotePatterns`, no rewrites.

**That means no Content-Security-Policy on this site**, unlike AAA and CIH
which both set one. Not necessarily wrong for a site with no forms and no user
input, but it is a difference to be aware of, and it would need addressing
before any form here starts accepting data.

---

## Editor and agent config

The repo root carries an unusual amount of tooling config — `.cursorrules`,
`.windsurfrules`, `.gemini/`, `.kiro/`, `.qoder/`, `.opencode.json`, `.mcp.json`
and several `*.md` instruction files aimed at various coding assistants.

These are editor settings accumulated over time. None of them affect the build.
Ignore them unless you use the tool in question.

---

## What is not here

- **No tests.**
- **No state management library.**
- **No error boundary.**
- **No API layer.**
- **No CSP or custom security headers.**
- **No `proxy.ts` / `middleware.ts`.**

There are also stray dev server logs committed at the root
(`next-dev.stdout.log`, `next-dev-3001.stderr.log` and friends). They are
noise and could be deleted and gitignored.
