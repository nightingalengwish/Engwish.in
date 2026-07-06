import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Bot, Mic, BarChart3, Globe2, ArrowRight } from "lucide-react";

const MINI_FEATURES = [
  { icon: Bot, label: "Live AI Conversations" },
  { icon: Mic, label: "6000+ Practice Minutes" },
  { icon: Globe2, label: "500+ Real-Life Scenarios" },
  { icon: BarChart3, label: "Real-Time Fluency Scores" },
];

export const AIPracticeSection = () => (
  <section id="ai-practice" data-testid="home-ai-practice-section" className="relative py-24 px-6 bg-white overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#FF0033]/6 blur-3xl" />
    <div className="relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-[2.5rem] bg-gradient-to-br from-[#7a0019] via-[#b30026] to-[#FF0033] p-8 sm:p-14 overflow-hidden relative shadow-[0_35px_90px_rgba(255,0,51,0.3)]"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-4 py-1.5 text-white text-xs font-bold tracking-wider uppercase">
              <Sparkles size={14} /> New · Flagship Product
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-5 leading-tight">
              Engwish AI-Practice: Real-Time Spoken English with AI
            </h2>
            <p className="text-white/85 text-base mt-4 leading-relaxed max-w-lg">
              Speak with an intelligent AI coach 24×7 — 500+ real-life scenarios, instant fluency assessment and
              personalized feedback after every conversation. No fear, no judgement, just fluent English.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                data-testid="home-ai-start-btn"
                to="/auth"
                className="inline-flex items-center gap-2 bg-white text-[#E60023] rounded-full px-7 py-3.5 text-sm font-bold shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300"
              >
                <Mic size={15} /> Start Free Practice
              </Link>
              <Link
                data-testid="home-ai-explore-btn"
                to="/ai-practice"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 transition-all duration-300"
              >
                Explore AI Lab <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {MINI_FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 hover:bg-white/15 transition-colors duration-300"
              >
                <f.icon size={22} className="text-white" />
                <p className="text-white font-semibold text-sm mt-3 leading-snug">{f.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
