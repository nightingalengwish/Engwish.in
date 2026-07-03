import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const LogoShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-180, 0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.3, 1, 1.15, 1, 0.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0]);
  const glow = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const wordY = useTransform(scrollYProgress, [0.35, 0.55], [60, 0]);
  const wordOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.8, 1], [0, 1, 1, 0]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const ringScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.6, 1.3, 0.6]);

  return (
    <section ref={ref} data-testid="logo-showcase-section" className="relative h-[220vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
        <motion.div
          className="absolute h-[520px] w-[520px] rounded-full border-2 border-dashed border-[#FF0033]/20"
          style={{ rotate: ringRotate, scale: ringScale }}
        />
        <motion.div
          className="absolute h-[380px] w-[380px] rounded-full border border-[#FF0033]/30"
          style={{ rotate: useTransform(ringRotate, (v) => -v), scale: ringScale }}
        />
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full"
          style={{ opacity: glow, background: "radial-gradient(circle, rgba(255,0,51,0.18), transparent 65%)" }}
        />

        <div className="relative text-center">
          <motion.img
            src="/logo-icon.png"
            alt="Engwish logo"
            className="h-44 w-44 sm:h-56 sm:w-56 mx-auto"
            style={{ rotateY, scale, opacity, transformStyle: "preserve-3d", filter: "drop-shadow(0 20px 45px rgba(255,0,51,0.3))" }}
          />
          <motion.img
            src="/logo-wordmark.png"
            alt="Engwish Skills Academy"
            className="h-12 sm:h-16 w-auto mx-auto mt-10"
            style={{ y: wordY, opacity: wordOpacity }}
          />
          <motion.p
            className="font-heading font-semibold text-neutral-400 tracking-[0.4em] uppercase text-xs sm:text-sm mt-6"
            style={{ opacity: wordOpacity }}
          >
            Learn · Speak · Achieve
          </motion.p>
        </div>
      </div>
    </section>
  );
};
