"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/helpers";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/**
 * Reusable section header for Pricing, CaseGrid, and other sections.
 *
 * @param {object}  props
 * @param {string}  [props.badge]         - Badge pill label (e.g. "Pricing", "Projects")
 * @param {React.ReactNode} [props.badgeIcon] - Animated icon before label (default: ✦ sparkle)
 * @param {React.ReactNode} props.title    - Headline (string or JSX with styled spans)
 * @param {React.ReactNode} [props.description]
 * @param {"center"|"split"} [props.layout="center"] - center = stacked; split = title left, description right
 * @param {boolean} [props.dark=false]     - Dark theme (light text for dark backgrounds)
 * @param {string} [props.className]
 * @param {string} [props.descriptionClassName]
 */
const DefaultBadgeIcon = () => (
  <motion.span
    animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.12, 1] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className="inline-flex shrink-0"
    aria-hidden
  >
    ✦
  </motion.span>
);

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  layout = "center",
  dark = false,
  className,
  descriptionClassName,
}) {
  const isCenter = layout === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className={cn(
        isCenter
          ? "flex flex-col items-center text-center"
          : "flex flex-col sm:flex-row items-start justify-between gap-8",
        className
      )}
    >
      {badge && (
        <motion.div variants={fadeUp}>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-1 pr-4 py-1 text-base font-medium",
              dark
                ? "bg-white/10 text-white/90"
                : "bg-neutral-100 text-neutral-700"
            )}
          >
            <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              {badgeIcon ?? <DefaultBadgeIcon />}
            </span>
            {badge}
          </span>
        </motion.div>
      )}

      <motion.div
        variants={fadeUp}
        className={cn(
          isCenter ? "" : "shrink-0",
          badge && "mt-6"
        )}
      >
        {title}
      </motion.div>

      {description && (
        <motion.div variants={fadeUp} className={isCenter ? "w-full" : ""}>
          <div
            className={cn(
              "leading-relaxed",
              isCenter
                ? "mt-6 text-xl text-neutral-600 max-w-2xl mx-auto"
                : "max-w-lg text-base lg:text-lg sm:pt-1",
              dark ? "text-white/70" : "text-neutral-600",
              descriptionClassName
            )}
          >
            {description}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
