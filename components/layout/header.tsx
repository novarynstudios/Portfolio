"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, MessageSquare } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-content bg-[#0a0a0f]/80 backdrop-blur-md border border-[#ffffff12] h-16 rounded-full flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold text-[#e2e2f0] flex items-center gap-2 hover:text-white transition-all font-poppins"
          aria-label="Farid Rahman home"
        >
          <Image src="/branding/favicon.webp" alt="Farid Rahman Logo" width={24} height={24} className="h-6 w-6 object-contain" />
          <span className="bg-gradient-to-r from-white to-[#06b6d4] bg-clip-text text-transparent">Farid Rahman</span>
        </a>

        {/* Desktop Navigation & Socials */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6" aria-label="Primary navigation">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#8882a4] hover:text-[#e2e2f0] border-b-2 border-transparent hover:border-[#7c3aed] py-1 text-sm font-bold tracking-wide transition-all font-poppins"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 border-l border-[#ffffff12] pl-6 ml-2">
            <a
              href="https://github.com/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#8882a4] hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com/users/faridrahman1843"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="text-[#8882a4] hover:text-white transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNavigation />
      </Container>
    </header>
  );
}
