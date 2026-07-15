"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" className="md:hidden p-2 text-[#e2e2f0] hover:bg-white/5 rounded-lg" aria-label="Open navigation menu">
          <Menu className="h-6 w-6" aria-hidden />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-dvh w-[min(22rem,92vw)] flex-col border-l border-[#ffffff12] bg-[#0a0a0f] p-5 shadow-2xl md:hidden text-[#e2e2f0] font-poppins">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-extrabold bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">FR</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" className="p-2 text-[#e2e2f0] hover:bg-white/5 rounded-lg" aria-label="Close navigation menu">
                <X className="h-6 w-6" aria-hidden />
              </Button>
            </Dialog.Close>
          </div>
          <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-bold text-[#8882a4] hover:bg-white/5 hover:text-[#e2e2f0] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 border-t border-[#ffffff12] pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7c3aed]">Featured projects</p>
            <div className="mt-4 grid gap-2">
              {portfolio.projects.slice(0, 5).map((project) => (
                <a
                  key={project.slug}
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-[#8882a4] hover:bg-white/5 hover:text-[#e2e2f0] transition-all"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
