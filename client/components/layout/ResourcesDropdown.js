"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { POSTS } from "@/lib/blogPosts";

const DROPDOWN_POSTS = POSTS.slice(0, 2);

const CARD_GRADIENTS = {
  Design: "bg-gradient-to-b from-white via-emerald-50 to-teal-200",
  Development: "bg-gradient-to-b from-white via-cyan-50 to-teal-300",
  Strategy: "bg-gradient-to-b from-white via-rose-50 to-orange-200",
  UX: "bg-gradient-to-b from-white via-slate-50 to-blue-200",
  Business: "bg-gradient-to-b from-white via-amber-50 to-orange-200",
};

const arrowIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

function ResourcesDropdownInner({ style, onMouseEnter, onMouseLeave, ...props }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 w-full bg-white/95 backdrop-blur-xl border-t border-neutral-200 shadow-xl z-40"
      style={{ top: style?.top ?? "100%", ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
          {/* COLUMN 1 — Left intro */}
          <div className="md:col-span-4">
            <h3 className="text-4xl font-medium text-neutral-900">
              Resources &amp; Blogs
            </h3>
            <p className="text-neutral-500 mt-6 leading-relaxed max-w-sm">
              Explore ready-made templates, design resources, and practical insights to streamline your workflow and accelerate delivery.
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <Link href="/services" className="text-lg text-neutral-600 hover:text-black transition-colors flex items-center gap-2 group">
                  Services
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{arrowIcon}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg text-neutral-600 hover:text-black transition-colors flex items-center gap-2 group">
                  Contact us
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{arrowIcon}</span>
                </Link>
              </li>
            </ul>
            <Button
              href="/blogs"
              variant="primary"
              size="sm"
              className="mt-10"
            >
              Explore Blogs
            </Button>
          </div>

          {/* Blog cards from blogs data */}
          {DROPDOWN_POSTS.map((post) => (
            <div key={post.id} className="md:col-span-3">
              <div
                className={`group relative overflow-hidden border border-neutral-200 min-h-[320px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-500 ${CARD_GRADIENTS[post.category] ?? "bg-gradient-to-b from-white via-neutral-50 to-neutral-200"}`}
              >
                <div className="p-8">
                  <h4 className="font-serif font-extrabold italic text-xl text-neutral-900 leading-snug">
                    <Link href={`/blogs/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-neutral-600 mt-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="p-8 pt-0">
                  <Button href={`/blogs/${post.slug}`} variant="primary" size="sm">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}

const ResourcesDropdown = forwardRef(ResourcesDropdownInner);
ResourcesDropdown.displayName = "ResourcesDropdown";

export default ResourcesDropdown;
