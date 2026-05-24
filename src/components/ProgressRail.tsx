"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressRailProps {
  sections: string[];
}

export function ProgressRail({ sections }: ProgressRailProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((id, index) => (
        <button
          key={id}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative flex items-center justify-end group"
        >
          <span
            className={`absolute right-8 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
              activeSection === index
                ? "opacity-100 text-white translate-x-0"
                : "opacity-0 text-white/50 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {id.replace(/-/g, " ")}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-dgo-pink scale-150 shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                : "bg-white/20 group-hover:bg-white/50"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
