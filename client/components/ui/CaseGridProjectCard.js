"use client";

import Image from "next/image";

function ArrowLabel() {
  return (
    <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/30 group-hover:text-white/60 transition-colors duration-300">
      View case study
      <svg
        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </span>
  );
}

/**
 * Project card for CaseGrid section (dark theme, full or pair size).
 * @param {"full"|"pair"} size
 */
export default function CaseGridProjectCard({ project, size = "pair" }) {
  const isFull = size === "full";
  // Larger intrinsic dimensions for sharper display (full-width card needs more pixels)
  const width = isFull ? 1700 : 1000;
  const height = isFull ? 1700 : 1000;
  const href = project.link;
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block${href ? " cursor-pointer" : ""}`}
    >
      <div className={`overflow-hidden bg-neutral-900 border border-white/[0.07]`}>
        <div className={`relative ${isFull ? "aspect-[16/9]" : "aspect-[4/3]"} overflow-hidden`}>
          <Image
            src={project.image}
            alt={project.title}
            width={width}
            height={height}
            quality={100}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          />
        </div>
      </div>

      <div className={isFull ? "mt-6" : "mt-5"}>
        <h3
          className={`font-semibold text-white leading-snug group-hover:text-white/70 transition-colors duration-300 ${isFull ? "text-2xl lg:text-5xl w-[85%] lg:w-[55%]" : "text-2xl lg:text-4xl w-[85%]"
            }`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-3 text-white/70 leading-relaxed ${isFull ? "text-base lg:text-xl lg:max-w-[55%]" : "text-lg line-clamp-2"
            }`}
        >
          {project.desc}
        </p>

        <ArrowLabel />
      </div>
    </Wrapper>
  );
}
