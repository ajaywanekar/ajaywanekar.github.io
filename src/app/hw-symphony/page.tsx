import { CompanyPage, companyMetadata } from "@/components/CompanyPage";
import { hwSymphony } from "@/data/companies";

// Unlisted page shared directly with the company: kept out of search results and the nav.
export const metadata = companyMetadata(hwSymphony);

export default function Page() {
  return <CompanyPage company={hwSymphony} />;
}
