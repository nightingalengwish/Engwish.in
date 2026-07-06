import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { AI_COMPARISON, AI_STEPS } from "../../data/aiPractice";

export const AIComparison = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <p className="text-[#E60023] text-xs font-bold tracking-widest uppercase">The Engwish Advantage</p>
      <h2 className="font-heading text-base md:text-lg font-bold text-neutral-900 mt-2 sm:text-3xl">
        Why choose Engwish AI-Practice
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-testid="ai-comparison-traditional"
          className="rounded-3xl bg-neutral-50 border border-neutral-200 p-8"
        >
          <h3 className="font-heading font-bold text-neutral-500 text-lg">Traditional English Classes</h3>
          <ul className="space-y-4 mt-6">
            {AI_COMPARISON.traditional.map((item) => (
              <li key={item} className="flex items-center gap-3 text-neutral-500 text-sm">
                <span className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                  <X size={13} className="text-neutral-500" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          data-testid="ai-comparison-engwish"
          className="relative rounded-3xl bg-gradient-to-br from-[#99001f] to-[#FF0033] p-8 text-white shadow-[0_25px_60px_rgba(255,0,51,0.3)] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-lg">Engwish AI-Practice</h3>
            <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-[11px] font-bold tracking-wider uppercase">Recommended</span>
          </div>
          <ul className="space-y-4 mt-6">
            {AI_COMPARISON.engwish.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check size={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export const AIHowItWorks = () => (
  <section className="py-20 px-6 bg-[#FFF7F8]">
    <div className="max-w-7xl mx-auto">
      <p className="text-[#E60023] text-xs font-bold tracking-widest uppercase">How it works</p>
      <h2 className="font-heading text-base md:text-lg font-bold text-neutral-900 mt-2 sm:text-3xl">
        From sign-up to fluent speaking in 4 steps
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {AI_STEPS.map((s, i) => (
          <motion.div
            key={s.step}
            data-testid={`ai-step-${i + 1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/10 p-7 shadow-[0_8px_30px_rgba(255,0,51,0.06)] hover:shadow-[0_18px_45px_rgba(255,0,51,0.14)] hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-heading text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FF0033]/30 to-[#FF0033]/5">
              {s.step}
            </span>
            <h3 className="font-heading font-bold text-neutral-900 mt-3">{s.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
