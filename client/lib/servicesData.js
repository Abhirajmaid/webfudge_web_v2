import { slugify } from "@/lib/helpers";
import { SERVICES_MENU } from "@/lib/constants";
import { clients } from "@/lib/clients";
import { SERVICES_DETAIL } from "@/lib/servicesDetail";

const DEFAULT_PROCESS = [
  { step: "01", title: "Discovery", desc: "Understanding brand goals and audience" },
  { step: "02", title: "Concept", desc: "Creative direction and design exploration" },
  { step: "03", title: "Execution", desc: "Design production and refinement" },
  { step: "04", title: "Delivery", desc: "Final assets and implementation" },
];

const DEFAULT_BENEFITS = [
  { title: "Creative Strategy", desc: "Data-informed creative decisions that align with your business goals and audience." },
  { title: "Conversion Focus", desc: "Design and copy tuned for clarity and conversions, not just aesthetics." },
  { title: "Scalable Design Systems", desc: "Consistent, reusable components that grow with your product and brand." },
  { title: "Fast Iteration", desc: "Agile workflows and clear feedback loops so we ship quickly without sacrificing quality." },
];

/**
 * Normalize for matching: lowercase, trim.
 */
function norm(s) {
  return (s || "").toLowerCase().trim();
}

/**
 * True only when the client's services_offered overlaps with this service's tags.
 * We match on tags only so that e.g. "Graphic & Creative Design" shows only
 * projects that have Graphic Design / Marketing Creatives etc., not website/UI projects
 * that merely contain the word "design".
 */
function clientMatchesService(client, serviceTitle, serviceTags) {
  const offered = (client.services_offered || []).map(norm);
  if (offered.length === 0) return false;

  const tagTerms = (serviceTags || []).map(norm).filter(Boolean);
  if (tagTerms.length === 0) return false;

  for (const o of offered) {
    for (const tag of tagTerms) {
      if (o === tag || o.includes(tag) || tag.includes(o)) return true;
    }
  }
  return false;
}

function getRelatedForService(serviceTitle, serviceTags, limit = 6) {
  const matched = clients.filter((c) =>
    clientMatchesService(c, serviceTitle, serviceTags)
  );
  return matched.slice(0, limit).map((c) => ({
    img: c.img_url,
    title: c.title,
    desc: c.short_des || "",
    slug: c.id,
    tags: c.services_offered ?? [],
    result: c.key_highlights?.[0] ?? null,
    link: c.link ?? null,
  }));
}

export function getServiceBySlug(slug) {
  const service = SERVICES_BY_SLUG[slug];
  return service ?? null;
}

export function getAllServiceSlugs() {
  return Object.keys(SERVICES_BY_SLUG);
}

/** Map detail process (step, title, description) to legacy shape (step "01", title, desc). */
function mapProcessFromDetail(detailProcess) {
  if (!detailProcess || !Array.isArray(detailProcess)) return null;
  return detailProcess.map((p) => ({
    step: String(p.step).padStart(2, "0"),
    title: p.title,
    desc: p.description ?? p.desc ?? "",
  }));
}

const SERVICES_BY_SLUG = (() => {
  const map = {};
  SERVICES_MENU.forEach((s) => {
    const slug = slugify(s.title);
    const detail = SERVICES_DETAIL[slug] || {};
    const detailProcess = mapProcessFromDetail(detail.process);
    map[slug] = {
      slug,
      title: s.title,
      tagline: s.desc,
      heroImage: s.image || "/images/dumy.png",
      heroSupporting: detail.hero?.supportingText ?? s.heroSupporting ?? null,
      heroHeadline: detail.hero?.headline ?? null,
      features: s.tags || [],
      process: detailProcess || DEFAULT_PROCESS,
      benefits: s.benefits || DEFAULT_BENEFITS,
      related: getRelatedForService(s.title, s.tags),
      // Rich detail (hero, stats, challenges, reasons, faqs, relatedServices)
      hero: detail.hero ?? null,
      stats: detail.stats ?? null,
      challenges: detail.challenges ?? null,
      reasons: detail.reasons ?? null,
      faqs: detail.faqs ?? null,
      relatedServices: detail.relatedServices ?? null,
    };
  });
  return map;
})();
