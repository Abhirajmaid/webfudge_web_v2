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
    link: project.link ?? null,
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
          <CaseStudyCard data={first} size="large" />
          {second && <CaseStudyCard data={second} size="large" />}
        </div>
      </Container>
    </Section>
  );
}
