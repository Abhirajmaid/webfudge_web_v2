import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { POSTS } from "@/lib/blogPosts";

const BLOG_CARD_GRADIENTS = {
  Design: "bg-gradient-to-b from-white via-emerald-50 to-teal-200",
  Development: "bg-gradient-to-b from-white via-cyan-50 to-teal-300",
  Strategy: "bg-gradient-to-b from-white via-rose-50 to-orange-200",
  UX: "bg-gradient-to-b from-white via-slate-50 to-blue-200",
  Business: "bg-gradient-to-b from-white via-amber-50 to-orange-200",
};

const featuredPost = POSTS[0];

export default function FeaturedPost() {
  const gradient =
    BLOG_CARD_GRADIENTS[featuredPost.category] ??
    "bg-gradient-to-b from-white via-neutral-50 to-neutral-200";

  return (
    <Section variant="default" id="featured">
      <Container size="wide" className="mt-8">
        <div
          className={`group flex flex-col relative overflow-hidden border border-neutral-200 min-h-[540px] p-10 lg:p-12 hover:shadow-2xl transition-shadow duration-500 ${gradient}`}
        >

          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 border border-neutral-200 text-neutral-800 text-xs font-medium uppercase tracking-wider w-fit mt-2">
            {featuredPost.category}
          </span>
          <h2 className="font-serif font-extrabold italic text-3xl lg:text-4xl text-neutral-900 leading-tight mt-4 mb-3 max-w-2xl">
            <Link href={`/blogs/${featuredPost.slug}`} className="hover:text-primary transition-colors">
              {featuredPost.title}
            </Link>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-xl flex-1">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center justify-between mt-8">
            <span className="text-sm text-neutral-500">{featuredPost.date}</span>
            <Button href={`/blogs/${featuredPost.slug}`} variant="primary" size="md">
              Read Story
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
