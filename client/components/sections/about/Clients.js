"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeIn, staggerContainer, viewport } from "@/lib/aboutAnimations";

/** Grid uses /public/images/ClientLogos/1.png … 8.png — overwrite those files to refresh logos. */
const logos = [
  { src: "/images/ClientLogos/20.png", name: "URB Insurance" },
  { src: "/images/ClientLogos/19.png", name: "PositiEV" },
  { src: "/images/ClientLogos/3.png", name: "MMJ" },
  { src: "/images/ClientLogos/9.png", name: "vasileios" },
  { src: "/images/ClientLogos/13.png", name: "evi" },
  { src: "/images/ClientLogos/11.png", name: "Xtrawrkx" },
  { src: "/images/ClientLogos/7.png", name: "R.K. Chaiwala" },
  { src: "/images/ClientLogos/8.png", name: "Sahayata" },
];

export default function AboutClients() {
  return (
    <Section
      variant="default"
      className="bg-primary-100 text-neutral-900 py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          layout="center"
          className="text-center w-full"
          title={
            <h2 className="text-5xl lg:text-6xl w-full max-w-4xl mx-auto font-semibold leading-tight px-0">
              Design That{" "}
              <span className="font-serif italic font-light">
                Solves, Converts, and Scales
              </span>
            </h2>
          }
          description="We partner with ambitious brands to create digital experiences that drive results and stand the test of time."
          descriptionClassName="max-w-3xl mx-auto text-neutral-600 leading-relaxed w-full text-center px-0"
        />
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="secondary" className="rounded-full min-w-[160px]">
            Let&apos;s talk
          </Button>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 mt-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
        >
          {logos.map((item, index) => {
            const isFirstRow = index < 4;
            const isFirstColMobile = index % 2 === 0;
            const isFirstColDesktop = index % 4 === 0;
            const restoreLeftBorderOnMd = index % 4 === 2;
            const key = item.src;
            return (
              <motion.div
                key={key}
                variants={fadeIn}
                className={`flex items-center justify-center h-40 border-black/20 ${isFirstRow ? "border-t-0" : "border-t"
                  } ${isFirstColMobile ? "border-l-0" : "border-l"} ${restoreLeftBorderOnMd ? "md:border-l" : ""
                  } ${isFirstColDesktop ? "md:border-l-0" : ""}`}
              >
                <div className="opacity-80 hover:opacity-100 transition flex items-center justify-center w-full h-full px-4">
                  <div className="relative w-full h-16 md:h-20 max-w-[140px]">
                    <Image
                      src={item.src}
                      alt={item.name ?? "Client logo"}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 140px"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
