"use client";

import { useSearchParams } from "next/navigation";
import { clients } from "@/lib/clients";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import CaseStudiesPagination from "@/components/ui/CaseStudiesPagination";

const PER_PAGE = 6;

function toCaseStudyEntry(client) {
  return {
    id: client.id,
    title: client.title,
    image: client.img_url,
    description: client.short_des,
    tags: client.services_offered ?? [],
    result: client.key_highlights?.[0] ?? null,
  };
}

function chunkPairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2));
  }
  return pairs;
}

export default function CaseStudiesContainer() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  const perPage = Number(searchParams.get("per_page") ?? PER_PAGE);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const entries = clients.slice(start, end).map(toCaseStudyEntry);
  const rows = chunkPairs(entries);

  return (
    <>
      <div className="mt-12 md:mt-16 flex flex-col gap-14 lg:gap-20">
        {rows.map((row, rowIndex) => {
          const leftBig = rowIndex % 2 === 0;
          const leftSize = leftBig ? "large" : "small";
          const rightSize = leftBig ? "small" : "large";

          if (row.length === 1) {
            return (
              <div key={row[0].id} className="w-full">
                <CaseStudyCard data={row[0]} size="large" />
              </div>
            );
          }

          return (
            <div
              key={`row-${rowIndex}-${row[0].id}-${row[1].id}`}
              className="flex flex-col md:flex-row gap-8 md:gap-10 w-full items-start"
            >
              <div
                className={`w-full ${leftBig ? "md:w-[58%]" : "md:w-[42%] md:pt-20 lg:pt-24"}`}
              >
                <CaseStudyCard data={row[0]} size={leftSize} />
              </div>
              <div
                className={`w-full ${leftBig ? "md:w-[42%] md:pt-20 lg:pt-24" : "md:w-[58%]"}`}
              >
                <CaseStudyCard data={row[1]} size={rightSize} />
              </div>
            </div>
          );
        })}
      </div>
      <CaseStudiesPagination perPage={perPage} total={clients.length} />
    </>
  );
}
