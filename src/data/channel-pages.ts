import {
  BadgeCheck,
  BarChart3,
  Bot,
  Brain,
  Crosshair,
  Eye,
  FileSearch,
  FileText,
  Gauge,
  Heart,
  KeyRound,
  LayoutTemplate,
  Link2,
  ListChecks,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Network,
  Palette,
  PenLine,
  PhoneCall,
  Rocket,
  Search,
  Send,
  Settings,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type ChannelPoint = { title: string; body: string; Icon: LucideIcon };

export type ChannelContent = {
  /** Short name, used in the breadcrumb and buttons. */
  name: string;
  /** The headline: the channel in brass, then the rest. */
  title: [string, string];
  intro: string;
  photo: { src: string; alt: string };
  highlights: string[];
  why: { title: [string, string]; body: string; points: ChannelPoint[] };
  included: { title: string; items: { title: string; body?: string }[] };
  process: { title: string; steps: { title: string; Icon: LucideIcon }[] };
  results: { title: string; items: string[] };
  close: [string, string];
  /** Case types the channel promotes, shown as chips under "What's included". */
  areas?: string[];
  /** Two or three questions for the page's FAQ block (content guide service template). */
  faqs: { question: string; answer: string }[];
};

const sharedFaq = {
  question: "Can YMG work with our existing intake process?",
  answer:
    "We can structure workflows around the systems and processes your firm uses, subject to technical compatibility and the scope of the engagement.",
};

// Copy kept from the original channel pages, trimmed to the points a visitor reads at a glance.
export const channelPages: Record<string, ChannelContent> = {
  googleAds: {
    name: "Google Ads",
    title: ["Google Search Ads", "for law firms"],
    intro:
      "Reach people at the moment they search for legal help. We build, run and scale search campaigns that bring in calls, form fills and qualified case opportunities.",
    photo: {
      src: "/images/services/mkt-search.jpg",
      alt: "A phone open on a search engine",
    },
    highlights: ["Top of the results page", "Every call and form tracked"],
    why: {
      title: ["Found at the moment", "they need a lawyer."],
      body: "Search ads put your firm in front of people already looking for representation, so the intent is there before the first click.",
      points: [
        {
          title: "Immediate visibility",
          body: "Appear at the top of Google the moment someone searches for legal help.",
          Icon: Eye,
        },
        {
          title: "High-intent traffic",
          body: "Target searches that signal someone is ready to hire an attorney.",
          Icon: Crosshair,
        },
        {
          title: "More qualified calls",
          body: "Calls and consultation requests from prospects ready to act.",
          Icon: PhoneCall,
        },
        {
          title: "Scalable growth",
          body: "Grow case volume on campaigns tuned for the long run.",
          Icon: TrendingUp,
        },
      ],
    },
    included: {
      title: "What's included",
      items: [
        {
          title: "Campaign strategy",
          body: "Built around your practice areas and goals.",
        },
        {
          title: "Keyword research",
          body: "The legal searches that turn into cases.",
        },
        {
          title: "Ad copywriting",
          body: "Ads written to earn the click from the right person.",
        },
        {
          title: "Landing pages",
          body: "Pages built to turn visits into consultations.",
        },
        {
          title: "Conversion tracking",
          body: "Every call and form submission measured.",
        },
        {
          title: "Bid management",
          body: "Spend steered to what returns cases.",
        },
        {
          title: "Negative keywords",
          body: "Irrelevant searches filtered out.",
        },
        {
          title: "Monthly reporting",
          body: "Clear results and next steps, every month.",
        },
      ],
    },
    process: {
      title: "How we run your search campaigns",
      steps: [
        { title: "Research", Icon: FileSearch },
        { title: "Keywords", Icon: KeyRound },
        { title: "Ads", Icon: PenLine },
        { title: "Landing pages", Icon: LayoutTemplate },
        { title: "Launch", Icon: Rocket },
        { title: "Optimise & scale", Icon: TrendingUp },
      ],
    },
    results: {
      title: "Built to deliver more qualified cases",
      items: [
        "Higher click-through rates",
        "Lower cost per lead",
        "More qualified consultations",
        "Better return on ad spend",
      ],
    },
    close: ["Ready to show up", "when clients search?"],
    faqs: [
      {
        question: "Can campaigns target only our case types and markets?",
        answer:
          "Yes. Campaigns are built around the practice areas, case types and geographic markets your firm defines.",
      },
      {
        question: "How quickly can a campaign launch?",
        answer:
          "Campaigns can launch in as little as 1 week once targeting, tracking and your case criteria are agreed.",
      },
      sharedFaq,
    ],
  },

  metaAds: {
    name: "Meta Ads",
    title: ["Facebook & Instagram Ads", "for law firms"],
    intro:
      "Targeted Meta campaigns that reach the right people, build trust and generate consultations for accident, serious injury, mass tort and other high-value matters.",
    photo: {
      src: "/images/channels/meta.jpg",
      alt: "A phone showing a Facebook page beside a laptop",
    },
    highlights: ["Targeted by case type and area", "Creative built for legal"],
    why: {
      title: ["Where your next client", "scrolls every day."],
      body: "People spend hours on Facebook and Instagram. A well-run campaign keeps your firm visible and in mind before competitors reach them. These are the problems we fix first.",
      points: [
        {
          title: "Poor targeting",
          body: "Ads shown to the wrong people waste budget and lower lead quality.",
          Icon: Target,
        },
        {
          title: "High cost per lead",
          body: "Weak campaign structure produces expensive, low-converting leads.",
          Icon: Wallet,
        },
        {
          title: "Weak creative",
          body: "Generic ads don't stop the scroll or move people to act.",
          Icon: Palette,
        },
        {
          title: "Low conversion",
          body: "Clicks mean nothing if visitors never book a consultation.",
          Icon: MousePointerClick,
        },
      ],
    },
    included: {
      title: "What we deliver",
      items: [
        {
          title: "Campaign planning",
          body: "Research into your practice areas, audience and market.",
        },
        {
          title: "Audience targeting",
          body: "Location, demographics, interests and behaviour.",
        },
        {
          title: "Legal-ready creative",
          body: "Visuals and copy made for legal services.",
        },
        {
          title: "Landing pages",
          body: "Built to turn visits into consultations.",
        },
        {
          title: "Retargeting",
          body: "Stay in front of people who showed interest.",
        },
        {
          title: "Video & carousel ads",
          body: "Formats that hold attention in the feed.",
        },
        {
          title: "A/B creative testing",
          body: "Keep what works, drop what doesn't.",
        },
        {
          title: "Conversion tracking",
          body: "Every lead attributed to its campaign.",
        },
        {
          title: "Local audience targeting",
          body: "Campaigns focused on the cities and regions your firm serves.",
        },
        {
          title: "Performance reporting",
          body: "Clear reports on spend, leads and consultations.",
        },
      ],
    },
    areas: [
      "Motor vehicle accidents",
      "Truck accidents",
      "Motorcycle accidents",
      "Slip & fall",
      "Premises liability",
      "Medical malpractice",
      "Workers' compensation",
      "Mass tort litigation",
      "Class actions",
      "Wrongful death",
    ],
    process: {
      title: "How we run your Meta campaigns",
      steps: [
        { title: "Discovery", Icon: FileSearch },
        { title: "Audiences", Icon: Users },
        { title: "Creative", Icon: Palette },
        { title: "Launch", Icon: Rocket },
        { title: "Optimise", Icon: Settings },
        { title: "Scale", Icon: TrendingUp },
      ],
    },
    results: {
      title: "What we work toward",
      items: [
        "More qualified consultations",
        "Lower cost per lead",
        "Better return on ad spend",
      ],
    },
    close: ["Ready to reach clients", "where they scroll?"],
    faqs: [
      {
        question: "Which practice areas can Meta ads promote?",
        answer:
          "Campaigns can promote accident, injury, mass tort, class action and other practice areas your firm handles, subject to Meta's advertising policies.",
      },
      {
        question: "Where do the leads go?",
        answer:
          "Leads can be routed straight to your intake team or handled by YMG intake first, depending on the engagement.",
      },
      sharedFaq,
    ],
  },

  localServicesAds: {
    name: "Local Services Ads",
    title: ["Local Services Ads", "for law firms"],
    intro:
      "Google's pay-per-lead ads put your firm above the regular search ads, with the Google Screened badge, when people nearby are ready to hire.",
    photo: {
      src: "/images/channels/lsa.jpg",
      alt: "A phone showing local results on a map",
    },
    highlights: ["Above the regular ads", "Pay per lead, not per click"],
    why: {
      title: ["Be the first firm", "clients call."],
      body: "When someone searches “car accident attorney near me”, Local Services Ads sit at the very top. Google Screened verification earns trust before the first call.",
      points: [
        {
          title: "Premium placement",
          body: "Above traditional search ads and organic listings.",
          Icon: TrendingUp,
        },
        {
          title: "Pay for leads",
          body: "You pay for leads, not for every click.",
          Icon: Wallet,
        },
        {
          title: "Google Screened",
          body: "A trust badge that sets your firm apart.",
          Icon: BadgeCheck,
        },
        {
          title: "Local reach",
          body: "Shown to people in the areas you serve.",
          Icon: MapPin,
        },
      ],
    },
    included: {
      title: "What we manage",
      items: [
        {
          title: "Profile optimisation",
          body: "A profile that earns visibility and trust.",
        },
        {
          title: "Google Screened verification",
          body: "We guide your firm through the checks.",
        },
        {
          title: "Practice area targeting",
          body: "The right case types and service areas.",
        },
        {
          title: "Lead management",
          body: "Every call and message answered and qualified.",
        },
        {
          title: "Budget & bidding",
          body: "More qualified leads for the same spend.",
        },
        {
          title: "Performance reporting",
          body: "Calls, consultations, cost per lead and return.",
        },
      ],
    },
    process: {
      title: "How we manage your LSA account",
      steps: [
        { title: "Account setup", Icon: Settings },
        { title: "Verification", Icon: BadgeCheck },
        { title: "Launch", Icon: Rocket },
        { title: "Lead quality", Icon: ListChecks },
        { title: "Growth", Icon: TrendingUp },
      ],
    },
    results: {
      title: "What it means for your firm",
      items: [
        "More high-intent calls",
        "More consultations booked",
        "Lower cost per acquisition",
        "Stronger local visibility",
      ],
    },
    close: ["Ready to be the first", "firm they call?"],
    faqs: [
      {
        question: "Do we pay per click with Local Services Ads?",
        answer:
          "No. Local Services Ads are charged per lead rather than per click. Google sets lead pricing and its own verification requirements.",
      },
      {
        question: "Do you handle the Google verification?",
        answer:
          "We guide your firm through Google's screening and verification steps and set up the profile, budget and lead handling.",
      },
      sharedFaq,
    ],
  },

  seo: {
    name: "SEO",
    title: ["Search engine optimisation", "for law firms"],
    intro:
      "Rank for the searches that bring in serious injury, mass tort and complex cases, not just traffic. Every change is aimed at qualified inquiries.",
    photo: {
      src: "/images/channels/seo.jpg",
      alt: "Search performance charts on a laptop",
    },
    highlights: ["Rankings that bring cases", "Monthly progress reports"],
    why: {
      title: ["Why most firms never", "reach page one."],
      body: "Most firms lose search traffic for the same handful of reasons. We fix them in order of impact.",
      points: [
        {
          title: "Wrong keywords",
          body: "Ranking for terms that never become cases.",
          Icon: KeyRound,
        },
        {
          title: "Thin content",
          body: "Pages that don't answer what clients ask.",
          Icon: FileText,
        },
        {
          title: "Weak authority",
          body: "Too few trusted sites pointing to yours.",
          Icon: Link2,
        },
        {
          title: "Slow, messy site",
          body: "Speed and structure problems that hold rankings down.",
          Icon: Gauge,
        },
      ],
    },
    included: {
      title: "What's included",
      items: [
        {
          title: "Keyword research",
          body: "Searches that convert into real cases.",
        },
        { title: "Technical SEO", body: "Speed, indexing and site health." },
        { title: "On-page SEO", body: "Every page tuned to rank." },
        { title: "Local SEO", body: "Google Maps and local search." },
        {
          title: "Content strategy",
          body: "Authority content clients look for.",
        },
        { title: "Link building", body: "Trusted links that lift rankings." },
        {
          title: "Analytics",
          body: "Rankings, traffic and qualified leads tracked.",
        },
        {
          title: "Conversion work",
          body: "More visitors turned into signed cases.",
        },
      ],
    },
    process: {
      title: "How we grow your rankings",
      steps: [
        { title: "Audit", Icon: FileSearch },
        { title: "Competitors", Icon: Users },
        { title: "Keywords", Icon: KeyRound },
        { title: "Technical fixes", Icon: Settings },
        { title: "Content", Icon: PenLine },
        { title: "Authority", Icon: Link2 },
        { title: "Reporting", Icon: BarChart3 },
      ],
    },
    results: {
      title: "SEO that shows up in your caseload",
      items: [
        "More organic traffic",
        "More qualified leads",
        "Higher rankings",
        "Lower long-term cost per case",
      ],
    },
    close: ["Ready to rank for", "the cases you want?"],
    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "SEO builds over months rather than days. Progress is reported monthly, so you can see rankings, traffic and inquiries change.",
      },
      {
        question: "Do you write the content?",
        answer:
          "Yes. Content is planned around the searches your prospective clients make and the case types your firm wants more of.",
      },
      sharedFaq,
    ],
  },

  aiSearch: {
    name: "AI Search",
    title: ["AI search optimisation", "for law firms"],
    intro:
      "Structure your site and content so AI-powered search recognises your firm as a trusted authority and recommends you when people ask for legal help.",
    photo: {
      src: "/images/channels/ai-search.jpg",
      alt: "A person typing a question into an AI search page",
    },
    highlights: ["Recommended, not just ranked", "Built on solid SEO"],
    why: {
      title: ["Clients now ask AI", "which lawyer to call."],
      body: "People ask assistants questions like “Which lawyer should I hire after a car accident?” We make sure your firm is the answer they get.",
      points: [
        {
          title: "Site structure",
          body: "An architecture AI systems can read and trust.",
          Icon: Network,
        },
        {
          title: "Answer-first content",
          body: "Content that directly answers client questions.",
          Icon: MessageCircle,
        },
        {
          title: "Brand authority",
          body: "Consistent facts, citations and trust signals.",
          Icon: BadgeCheck,
        },
        {
          title: "Technical foundation",
          body: "Structured data, speed and crawlability.",
          Icon: Settings,
        },
      ],
    },
    included: {
      title: "What we optimise",
      items: [
        {
          title: "Website structure",
          body: "Clear architecture AI can navigate.",
        },
        {
          title: "Content",
          body: "Authoritative answers to real client questions.",
        },
        {
          title: "Entity & brand authority",
          body: "Consistent business information and citations.",
        },
        {
          title: "Technical SEO",
          body: "Structured data, metadata and indexing.",
        },
        {
          title: "Knowledge graph",
          body: "A recognisable, well-described brand.",
        },
        {
          title: "E-E-A-T",
          body: "Experience, expertise, authority and trust shown on every page.",
        },
        {
          title: "Built for law firms",
          body: "Strategies made for personal injury, mass tort and litigation-focused firms.",
        },
        {
          title: "AI-ready strategy",
          body: "Plans that adapt as AI search tools and their answers change.",
        },
      ],
    },
    process: {
      title: "How we prepare your firm for AI search",
      steps: [
        { title: "Audit", Icon: FileSearch },
        { title: "Content plan", Icon: Brain },
        { title: "Technical work", Icon: Settings },
        { title: "Authority", Icon: BadgeCheck },
        { title: "Monitor & adapt", Icon: Bot },
      ],
    },
    results: {
      title: "What it means for your firm",
      items: [
        "More AI-generated referrals",
        "Visibility beyond classic search",
        "More qualified organic inquiries",
        "A trusted legal authority",
        "Long-term digital growth",
      ],
    },
    close: ["Ready to be the firm", "AI recommends?"],
    faqs: [
      {
        question: "What is AI search visibility?",
        answer:
          "It is how often AI assistants and AI-powered search results mention or recommend your firm. We structure your site, content and business information so these tools can find and cite it.",
      },
      {
        question: "Does AI search replace SEO?",
        answer:
          "No. AI search builds on a strong SEO foundation, so the two are planned together.",
      },
      sharedFaq,
    ],
  },

  organicSocial: {
    name: "Organic Social",
    title: ["Organic social media", "for law firms"],
    intro:
      "Stay in front of prospective clients and referral partners with consistent, on-brand content that builds credibility between cases.",
    photo: {
      src: "/images/channels/social.jpg",
      alt: "A phone showing a social media feed",
    },
    highlights: ["Content planned for you", "Monthly performance reports"],
    why: {
      title: ["A brand clients", "remember."],
      body: "Clients check your firm's online presence before they reach out. Consistent social content builds the trust that turns a search into a call.",
      points: [
        {
          title: "Brand awareness",
          body: "Your firm stays visible with well-made, regular content.",
          Icon: Eye,
        },
        {
          title: "Trust",
          body: "Helpful content positions your firm as the authority.",
          Icon: Heart,
        },
        {
          title: "Engagement",
          body: "Conversations that turn followers into clients.",
          Icon: MessageCircle,
        },
        {
          title: "Long-term growth",
          body: "A recognisable brand that keeps bringing cases.",
          Icon: TrendingUp,
        },
      ],
    },
    included: {
      title: "What's included",
      items: [
        {
          title: "Social media strategy",
          body: "Built around your goals and practice areas.",
        },
        {
          title: "Content calendar",
          body: "A planned month of posts, approved in advance.",
        },
        {
          title: "Graphic design",
          body: "Branded visuals that look like your firm.",
        },
        {
          title: "Caption writing",
          body: "Copy that informs and builds trust.",
        },
        {
          title: "Multi-platform publishing",
          body: "Facebook, Instagram, LinkedIn, X and more.",
        },
        {
          title: "Community engagement",
          body: "Comments monitored and answered.",
        },
        {
          title: "Performance reporting",
          body: "Growth, engagement and what's working.",
        },
        {
          title: "Brand consistency",
          body: "One look and voice on every channel.",
        },
      ],
    },
    process: {
      title: "How we run your social",
      steps: [
        { title: "Discovery", Icon: FileSearch },
        { title: "Planning", Icon: ListChecks },
        { title: "Design", Icon: Palette },
        { title: "Writing", Icon: PenLine },
        { title: "Your approval", Icon: BadgeCheck },
        { title: "Publishing", Icon: Send },
        { title: "Optimise", Icon: Sparkles },
      ],
    },
    results: {
      title: "A stronger brand presence",
      items: [
        "More brand awareness",
        "Higher engagement",
        "Greater credibility",
        "Stronger referral relationships",
      ],
    },
    close: ["Ready to stay", "top of mind?"],
    faqs: [
      {
        question: "Do we approve posts before they go live?",
        answer:
          "Yes. Every post is shared for your approval before it is published.",
      },
      {
        question: "Which platforms do you manage?",
        answer:
          "Platforms are chosen with your firm, based on where your prospective clients and referral sources spend time.",
      },
      sharedFaq,
    ],
  },

  websiteDesign: {
    name: "Website Design",
    title: ["Law firm websites", "built to convert"],
    intro:
      "We build law firm landing pages and websites designed to turn relevant search and advertising traffic into calls, inquiries, and qualified opportunities.",
    photo: {
      src: "/images/channels/website.jpg",
      alt: "A website being reviewed on a laptop",
    },
    highlights: ["Websites and landing pages", "Mobile-first and SEO-ready"],
    why: {
      title: ["Your website is the", "first impression."],
      body: "A slow, dated or confusing site costs cases before a conversation starts. We build sites that earn trust in seconds.",
      points: [
        {
          title: "Custom WordPress",
          body: "Built for your firm and its practice areas.",
          Icon: LayoutTemplate,
        },
        {
          title: "Mobile-first",
          body: "Flawless on every phone and tablet.",
          Icon: Smartphone,
        },
        {
          title: "SEO-ready",
          body: "Clean code and structure from day one.",
          Icon: Search,
        },
        {
          title: "Conversion-focused",
          body: "Every page designed to bring consultations.",
          Icon: MousePointerClick,
        },
      ],
    },
    included: {
      title: "What every site includes",
      items: [
        {
          title: "Campaign landing pages",
          body: "Campaign-specific landing experiences that turn qualified traffic into calls and inquiries.",
        },
        { title: "Fast performance" },
        { title: "Mobile & tablet responsive" },
        { title: "Core Web Vitals optimised" },
        { title: "SEO-friendly structure" },
        { title: "Secure, scalable platform" },
        { title: "Conversion-focused design" },
        { title: "Easy content management" },
        { title: "Analytics & tracking" },
      ],
    },
    process: {
      title: "How we build your site",
      steps: [
        { title: "Discovery", Icon: FileSearch },
        { title: "Wireframes", Icon: LayoutTemplate },
        { title: "Design", Icon: Palette },
        { title: "Development", Icon: Settings },
        { title: "SEO & speed", Icon: Gauge },
        { title: "Launch", Icon: Rocket },
      ],
    },
    results: {
      title: "What we build for",
      items: [
        "Faster load speed",
        "Higher rankings",
        "More qualified leads",
        "Better conversion rate",
      ],
    },
    close: ["Ready for a site that", "wins more cases?"],
    faqs: [
      {
        question: "Do you build landing pages as well as full websites?",
        answer:
          "Yes. We build full law firm websites and campaign-specific landing pages designed to turn search and advertising traffic into calls and inquiries.",
      },
      {
        question: "Can we edit the site ourselves?",
        answer:
          "Yes. Sites are built on a content management system your team can update.",
      },
      sharedFaq,
    ],
  },
};
