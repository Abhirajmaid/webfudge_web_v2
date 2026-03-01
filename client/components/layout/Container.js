import { cn } from "@/lib/helpers";

const sizes = {
  narrow: "max-w-4xl",
  default: "max-w-[90rem]",   // 1440 px — standard premium agency width
  wide: "max-w-screen-2xl", // 1536 px
};

/**
 * Centered max-width content container.
 *
 * @param {object}  props
 * @param {"narrow"|"default"|"wide"} [props.size="default"]
 * @param {string}  [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Container({ size = "default", className, children, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full px-6 lg:px-12", sizes[size] ?? sizes.default, className)}
      {...props}
    >
      {children}
    </div>
  );
}
