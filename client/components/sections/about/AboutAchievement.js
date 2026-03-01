"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp, staggerContainer, viewport } from "@/lib/aboutAnimations";

const lightenOnScroll = {
  hidden: { opacity: 0.15 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  {
    value: "03+",
    title: "Years of experience",
    description:
      "Helping brands grow with creative and impactful solutions.",
  },
  {
    value: "50+",
    title: "Completed projects",
    description:
      "Successfully delivering results across industries with proven expertise.",
  },
  {
    value: "95%",
    title: "Satisfied Clients",
    description:
      "Our commitment to quality and dedication ensures business success.",
  },
];

export default function AboutAchievement() {
  return (
    <Section
      variant="dark"
      className="bg-primary-700 text-white py-24 lg:py-32"
    >
      <Container size="wide">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={lightenOnScroll}
        >
          <SectionHeader
            badge="OUR ACHIEVEMENT"
            dark
            layout="split"
            className="items-start"
            title={
              <h2 className="text-4xl lg:text-5xl -mt-8 font-semibold leading-tight max-w-5xl">
                Webfudge is a digital product design agency that cares about you
                and your brand, no matter the size or industry.
              </h2>
            }
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-24"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.title} variants={fadeUp}>
                <p className="text-6xl md:text-7xl lg:text-8xl font-regular text-primary-300">
                  {stat.value}
                </p>
                <h3 className="text-xl font-semibold mt-8">{stat.title}</h3>
                <p className="text-neutral-300 mt-4 max-w-xs leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
