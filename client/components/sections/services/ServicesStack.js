import ServicesStackBase from "@/components/sections/home/ServicesStack";

export default function ServicesStack() {
  return (
    <ServicesStackBase
      titleTag="h1"
      heading={
        <>
          Digital services to build
          <br />
          <span className="font-serif italic font-normal">strong brands</span>
        </>
      }
      description="Explore Webfudge services: branding, web design, website development, e-commerce, and performance-focused growth support."
    />
  );
}
