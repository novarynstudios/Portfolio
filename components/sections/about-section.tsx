"use client";

import Image from "next/image";
import { User, ChevronRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white text-zinc-950">
      <Container>
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          <User className="inline-block mr-3 h-10 w-10 text-[#4a00e0]" aria-hidden />
          About <span className="text-[#a855f7]">Me</span>
        </h2>
        
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1.9fr] items-center">
          <div className="flex justify-center">
            <div className="relative group overflow-hidden rounded-xl shadow-2xl transition duration-300 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
              <Image
                src={portfolio.hero.profileImage}
                alt="Profile picture of Farid Rahman"
                width={360}
                height={360}
                className="object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500 rounded-xl"
              />
            </div>
          </div>
          
          <div className="font-nunito">
            <h3 className="text-3xl font-extrabold text-zinc-800 font-poppins">
              I'm {portfolio.person.name}
            </h3>
            <p className="mt-2 text-lg font-bold text-[#4a00e0] font-poppins">
              {portfolio.person.role}
            </p>
            
            <p className="mt-6 text-base leading-8 text-zinc-600">
              I am a Minecraft plugin developer and full-stack web developer based in {portfolio.person.location}.
              I build plugins, dashboards, documentation, licensing systems, and reliable infrastructure for communities 
              that need their tools to feel fast, reliable, and easy to run.
            </p>
            
            <div className="mt-8 border-t border-zinc-100 pt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-[#f7f7f7] rounded-lg p-5 border border-zinc-100 shadow-sm">
                <p className="text-sm font-semibold text-zinc-500 font-poppins">Email</p>
                <p className="mt-1 text-base font-bold text-zinc-800 break-all select-all">{portfolio.person.email}</p>
              </div>
              <div className="bg-[#f7f7f7] rounded-lg p-5 border border-zinc-100 shadow-sm">
                <p className="text-sm font-semibold text-zinc-500 font-poppins">Location</p>
                <p className="mt-1 text-base font-bold text-zinc-800">{portfolio.person.location}</p>
              </div>
            </div>
            
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2506ad] px-8 py-4 text-base font-bold text-white shadow-[0_5px_15px_rgba(37,6,173,0.4)] transition hover:bg-[#1a047e] font-poppins"
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
