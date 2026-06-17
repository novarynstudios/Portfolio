"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let frame = 0;
    const totalFrames = 42;
    let animationFrame = 0;
    const tick = () => {
      frame += 1;
      setDisplay(Math.round((value * frame) / totalFrames));
      if (frame < totalFrames) animationFrame = requestAnimationFrame(tick);
    };
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, reducedMotion, value]);

  return (
    <motion.span ref={ref} initial={false} className="text-4xl font-bold text-white sm:text-5xl">
      {reducedMotion ? value : display}
      {suffix}
    </motion.span>
  );
}
