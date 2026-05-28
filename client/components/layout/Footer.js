import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
  SITE_NAME,
  SERVICES_MENU,
  FOOTER_CONTACT_INFO,
  FOOTER_OFFICES,
} from "@/lib/constants";

// Services list — only main service titles for footer
const SERVICES = SERVICES_MENU.map((group) => group.title);

const QUICK_LINKS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/webfudge" },
  { label: "Instagram", href: "https://instagram.com/webfudge" },
  { label: "Pinterest", href: "https://pinterest.com/webfudge" },
  { label: "Dribbble", href: "https://dribbble.com/webfudge" },
  { label: "Behance", href: "https://behance.net/webfudge" },
];

const LinkItem = ({ href, children, external = false }) => {
  const className =
    "text-neutral-700 hover:text-black transition-colors text-sm";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="print:hidden">

      <Section variant="muted" className="pt-12 md:pt-20 !pb-8 md:!pb-10">
        <Container size="wide">
          {/* Contact + locations strip */}
          <div className="mb-14 border-t border-neutral-200 pt-8 md:pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
              <div className="lg:col-span-3">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <p className="text-sm md:text-md text-neutral-500">{FOOTER_CONTACT_INFO.emailLabel}</p>
                    <a
                      href={`mailto:${FOOTER_CONTACT_INFO.email}`}
                      className="mt-1.5 md:mt-2 inline-block text-lg sm:text-xl md:text-2xl font-medium text-neutral-900 hover:text-black transition-colors break-all sm:break-normal"
                    >
                      {FOOTER_CONTACT_INFO.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm md:text-md text-neutral-500">{FOOTER_CONTACT_INFO.phoneLabel}</p>
                    <a
                      href={FOOTER_CONTACT_INFO.phoneHref}
                      className="mt-1.5 md:mt-2 inline-flex items-center gap-2.5 sm:gap-3 text-lg sm:text-xl md:text-2xl font-medium text-neutral-900 hover:text-black transition-colors"
                    >
                      <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#DCF8E8]">
                        <Icon
                          icon="logos:whatsapp-icon"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          aria-hidden
                        />
                      </span>
                      <span className="break-all sm:break-normal">{FOOTER_CONTACT_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h4 className="text-left text-lg sm:text-xl md:text-[34px] leading-snug md:leading-tight font-medium text-neutral-900 text-balance max-w-prose lg:max-w-none">
                  Limited Liability Company Based In
                </h4>

                <div className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-3 border border-neutral-200 bg-white">
                  {FOOTER_OFFICES.map((office, index) => (
                    <div
                      key={office.country}
                      className={`flex items-center gap-3 sm:gap-4 px-4 py-3.5 sm:px-6 sm:py-5 md:p-7 ${
                        index !== FOOTER_OFFICES.length - 1
                          ? "border-b md:border-b-0 md:border-r border-neutral-200"
                          : ""
                      }`}
                    >
                      <Image
                        src={office.flag}
                        alt={`${office.country} flag`}
                        width={40}
                        height={28}
                        className="h-8 w-auto shrink-0 object-contain sm:h-10 md:h-12"
                      />
                      <p className="text-base sm:text-lg font-semibold tracking-wide text-neutral-900">
                        {office.country}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20 items-start">
            {/* Column 1 — Brand */}
            <div>
              <Link href="/" className="block w-14 h-14">
                <Image
                  src="/logo_mark_removebg.png"
                  alt={SITE_NAME}
                  width={56}
                  height={56}
                  className="object-contain w-14 h-14"
                />
              </Link>
              <h3 className="mt-4 md:mt-6 text-xl font-semibold">{SITE_NAME}</h3>
              <p className="mt-3 md:mt-4 text-neutral-600 max-w-xs leading-relaxed text-sm md:text-base">
                We design and build scalable digital products that support
                complex workflows and business-critical systems.
              </p>
              <div className="mt-4 md:mt-6">
                <Button href="/contact" variant="primary" size="md">
                  Company Deck
                </Button>
              </div>
            </div>

            {/* Column 2 — Services */}
            <div>
              <h4 className="font-serif italic text-xl md:text-2xl font-semibold mb-6 md:mb-12">Service</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-neutral-700 text-sm">
                {SERVICES.map((item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="font-medium hover:text-black transition-colors inline-block py-1.5 -my-1.5"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Quick Links */}
            <div className="lg:ml-16">
              <h4 className="font-serif italic text-xl md:text-2xl font-semibold mb-6 md:mb-12">Quick Links</h4>
              <ul className="space-y-1 text-neutral-700 text-sm">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <LinkItem href={link.href}>
                      <span className="inline-block py-2 font-medium hover:text-black transition-colors">{link.label}</span>
                    </LinkItem>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Follow Us */}
            <div>
              <h4 className="font-serif italic text-xl md:text-2xl font-semibold mb-6 md:mb-12">Follow Us</h4>
              <ul className="space-y-1 text-neutral-700 text-sm">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <LinkItem href={link.href} external>
                      <span className="inline-block py-2 font-medium hover:text-black transition-colors">{link.label}</span>
                    </LinkItem>
                  </li>
                ))}
              </ul>
            </div>
          </div>



          {/* Bottom row */}
          <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-neutral-200 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
            <p>© {year} {SITE_NAME}. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Link
                href="/privacy"
                className="text-neutral-500 hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <span>·</span>
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-black transition-colors"
              >
                Terms
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
