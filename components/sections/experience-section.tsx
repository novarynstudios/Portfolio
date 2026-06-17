"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="purple-panel grid gap-10 rounded-lg p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-kicker">Impact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Reliable plugins, platforms, and infrastructure for Minecraft communities.</h2>
            <div className="mt-7 grid gap-5 text-base leading-8 text-muted">
              <p>I focus on plugin architecture that keeps server workflows maintainable: clean configuration, safe integrations, sensible defaults, and features that staff can actually operate.</p>
              <p>On the web and infrastructure side, I build dashboards, docs, deployment paths, and Linux/Nginx setups that make products easier to ship and support.</p>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
          {portfolio.metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-primary/20 bg-black/20 p-5">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-sm font-medium text-muted">{metric.label}</p>
            </div>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
