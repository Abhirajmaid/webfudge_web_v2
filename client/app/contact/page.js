import PageHeaderDark from "@/components/layout/PageHeaderDark";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMapSection from "@/components/sections/contact/MapSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Webfudge | Start Your Project",
  description:
    "Contact Webfudge for web design, development, branding, and growth support. Share your goals and get a quick response.",
  path: "/contact",
  keywords: ["contact webfudge", "hire web design agency", "project inquiry"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeaderDark
        titleLine1="Let's start a"
        titleLine2="conversation"
        tagline="We'd love to hear about your project. Fill out the form below and we'll get back to you within one business day."
      />
      <ContactForm />
      {/* <ContactMapSection /> */}
    </>
  );
}
