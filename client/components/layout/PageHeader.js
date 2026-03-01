"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Badge from "@/components/ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Page-level hero header — used on inner pages (About, Services, etc.)
 *
 * @param {object} props
 * @param {string} [props.badge] - Optional badge label above heading
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {"center"|"left"} [props.align]
 */
export default function PageHeader({
  badge,
  title,
  description,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative w-full pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white overflow-hidden ${
        isCenter ? "text-center" : "text-left"
      }`}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #D71EB9 0%, transparent 70%)",
        }}
      />

      <Container size={isCenter ? "narrow" : "default"}>
        <div className={`flex flex-col gap-5 ${isCenter ? "items-center" : "items-start"}`}>
          {badge && (
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              <Badge variant="primary" icon>{badge}</Badge>
            </motion.div>
          )}

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <Heading
              variant="hero"
              className={`max-w-3xl ${isCenter ? "mx-auto" : ""}`}
            >
              {title}
            </Heading>
          </motion.div>

          {description && (
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
            >
              <Text
                variant="large"
                className={`max-w-2xl text-neutral-500 ${isCenter ? "mx-auto" : ""}`}
              >
                {description}
              </Text>
            </motion.div>
          )}
        </div>
      </Container>
    </div>
  );
}
