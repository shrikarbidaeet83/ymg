import { CheckCircle2 } from "lucide-react";

const guideSteps = [
  "We handle your incoming calls and leads",
  "We follow up, quickly",
  "We process all information and hand it to you",
  "We manage scheduling efficiently",
  "Report, Analyze, Improve",
];

export default function GuideEveryStepSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] text-[#EBC982]">
      <div className="mx-auto grid min-h-[560px] w-full max-w-[1440px] items-center lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 px-5 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20 lg:text-left xl:px-20">
          <p className="text-[0.82rem] font-medium sm:text-[0.95rem]">
            Step of the way
          </p>

          <h2 className="mx-auto mt-6 max-w-[540px] font-heading text-[clamp(1.75rem,4.48vw,2.4rem)] font-semibold leading-[1.38] lg:mx-0">
            <span className="block whitespace-nowrap">How We Guide You</span>
            <span className="block whitespace-nowrap">Every Step of the Way</span>
          </h2>

          <ul className="mx-auto mt-8 max-w-[540px] space-y-5 text-left lg:mx-0">
            {guideSteps.map((step) => (
              <li key={step} className="flex items-start gap-3 text-[0.88rem] leading-[1.45] sm:text-[1rem]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="relative min-h-[340px] self-stretch bg-[length:contain] bg-bottom bg-no-repeat sm:min-h-[430px] lg:min-h-[560px] lg:bg-right-bottom"
          style={{ backgroundImage: "url('/watchh.webp')" }}
        />
      </div>
    </section>
  );
}
