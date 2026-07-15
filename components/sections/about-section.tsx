"use client";

import Image from "next/image";
import { User, ChevronRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function AboutSection({ data }: { data?: any }) {
  const person = {
    name: data?.person?.name || portfolio.person.name,
    role: data?.person?.role || portfolio.person.role,
    email: data?.person?.email || portfolio.person.email,
    location: data?.person?.location || portfolio.person.location,
  };
  const hero = {
    intro: data?.hero?.intro || portfolio.hero.intro,
    profileImage: data?.hero?.profileImage || portfolio.hero.profileImage,
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] text-[#e2e2f0]">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl flex items-center justify-center gap-3">
          <User className="h-10 w-10 text-[#7c3aed]" aria-hidden />
          About <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1.9fr] items-center">
          <div className="flex justify-center">
            <div className="relative group overflow-hidden rounded-xl border border-[#ffffff12] shadow-[0_0_60px_rgba(124,58,237,0.12)] transition duration-500 hover:shadow-[0_0_80px_rgba(124,58,237,0.25)]">
              <Image
                src={hero.profileImage}
                alt={`Profile picture of ${person.name}`}
                width={360}
                height={360}
                className="object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500 rounded-xl"
              />
            </div>
          </div>
          
          <div className="font-nunito">
            <h3 className="text-3xl font-extrabold text-white font-poppins">
              I'm {person.name}
            </h3>
            <p className="mt-2 text-lg font-bold text-[#06b6d4] font-poppins">
              {person.role}
            </p>
            
            <p className="mt-6 text-base leading-8 text-[#8882a4]">
              I am a Minecraft plugin developer and full-stack web developer based in {person.location}.
              I build plugins, dashboards, documentation, licensing systems, and reliable infrastructure for communities 
              that need their tools to feel fast, reliable, and easy to run.
            </p>
            
            <div className="mt-8 border-t border-[#ffffff12] pt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-[#14141f] rounded-lg p-5 border border-[#ffffff12] shadow-sm">
                <p className="text-sm font-semibold text-[#8882a4] font-poppins">Email</p>
                <p className="mt-1 text-base font-bold text-white break-all select-all">{person.email}</p>
              </div>
              <div className="bg-[#14141f] rounded-lg p-5 border border-[#ffffff12] shadow-sm">
                <p className="text-sm font-semibold text-[#8882a4] font-poppins">Location</p>
                <p className="mt-1 text-base font-bold text-white">{person.location}</p>
              </div>
            </div>
            
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition hover:shadow-[0_0_32px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 duration-300 font-poppins"
              >
                Get In Touch
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
