"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn, slugify } from "@/lib/helpers";
import { SITE_NAME, NAV_LINKS, SERVICES_MENU } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import ResourcesDropdown from "@/components/layout/ResourcesDropdown";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);
  const servicesTriggerRef = useRef(null);
  const servicesPanelRef = useRef(null);
  const resourcesTriggerRef = useRef(null);
  const resourcesPanelRef = useRef(null);
  const [navHeight, setNavHeight] = useState(84);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    if (openMenu === "services" || openMenu === "resources") {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [openMenu]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (openMenu === "services") {
        const trigger = servicesTriggerRef.current;
        const panel = servicesPanelRef.current;
        if (trigger?.contains(e.target) || panel?.contains(e.target)) return;
      }
      if (openMenu === "resources") {
        const trigger = resourcesTriggerRef.current;
        const panel = resourcesPanelRef.current;
        if (trigger?.contains(e.target) || panel?.contains(e.target)) return;
      }
      setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  // measure header height so the panel can align perfectly
  useEffect(() => {
    function measure() {
      const h = headerRef.current?.offsetHeight;
      if (h) setNavHeight(h);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b border-neutral-200 print:hidden",
          scrolled
            ? "backdrop-blur-md bg-white/95 h-[84px]"
            : "bg-white/80 h-[84px]"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between h-[84px]">
            {/* LEFT - Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo_mark_removebg.png"
                alt={SITE_NAME}
                width={48}
                height={48}
                className="object-contain w-12 h-12"
              />
              <span className="text-lg font-medium">{SITE_NAME}</span>
            </Link>

            {/* CENTER - Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key={item.href} className="relative" ref={servicesTriggerRef}>
                      <button
                        type="button"
                        onClick={() => setOpenMenu((m) => (m === "services" ? null : "services"))}
                        className="flex items-center gap-3 text-[15px] text-neutral-700 hover:text-black transition"
                        aria-expanded={openMenu === "services"}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        {item.arrow && (
                          <span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">
                            ↘
                          </span>
                        )}
                      </button>
                    </div>
                  );
                }

                if (item.label === "Resources") {
                  return (
                    <div key={item.href} className="relative" ref={resourcesTriggerRef}>
                      <button
                        type="button"
                        onClick={() => setOpenMenu((m) => (m === "resources" ? null : "resources"))}
                        className="flex items-center gap-3 text-[15px] text-neutral-700 hover:text-black transition"
                        aria-expanded={openMenu === "resources"}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        {item.arrow && (
                          <span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">
                            ↘
                          </span>
                        )}
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 text-[15px] text-neutral-700 hover:text-black transition"
                  >
                    <span>{item.label}</span>
                    {item.meta && <span className="text-sm text-neutral-400">{item.meta}</span>}
                    {item.arrow && (
                      <span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">
                        ↘
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT - CTA */}
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="md">
                Book a Call
              </Button>
            </div>

            {/* MOBILE - Hamburger (ref: dark circle, white icon, shadow) */}
            <div className="lg:hidden flex items-center gap-2 shadow-2xl">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-xl"
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                <Icon icon="mdi:menu" className="w-5 h-5" aria-hidden />
              </button>
            </div>
          </div>
        </Container>
        {/* Mobile slide-down menu — full height, ref style */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed left-0 right-0 w-full bg-white border-t border-neutral-200 z-40 flex flex-col overflow-hidden"
              style={{ top: navHeight, height: `calc(100vh - ${navHeight}px)` }}
            >
              {/* Top: nav links + CTA */}
              <div className="flex-shrink-0 px-6 pt-8 pb-6">
                <nav className="space-y-1">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between py-2 text-2xl font-semibold text-neutral-900 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="pt-6">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-[60%] -ml-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Call
                  </Button>
                </div>
              </div>

              {/* Bottom: gradient + pricing-style image */}
              <div className="flex-1 min-h-[200px] relative flex flex-col justify-end">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none z-10"
                />
                <div className="absolute inset-0">
                  <Image
                    src="/images/navbar_services.png"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                    sizes="100vw"
                    priority={false}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Fullscreen services panel */}
      <AnimatePresence>
        {openMenu === "services" && (
          <motion.div
            ref={servicesPanelRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 w-full h-[calc(100vh-75px)] bg-white border-t border-neutral-200 z-40"
            style={{ top: navHeight }}
          >
            <div className="backdrop-blur-sm/0" />
            <Container size="wide" className="h-full !w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 grid-rows-3 gap-2 py-4 pb-8 h-full">
                {/* Left: cards area occupying first 3 columns and all rows */}
                <div className="col-span-1 md:col-span-3 lg:col-span-3 row-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
                    {SERVICES_MENU.map((group) => (
                      <ServiceCard
                        key={group.title}
                        title={group.title}
                        description={group.desc}
                        tags={group.tags}
                        icon={group.icon}
                        iconState={group.iconState}
                        href={`/services/${slugify(group.title)}`}
                        questionnairePath={group.questionnairePath}
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Right: promotional banner column spanning all rows */}
                <div className="col-span-1 row-span-3 flex items-center">
                  <div className="relative w-full h-full rounded-md overflow-hidden border border-neutral-200">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,241,239,1) 40%, rgba(255,240,233,1) 100%)",
                      }}
                    />

                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <Image
                            src="/images/ws_logo.png"
                            alt="WebFudge"
                            width={56}
                            height={56}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm text-neutral-500">WEBFUDGE SYSTEMS</p>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mt-2">
                          Our Software Products
                        </h3>
                        <p className="text-sm text-neutral-600 mt-3 max-w-xs">
                          Expertly crafted digital products for ambitious businesses; SaaS, web, and mobile engineered by Webfudge Systems.
                        </p>
                        <div className="pt-6">
                          <Button href="/contact" variant="primary" size="md">
                            Get a Quote
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                      <div className="relative w-full h-full">
                        <Image
                          src="/images/navbar_services.png"
                          alt="Software services"
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resources mega dropdown (click) */}
      <AnimatePresence>
        {openMenu === "resources" && (
          <ResourcesDropdown ref={resourcesPanelRef} style={{ top: navHeight }} />
        )}
      </AnimatePresence>
    </>
  );
}
