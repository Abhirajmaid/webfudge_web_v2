import { Suspense } from "react";
import CaseStudiesHero from "@/components/sections/case-studies/Hero";
import CaseStudiesGridSection from "@/components/sections/case-studies/CaseStudiesGrid";
import Testimonial from "@/components/sections/case-studies/Testimonial";
import CTA from "@/components/sections/case-studies/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Case Studies | Webfudge Client Results",
  description:
    "See Webfudge case studies and outcomes from branding, website, and growth projects delivered for startups and businesses.",
  path: "/case-studies",
  keywords: ["web design case studies", "agency portfolio", "client success stories"],
});

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
