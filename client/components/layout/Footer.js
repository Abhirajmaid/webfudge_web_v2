import Link from "next/link";
import Image from "next/image";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { SITE_NAME, SERVICES_MENU } from "@/lib/constants";

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
