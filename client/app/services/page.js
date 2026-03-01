import ServicesStack from "@/components/sections/services/ServicesStack";
import CTA from "@/components/sections/services/CTA";

export const metadata = {
  title: "Services",
  description:
    "Full-stack digital services — web design, development, SEO, e-commerce, CMS, and consulting. Everything your brand needs to grow online.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesStack />
      <CTA />
    </>
  );
}
