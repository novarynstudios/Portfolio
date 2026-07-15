"use client";

import Image from "next/image";
import { ArrowDown, Github, Mail, Twitter, MessageSquare } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { TypingText } from "@/components/ui/typing-text";

export function HeroSection() {
  const typingStrings = [
    "Minecraft Plugin Development",
    "Full-Stack Web Development",
    "Practice Server Integrations",
    "Licensing Systems",
    "Deployment & Infrastructure"
  ] as const;

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0a0a0f] text-[#e2e2f0] overflow-hidden pt-20">
      <ParticlesBackground />
      
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(124,58,237,0.22)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10 grid gap-12 lg:grid-cols-2 items-center w-full">
        <div className="flex flex-col items-start text-left">
          <p className="text-[#8882a4] uppercase tracking-[0.15em] text-sm font-semibold mb-3 font-poppins">
            Hello, I'm
          </p>
          <h2 className="font-poppins text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-white to-[#06b6d4] bg-clip-text text-transparent">
              {portfolio.person.name}
            </span>
          </h2>
          
          <p className="mt-4 font-poppins text-2xl sm:text-3xl font-semibold text-[#8882a4]">
            i am into <TypingText strings={typingStrings} />
          </p>
          
          <p className="mt-6 text-base text-[#8882a4] max-w-lg leading-7 font-nunito">
            {portfolio.hero.intro}
          </p>
          
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition hover:shadow-[0_0_32px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 duration-300 font-poppins group"
          >
            About Me
            <ArrowDown className="h-5 w-5 transition duration-300 group-hover:translate-y-1" />
          </a>
          
          <div className="mt-16">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="https://github.com/faridrahman1843"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#7c3aed] hover:text-white hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/users/faridrahman1843"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#5865F2] hover:text-white hover:scale-110"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/faridrahman1843"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@novarynstudios.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#ea4335] hover:text-white hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 overflow-hidden rounded-full border-3 border-[#7c3aed] shadow-[0_0_40px_rgba(124,58,237,0.25)] transition duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(124,58,237,0.45)]">
            <Image
              src={portfolio.hero.profileImage}
              alt={`Profile picture of ${portfolio.person.name}`}
              fill
              priority
              sizes="(max-width: 640px) 288px, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
