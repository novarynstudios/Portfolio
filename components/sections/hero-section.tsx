"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <Container className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.1, duration: 0.55 }} className="purple-panel rounded-lg p-6 sm:p-8 lg:p-10">
          <motion.p variants={item} className="section-kicker">Novaryn Studios / Farid Rahman</motion.p>
          <motion.h1 variants={item} className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
            Minecraft plugins, web tools, and infra that feel finished.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {portfolio.hero.intro}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#projects">
              Explore My Work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">Contact Me</LinkButton>
            <LinkButton href="https://github.com/faridrahman1843" variant="ghost">
              <Github className="h-4 w-4" aria-hidden />
              GitHub Profile
            </LinkButton>
          </motion.div>
          <motion.div variants={item} className="mt-10 grid gap-3 sm:grid-cols-4">
            {portfolio.metrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-primary/20 bg-black/20 p-4">
                <p className="text-2xl font-black text-white">{metric.value}{metric.suffix}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid gap-4">
          <div className="purple-panel overflow-hidden rounded-lg p-4">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image src={portfolio.hero.profileImage} alt="Profile picture of Farid Rahman" fill sizes="(max-width: 1024px) 90vw, 34rem" priority className="object-cover" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Java plugins", "Next.js dashboards", "License systems", "Linux deploys"].map((item) => (
              <div key={item} className="rounded-md border border-primary/20 bg-white/[0.035] px-4 py-3 text-sm font-bold text-white">{item}</div>
            ))}
          </div>
        </motion.div>
      </Container>
      <a href="#projects" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:flex">
        Scroll for more
        <ChevronDown className="h-5 w-5 animate-bounce text-primary-bright" aria-hidden />
      </a>
    </section>
  );
}
