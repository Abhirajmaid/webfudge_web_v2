"use client";

import { cn } from "@/lib/helpers";

/**
 * Reusable input / textarea primitive.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.name
 * @param {string} [props.type]
 * @param {boolean} [props.multiline] - Render as textarea
 * @param {number} [props.rows]
 * @param {string} [props.placeholder]
 * @param {string} [props.error] - Error message
 * @param {string} [props.className]
 */
export default function Input({
  label,
  name,
  type = "text",
  multiline = false,
  rows = 5,
  placeholder,
  error,
  className,
  ...props
}) {
  const baseStyles =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:opacity-50";

  const borderStyles = error
    ? "border-red-400 focus:ring-red-400/30 focus:border-red-400"
    : "border-neutral-200 hover:border-neutral-300";

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-neutral-800"
        >
          {label}
        </label>
      )}

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          className={cn(baseStyles, borderStyles, "resize-none")}
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={cn(baseStyles, borderStyles)}
          {...props}
        />
      )}

      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}
