"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import Button from "@/components/ui/Button";
import CaseGridProjectCard from "@/components/ui/CaseGridProjectCard";
import { clients } from "@/lib/clients";

const PROJECTS = clients.slice(0, 6).map((c) => ({
  id: c.id,
  title: c.title,
  desc: c.short_des,
  image: c.img_url,
}));

const ROWS = [
  { full: true, items: [PROJECTS[0]] },
  { full: false, items: [PROJECTS[1], PROJECTS[2]] },
  { full: true, items: [PROJECTS[3]] },
  { full: false, items: [PROJECTS[4], PROJECTS[5]] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function CaseGrid({ showViewAll = true }) {
  return (
    <Section id="case-studies" variant="dark" className="bg-black py-24 lg:py-32 ">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <SectionHeader
          title={
            <h2 className="text-4xl lg:text-6xl leading-tight">
              <span className="block font-semibold tracking-tight">OUR</span>
              <span className="block font-serif italic font-normal opacity-75">PROJECTS</span>
            </h2>
          }
          description="From SaaS dashboards to fintech mobile apps, we design products that scale with your users. Explore some of our recent collaborations with startups all over India."
          layout="split"
          dark
          className="mb-14"
        />

        <div className="flex flex-col gap-14 lg:gap-16">
          {ROWS.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {row.full ? (
                <motion.div variants={fadeUp}>
                  <CaseGridProjectCard project={row.items[0]} size="full" />
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 items-start">
                  {row.items.map((project, i) => (
                    <motion.div
                      key={project.id}
                      variants={fadeUp}
                      className={i === 1 ? "pt-16 lg:pt-[270px]" : ""}
                    >
                      <CaseGridProjectCard project={project} size="pair" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex justify-center"
          >
            <Button href="/case-studies" variant="light" size="md">
              View All Work
            </Button>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
