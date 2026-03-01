import AboutHero from "@/components/sections/about/Hero";
import AboutMission from "@/components/sections/about/Mission";
import AboutCoreValues from "@/components/sections/about/CoreValues";
import AboutAchievement from "@/components/sections/about/AboutAchievement";
import HowWeWork from "@/components/sections/about/HowWeWork";
import AboutTeam from "@/components/sections/about/Team";
import AboutClients from "@/components/sections/about/Clients";
import AboutCTA from "@/components/sections/about/CTA";
import Testimonial from "@/components/sections/home/Testimonial";

export const metadata = {
  title: "About Us",
  description:
    "Learn about WebFudge — our mission, values, team, and the craft behind every premium digital experience we build.",
};

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
