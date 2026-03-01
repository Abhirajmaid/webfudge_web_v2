import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME} — how we collect, use, and protect your personal information.`,
};

const lastUpdated = "March 1, 2025";

export default function PrivacyPolicyPage() {
  return (
    <Section variant="default" className="py-20 lg:py-28">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-neutral-500 text-sm">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 space-y-10 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal data you provide:</strong> Name, email address, phone number, company name, and message content when you contact us or submit forms.
              </li>
              <li>
                <strong>Usage data:</strong> IP address, browser type, device information, pages visited, and referring URLs.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> We use cookies and similar tools to improve site functionality and analyze traffic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to respond to inquiries, deliver services, improve our website and services, send relevant communications (with your consent), and comply with legal obligations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We may share your information with trusted service providers who assist us in operating our website and business (e.g., hosting, analytics, email delivery), subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is 100% secure; we strive to use commercially acceptable means to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              6. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data, or to object to processing and to data portability. To exercise these rights or ask questions about our practices, please contact us using the details provided on our Contact page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              7. Cookies
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance your experience, remember preferences, and analyze usage. You can control cookie settings through your browser. Disabling certain cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us via our{" "}
              <a href="/contact" className="text-primary underline hover:no-underline">
                Contact
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
