import BlogsHero from "@/components/sections/blogs/BlogsHero";
import FeaturedPost from "@/components/sections/blogs/FeaturedPost";
import PostsSection from "@/components/sections/blogs/PostsSection";
import CTA from "@/components/sections/home/CTA";
import Testimonial from "@/components/sections/home/Testimonial";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Webfudge Blog & Insights",
  description:
    "Read Webfudge insights on design, development, product strategy, and growth for modern digital brands.",
  path: "/blogs",
  type: "article",
  keywords: ["web design blog", "product strategy articles", "development insights"],
});

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <FeaturedPost />
      <PostsSection />
      <Testimonial />
      <CTA />
    </>
  );
}
