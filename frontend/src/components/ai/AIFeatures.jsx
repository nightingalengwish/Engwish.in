import { motion } from "framer-motion";
import { AI_FEATURES, AI_STATS } from "../../data/aiPractice";
import { CountUp } from "./CountUp";

export const AIFeatures = () => (
  <section className="py-20 px-6 bg-[#FFF7F8]">
    <div className="max-w-7xl mx-auto">
      <p className="text-[#E60023] text-xs font-bold tracking-widest uppercase">Why learners love it</p>
      <h2 className="font-heading text-base md:text-lg font-bold text-neutral-900 mt-2 sm:text-3xl">
        Everything you need to speak fluent English
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {AI_FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            data-testid={`ai-feature-card-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/10 p-7 shadow-[0_8px_30px_rgba(255,0,51,0.06)] hover:shadow-[0_20px_50px_rgba(255,0,51,0.15)] hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF0033] to-[#99001f] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(255,0,51,0.3)] group-hover:scale-110 transition-transform duration-300">
              <f.icon size={22} />
            </div>
            <h3 className="font-heading font-bold text-neutral-900 mt-5 text-lg">{f.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mt-3">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const AIStats = () => (
  <section className="py-16 px-6 bg-gradient-to-r from-[#99001f] via-[#cc0029] to-[#FF0033]">
    <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
      {AI_STATS.map((s, i) => (
        <motion.div
          key={s.label}
          data-testid={`ai-stat-${i}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="font-heading text-4xl sm:text-5xl font-bold text-white">
            <CountUp value={s.value} suffix={s.suffix} />
          </div>
          <p className="text-white/80 text-sm mt-2 font-medium">{s.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
