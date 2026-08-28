"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TermIcon } from "lucide-react";
import { terminalCommands, personal } from "@/data/portfolio";

type HistoryEntry = { type: "input" | "output"; text: string };

export default function Terminal() {
  const [open, setOpen]           = useState(false);
  const [input, setInput]         = useState("");
  const [history, setHistory]     = useState<HistoryEntry[]>([
    { type: "output", text: `Welcome to ${personal.firstName}'s terminal. Type "help" for available commands.` },
  ]);
  const inputRef  = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: / or Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) ||
        (e.ctrlKey && e.key === "k")
      ) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const result = terminalCommands[trimmed];
    const newEntries: HistoryEntry[] = [{ type: "input", text: `$ ${cmd}` }];

    if (result === "__CLEAR__") {
      setHistory([{ type: "output", text: "Terminal cleared." }]);
      return;
    } else if (result) {
      newEntries.push({ type: "output", text: result });
    } else {
      newEntries.push({
        type: "output",
        text: `Command not found: "${trimmed}". Type "help" for available commands.`,
      });
    }

    setHistory((h) => [...h, ...newEntries]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white
                   flex items-center justify-center shadow-lg shadow-blue-500/30
                   hover:from-blue-500 hover:to-sky-300 transition-all focus-visible:outline-none hover:scale-105 active:scale-95"
        aria-label="Open terminal (press / or Ctrl+K)"
        title="Open terminal  ( / or Ctrl+K )"
      >
        <TermIcon size={20} />
      </motion.button>

      {/* Terminal modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         z-[60] w-[90vw] max-w-2xl rounded-2xl overflow-hidden
                         bg-[#070b16] border border-sky-400/30 shadow-2xl shadow-blue-500/15"
              role="dialog"
              aria-label="Interactive terminal"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0b1022] border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-sky-400 opacity-80" />
                <span className="ml-4 font-mono text-xs text-slate-400">
                  yash@portfolio:~
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto text-slate-400 hover:text-white transition-colors"
                  aria-label="Close terminal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Output */}
              <div className="terminal-font h-72 overflow-y-auto p-4 space-y-1">
                {history.map((entry, i) => (
                  <div
                    key={i}
                    className={
                      entry.type === "input"
                        ? "text-sky-400"
                        : "text-slate-300 whitespace-pre-wrap"
                    }
                  >
                    {entry.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 px-4 py-3 border-t border-white/5 bg-[#050711]"
              >
                <span className="terminal-font text-sky-400">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent terminal-font text-slate-200 outline-none
                             placeholder:text-slate-500"
                  placeholder="type a command..."
                  autoComplete="off"
                  spellCheck="false"
                />
                <span className="animate-cursor terminal-font text-sky-400 select-none">▋</span>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
