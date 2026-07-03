import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const Logo = () => {
  const { scrollYProgress } = useScroll();
  const bgX = useTransform(scrollYProgress, [0, 1], ["0px", "-384px"]);

  return (
    <Link to="/" data-testid="brand-logo" className="flex items-center gap-3 group">
      <div className="relative h-12 w-12 shrink-0">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: "url(/logo-icon.png)",
            backgroundSize: "48px 48px",
            backgroundRepeat: "repeat-x",
            backgroundPositionX: bgX,
            backgroundColor: "#ffffff",
            boxShadow: "inset -10px -8px 16px rgba(0,0,0,0.35), inset 6px 6px 12px rgba(255,255,255,0.65), 0 6px 16px rgba(255,0,51,0.35)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 32% 25%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 28%, rgba(255,255,255,0) 48%)" }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ top: "9%", left: "18%", width: "34%", height: "20%", background: "rgba(255,255,255,0.95)", filter: "blur(3px)", transform: "rotate(-25deg)" }}
        />
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 50%, transparent 58%, rgba(0,0,0,0.18) 92%, rgba(0,0,0,0.35) 100%)" }}
        />
      </div>
      <img src="/logo-wordmark.png" alt="Engwish Skills Academy" className="h-8 w-auto object-contain" />
    </Link>
  );
};
