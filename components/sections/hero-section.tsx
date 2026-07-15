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
    <section id="home" className="relative min-h-screen flex items-center bg-[#f7f7f7] text-[#002057] overflow-hidden pt-20">
      <ParticlesBackground />
      
      <Container className="relative z-10 grid gap-12 lg:grid-cols-2 items-center w-full">
        <div className="flex flex-col items-start text-left">
          <h2 className="font-poppins text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-[#002057]">
            Hi There,<br />
            I'm <span className="text-[#ff7b00]">{portfolio.person.name}</span>
          </h2>
          
          <p className="mt-4 font-poppins text-2xl sm:text-3xl font-semibold text-zinc-950">
            i am into <TypingText strings={typingStrings} />
          </p>
          
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2506ad] px-8 py-4 text-base font-bold text-white shadow-[0_5px_18px_rgba(48,68,247,0.4)] transition hover:bg-[#1a047e] font-poppins group"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09011b] text-[#00d9ff] transition-all duration-300 hover:bg-[#0e0e0e] hover:text-white hover:scale-110"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09011b] text-[#00d9ff] transition-all duration-300 hover:bg-[#5865F2] hover:text-white hover:scale-110"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09011b] text-[#00d9ff] transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@novarynstudios.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09011b] text-[#00d9ff] transition-all duration-300 hover:bg-[#ea4335] hover:text-white hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 overflow-hidden rounded-full border-4 border-white shadow-2xl transition duration-500 hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
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
