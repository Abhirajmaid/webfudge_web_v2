import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/servicesData";
import SingleServicePage from "@/components/sections/services/SingleServicePage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return buildPageMetadata({ title: "Service not found", noIndex: true });
  return buildPageMetadata({
    title: `${service.title} | Webfudge Services`,
    description: service.tagline,
    path: `/services/${params.slug}`,
    keywords: service.features || [],
  });
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <SingleServicePage service={service} />
  );
}
