"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const BASE = "/case-studies";

/**
 * Prev/next pagination for case-studies page — mirrors our-work PaginationControls,
 * styled with v2 Button / motion.
 */
export default function CaseStudiesPagination({ perPage = 6, total }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");

  const maxPage = Math.ceil(total / perPage) || 1;
  const hasPrev = page > 1;
  const hasNext = page < maxPage;

  function goTo(nextPage) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    if (perPage !== 6) params.set("per_page", String(perPage));
    router.push(`${BASE}?${params.toString()}`);
  }

  return (
    <motion.div
      className="mt-16 md:mt-20 flex flex-wrap gap-4 items-center justify-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={() => hasPrev && goTo(page - 1)}
        disabled={!hasPrev}
        className="px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>
      <span className="text-neutral-500 text-sm">
        {page} / {maxPage}
      </span>
      <button
        type="button"
        onClick={() => hasNext && goTo(page + 1)}
        disabled={!hasNext}
        className="px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </motion.div>
  );
}
