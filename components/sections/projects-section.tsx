"use client";

import Image from "next/image";
import { Code, Eye } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

export function ProjectsSection({ data }: { data?: any }) {
  const projectsList = data?.projects || portfolio.projects;

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] text-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl flex items-center justify-center gap-3">
            <Code className="h-10 w-10 text-[#7c3aed]" aria-hidden />
            Projects <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">Made</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsList.map((project: any) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative h-[320px] w-full rounded-xl overflow-hidden shadow-2xl group border border-[#ffffff12] bg-[#14141f]"
            >
              {/* Project Image Area */}
              <div className="relative w-full h-full p-12 pb-20 flex items-center justify-center bg-[#14141f] transition duration-500 group-hover:scale-105">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    width={200}
                    height={200}
                    className="object-contain max-h-[140px] w-auto max-w-full"
                  />
                ) : (
                  <div className="text-white/20 font-bold font-poppins">{project.title}</div>
                )}
              </div>

              {/* Jigar-style Slide-Up Overlay Content */}
              <div className="absolute top-[85%] left-0 w-full h-full bg-[#1c1c2e] transition-all duration-300 ease-in-out flex flex-col group-hover:top-[22%]">
                {/* Header bar */}
                <div className="h-[48px] min-h-[48px] w-full bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] px-4 flex justify-between items-center text-white font-poppins font-bold text-base">
                  <h3 className="line-clamp-1 pr-2">{project.title}</h3>
                  <span className="text-xs uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>

                {/* Description & Buttons area */}
                <div className="p-4 flex flex-col justify-between flex-grow text-[#e2e2f0] font-nunito">
                  <div>
                    <p className="text-sm leading-6 text-[#8882a4] line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="text-[11px] font-bold bg-[#14141f] text-[#06b6d4] border border-[#ffffff12] px-2 py-0.5 rounded-full font-poppins">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {project.links.map((link: any) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded border border-[#ffffff12] bg-[#14141f] px-3 py-2 text-xs font-bold text-[#e2e2f0] transition hover:bg-[#7c3aed] hover:border-transparent hover:text-white font-poppins"
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
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
