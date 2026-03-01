import Container from "@/components/layout/Container";
import CaseStudiesContainer from "@/components/sections/case-studies/CaseStudiesContainer";

export default function CaseStudiesGridSection() {
  return (
    <div className="bg-white pt-4 pb-16 lg:pb-24">
      <Container>
        <CaseStudiesContainer />
      </Container>
    </div>
  );
}
