import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

/**
 * Map service.related item to CaseStudyCard data shape.
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

/**
 * Two related projects below hero — same card as Case Studies page, asymmetric row.
 */
export default function ServiceFeaturedProjects({ service }) {
  const related = (service.related ?? []).slice(0, 2);

  if (related.length === 0) return null;

  const [first, second] = related.map(toCaseStudyData);

  return (
    <Section variant="default" className="!py-10">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full items-start">
          <Link href="/case-studies" className="block w-full">
            <CaseStudyCard data={first} size="large" />
          </Link>
          {second && (
            <Link href="/case-studies" className="block w-full">
              <CaseStudyCard data={second} size="large" />
            </Link>
          )}
        </div>
      </Container>
    </Section>
  );
}
