"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";

const PROCESS_SUBTITLE =
  "From start to finish, our process transforms your ideas into intuitive experiences that achieve your business goals and set your product apart in the market.";

const STEP_GRADIENTS = [
  "bg-gradient-to-r from-blue-400 to-blue-600",
  "bg-gradient-to-r from-cyan-400 to-teal-500",
  "bg-gradient-to-r from-emerald-400 to-green-500",
  "bg-gradient-to-r from-lime-400 to-yellow-500",
  "bg-gradient-to-r from-amber-400 to-orange-500",
];

/**
 * Our Process — Timeline section with SectionHeader and horizontal step indicators (gradient bars + plus icon).
 */
export default function ServiceProcess({ service }) {
  const processSteps = service.process ?? [];

  if (processSteps.length === 0) return null;

  const titleText = `Our Innovative ${service.title} Process`;
  const titleWithAccent = (
    <h2 className="font-serif text-2xl max-w-5xl sm:text-3xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
      {titleText}
      <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary ml-1.5 align-middle" aria-hidden />
    </h2>
  );

  return (
    <Section variant="dark">
      <Container size="wide" className="py-12">
        <SectionHeader
          badge="process"
          title={titleWithAccent}
          description={PROCESS_SUBTITLE}
          layout="center"
          className="mb-12 lg:mb-16"
          descriptionClassName="max-w-xl text-white/80"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {processSteps.map((item, index) => {
            const stepNum = typeof item.step === "number" ? item.step : index + 1;
            const gradient = STEP_GRADIENTS[index % STEP_GRADIENTS.length];
            return (
              <div key={item.step ?? index} className="flex flex-col">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                  Step #{stepNum}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white mt-1">
                  {item.title}
                </h3>
                <div
                  className={`mt-4 h-12 rounded-xl ${gradient} flex items-center justify-center shrink-0`}
                  aria-hidden
                >
                  <span className="text-white text-2xl font-light leading-none">+</span>
                </div>
                {item.description && (
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
