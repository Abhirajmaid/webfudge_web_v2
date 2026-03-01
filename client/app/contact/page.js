import PageHeaderDark from "@/components/layout/PageHeaderDark";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMapSection from "@/components/sections/contact/MapSection";

export const metadata = {
  title: "Contact",
  description:
    "Start your project with WebFudge. Get in touch for a free discovery call and let's build something great together.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeaderDark
        titleLine1="Let's start a"
        titleLine2="conversation"
        tagline="We'd love to hear about your project. Fill out the form below and we'll get back to you within one business day."
        ctaText="Get in Touch"
        ctaHref="#contact"
      />
      <ContactForm />
      {/* <ContactMapSection /> */}
    </>
  );
}
