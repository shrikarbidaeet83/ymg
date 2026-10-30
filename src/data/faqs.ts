export type Faq = { question: string; answer: string; answerHtml?: string };

export const builtInFaqs: Faq[] = [
  {
    question: "What services does YMG Legal provide?",
    answer:
      "YMG Legal provides lead generation, intake optimization, client follow-up systems, call handling, signed-retainer workflows, and legal growth support tailored for high-volume firms.",
  },
  {
    question: "How does YMG Legal help law firms grow?",
    answer:
      "We generate qualified leads, optimize intake processes, and improve conversion rates to help firms secure more signed cases.",
  },
  {
    question: "What types of law firms do you work with?",
    answer:
      "We work exclusively with plaintiff law firms across personal injury, mass torts, class action, medical malpractice, workers' compensation, and Social Security disability. Every campaign is built around the case criteria your firm sets.",
  },
  {
    question: "How can I get started with YMG Legal?",
    answer:
      "You can get started by booking a strategy call with our team. We will review your goals, current intake process, and growth opportunities before recommending the right setup.",
  },
  {
    question: "Do you provide exclusive leads?",
    answer:
      "Yes. Depending on campaign structure and market, we can build lead programs focused on exclusivity, higher qualification standards, and cleaner intake handoff.",
  },
  {
    question: "Do you offer after-hours or weekend intake support?",
    answer:
      "Yes. We can support firms with extended coverage, after-hours workflows, and response systems that reduce missed opportunities outside normal business hours.",
  },
  {
    question: "Can YMG Legal integrate with our CRM or case management tools?",
    answer:
      "Yes. We can align intake and lead workflows with your CRM, CMS, and reporting stack so your team has clearer visibility into every stage of the pipeline.",
  },
  {
    question: "How do you track campaign and intake performance?",
    answer:
      "We use reporting dashboards, lead-source attribution, intake metrics, and conversion tracking to identify what is performing and where revenue opportunities are being lost.",
  },
  {
    question: "Is your process compliant and secure?",
    answer:
      "Yes. Our workflows are designed with privacy, secure information handling, and professional intake standards in mind, including processes that support sensitive client communications.",
  },
];

// The five a managing partner asks first, shown on the home page.
export const homeFaqQuestions = [
  "What types of law firms do you work with?",
  "Do you offer after-hours or weekend intake support?",
  "Can YMG Legal integrate with our CRM or case management tools?",
  "Is your process compliant and secure?",
  "How can I get started with YMG Legal?",
];
