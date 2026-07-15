"use client";

import { Briefcase } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

const STATIC_EXPERIENCES = [
  {
    title: "Novaryn Studios - Founder & Developer",
    desc: "I build and maintain Novaryn's plugin ecosystem, documentation, licensing flows, and production-ready tooling for Minecraft server owners.",
    date: "Oct 2021 - Present",
    type: "left"
  },
  {
    title: "Practice Network Systems",
    desc: "I work on queue displays, duels, stats, menus, PlaceholderAPI integrations, and the details that make competitive practice servers easier to run.",
    date: "June 2021 - Dec 2021",
    type: "right"
  },
  {
    title: "Web Platforms & Infrastructure",
    desc: "I create dashboards, documentation sites, Linux/Nginx deployments, database-backed services, and backend workflows for product operations.",
    date: "May 2021 - June 2021",
    type: "left"
  },
  {
    title: "Plugin Licensing Infrastructure",
    desc: "Designed licensing validation, Discord workflow concepts, admin dashboards, and deployment paths for private Minecraft product distribution.",
    date: "April 2021 - May 2021",
    type: "right"
  },
  {
    title: "Documentation and Product Websites",
    desc: "Built responsive documentation and product web experiences with clear setup steps, support-friendly pages, and CMS-ready content structure.",
    date: "April 2021 - April 2021",
    type: "left"
  },
  {
    title: "Multi-Region Server Routing",
    desc: "Explored Velocity and Redis-backed routing concepts for Bangladesh, Singapore, and North America server regions.",
    date: "March 2021 - April 2021",
    type: "right"
  }
];

export function ExperienceSection({ data }: { data?: any }) {
  const experiences = data?.experience || STATIC_EXPERIENCES;

  return (
    <section id="experience" className="py-24 bg-[#0a0a0f] text-[#e2e2f0] overflow-hidden">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl flex items-center justify-center gap-3">
          <Briefcase className="h-10 w-10 text-[#7c3aed]" aria-hidden />
          Experience
        </h2>
        
        {/* Timeline container */}
        <div className="relative mt-16 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Centered line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7c3aed] to-transparent -translate-x-1/2 z-0" />

          <div className="space-y-12">
            {experiences.map((exp: any, idx: number) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  exp.type === "left" ? "md:flex-row-reverse" : ""
                } justify-between z-10`}
              >
                {/* Node icon */}
                <div className="absolute left-8 md:left-1/2 h-5 w-5 rounded-full border-2 border-[#0a0a0f] bg-[#7c3aed] shadow-[0_0_10px_rgba(124,58,237,0.5)] -translate-x-1/2 top-4" />

                {/* Card Container */}
                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${exp.type === "left" ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="relative bg-[#14141f] border border-[#ffffff12] hover:border-[#7c3aed] text-white rounded-xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                    <span className="inline-block text-xs font-bold text-[#7c3aed] mb-3 uppercase tracking-wider font-poppins">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-extrabold font-poppins tracking-tight text-white">
                      {exp.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#8882a4] font-nunito font-semibold text-justify">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                {/* Empty column for alignment */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
