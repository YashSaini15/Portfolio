"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";
import { MapPin, Calendar, Building2, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section-py relative overflow-hidden w-full max-w-full">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full min-w-0">
        <SectionHeading
          index="02"
          label="Work Experience"
          subtitle="Hands-on software development experience building production systems."
        />

        <div className="max-w-3xl mx-auto" ref={containerRef}>
          {/* ── Scroll-synced timeline line ──────────────────────── */}
          <div className="relative">
            {/* Background track */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/10" />
            {/* Animated blue/sky fill */}
            <motion.div
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400/0 origin-top shadow-[0_0_12px_rgba(56,189,248,0.5)]"
              style={{ scaleY, height: "100%" }}
            />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Dot connector node */}
                  <div className="absolute left-[17px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#050711]
                                  border-2 border-sky-500 dark:border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/25">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse-dot" />
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-300 dark:border-white/8 hover:border-sky-500/40 dark:hover:border-sky-400/35 transition-all duration-300 shadow-sm">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-white/5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs text-sky-700 dark:text-sky-400 font-bold px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 dark:border-sky-400/25">
                            Current Role
                          </span>
                        </div>
                        <h3 className="font-[var(--font-space-grotesk)] font-bold text-slate-950 dark:text-white text-xl leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sky-700 dark:text-sky-400 font-semibold text-sm mt-1 flex items-center gap-1.5">
                          <Building2 size={14} />
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 font-mono text-xs text-slate-700 dark:text-slate-300">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/5 font-semibold text-slate-800 dark:text-slate-200">
                          <Calendar size={12} className="text-sky-600 dark:text-sky-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-400 text-[11px] font-medium">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: bi * 0.06 }}
                          className="flex items-start gap-2.5 text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-normal"
                        >
                          <CheckCircle2 size={15} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/30 dark:border-sky-400/25
                                     text-sky-800 dark:text-sky-300 font-mono text-xs hover:bg-sky-500/20 transition-colors font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
