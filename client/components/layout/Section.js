import { cn } from "@/lib/helpers";

const variants = {
  default:  "bg-white text-neutral-900",
  muted:    "bg-neutral-50 text-neutral-900",
  dark:     "bg-neutral-950 text-white",
  gradient: "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white",
};

/**
 * Full-width section wrapper with background variant and overflow clipping.
 *
 * @param {object}  props
 * @param {"default"|"muted"|"dark"|"gradient"} [props.variant="default"]
 * @param {string}  [props.id]
 * @param {string}  [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Section({ variant = "default", id, className, children, ...props }) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-16 lg:py-28 overflow-hidden",
        variants[variant] ?? variants.default,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
