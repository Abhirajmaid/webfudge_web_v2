import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

/**
 * Map service.related item to CaseStudyCard data shape (same as Case Studies page).
 */
function toCaseStudyData(project) {
  return {
    id: project.slug,
    title: project.title,
    image: project.img,
    description: project.desc ?? "",
    tags: project.tags ?? [],
    result: project.result ?? null,
  };
}

const RELATED_SUBTITLE =
  "Explore work we’ve delivered for brands in this space.";

/**
 * Related projects — SectionHeader + 2×2 grid of CaseStudyCards.
 */
export default function ServiceRelatedProjects({ service }) {
  const related = service.related ?? [];

  if (related.length === 0) return null;

  const entries = related.map(toCaseStudyData);

  const titleWithAccent = (
    <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-tight">
      Related{" "}
      <span className="font-serif italic font-normal">Projects</span>
      <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary ml-1.5 align-middle" aria-hidden />
    </h2>
  );

  return (
    <Section variant="muted">
      <Container size="wide">
        <SectionHeader
          title={titleWithAccent}
          description={RELATED_SUBTITLE}
          layout="split"
          className="mb-10 lg:mb-12"
          descriptionClassName="max-w-2xl"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {entries.map((data, index) => {
            const isLastAndOdd =
              entries.length % 2 === 1 && index === entries.length - 1;
            return (
              <Link
                key={data.id}
                href="/case-studies"
                className={`block w-full ${isLastAndOdd ? "sm:col-span-2" : ""}`}
              >
                <CaseStudyCard data={data} size="large" />
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
