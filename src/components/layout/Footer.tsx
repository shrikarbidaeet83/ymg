"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { YMGLogo } from "@/components/ui/logo";
import { cms } from "@/lib/cms";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/how-it-works" },
];

const resourceLinks = [
  { label: "Case Results", href: "/blog" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ's", href: "/faqs" },
  // Only when a job opening is live in the YMG CMS.
  ...(cms.careers.some((j) => j.isOpen !== false) ? [{ label: "Careers", href: "/careers" }] : []),
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
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

const serviceLinks = [
  { label: "Personal Injury Leads", href: "/services/personal-injury-leads" },
  { label: "MVA Lead Generation", href: "/services/mva-leads" },
  { label: "Mass Tort Leads", href: "/services/mass-tort-leads" },
  { label: "Legal Intake Services", href: "/services/legal-intake" },
  { label: "Law Firm Marketing", href: "/services/law-firm-marketing" },
  { label: "Paralegal & Firm Support", href: "/services/law-firm-support" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[1rem] font-semibold text-body-dark lg:text-[0.9rem]">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mb-2.5 block whitespace-nowrap text-[0.68rem] text-body-dark/55 transition-colors duration-200 hover:text-dark lg:text-sm"
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

        {/* Main grid */}
        <div className="grid grid-cols-[0.98fr_1.02fr] gap-x-5 gap-y-8 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-0 lg:justify-items-center">

          {/* Column 1 — Brand */}
          <div className="border-r border-body-dark/10 pr-5 lg:pr-12 lg:justify-self-start">
            <YMGLogo variant="dark" />

            <p className="mt-5 max-w-none text-[0.56rem] leading-[1.35] text-body-dark/55 lg:max-w-[230px] lg:text-sm lg:leading-[1.75]">
              We help law firms grow with a steady pipeline
              <span className="block">of qualified cases</span>
            </p>

            <div className="mt-7 h-px w-full max-w-[180px] bg-gold lg:hidden" />

            <div className="mt-7 lg:hidden">
              <FooterHeading>Services</FooterHeading>
              {serviceLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:pl-0">
            <FooterHeading>Quick Links</FooterHeading>
            {quickLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}

            <div className="mt-7 h-px w-full max-w-[180px] bg-gold lg:hidden" />

            <div className="mt-7 lg:hidden">
              <FooterHeading>Resources</FooterHeading>
              {resourceLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Column 3 — Resources */}
          <div className="hidden lg:block lg:pl-0">
            <FooterHeading>Resources</FooterHeading>
            {resourceLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          {/* Column 4 — Services */}
          <div className="hidden lg:block lg:pl-0">
            <FooterHeading>Services</FooterHeading>
            {serviceLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
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
