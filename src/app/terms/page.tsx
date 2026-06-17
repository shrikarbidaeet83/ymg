const sections = [
  {
    title: "Use Of Services",
    body: "YMG Legal provides legal marketing, lead generation, intake, staffing, and related business solutions for law firms and legal professionals. All services must be used lawfully and ethically.",
  },
  {
    title: "Intellectual Property",
    body: "All website content, branding, designs, graphics, text, logos, and materials are the exclusive property of YMG Legal and may not be copied, reproduced, or distributed without written permission.",
  },
  {
    title: "User Information",
    body: "By submitting information through our website, you agree that the details provided are accurate and may be used to respond to inquiries, improve services, and communicate with you.",
  },
  {
    title: "Confidentiality",
    body: "We maintain reasonable measures to protect sensitive information shared through our services. However, users are responsible for ensuring the security of information shared online.",
  },
  {
    title: "Third - Party Services",
    body: "Our website may integrate with third-party tools, platforms, or services. YMG Legal is not responsible for the policies or practices of external platforms.",
  },
  {
    title: "Limitation Of Liability",
    body: "YMG Legal shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.",
  },
  {
    title: "Service Modifications",
    body: "We reserve the right to modify, suspend, or discontinue any service or website content at any time without prior notice.",
  },
  {
    title: "Termination",
    body: "We reserve the right to restrict or terminate access to our services if any misuse, unlawful activity, or violation of these terms occurs.",
  },
  {
    title: "Governing Law",
    body: "These Terms & Conditions shall be governed and interpreted in accordance with applicable laws and regulations.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fff5e0] text-[#3d4145]">
      <section className="flex min-h-[360px] items-center justify-center px-5 pb-14 pt-[126px] text-center sm:px-8 lg:min-h-[400px] lg:px-12 lg:pb-16 lg:pt-[145px]">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-[clamp(3.1rem,7.2vw,6.4rem)] font-normal leading-none tracking-[0] text-[#3d4145]">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-8 max-w-[560px] text-[0.95rem] leading-[1.35] text-[#8a8c8e] sm:text-[1.08rem]">
            Welcome to YMG Legal. By accessing or using our website and
            services, you agree to comply with the following Terms &amp;
            Conditions. Please read them carefully before using our services.
          </p>
        </div>
      </section>

      <section className="bg-[#fff5e0]">
        <div className="bg-[#dfbd78] px-5 py-3 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="font-heading text-[clamp(1.35rem,2.4vw,2rem)] font-normal leading-tight tracking-[0]">
              Effective Date
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-[1120px] px-5 py-3 sm:px-8 lg:px-12">
          <p className="text-[0.92rem] text-[#8a8c8e] sm:text-[1rem]">
            (Insert date)
          </p>
        </div>

        <div className="mx-auto max-w-[1120px] px-5 pb-16 pt-4 sm:px-8 lg:px-12 lg:pb-20">
          <article className="space-y-8">
            {sections.map(({ title, body }) => (
              <section key={title}>
                <h2 className="font-heading text-[clamp(1.45rem,2.6vw,2.1rem)] font-normal leading-tight tracking-[0] text-[#3d4145]">
                  {title}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-[1.45] text-[#8a8c8e] sm:text-[1.05rem]">
                  {body}
                </p>
              </section>
            ))}

            <section>
              <h2 className="font-heading text-[clamp(1.45rem,2.6vw,2.1rem)] font-normal leading-tight tracking-[0] text-[#3d4145]">
                Contact Information
              </h2>
              <p className="mt-4 text-[0.95rem] leading-[1.45] text-[#8a8c8e] sm:text-[1.05rem]">
                For any questions regarding these Terms &amp; Conditions, please
                contact
              </p>
              <p className="mt-7 text-[0.95rem] leading-[1.45] text-[#3d4145] sm:text-[1.05rem]">
                YMG - Legal
                <br />
                www.ymg-legal.com
                <br />
                Las Vegas, Nevada
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
