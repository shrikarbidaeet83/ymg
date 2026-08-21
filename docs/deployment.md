# Deployment

## Where it runs

AWS Amplify, deploying on push. GitLab is the CI/CD source of truth; GitHub is
a mirror.

Two subdomains are wired up: `dev.` and `main.`. A `.vercel` directory is still
in the repo from before the migration and is inert.

**The root domain is not necessarily this app.** `ymg-legal.com` has served an
older static HTML/CSS site, and the cutover to this Next.js app has been staged
rather than flipped in one go. Before assuming what you see live reflects this
repo, check which app is actually serving the hostname you are looking at.

`www.ymg-legal.com` previously had a DNS gap that had to be fixed separately
from the apex — worth remembering that apex and `www` are configured
independently here.

---

## Build

`amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands: [npm ci]
    build:
      commands: [npm run build]
  artifacts:
    baseDirectory: .next
    files: ['**/*']
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

Identical to the CIH setup. `baseDirectory: .next` means Amplify runs this with
its Next.js support rather than serving a static folder.

`npm ci` needs `package-lock.json` committed and in sync. Adding a dependency
and committing only `package.json` fails the build.

Note `package.json` pins overrides:

```json
"overrides": { "postcss": "8.5.25", "sharp": "0.35.3" }
```

`sharp` is what Next uses for image optimisation on the server. If image
handling breaks after a dependency bump, that pin is the first place to look.

---

## Environment variables

There are none. Nothing in `src/` reads `process.env`, and there is no `.env`
or `.env.example` in the repo.

If you are adding the first one, remember `NEXT_PUBLIC_` values are inlined at
build time — public, and unchanged until a rebuild.

---

## Headers

`next.config.ts` is five lines:

```ts
const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};
```

No custom headers. **No Content-Security-Policy on this site**, unlike AAA and
CIH which both set one.

That is defensible today — no forms accept data, no user input is rendered, no
external API is called. It stops being defensible the moment any of those
change. If the contact form is ever wired up, a CSP should go in at the same
time, and the CIH config is the closest model to copy.

`productionBrowserSourceMaps: false` keeps source maps out of the production
bundle.

---

## CI

`.gitlab-ci.yml` runs on every branch:

```yaml
lint_and_build:
  stage: test
  image: node:20
  script:
    - npm install
    - npm run lint
    - npm run build
```

Validation only. Amplify deploys independently and in parallel, which means
**a red pipeline does not stop a deploy.** Treat CI as a signal, not a gate.

A stray Copilot instruction file was removed from this repo on GitHub at one
point. If tooling config reappears in a way that affects the build, it is
probably accidental.

---

## Deploying

This repo does **not** follow the same push process as the others. Pushes to
`main` go one commit at a time, oldest first, with `PUSH_TRACKER.md` updated as
you go.

Read [release-process.md](release-process.md) before pushing anything. It
exists for a reason and skipping it has caused avoidable cleanup.

Short version:

1. Work on `dev`, push to `dev` freely — Amplify builds the `dev.` subdomain.
2. Check `dev.ymg-legal.com`.
3. When shipping, follow the tracker process to move commits to `main`.
4. Watch the Amplify build log.
5. Load the live site and click through the pages you touched.

Step 4 matters — the build pre-renders 20-odd routes, and a broken one fails
late.

---

## Rollback

Amplify can redeploy a previous build from the console, which is the fast fix.

The dependable fix is to revert the commit and push, so the repo and production
agree. Update `PUSH_TRACKER.md` if you do — a revert is a state change the
tracker should reflect.

---

## Domain notes

Worth having written down, because this repo's domain situation is the most
tangled of the four:

- `dev.ymg-legal.com` — the dev branch deployment
- `main.ymg-legal.com` — the main branch deployment
- `ymg-legal.com` / `www.ymg-legal.com` — check what is actually serving these
  before assuming

SSL provisioning for this app's subdomains was blocked at one stage by an
account-wide Amplify/ACM certificate rate limit. If a new subdomain sits
pending verification for an unusually long time, that is the likely cause
rather than a misconfiguration — the fix is to wait and retry, not to keep
re-creating the domain association.
