"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Button, LinkButton } from "@/components/ui/button";

type ProjectDialogProps = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-white/10 bg-[#120d1f] p-4 shadow-2xl sm:p-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-white/5">
            <Image src={project.image} alt={`${project.title} project artwork`} fill sizes="(max-width: 768px) 90vw, 720px" className="object-cover" />
          </div>
          <div className="mt-6 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-2xl font-bold text-white">{project.title}</Dialog.Title>
              <Dialog.Description className="mt-3 text-sm leading-7 text-muted">{project.description}</Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button variant="icon" aria-label="Close project details">
                <X className="h-5 w-5" aria-hidden />
              </Button>
            </Dialog.Close>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-primary-bright">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Status: <span className="font-semibold text-white">{project.status}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <LinkButton key={link.href + link.label} href={link.href} variant="secondary">
                  {link.label}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </LinkButton>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
