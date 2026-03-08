"use client";

import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";

const REASONS_SUBTITLE =
  "Discover what makes us the perfect partner for your next project. We combine expertise, innovation, and dedication to deliver exceptional results.";

/**
 * Reasons to work with us — SectionHeader + 2-column grid of reason cards (icon, title, description).
 * Uses service.reasons when available (with icons), else service.benefits. Style consistent with Process/Challenges.
 */
export default function ServiceBenefits({ service }) {
  const reasons = service.reasons ?? [];
  const benefits = service.benefits ?? [];
  const items =
    reasons.length > 0
      ? reasons.map((r) => ({ id: r.id, title: r.title, description: r.description ?? r.desc, icon: r.icon }))
      : benefits.map((b, i) => ({ id: i, title: b.title, description: b.desc ?? b.description, icon: null }));

  if (items.length === 0) return null;

  const count = items.length;
  const titleWithAccent = (
    <h2 className="text-2xl sm:text-3xl lg:text-6xl max-w-5xl font-semibold text-neutral-900 tracking-tight leading-tight">
      {count > 0 ? `${count} Reasons to ` : "Reasons to "}
      <span className="font-serif italic font-normal"> <br />Us Work with</span>
      <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary ml-1.5 align-middle" aria-hidden />
    </h2>
  );

  return (
    <Section variant="muted" className="bg-primary-100">
      <Container size="wide" className="py-10 lg:py-12">
        <SectionHeader
          title={titleWithAccent}
          description={REASONS_SUBTITLE}
          layout="split"
          className="mb-12 lg:mb-16"
          descriptionClassName="max-w-2xl"
        />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {items.map((item, index) => {
              const isLastRow = index >= items.length - 2;
              const isRightCol = index % 2 === 1;
              return (
                <div
                  key={item.id ?? index}
                  className={`flex flex-col py-6 md:py-8 ${!isLastRow ? "border-b border-neutral-500" : ""
                    } ${isRightCol ? "md:pl-8 md:border-l border-neutral-500" : "md:pr-8"}`}
                >
                  {item.icon && (
                    <span
                      className="flex items-center justify-center w-14 h-14 text-neutral-700 mb-4 shrink-0"
                      aria-hidden
                    >
                      {React.createElement("lord-icon", {
                        src: item.icon,
                        trigger: "loop",
                        stroke: "bold",
                        colors: "primary:#374151,secondary:#D71EB9",
                        style: { width: 56, height: 56 },
                      })}
                    </span>
                  )}
                  <h3 className="text-2xl font-medium text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
