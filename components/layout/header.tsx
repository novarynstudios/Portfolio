"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { SocialLink } from "@/components/ui/social-link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition", scrolled && "border-b border-primary/20 bg-[#08070d]/80 backdrop-blur-md")}>
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="Farid Rahman home">
          <Image src="/branding/farid-wordmark.png" alt="Farid Rahman" width={312} height={40} priority className="h-10 w-auto max-w-[52vw] object-contain" />
        </a>
        <nav className="hidden rounded-full border border-primary/20 bg-white/[0.035] px-2 py-2 md:flex md:items-center md:gap-1" aria-label="Primary navigation">
          {portfolio.nav.map((item) =>
            item.label === "Projects" ? (
              <div key={item.href} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-muted transition hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
                  aria-haspopup="true"
                >
                  Projects
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
                <div className="invisible absolute right-0 top-full z-50 mt-4 w-72 rounded-md border border-primary/50 bg-[#17131f]/95 p-2 opacity-0 backdrop-blur-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {portfolio.projects.slice(0, 6).map((project) => (
                    <a key={project.slug} href="#projects" className="block rounded px-3 py-2 text-sm text-muted outline-none transition hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white">
                      <span className="font-semibold text-white">{project.title}</span>
                      <span className="mt-1 block line-clamp-1 text-xs text-muted">{project.summary}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-muted transition hover:bg-primary/20 hover:text-white">
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {portfolio.socials.slice(2, 3).map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}
