"use client";

import { motion } from "motion/react";
import { ThermometerSnowflake, Droplets, ShieldCheck, Feather } from "lucide-react";

const features = [
  {
    title: "Absolute Zero",
    description: "Vacuum insulation keeps liquids arctic cold for 24 hours.",
    icon: <ThermometerSnowflake className="w-8 h-8 text-blue-400" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900 to-black",
  },
  {
    title: "Condensation Free",
    description: "Your hands stay dry. Always.",
    icon: <Droplets className="w-8 h-8 text-teal-400" />,
    className: "md:col-span-1 md:row-span-1 bg-zinc-900",
  },
  {
    title: "Surgical Grade",
    description: "18/8 stainless steel construction.",
    icon: <ShieldCheck className="w-8 h-8 text-zinc-400" />,
    className: "md:col-span-1 md:row-span-1 bg-zinc-900",
  },
  {
    title: "Aerospace Light",
    description: "Thinner walls, lighter weight, more volume.",
    icon: <Feather className="w-8 h-8 text-white" />,
    className: "md:col-span-2 md:row-span-1 bg-zinc-800",
  },
];

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="font-outfit text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Engineered Perfection.
          </h2>
          <p className="text-zinc-400 mt-4 text-xl">Every detail matters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative ${feature.className}`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-white/10 p-4 rounded-2xl w-fit backdrop-blur-md">
                {feature.icon}
              </div>
              <div className="relative z-10">
                <h3 className="font-outfit text-2xl font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
