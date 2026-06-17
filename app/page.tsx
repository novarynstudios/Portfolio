import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AffiliationsSection } from "@/components/sections/affiliations-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AffiliationsSection />
      <TechnologiesSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
