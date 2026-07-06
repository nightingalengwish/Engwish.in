import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Play, Mic, Bot, Activity } from "lucide-react";

export const AIHero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
    <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#FF0033]/8 blur-3xl" />
    <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#FF0033]/6 blur-3xl" />
    <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#FF0033]/8 border border-[#FF0033]/20 px-4 py-1.5 text-[#E60023] text-xs font-bold tracking-wider uppercase"
        >
          <Sparkles size={14} /> Flagship Product · Engwish AI-Practice
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mt-6 leading-[1.08]"
        >
          Practice Spoken English with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0033] to-[#99001f]">AI</span> — Anytime, Anywhere
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-500 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
        >
          Master spoken English through unlimited real-life conversations with AI. Practice, improve, and build
          confidence with personalized feedback and real-time fluency assessment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-9"
        >
          <Link
            data-testid="ai-hero-start-btn"
            to="/auth"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF0033] to-[#99001f] text-white rounded-full px-8 py-4 text-sm font-bold shadow-[0_0_30px_rgba(255,0,51,0.4)] hover:shadow-[0_0_50px_rgba(255,0,51,0.65)] hover:scale-105 transition-all duration-300"
          >
            <Mic size={16} /> Start Free Practice
          </Link>
          <a
            data-testid="ai-hero-demo-btn"
            href="#ai-assessment"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF0033]/25 text-[#E60023] px-8 py-4 text-sm font-bold hover:bg-[#FF0033]/5 hover:border-[#FF0033]/50 transition-all duration-300"
          >
            <Play size={15} /> Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Live conversation mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="relative"
      >
        <div className="rounded-3xl bg-white/70 backdrop-blur-2xl border border-[#FF0033]/15 shadow-[0_25px_80px_rgba(255,0,51,0.15)] p-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#FF0033]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0033] to-[#99001f] flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-bold text-sm text-neutral-900">Engwish AI Coach</p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live conversation
                </p>
              </div>
            </div>
            <Activity size={18} className="text-[#FF0033]" />
          </div>
          <div className="space-y-4 py-5">
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#FFF7F8] border border-[#FF0033]/10 px-4 py-3 text-sm text-neutral-700">
                Hi! You're at the airport check-in counter. May I see your passport, please?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#FF0033] to-[#cc0029] px-4 py-3 text-sm text-white">
                Sure, here it is. I'd also like a window seat if available.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="rounded-2xl rounded-tl-sm bg-[#FFF7F8] border border-[#FF0033]/10 px-4 py-3">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                      className="w-2 h-2 rounded-full bg-[#FF0033]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#FFF7F8] border border-[#FF0033]/10 px-4 py-3">
            <div className="flex items-center gap-1">
              {[14, 22, 10, 26, 18, 24, 12, 20, 16, 25, 11, 19].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [h * 0.4, h, h * 0.5] }}
                  transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.07 }}
                  className="w-1 rounded-full bg-gradient-to-t from-[#99001f] to-[#FF0033]"
                  style={{ height: h }}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-[#E60023]">Listening…</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#FF0033]/15 shadow-[0_15px_40px_rgba(255,0,51,0.18)] px-5 py-3.5 flex items-center gap-3"
        >
          <div className="text-2xl font-heading font-bold text-[#FF0033]">86</div>
          <div className="text-xs text-neutral-500 leading-tight">
            Fluency Score<br />
            <span className="text-green-500 font-bold">▲ +12 this week</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
