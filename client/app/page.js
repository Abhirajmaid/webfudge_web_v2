import Hero from "@/components/sections/home/Hero";
import Clients from "@/components/sections/home/Clients";
import CaseGrid from "@/components/sections/home/CaseGrid";
import ServicesStack from "@/components/sections/home/ServicesStack";
import Testimonial from "@/components/sections/home/Testimonial";
import Pricing from "@/components/sections/home/Pricing";
import FAQ from "@/components/sections/home/FAQ";
import CTA from "@/components/sections/home/CTA";

export const metadata = {
  title: "Webfudge",
  description:
    "We build digital experiences that convert. Premium web design, development, and growth strategy for ambitious brands.",
};

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
