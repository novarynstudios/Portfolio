"use client";

import { MessageSquare, Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/container";

const STATIC_TESTIMONIALS = [
  {
    name: "Daniel",
    project: "Commission - Sniper Network Owner",
    content: "Farid did an incredible job setting up our Sniper Region Router. Our latency for players in Bangladesh and Singapore improved dramatically, and the Redis-backed state routing has been rock solid. Absolute professional.",
    rating: 5,
    initials: "D"
  },
  {
    name: "Lucas",
    project: "Adults Night Out SMP",
    content: "We commissioned Farid for a custom practice-network core layer. The plugin is highly optimized, holds 20 TPS with high player count, and the Lunar Client integration is perfect. He treats each client like family.",
    rating: 5,
    initials: "L"
  },
  {
    name: "Daniel S.",
    project: "Lumina Support Setup",
    content: "It was a pleasure working with Farid! The licensing platform he built for us works flawlessly. The Discord bot integration makes client support and commission management seamless. Farid went above and beyond.",
    rating: 5,
    initials: "DS"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export function TestimonialsSection({ data }: { data?: any }) {
  const testimonialsList = data?.testimonials || STATIC_TESTIMONIALS;

  return (
    <section id="reviews" className="py-24 bg-[#0f0f1a] text-[#e2e2f0] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7c3aed]">Vouches</p>
          <h2 className="mt-3 font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl flex items-center justify-center gap-3">
            <MessageSquare className="h-10 w-10 text-[#06b6d4]" aria-hidden />
            Client <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">Reviews</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {testimonialsList.map((review: any, idx: number) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#14141f] border border-[#ffffff12] rounded-xl p-6 shadow-lg hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-sm font-semibold font-nunito italic leading-7 text-[#8882a4]">
                  “{review.content}”
                </p>
              </div>

              <div className="border-t border-[#ffffff12] pt-4 mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white flex items-center justify-center text-sm font-extrabold font-poppins shadow-md">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-poppins">{review.name}</h4>
                  <p className="text-xs text-zinc-500 font-nunito">{review.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
