import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function ContactMapSection() {
  return (
    <Section variant="muted" className="py-12 lg:py-16">
      <Container>
        <div className="rounded-2xl bg-neutral-200 h-64 flex items-center justify-center border border-neutral-200 overflow-hidden">
          <div className="text-center text-neutral-500">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="text-sm font-medium">Remote-first studio</p>
            <p className="text-xs text-neutral-400 mt-1">Working globally, headquartered in New York</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
