"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;        // e.g. "01"
  label: string;        // e.g. "Skills"
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  label,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="font-mono text-xs tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase font-semibold">
        {index} / {label}
      </span>
      <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight font-[var(--font-space-grotesk)]">
        {label}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-[2px] w-20 bg-gradient-to-r from-blue-600 via-sky-500 to-transparent",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
