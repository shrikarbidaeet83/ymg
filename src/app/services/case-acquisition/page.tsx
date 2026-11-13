import { redirect } from "next/navigation";

// Case Acquisition is a group on the services page, not a page of its own.
export default function CaseAcquisitionPage() {
  redirect("/services#case-acquisition");
}
