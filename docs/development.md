# Development

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
```

That is it. No environment file, no backend to run, no external service to
configure. There are no `process.env` references anywhere in `src/`.

If you have worked on the other two repos, that will feel wrong. It is correct
here — this site has no backend.

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Next dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

Note there is no `lint:fix` and no `format` script, unlike the other repos.
Add them if you find yourself wanting them.

`npm run build` type-checks and pre-renders. Run it before pushing — CI runs
the same thing and Amplify will fail on anything it catches.

---

## Next 16

`params` is a Promise:

```tsx
interface Props { params: Promise<{ slug: string }> }

export default async function Page({ params }: Props) {
  const { slug } = await params;
}
```

Server components by default. Add `'use client'` only where you need state,
effects or event handlers — which here means most of the animated sections,
since GSAP and Framer Motion both need the browser.

`middleware.ts` is `proxy.ts` in this version. Neither exists in this repo.

When something behaves unexpectedly, read `node_modules/next/dist/docs/`.

---

## Conventions

### Imports

`@/` maps to `src/`.

```tsx
import { Button } from '@/components/ui/button';
import { posts } from '@/data/blog';
import { cn } from '@/lib/utils';
```

### Where code goes

This is the convention that matters most here.

**Pages are thin.** A page composes sections and does little else. If you are
writing more than about 40 lines in a `page.tsx`, it probably wants to be a
section.

**Sections go in `src/components/sections/`**, named
`{Page}{What}Section.tsx`:

```
AboutJourneySection.tsx
AiSearchBenefitsSection.tsx
LocalServicesAdsProcessSection.tsx
```

Single-use sections are normal and expected. Do not try to generalise a section
across pages unless it genuinely is the same thing.

**Only genuinely shared things go in `src/components/ui/`** — `button`, `logo`,
and the reveal wrappers.

### Styling

Tailwind 4, configured in `src/app/globals.css` under `@theme inline`. There is
no `tailwind.config.js` and you should not add one.

Use `cn()` from `@/lib/utils` when merging conditional classes — it wraps
`clsx` and `tailwind-merge` so conflicting utilities resolve correctly.

See [styling.md](styling.md).

### Animation

Three libraries, each with a job:

| Library | Used for |
|---|---|
| Framer Motion | Component enter/exit, the `MotionReveal` wrapper |
| GSAP | Timeline and scroll-driven sequences |
| Lenis | Smooth scrolling, applied globally by `SmoothScroll` |

Shared variants live in `src/lib/animation-variants.ts`. Use them rather than
writing one-off variant objects, so the site's motion stays consistent.

Anything using GSAP or Framer needs `'use client'`.

Lenis is global. If scroll behaves oddly in a component, check
`components/layout/SmoothScroll.tsx` before assuming the component is at fault.

---

## Adding a page

1. `src/app/your-page/page.tsx`
2. Build it from sections in `src/components/sections/`
3. Export `metadata` for title and description
4. Add it to the nav in `components/layout/Navbar.tsx` and the footer if it
   should be reachable

For a new service page, copy the closest existing one under `src/app/services/`
— they all follow the same intro / benefits / why-it-matters / process shape.

---

## Adding a blog post

`src/data/blog.ts`. Append to the `posts` array:

```ts
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'One or two sentences for the listing card.',
  date: 'August 22, 2026',       // display string — nothing formats this
  category: 'Mass Torts',
  readTime: '4 min read',        // hand-written
  body: `First paragraph.\n\nSecond paragraph.`,
}
```

`date` and `readTime` are literal display strings. Nothing computes them, so
write them the way you want them to appear.

`body` is plain text with `\n\n` between paragraphs, not HTML. Keep it that way
— it is the reason this blog has no XSS question hanging over it, unlike the
other two sites.

---

## Branching

`dev` is where work happens. **Pushing to `main` here follows a specific
process that is not the same as the other repos** — one commit at a time,
oldest first, with `PUSH_TRACKER.md` updated each time.

Read [release-process.md](release-process.md) before you push anything to
`main`.

---

## Testing a change

No tests. Manual:

1. `npm run build` — type errors and pre-render failures
2. `npm start`, then click through at mobile, tablet and desktop widths
3. Check the animations actually run — several sections start hidden and only
   appear on scroll. A broken observer or a missing `'use client'` leaves
   content permanently invisible.
4. Scroll the whole page. Lenis is global and animation-heavy pages can stutter
   on lower-end hardware in a way that is easy to miss on a fast machine.

Point 3 is the one that bites. An invisible section looks like a layout bug,
not an animation bug.

---

## Housekeeping worth doing

A few things in this repo could use a tidy, if you are in here anyway:

- Stray dev server logs committed at the root: `next-dev.stdout.log`,
  `next-dev.stderr.log`, `next-dev-3001.stdout.log`, `next-dev-3001.stderr.log`.
  Delete and gitignore.
- No `lint:fix` or `format` script, and no `.prettierrc`, unlike the sibling
  repos.
- No `.env.example` — correct today, since there are no variables, but a
  one-line file saying so would save the next person looking.
