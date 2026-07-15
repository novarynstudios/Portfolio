import { getPortfolioData } from "@/lib/sanity";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AffiliationsSection } from "@/components/sections/affiliations-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main>
      <HeroSection data={data} />
      <AboutSection data={data} />
      <SkillsSection data={data} />
      <ExperienceSection data={data} />
      <AffiliationsSection data={data} />
      <ProjectsSection data={data} />
      <ServicesSection data={data} />
      <TestimonialsSection data={data} />
      <ContactSection data={data} />
    </main>
  );
}
