"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolio, type Project } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectDialog } from "@/components/ui/project-dialog";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const marqueeProjects = [...portfolio.projects, ...portfolio.projects];

  return (
    <section id="projects" className="py-24">
      <Container className="overflow-hidden">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Selected Builds" title="A moving shelf of plugins and platforms." description="Each card opens a detail view. The shelf keeps moving, but the actual work stays organized by purpose and stack." />
          <p className="text-sm font-medium text-muted">Continuous project shelf</p>
        </div>
        <div className="relative mt-10 -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
          <div className="work-marquee gap-4 px-4 sm:px-6 lg:px-8">
            {marqueeProjects.map((project, index) => (
              <ProjectMarqueeCard
                key={`${project.slug}-${index}`}
                project={project}
                duplicate={index >= portfolio.projects.length}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </Container>
      <ProjectDialog project={activeProject} open={Boolean(activeProject)} onOpenChange={(open) => !open && setActiveProject(null)} />
    </section>
  );
}

function ProjectMarqueeCard({ project, duplicate, onOpen }: { project: Project; duplicate: boolean; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      tabIndex={duplicate ? -1 : 0}
      aria-hidden={duplicate}
      className="group flex h-full w-[min(86vw,25rem)] shrink-0 flex-col overflow-hidden rounded-md border border-primary/25 bg-[#110d1a] text-left transition hover:-translate-y-1 hover:border-primary-bright hover:bg-[#1b1328] sm:w-[24rem]"
    >
      <span className="relative grid aspect-square place-items-center overflow-hidden bg-[#171121] p-8">
        <Image src={project.image} alt={`${project.title} artwork`} fill sizes="(max-width: 640px) 86vw, 384px" className="object-contain p-6 transition duration-500 group-hover:scale-105" />
      </span>
      <span className="flex flex-1 flex-col border-t border-white/10 p-5">
        <span className="text-xl font-bold text-white">{project.title}</span>
        <span className="mt-3 text-sm leading-6 text-muted">{project.summary}</span>
        <span className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary-bright">
              {tag}
            </span>
          ))}
        </span>
        <span className="mt-auto pt-5 text-sm font-bold text-primary-bright">Open project</span>
      </span>
    </button>
  );
}
