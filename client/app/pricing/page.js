import Pricing from "@/components/sections/pricing/Pricing";
import FAQ from "@/components/sections/pricing/FAQ";
import CTA from "@/components/sections/pricing/CTA";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for web design and development projects. No hidden fees. View our Starter, Growth, and Enterprise plans.",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
