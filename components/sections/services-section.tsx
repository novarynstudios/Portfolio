"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#f7f7f7] text-zinc-950">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4a00e0]">Services</p>
          <h2 className="mt-3 font-poppins text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            From Concept to Production
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-zinc-500 font-nunito">
            I bring Minecraft servers and web platforms to life with custom plugins, operational infrastructure, and documentation that feel polished from day one.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a855f7]/40 flex flex-col items-start text-left"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#e5ecfb] text-[#2506ad] transition-colors duration-300">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-zinc-800 font-poppins">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500 font-nunito">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
