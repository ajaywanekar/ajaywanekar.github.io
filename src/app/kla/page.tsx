import { CompanyPage, companyMetadata } from "@/components/CompanyPage";
import { kla } from "@/data/companies";

// Unlisted page shared directly with the company: kept out of search results and the nav.
export const metadata = companyMetadata(kla);

export default function Page() {
  return <CompanyPage company={kla} />;
}
