"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/helpers";

// ─── Spring config ────────────────────────────────────────────────────────────
const SPRING = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };

const MotionLink = motion(Link);

// ─── Style maps ───────────────────────────────────────────────────────────────
// Soft drop shadow — diffused, slight offset downward
const shadowStyles =
  "shadow-[2px_8px_15px_rgba(0,0,0,0.35)]";

const variantStyles = {
  primary:
    `bg-neutral-900 text-white ${shadowStyles} focus-visible:ring-neutral-700`,
  light:
    `bg-white text-neutral-900 border border-neutral-200 ${shadowStyles} focus-visible:ring-neutral-300`,
  ghost:
    "bg-transparent text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-300",
  // legacy
  secondary:
    `bg-white text-neutral-900 border border-neutral-300 ${shadowStyles} focus-visible:ring-neutral-300`,
  primary_brand:
    `bg-primary text-white ${shadowStyles} focus-visible:ring-primary`,
  outline_brand:
    `border border-primary text-primary hover:bg-primary hover:text-white ${shadowStyles} focus-visible:ring-primary`,
};

// Padding: left keeps label breathing room; right is tight so circle sits flush
const sizeStyles = {
  sm: { text: "text-sm", gap: "gap-2.5", symPad: "px-4 py-1.5", splitPad: "pl-4 pr-1.5 py-1.5" },
  md: { text: "text-base", gap: "gap-3", symPad: "px-6 py-2", splitPad: "pl-6 pr-2   py-2" },
  lg: { text: "text-lg", gap: "gap-3.5", symPad: "px-8 py-2.5", splitPad: "pl-8 pr-2.5 py-2.5" },
};

// Circle badge dimensions (slightly smaller than button height so it has ~2px breathing room)
const circleSizes = {
  sm: "w-8  h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

// Circle color inverts vs button bg so it pops
const circleColors = {
  primary: "bg-white text-neutral-900",
  light: "bg-neutral-900 text-white",
  ghost: "bg-neutral-900 text-white",
  secondary: "bg-neutral-900 text-white",
  primary_brand: "bg-white text-primary",
  outline_brand: "bg-primary text-white",
};

// Arrow icon (↗ diagonal) — rendered as SVG for crisp scaling
function ArrowUpRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

// Circular badge wrapping any icon (or the default arrow)
function IconCircle({ children, size, variant }) {
  return (
    <span
      className={cn(
        "shrink-0 inline-flex items-center justify-center rounded-full",
        circleSizes[size] ?? circleSizes.md,
        circleColors[variant] ?? circleColors.primary
      )}
    >
      {children}
    </span>
  );
}

// Avatar circle (image variant)
function AvatarCircle({ src, size }) {
  const dim = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={cn(
        "shrink-0 rounded-full object-cover border border-white/20",
        dim[size] ?? dim.md
      )}
    />
  );
}

// ─── Magnetic hook ────────────────────────────────────────────────────────────
function useMagnet() {
  const ref = useRef(null);

  const rawX = useSpring(0, SPRING);
  const rawY = useSpring(0, SPRING);

  const buttonX = useTransform(rawX, (v) => v * 0.08);
  const buttonY = useTransform(rawY, (v) => v * 0.08);
  const contentX = useTransform(rawX, (v) => v * 0.18);
  const contentY = useTransform(rawY, (v) => v * 0.18);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set(e.clientX - (rect.left + rect.width / 2));
    rawY.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return {
    ref,
    buttonX, buttonY,
    contentX, contentY,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}

// ─── Main Button ──────────────────────────────────────────────────────────────
/**
 * Magnetic pill CTA button.
 *
 * Right slot priority: avatar > rightIcon > default ↗ arrow circle.
 * Pass showIcon={false} to render no right icon at all.
 *
 * @param {object}  props
 * @param {React.ReactNode}  props.children
 * @param {React.ReactNode}  [props.leftIcon]
 * @param {React.ReactNode}  [props.rightIcon]      - custom icon shown in circle badge
 * @param {string}           [props.avatar]          - image URL; circle badge
 * @param {boolean}          [props.showIcon=true]   - set false to hide right badge entirely
 * @param {"primary"|"light"|"ghost"|"secondary"|"primary_brand"|"outline_brand"} [props.variant="primary"]
 * @param {"sm"|"md"|"lg"}   [props.size="md"]
 * @param {string}           [props.href]
 * @param {boolean}          [props.external]
 * @param {string}           [props.className]
 */
export default function Button({
  children,
  leftIcon,
  rightIcon,
  avatar,
  showIcon = true,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className,
  ...props
}) {
  const { ref, buttonX, buttonY, contentX, contentY, handlers } = useMagnet();

  const s = sizeStyles[size] ?? sizeStyles.md;
  const hasRightSlot = showIcon; // avatar/rightIcon/arrow all live here

  // Use asymmetric padding only when the right badge is present
  const padding = hasRightSlot ? s.splitPad : s.symPad;

  const shellClasses = cn(
    "relative inline-flex items-center justify-center overflow-hidden",
    "rounded-full font-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "select-none",
    s.text,
    padding,
    variantStyles[variant] ?? variantStyles.primary,
    className
  );

  // Determine what goes in the right circle slot
  let rightSlot = null;
  if (hasRightSlot) {
    if (avatar) {
      rightSlot = <AvatarCircle src={avatar} size={size} />;
    } else if (rightIcon) {
      rightSlot = (
        <IconCircle size={size} variant={variant}>
          {rightIcon}
        </IconCircle>
      );
    } else {
      // default: ↗ arrow
      rightSlot = (
        <IconCircle size={size} variant={variant}>
          <ArrowUpRight
            className={cn(
              size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"
            )}
          />
        </IconCircle>
      );
    }
  }

  const sharedMotionProps = {
    ref,
    style: { x: buttonX, y: buttonY },
    whileHover: { scale: 1.02 },
    transition: SPRING,
    className: shellClasses,
    ...handlers,
  };

  const innerContent = (
    <motion.span
      style={{ x: contentX, y: contentY }}
      className={cn("flex items-center w-full pointer-events-none", s.gap)}
    >
      {leftIcon && (
        <span className="shrink-0 flex items-center">{leftIcon}</span>
      )}
      <span className="flex-1 text-center leading-none">{children}</span>
      {rightSlot}
    </motion.span>
  );

  if (href) {
    return (
      <MotionLink
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...sharedMotionProps}
        {...props}
      >
        {innerContent}
      </MotionLink>
    );
  }

  return (
    <motion.button {...sharedMotionProps} {...props}>
      {innerContent}
    </motion.button>
  );
}
