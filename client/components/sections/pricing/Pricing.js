"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import Button from "@/components/ui/Button";

const PLANS = [
  {
    id: 1,
    name: "Founder & Early Teams",
    price: "$4999",
    features: [
      "Up to 10 pages with custom design",
      "Responsive & mobile-first build",
      "CMS integration (Strapi / Sanity)",
      "SEO foundation & sitemap",
      "3 revision rounds",
      "60-day post-launch support",
    ],
    image: "/images/pricing_1.png",
    gradient: "rose",
    href: "/contact?plan=founder",
    cta: "Get A Quick Quote",
  },
  {
    id: 2,
    name: "Scale-Ups & Enterprise",
    price: "$8999",
    features: [
      "Unlimited pages & custom web app",
      "Full design system & component library",
      "Advanced CMS + e-commerce",
      "Performance & security audits",
      "Dedicated project manager",
      "90-day support + retainer options",
    ],
    image: "/images/pricing_2.png",
    gradient: "teal",
    href: "/contact?plan=enterprise",
    cta: "Book A Scoping Call",
  },
];

const gradientMap = {
  rose:
    "bg-gradient-to-b from-white via-rose-50 to-orange-200",
  teal:
    "bg-gradient-to-b from-white via-cyan-50 to-teal-300",
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function PricingCard({ plan, index }) {
  const gradient = gradientMap[plan.gradient] ?? gradientMap.rose;

  return (
    <motion.div
      variants={cardVariant}
      className="group"
    >
      <div
        className={`relative overflow-hidden border border-neutral-200 min-h-[480px] md:min-h-0 lg:min-h-[520px] flex flex-col justify-between ${gradient} hover:shadow-2xl transition-shadow duration-500`}
      >
        <div className="p-8 md:p-8 lg:p-12">
          <p className="font-serif font-extrabold italic text-2xl md:text-3xl text-black">
            {plan.name}
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-neutral-900 mt-2">
            {plan.price}
          </p>

          <ul className="mt-4 md:mt-6 space-y-1 font-semibold text-sm md:text-base text-neutral-700 list-disc pl-5">
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="mt-8 lg:mt-16">
            <Button
              href={plan.href}
              variant="primary"
              size="md"
            >
              {plan.cta}
            </Button>
          </div>
        </div>

        <div className="relative w-full min-h-[320px] md:min-h-[380px] lg:min-h-[550px] flex items-end">
          <Image
            src={plan.image}
            alt=""
            fill
            aria-hidden
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top drop-shadow-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <Section id="pricing" variant="default">
      <Container>
        <SectionHeader
          badge="Control Your Subscription"
          title={
            <h2 className="text-5xl lg:text-7xl tracking-tight leading-[1.05] font-semibold text-neutral-950">
              Premium{" "}
              <span className="italic font-serif font-normal">Design</span>{" "}
              <span className="text-primary">Services</span>
            </h2>
          }
          description="Transparent pricing for teams at every stage. No hidden fees — just clear scopes, fair prices, and results you can measure."
          layout="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-3"
        >
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-base text-neutral-500 mt-12"
        >
          All plans include a free discovery call.{" "}
          <Link href="/contact" className="text-primary hover:underline font-medium">
            Let&apos;s talk about your project.
          </Link>
        </motion.p>
      </Container>
    </Section>
  );
}
