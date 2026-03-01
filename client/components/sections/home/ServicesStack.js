"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { SERVICES_MENU } from "@/lib/constants";
import { slugify } from "@/lib/helpers";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import Button from "@/components/ui/Button";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: { opacity: 1, x: 0 },
};

export default function ServicesStack() {
  return (
    <Section variant="default" className="mt-[30vh]">
      <Container>
        <SectionHeader
          title={
            <h1 className="text-4xl lg:text-6xl font-medium leading-tight">
              Services we build strong
              <br />
              Products
            </h1>
          }
          description="Whether you're building a SaaS platform, launching a mobile app, or validating a new MVP; Webfudge is ready to help. Let's turn your product vision into a world-class user experience."
          layout="split"
          className="items-start text-left"
          descriptionClassName="max-w-2xl mx-0"
        />
        <div className="relative pt-12">
          <div className="space-y-0">
            {SERVICES_MENU.map((service, idx) => (
              <div key={service.title} className="w-full">
                <motion.div
                  initial={{ scale: 0.98, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`${service.bg ?? "bg-white"} min-h-[470px] flex items-center px-6 lg:px-12 py-8 shadow-lg`}
                >
                  <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                      <div className="flex flex-col justify-between gap-4">
                        <motion.h3
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: idx * 0.06 }}
                          className="text-5xl font-medium font-serif italic"
                        >
                          <Link
                            href={`/services/${slugify(service.title)}`}
                            className="hover:text-primary transition-colors"
                          >
                            {service.title}
                          </Link>
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.06 + idx * 0.06 }}
                          className="text-lg text-neutral-500"
                        >
                          {service.tags ? `${service.tags.length} services` : ""}
                        </motion.p>
                      </div>

                      <div className="flex items-center justify-center">
                        {service.image ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.06 }}
                            className="relative w-full max-w-md h-[350px] hidden lg:block overflow-hidden"
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover object-center"
                            />
                          </motion.div>
                        ) : (
                          <div className="w-full max-w-md h-[350px] bg-neutral-600" />
                        )}
                      </div>

                      <div className="flex flex-col">
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: 0.08 + idx * 0.06 }}
                          className="text-black text-xl"
                        >
                          {service.desc}
                        </motion.p>

                        <motion.ul
                          className="space-y-2 mt-6"
                          variants={listVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          {(service.tags || []).map((f, i) => (
                            <motion.li
                              key={f}
                              className="flex gap-2 items-start"
                              variants={itemVariants}
                              transition={{ duration: 0.35, delay: i * 0.03 }}
                            >
                              <Icon
                                icon="mingcute:star-fill"
                                className="text-neutral-600 mt-1"
                                width="16"
                                height="16"
                                aria-hidden="true"
                              />
                              <span className="text-black text-md">{f}</span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button
                            href={`/services/${slugify(service.title)}`}
                            variant="ghost"
                            size="md"
                            className="border border-black hover:bg-neutral-100"
                          >
                            Learn more
                          </Button>
                          <Button href="/contact" variant="primary" size="md">
                            Work with us
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
