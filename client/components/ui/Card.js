import { cn } from "@/lib/helpers";

/**
 * Base card primitive with hover elevation.
 *
 * @param {object} props
 * @param {boolean} [props.hover] - Enable hover shadow + lift
 * @param {boolean} [props.bordered] - Show border (default true)
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Card({
  hover = true,
  bordered = true,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white overflow-hidden",
        bordered && "border border-neutral-200",
        hover &&
          "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
