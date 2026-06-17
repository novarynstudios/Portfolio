import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SocialLink } from "@/components/ui/social-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1d1f] py-16">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#home" className="inline-flex items-center gap-3" aria-label="Farid Rahman home">
            <Image src="/branding/farid-wordmark.png" alt="Farid Rahman" width={312} height={40} className="h-10 w-auto max-w-[70vw] object-contain" />
          </a>
          <div className="mt-8 flex gap-3">
            {portfolio.footerLinks.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">Built by Farid Rahman with Next.js.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Footer navigation">
          {portfolio.nav.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#home" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-bright">
          Back to Top
        </a>
      </Container>
      <Container className="mt-8 border-t border-white/10 pt-6 text-xs text-muted">
        <p>© {year} Farid Rahman. All rights reserved.</p>
      </Container>
    </footer>
  );
}
