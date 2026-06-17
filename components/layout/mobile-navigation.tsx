"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/ui/social-link";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="icon" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-5 w-5" aria-hidden />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-dvh w-[min(22rem,92vw)] flex-col border-l border-white/10 bg-[#100b1b] p-5 shadow-2xl md:hidden">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-bold text-white">FR</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="icon" aria-label="Close navigation menu">
                <X className="h-5 w-5" aria-hidden />
              </Button>
            </Dialog.Close>
          </div>
          <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">Featured projects</p>
            <div className="mt-4 grid gap-2">
              {portfolio.projects.slice(0, 5).map((project) => (
                <a
                  key={project.slug}
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted hover:bg-white/10 hover:text-white"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-auto flex gap-3 pt-8">
            {portfolio.socials.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
