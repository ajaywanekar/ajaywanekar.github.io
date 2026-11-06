import { CompanyPage, companyMetadata } from "@/components/CompanyPage";
import { philips } from "@/data/companies";

// Unlisted page shared directly with the company: kept out of search results and the nav.
export const metadata = companyMetadata(philips);

export default function Page() {
  return <CompanyPage company={philips} />;
}
