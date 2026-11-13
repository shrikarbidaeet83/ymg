---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/layout/Navbar.tsx"]
---

# Home page (/)

Mode: Persuade. Visitor: managing partner of a plaintiff PI / mass tort firm, often on a phone. Action: Talk to YMG Legal (/contact). Proof: process transparency, sourced industry stats (Clio 2024, HBR 2011), labelled sample leads. No testimonials, logos or YMG stats until verified.

Chosen structure: The Missed Call (sketch `.impeccable/mocks/decision/missed-call.html`). Seven sections: hero, "what do you need" doors, problem stats, how a lead moves, practice areas and campaigns, one partner + compliance, talk to us. Header gets the guide's items plus a permanent Talk to YMG Legal button; phones get a sticky call / talk bar.

Open: Plans and Blog leave the header (footer only). Truck, rideshare and other "confirm" items rely on `src/data/practice-areas.ts` flags.

## Direction contract

THESIS: Every case starts with a call someone has to answer. The home page shows one sample call travelling from unanswered to delivered, refusing the abstract dashboard-orbit hero and the row-of-equal-service-cards opener.

OWN-WORLD: The incumbent YMG world: cream ground, charcoal call card, brand gold for the active stage and primary action, white stage tiles with a soft gold border, Afacad Flux display, Manrope body. Stage tiles are identical units in one dashed track, read in a single sweep (raise from the declined VU meter bridge).

STORY: The partner sees a real-looking after-hours call most firms miss, the sourced 48% stat, and the same lead moving Answered → Screened → Qualified → Intake → Delivered. They believe YMG handles the whole path on their criteria, pick their need, and talk to YMG Legal.

FIRST VIEWPORT: Header with five links and the charcoal Talk to YMG Legal pill. Left: three-line headline (middle line gold), one-line subhead, gold primary and outlined secondary button. Right: charcoal call card with ringing dot, sample lead, 48% stat and Clio footnote. Bottom: five stage tiles across the full width on a dashed line, the active stage gold, "Sample lead · illustrative" label. Mobile: headline, buttons, call card, stages as a horizontal swipe row.

FORM: The Missed Call, position 6 of 7 on the ranked list, seed key 2cc3c239.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
