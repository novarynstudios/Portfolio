"use client";

import { Heart, Mail, MapPin, ChevronRight, Github, Twitter, MessageSquare, ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0d0d16] text-[#e2e2f0] border-t border-[#ffffff12] font-poppins overflow-hidden pt-12">
      {/* Footer Top CTA Card */}
      <Container className="mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] p-8 md:p-12 shadow-2xl text-center z-10 group">
          <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-transparent" />
          <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to take your server or project to the next level?
            </h3>
            <p className="mt-4 text-white/80 font-nunito font-semibold text-base sm:text-lg">
              Let's build optimized Minecraft systems and modern web interfaces together.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-extrabold text-[#7c3aed] shadow-lg transition duration-300 hover:scale-105 hover:bg-zinc-100 font-poppins"
            >
              Get a Quote / Let's Chat
            </a>
          </div>
        </div>
      </Container>

      {/* Grid */}
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {/* Column 1: Bio */}
        <div className="flex flex-col items-start">
          <h4 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <span className="bg-gradient-to-r from-white to-[#06b6d4] bg-clip-text text-transparent">Farid Rahman</span>
          </h4>
          <p className="mt-4 text-sm leading-7 text-[#8882a4] font-nunito font-semibold max-w-sm">
            Thank you for visiting my personal portfolio website. Connect with me over socials or email to discuss plugins, systems, and deployment.
            <br />
            <br />
            Keep Rising 🚀
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-5 font-poppins tracking-wide">Quick Links</h4>
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold font-nunito text-[#8882a4]">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 hover:text-[#06b6d4] transition-all duration-200 group"
              >
                <ChevronRight className="h-4 w-4 text-[#7c3aed] transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-bold text-white mb-5 font-poppins tracking-wide">Contact Details</h4>
          <div className="space-y-4 text-sm font-semibold font-nunito text-[#8882a4]">
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#7c3aed] shrink-0" />
              <a href="mailto:hello@novarynstudios.com" className="hover:text-[#06b6d4] transition-colors">
                {portfolio.person.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#7c3aed] shrink-0" />
              <span>{portfolio.person.location}</span>
            </p>
          </div>
          
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#24292e] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com/users/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#5865F2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] hover:scale-105"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] text-[#8882a4] transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(29,161,242,0.3)] hover:scale-105"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>

      {/* Credit Row */}
      <div className="mt-16 py-8 border-t border-[#ffffff12] text-center text-sm font-semibold text-[#8882a4] font-nunito relative z-10">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span>© {year} {portfolio.person.name}. All rights reserved.</span>
          
          <button
            onClick={scrollToTop}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#14141f] border border-[#ffffff12] hover:border-[#7c3aed] text-[#8882a4] hover:text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(124,58,237,0.25)]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          
          <span className="flex items-center justify-center gap-1">
            Designed with
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" />
            by
            <a
              href="https://github.com/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              className="text-[#06b6d4] hover:underline"
            >
              {portfolio.person.name}
            </a>
          </span>
        </Container>
      </div>
    </footer>
  );
}
