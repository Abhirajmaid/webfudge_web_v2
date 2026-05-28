import Hero from "@/components/sections/home/Hero";
import Clients from "@/components/sections/home/Clients";
import CaseGrid from "@/components/sections/home/CaseGrid";
import ServicesStack from "@/components/sections/home/ServicesStack";
import Testimonial from "@/components/sections/home/Testimonial";
import Pricing from "@/components/sections/home/Pricing";
import FAQ from "@/components/sections/home/FAQ";
import CTA from "@/components/sections/home/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Webfudge | Creative Web Design & Development Agency",
  description:
    "Webfudge builds conversion-focused websites, landing pages, and brand systems for ambitious startups and growing companies.",
  path: "/",
  keywords: [
    "web design agency",
    "website development company",
    "branding agency",
    "next.js development",
    "seo and growth",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <CaseGrid />
      <ServicesStack />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
