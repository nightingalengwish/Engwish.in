import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const Logo = () => {
  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  return (
    <Link to="/" data-testid="brand-logo" className="flex items-center gap-3 group">
      <div style={{ perspective: "600px" }} className="shrink-0">
        <motion.div
          style={{ rotateY, transformStyle: "preserve-3d" }}
          className="relative h-12 w-12 rounded-full"
        >
          <img
            src="/logo-icon.png"
            alt="Engwish logo"
            className="h-full w-full object-contain"
            style={{ filter: "drop-shadow(0 4px 10px rgba(255,0,51,0.35))" }}
          />
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle at 30% 22%, rgba(255,255,255,0.55), rgba(255,255,255,0.12) 38%, transparent 60%)" }}
          />
        </motion.div>
      </div>
      <img src="/logo-wordmark.png" alt="Engwish Skills Academy" className="h-8 w-auto object-contain" />
    </Link>
  );
};
