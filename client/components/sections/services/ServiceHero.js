import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

/**
 * Hero section for the service detail page.
 * Single column, left-aligned, editorial headline. Uses Section, Container, Button.
 */
export default function ServiceHero({ service }) {
  const headline = service?.heroHeadline ?? service?.title ?? "Graphic & Creative Design That Captivates And Converts";
  const subtext = service?.tagline ?? "Professional visual content that elevates your brand and drives engagement.";

  return (
    <Section className="!py-10">
      <Container size="wide">
        <div className="max-w-5xl space-y-8">
          <h1 className="text-5xl lg:text-8xl font-regular leading-[1.05] tracking-tight">
            {headline}
          </h1>
          <p className="text-2xl max-w-2xl">
            {subtext}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="primary" size="lg">
              Book a Call
            </Button>
            {service?.questionnairePath ? (
              <Button href={service.questionnairePath} variant="light" size="lg">
                Questionnaire
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
