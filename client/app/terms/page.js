import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Terms and Conditions",
  description: `Terms and Conditions for using ${SITE_NAME} website and services.`,
};

const lastUpdated = "March 1, 2025";

export default function TermsPage() {
  return (
    <Section variant="default" className="py-20 lg:py-28">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-neutral-500 text-sm">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 space-y-10 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the {SITE_NAME} website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              2. Use of Our Website and Services
            </h2>
            <p>
              You may use our website and services only for lawful purposes and in accordance with these terms. You agree not to use the site in any way that could damage, disable, or impair the site or interfere with any other party&apos;s use of the site. You must not attempt to gain unauthorized access to any part of the site, other accounts, or any systems or networks connected to the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of {SITE_NAME} or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              4. Client Projects and Deliverables
            </h2>
            <p>
              Specific terms for design, development, and other project work will be set out in separate agreements or statements of work. Payment terms, scope, revisions, and ownership of deliverables will be agreed upon in writing before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. Your use of the site is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, {SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, or goodwill, arising from your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless {SITE_NAME}, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of or related to your use of the website or services or your violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              8. Links to Third-Party Sites
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of those sites. The inclusion of any link does not imply endorsement by {SITE_NAME}. You access third-party sites at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We may modify these Terms and Conditions at any time. We will post the updated terms on this page and update the &quot;Last updated&quot; date. Your continued use of the website after changes constitutes acceptance of the revised terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
              10. Governing Law and Contact
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which {SITE_NAME} operates, without regard to its conflict of law provisions. For any questions about these Terms and Conditions, please contact us via our{" "}
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
