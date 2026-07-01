# YMG Legal — Dev → Main Push Tracker

> **Rule:** Always push oldest commit first. Update status after each push.
> Last synced: 2026-06-30
> **2026-06-30: All pending commits pushed to main in one batch at Shrikar's explicit request, bypassing the one-at-a-time rule for this round.**
> **2026-06-30 (later): `dev` was force-pushed by Shrikar YMG with 9 new commits (TouchPopCard, HeroOrbitAnimation, Digital Marketing page, mobile marquee, CTA/testimonial/navbar polish), discarding the prior merge/docs commits on dev (those stayed safe on main). Merged dev into main again, pushed. main and dev now have identical content.**

## Main Branch Status
- `origin/main` last commit: `ffcc21d` — Merge dev into main (2026-06-30)
- `origin/dev` last commit: `b8f7863` — Navbar: minor whitespace tweak (2026-06-30)
- main and dev content is identical; main has 6 extra docs/merge commits dev doesn't carry

---

## Commits to Push (dev → main) — Oldest First

| # | Hash | Date | Author | Commit Message | Status |
|---|---|---|---|---|---|
| 1 | `e80928c` | 2026-06-05 | shrikar-ymg | Restore app-router site and responsive layout | ✅ Done — 2026-06-19 |
| 2 | `29fa0f3` | 2026-06-05 | shrikar-ymg | hero section changes done | ✅ Done — 2026-06-19 |
| 3 | `a24690f` | 2026-06-17 | shrikar-ymg | style: update global styles, Navbar, and Footer | ✅ Done |
| 4 | `fb50e2c` | 2026-06-17 | shrikar-ymg | feat(home): redesign Home page with new sections and layout | ✅ Done |
| 5 | `6b80037` | 2026-06-17 | shrikar-ymg | feat(about): rebuild About page with updated content and sections | ✅ Done |
| 6 | `7661e61` | 2026-06-17 | shrikar-ymg | feat(services): rebuild Services page with new layout and content | ✅ Done — 2026-06-30 |
| 7 | `2e56e52` | 2026-06-17 | shrikar-ymg | feat(how-it-works): add How It Works page with process steps and assets | ✅ Done — 2026-06-30 |
| 8 | `ffadc61` | 2026-06-17 | shrikar-ymg | feat(practice-areas): add Practice Areas page | ✅ Done — 2026-06-30 |
| 9 | `15d436a` | 2026-06-17 | shrikar-ymg | feat(plans): add Plans/Pricing page | ✅ Done — 2026-06-30 |
| 10 | `7b8582a` | 2026-06-17 | shrikar-ymg | feat(faqs): add FAQs page with accordion layout | ✅ Done — 2026-06-30 |
| 11 | `9efd157` | 2026-06-17 | shrikar-ymg | feat(blog): add Blog listing page and dynamic [slug] post page | ✅ Done — 2026-06-30 |
| 12 | `49840f0` | 2026-06-17 | shrikar-ymg | feat(contact): rebuild Contact page with form and info sections | ✅ Done — 2026-06-30 |
| 13 | `3f3eeca` | 2026-06-17 | shrikar-ymg | feat(legal): update Privacy Policy and Terms pages | ✅ Done — 2026-06-30 |
| 14 | `eddb5ff` | 2026-06-17 | shrikar-ymg | feat(components): add new reusable section components and data files | ✅ Done — 2026-06-30 |
| 15 | `92475af` | 2026-06-17 | shrikar-ymg | assets: add shared public images (logos, backgrounds, icons) | ✅ Done — 2026-06-30 |

---

## Push Log
| Date | Hash | Commit | Pushed By |
|---|---|---|---|
| 2026-06-19 | `06f501c` | Restore app-router site and responsive layout | pavan-ymg |
| 2026-06-19 | `c203c9f` | hero section changes done | pavan-ymg |
| 2026-06-30 | `193fecc` | Merge main into dev to sync (YMG docs, Vercel deploy trigger) | shrikar-ymg |
| 2026-06-30 | `b4fe375` | Batch fast-forward of all 10 pending pages (Services, How It Works, Practice Areas, Plans, FAQs, Blog, Contact, Legal, Components, Assets) — pushed to main in one go at Shrikar's request | shrikar |
| 2026-06-30 | `ffcc21d` | Merge dev into main: TouchPopCard, HeroOrbitAnimation, Digital Marketing page, mobile marquee, CTA/testimonial/navbar polish (9 commits, force-pushed to dev by Shrikar) | shrikar |

---

## How to Push One Commit at a Time
```bash
# Switch to main
git checkout main

# Cherry-pick one commit (use hash from table above, oldest first)
git cherry-pick <hash>

# Push to remote main
git push origin main

# Switch back to dev
git checkout dev
```
