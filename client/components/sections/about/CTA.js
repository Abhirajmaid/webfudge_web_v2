"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { fadeUp, viewport } from "@/lib/aboutAnimations";

export default function AboutCTA() {
  return (
    <Section variant="default" className="py-24 lg:py-32">
      <Container>
        <motion.div
          className="flex flex-col items-center text-center max-w-2xl mx-auto gap-8"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-light text-neutral-700">extraordinary</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Ready to elevate your brand? Get in touch and we&apos;ll turn your vision into reality.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
