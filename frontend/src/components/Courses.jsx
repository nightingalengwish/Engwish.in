import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { COURSES } from "../data/courses";

export const Courses = () => (
  <section id="courses" data-testid="courses-section" className="relative py-24 sm:py-32 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#FF0033] text-xs font-bold tracking-[0.3em] uppercase">Our Programs</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mt-4 max-w-2xl">
          Four Paths. <span className="text-[#FF0033]">One Destination</span> — Success.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {COURSES.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <Link
              to={`/course/${c.slug}`}
              data-testid={`course-card-${c.slug}`}
              className="group block relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-950/40 to-black/90 backdrop-blur-2xl border border-[#FF0033]/25 hover:border-[#FF0033]/70 hover:shadow-[0_8px_50px_rgba(255,0,51,0.25)] transition-all duration-500 h-full"
            >
              <div className="h-52 overflow-hidden relative">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0304] to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md border border-[#FF0033]/40 px-3 py-1 text-[11px] font-bold text-[#FF6680]">
                  {c.tag}
                </div>
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-[#FF0033]/15 border border-[#FF0033]/30 flex items-center justify-center shrink-0">
                      <c.icon className="text-[#FF3355]" size={22} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white leading-snug">{c.title}</h3>
                  </div>
                  <ArrowUpRight className="text-white/30 group-hover:text-[#FF0033] group-hover:rotate-45 transition-all duration-300 shrink-0 mt-1" />
                </div>
                <p className="text-white/55 text-sm leading-relaxed mt-4">{c.short}</p>
                {(c.countries || c.subjects) && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {(c.countries || c.subjects).map((x) => (
                      <span key={x} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                        {x}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
