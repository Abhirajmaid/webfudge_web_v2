import Pricing from "@/components/sections/pricing/Pricing";
import FAQ from "@/components/sections/pricing/FAQ";
import CTA from "@/components/sections/pricing/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Webfudge Pricing | Website & Branding Packages",
  description:
    "Explore Webfudge pricing packages for website design, development, and brand growth with transparent deliverables.",
  path: "/pricing",
  keywords: ["website pricing", "web design cost", "agency pricing plans"],
});

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
