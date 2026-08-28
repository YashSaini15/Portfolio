"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";
import { GraduationCap, Award, Calendar, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-py relative overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full min-w-0">
        <SectionHeading
          index="05"
          label="Education & Certifications"
          subtitle="Foundational computer science engineering background and specialized certifications."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {/* ── Degree ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-5 sm:p-7 border border-sky-500/30 dark:border-sky-400/35 relative overflow-hidden shadow-sm"
          >
            {/* Accent corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/5 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-500/15 border border-sky-500/25 dark:border-sky-400/30
                              flex items-center justify-center shrink-0 text-sky-600 dark:text-sky-400 shadow-sm">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-[var(--font-space-grotesk)] font-bold text-slate-950 dark:text-white text-base sm:text-xl leading-snug">
                  {education.degree.title}
                </h3>
                <p className="text-sky-700 dark:text-sky-400 font-semibold text-xs sm:text-sm mt-1 leading-snug">
                  {education.degree.institution}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/5">
                    <Calendar size={11} className="text-sky-600 dark:text-sky-400 shrink-0" />
                    {education.degree.period}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
                    📍 {education.degree.location}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 dark:border-sky-400/30
                                   font-mono text-xs font-bold text-sky-700 dark:text-sky-400">
                    {education.degree.grade}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Certifications ────────────────────────────────────── */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs text-slate-700 dark:text-slate-400 font-bold tracking-widest uppercase px-1 flex items-center gap-1.5">
              <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
              Verified Certifications
            </h4>
            <div className="grid gap-3">
              {education.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="glass-card rounded-xl p-4 sm:px-5 sm:py-4 border border-slate-300 dark:border-white/8 hover:border-sky-500/30 dark:hover:border-sky-400/30
                             transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 group shadow-xs"
                >
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/25 dark:border-blue-400/25
                                    flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform mt-0.5 sm:mt-0">
                      <Award size={17} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-950 dark:text-white font-bold text-sm leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {cert.title}
                      </p>
                      <p className="text-slate-700 dark:text-slate-400 text-xs mt-0.5 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center self-start sm:self-auto pl-12 sm:pl-0 shrink-0">
                    <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-transparent">
                      {cert.date}
                    </span>
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
