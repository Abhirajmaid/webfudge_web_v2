"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeIn, staggerContainer, viewport } from "@/lib/aboutAnimations";

function GlobeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

const logos = [
  { src: "/images/ClientLogos/1.png" },
  { src: "/images/ClientLogos/2.png" },
  { src: "/images/ClientLogos/3.png" },
  { src: "/images/ClientLogos/4.png" },
  { src: "/images/ClientLogos/5.png" },
  { src: "/images/ClientLogos/6.png" },
  { src: "/images/ClientLogos/7.png" },
  {
    label: "150+ clients worldwide",
    icon: GlobeIcon,
  },
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
            const Icon = item.icon;
            const key = item.src ?? item.label;
            return (
              <motion.div
                key={key}
                variants={fadeIn}
                className={`flex items-center justify-center h-40 border-black/20 ${isFirstRow ? "border-t-0" : "border-t"
                  } ${isFirstColMobile ? "border-l-0" : "border-l"} ${restoreLeftBorderOnMd ? "md:border-l" : ""
                  } ${isFirstColDesktop ? "md:border-l-0" : ""}`}
              >
                <div className="opacity-80 hover:opacity-100 transition flex items-center justify-center gap-2 w-full h-full px-4">
                  {item.src ? (
                    <div className="relative w-full h-16 md:h-20 max-w-[140px]">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 140px"
                      />
                    </div>
                  ) : (
                    <>
                      {Icon && (
                        <Icon className="w-5 h-5 shrink-0" />
                      )}
                      <span className="text-sm font-medium md:text-base">
                        {item.label}
                      </span>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
