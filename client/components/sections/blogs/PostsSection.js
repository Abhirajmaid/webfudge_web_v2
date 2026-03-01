"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { POSTS } from "@/lib/blogPosts";

const CATEGORIES = ["All", "Design", "Development", "Strategy", "UX", "Business"];
const POSTS_PER_PAGE = 6;
const featuredPost = POSTS[0];

const BLOG_CARD_GRADIENTS = {
  Design: "bg-gradient-to-b from-white via-emerald-50 to-teal-200",
  Development: "bg-gradient-to-b from-white via-cyan-50 to-teal-300",
  Strategy: "bg-gradient-to-b from-white via-rose-50 to-orange-200",
  UX: "bg-gradient-to-b from-white via-slate-50 to-blue-200",
  Business: "bg-gradient-to-b from-white via-amber-50 to-orange-200",
};

function BlogCard({ post }) {
  const gradient =
    BLOG_CARD_GRADIENTS[post.category] ??
    "bg-gradient-to-b from-white via-neutral-50 to-neutral-200";

  return (
    <article className="group flex flex-col h-full">
      <div
        className={`flex flex-col h-full relative overflow-hidden border border-neutral-200 min-h-[320px] p-8 hover:shadow-2xl transition-shadow duration-500 ${gradient}`}
      >

        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 border border-neutral-200 text-neutral-800 text-xs font-medium uppercase tracking-wider w-fit mt-2">
          {post.category}
        </span>
        <h2 className="font-serif font-extrabold italic text-xl text-neutral-900 leading-snug mt-3 mb-2 line-clamp-2">
          <Link href={`/blogs/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-neutral-500">{post.date}</span>
          <Button href={`/blogs/${post.slug}`} variant="primary" size="sm">
            Read Story
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function PostsSection() {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    const list = category === "All" ? POSTS : POSTS.filter((p) => p.category === category);
    return list.filter((p) => p.id !== featuredPost.id);
  }, [category]);

  const visiblePosts = useMemo(
    () => filteredPosts.slice(0, visibleCount),
    [filteredPosts, visibleCount]
  );
  const hasMore = visiblePosts.length < filteredPosts.length;

  return (
    <Section variant="muted" id="posts">
      <Container size="wide">
        <div className="flex gap-4 flex-wrap mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${isSelected
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                  }`}
                aria-pressed={isSelected}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setVisibleCount((n) => n + POSTS_PER_PAGE)}
            >
              Load More Posts
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
