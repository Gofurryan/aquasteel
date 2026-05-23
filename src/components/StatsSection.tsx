"use client";

import CountUp from "react-countup";
import { motion } from "motion/react";

const stats = [
  { value: 24, label: "Hours Cold", suffix: "h" },
  { value: 12, label: "Hours Hot", suffix: "h" },
  { value: 100, label: "Plastic Saved", suffix: "%" },
  { value: 0, label: "Condensation", suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-black border-y border-white/10 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="font-outfit text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 flex items-baseline">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  useEasing
                />
                <span className="text-3xl md:text-5xl text-zinc-500 ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-zinc-400 font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
