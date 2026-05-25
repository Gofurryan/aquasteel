"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThermometerSnowflake, Droplets, ShieldCheck, Feather } from "lucide-react";
import clsx from "clsx";

const features = [
  {
    title: "Absolute Zero",
    description: "Vacuum insulation keeps liquids arctic cold for 24 hours.",
    icon: <ThermometerSnowflake className="w-20 h-20 text-blue-400" />,
  },
  {
    title: "Condensation Free",
    description: "Your hands stay dry. Always.",
    icon: <Droplets className="w-20 h-20 text-teal-400" />,
  },
  {
    title: "Surgical Grade",
    description: "18/8 premium stainless steel construction.",
    icon: <ShieldCheck className="w-20 h-20 text-zinc-400" />,
  },
  {
    title: "Aerospace Light",
    description: "Thinner walls, lighter weight, more volume.",
    icon: <Feather className="w-20 h-20 text-white" />,
  },
];

export default function FeaturesBento() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-32 bg-zinc-950 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-24">
          <h2 className="font-outfit text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Engineered Perfection.
          </h2>
          <p className="text-zinc-400 mt-6 text-2xl font-light">Every detail matters.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* Left Side: List of Features */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="cursor-pointer group flex gap-6 md:gap-8 items-stretch"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                {/* Active Indicator Line */}
                <div className="w-[3px] rounded-full bg-zinc-800 relative overflow-hidden my-2">
                   <motion.div 
                     className="absolute inset-x-0 top-0 bg-white"
                     initial={false}
                     animate={{ height: activeIndex === i ? "100%" : "0%" }}
                     transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                   />
                </div>
                
                <div className="flex-1 pb-12">
                   <div className={clsx(
                     "font-outfit text-4xl md:text-5xl font-bold tracking-tighter transition-all duration-500",
                     activeIndex === i 
                       ? "text-white [text-shadow:0_0_20px_rgba(255,255,255,0.4)]" 
                       : "text-zinc-700 group-hover:text-zinc-500"
                   )}>
                     {feature.title}
                   </div>
                   
                   {/* Mobile description & icon */}
                   <motion.div
                     initial={false}
                     animate={{ 
                       height: activeIndex === i ? "auto" : 0, 
                       opacity: activeIndex === i ? 1 : 0 
                     }}
                     className="lg:hidden overflow-hidden"
                   >
                     <div className="mt-6 flex flex-col gap-4">
                       <div className="w-fit p-4 rounded-full bg-white/5 border border-white/10">
                         {features[activeIndex].icon}
                       </div>
                       <p className="text-zinc-400 text-lg leading-relaxed font-light">{feature.description}</p>
                     </div>
                   </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Visual Display (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/2">
             <div className="sticky top-32 w-full aspect-square rounded-[3rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 flex flex-col items-center justify-center p-12 overflow-hidden shadow-2xl">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeIndex}
                   initial={{ opacity: 0, y: 30, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -30, scale: 0.95 }}
                   transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                   className="flex flex-col items-center text-center relative z-10"
                 >
                   <div className="mb-10 p-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                     {features[activeIndex].icon}
                   </div>
                   <p className="text-3xl text-zinc-300 font-light leading-relaxed max-w-sm">
                     {features[activeIndex].description}
                   </p>
                 </motion.div>
               </AnimatePresence>
               
               {/* Decorative Abstract Background Animation */}
               <AnimatePresence mode="popLayout">
                 <motion.div 
                   key={`bg-${activeIndex}`}
                   initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                   animate={{ rotate: 0, scale: 1, opacity: 0.15 }}
                   exit={{ rotate: 90, scale: 1.5, opacity: 0 }}
                   transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                   className="absolute inset-0 border-[60px] border-white rounded-full blur-3xl pointer-events-none"
                   style={{ width: '150%', height: '150%', left: '-25%', top: '-25%' }}
                 />
               </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
