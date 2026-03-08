"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section variant="dark" id="cta" className="bg-black">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center gap-8 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-semibold text-white"
          >
            Ready to build something <span className="font-serif italic"> Extraordinary </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <Button href="/contact" variant="primary_brand" size="lg">
              Start Your Project
            </Button>
            <Button
              href="/case-studies"
              variant="ghost"
              size="lg"
              className="text-white border border-white hover:bg-white/5"
            >
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
