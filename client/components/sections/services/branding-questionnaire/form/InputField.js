import { cn } from "@/lib/helpers";

const inputClass =
  "w-full rounded-full border border-neutral-200 bg-neutral-50/80 px-4 py-3.5 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900";

export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  autoComplete,
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </label>
  );
}
