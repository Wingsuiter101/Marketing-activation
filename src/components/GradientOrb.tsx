"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "violet" | "pink" | "orange" | "red";
}

export function GradientOrb({ className, color = "violet" }: GradientOrbProps) {
  const colorMap = {
    violet: "bg-dgo-violet/20",
    pink: "bg-dgo-pink/20",
    orange: "bg-dgo-orange/20",
    red: "bg-dgo-red/20",
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none -z-10",
        colorMap[color],
        className
      )}
    />
  );
}
