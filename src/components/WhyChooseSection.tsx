"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Kualitas Tanpa Kompromi",
    description: "Dibuat dari baja tahan karat 18/8 food-grade yang tidak akan menyimpan atau mengubah rasa, memastikan hidrasi murni.",
  },
  {
    title: "Ketahanan Seumur Hidup",
    description: "Dibangun untuk bertahan di lingkungan paling keras. Dari puncak gunung hingga perjalanan harian, botol ini hampir tidak bisa dihancurkan.",
  },
  {
    title: "Desain Ramah Lingkungan",
    description: "Setiap botol Aquasteel menyelamatkan lautan dan tempat pembuangan sampah dari ribuan botol plastik sekali pakai.",
  },
  {
    title: "Estetika Memukau",
    description: "Siluet minimalis dan ramping yang terlihat elegan di meja rapat maupun di dalam tas olahraga Anda.",
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-32 bg-zinc-950 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Mengapa Memilih <br /> Aquasteel?
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-8">
              Kami tidak hanya merancang botol air. Kami menciptakan pengalaman premium yang menyesuaikan gaya hidup Anda tanpa kompromi.
            </p>
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Abstract visual or shape to represent quality */}
            <div className="aspect-square rounded-full bg-gradient-to-tr from-zinc-800 to-black border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[80%] h-[80%] rounded-full border border-dashed border-white/20 flex items-center justify-center"
              >
                <div className="font-outfit text-4xl font-bold tracking-widest text-zinc-700 opacity-30 uppercase">
                  Premium
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
