import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Flag, Shield } from "lucide-react";

export const metadata = {
  title: "Visi & Misi | aquasteel",
  description: "Visi dan Misi dari aquasteel.",
};

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-white selection:text-black pt-32 flex flex-col">
      <Navbar />

      <div className="flex-grow container mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Tentang Kami
          </h1>
          <p className="text-zinc-400 font-medium text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat aquasteel, tujuan kami, dan komitmen kami untuk merevolusi pengalaman Anda.
          </p>
        </div>

        <div className="space-y-16">
          {/* Visi */}
          <div className="bg-zinc-900/40 p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-outfit text-4xl font-bold text-white mb-6 flex items-center gap-4">
                Visi Kami
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                Menjadi pelopor gaya hidup sehat dan berkelanjutan di tingkat global dengan menghadirkan standar tertinggi dalam teknologi hidrasi. Kami bermimpi tentang dunia di mana setiap orang memiliki akses ke hidrasi premium tanpa harus mengorbankan kelestarian lingkungan dari ancaman sampah plastik sekali pakai.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-gradient-to-br from-zinc-900 to-black p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Flag className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-outfit text-4xl font-bold text-white mb-8 flex items-center gap-4">
                Misi Kami
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Kualitas Tanpa Batas</h3>
                    <p className="text-zinc-400">Merancang dan memproduksi botol air menggunakan material baja tahan karat (stainless steel) tingkat medis terbaik yang teruji daya tahannya di segala medan.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Inovasi Teknologi Berkelanjutan</h3>
                    <p className="text-zinc-400">Terus mengembangkan inovasi isolasi vakum untuk memastikan suhu minuman terjaga sempurna sambil menjaga desain yang ramping dan estetis.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Dampak Positif bagi Lingkungan</h3>
                    <p className="text-zinc-400">Mengedukasi dan menginspirasi masyarakat untuk meninggalkan plastik sekali pakai dan beralih ke solusi hidrasi yang ramah lingkungan dan dapat digunakan seumur hidup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
