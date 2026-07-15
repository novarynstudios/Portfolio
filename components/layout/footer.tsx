"use client";

import { Heart, Mail, MapPin, ChevronRight, Github, Twitter, MessageSquare } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#14141f] py-16 text-[#e2e2f0] border-t border-[#ffffff12] font-poppins">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Column 1: Intro */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold text-white bg-gradient-to-r from-white to-[#06b6d4] bg-clip-text text-transparent">Farid's Portfolio</h3>
          <p className="mt-4 text-sm leading-7 text-[#8882a4] font-nunito font-semibold max-w-sm">
            Thank you for visiting my personal portfolio website. Connect with me over socials or email.
            <br />
            <br />
            Keep Rising 🚀. Let's build something awesome together!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold font-nunito text-[#8882a4]">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 hover:text-[#06b6d4] transition-colors"
              >
                <ChevronRight className="h-4 w-4 text-[#7c3aed] shrink-0" />
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Contact info & socials */}
        <div>
          <h3 className="text-xl font-bold text-white mb-5">Contact Info</h3>
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c1c2e] border border-[#ffffff12] text-[#8882a4] transition hover:bg-[#7c3aed] hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://discord.com/users/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c1c2e] border border-[#ffffff12] text-[#8882a4] transition hover:bg-[#5865F2] hover:text-white"
            >
              <MessageSquare className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c1c2e] border border-[#ffffff12] text-[#8882a4] transition hover:bg-[#1DA1F2] hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>

      {/* Credit row */}
      <div className="mt-12 pt-8 border-t border-[#ffffff12] text-center text-sm font-semibold text-[#8882a4] font-nunito">
        <Container className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <span>© {year} {portfolio.person.name}. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
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
