import Image from "next/image";
import Link from "next/link";

const contactItems = [
  { icon: "/contact_icons/phone.png", value: "(313) 306-5055" },
  { icon: "/contact_icons/message.png", value: "info@ymg-legal.com" },
  { icon: "/contact_icons/location.png", value: "Las Vegas, Nevada" },
  { icon: "/contact_icons/Vector (4).png", value: "LinkedIn" },
];

export default function ContactConversationContent({
  className = "",
  variant = "default",
  fullBleed = false,
  homeTypography = false,
}: {
  className?: string;
  variant?: "default" | "gold";
  fullBleed?: boolean;
  homeTypography?: boolean;
}) {
  const isGold = variant === "gold";

  return (
    <div className={`ymg-contact-conversation ymg-radial-wide grid items-center gap-10 text-left lg:grid-cols-12 lg:gap-x-12 ${fullBleed ? "relative isolate py-16 before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-screen before:-translate-x-1/2 before:bg-[#D8B26B] sm:py-20 lg:py-[80px]" : ""} ${className}`}>
      <div className="lg:col-span-5 lg:flex lg:h-full lg:flex-col lg:justify-center lg:self-stretch">
        <p className={`${homeTypography ? "text-[14px] lg:text-[15px] 2xl:text-[16px]" : "text-[0.7rem] lg:text-[1.05rem]"} ${isGold ? "text-[#404040]" : "text-[#D8B26B]"}`}>Contact Us</p>
        <h2 className={`mt-3 font-heading font-normal leading-tight lg:mt-4 ${homeTypography ? "text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[52px]" : "text-[clamp(2rem,4vw,2.5rem)]"} ${isGold ? "text-[#404040]" : "text-[#D8B26B]"}`}>
          {isGold ? "Let's Start a Conversation" : "Ready to Grow Your Firm?"}
        </h2>
        {!isGold && (
          <p className={`mt-3 font-medium text-[#D8B26B] lg:mt-4 ${homeTypography ? "text-[19px] sm:text-[21px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]" : "text-[0.9rem] sm:text-[1.1rem]"}`}>
            Let&apos;s build your pipeline of qualified cases.
          </p>
        )}

        <div className={`mt-7 hidden lg:mt-12 lg:flex lg:flex-wrap lg:gap-x-10 lg:gap-y-6 ${isGold ? "text-[#404040]" : "text-[#D8B26B]"}`}>
          {contactItems.map(({ icon, value }) => (
            <div key={value} className="flex flex-col items-center gap-3 lg:items-start">
              <span className={`flex h-9 w-9 items-center justify-center rounded-[3px] ${isGold ? "border border-[#404040]/60" : ""}`}>
                <Image src={icon} alt="" width={22} height={22} className={`h-5 w-5 object-contain ${isGold ? "brightness-0" : ""}`} />
              </span>
              <p className={`whitespace-nowrap font-medium ${homeTypography ? "text-[14px] lg:text-[15px] 2xl:text-[16px]" : "text-[0.88rem]"}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`mx-auto w-full max-w-[320px] rounded-[6px] bg-white p-5 text-left text-[#3d4145] shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:col-span-7 lg:col-start-6 lg:mr-0 lg:max-w-[640px] lg:self-center lg:p-8 xl:p-10 ${isGold ? "border border-white" : "border border-[#D8B26B]"}`}>
        <h3 className={`font-medium ${homeTypography ? "text-[23px] sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px]" : "text-[0.92rem] lg:text-[1.25rem]"}`}>
          {isGold ? "Ready to Grow Your Firm?" : "Let's Start a Conversation"}
        </h3>
        {isGold && (
          <p className={`mt-2 leading-[1.45] text-[#55585a] lg:mt-3 ${homeTypography ? "text-[16px] lg:text-[17px] 2xl:text-[18px]" : "text-[0.95rem] lg:text-[0.75rem]"}`}>
            Let&apos;s build your pipeline of qualified cases.
          </p>
        )}
        <p className={`mt-2 max-w-[420px] leading-[1.45] text-[#55585a] lg:mt-3 ${homeTypography ? "text-[16px] lg:text-[17px] 2xl:text-[18px]" : "text-[0.95rem] lg:text-[0.75rem]"}`}>
          Tell us about your firm and we&apos;ll show you how we can help.
        </p>

        <form className="mt-4 grid gap-2 lg:mt-5 lg:gap-3">
          <div className={`grid gap-3 ${isGold ? "sm:grid-cols-2" : ""}`}>
            <input name="name" autoComplete="name" required aria-label="Name" placeholder="Name *" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" />
            <input name="law-firm" autoComplete="organization" required aria-label="Law Firm" placeholder="Law Firm *" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" />
            <input name="title" autoComplete="organization-title" aria-label="Title" placeholder="Title" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" />
            <input name="email" type="email" autoComplete="email" required aria-label="Email" placeholder="Email *" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" />
            <input name="phone" type="tel" autoComplete="tel" required aria-label="Phone Number" placeholder="Phone Number *" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" />
            <select name="practice-area" required aria-label="Practice Area" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] text-[#55585a] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" defaultValue="">
              <option value="" disabled>Practice Area</option>
              <option>Personal Injury</option>
              <option>MVA</option>
              <option>Mass Torts</option>
              <option>Class Action</option>
              <option>Medical Malpractice</option>
              <option>Workers&apos; Compensation</option>
              <option>Social Security Disability</option>
              <option>Other</option>
            </select>
            <select name="service-interest" required aria-label="Service of Interest" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] text-[#55585a] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" defaultValue="">
              <option value="" disabled>Service of Interest *</option>
              <option>Personal Injury Leads</option>
              <option>MVA Leads</option>
              <option>Mass Tort Leads</option>
              <option>Class Action Leads</option>
              <option>Pay-Per-Call</option>
              <option>Outbound Client Acquisition</option>
              <option>Legal Intake</option>
              <option>Retainer &amp; E-Sign</option>
              <option>Live Chat &amp; Text</option>
              <option>AI-Powered Booking</option>
              <option>Law Firm Marketing</option>
              <option>Paralegal / Law Firm Support</option>
              <option>Legal Virtual Assistants</option>
            </select>
            <input name="markets" aria-label="States or Markets" placeholder="States / Markets" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" />
            <select name="monthly-volume" aria-label="Approximate Monthly Volume" className="h-11 rounded-[4px] border border-[#cdbb97] bg-white px-3 text-[0.95rem] text-[#55585a] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]" defaultValue="">
              <option value="" disabled>Approx. Monthly Volume</option>
              <option>Under 25</option>
              <option>25–100</option>
              <option>100–500</option>
              <option>500+</option>
            </select>
          </div>
          <textarea name="requirements" aria-label="Additional Requirements" placeholder="Additional requirements" rows={3} className="resize-y rounded-[4px] border border-[#cdbb97] bg-white px-3 py-2 text-[0.95rem] outline-none lg:px-4 lg:text-[0.75rem]" />
          {/* SMS/call consent: unchecked by default and optional on this B2B form, per the SMS Terms.
              Wording is the policies draft and still needs counsel approval. */}
          <label className="flex items-start gap-2 text-[0.78rem] leading-[1.5] text-[#55585a] lg:gap-2.5 lg:text-[0.68rem]">
            <input type="checkbox" name="sms-consent" value="sms-terms:draft-1" className="mt-[0.15em] h-4 w-4 shrink-0 accent-[#404040] lg:h-3.5 lg:w-3.5" />
            <span>
              By checking this box, I agree that YMG Legal may call and text me at the number provided, including using automated technology and prerecorded messages, about my inquiry. Consent is not required to receive services. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to opt out, HELP for help. I agree to the{" "}
              <Link href="/terms" className="underline underline-offset-2">Terms of Use</Link>,{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link> and{" "}
              <Link href="/sms-terms" className="underline underline-offset-2">SMS Terms</Link>.
            </span>
          </label>
          <Link href="/contact#booking" className="mt-1 flex h-[52px] items-center justify-center rounded-[4px] bg-[#404040] px-8 text-sm font-bold text-[#FFF5E0] shadow-[0_12px_28px_rgba(26,26,26,0.18)] transition-colors hover:bg-[#505050]">
            Continue to Booking
          </Link>
        </form>
      </div>

      <div className={`grid grid-cols-2 gap-x-4 gap-y-5 lg:hidden ${isGold ? "text-[#404040]" : "text-[#D8B26B]"}`}>
        {contactItems.map(({ icon, value }) => (
          <div key={value} className="flex flex-col items-center gap-2 text-center">
            <span className={`flex h-8 w-8 items-center justify-center rounded-[3px] ${isGold ? "border border-[#404040]/60" : ""}`}>
              <Image src={icon} alt="" width={14} height={14} className={`h-[13px] w-[13px] object-contain ${isGold ? "brightness-0" : ""}`} />
            </span>
            <p className="break-all text-[0.85rem] font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
