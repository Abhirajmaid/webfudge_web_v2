import { SITE_URL } from "@/lib/constants";
import { POSTS } from "@/lib/blogPosts";
import { getAllServiceSlugs } from "@/lib/servicesData";

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
    { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    {
      path: "/services/website/questionnaire",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      path: "/services/branding/questionnaire",
      priority: 0.6,
      changeFrequency: "monthly",
    },
  ];

  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const blogRoutes = POSTS.map((post) => ({
    path: `/blogs/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const routes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
