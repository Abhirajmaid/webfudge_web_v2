import { SITE_URL } from "@/lib/constants";

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/blogs",
    "/case-studies",
    "/contact",
  ];

  return routes.map((path) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
