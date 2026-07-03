import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { ArrowRight, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { COURSES } from "../data/courses";
import { FloatingObjects } from "./FloatingObjects";

export const Hero = () => (
  <section id="home" data-testid="hero-section" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
    <div className="absolute inset-0 bg-[#050505]" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,0,51,0.25), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255,0,51,0.12), transparent 60%)" }} />
    <FloatingObjects />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#FF0033]/40 bg-[#FF0033]/10 px-5 py-2 text-xs font-semibold tracking-widest text-[#FF6680] uppercase backdrop-blur-md">
          <Sparkles size={14} /> Hyderabad's Premier Skills Institute
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mt-8 leading-[1.05]"
      >
        Speak Bold.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0033] via-[#FF3355] to-[#FF6680] drop-shadow-[0_0_30px_rgba(255,0,51,0.5)]">
          Score High.
        </span>
        <br /> Go Global.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-6"
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
          className="rounded-full px-8 py-4 font-bold text-white border border-white/25 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
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
        {COURSES.map((c) => (
          <SwiperSlide key={c.slug} style={{ width: "320px" }}>
            <Link to={`/course/${c.slug}`} data-testid={`slider-card-${c.slug}`}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-[#FF0033]/30 group">
                <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-[#FF0033] px-3 py-1 text-[11px] font-bold text-white shadow-[0_0_15px_rgba(255,0,51,0.6)]">
                  {c.tag}
                </div>
                <div className="absolute bottom-0 p-6">
                  <c.icon className="text-[#FF3355] mb-3" size={28} />
                  <h3 className="font-heading text-xl font-bold text-white leading-tight">{c.title}</h3>
                  <span className="inline-flex items-center gap-1 text-[#FF6680] text-sm font-semibold mt-2">
                    View Program <ArrowRight size={14} />
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
