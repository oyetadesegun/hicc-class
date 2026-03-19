"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe, 
  Cpu
} from "lucide-react";
import ImageVideoHero from "@/components/ImageVideoHero";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
};

const stats = [
  { value: "300+", label: "Dynamic Frames" },
  { value: "4K READY", label: "Resolution" },
  { value: "SCROLL", label: "Interactive" },
  { value: "24/7", label: "Availability" },
];

export default function V2Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to text opacities/transforms for a dynamic feel
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  
  const feature1Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], [0, 1, 1, 0]);
  const feature1Y = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], [50, 0, 0, -50]);

  const feature2Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const feature2Y = useTransform(scrollYProgress, [0.8, 0.9, 1], [50, 0, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans overflow-x-hidden">
      
      {/* Scroll Container for the Hero Sequence */}
      <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
        
        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* The Hero Video Sequence */}
          <div className="absolute inset-0 z-0">
            <motion.div style={{ scale: heroScale }} className="w-full h-full">
               <ImageVideoHero progress={scrollYProgress as any} frameCount={300} />
            </motion.div>
          </div>

          {/* Text Overlays */}
          <div className="relative z-10 w-full h-full">
            
            {/* Phase 1: Intro Text */}
            <motion.div 
              style={{ opacity: heroOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            >
              <div className="space-y-8 max-w-5xl">
                <motion.span 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-black tracking-widest uppercase backdrop-blur-md"
                >
                  <Zap className="w-4 h-4 fill-primary" /> Scroll to Explore
                </motion.span>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  VISUAL <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary/50 text-[0.8em] md:text-[1em]">PRECISION.</span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed">
                  Every frame is an intentional masterpiece. Precision motion tracking 
                  integrated directly into your scroll interaction.
                </p>
              </div>
            </motion.div>

            {/* Phase 2: Middle Feature */}
            <motion.div 
              style={{ opacity: feature1Opacity, y: feature1Y }}
              className="absolute inset-0 flex flex-col items-start justify-center px-12 md:px-32 pointer-events-none"
            >
              <div className="max-w-2xl space-y-6">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Innovation</span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  TANGIBLE <br/> <span className="text-white/40">MOTION.</span>
                </h2>
                <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                  Seamlessly traverse through 300 high-fidelity frames. 
                  Total control over the visual narrative, driven by your interaction.
                </p>
              </div>
            </motion.div>

            {/* Phase 3: Final Call to Action */}
            <motion.div 
              style={{ opacity: feature2Opacity, y: feature2Y }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            >
              <div className="max-w-3xl space-y-10 backdrop-blur-xl bg-white/2 p-12 md:p-20 rounded-[3rem] border border-white/10 pointer-events-auto">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                  SECURE YOUR <br/> VISION.
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button 
                    size="lg" 
                    className="h-16 px-10 rounded-full bg-primary text-black hover:bg-white transition-all font-black text-lg hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(var(--primary),0.4)]"
                  >
                    START PROJECT <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Scroll Progress Bar at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20 overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="h-full bg-primary origin-left"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all duration-700"
              >
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500 font-mono">
                  {stat.value}
                </h3>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">TRUSTED VOICES</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rivet", role: "Creative Director", text: "The interaction is simply unparalleled. It changed how we present our brand." },
              { name: "Elena K.", role: "Lead Engineer", text: "Integrating 300 frames with this level of performance was a technical milestone." },
              { name: "Marcus Stone", role: "Product Visionary", text: "A premium feel that translates directly to user trust and higher engagement." }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-10 rounded-3xl bg-white/2 border border-white/5 relative group"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-xl font-light italic text-white/80 mb-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-white flex items-center justify-center text-black font-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm tracking-tight">{t.name}</h5>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <footer className="py-40 relative overflow-hidden bg-black">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">READY TO <span className="text-primary">START?</span></h2>
            <p className="max-w-xl mx-auto text-white/50 text-lg font-light leading-relaxed">
              Join the elite tier of digital interfaces. Our protocol is open for new integrations within the next 24 hours.
            </p>
          </motion.div>
          
          <Button 
            size="lg" 
            className="h-20 px-16 rounded-full bg-white text-black hover:bg-primary transition-all font-black text-2xl hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.2)]"
          >
            EXECUTE NOW <ArrowRight className="ml-4 h-8 w-8" />
          </Button>

          <div className="pt-32 opacity-20 text-[10px] tracking-[1em] uppercase font-black">
            © 2026 VISUAL PRECISION PROTOCOL / ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
