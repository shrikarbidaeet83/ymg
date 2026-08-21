# ymg-legal.com

Our own agency site. B2B — it sells YMG's services to law firms, unlike the
other two sites in this org which are consumer-facing lead generation.

Next.js 16 (App Router) + TypeScript, Tailwind 4, React 19. Deploys to AWS
Amplify.

---

## What makes this repo different

Worth knowing before you go looking for things that are not here.

**No backend.** It does not call `core-api`. There are no environment
variables, no API layer, no `fetch` calls anywhere in `src/`.

**No working form.** The contact page has a `<form>` element with no
`onSubmit`, no `action` and no handler. Enquiries come through an embedded
GoHighLevel booking widget instead. See
[architecture.md](docs/architecture.md#the-contact-form-does-not-submit).

**Static content.** Blog posts live in `src/data/blog.ts` as a typed array. No
CMS, no API.

**Heavily animated.** GSAP, Framer Motion and Lenis smooth scroll. The other
two sites use CSS transitions and an IntersectionObserver. This one is a
different class of frontend.

**Shrikar owns it.** Day-to-day development is his. The recurring process here
is the dev→main push tracker, not feature work — see
[release-process.md](docs/release-process.md).

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

No `.env` needed. Genuinely — there is nothing to configure.

---

## Layout of the repo

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  home
│   ├── about/  how-it-works/  plans/  practice-areas/  faqs/  contact/
│   ├── blog/  +  blog/[slug]/
│   ├── services/                 index + 11 service pages
│   ├── privacy-policy/  terms/
├── components/
│   ├── layout/                   Navbar, Footer, SmoothScroll
│   ├── sections/                 ~60 page-section components
│   └── ui/                       button, logo, MotionReveal, ScrollReveal…
├── data/blog.ts                  all blog posts
└── lib/                          fonts, animation-variants, utils
```

Almost all the code is in `components/sections/`. Pages are thin — they compose
sections. That is the pattern; follow it.

---

## Docs

| Doc | Read it when |
|---|---|
| [Architecture](docs/architecture.md) | You are new. Start here. |
| [Development](docs/development.md) | Setup, commands, conventions |
| [Styling](docs/styling.md) | Tailwind 4 theme, brand tokens, animation |
| [Deployment](docs/deployment.md) | Amplify, CI, domains |
| [Release process](docs/release-process.md) | Pushing dev → main. Read before you push. |

Also worth reading once: [the platform overview](https://gitlab.com/ymg-legal/core-api/-/blob/dev/docs/onboarding.md).

---

## House rules

- **`dev` is the working branch.** Pushes to `main` go one commit at a time —
  read [release-process.md](docs/release-process.md) first, it is not the same
  process as the other repos.
- **Update `PUSH_TRACKER.md` on every push to main.**
- **Run `npm run lint` after every change.**
- The root domain still serves an older static site in places. Do not assume
  what you see live is what is in this repo.
