"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, personal } from "@/data/portfolio";
import { Mail, Phone, Copy, Check, ArrowUpRight, Download, MapPin, Clock, MessageSquare, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="section-py relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          index="06"
          label="Get In Touch"
          subtitle="Ready to build scalable web products and impactful user experiences."
        />

        <div className="max-w-4xl mx-auto space-y-8">

          {/* ── Main Connect Spotlight Card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-sky-500/30 dark:border-sky-400/30 text-center relative overflow-hidden shadow-xl"
          >
            {/* Top Accent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 dark:border-sky-400/30 text-sky-700 dark:text-sky-400 font-mono text-xs font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              Available for Full-Time Roles &amp; Collaborations
            </div>

            <h3 className="font-[var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
              Let&apos;s build something <span className="text-gradient-blue">extraordinary</span> together.
            </h3>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              I am actively looking for software engineering opportunities where I can apply my expertise in performant frontend systems, scalable React architectures, and modern web engineering.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={personal.socials.email}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                           bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
                           text-white font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30
                           hover:-translate-y-0.5 active:scale-95 shadow-md"
              >
                <Mail size={16} />
                <span>Send an Email</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                           glass-card border border-slate-300 dark:border-white/10 hover:border-sky-500/40 dark:hover:border-sky-400/40
                           text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white font-bold text-sm
                           transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
              >
                <Download size={15} className="text-sky-600 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* ── Direct Channels Grid ──────────────────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Email Channel Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-300 dark:border-white/8 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 dark:border-sky-400/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform shadow-xs">
                  <Mail size={22} />
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, "email")}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-sky-500/10 border border-slate-300 dark:border-white/10 hover:border-sky-500/30 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-mono transition-all flex items-center gap-1.5 shrink-0"
                  aria-label="Copy email"
                >
                  {copiedType === "email" ? (
                    <>
                      <Check size={13} className="text-sky-600 dark:text-sky-400" />
                      <span className="text-sky-600 dark:text-sky-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="font-semibold">Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  Email Address
                </p>
                <a
                  href={personal.socials.email}
                  className="text-base sm:text-lg font-bold font-[var(--font-space-grotesk)] text-slate-950 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all flex items-center gap-1.5"
                >
                  <span>{personal.email}</span>
                  <ArrowUpRight size={14} className="shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>

            {/* Phone Channel Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-slate-300 dark:border-white/8 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 dark:border-blue-400/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shadow-xs">
                  <Phone size={22} />
                </div>
                <button
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-sky-500/10 border border-slate-300 dark:border-white/10 hover:border-sky-500/30 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-mono transition-all flex items-center gap-1.5 shrink-0"
                  aria-label="Copy phone"
                >
                  {copiedType === "phone" ? (
                    <>
                      <Check size={13} className="text-sky-600 dark:text-sky-400" />
                      <span className="text-sky-600 dark:text-sky-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="font-semibold">Copy Phone</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href={personal.socials.phone}
                  className="text-base sm:text-lg font-bold font-[var(--font-space-grotesk)] text-slate-950 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>{personal.phone}</span>
                  <ArrowUpRight size={14} className="shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 border border-slate-300 dark:border-white/8 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 dark:border-sky-400/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform shadow-xs">
                  <LinkedinIcon size={22} />
                </div>
                <span className="font-mono text-[11px] text-slate-700 dark:text-slate-400 font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/5">
                  Professional Network
                </span>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  LinkedIn Profile
                </p>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold font-[var(--font-space-grotesk)] text-slate-950 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>linkedin.com/in/sainiyash</span>
                  <ArrowUpRight size={14} className="shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 border border-slate-300 dark:border-white/8 hover:border-sky-500/35 dark:hover:border-sky-400/35 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform shadow-xs">
                  <GithubIcon size={22} />
                </div>
                <span className="font-mono text-[11px] text-slate-700 dark:text-slate-400 font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/5">
                  Open Source &amp; Code
                </span>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  GitHub Profile
                </p>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold font-[var(--font-space-grotesk)] text-slate-950 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>github.com/YashSaini15</span>
                  <ArrowUpRight size={14} className="shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* ── Location & Timezone Bar ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="glass rounded-2xl px-6 py-4 border border-slate-300 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs"
          >
            <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200 font-semibold text-sm">
              <MapPin size={16} className="text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Based in {personal.location} · Open to Remote &amp; Hybrid roles</span>
            </div>

            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-400 font-mono text-xs font-semibold">
              <Clock size={14} className="text-sky-600 dark:text-sky-400 shrink-0" />
              <span>IST Timezone (UTC +5:30)</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
