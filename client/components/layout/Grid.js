import { cn } from "@/lib/helpers";

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  "auto-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  "auto-4": "grid-cols-2 lg:grid-cols-4",
};

const gapMap = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
};

/**
 * Responsive grid layout primitive.
 *
 * @param {object} props
 * @param {1|2|3|4|"auto-3"|"auto-4"} [props.cols]
 * @param {"sm"|"md"|"lg"|"xl"} [props.gap]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Grid({ cols = 3, gap = "lg", className, children }) {
  return (
    <div className={cn("grid", colsMap[cols] || colsMap[3], gapMap[gap], className)}>
      {children}
    </div>
  );
}
