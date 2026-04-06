import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { getServiceFeaturedProjects } from "@/lib/servicesData";

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
 * Up to four related projects below hero — same card as Case Studies page, 2×2 grid on md+.
 */
export default function ServiceFeaturedProjects({ service }) {
  const featured = getServiceFeaturedProjects(service);

  if (featured.length === 0) return null;

  const entries = featured.map(toCaseStudyData);

  return (
    <Section variant="default" className="!py-10">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full items-start">
          {entries.map((data) => (
            <CaseStudyCard key={data.id} data={data} size="large" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
