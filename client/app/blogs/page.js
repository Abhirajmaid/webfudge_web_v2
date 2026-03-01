import BlogsHero from "@/components/sections/blogs/BlogsHero";
import FeaturedPost from "@/components/sections/blogs/FeaturedPost";
import PostsSection from "@/components/sections/blogs/PostsSection";
import CTA from "@/components/sections/home/CTA";
import Testimonial from "@/components/sections/home/Testimonial";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Insights and stories from the WebFudge team on design, development, strategy, and building products that last.",
};

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
