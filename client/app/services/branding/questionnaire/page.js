import BrandingQuestionnaire from "@/components/sections/services/branding-questionnaire/BrandingQuestionnaire";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Branding Questionnaire | Webfudge",
  description:
    "Tell Webfudge about your audience, values, and brand direction to create a high-converting identity system.",
  path: "/services/branding/questionnaire",
  keywords: ["branding questionnaire", "logo discovery form", "brand strategy form"],
});

export default function BrandingQuestionnairePage() {
  return <BrandingQuestionnaire />;
}
