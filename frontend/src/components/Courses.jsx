import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Bot, Sparkles, Activity } from "lucide-react";
import { COURSES } from "../data/courses";

const AICourseCard = ({ c }) => (
  <Link
    to={c.href}
    data-testid={`course-card-${c.slug}`}
    className="group relative block rounded-3xl overflow-hidden bg-gradient-to-br from-[#7a0019] via-[#b30026] to-[#FF0033] border border-[#FF0033]/40 shadow-[0_15px_45px_rgba(255,0,51,0.25)] hover:shadow-[0_25px_70px_rgba(255,0,51,0.4)] hover:-translate-y-1 transition-all duration-500 md:col-span-2 h-full"
  >
    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/8 blur-3xl" />

    <div className="relative grid md:grid-cols-5 gap-6 p-8 sm:p-10 items-center">
      <div className="md:col-span-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-white text-[11px] font-bold tracking-[0.2em] uppercase">
          <Sparkles size={12} /> {c.tag}
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-4 leading-tight">
          {c.title}
        </h3>
        <p className="text-white/85 text-sm sm:text-base leading-relaxed mt-3 max-w-xl">
          {c.short}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {["Live AI Coach", "500+ Scenarios", "Real-Time Scoring", "Unlimited Minutes"].map((x) => (
            <span key={x} className="rounded-full bg-white/12 border border-white/25 px-3 py-1 text-[11px] font-semibold text-white">
              {x}
            </span>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 mt-7 text-white font-bold text-sm group-hover:gap-3 transition-all">
          Enter the AI Lab
          <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={18} />
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-5">
          <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF0033] to-[#99001f] flex items-center justify-center text-white">
              <Bot size={17} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-xs text-neutral-900">Engwish AI Coach</p>
              <p className="text-[10px] text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live
              </p>
            </div>
            <Activity size={14} className="text-[#FF0033]" />
          </div>
          <div className="space-y-2 py-3">
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-[#FFF7F8] border border-[#FF0033]/10 px-3 py-2 text-[11px] text-neutral-700">
              You're at a job interview. Tell me about yourself.
            </div>
            <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-[#FF0033] to-[#cc0029] px-3 py-2 text-[11px] text-white">
              I'm a passionate learner focused on…
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#FFF7F8] border border-[#FF0033]/10 px-3 py-2 mt-2">
            <div className="text-[10px] font-bold text-neutral-500">Fluency Score</div>
            <div className="text-lg font-heading font-bold text-[#FF0033]">86</div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const StandardCourseCard = ({ c }) => (
  <Link
    to={`/course/${c.slug}`}
    data-testid={`course-card-${c.slug}`}
    className="group block relative rounded-3xl overflow-hidden bg-white border border-[#FF0033]/15 hover:border-[#FF0033]/50 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_45px_rgba(255,0,51,0.15)] hover:-translate-y-1 transition-all duration-500 h-full"
  >
    <div className="h-52 overflow-hidden relative">
      <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-md border border-[#FF0033]/30 px-3 py-1 text-[11px] font-bold text-[#E60023]">
        {c.tag}
      </div>
      {c.brands && (
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="rounded-lg bg-[#E31837] px-3 py-1.5 text-xs font-black text-white tracking-wide shadow-lg">IELTS</span>
          <span className="rounded-lg bg-[#58CC02] px-3 py-1.5 text-xs font-black text-white lowercase tracking-wide shadow-lg">duolingo</span>
        </div>
      )}
    </div>
    <div className="p-8 pt-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#FF0033]/10 border border-[#FF0033]/25 flex items-center justify-center shrink-0">
            <c.icon className="text-[#E60023]" size={22} />
          </div>
          <h3 className="font-heading text-xl font-bold text-neutral-900 leading-snug">{c.title}</h3>
        </div>
        <ArrowUpRight className="text-neutral-300 group-hover:text-[#FF0033] group-hover:rotate-45 transition-all duration-300 shrink-0 mt-1" />
      </div>
      <p className="text-neutral-500 text-sm leading-relaxed mt-4">{c.short}</p>
      {(c.countries || c.subjects) && (
        <div className="flex flex-wrap gap-2 mt-5">
          {(c.countries || c.subjects).map((x) => (
            <span key={x} className="rounded-full border border-[#FF0033]/20 bg-[#FFF0F2] px-3 py-1 text-[11px] font-medium text-neutral-700">
              {x}
            </span>
          ))}
        </div>
      )}
    </div>
  </Link>
);

export const Courses = () => (
  <section id="courses" data-testid="courses-section" className="relative py-24 sm:py-32 bg-[#FFF7F8]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#E60023] text-xs font-bold tracking-[0.3em] uppercase">Our Programs</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mt-4 max-w-2xl">
          Five Paths. <span className="text-[#E60023]">One Destination</span> — Fluency & Success.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {COURSES.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={c.variant === "ai" ? "md:col-span-2" : ""}
          >
            {c.variant === "ai" ? <AICourseCard c={c} /> : <StandardCourseCard c={c} />}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
