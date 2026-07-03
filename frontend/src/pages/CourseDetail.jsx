import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock, MonitorSmartphone, CalendarDays, Phone } from "lucide-react";
import { COURSES, PHONE } from "../data/courses";
import { FloatingObjects } from "../components/FloatingObjects";

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-20">
        <p className="text-white/60">Course not found.</p>
        <Link to="/" className="text-[#FF3355] font-semibold">Back to Home</Link>
      </div>
    );
  }

  const Icon = course.icon;
  const META = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: MonitorSmartphone, label: "Mode", value: course.mode },
    { icon: CalendarDays, label: "Batches", value: course.batch },
  ];

  return (
    <main data-testid="course-detail-page" className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/75 to-black/55" />
        </div>
        <FloatingObjects />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
          <button data-testid="back-to-home-btn" onClick={() => navigate("/")} className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </button>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="h-16 w-16 rounded-2xl bg-[#FF0033]/20 border border-[#FF0033]/40 backdrop-blur-xl flex items-center justify-center mb-6">
              <Icon className="text-[#FF3355]" size={30} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white max-w-3xl leading-[1.05]">
              {course.title}
            </h1>
            <p className="text-white/65 max-w-2xl mt-6 leading-relaxed">{course.detail}</p>
            {(course.countries || course.subjects) && (
              <div className="flex flex-wrap gap-2 mt-7">
                {(course.countries || course.subjects).map((x) => (
                  <span key={x} className="rounded-full border border-[#FF0033]/40 bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white">
                    {x}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {META.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl p-6 bg-gradient-to-br from-red-950/30 to-black/80 border border-[#FF0033]/25 flex items-center gap-4"
              >
                <m.icon className="text-[#FF3355] shrink-0" size={24} />
                <div>
                  <div className="text-white/45 text-xs uppercase tracking-wider">{m.label}</div>
                  <div className="text-white font-semibold text-sm mt-0.5">{m.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-20">
            What You'll <span className="text-[#FF0033]">Get</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {course.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-2xl p-5 bg-white/[0.04] border border-white/10 hover:border-[#FF0033]/50 transition-colors duration-300"
              >
                <CheckCircle2 className="text-[#FF0033] shrink-0 mt-0.5" size={19} />
                <span className="text-white/75 text-sm leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-[#FF0033]/20 via-red-950/40 to-black border border-[#FF0033]/35 text-center relative overflow-hidden"
          >
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">Ready to enrol?</h3>
            <p className="text-white/60 mt-3 max-w-lg mx-auto">Book your free counselling session today and take the first step towards your goal.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/"
                state={{ scrollTo: "contact" }}
                data-testid="detail-enquire-btn"
                className="bg-gradient-to-r from-[#FF0033] to-[#99001f] text-white rounded-full px-8 py-4 font-bold shadow-[0_0_25px_rgba(255,0,51,0.5)] hover:shadow-[0_0_45px_rgba(255,0,51,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
              >
                Enquire Now
              </Link>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                data-testid="detail-call-btn"
                className="rounded-full px-8 py-4 font-bold text-white border border-white/25 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={17} /> {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
