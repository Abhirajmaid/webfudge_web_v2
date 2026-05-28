"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import { TESTIMONIALS, SITE_NAME } from "@/lib/constants";

const testimonials = TESTIMONIALS.map(({ id, quote, name, title, avatar }) => ({
  id,
  text: quote,
  name,
  role: title,
  avatar,
  platform: ["Clutch", "Fiverr", "Upwork", "Clutch"][(id - 1) % 4],
}));

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

/** Horizontal marquee speed — pixels per second (device-independent). */
const MARQUEE_SPEED_PX_PER_S = 80;

export default function Testimonial() {
  const marqueeRef = useRef(null);
  const pausedRef = useRef(false);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const track = marqueeRef.current;
    if (!track) return;

    const tick = (now) => {
      const last = lastTimeRef.current;
      if (last !== 0 && !pausedRef.current) {
        const dt = Math.min((now - last) / 1000, 0.1);
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > 0) {
          offsetRef.current -= MARQUEE_SPEED_PX_PER_S * dt;
          if (offsetRef.current <= -loopWidth) {
            offsetRef.current += loopWidth;
          }
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }
      lastTimeRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Section variant="muted" id="testimonials" className="min-h-screen">
      <Container size="default" className="flex items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="w-full"
        >
          <SectionHeader
            badge="TESTIMONIAL"
            title={
              <h2 className="text-5xl lg:text-6xl text-center font-semibold tracking-tight max-w-4xl mx-auto">
                Real results. Real stories. See why clients trust{" "}
                <span className="italic font-serif font-normal">WebFudge.</span>
              </h2>
            }
            layout="center"
            className="mb-4 w-full lg:mb-8"
          />

          <div className="mt-8 grid grid-cols-1 gap-12 items-start lg:mt-20 lg:gap-16 lg:grid-cols-[250px_1fr]">
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center justify-between h-[70%] my-auto text-center lg:text-left"
            >
              <div className="flex  flex-col items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src="/logo_mark_removebg.png"
                    alt={`${SITE_NAME} logo`}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-semibold text-neutral-900">{SITE_NAME}</div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-6xl lg:text-7xl font-semibold mt-12">4.9</p>
                <div
                  className="flex gap-2 mt-4 text-yellow-500 text-3xl"
                  aria-hidden
                >
                  ★★★★★
                </div>
                <p className="text-neutral-700 mt-3 text-2xl font-medium">400+ Reviews</p>
              </div>

              <div className="flex gap-6 mt-8 items-center text-base">
                <span className="text-neutral-400">Clutch</span>
                <span className="text-neutral-400">Upwork</span>
                <span className="text-neutral-400">Fiverr</span>
              </div>
            </motion.div>

            <div className="mt-4">
              <div className="overflow-hidden h-[390px] lg:h-[480px]">
                <div
                  ref={marqueeRef}
                  className="flex h-full items-stretch gap-8 lg:gap-10"
                  style={{ willChange: "transform" }}
                  onMouseEnter={() => {
                    pausedRef.current = true;
                  }}
                  onMouseLeave={() => {
                    pausedRef.current = false;
                  }}
                  onTouchStart={() => {
                    pausedRef.current = true;
                  }}
                  onTouchEnd={() => {
                    pausedRef.current = false;
                  }}
                  onTouchCancel={() => {
                    pausedRef.current = false;
                  }}
                >
                  {[...testimonials, ...testimonials].map((item, idx) => (
                    <motion.div
                      key={`${item.id}-${idx}`}
                      variants={fadeUp}
                      className={`min-w-[min(100vw-2rem,300px)] sm:min-w-[340px] lg:min-w-[380px] h-full px-4 py-3 sm:px-6 lg:px-8 lg:py-2 flex flex-col justify-between ${idx % testimonials.length !== 0 ? 'lg:border-l-[1.5px] lg:border-neutral-300 lg:pl-8' : ''}`}
                    >
                      <div className="flex justify-between items-start gap-4 shrink-0">
                        <div className="text-yellow-500 text-lg sm:text-2xl" aria-hidden>
                          ★★★★★
                        </div>
                        <p className="text-sm sm:text-base text-neutral-400 shrink-0">
                          {item.platform}
                        </p>
                      </div>

                      <p className="mt-4 sm:mt-6 flex-1 min-h-0 overflow-y-auto overscroll-contain text-sm sm:text-base lg:text-lg font-medium text-neutral-800 leading-relaxed [scrollbar-gutter:stable]">
                        &ldquo;{item.text}&rdquo;
                      </p>

                      <div className="mt-6 sm:mt-10 lg:mt-12 flex items-center gap-3 shrink-0">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={240}
                            height={240}
                            className="object-cover w-full"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-neutral-900 truncate text-sm sm:text-base lg:text-lg">
                            {item.name}
                          </p>
                          <p className="text-sm sm:text-base text-neutral-700 truncate">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
