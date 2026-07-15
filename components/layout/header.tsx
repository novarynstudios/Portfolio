"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Mail, MessageSquare, Instagram, Twitter } from "lucide-react";
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

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-content bg-[#0a0a0f]/80 backdrop-blur-md border border-[#ffffff12] h-16 rounded-full flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold text-[#e2e2f0] flex items-center gap-2 hover:text-white transition-all font-poppins shrink-0"
          aria-label="Farid Rahman home"
        >
          <Image src="/branding/favicon.webp" alt="Farid Rahman Logo" width={24} height={24} className="h-6 w-6 object-contain" />
          <span className="bg-gradient-to-r from-white to-[#06b6d4] bg-clip-text text-transparent hidden sm:inline">Farid Rahman</span>
        </a>

        {/* Desktop Navigation & Socials */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#8882a4] hover:text-[#e2e2f0] border-b-2 border-transparent hover:border-[#7c3aed] py-1 text-sm font-bold tracking-wide transition-all font-poppins"
              >
                {item.label}
              </a>
            ))}
            
            {/* Contact Highlighted Button */}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] px-5 py-2.5 text-xs font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition duration-200 font-poppins"
            >
              Contact
            </a>
          </nav>

          {/* Socials Divider & Icons */}
          <div className="flex items-center gap-3.5 border-l border-[#ffffff12] pl-6 ml-1">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("GitHub coming soon!"); }}
              aria-label="GitHub"
              className="text-[#8882a4] hover:text-white transition-colors cursor-pointer"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:contact@faridrahman.xyz"
              aria-label="Email"
              className="text-[#8882a4] hover:text-white transition-colors"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://discord.com/users/1142848103649660958"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="text-[#8882a4] hover:text-white transition-colors"
            >
              <MessageSquare className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://instagram.com/faridrahman133"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[#8882a4] hover:text-white transition-colors"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Twitter coming soon!"); }}
              aria-label="Twitter"
              className="text-[#8882a4] hover:text-white transition-colors cursor-pointer"
            >
              <Twitter className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNavigation />
      </Container>
    </header>
  );
}
