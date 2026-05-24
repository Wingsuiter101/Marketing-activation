"use client";

import { motion } from "framer-motion";

interface Tier {
  level: string;
  label: string;
  items: string[];
}

interface PriorityMatrixProps {
  tiers: Tier[];
}

export function PriorityMatrix({ tiers }: PriorityMatrixProps) {
  const colors = [
    "from-dgo-pink/10 to-transparent border-dgo-pink/20 text-dgo-pink",
    "from-white/10 to-transparent border-white/10 text-white",
    "from-white/5 to-transparent border-white/5 text-white/50",
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {tiers.map((tier, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: index * 0.15 }}
          className={`p-8 md:p-10 rounded-[2rem] bg-gradient-to-r border backdrop-blur-xl flex flex-col md:flex-row gap-8 md:items-center ${colors[index].split(' ').slice(0, 2).join(' ')} ${colors[index].split(' ')[2]}`}
        >
          <div className="w-full md:w-1/3 flex flex-col">
            <span className={`font-mono font-bold uppercase tracking-[0.2em] text-xs ${colors[index].split(' ')[3]}`}>
              {tier.level}
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
              {tier.label}
            </h3>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-wrap gap-3">
            {tier.items.map((item, i) => (
              <span 
                key={i}
                className="px-5 py-2.5 rounded-xl bg-black/50 border border-white/5 text-white/90 text-sm md:text-base font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
