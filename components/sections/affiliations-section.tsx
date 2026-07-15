"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function AffiliationsSection({ data }: { data?: any }) {
  const currentAffiliations = data?.affiliations || portfolio.currentAffiliations;
  const metrics = data?.metrics || portfolio.metrics;

  return (
    <section className="py-24 bg-[#0f0f1a] text-[#e2e2f0]">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7c3aed]">Work Map & Stats</p>
          <h2 className="mt-3 font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Current Focus & Impact
          </h2>
        </div>
        
        {/* Affiliation Logos */}
        <div className="grid gap-6 md:grid-cols-3">
          {currentAffiliations.map((affiliation: any) => (
            <div
              key={affiliation.name}
              className="bg-[#14141f] border border-[#ffffff12] grid min-h-36 place-items-center rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#7c3aed]/40"
            >
              {affiliation.image ? (
                <Image
                  src={affiliation.image}
                  alt={affiliation.alt}
                  width={420}
                  height={140}
                  className="h-16 w-auto max-w-full object-contain filter invert opacity-60 hover:opacity-100 hover:filter-none transition duration-300"
                />
              ) : (
                <span className="font-poppins font-extrabold text-lg text-white/50">{affiliation.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Impact metrics counter */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric: any) => (
            <div
              key={metric.label}
              className="rounded-xl bg-[#14141f] p-6 text-center border border-[#ffffff12] shadow-lg transition duration-300 hover:scale-[1.03] hover:border-[#06b6d4]"
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-sm font-semibold tracking-wide text-[#8882a4] font-poppins uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
