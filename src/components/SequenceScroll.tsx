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

  // Pre-load frames progressively to avoid network and main thread blocking
  useEffect(() => {
    const totalFrames = 118;
    
    // Initialize array with empty spots
    for (let i = 0; i < totalFrames; i++) {
      imagesRef.current.push(new Image());
    }

    const loadFrame = (index: number) => {
      const frameNumber = (index + 1).toString().padStart(3, "0");
      const img = new Image();
      img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        imagesRef.current[index] = img;
        // Notify when the first frame is loaded to paint the canvas immediately
        if (index === 0) {
          window.dispatchEvent(new Event("firstFrameLoaded"));
        }
      };
    };

    // 1. Prioritize first 10 frames for instant initial scroll experience
    for (let i = 0; i < 10; i++) {
      loadFrame(i);
    }

    // 2. Lazy load the remaining frames in small batches
    let currentLoadIndex = 10;
    const lazyLoadInterval = setInterval(() => {
      if (currentLoadIndex < totalFrames) {
        // Load 4 frames per batch every 100ms (avoids choking the browser)
        for (let b = 0; b < 4 && currentLoadIndex < totalFrames; b++) {
          loadFrame(currentLoadIndex);
          currentLoadIndex++;
        }
      } else {
        clearInterval(lazyLoadInterval);
      }
    }, 100);

    return () => clearInterval(lazyLoadInterval);
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
      
      // Fallback mechanism: If the exact frame isn't loaded yet,
      // show the closest previously loaded frame to prevent flickering
      let imgToDraw = null;
      for (let i = index; i >= 0; i--) {
        const img = imagesRef.current[i];
        if (img && img.complete && img.naturalWidth > 0) {
          imgToDraw = img;
          break;
        }
      }
      
      if (!imgToDraw) return;

      // Object fit cover logic for canvas
      const scale = Math.max(canvas.width / imgToDraw.width, canvas.height / imgToDraw.height);
      const x = (canvas.width / 2) - (imgToDraw.width / 2) * scale;
      const y = (canvas.height / 2) - (imgToDraw.height / 2) * scale;

      // We fill black background first to match seamless
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(imgToDraw, x, y, imgToDraw.width * scale, imgToDraw.height * scale);
    }

    // Listen for the first frame to paint it immediately without waiting for scroll
    const handleFirstFrame = () => drawFrame(0);
    window.addEventListener("firstFrameLoaded", handleFirstFrame);

    // Subscribe to scroll changes
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map 0-1 to 0-117
      const frameIndex = Math.min(117, Math.floor(latest * 118));
      requestAnimationFrame(() => drawFrame(frameIndex));
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("firstFrameLoaded", handleFirstFrame);
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
