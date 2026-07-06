import { motion } from "framer-motion";
import { AI_SKILLS } from "../../data/aiPractice";
import { CircularGauge } from "./CircularGauge";

export const AIAssessment = () => (
  <section id="ai-assessment" className="py-20 px-6 bg-[#FFF7F8]">
    <div className="max-w-7xl mx-auto">
      <p className="text-[#E60023] text-xs font-bold tracking-widest uppercase">Real-Time AI Assessment</p>
      <h2 className="font-heading text-base md:text-lg font-bold text-neutral-900 mt-2 sm:text-3xl">
        Know exactly how well you speak — while you speak
      </h2>
      <div className="grid lg:grid-cols-5 gap-8 mt-12 items-stretch">
        {/* Overall score card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#99001f] to-[#FF0033] p-8 text-white shadow-[0_25px_60px_rgba(255,0,51,0.3)] flex flex-col items-center justify-center"
          data-testid="ai-overall-score-card"
        >
          <p className="text-white/80 text-sm font-medium tracking-wide uppercase">Overall Score</p>
          <div className="relative my-6" style={{ width: 170, height: 170 }}>
            <svg width="170" height="170" className="-rotate-90">
              <circle cx="85" cy="85" r="76" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="11" />
              <motion.circle
                cx="85" cy="85" r="76" fill="none" stroke="#ffffff" strokeWidth="11" strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 76}
                initial={{ strokeDashoffset: 2 * Math.PI * 76 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 76 * (1 - 0.86) }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-heading text-5xl font-bold">86</span>
              <span className="text-white/70 text-sm">/100</span>
            </div>
          </div>
          <p className="text-white/85 text-sm text-center leading-relaxed">
            Your AI coach evaluates every sentence you speak and updates your score live.
          </p>
        </motion.div>

        {/* Skill gauges + bars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/12 p-8 shadow-[0_15px_40px_rgba(255,0,51,0.08)]"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
            {AI_SKILLS.slice(0, 4).map((s, i) => (
              <CircularGauge key={s.label} score={s.score} label={s.label} delay={i * 0.12} />
            ))}
          </div>
          <div className="space-y-4 mt-8">
            {AI_SKILLS.slice(4).map((s, i) => (
              <div key={s.label} data-testid={`ai-skill-bar-${s.label.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold text-neutral-700">{s.label}</span>
                  <span className="font-bold text-[#E60023]">{s.score}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-[#FF0033]/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#FF0033] to-[#99001f]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-6">
            Assessed live: Fluency · Pronunciation · Grammar · Vocabulary · Listening · Sentence Formation · Confidence · Speaking Speed
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);
