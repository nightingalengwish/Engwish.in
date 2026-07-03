import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const Logo = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 2500], [0, 1080]);

  return (
    <Link to="/" data-testid="brand-logo" className="flex items-center gap-3 group">
      <motion.div
        style={{ rotate }}
        className="relative h-12 w-12 rounded-full shrink-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 32% 26%, #ffffff 0%, #fdfdfd 35%, #ececec 70%, #d8d8d8 100%)",
            boxShadow: "inset -5px -7px 12px rgba(0,0,0,0.18), inset 4px 5px 8px rgba(255,255,255,0.95), 0 6px 16px rgba(255,0,51,0.3)",
          }}
        />
        <img src="/logo-icon.png" alt="Engwish logo" className="absolute inset-0 m-auto h-[66%] w-[66%] object-contain" />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ top: "8%", left: "14%", width: "45%", height: "30%", background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0))", filter: "blur(1.5px)", transform: "rotate(-20deg)" }}
        />
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at 70% 85%, rgba(255,0,51,0.18), transparent 45%)" }}
        />
      </motion.div>
      <img src="/logo-wordmark.png" alt="Engwish Skills Academy" className="h-8 w-auto object-contain" />
    </Link>
  );
};
