import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/servicesData";
import SingleServicePage from "@/components/sections/services/SingleServicePage";

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

  if (!service) {
    notFound();
  }

  return (
    <SingleServicePage service={service} />
  );
}
