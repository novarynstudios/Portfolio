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
        <Button variant="ghost" className="md:hidden p-2 text-zinc-800 hover:bg-zinc-100 rounded-lg" aria-label="Open navigation menu">
          <Menu className="h-6 w-6" aria-hidden />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-dvh w-[min(22rem,92vw)] flex-col border-l border-zinc-200 bg-white p-5 shadow-2xl md:hidden text-zinc-950 font-poppins">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-extrabold text-[#0e2431]">FR</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" className="p-2 text-zinc-800 hover:bg-zinc-100 rounded-lg" aria-label="Close navigation menu">
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
                className="rounded-md px-3 py-3 text-base font-bold text-zinc-700 hover:bg-zinc-100 hover:text-[#011aff] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 border-t border-zinc-200 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2506ad]">Featured projects</p>
            <div className="mt-4 grid gap-2">
              {portfolio.projects.slice(0, 5).map((project) => (
                <a
                  key={project.slug}
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-[#011aff] transition-all"
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
