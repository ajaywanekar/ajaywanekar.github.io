import { CompanyPage, companyMetadata } from "@/components/CompanyPage";
import { fcc } from "@/data/companies";

// Unlisted page shared directly with the company: kept out of search results and the nav.
export const metadata = companyMetadata(fcc);

export default function Page() {
  return <CompanyPage company={fcc} />;
}
