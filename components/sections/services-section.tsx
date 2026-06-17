"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="From concept to production"
          description="I bring Minecraft servers and web platforms to life with plugin development, dashboards, infrastructure, and documentation that feel polished from day one."
          className="mx-auto text-center"
        />
        <div className="mx-auto mt-16 grid max-w-6xl gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-md border border-primary/20 bg-[#120e1c] p-5">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/20 text-primary-bright">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
