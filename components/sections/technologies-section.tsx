"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function TechnologiesSection() {
  const tools = [...portfolio.toolsOrPlatforms, ...portfolio.toolsOrPlatforms];

  return (
    <section className="py-20">
      <Container className="overflow-hidden">
        <p className="section-kicker">Languages</p>
        <h2 className="mt-3 text-4xl font-black text-white">Languages I work with.</h2>
        <div className="relative mt-10 -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
          <div className="reverse-marquee gap-3 px-4 sm:px-6 lg:px-8">
            {tools.map((tool, index) => (
              <div key={`${tool.name}-${index}`} className="w-48 shrink-0 rounded-md border border-primary/25 bg-[#120e1c] p-6 text-center">
                <Image src={tool.image} alt={tool.alt} width={180} height={180} className="mx-auto aspect-square w-full object-contain" />
                <p className="mt-4 text-base font-medium text-white">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
