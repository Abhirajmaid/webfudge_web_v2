import { cn } from "@/lib/helpers";

const areaClass =
  "min-h-[120px] w-full resize-y rounded-2xl border border-neutral-200 bg-neutral-50/80 px-4 py-3.5 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 md:min-h-[140px]";

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  className,
  rows,
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={areaClass}
      />
    </label>
  );
}
