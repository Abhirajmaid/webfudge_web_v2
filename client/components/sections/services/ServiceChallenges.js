"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";

const SUBTITLE =
  "Understanding common challenges helps us create better solutions. Explore the issues we help businesses overcome every day.";

const GRADIENTS = [
  "bg-gradient-to-b from-white via-rose-50 to-orange-200",
  "bg-gradient-to-b from-white via-cyan-50 to-teal-300",
  "bg-gradient-to-b from-white via-violet-50 to-purple-200",
];

const CARDS_PER_SLIDE = 3;
const AUTO_ADVANCE_MS = 5000;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Popular challenges — 3 cards per slide, swipeable + auto-advance, left/right arrows, dot indicator.
 */
export default function ServiceChallenges({ service }) {
  const challenges = service.challenges ?? [];
  const slides = chunk(challenges, CARDS_PER_SLIDE);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);

  const numSlides = slides.length;
  const maxIndex = Math.max(0, numSlides - 1);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);
  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  // Scroll to current slide when index changes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || numSlides === 0) return;
    const slideWidth = el.clientWidth;
    if (slideWidth <= 0) return;
    isScrollingRef.current = true;
    el.scrollTo({ left: currentIndex * slideWidth, behavior: "smooth" });
    const t = setTimeout(() => {
      isScrollingRef.current = false;
    }, 400);
    return () => clearTimeout(t);
  }, [currentIndex, numSlides]);

  // Sync currentIndex from user scroll (swipe)
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;
    const el = scrollRef.current;
    if (!el || numSlides === 0) return;
    const slideWidth = el.clientWidth;
    if (slideWidth <= 0) return;
    const index = Math.round(el.scrollLeft / slideWidth);
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [numSlides, maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (numSlides <= 1) return;
    const t = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [numSlides, goNext]);

  if (challenges.length === 0) return null;

  return (
    <Section variant="muted" >
      <Container size="wide">
        <SectionHeader
          badge="challenges"
          title={
            <h2 className="text-3xl lg:text-6xl font-semibold text-neutral-900 tracking-tight">
              The Most{" "}
              <span className="font-serif italic font-normal">Popular Issues</span>
            </h2>
          }
          description={SUBTITLE}
          layout="center"
          className="mb-10 lg:mb-12"
        />

        <div className="relative overflow-hidden w-full">
          {numSlides > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white border border-neutral-200 shadow-md text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                aria-label="Previous slide"
              >
                <Icon icon="mdi:chevron-left" className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white border border-neutral-200 shadow-md text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                aria-label="Next slide"
              >
                <Icon icon="mdi:chevron-right" className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth w-full [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((slideChallenges, slideIdx) => (
              <div
                key={slideIdx}
                className="shrink-0 w-full min-w-full snap-start grid grid-cols-1 sm:grid-cols-3 gap-4 px-1 sm:px-2"
              >
                {slideChallenges.map((challenge, cardIdx) => {
                  const globalIdx = slideIdx * CARDS_PER_SLIDE + cardIdx;
                  const cardId = `challenge-${challenge.id}-${globalIdx}`;
                  const lordIconSrc = challenge.icon || null;
                  return (
                    <article
                      id={cardId}
                      key={challenge.id}
                      className={`relative overflow-hidden border border-neutral-200 rounded-none min-h-[320px] p-5 sm:p-6 ${GRADIENTS[globalIdx % GRADIENTS.length]} hover:shadow-xl transition-shadow duration-300 group/card`}
                    >
                      {lordIconSrc && (
                        <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg text-neutral-700 mb-3 shrink-0" aria-hidden>
                          {React.createElement("lord-icon", {
                            src: lordIconSrc,
                            trigger: "hover",
                            target: `#${cardId}`,
                            stroke: "regular",
                            colors: "primary:#374151,secondary:#D71EB9",
                            style: { width: 56, height: 56 },
                          })}
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {challenge.title}
                      </h3>
                      <p className="mt-2 text-neutral-700 text-sm leading-relaxed">
                        {challenge.description}
                      </p>
                    </article>
                  );
                })}
                {/* Pad empty slots on last slide if needed */}
                {slideChallenges.length < CARDS_PER_SLIDE &&
                  Array.from({ length: CARDS_PER_SLIDE - slideChallenges.length }).map((_, i) => (
                    <div key={`pad-${slideIdx}-${i}`} className="hidden sm:block" aria-hidden />
                  ))}
              </div>
            ))}
          </div>

          {numSlides > 1 && (
            <div className="flex justify-center items-center gap-1.5 mt-6" role="tablist" aria-label="Carousel slides">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-200 ${i === currentIndex ? "w-8 bg-black" : "w-3 bg-neutral-300 hover:bg-neutral-400"}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
