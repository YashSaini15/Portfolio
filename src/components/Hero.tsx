"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mail, Download, ArrowRight, MapPin, Sparkles, Zap, Star, Users } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/data/portfolio";

/* ── Stagger container ────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7 } },
};

/* ── Social config ────────────────────────────────────────────────── */
const SOCIALS = [
  { href: personal.socials.github,   Icon: GithubIcon,   label: "GitHub"   },
  { href: personal.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: personal.socials.email,    Icon: Mail,     label: "Email"    },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* ── Floating gradient blobs (Rich Tech Blue & Cyan) ───────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full
                     bg-blue-600/15 dark:bg-blue-600/15 blur-[120px] animate-float-slow"
        />
        <div
          className="absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full
                     bg-cyan-500/12 dark:bg-cyan-500/12 blur-[110px] animate-float-reverse"
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full
                     bg-indigo-600/10 dark:bg-indigo-600/10 blur-[100px] animate-float-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">

          {/* Left: Text ──────────────────────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Status & Location badges */}
            <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass border border-slate-300 dark:border-sky-400/20 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                <MapPin size={12} className="text-sky-600 dark:text-sky-400" />
                {personal.location}
              </span>
              {personal.availableForWork && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 font-mono text-xs text-sky-700 dark:text-sky-400 font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse-dot" />
                  Available for full-time roles
                </span>
              )}
            </motion.div>

            {/* Greeting */}
            <motion.div variants={item} className="inline-flex items-center gap-2 font-mono text-sky-600 dark:text-sky-400 text-sm font-semibold tracking-widest mb-3">
              <Sparkles size={14} className="animate-spin text-cyan-600 dark:text-cyan-400" style={{ animationDuration: "6s" }} />
              <span>HELLO, I&apos;M</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-[var(--font-space-grotesk)] text-4xl sm:text-6xl lg:text-7xl font-extrabold
                         text-slate-900 dark:text-white leading-[1.08] tracking-tight mb-4"
            >
              {personal.firstName}{" "}
              <span className="relative inline-block text-gradient-blue">
                {personal.lastName}
                <span
                  className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-md shadow-sky-500/40"
                  style={{ transform: "scaleX(1)", transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={item}
              className="font-[var(--font-space-grotesk)] text-lg sm:text-2xl font-semibold
                         text-slate-800 dark:text-slate-200 mb-3 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-slate-950 dark:text-white">{personal.title}</span>
              <span className="text-sky-600 dark:text-sky-400 font-normal">/</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium text-base sm:text-xl">
                {personal.subtitle}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3.5 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
                           text-white font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30
                           hover:-translate-y-0.5 group active:scale-95 shadow-md"
              >
                Explore Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           glass-card border border-sky-500/40 dark:border-sky-400/40 text-sky-700 dark:text-sky-400 hover:bg-sky-500/10
                           font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 group active:scale-95 shadow-sm"
              >
                <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           glass border border-slate-300 dark:border-white/10 hover:border-sky-500/40 dark:hover:border-sky-400/40
                           text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white font-bold text-sm
                           transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="font-mono text-xs text-slate-700 dark:text-slate-400 font-semibold mr-1 hidden sm:inline">Connect:</span>
              {SOCIALS.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass border border-slate-300 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-400/50
                             flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400
                             transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 shadow-2xs"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar with Floating Showcase Badges ───────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex-shrink-0 flex items-center justify-center"
          >
            {/* Top-Right Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-2 sm:-right-6 z-20 glass-card px-3.5 py-2 rounded-xl
                         border border-sky-500/30 dark:border-sky-400/30 flex items-center gap-2 animate-float-slow shadow-lg"
            >
              <div className="w-6 h-6 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Zap size={13} />
              </div>
              <span className="font-mono text-[11px] font-bold text-slate-900 dark:text-slate-100">
                +30% Perf Boost
              </span>
            </motion.div>

            {/* Bottom-Left Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -bottom-4 -left-2 sm:-left-8 z-20 glass-card px-3.5 py-2 rounded-xl
                         border border-blue-500/30 flex items-center gap-2 animate-float-reverse shadow-lg"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Star size={13} />
              </div>
              <span className="font-mono text-[11px] font-bold text-slate-900 dark:text-slate-100">
                Renovate OSS (18K+ ★)
              </span>
            </motion.div>

            {/* Middle Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-10 right-4 z-20 glass-card px-3 py-1.5 rounded-lg
                         border border-cyan-500/30 dark:border-cyan-400/30 items-center gap-1.5 animate-float-slow shadow-lg"
              style={{ animationDelay: "2s" }}
            >
              <Users size={12} className="text-cyan-600 dark:text-cyan-400" />
              <span className="font-mono text-[10px] font-bold text-slate-900 dark:text-slate-200">
                200K+ Users Served
              </span>
            </motion.div>

            {/* Avatar Container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              {/* Outer halo spin */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/40 dark:border-sky-400/30 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              {/* Radiant Glow */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-blue-600/20 via-sky-400/20 to-transparent blur-2xl" />
              
              {/* Inner Photo Border */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-sky-500/60 dark:border-sky-400/60 shadow-2xl">
                <Image
                  src="/avatar.jpg"
                  alt={`${personal.name} — ${personal.title}`}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                  loading="eager"
                  fetchPriority="high"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACAQAAIBBAMBAQAAAAAAAAAAAAECAAMEERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amsl1tQ3NxvDW1iI0EqpPAABpIGRlT3IG+9SRilZaFZVJPUkk9yaKKAP/2Q=="
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Ticker with edge masks ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 w-full mask-fade-x py-3.5 border-y border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-transparent"
          style={{ overflow: "hidden", maxWidth: "100%", clipPath: "inset(0)" }}
          aria-hidden
        >
          <div className="flex gap-0 w-max animate-ticker" style={{ willChange: "transform" }}>
            {[...personal.ticker, ...personal.ticker].map((text, i) => (
              <span key={i} className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 px-8 whitespace-nowrap flex items-center gap-2">
                <span className="text-sky-600 dark:text-sky-400 text-sm">✦</span>
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll hint ─────────────────────────────────────────────── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 1.8, repeat: Infinity, repeatDelay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
                   gap-1 text-slate-600 hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-400 transition-colors"
        aria-label="Scroll down to About section"
      >
        <span className="font-mono text-[10px] font-bold tracking-widest">EXPLORE</span>
        <div className="w-px h-8 bg-gradient-to-b from-sky-500 to-transparent" />
      </motion.a>
    </section>
  );
}
