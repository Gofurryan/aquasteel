"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Satu-satunya botol yang benar-benar bertahan jatuh dari ketinggian 12 meter namun tetap menjaga kopi saya hangat.",
    author: "Elena R.",
    role: "Pendaki Gunung",
  },
  {
    quote: "Ini bukan sekadar botol, ini pernyataan tentang desain. Orang-orang selalu bertanya tentang botol ini ke mana pun saya pergi.",
    author: "James T.",
    role: "Desainer Industri",
  },
  {
    quote: "Sama sekali tidak ada rasa logam, hasil akhirnya tanpa cacat, dan tutup magnetiknya memberikan kepuasan tersendiri.",
    author: "Sarah K.",
    role: "Barista",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-32 bg-zinc-950 relative overflow-hidden z-10 flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-center min-h-[350px] flex flex-col justify-center"
          >
            <h3 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-12 leading-tight text-balance mx-auto max-w-4xl px-4 md:px-16">
              "{testimonials[index].quote}"
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="font-outfit text-xl font-bold text-white tracking-widest uppercase">
                {testimonials[index].author}
              </span>
              <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium">
                {testimonials[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-8 lg:-left-12">
          <button
            onClick={prev}
            className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all active:scale-95 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-8 lg:-right-12">
          <button
            onClick={next}
            className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all active:scale-95 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-12 bg-white" : "w-2 bg-white/20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
