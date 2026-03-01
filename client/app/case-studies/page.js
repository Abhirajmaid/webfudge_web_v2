import { Suspense } from "react";
import CaseStudiesHero from "@/components/sections/case-studies/Hero";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGrid";
import Testimonial from "@/components/sections/case-studies/Testimonial";
import CTA from "@/components/sections/case-studies/CTA";

export const metadata = {
  title: "Case Studies",
  description:
    "See how WebFudge has helped 50+ brands achieve measurable results through premium web design and development.",
};

function CaseStudiesGridFallback() {
  return (
    <div className="bg-white pt-4 pb-16 lg:pb-24 min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading case studies…</div>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <Suspense fallback={<CaseStudiesGridFallback />}>
        <CaseStudiesGridSection />
      </Suspense>
      <Testimonial />
      <CTA />
    </>
  );
}
