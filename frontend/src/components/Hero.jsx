import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { ArrowRight, Sparkles, Bot, Mic } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { COURSES } from "../data/courses";
import { FloatingObjects } from "./FloatingObjects";

export const Hero = () => (
  <section id="home" data-testid="hero-section" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
    <div className="absolute inset-0 bg-white" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,0,51,0.12), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255,0,51,0.07), transparent 60%)" }} />
    <FloatingObjects />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#FF0033]/30 bg-[#FF0033]/[0.07] px-5 py-2 text-xs font-semibold tracking-widest text-[#E60023] uppercase backdrop-blur-md">
          <Sparkles size={14} /> Hyderabad's Premier Skills Institute
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 mt-8 leading-[1.05]"
      >
        Speak Bold.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF0033] to-[#FF3355] drop-shadow-[0_0_25px_rgba(255,0,51,0.25)]">
          Score High.
        </span>
        <br /> Go Global.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto mt-6"
      >
        From fluent English and IELTS band scores to studying abroad and acing your Intermediate boards —
        Engwish Skills Academy builds the skills that shape your future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <button
          data-testid="hero-explore-btn"
          onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-gradient-to-r from-[#FF0033] to-[#99001f] text-white rounded-full px-8 py-4 font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,51,0.5)] hover:shadow-[0_0_45px_rgba(255,0,51,0.8)] hover:scale-105 transition-all duration-300 border border-white/20 flex items-center gap-2"
        >
          Explore Programs <ArrowRight size={18} />
        </button>
        <button
          data-testid="hero-enquire-btn"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-full px-8 py-4 font-bold text-neutral-900 border border-[#FF0033]/30 bg-white shadow-sm hover:bg-[#FF0033]/5 hover:scale-105 transition-all duration-300"
        >
          Enquire Now
        </button>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="relative mt-16 w-full"
      data-testid="hero-3d-slider"
    >
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        slidesPerView="auto"
        coverflowEffect={{ rotate: 35, stretch: 0, depth: 220, modifier: 1, slideShadows: true }}
        className="hero-swiper"
      >
        {[...COURSES, ...COURSES].map((c, i) => (
          <SwiperSlide key={`${c.slug}-${i}`} style={{ width: "320px" }}>
            <Link to={c.href || `/course/${c.slug}`} data-testid={`slider-card-${c.slug}`}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-[#FF0033]/30 group">
                {c.variant === "ai" ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a0019] via-[#b30026] to-[#FF0033]">
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-white/8 blur-3xl" />
                    <div className="relative h-full flex flex-col items-center justify-center px-6">
                      <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                        <Bot className="text-white" size={38} />
                      </div>
                      <div className="mt-5 flex items-center gap-1.5">
                        {[14, 22, 10, 26, 18, 24, 12, 20, 16].map((h, k) => (
                          <span key={k} className="w-1 rounded-full bg-white/70" style={{ height: h }} />
                        ))}
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur border border-white/30 px-3 py-1 text-white text-[10px] font-bold tracking-widest uppercase">
                        <Mic size={11} /> Live · AI Coach
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </>
                )}
                <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-bold shadow-[0_0_15px_rgba(255,0,51,0.6)] ${c.variant === "ai" ? "bg-white text-[#E60023]" : "bg-[#FF0033] text-white"}`}>
                  {c.tag}
                </div>
                <div className="absolute bottom-0 p-6">
                  <c.icon className={c.variant === "ai" ? "text-white mb-3" : "text-[#FF3355] mb-3"} size={28} />
                  <h3 className="font-heading text-xl font-bold text-white leading-tight">{c.title}</h3>
                  <span className={`inline-flex items-center gap-1 text-sm font-semibold mt-2 ${c.variant === "ai" ? "text-white" : "text-[#FF6680]"}`}>
                    {c.variant === "ai" ? "Enter AI Lab" : "View Program"} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </section>
);
