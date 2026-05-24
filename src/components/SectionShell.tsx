"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-[100svh] w-full flex flex-col justify-center items-center relative snap-start snap-always py-16 px-6 md:px-12 lg:px-24 overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl mx-auto z-10 flex flex-col h-full justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
