"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  delay?: number;
  className?: string;
}

export function StatCard({ label, value, delay = 0, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl",
        "hover:bg-white/[0.04] transition-colors",
        className
      )}
    >
      <span className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-3 tracking-tight">
        {value}
      </span>
      <span className="text-xs md:text-sm text-foreground-muted font-semibold text-center uppercase tracking-[0.2em]">
        {label}
      </span>
    </motion.div>
  );
}
