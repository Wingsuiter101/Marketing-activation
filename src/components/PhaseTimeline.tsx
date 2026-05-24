"use client";

import { motion } from "framer-motion";

interface PhaseTimelineProps {
  phases: string[];
}

export function PhaseTimeline({ phases }: PhaseTimelineProps) {
  return (
    <div className="w-full py-8 relative">
      {/* Connecting Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 md:-translate-x-1/2" />
      
      <div className="flex flex-col gap-8 md:gap-16 relative z-10">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Box */}
            <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} pl-16 md:pl-0`}>
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl w-full md:w-10/12 relative group hover:bg-white/[0.04] transition-colors">
                <div className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-3">Phase 0{index + 1}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{phase}</h3>
              </div>
            </div>

            {/* Center Node */}
            <div className="absolute left-[1.35rem] md:left-1/2 w-3 h-3 rounded-full bg-white md:-translate-x-1/2 mt-10 md:mt-0 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
