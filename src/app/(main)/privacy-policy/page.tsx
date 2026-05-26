import LegalPage from "@/src/components/shared/LegalPage";

export const metadata = {
  title: "Privacy Policy — YMG Legal",
  description: "Learn how YMG Legal collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "Overview",
    paragraphs: [
      "By visiting www.ymg-legal.com you are consenting to our privacy policy. The Young Marketing Group (YMG-Legal) is committed to protecting your privacy online. This privacy policy describes the personal information we collect through this website and how we collect and use that information.",
      "Use of the Young Marketing Group (YMG-Legal), including all materials presented herein and all online services provided by the Young Marketing Group, is subject to the following privacy policy. This privacy policy applies to all site visitors, customers, and all other users of the site. By using the site or service, you agree to this privacy policy, without modification, and acknowledge reading it.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "This Site only collects the personal information you voluntarily provide to us, which may include:",
    ],
    list: ["Email Address", "First and Last Name", "Social Media handles"],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "The information you provide is used to send periodic emails, and improve the service we provide. We do share your information with trusted third parties who assist us in operating our website, conducting our business, and servicing clients and visitors. These trusted third parties agree to keep this information confidential. Your personal information will never be shared with unrelated third parties.",
    ],
  },
  {
    title: "Activity",
    paragraphs: [
      "We may record information relating to your use of the Site, such as the searches you undertake, the pages you view, your browser type, IP address, requested URL, referring URL, and timestamp information. We use this type of information to administer the Site and provide the highest possible level of service to you. We also use this information in the aggregate to perform statistical analyses of user behavior and characteristics in order to measure interest in and use of the various areas of the Site.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "We may send cookies to your computer in order to uniquely identify your browser and improve the quality of our service. The term \"cookies\" refers to small pieces of information that a website sends to your computer's hard drive while you are viewing the Site. We may use both session cookies (which expire once you close your browser) and persistent cookies (which stay on your computer until you delete them). You have the ability to accept or decline cookies using your web browser settings. If you choose to disable cookies, some areas of the Site may not work properly or at all.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "The Site may contain links to third-party websites. Except as otherwise discussed in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you on our Site. Other sites accessible through our site via links or otherwise have their own policies in regard to privacy. We are not responsible for the privacy policies or practices of third parties.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We maintain security measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no exchange of data over the Internet can be guaranteed as 100% secure. While we make every effort to protect your personal information shared with us through our Site, you acknowledge that the personal information you voluntarily share with us through this Site could be accessed or tampered with by a third party. You agree that we are not responsible for any intercepted information shared through our Site without our knowledge or permission. Additionally, you release us from any and all claims arising out of or related to the use of such intercepted information in any unauthorized manner.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "The Young Marketing Group (YMG-Legal) does not knowingly collect or solicit personal information from anyone under the age of 13. If you are under 13, please do not send any information about yourself to us, including your name, address, telephone number, or email address. In the event that we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Last Updated: April 2026"
      title="Privacy Policy"
      subtitle="Your data. Protected and secure. We are committed to protecting your personal information and maintaining transparency in how your data is collected, used, and safeguarded."
      sections={SECTIONS}
    />
  );
}
