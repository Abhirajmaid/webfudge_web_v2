"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Single case study card for the case-studies listing (our-work style grid).
 * size: "large" | "small" for asymmetric grid (larger image + type when large).
 */
export default function CaseStudyCard({ data, size = "large" }) {
  const isLarge = size === "large";
  return (
    <div className="group block w-full">
      <motion.div
        className="flex flex-col gap-4 lg:gap-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="block">
          {/* Image + hover overlay with rotating curved text */}
          <div className="relative w-full overflow-hidden bg-neutral-900 border border-neutral-200">
            <div
              className={`relative w-full overflow-hidden ${isLarge ? "aspect-[3/2]" : "aspect-[4/3]"}`}
            >
              <Image
                src={data.image}
                alt={data.title}
                width={isLarge ? 1200 : 1000}
                height={isLarge ? 1200 : 1500}
                quality={92}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              {/* Hover overlay: dark layer + rotating curved text */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <img
                  src="/images/curvedtext2.png"
                  alt=""
                  className="h-28 w-28 object-contain animate-spin-slow md:h-36 md:w-36"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2
            className={`mt-4 font-regular font-serif italic text-neutral-900 group-hover:text-primary transition-colors duration-300 leading-tight lg:mt-5 ${isLarge ? "text-2xl md:text-4xl" : "text-xl md:text-3xl"
              }`}
          >
            {data.title}
          </h2>

          {/* Description */}
          <p
            className={`mt-2 text-neutral-600 line-clamp-2 leading-relaxed ${isLarge ? "text-sm md:text-base" : "text-sm"
              }`}
          >
            {data.description}
          </p>

          {/* Tags + result */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {data.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-sm font-medium rounded-full bg-neutral-100 text-neutral-600"
              >
                {tag}
              </span>
            ))}
            {data.result && (
              <span className="text-sm font-medium text-primary">{data.result}</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
