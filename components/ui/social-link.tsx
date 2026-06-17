import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  label: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function SocialLink({ label, href, icon: Icon, className }: SocialLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      aria-label={label}
      className={cn("inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-muted transition hover:border-primary/60 hover:text-white", className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </a>
  );
}
