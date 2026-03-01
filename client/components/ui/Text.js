import { cn } from "@/lib/helpers";

const variantStyles = {
  default: "text-neutral-700 leading-relaxed",
  muted: "text-neutral-500 leading-relaxed",
  large: "text-lg text-neutral-700 leading-relaxed",
  white: "text-neutral-300 leading-relaxed",
  white_muted: "text-neutral-400 leading-relaxed",
};

/**
 * Body text component following the design system.
 *
 * @param {object} props
 * @param {"default"|"muted"|"large"|"white"|"white_muted"} [props.variant]
 * @param {"p"|"span"|"div"} [props.as]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Text({
  variant = "default",
  as: Tag = "p",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn("text-base", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
