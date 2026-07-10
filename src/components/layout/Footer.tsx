"use client";

import Link from "next/link";
import Image from "next/image";
import { YMGLogo } from "@/components/ui/logo";

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
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const serviceLinks = [
  { label: "Legal Answering", href: "/services/legal-answering" },
  { label: "Legal Intake", href: "/services" },
  { label: "Contract & Retainer", href: "/services" },
  { label: "Live Chat & Text", href: "/services" },
  { label: "Mass Tort", href: "/services/case-acquisition" },
  { label: "Virtual Assistants", href: "/services" },
  { label: "AI-Powered Booking", href: "/services" },
  { label: "Outbound Acquisition", href: "/services/case-acquisition" },
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
    <footer className="ymg-section-padding relative isolate overflow-hidden border-t border-cream-dark bg-cream">
      <Image
        src="/flowers/vcardBG.svg"
        alt=""
        width={273}
        height={196}
        className="pointer-events-none absolute right-0 top-0 z-0 w-[150px] sm:w-[230px] lg:w-[300px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main grid */}
        <div className="grid grid-cols-[0.98fr_1.02fr] gap-x-5 gap-y-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-0 lg:justify-items-center">

          {/* Column 1 — Brand */}
          <div className="border-r border-body-dark/10 pr-5 lg:pr-12 lg:justify-self-start">
            <YMGLogo variant="dark" />

            <p className="mt-5 max-w-none text-[0.56rem] leading-[1.35] text-body-dark/55 lg:max-w-[230px] lg:text-sm lg:leading-[1.75]">
              We help law firm grow with a steady pipeline
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
        <div className="mt-12 pt-6 border-t border-body-dark/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.7rem] text-body-dark/40">
            © 2026 YMG Legal. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[0.7rem] text-body-dark/40">
            <Link href="/privacy-policy" className="hover:text-dark transition-colors duration-200">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-body-dark/20">·</span>
            <Link href="/terms" className="hover:text-dark transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
