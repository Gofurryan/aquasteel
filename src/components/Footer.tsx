"use client";

import { Droplets } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-10 overflow-hidden border-t border-white/10">
      {/* Animated abstract background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -right-[10%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-bl from-zinc-800/30 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-12 relative z-10 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <Droplets className="w-8 h-8" />
              <span className="font-outfit text-3xl font-bold tracking-tighter">
                aquasteel.
              </span>
            </div>
            <p className="text-zinc-400 font-light text-xl leading-relaxed max-w-sm">
              aquasteel berkomitmen untuk menghadirkan pengalaman terbaik. Kami memadukan bahan berkualitas tinggi dengan desain minimalis untuk menciptakan botol yang tahan seumur hidup.
            </p>
          </div>

          <div className="flex gap-16 md:gap-32">
            <div className="flex flex-col gap-4">
              <a href="/#home" className="hover:text-zinc-400 transition-colors">Home</a>
              <a href="/#story" className="hover:text-zinc-400 transition-colors">The Story</a>
              <a href="/#features" className="hover:text-zinc-400 transition-colors">Features</a>
              <a href="/#gallery" className="hover:text-zinc-400 transition-colors">Gallery</a>
              <a href="/#order" className="hover:text-zinc-400 transition-colors">Order</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="/about" className="hover:text-zinc-400 transition-colors">About Us</a>
              <a href="/faq" className="hover:text-zinc-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        {/* Massive text */}
        <div className="w-full overflow-hidden mb-12">
          <h2 className="font-outfit font-bold tracking-tighter text-[15vw] leading-none text-center select-none text-white/5">
            AQUASTEEL
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-medium uppercase tracking-widest">
          <p>© 2026 AQUASTEEL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>Dibuat oleh Tim aquasteel | Universitas Negeri Surabaya.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
