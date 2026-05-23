"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Preloader from "@/components/Preloader";
import SequenceScroll from "@/components/SequenceScroll";
import AboutSection from "@/components/AboutSection";
import FeaturesBento from "@/components/FeaturesBento";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomeClient({ images }: { images: string[] }) {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={loading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-1000"}>
        <SequenceScroll />
        <AboutSection />
        <FeaturesBento />
        <WhyChooseSection />
        <HowToOrderSection />
        <StatsSection />
        <TestimonialSlider />
        
        {/* Gallery Section */}
        <section id="gallery" className="py-32 bg-zinc-950 relative z-10 border-t border-white/5">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-20">
              <h2 className="font-outfit text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                The Gallery
              </h2>
              <p className="text-zinc-400 font-medium text-lg max-w-2xl mx-auto">
                A visual journey through the design, craft, and moments that make our product exceptional.
              </p>
            </div>
            
            {images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                    <Image 
                      src={`/galeri/${image}`} 
                      alt={`aquasteel gallery photo ${idx + 1}`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-zinc-500 py-20 border border-white/10 rounded-3xl border-dashed">
                <p>No images found in the gallery.</p>
              </div>
            )}
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
