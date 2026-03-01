import { cn } from "@/lib/helpers";

const variantStyles = {
  hero: "text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]",
  section: "text-3xl lg:text-4xl font-semibold tracking-tight leading-snug",
  small: "text-xl font-medium leading-snug",
};

const tagMap = {
  hero: "h1",
  section: "h2",
  small: "h3",
};

/**
 * Semantic heading component tied to the design system.
 *
 * @param {object} props
 * @param {"hero"|"section"|"small"} [props.variant]
 * @param {"h1"|"h2"|"h3"|"h4"} [props.as] - Override the HTML tag
 * @param {boolean} [props.gradient] - Apply primary gradient text
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Heading({
  variant = "section",
  as,
  gradient = false,
  className,
  children,
  ...props
}) {
  const Tag = as || tagMap[variant] || "h2";

  return (
    <Tag
      className={cn(
        variantStyles[variant],
        gradient && "text-gradient-primary",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
