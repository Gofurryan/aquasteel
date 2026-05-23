"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  const phoneNumber = "6281357312245";
  const message = encodeURIComponent("Halo aquasteel, saya tertarik dan ingin memesan produk Anda.");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="order" className="py-32 bg-zinc-950 relative z-10 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="font-outfit text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Elevate Your Hydration.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
            Rasakan perbedaan kualitasnya. Pesan aquasteel Anda hari ini.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-outfit text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:text-green-600 transition-colors" />
            <span>Order Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
