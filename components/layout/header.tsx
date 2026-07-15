"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <header className="fixed inset-x-0 top-0 z-40 bg-[#0a0a0f]/85 backdrop-blur-md border-b border-[#ffffff12] h-16 flex items-center transition-all duration-300">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
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

        {/* Mobile Navigation Trigger */}
        <MobileNavigation />
      </Container>
    </header>
  );
}
