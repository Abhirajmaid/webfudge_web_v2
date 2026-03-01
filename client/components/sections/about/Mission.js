"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp, viewport } from "@/lib/aboutAnimations";

const MISSION_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
];

export default function AboutMission() {
  return (
    <Section variant="muted" className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              layout="center"
              className="items-start text-left"
              title={
                <h2 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
                  Our mission is to{" "}
                  <span className="font-serif italic font-light text-neutral-700">
                    elevate brands
                  </span>{" "}
                  through design and technology.
                </h2>
              }
              description="We combine strategic thinking with pixel-perfect execution. From brand identity and UI/UX to high-performance websites and web apps, we deliver end-to-end solutions that drive growth and leave a lasting impression."
              descriptionClassName="text-lg text-left text-neutral-600 leading-relaxed max-w-xl !ml-0"
            />
          </div>
          <motion.div
            className="relative flex items-center justify-center min-h-[320px] lg:min-h-[380px]"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
          >
            <div className="relative w-full max-w-sm h-[280px] lg:h-[340px]">
              <div className="absolute top-0 left-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl z-10">
                <Image
                  src={MISSION_IMAGES[0]}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 280px, 320px"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl z-10">
                <Image
                  src={MISSION_IMAGES[1]}
                  alt="Creative workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 280px, 320px"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl z-20 border-4 border-white">
                <Image
                  src={MISSION_IMAGES[2]}
                  alt="Design and development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 220px, 260px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
