"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { CLIENT_LOGOS } from "@/lib/constants";

const clients = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function Clients() {
  return (
    <Section variant="muted" className="py-14 lg:py-20">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-base md:text-lg font-medium text-neutral-800 mb-12 max-w-3xl mx-auto"
        >
          Empowered 100+ Startups and 100+ Business with the Investors like
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-neutral-100 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-neutral-100 to-transparent" />

          <motion.div
            className="flex items-center gap-12 lg:gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {clients.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center justify-center flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
              >
                {item.logo ? (
                  <div className="relative w-auto h-14 lg:w-auto lg:h-20 shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={164}
                      height={164}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-md bg-neutral-400 shrink-0" aria-hidden />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
