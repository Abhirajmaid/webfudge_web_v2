"use client";

import { useCallback } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/helpers";

function ShareToolButton({ onClick, label, icon, disabled, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={disabled ? `${label} (coming soon)` : label}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs font-medium text-neutral-800 shadow-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-400 disabled:hover:border-neutral-100 disabled:hover:bg-neutral-50",
        className
      )}
    >
      <Icon icon={icon} className="h-4 w-4 shrink-0 text-neutral-600" aria-hidden />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}

export default function WebsiteQuestionnaireShareBar({ className }) {
  const openPrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row sm:flex-wrap sm:items-center",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 sm:mr-1 sm:w-full lg:w-auto lg:flex-1">
        Share questionnaire
      </p>
      <div className="flex flex-wrap gap-2">
        <ShareToolButton icon="mdi:link-variant" label="Copy link" disabled />
        <ShareToolButton icon="mdi:share-variant-outline" label="Share…" disabled />
        <ShareToolButton icon="mdi:file-pdf-box" label="Save PDF" onClick={openPrint} />
      </div>
      <p className="w-full text-[11px] leading-relaxed text-neutral-500 sm:order-last">
        Save PDF prints only your answers — choose &quot;Save as PDF&quot; in the print dialog.
      </p>
    </div>
  );
}
