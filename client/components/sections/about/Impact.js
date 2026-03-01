import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const IMPACT_STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "98", label: "Avg. Lighthouse Score" },
  { value: "4.9★", label: "Client Satisfaction" },
];

export default function AboutImpact() {
  return (
    <Section variant="gradient" className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center min-w-[140px]"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-white/70 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
