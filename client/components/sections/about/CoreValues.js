"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp, staggerContainer, viewport } from "@/lib/aboutAnimations";

const CORE_VALUES = [
  {
    icon: "mdi:star-check",
    title: "Quality over quantity",
    text: "We take on a limited number of projects so each one gets our full attention, creativity, and care.",
  },
  {
    icon: "mdi:eye-outline",
    title: "Radical transparency",
    text: "No surprises. We communicate clearly, set realistic timelines, and keep you in the loop at every step.",
  },
  {
    icon: "mdi:layers-outline",
    title: "Craft at every layer",
    text: "From architecture to animation, we care deeply about getting every detail right — seen and unseen.",
  },
];

export default function AboutCoreValues() {
  return (
    <Section variant="default" className="py-24 lg:py-32">
      <Container>
        <SectionHeader
          layout="center"
          className="items-center text-center"
          title={
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-900">
              Our philosophy{" "}
              <span className="font-serif italic font-normal text-neutral-800">
                <br />
                values that guide us
              </span>
            </h2>
          }
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16 lg:mt-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
        >
          {CORE_VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="flex flex-col gap-4 p-8 lg:p-10 rounded-xl bg-white border border-neutral-200/80 text-left"
            >
              <Icon
                icon={value.icon}
                className="w-14 h-14 text-primary shrink-0"
                aria-hidden
              />
              <h3 className="text-xl font-semibold text-neutral-900">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                {value.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
