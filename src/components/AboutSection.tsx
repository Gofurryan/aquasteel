"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import clsx from "clsx";

const text = "We believe that the objects you use every day should be masterpieces of engineering. Not just tools, but extensions of your intent. Aquasteel is born from a desire to elevate hydration to an art form, utilizing surgical-grade materials and aerospace tolerances.";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const words = text.split(" ");

  return (
    <section ref={containerRef} id="story" className="py-32 md:py-64 bg-zinc-950 text-white min-h-screen flex items-center justify-center relative z-10 -mt-[100vh]">
      {/* We add -mt-[100vh] to overlap the hero section smoothly */}
      <div className="container mx-auto px-6 max-w-5xl">
        <h3 className="font-outfit uppercase tracking-[0.2em] text-zinc-500 mb-12 text-sm">
          The Ideology
        </h3>
        <p className="font-outfit text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter flex flex-wrap gap-x-3 gap-y-2 md:gap-y-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

            return (
              <span key={i} className="relative">
                <motion.span style={{ opacity }} className="text-white">
                  {word}
                </motion.span>
                <span className="absolute left-0 top-0 text-white/10">{word}</span>
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
