import { cn } from "@/lib/helpers";

/**
 * @param {{ id: string, label: string }[]} options
 * @param {string[]} value — selected option ids
 * @param {(next: string[]) => void} onChange
 */
export default function CheckboxGroup({
  label,
  options,
  value,
  onChange,
  className,
}) {
  function toggle(id) {
    if (value.includes(id)) onChange(value.filter((x) => x !== id));
    else onChange([...value, id]);
  }

  return (
    <fieldset className={cn("space-y-4", className)}>
      <legend className="mb-3 text-sm font-medium text-neutral-800">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const checked = value.includes(opt.id);
          return (
            <label
              key={opt.id}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors",
                checked
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
              )}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggle(opt.id)}
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
