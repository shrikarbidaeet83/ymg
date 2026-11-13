# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: the managing partner or owner of a plaintiff law firm** (personal injury and mass tort). They own the firm's growth, sign vendor contracts and decide whether YMG is worth a call. They are attorneys, not marketers: they judge vendors on qualified cases, reliability and trust, and are put off by marketing jargon and unverifiable claims. They often visit between other work, frequently on a phone.

Secondary audiences (named in the content guide, not the lead decision-maker): intake or operations managers evaluating call coverage and screening, and firm marketing staff comparing lead vendors and agencies.

## Product Purpose

YMG Legal helps plaintiff law firms acquire qualified cases, strengthen intake, and extend their teams. The website's job is to make a managing partner understand that within seconds and book a call ("Book a free strategy call").

Success: qualified inquiries from plaintiff firms, through booked strategy calls (booking calendar on /contact) and the contact form. No phone number is shown anywhere: booking is the only call path.

## Positioning

**One partner, end to end.** Many firms use separate vendors for marketing, lead generation, intake and operational support. YMG connects those functions into one process, built around the criteria each firm defines: acquire → qualify → intake → convert → support.

Confirmed by YMG (Oct 2026, from the Service Deck): 15+ years in legal marketing; US-based team in Las Vegas, NV with 24/7 intake; works exclusively with law firms; performance-based mindset (not pricing); free 30-minute strategy call; proposal within 48 hours; campaigns can launch in as little as 1 week; no long-term contracts required to start; Full-Service Partnership is the most popular engagement.

## Operating Context

- Practice areas (6): Personal Injury, Mass Torts (hair relaxer, talcum powder, Paraquat, Roundup, Depo-Provera, social media), Class Action, Medical Malpractice, Workers' Compensation, Social Security Disability. Campaign availability changes; the list lives in `src/data/practice-areas.ts` with an `active` flag per campaign.
- Services: Personal Injury Lead Generation, MVA Lead Generation, Mass Tort Lead Generation, Legal Intake Services, Law Firm Marketing (7 channel pages: Google Ads, Meta Ads, Local Services Ads, SEO, AI Search, Organic Social, Website Design), Outsourced Paralegal & Law Firm Support.
- Delivery models: qualified leads, intake-verified leads, live qualified calls, docket-based delivery, signed-retainer opportunities. Exact terms are set per engagement before launch.
- Firms define their own qualification criteria (geography, accident timing, injury, treatment, liability, insurance, existing representation).
- Contact: info@ymg-legal.com (no phone number on the site) · Las Vegas, Nevada · LinkedIn. Booking calendar via LeadConnector on /contact.

## Capabilities and Constraints

- Next.js (App Router) + Tailwind v4 site; content for blog, FAQs, testimonials and careers can come from the YMG CMS at build time, falling back to built-in content.
- Source of truth for copy and structure: *YMG Legal Website — Design & Content Guide* (Oct 6, 2026) and *Website Policies* (both PDFs from YMG).
- Primary CTA site-wide, including the navbar and the mobile bar: "Book a free strategy call" (→ /contact#booking). This overrides the content guide. No phone CTA. Contextual CTAs per service page.
- Only list campaigns YMG is actively generating or accepting.
- YMG Legal is not a law firm and does not give legal advice; the footer note and Disclaimer page must stay.
- Undecided: whether Plans pricing can be public; whether 24/7 intake, bilingual intake, live calls and signed-retainer delivery are available today; contact-form response window.

## Brand Commitments

- Keep the YMG Legal name, logo, existing brand colours, flower and half-circle decorative backgrounds, and light/dark mode (per the content guide).
- Voice: plain, confident, professional B2B partner for attorneys; not a consumer brand. No hype.

## Evidence on Hand

- **YMG client data (confirmed):** $250K+ average revenue lost annually from poor intake and lead management; 35% of inquiries lost; 48% of calls missed after hours; 60% never followed up; 30+ hours a week on admin; over 80% of leads need multiple touches. Always label "Based on YMG client data".
- Still not verified: testimonials, client logos, case results, team photos, product screenshots.
- Do not show or invent: testimonials, law-firm logos, YMG performance numbers ($ generated, leads delivered, cases signed, retention), or case studies. Existing ones are hidden or must be hidden until verified.
- Allowed: sourced third-party industry statistics with footnotes (Clio Legal Trends Report 2024; HBR "The Short Life of Online Sales Leads", 2011), and illustrative product visuals clearly labelled as samples.

## Product Principles

1. **Show the mechanism, not claims.** With no verified proof, trust comes from showing exactly how a lead becomes a signed case and what the firm controls.
2. **The partner understands YMG in seconds.** Who it's for, what they get and what to do next must be clear on the first screen, on a phone.
3. **The firm's criteria lead.** Every service is framed around requirements the firm sets, not a one-size package.
4. **One connected process.** Acquisition, intake and support are presented as one pipeline, not a list of disconnected services.
5. **Accurate over impressive.** Only active campaigns, only confirmed capabilities, only sourced numbers.

## Accessibility & Inclusion

WCAG 2.1 AA (content guide): contrast ≥ 4.5:1 for body text, visible focus states, labelled or decorative-only icons, marquees and animations pause on hover and respect `prefers-reduced-motion`, one `<h1>` per page. Lighthouse mobile targets: Performance ≥ 90, Accessibility ≥ 95, SEO 100.
