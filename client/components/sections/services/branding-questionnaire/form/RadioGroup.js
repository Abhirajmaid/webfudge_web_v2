import { cn } from "@/lib/helpers";

/**
 * @param {{ id: string, label: string }[]} options
 */
export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  className,
}) {
  return (
    <fieldset className={cn("space-y-3", className)}>
      <legend className="mb-2 text-sm font-medium text-neutral-800">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.id;
          return (
            <label
              key={opt.id}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors",
                selected
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
              )}
            >
              <input
                type="radio"
                name={name}
                className="sr-only"
                checked={selected}
                onChange={() => onChange(opt.id)}
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
