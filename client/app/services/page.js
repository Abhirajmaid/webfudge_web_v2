import ServicesStack from "@/components/sections/services/ServicesStack";
import CTA from "@/components/sections/services/CTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Digital Services | Web Design, Development, Branding & SEO",
  description:
    "Explore Webfudge services: branding, web design, website development, e-commerce, and performance-focused growth support.",
  path: "/services",
  keywords: ["web development services", "branding services", "seo services", "ecommerce development"],
});

export default function ServicesPage() {
  return (
    <>
      <ServicesStack />
      <CTA />
    </>
  );
}
