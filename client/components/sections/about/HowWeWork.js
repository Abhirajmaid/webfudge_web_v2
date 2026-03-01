"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp, staggerContainer, viewport } from "@/lib/aboutAnimations";

const steps = [
  {
    number: "01/",
    title: "Understand",
    description:
      "We carefully listen to your goals, challenges, and aspirations for clarity.",
  },
  {
    number: "02/",
    title: "Design",
    description:
      "We craft custom, innovative solutions that align perfectly with your needs.",
  },
  {
    number: "03/",
    title: "Collaborate",
    description:
      "We work closely with you every step of the way to ensure satisfaction.",
  },
  {
    number: "04/",
    title: "Refine",
    description:
      "Your feedback guides us to polish, adjust, and perfect every design detail.",
  },
];

export default function HowWeWork() {
  return (
    <Section
      variant="muted"
      className="text-black py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          badge="HOW WE WORK?"
          layout="center"
          className="items-start text-left"
          title={
            <h2 className="text-4xl lg:text-6xl font-semibold leading-tight max-w-4xl">
              A Lean, Collaborative UX Process Built for Speed
            </h2>
          }
          description={
            "We follow a structured yet flexible approach that keeps you involved and delivers on time."
          }
          descriptionClassName="max-w-3xl text-neutral-700 leading-relaxed"
        />

        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className={
                index === 0
                  ? "grid grid-cols-1 lg:grid-cols-2 items-start gap-12 py-12"
                  : "grid grid-cols-1 lg:grid-cols-2 items-start gap-12 border-t border-neutral-400/40 pt-12 pb-12"
              }
            >
              <div>
                <span className="text-3xl text-neutral-500">{step.number}</span>
                <h3 className="text-2xl font-medium text-neutral-700 ml-6 inline-block">
                  {step.title}
                </h3>
              </div>
              <p className="text-neutral-800 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
