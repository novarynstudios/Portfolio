"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function AffiliationsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <p className="section-kicker">Work Map</p>
          <h2 className="mt-3 text-4xl font-black text-white">Current focus and experience.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {portfolio.currentAffiliations.map((affiliation) => (
            <div key={affiliation.name} className="purple-panel grid min-h-36 place-items-center rounded-md p-5">
              <Image src={affiliation.image} alt={affiliation.alt} width={420} height={140} className="h-24 w-auto max-w-full object-contain" />
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {portfolio.selectedExperience.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-md border border-primary/20 bg-[#120e1c] p-6"
            >
              <h3 className="text-2xl font-black text-white">{experience.title}</h3>
              <p className="mt-5 text-base leading-8 text-white/[0.85]">{experience.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-14">
          <h2 className="text-2xl font-black text-white">Past Experience</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {portfolio.pastExperience.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-md border border-primary/20 bg-[#120e1c] p-6"
              >
                <h3 className="text-2xl font-black text-white">{experience.title}</h3>
                <p className="mt-5 text-base leading-8 text-white/[0.85]">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
