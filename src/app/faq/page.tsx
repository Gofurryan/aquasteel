import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ | aquasteel",
  description: "Frequently Asked Questions about aquasteel.",
};

const faqs = [
  {
    question: "Berapa lama aquasteel dapat menahan suhu air?",
    answer: "Berkat teknologi isolasi vakum dinding ganda kami, botol aquasteel dapat menjaga minuman Anda tetap dingin selama 24 jam dan tetap panas hingga 12 jam tanpa kompromi."
  },
  {
    question: "Material apa yang digunakan pada botol aquasteel?",
    answer: "Kami menggunakan baja tahan karat (stainless steel) tipe 18/8 berkualitas medis/bedah (surgical-grade). Material ini sangat kuat, tahan karat, dan tidak akan mengubah atau menyimpan rasa minuman Anda."
  },
  {
    question: "Apakah aquasteel aman untuk dimasukkan ke mesin pencuci piring (dishwasher)?",
    answer: "Meskipun botol kami sangat kuat, kami menyarankan Anda untuk mencucinya dengan tangan menggunakan air hangat dan sabun agar lapisan premium dan insulasi vakumnya tetap awet seumur hidup."
  },
  {
    question: "Bagaimana cara memesan produk aquasteel?",
    answer: "Anda dapat langsung memesan melalui tombol 'Order Now' di halaman utama yang akan langsung menghubungkan Anda dengan layanan pelanggan prioritas kami di WhatsApp."
  }
];

export default function FAQPage() {
  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-white selection:text-black pt-32 flex flex-col">
      <Navbar />

      <div className="flex-grow container mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 text-center">
          FAQ
        </h1>
        <p className="text-zinc-400 font-medium text-lg text-center mb-16">
          Pertanyaan yang sering diajukan mengenai produk dan layanan kami.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
              <h3 className="font-outfit text-2xl font-bold text-white mb-4">
                {faq.question}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
