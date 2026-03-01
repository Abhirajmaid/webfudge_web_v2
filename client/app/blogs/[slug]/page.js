import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { POSTS } from "@/lib/blogPosts";

export async function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Section variant="default">
        <Container size="narrow" className="pt-20 lg:pt-28 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 text-sm font-medium mb-8"
          >
            ← Back to blog
          </Link>
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-neutral-500 text-sm">
            {post.date} · {post.author}
          </p>
        </Container>
      </Section>

      <Section variant="default" className="pt-0">
        <Container size="narrow">
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-200 mb-12">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg text-neutral-700 leading-relaxed">{post.excerpt}</p>
            <p className="text-neutral-600 mt-6">
              Full article content can be added here or loaded from Strapi/CMS.
            </p>
          </div>
          <div className="mt-12">
            <Button href="/blogs" variant="secondary" size="md">
              Back to all posts
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
