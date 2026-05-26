import BlogHero from "@/src/components/blog/BlogHero";
import BlogList from "@/src/components/blog/BlogList";
import GuideSection from "@/src/components/blog/GuideSection";
import CtaSection from "@/src/components/home/CtaSection";
import ContactSection from "@/src/components/home/ContactSection";

export const metadata = {
  title: "Blog — Insights That Drive Legal Growth | YMG Legal",
  description:
    "Expert strategies, industry trends, and proven marketing insights to help law firms generate more cases and scale faster.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <CtaSection />
      <ContactSection />
      <GuideSection />
    </>
  );
}
