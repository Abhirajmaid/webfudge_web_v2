import ServiceHero from "./ServiceHero";
import ServiceFeaturedProjects from "./ServiceFeaturedProjects";
import ServiceChallenges from "./ServiceChallenges";
import ServiceProcess from "./ServiceProcess";
import ServiceBenefits from "./ServiceBenefits";
import ServiceRelatedProjects from "./ServiceRelatedProjects";
import CTA from "@/components/sections/home/CTA";
import Testimonial from "../home/Testimonial";

/**
 * Single service detail page — composes hero, featured projects, challenges, overview, process, benefits, related projects, CTA.
 * Renders dynamically from service object (getServiceBySlug).
 */
export default function SingleServicePage({ service }) {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeaturedProjects service={service} />
      <ServiceChallenges service={service} />
      <ServiceProcess service={service} />
      <ServiceBenefits service={service} />
      <ServiceRelatedProjects service={service} />
      <Testimonial />
      <CTA />
    </>
  );
}
