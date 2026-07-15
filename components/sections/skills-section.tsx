"use client";

import Image from "next/image";
import { Laptop } from "lucide-react";
import { Container } from "@/components/ui/container";

const SKILLS = [
  { name: "Java", image: "/technologies/java.svg" },
  { name: "TypeScript", image: "/technologies/typescript.svg" },
  { name: "JavaScript", image: "/technologies/javascript.svg" },
  { name: "Python", image: "/technologies/python.svg" },
  { name: "SQL", image: "/technologies/sql.svg" },
  { name: "HTML", image: "/technologies/html.svg" },
  { name: "CSS", image: "/technologies/css.svg" },
  { name: "Next.js", image: "/technologies/nextjs.svg" },
  { name: "Paper API", image: "/technologies/paper.svg" },
  { name: "Velocity API", image: "/technologies/velocity.svg" },
  { name: "Redis", image: "/technologies/redis.svg" },
  { name: "PostgreSQL", image: "/technologies/postgresql.svg" },
  { name: "Docker", image: "/technologies/docker.svg" },
  { name: "Nginx", image: "/technologies/nginx.svg" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#57059e] to-[#4a00e0] text-white">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          <Laptop className="inline-block mr-3 h-10 w-10 text-yellow-300" aria-hidden />
          Skills & <span className="text-yellow-300">Abilities</span>
        </h2>
        
        <div className="mt-16 mx-auto max-w-6xl rounded-2xl bg-[rgba(0,0,22,0.35)] p-6 md:p-10 border border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="bg-[rgba(0,0,22,0.85)] hover:bg-black/90 rounded-xl p-5 border border-white/10 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,2,68,0.7)] group"
              >
                <div className="relative h-14 w-14 transition duration-300 group-hover:scale-110">
                  <Image
                    src={skill.image}
                    alt={`${skill.name} icon`}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <span className="font-poppins text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
