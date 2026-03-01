import CaseStudiesHero from "@/components/sections/case-studies/Hero";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGrid";
import Testimonial from "@/components/sections/case-studies/Testimonial";
import CTA from "@/components/sections/case-studies/CTA";

export const metadata = {
  title: "Case Studies",
  description:
    "See how WebFudge has helped 50+ brands achieve measurable results through premium web design and development.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGridSection />
      <Testimonial />
      <CTA />
    </>
  );
}
