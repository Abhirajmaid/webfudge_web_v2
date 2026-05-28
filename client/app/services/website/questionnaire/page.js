import WebsiteQuestionnaire from "@/components/sections/services/website-questionnaire/WebsiteQuestionnaire";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Project Questionnaire | Webfudge",
  description:
    "Share goals, pages, features, and technical needs for your website project so Webfudge can scope and deliver faster.",
  path: "/services/website/questionnaire",
  keywords: ["website questionnaire", "project discovery form", "website planning"],
});

export default function WebsiteQuestionnairePage() {
  return <WebsiteQuestionnaire />;
}
