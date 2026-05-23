"use client";

import { motion } from "motion/react";
import { MessageCircle, CheckSquare, Package, Star } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "1. Hubungi via WhatsApp",
    description: "Klik tombol order untuk terhubung langsung dengan admin kami melalui WhatsApp. Sampaikan pesanan Anda.",
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-white" />,
    title: "2. Konfirmasi Pesanan",
    description: "Admin kami akan mengkonfirmasi detail pesanan, ketersediaan stok, dan memberikan total biaya beserta ongkos kirim.",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    title: "3. Packing & Pengiriman",
    description: "Pesanan Anda akan dikemas dengan aman menggunakan standar premium kami dan segera dikirim ke alamat tujuan.",
  },
  {
    icon: <Star className="w-8 h-8 text-white" />,
    title: "4. Terima & Review",
    description: "Pesanan sampai di tangan Anda. Bagikan pengalaman terbaik Anda, kami sangat senang mendengar feedback dari Anda!",
  }
];

export default function HowToOrderSection() {
  return (
    <section className="py-32 bg-zinc-950 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Cara Memesan
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            Proses pemesanan yang cepat, aman, dan transparan langsung melalui layanan pelanggan prioritas kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-colors group"
            >
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>

              {/* Optional connector line for larger screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-[2px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
