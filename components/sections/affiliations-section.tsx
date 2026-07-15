"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function AffiliationsSection() {
  return (
    <section className="py-24 bg-white text-zinc-950">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4a00e0]">Work Map & Stats</p>
          <h2 className="mt-3 font-poppins text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Current Focus & Impact
          </h2>
        </div>
        
        {/* Affiliation Logos */}
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.currentAffiliations.map((affiliation) => (
            <div
              key={affiliation.name}
              className="bg-[#f7f7f7] border border-zinc-200 grid min-h-36 place-items-center rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#a855f7]/40"
            >
              <Image
                src={affiliation.image}
                alt={affiliation.alt}
                width={420}
                height={140}
                className="h-16 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Impact metrics counter */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-[#120e1c] p-6 text-center border border-white/5 shadow-lg transition duration-300 hover:scale-[1.03]"
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-sm font-semibold tracking-wide text-zinc-400 font-poppins uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
