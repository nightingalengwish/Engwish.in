import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mic, Play } from "lucide-react";

export const AICTA = () => (
  <section className="py-20 px-6 bg-white">
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative max-w-6xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#7a0019] via-[#b30026] to-[#FF0033] px-8 py-16 sm:px-16 text-center overflow-hidden shadow-[0_35px_90px_rgba(255,0,51,0.35)]"
      data-testid="ai-cta-section"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <h2 className="relative font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Start Speaking English with AI Today
      </h2>
      <p className="relative text-white/85 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
        Practice anytime, anywhere with thousands of AI-powered conversations designed to improve your spoken English,
        confidence, and fluency.
      </p>
      <div className="relative flex flex-wrap justify-center gap-4 mt-10">
        <Link
          data-testid="ai-cta-start-btn"
          to="/auth"
          className="inline-flex items-center gap-2 bg-white text-[#E60023] rounded-full px-9 py-4 text-sm font-bold shadow-[0_10px_35px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
        >
          <Mic size={16} /> Start Free Practice
        </Link>
        <a
          data-testid="ai-cta-demo-btn"
          href="#ai-assessment"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-9 py-4 text-sm font-bold hover:bg-white/10 hover:border-white/70 transition-all duration-300"
        >
          <Play size={15} /> Watch Demo
        </a>
      </div>
    </motion.div>
  </section>
);
