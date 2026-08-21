# Styling

## Two layers

`src/app/globals.css` carries two token systems side by side, and knowing which
is which saves a lot of confusion:

1. **A shadcn-style base layer** — `--background`, `--foreground`, `--card`,
   `--popover`, `--muted`, `--ring`, sidebar and chart tokens, all in `oklch()`.
   This came with the component scaffolding.
2. **The YMG brand layer** — gold, dark, cream, purple. This is what the site
   actually looks like.

The shadcn tokens are mostly unused in practice. When you need a colour, reach
for the brand layer.

Tailwind 4, configured from CSS. **There is no `tailwind.config.js`** and you
should not add one — everything is declared in `@theme inline` inside
`globals.css`.

---

## Brand palette

```css
@theme inline {
  --color-gold:        #C9A96E;
  --color-gold-light:  #E2C898;
  --color-gold-dark:   #A8813E;
  --color-dark:        #1A1A18;
  --color-dark-card:   #242420;
  --color-cream:       #FFF5E0;
  --color-cream-dark:  #EDE7D9;
  --color-purple:      #7B5EA7;
  --color-purple-light:#9B7EC7;
  --color-body-dark:   #2D2D2D;
  --color-body-light:  #FFF5E0;
  --color-muted-ymg:   #8A8478;
}
```

| Token | Value | Used for |
|---|---|---|
| `gold` | `#C9A96E` | The brand colour. CTAs, accents, headings on dark. |
| `gold-light` | `#E2C898` | Hover, highlights |
| `gold-dark` | `#A8813E` | Pressed states, borders |
| `dark` | `#1A1A18` | Near-black page background |
| `dark-card` | `#242420` | Card surfaces on dark |
| `cream` | `#FFF5E0` | Warm light background |
| `cream-dark` | `#EDE7D9` | Secondary light surface |
| `purple` | `#7B5EA7` | Secondary accent, used sparingly |
| `purple-light` | `#9B7EC7` | |
| `body-dark` | `#2D2D2D` | Body copy on light |
| `body-light` | `#FFF5E0` | Body copy on dark |
| `muted-ymg` | `#8A8478` | Muted text |

Gold on near-black is the whole identity. Purple is a supporting accent — check
an existing page before introducing it somewhere new.

Note `muted-ymg` carries a suffix because `--color-muted` is already taken by
the shadcn layer. If you add a token and the obvious name is claimed, follow
that pattern rather than overwriting the base token.

All of these become real Tailwind utilities: `bg-gold`, `text-cream`,
`border-gold-dark`, and the opacity variants like `bg-dark/80`.

---

## Typography

Two Google fonts via `next/font`, declared in `src/lib/fonts.ts`:

```ts
export const afacadFlux = Afacad_Flux({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
```

- **Afacad Flux** → `--font-display` → `font-heading` in Tailwind
- **Manrope** → `--font-sans` → the default body font

Self-hosted by `next/font`, so no external font request and no layout shift.
This is better than the AAA site, which pulls its fonts from a Google Fonts
`@import`.

### Extended sizes

Two sizes are added beyond Tailwind's defaults, with matching line heights:

```css
--text-7xl: 4.5rem;   --text-7xl--line-height: 1.1;
--text-8xl: 6rem;     --text-8xl--line-height: 1.05;
```

Used for the oversized display headings. `text-8xl` at 6rem is a deliberate
statement — do not reach for it casually.

---

## Radii and shadows

```css
--radius-card: 12px;
--radius-btn:  6px;

--shadow-card:       0 4px 24px rgba(0, 0, 0, 0.07);
--shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.13);
--shadow-gold-glow:  0 0 32px rgba(201, 169, 110, 0.25);
```

`shadow-gold-glow` is the signature effect — a soft gold halo used on primary
CTAs and featured cards. It is `--color-gold` at 25% opacity.

The shadcn layer also derives a `--radius-*` scale from a single `--radius`
value using `calc()`. Use `rounded-card` and `rounded-btn` for anything
brand-shaped and leave the derived scale to the base components.

---

## Custom animation classes

Two hand-written marquees, both defined in `globals.css` rather than done with
a library:

```css
.ymg-proof-marquee   { animation: ymg-proof-marquee 16s linear infinite; }
.ymg-law-logo-track  { animation: ymg-law-logo-scroll 28s linear infinite; }
```

Both pause on hover:

```css
.ymg-proof-marquee:hover     { animation-play-state: paused; }
.ymg-law-logo-track:hover    { animation-play-state: paused; }
```

Both work by translating a duplicated track by `-50%`, which is the standard
infinite-marquee trick — **the content has to be duplicated in the markup** or
the loop visibly jumps. If a marquee stutters, check the duplication before
touching the timing.

`.ymg-law-logo-window` sets the viewport height for the scrolling logo column:

```css
height: clamp(430px, 42vw, 560px);

@media (max-width: 767px) {
  height: 315px;
  overflow: hidden;
}
```

The `ymg-` prefix on these class names is intentional. It keeps hand-written
CSS visually distinct from Tailwind utilities. Follow it if you add more.

---

## The animation libraries

Three, each with a role:

| Library | Role |
|---|---|
| **Framer Motion** | Component enter/exit, the `MotionReveal` wrapper |
| **GSAP** | Timeline and scroll-driven sequences |
| **Lenis** | Global smooth scroll, via `components/layout/SmoothScroll.tsx` |
| **tw-animate-css** | Utility animation classes, imported at the top of `globals.css` |

Shared Framer variants live in `src/lib/animation-variants.ts`. Use them rather
than writing one-off variant objects — it is what keeps the motion feeling like
one site.

Reveal wrappers in `components/ui/`:

- `MotionReveal.tsx` — Framer-based
- `ScrollReveal.tsx` — scroll-triggered
- `ScrollRevealCard.tsx` — card variant

Anything using GSAP or Framer needs `'use client'`.

**Lenis is global.** It intercepts scroll across the whole site. If scroll
behaves strangely inside a component — a sticky element, a nested scroll
container, an anchor jump landing wrong — check `SmoothScroll` before assuming
the component is at fault.

---

## Merging classes

Use `cn()` from `@/lib/utils`:

```tsx
import { cn } from '@/lib/utils';

<div className={cn('bg-dark text-cream', isActive && 'ring-2 ring-gold', className)} />
```

It wraps `clsx` and `tailwind-merge`, so a later conflicting utility actually
wins instead of both landing in the class list and the cascade deciding.

Buttons use `class-variance-authority` — see `components/ui/button.tsx` for the
variant pattern before adding a new button style.

---

## Dark mode

There is a `@custom-variant dark (&:is(.dark *))` declaration and a full set of
dark tokens from the shadcn layer.

The site's own design is already dark-first — near-black backgrounds with gold
— so the variant is largely unused. Do not build against `dark:` expecting a
toggle; there is no theme switcher.

---

## Adding a colour

1. Add `--color-yourname: #hex;` inside the `@theme inline` block in
   `globals.css`.
2. Use `bg-yourname`, `text-yourname`, `border-yourname`.

Before you do: check whether an opacity modifier on an existing token gets you
there. `bg-dark/80`, `text-gold/60`, `border-gold-dark/30` — most of the site's
apparent range comes from exactly that, and the palette stays small because of
it.

Do not create a `tailwind.config.js`, and do not overwrite a shadcn base token
to get a brand colour — suffix it, the way `muted-ymg` does.
