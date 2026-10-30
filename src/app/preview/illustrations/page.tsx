import type { Metadata } from "next";
import IntakeNightShift from "@/components/illustrations/IntakeNightShift";
import CriteriaScreening from "@/components/illustrations/CriteriaScreening";
import FollowUpSequence from "@/components/illustrations/FollowUpSequence";
import SearchToLead from "@/components/illustrations/SearchToLead";
import RetainerSigning from "@/components/illustrations/RetainerSigning";
import CaseOnboarding from "@/components/illustrations/CaseOnboarding";
import MedicalChronology from "@/components/illustrations/MedicalChronology";
import PayPerCall from "@/components/illustrations/PayPerCall";
import PipelineBoard from "@/components/illustrations/PipelineBoard";
import LocalVisibility from "@/components/illustrations/LocalVisibility";

// Internal review page for the illustration prototypes. Not linked anywhere and kept out of search.
export const metadata: Metadata = {
  title: "Illustration preview | YMG Legal",
  robots: { index: false, follow: false },
};

const scenes = [
  { name: "24/7 intake", note: "Legal Intake, home page", Component: IntakeNightShift },
  { name: "Lead screening", note: "PI, MVA, Mass Tort and Legal Intake pages", Component: CriteriaScreening },
  { name: "Follow-up sequence", note: "Legal Intake, How It Works", Component: FollowUpSequence },
  { name: "Case generation", note: "Law Firm Marketing, PI and MVA lead pages", Component: SearchToLead },
  { name: "Retainer execution", note: "Legal Intake, home page", Component: RetainerSigning },
  { name: "Case onboarding", note: "Paralegal & Law Firm Support", Component: CaseOnboarding },
  { name: "Records and chronology", note: "Paralegal & Law Firm Support", Component: MedicalChronology },
  { name: "Pay-per-call", note: "PI and MVA lead pages", Component: PayPerCall },
  { name: "Pipeline board", note: "Home, How It Works, Legal Intake", Component: PipelineBoard },
  { name: "Local search visibility", note: "SEO, Law Firm Marketing", Component: LocalVisibility },
];

export default function IllustrationPreviewPage() {
  return (
    <section className="ymg-section-padding bg-[#FFF5E0] pt-[130px]">
      <div className="mx-auto grid max-w-[980px] gap-14">
        <h1 className="text-[2.2rem] leading-tight text-[#2f3236]">Illustration prototypes</h1>
        {scenes.map(({ name, note, Component }) => (
          <div key={name} className="grid gap-3">
            <h2 className="text-[1.3rem] text-[#2f3236]">
              {name} <span className="text-[0.95rem] font-medium text-[#77797c]">· for {note}</span>
            </h2>
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
}
