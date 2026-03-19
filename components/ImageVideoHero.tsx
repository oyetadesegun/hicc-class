"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ImageVideoHeroProps {
  progress: number; // 0 to 1
  frameCount?: number;
  assetPath?: string;
}

export default function ImageVideoHero({
  progress,
  frameCount = 300,
  assetPath = "/assets/ezgif-frame-",
}: ImageVideoHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, "0");
      img.src = `${assetPath}${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount, assetPath]);

  // Update current frame based on progress
  useEffect(() => {
    if (images.length === 0) return;
    const frameIndex = Math.min(Math.floor(progress * (frameCount - 1)), frameCount - 1);
    setCurrentFrame(frameIndex);
  }, [progress, images, frameCount]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[currentFrame];
    if (img && img.complete && img.naturalWidth > 0) {
      // Handle High-DPI displays
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const displayWidth = Math.round(rect.width * dpr);
      const displayHeight = Math.round(rect.height * dpr);

      // Fix canvas dimensions to match physical pixels 
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Object-cover equivalent for canvas
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        // Image is taller than canvas
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, [currentFrame, images]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover pointer-events-none"
      />
      
      <AnimatePresence>
        {imagesLoaded < frameCount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 px-6"
          >
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-6" />
            <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase text-center max-w-xs leading-loose">
              Synthesizing Experience <br/> 
              {Math.round((imagesLoaded / frameCount) * 100)}% Complete
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black pointer-events-none" />
    </div>
  );
}
