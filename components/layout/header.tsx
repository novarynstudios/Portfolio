"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-40 bg-white shadow-md border-b border-zinc-200 h-16 flex items-center transition-all duration-300">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold text-[#0e2431] flex items-center gap-2 hover:text-[#fc8c05] transition-colors font-poppins"
          aria-label="Farid Rahman home"
        >
          <Terminal className="h-6 w-6 text-[#2506ad]" />
          <span>Farid</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#0e2431] hover:text-[#011aff] border-b-2 border-transparent hover:border-[#011aff] py-1 text-sm font-bold tracking-wide transition-all font-poppins"
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
