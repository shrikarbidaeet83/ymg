export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "what-is-a-mass-tort",
    title: "What Is a Mass Tort and How Does It Work?",
    excerpt:
      "Mass torts allow many victims of the same harmful product or action to pursue compensation together. Here's what that means for your firm.",
    date: "May 12, 2026",
    category: "Mass Torts",
    readTime: "4 min read",
    body: `Mass tort litigation allows a large number of plaintiffs who have suffered similar injuries from the same defendant — often a pharmaceutical company or manufacturer — to bring their claims in a coordinated fashion.\n\nUnlike class actions, each plaintiff in a mass tort retains their own case and is evaluated individually for damages. This distinction is important: it means compensation is tailored to each victim's specific harm.\n\nFor law firms, mass torts represent a significant opportunity. High case volumes, strong settlement potential, and clear liability paths make them one of the most valuable practice areas in plaintiff-side litigation.`,
  },
  {
    slug: "hair-relaxer-cancer-lawsuit-2026",
    title: "Hair Relaxer Cancer Lawsuits: What Firms Need to Know in 2026",
    excerpt:
      "Studies link chemical hair relaxers to uterine and ovarian cancer. Law firms acquiring these cases need a strong intake and marketing strategy.",
    date: "April 28, 2026",
    category: "Hair Relaxer",
    readTime: "5 min read",
    body: `Research published in peer-reviewed journals has established a statistical link between long-term use of chemical hair relaxers and elevated rates of uterine cancer and ovarian cancer, particularly in Black women who used these products frequently over many years.\n\nMultidistrict litigation (MDL) has been established, and thousands of cases are actively being filed. For plaintiff firms, the intake window is open — but competition for qualified claimants is intensifying.\n\nYMG Legal specializes in connecting firms with pre-screened, case-ready claimants in this vertical. Our qualification criteria are built around the current MDL requirements so your team spends time on cases, not dead leads.`,
  },
  {
    slug: "talcum-powder-lawsuits-guide",
    title: "Talcum Powder Lawsuits: A Guide for Law Firms",
    excerpt:
      "Johnson & Johnson's talc litigation has produced some of the largest verdicts in product liability history. Here's where things stand.",
    date: "April 10, 2026",
    category: "Talcum Powder",
    readTime: "6 min read",
    body: `Talcum powder litigation against Johnson & Johnson has produced multi-billion dollar verdicts and reshaped how courts approach corporate liability in consumer product cases.\n\nThe core allegation: J&J knew for decades that its baby powder contained asbestos-contaminated talc linked to ovarian cancer and mesothelioma, yet failed to warn consumers.\n\nDespite J&J's attempts to resolve liability through a series of bankruptcy maneuvers, claims continue to be filed and litigated. Firms acquiring talc cases in 2026 should focus on claimants with documented ovarian cancer diagnoses and confirmed long-term product use.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
