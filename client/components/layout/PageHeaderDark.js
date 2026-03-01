"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/**
 * Abstract curved shapes with soft glow — matches ref (translucent C-shapes, warm accent).
 */
function HeaderGraphic() {
  return (
    <motion.div
      className="relative w-full min-h-[280px] md:min-h-[360px] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skew-x-[-5deg] skew-y-2 rotate-3 w-full flex justify-center origin-center">
        <Image
          src="/images/logo_glass.webp"
          alt=""
          width={1180}
          height={1360}
          className="w-full h-auto max-w-[480px] max-h-[360px] object-contain"
          sizes="(max-width: 1024px) 90vw, 480px"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

/**
 * Dark split page header: black background, left = two-line heading + tagline + CTA, right = abstract graphic.
 *
 * @param {string} [eyebrow] - Optional small label above heading (e.g. "OUR BLOG")
 * @param {string} titleLine1 - First line of heading (white)
 * @param {string} titleLine2 - Second line of heading (accent color)
 * @param {string} tagline - Subtext below heading
 * @param {string} [ctaText] - Button label (e.g. "Let's talk")
 * @param {string} [ctaHref] - Button link (e.g. "/contact")
 * @param {React.ReactNode} [rightGraphic] - Custom right-side graphic; default = logo_glass image
 */
export default function PageHeaderDark({
  eyebrow,
  titleLine1,
  titleLine2,
  tagline,
  ctaText = "Let's talk",
  ctaHref = "/contact",
  rightGraphic,
}) {
  return (
    <header className="relative w-full bg-black text-white overflow-hidden h-[80vh] flex justify-center items-center">
      <Container className="relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTA */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {eyebrow && (
              <motion.span
                variants={fadeUp}
                className="block text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-4"
              >
                {eyebrow}
              </motion.span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-left">
              <motion.span variants={fadeUp} className="block text-white">
                {titleLine1}
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block text-primary font-serif italic font-light mt-1"
              >
                {titleLine2}
              </motion.span>
            </h1>
            {tagline && (
              <motion.p
                variants={fadeUp}
                className="mt-6 text-base md:text-lg text-white/60 max-w-md text-left"
              >
                {tagline}
              </motion.p>
            )}
            {ctaText && ctaHref && (
              <motion.div variants={fadeUp} className="mt-8">
                <Button
                  href={ctaHref}
                  variant="light"
                  size="md"
                  rightIcon={<Icon icon="mdi:arrow-top-right" className="w-4 h-4" aria-hidden />}
                >
                  {ctaText}
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right: abstract graphic */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {rightGraphic ?? <HeaderGraphic />}
          </motion.div>
        </div>
      </Container>
    </header>
  );
}
