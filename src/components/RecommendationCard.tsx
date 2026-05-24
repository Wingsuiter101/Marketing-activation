"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RecommendationCardProps {
  headline: string;
  copy: string;
  cta: string;
}

export function RecommendationCard({ headline, copy, cta }: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-full relative p-12 md:p-20 rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dgo-violet/10 via-transparent to-dgo-pink/10 opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 tracking-tight">
          {headline}
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground-muted font-light leading-relaxed mb-12">
          {copy}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg md:text-xl transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          {cta}
          <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
}
