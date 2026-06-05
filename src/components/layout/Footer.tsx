"use client";

import Link from "next/link";
import { YMGLogo } from "@/components/ui/logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/about#how-it-works" },
];

const resourceLinks = [
  { label: "Case Results", href: "/blog" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ's", href: "/contact#faq" },
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
    <h3 className="text-body-dark font-semibold text-[0.9rem] mb-5">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block mb-2.5 text-sm text-body-dark/55 hover:text-dark transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.15fr_1.35fr] gap-10 lg:gap-0">

          {/* Column 1 — Brand */}
          <div className="lg:pr-12 lg:border-r lg:border-body-dark/10">
            <YMGLogo variant="dark" />

            <p className="mt-5 text-sm text-body-dark/55 leading-[1.75] max-w-[230px]">
              We help law firm grow with a steady pipeline of qualified cases
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:pl-12">
            <FooterHeading>Quick Links</FooterHeading>
            {quickLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          {/* Column 3 — Resources */}
          <div className="lg:pl-8">
            <FooterHeading>Resources</FooterHeading>
            {resourceLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          {/* Column 4 — Services */}
          <div className="lg:pl-8">
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
            © 2025 YMG Legal. All rights reserved.
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
