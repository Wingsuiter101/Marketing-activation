"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface VerticalCardProps {
  title: string;
  icon: string;
  bigNumber?: string;
  bigNumberLabel?: string;
  reach?: string;
  breakdown?: { label: string; value: number }[];
  keyIdeas?: string[];
  keyIdeasLabel?: string;
  include?: string[];
  includeLabel?: string;
  conclusion: string;
  index: number;
}

export function VerticalCard({
  title,
  icon,
  bigNumber,
  bigNumberLabel,
  reach,
  breakdown,
  keyIdeas,
  keyIdeasLabel = "Key Placements",
  include,
  includeLabel = "Included Portals",
  conclusion,
  index,
}: VerticalCardProps) {
  const Icon = (Icons as any)[icon] || Icons.Circle;

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12">
      <div className="flex items-center gap-5 mb-2">
        <div className="p-4 rounded-2xl bg-white/5 text-white border border-white/10 backdrop-blur-md">
          <Icon size={36} strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {bigNumber && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-dgo-violet/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter relative z-10">
              {bigNumber}
            </div>
            {bigNumberLabel && (
              <div className="text-lg md:text-xl text-foreground-muted font-medium mt-2 uppercase tracking-widest relative z-10">
                {bigNumberLabel}
              </div>
            )}
            {reach && (
              <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dgo-pink/10 border border-dgo-pink/20 text-dgo-pink text-sm font-bold tracking-wide w-fit relative z-10">
                <Icons.TrendingUp size={18} />
                {reach}
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {breakdown && (
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex-1">
              <h3 className="text-xs text-foreground-muted uppercase tracking-[0.2em] mb-6 font-semibold">Breakdown</h3>
              <div className="space-y-4">
                {breakdown.map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                    <span className="font-mono text-white font-bold bg-white/10 px-3 py-1 rounded-lg">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {keyIdeas && (
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex-1">
              <h3 className="text-xs text-foreground-muted uppercase tracking-[0.2em] mb-6 font-semibold">{keyIdeasLabel}</h3>
              <div className="flex flex-wrap gap-3">
                {keyIdeas.map((idea, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-white/5 text-sm text-white/90 border border-white/10 font-medium">
                    {idea}
                  </span>
                ))}
              </div>
            </div>
          )}

          {include && (
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex-1">
              <h3 className="text-xs text-foreground-muted uppercase tracking-[0.2em] mb-6 font-semibold">{includeLabel}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {include.map((item, i) => (
                  <span key={i} className="text-sm text-white/60 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
        className="mt-4 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl"
      >
        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
          {conclusion}
        </p>
      </motion.div>
    </div>
  );
}
