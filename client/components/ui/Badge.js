"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/helpers";

const variantStyles = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary/10 text-primary",
  dark: "bg-neutral-800 text-neutral-300",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
};

const AnimatedIcon = () => (
  <motion.span
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="inline-flex shrink-0"
    aria-hidden
  >
    ✦
  </motion.span>
);

/**
 * Small badge / label chip with optional animated icon.
 *
 * @param {object} props
 * @param {"default"|"primary"|"dark"|"success"|"warning"} [props.variant]
 * @param {boolean} [props.icon=false] - Show animated sparkle icon before text
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Badge({ variant = "default", icon = false, className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {icon && <AnimatedIcon />}
      {children}
    </span>
  );
}
