import LegalPage from "@/src/components/shared/LegalPage";

export const metadata = {
  title: "Terms & Conditions — YMG Legal",
  description: "Read the Terms & Conditions for using YMG Legal's website and services.",
};

const SECTIONS = [
  {
    title: "Use of Services",
    paragraphs: [
      "YMG Legal provides legal marketing, lead generation, intake, staffing, and related business solutions for law firms and legal professionals. All services must be used lawfully and ethically.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All website content, branding, designs, graphics, text, logos, and materials are the exclusive property of YMG Legal and may not be copied, reproduced, or distributed without written permission.",
    ],
  },
  {
    title: "User Information",
    paragraphs: [
      "By submitting information through our website, you agree that the details provided are accurate and may be used to respond to inquiries, improve services, and communicate with you.",
    ],
  },
  {
    title: "Confidentiality",
    paragraphs: [
      "We maintain reasonable measures to protect sensitive information shared through our services. However, users are responsible for ensuring the security of information shared online.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Our website may integrate with third-party tools, platforms, or services. YMG Legal is not responsible for the policies or practices of external platforms.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "YMG Legal shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.",
    ],
  },
  {
    title: "Service Modifications",
    paragraphs: [
      "We reserve the right to modify, suspend, or discontinue any service or website content at any time without prior notice.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "We reserve the right to restrict or terminate access to our services if any misuse, unlawful activity, or violation of these terms occurs.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed and interpreted in accordance with applicable laws and regulations.",
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      "For any questions regarding these Terms & Conditions, please contact:",
      "YMG — Legal",
      "www.ymg-legal.com",
      "Las Vegas, Nevada",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Effective Date — Insert date"
      title="Terms & Conditions"
      subtitle="Welcome to YMG Legal. By accessing or using our website and services, you agree to comply with the following Terms & Conditions. Please read them carefully before using our services."
      sections={SECTIONS}
    />
  );
}
