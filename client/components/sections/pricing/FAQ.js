"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/helpers";
import Button from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/lib/constants";

const faqs = FAQ_ITEMS.map(({ question, answer }) => ({ q: question, a: answer }));

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

function AccordionItem({ item, index, open, onToggle, staggerDelay }) {
  const isOpen = open === index;

  return (
    <motion.div
      className="border-b border-neutral-200"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: staggerDelay }}
    >
      <div
        className={cn(
          "flex justify-between items-center cursor-pointer pb-8",
          index === 0 ? "pt-0" : "pt-8"
        )}
        onClick={() => onToggle(index)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle(index);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-xl text-neutral-900 pr-4">
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl text-neutral-500"
          aria-hidden
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="-mt-1 text-neutral-700 pr-8 pb-2">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Section variant="default" id="faq">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl lg:text-5xl tracking-tight leading-tight font-semibold">
              Got Questions? We&apos;ve
              <span className="block italic font-serif font-light">
                Got Answers
              </span>
            </h2>

            <p className="mt-10 text-black text-base font-medium max-w-lg">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to
              help. Reach out and we&apos;ll get back within 24 hours.
            </p>

            <p className="md:mt-20 mt-10 text-base font-semibold text-black">
              Have a question about pricing?
            </p>

            <div className="mt-4 mb-16 lg:mb-0 flex flex-col lg:flex-row md:items-center items-start gap-6">
              <Button href="/contact" variant="primary" size="md">
                Book a Call
              </Button>
              <a
                href="mailto:hello@webfudge.com"
                className="inline-flex items-center gap-2 text-neutral-700 underline underline-offset-4 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 shrink-0"
                  aria-hidden
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                contact@webfudge.in
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                open={open}
                onToggle={handleToggle}
                staggerDelay={0.05 * index}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
