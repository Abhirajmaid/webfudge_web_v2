import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/servicesData";

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} | Services`,
    description: service.tagline,
  };
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      {/* 1. Hero */}
      <Section variant="muted">
        <Container size="wide" className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4">
                Service
              </p>
              <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900">
                {service.title}
              </h1>
              <p className="text-lg text-neutral-700 mt-4 max-w-xl">
                {service.tagline}
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src={service.heroImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Feature highlights */}
      <Section variant="default">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900">
                What this includes
              </h2>
              <p className="text-neutral-600 mt-4 leading-relaxed max-w-lg">
                We combine strategy, design, and execution so you get a complete
                solution — from research and wireframes to polished deliverables
                and handoff.
              </p>
            </div>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="text-lg text-teal-600 shrink-0">•</span>
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 3. Process / How it works */}
      <Section variant="muted">
        <Container size="wide">
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 text-center mb-12 lg:mb-16">
            A Lean, Collaborative Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {service.process.map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="text-2xl font-medium text-neutral-400">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-neutral-900 mt-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Related case studies */}
      {service.related && service.related.length > 0 && (
        <Section variant="default">
          <Container size="wide">
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-10">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {service.related.map((project) => (
                <Link
                  key={project.slug}
                  href="/case-studies"
                  className="group block rounded-xl overflow-hidden border border-neutral-100 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-[16/10] w-full bg-neutral-100">
                    <Image
                      src={project.img}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
                      {project.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3">
                      View project
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. CTA */}
      <Section variant="muted">
        <Container size="narrow" className="text-center py-16 lg:py-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900">
            Work With Us
          </h2>
          <p className="text-neutral-600 mt-4 max-w-xl mx-auto">
            Ready to bring your product to life? Let&apos;s discuss your project
            and create something great together.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
