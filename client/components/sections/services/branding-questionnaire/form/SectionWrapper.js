import { cn } from "@/lib/helpers";

/**
 * Card-style section for questionnaire steps (agency minimal style).
 */
export default function SectionWrapper({
  step,
  title,
  description,
  children,
  className,
  id,
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8 lg:p-10",
        className
      )}
    >
      {(title || step != null) && (
        <header className="mb-8 space-y-2 border-b border-neutral-100 pb-8">
          {step != null && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Step {step}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-2xl italic text-neutral-900 md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
              {description}
            </p>
          )}
        </header>
      )}
      <div className="space-y-5 md:space-y-6">{children}</div>
    </div>
  );
}
