import { motion } from "framer-motion";
import { Users, Trophy, BookOpenCheck, MapPin } from "lucide-react";

const STATS = [
  { icon: Users, value: "2000+", label: "Students Trained" },
  { icon: Trophy, value: "Band 7+", label: "Avg. IELTS Result" },
  { icon: BookOpenCheck, value: "4", label: "Career Programs" },
  { icon: MapPin, value: "6", label: "Study Destinations" },
];

export const About = () => (
  <section id="about" data-testid="about-section" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(255,0,51,0.1), #050505 70%)" }} />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <span className="text-[#FF0033] text-xs font-bold tracking-[0.3em] uppercase">About Engwish</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mt-4">
          Where Skills Meet <span className="text-[#FF0033]">Ambition</span>
        </h2>
        <p className="text-white/60 leading-relaxed mt-6">
          Engwish Skills Academy, located in the heart of Bandlaguda, Chandrayangutta, Hyderabad, is a one-stop
          institute for language mastery, global education, and academic excellence. We blend expert trainers,
          modern methodology and personal mentoring to turn every learner's ambition into achievement.
        </p>
        <p className="text-white/60 leading-relaxed mt-4">
          Whether you want to speak English with confidence, crack IELTS or Duolingo, secure admission to a
          university abroad, or top your Intermediate boards — our doors, and your future, are wide open.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            data-testid={`stat-${i}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-red-950/40 to-black/80 backdrop-blur-2xl border border-[#FF0033]/25 hover:border-[#FF0033]/60 hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <s.icon className="text-[#FF3355] mx-auto" size={26} />
            <div className="font-heading text-3xl font-bold text-white mt-3">{s.value}</div>
            <div className="text-white/50 text-sm mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
