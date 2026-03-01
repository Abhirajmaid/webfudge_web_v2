import { slugify } from "@/lib/helpers";
import { SERVICES_MENU } from "@/lib/constants";
import { clients } from "@/lib/clients";

const DEFAULT_PROCESS = [
  { step: "01", title: "Discover", desc: "Deep research & alignment" },
  { step: "02", title: "Design", desc: "Pixel-perfect creation" },
  { step: "03", title: "Collaborate", desc: "Stakeholder alignment" },
  { step: "04", title: "Refine", desc: "Iterate & polish till perfect" },
];

function getRelatedForService(serviceTitle, limit = 3) {
  const titleLower = serviceTitle.toLowerCase();
  const matched = clients.filter((c) => {
    const offered = (c.services_offered || []).join(" ").toLowerCase();
    if (titleLower.includes("ui/ux") && (offered.includes("ui/ux") || offered.includes("ux"))) return true;
    if (titleLower.includes("website") && (offered.includes("website") || offered.includes("web"))) return true;
    if (titleLower.includes("e-commerce") && offered.includes("e-commerce")) return true;
    if (titleLower.includes("brand") && (offered.includes("brand") || offered.includes("branding"))) return true;
    if (titleLower.includes("graphic") && (offered.includes("graphic") || offered.includes("design"))) return true;
    if (titleLower.includes("pitch") && (offered.includes("deck") || offered.includes("presentation"))) return true;
    return false;
  });
  return matched.slice(0, limit).map((c) => ({
    img: c.img_url,
    title: c.title,
    desc: c.short_des || "",
    slug: c.id,
  }));
}

export function getServiceBySlug(slug) {
  const service = SERVICES_BY_SLUG[slug];
  return service ?? null;
}

export function getAllServiceSlugs() {
  return Object.keys(SERVICES_BY_SLUG);
}

const SERVICES_BY_SLUG = (() => {
  const map = {};
  SERVICES_MENU.forEach((s) => {
    const slug = slugify(s.title);
    map[slug] = {
      slug,
      title: s.title,
      tagline: s.desc,
      heroImage: s.image || "/images/dumy.png",
      features: s.tags || [],
      process: DEFAULT_PROCESS,
      related: getRelatedForService(s.title),
    };
  });
  return map;
})();
