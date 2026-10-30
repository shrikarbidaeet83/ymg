"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { YMGLogo } from "@/components/ui/logo";
import { cms } from "@/lib/cms";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Engagement Plans", href: "/plans" },
  { label: "Compliance", href: "/compliance" },
  { label: "Contact", href: "/contact" },
  // Only when a job opening is live in the YMG CMS.
  ...(cms.careers.some((j) => j.isOpen !== false) ? [{ label: "Careers", href: "/careers" }] : []),
];

const resourceLinks = [
  { label: "FAQ", href: "/faqs" },
  { label: "Blog", href: "/blog" },
];

// Order is fixed by the policies spec.
const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "SMS Terms", href: "/sms-terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Your Privacy Choices", href: "/privacy-policy#your-choices" },
];

// Grouped as in the header's Services menu.
const acquisitionLinks = [
  { label: "Personal Injury Leads", href: "/services/personal-injury-leads" },
  { label: "MVA Lead Generation", href: "/services/mva-leads" },
  { label: "Mass Tort & Class Action", href: "/services/mass-tort-leads" },
  { label: "Class Action Leads", href: "/services/class-action-leads" },
  { label: "Pay-Per-Call", href: "/services/pay-per-call" },
  { label: "Outbound Acquisition", href: "/services/outbound-client-acquisition" },
];

const intakeSupportLinks = [
  { label: "Legal Intake Services", href: "/services/legal-intake" },
  { label: "Contract & Retainer", href: "/services/retainer-signing" },
  { label: "Live Chat & Text", href: "/services/live-chat-text" },
  { label: "AI-Powered Booking", href: "/services/ai-booking" },
  { label: "Paralegal & Firm Support", href: "/services/law-firm-support" },
  { label: "Legal Virtual Assistants", href: "/services/legal-virtual-assistants" },
];

const marketingLinks = [
  { label: "Marketing Overview", href: "/services/law-firm-marketing" },
  { label: "Google Ads", href: "/services/google-search-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Local Services Ads", href: "/services/local-services-ads" },
  { label: "SEO", href: "/services/seo" },
  { label: "AI Search", href: "/services/ai-search" },
  { label: "Organic Social", href: "/services/organic-social-media" },
  { label: "Website Design", href: "/services/website-design" },
];

const footerColumns = [
  { title: "Case Acquisition", links: acquisitionLinks },
  { title: "Intake & Support", links: intakeSupportLinks },
  { title: "Law Firm Marketing", links: marketingLinks },
  { title: "Company", links: companyLinks },
  { title: "Resources", links: resourceLinks },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-[1rem] font-semibold text-body-dark">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mb-2.5 block text-[0.9rem] text-body-dark/65 transition-colors duration-200 hover:text-dark"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-cream px-5 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 xl:px-20">
      <Image
        src="/flowers/vcardBG.svg"
        alt=""
        width={273}
        height={196}
        className="pointer-events-none absolute right-0 top-0 z-0 w-[150px] sm:w-[230px] lg:w-[300px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main grid: brand + contact, then the link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_0.9fr_0.7fr] lg:gap-x-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <YMGLogo variant="dark" />
            <p className="mt-5 max-w-[280px] text-[0.95rem] leading-[1.6] text-body-dark/65">
              Qualified cases, stronger intake and scalable support for plaintiff law firms.
            </p>
            <ul className="mt-6 grid gap-2.5 text-[0.95rem] text-body-dark/75">
              <li className="flex items-center gap-2.5">
                <Phone size={16} strokeWidth={1.8} aria-hidden="true" className="text-[#a87b25]" />
                <a href="tel:+13133065055" className="hover:text-dark">(313) 306-5055</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} strokeWidth={1.8} aria-hidden="true" className="text-[#a87b25]" />
                <a href="mailto:info@ymg-legal.com" className="hover:text-dark">info@ymg-legal.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} strokeWidth={1.8} aria-hidden="true" className="text-[#a87b25]" />
                Las Vegas, Nevada
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="w-4 text-center text-[0.95rem] font-semibold leading-none text-[#a87b25]">in</span>
                <a href="https://www.linkedin.com/company/ymglegal-attorney-marketing/" target="_blank" rel="noopener noreferrer" className="hover:text-dark">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <FooterHeading>{column.title}</FooterHeading>
              {column.links.map((link) => (
                <FooterLink key={link.href + link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-9 border-t border-body-dark/10 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
            <p className="text-[0.7rem] text-body-dark/40">
              © 2026 YMG Legal. All rights reserved.
            </p>

            <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] text-body-dark/40 lg:justify-end">
              {policyLinks.map((link, index) => (
                <Fragment key={link.href}>
                  {index > 0 && <span aria-hidden="true" className="text-body-dark/20">·</span>}
                  <Link href={link.href} className="hover:text-dark transition-colors duration-200">
                    {link.label}
                  </Link>
                </Fragment>
              ))}
            </nav>
          </div>

          <p className="mt-4 text-center text-[0.68rem] leading-relaxed text-body-dark/40 lg:text-left">
            YMG Legal is a legal marketing and support company, not a law firm, and does not provide legal advice. See our{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-dark">
              Disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
