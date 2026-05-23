"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // We use useScroll from framer-motion to track scroll progress over the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pre-load all 118 frames into memory
  useEffect(() => {
    for (let i = 1; i <= 118; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
      imagesRef.current.push(img);
    }
  }, []);

  // Draw frame on canvas when scroll progress changes
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Set initial canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Draw first frame immediately
      if (imagesRef.current[0]) {
        drawFrame(0);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function drawFrame(index: number) {
      if (!ctx || !canvas) return;
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      // Object fit cover logic for canvas
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      // We fill black background first to match seamless
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    // Subscribe to scroll changes
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map 0-1 to 0-117
      const frameIndex = Math.min(117, Math.floor(latest * 118));
      requestAnimationFrame(() => drawFrame(frameIndex));
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [scrollYProgress]);

  // Opacity transforms for the text overlays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.15, 1], [0, -50, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 1], [0, 0, 1, 0, 0]);
  const text2Y = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 1], [50, 50, 0, -50, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7, 1], [0, 0, 1, 0, 0]);
  const text3Y = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7, 1], [50, 50, 0, -50, -50]);

  const text4Opacity = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [0, 0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [50, 50, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black" id="home">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

        {/* Text Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">

          <motion.div
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute flex flex-col items-center text-center"
          >
            <h1 className="font-outfit text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
              Pure Hydration. Refined.
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-light text-white/80 max-w-xl">
              Where premium stainless steel meets next-level hydration.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute left-6 md:left-24 max-w-lg"
          >
            <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Zero compromises.
            </h2>
            <p className="text-xl text-white/80 font-medium">
              Maintains absolute temperature control for 24 hours. No condensation, no warm regrets.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute right-6 md:right-24 max-w-lg text-right"
          >
            <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Indestructible shell.
            </h2>
            <p className="text-xl text-white/80 font-medium ml-auto">
              Engineered to survive drops, dents, and the of modern existence.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: text4Opacity, y: text4Y }}
            className="absolute flex flex-col items-center text-center bottom-32 pointer-events-auto"
          >
            <h2 className="font-outfit text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              Make it yours.
            </h2>
            <button className="group relative px-8 py-4 bg-white text-black font-outfit text-lg font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 uppercase tracking-widest">Shop Collection</span>
              <div className="absolute inset-0 bg-zinc-300 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
