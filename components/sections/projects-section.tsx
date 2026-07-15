"use client";

import Image from "next/image";
import { Code, ExternalLink, Eye } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#000031] to-[#00002c] text-white">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          <Code className="inline-block mr-3 h-10 w-10 text-yellow-300" aria-hidden />
          Projects <span className="text-yellow-300">Made</span>
        </h2>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <div
              key={project.slug}
              className="relative h-[320px] w-full rounded-xl overflow-hidden shadow-2xl group border border-white/5 bg-[#171121]"
            >
              {/* Project Image Area */}
              <div className="relative w-full h-full p-12 pb-20 flex items-center justify-center bg-[#171121] transition duration-500 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={`${project.title} logo`}
                  width={200}
                  height={200}
                  className="object-contain max-h-[140px] w-auto max-w-full"
                />
              </div>

              {/* Jigar-style Slide-Up Overlay Content */}
              <div className="absolute top-[85%] left-0 w-full h-full bg-white transition-all duration-300 ease-in-out flex flex-col group-hover:top-[22%]">
                {/* Yellow header bar */}
                <div className="h-[48px] min-h-[48px] w-full bg-[#ffd900] px-4 flex justify-between items-center text-zinc-950 font-poppins font-bold text-base">
                  <h3 className="line-clamp-1 pr-2">{project.title}</h3>
                  <span className="text-xs uppercase tracking-wider bg-black/10 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>

                {/* Description & Buttons area */}
                <div className="p-4 flex flex-col justify-between flex-grow text-zinc-800 font-nunito">
                  <div>
                    <p className="text-sm leading-6 text-zinc-600 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[11px] font-bold bg-[#e5ecfb] text-[#2506ad] px-2 py-0.5 rounded-full font-poppins">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded bg-zinc-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-[#2506ad] font-poppins"
                      >
                        {link.label.toLowerCase().includes("code") || link.label.toLowerCase().includes("git") ? (
                          <Code className="h-3.5 w-3.5" />
                        ) : (
                          <Eye className="h-3.5 w-3.5" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
