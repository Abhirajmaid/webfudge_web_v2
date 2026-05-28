import AboutHero from "@/components/sections/about/Hero";
import AboutMission from "@/components/sections/about/Mission";
import AboutCoreValues from "@/components/sections/about/CoreValues";
import AboutAchievement from "@/components/sections/about/AboutAchievement";
import HowWeWork from "@/components/sections/about/HowWeWork";
import AboutTeam from "@/components/sections/about/Team";
import AboutClients from "@/components/sections/about/Clients";
import AboutCTA from "@/components/sections/about/CTA";
import Testimonial from "@/components/sections/home/Testimonial";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Webfudge | Team, Process & Mission",
  description:
    "Meet the Webfudge team and discover our process, values, and approach to building premium digital experiences.",
  path: "/about",
  keywords: ["about webfudge", "webfudge team", "design agency mission"],
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutCoreValues />
      <AboutAchievement />
      <HowWeWork />
      <AboutClients />
      <Testimonial />
      <AboutCTA />
    </>
  );
}
