"use client";

import { Briefcase } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function ExperienceSection() {
  const experiences = [
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
  ] as const;

  return (
    <section id="experience" className="py-24 bg-[#f7f7f7] text-zinc-900 overflow-hidden">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          <Briefcase className="inline-block mr-3 h-10 w-10 text-[#4a00e0]" aria-hidden />
          Experience
        </h2>
        
        {/* Timeline container */}
        <div className="relative mt-16 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Centered line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#020133] -translate-x-1/2 z-0" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  exp.type === "left" ? "md:flex-row-reverse" : ""
                } justify-between z-10`}
              >
                {/* Node icon */}
                <div className="absolute left-8 md:left-1/2 h-8 w-8 rounded-full border-4 border-[#ff9f55] bg-white flex items-center justify-center -translate-x-1/2 top-1.5 shadow-md">
                  <Briefcase className="h-3 w-3 text-[#02094b]" />
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${exp.type === "left" ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="relative bg-[#f68c09] hover:bg-[#e67c00] text-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] group">
                    {/* Arrow */}
                    <div
                      className={`hidden md:block absolute top-4 w-0 h-0 border-y-[10px] border-y-transparent ${
                        exp.type === "left"
                          ? "right-[-10px] border-l-[10px] border-l-[#f68c09] group-hover:border-l-[#e67c00]"
                          : "left-[-10px] border-r-[10px] border-r-[#f68c09] group-hover:border-r-[#e67c00]"
                      }`}
                    />
                    
                    <span className="inline-block text-xs font-bold bg-black/15 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider font-poppins">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-extrabold font-poppins tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-100 font-nunito font-semibold text-justify">
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
