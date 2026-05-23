"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Droplets } from "lucide-react";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = 118;

    const loadImages = async () => {
      // Pre-load all 118 images for the canvas
      for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages++;
            setProgress(Math.round((loadedImages / totalImages) * 100));
            resolve(null);
          };
          img.onerror = () => {
            // resolve anyway to not block
            loadedImages++;
            setProgress(Math.round((loadedImages / totalImages) * 100));
            resolve(null);
          };
        });
      }

      // Small delay for minimum loading time aesthetics
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    loadImages();
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center text-white"
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-8"
      >
        <Droplets className="w-16 h-16 text-white" />
      </motion.div>
      <div className="font-outfit text-6xl md:text-9xl font-bold tracking-tighter opacity-10">
        {progress}%
      </div>
      <div className="absolute bottom-12 uppercase tracking-widest text-xs opacity-50 font-outfit">
        Loading Assets
      </div>
    </motion.div>
  );
}
