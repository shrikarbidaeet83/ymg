# Release Process

Read this before pushing anything to `main`. This repo does not follow the
same process as `core-api`, AAA or CIH.

---

## The rule

**Push to `main` one commit at a time, oldest first, and update
`PUSH_TRACKER.md` after each one.**

Not a squash. Not a merge of ten commits. One, then check, then the next.

---

## Why

Two people work across this org, and this repo is the one Shrikar develops
day to day while the platform work happens elsewhere. Pushing commits
individually means:

- Every commit gets its own Amplify build, so a break is attributable to one
  change rather than a batch
- The tracker gives an at-a-glance record of what is on production without
  reading git log
- A revert is one commit, not an unpicking exercise

The site is also visually dense and animation-heavy. Regressions here tend to
be "this section no longer appears on mobile", which does not fail a build and
does not show up in CI. Small increments make that findable.

---

## `PUSH_TRACKER.md`

Lives at the repo root. Structure:

```markdown
# YMG Legal — Dev → Main Push Tracker

> **Rule:** Always push oldest commit first. Update status after each push.
> Last synced: 2026-06-30

## Main Branch Status
- `origin/main` last commit: `ffcc21d` — Merge dev into main (2026-06-30)
- `origin/dev` last commit: `b8f7863` — Navbar: minor whitespace tweak

## Commits to Push (dev → main) — Oldest First

| # | Hash | Date | Author | Commit Message | Status |
|---|---|---|---|---|---|
| 1 | `e80928c` | 2026-06-05 | shrikar-ymg | Restore app-router site | ✅ Done — 2026-06-19 |
| 2 | `29fa0f3` | 2026-06-05 | shrikar-ymg | hero section changes done | ✅ Done — 2026-06-19 |
```

Above the table there is a running log of exceptions and events — batch pushes,
force pushes, resyncs. Keep adding to it. The exceptions are the part that
matters later; the table only tells you the happy path.

---

## The process

**1. Fetch and compare.**

```bash
git fetch --all
git log --oneline origin/main..origin/dev
```

That is your list, and it comes out newest first — reverse it.

Fetch from GitLab specifically, not just your default remote. GitLab is the
source of truth, and a stale local view has caused a false "this is missing"
conclusion in this org before.

**2. Update the tracker.**

Add every unpushed commit to the table, oldest first, with hash, date, author
and message. Status blank.

**3. Push the oldest one.**

```bash
git checkout main
git cherry-pick <oldest-hash>      # or merge if the history allows a clean fast-forward
git push origin main
```

**4. Wait for Amplify, then look at the site.**

Not just the build log — actually load the pages that commit touched. A green
build tells you it compiled, not that a section still renders on a phone.

**5. Mark it done.**

```markdown
| 1 | `e80928c` | 2026-06-05 | shrikar-ymg | Restore app-router site | ✅ Done — 2026-08-22 |
```

**6. Repeat.**

**7. Update the status block** at the top with the new `origin/main` head and
the sync date.

---

## When batching is allowed

It has happened, and the tracker records it:

> **2026-06-30: All pending commits pushed to main in one batch at Shrikar's
> explicit request, bypassing the one-at-a-time rule for this round.**

That is the model. Batching is fine **when whoever owns the repo asks for it**,
and when it happens you write it in the tracker with the date and the reason.
The rule is a default, not a law — but the deviation gets recorded.

---

## Force pushes

Also happened, also recorded:

> **2026-06-30 (later): `dev` was force-pushed by Shrikar YMG with 9 new
> commits, discarding the prior merge/docs commits on dev (those stayed safe on
> main). Merged dev into main again, pushed. main and dev now have identical
> content.**

If `dev` has been force-pushed, your local view of it is wrong and the tracker
table is probably stale. Re-fetch, rebuild the list from
`origin/main..origin/dev`, and note what happened before you push anything.

There is a `backup/gitlab-main-before-sync-20260811-184332` branch on the
remote from one of these episodes. Leave it alone.

---

## Branches on the remote

| Branch | Purpose |
|---|---|
| `dev` | Active development |
| `main` | Production |
| `pr` | Review branch |
| `backup/pre-restore` | Snapshot from a recovery |
| `backup/gitlab-main-before-sync-…` | Snapshot from the 2026-08-11 resync |

The backup branches are deliberate safety copies. Do not tidy them up.

---

## Checklist

Before pushing to `main`:

- [ ] `git fetch --all` — including GitLab
- [ ] `npm run build` passes locally
- [ ] `npm run lint` passes
- [ ] You have explicit go-ahead to push to `main`
- [ ] The tracker lists every unpushed commit, oldest first

For each commit:

- [ ] Pushed on its own
- [ ] Amplify build finished green
- [ ] Affected pages loaded and checked at mobile and desktop widths
- [ ] Animated sections actually appear — they start hidden
- [ ] Tracker row marked done with the date

After the last one:

- [ ] Status block updated with the new `origin/main` head and sync date
- [ ] Any deviation from the process written into the log above the table
