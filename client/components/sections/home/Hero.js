"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const panelVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

function Star() {
  return (
    <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function MediaPlaceholder() {
  return (
    <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[520px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #D71EB9, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[65%] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-8 w-full max-w-3xl">
        {[
          { value: "50+", label: "Projects Shipped", icon: "🚀" },
          { value: "98", label: "Avg Lighthouse Score", icon: "⚡" },
          { value: "3×", label: "Average Client ROI", icon: "📈" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex-1 min-w-[140px] bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 text-center"
          >
            <span className="text-2xl block mb-1" aria-hidden>{stat.icon}</span>
            <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
            <p className="text-xs text-neutral-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(to right,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

export default function Hero({
  videoSrc = "/Webfudge Final Vid.webm",
  imageSrc,
}) {
  return (
    <Section variant="default" className="!py-5 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 28% 22%, rgba(0,0,0,0.035) 0%, transparent 42%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(to right,#000 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <Container className="relative z-10 pt-8 lg:pt-8 pb-16 lg:pb-16">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute right-0 top-[33%] -translate-y-1/2 z-20"
          >
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium select-none">
                <span className="flex items-center gap-0.5" aria-label="5 stars">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
                </span>
                Trusted by 50+ ambitious brands worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 text-4xl sm:text-5xl lg:text-[4.75rem] leading-[1.05] tracking-tight text-neutral-950"
            >
              <span className="font-semibold">Premium </span>
              <span className="font-serif italic font-normal">UX-Led Products</span>
              <br />
              <span className="font-semibold">Design &amp; Engineering Partner</span>
              <br />
              <span className="font-semibold">For </span>
              <span className="font-semibold text-primary">Business Growth.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl"
            >
              Webfudge partners with ambitious brands to craft high-performance
              websites, design systems, and digital strategies that drive real,
              measurable growth shipped fast, built to last.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2.5" aria-hidden>
                {[
                  { gender: "women", n: 44 },
                  { gender: "men", n: 32 },
                  { gender: "women", n: 68 },
                  { gender: "men", n: 75 },
                ].map(({ gender, n }, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-white bg-neutral-200 overflow-hidden"
                    style={{ zIndex: 4 - i }}
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/${gender}/${n}.jpg`}
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500">
                <strong className="font-semibold text-neutral-900">50+ brands</strong>{" "}
                launched with us and counting
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 lg:hidden">
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={panelVariant}
            initial="hidden"
            animate="show"
            className="mt-16 lg:mt-20"
          >
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 w-[70%] h-40 blur-3xl opacity-20 pointer-events-none -mt-8"
              style={{ background: "radial-gradient(ellipse at center, #D71EB9, transparent 70%)" }}
            />
            <div className="relative overflow-hidden bg-black shadow-2xl border border-neutral-200/40 hover:scale-[1.01] transition-transform duration-500">
              {videoSrc ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={videoSrc}
                  className="w-full h-[260px] sm:h-[340px] lg:h-[720px] object-cover"
                />
              ) : imageSrc ? (
                <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[520px]">
                  <Image
                    src={imageSrc}
                    alt="WebFudge — Premium Digital Agency showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <MediaPlaceholder />
              )}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
