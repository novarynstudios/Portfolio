"use client";

import Image from "next/image";
import { Laptop } from "lucide-react";
import { Container } from "@/components/ui/container";

const STATIC_SKILLS = [
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

export function SkillsSection({ data }: { data?: any }) {
  const skillsList = data?.skills || STATIC_SKILLS;

  return (
    <section id="skills" className="py-24 bg-[#0f0f1a] text-white">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl flex items-center justify-center gap-3">
          <Laptop className="h-10 w-10 text-[#06b6d4]" aria-hidden />
          Skills & <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">Abilities</span>
        </h2>
        
        <div className="mt-16 mx-auto max-w-6xl rounded-2xl bg-[#14141f] p-6 md:p-10 border border-[#ffffff12]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skillsList.map((skill: any) => (
              <div
                key={skill.name}
                className="bg-[#1c1c2e] hover:bg-[#14141f] rounded-xl p-5 border border-[#ffffff12] flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:scale-105 hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] group"
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
                <span className="font-poppins text-sm font-semibold tracking-wide text-[#8882a4] group-hover:text-white">
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
