import { motion } from "framer-motion";

const OBJECTS = [
  { size: 120, x: "8%", y: "15%", dur: 9, delay: 0, type: "ring" },
  { size: 60, x: "85%", y: "20%", dur: 7, delay: 1, type: "orb" },
  { size: 90, x: "75%", y: "65%", dur: 11, delay: 0.5, type: "ring" },
  { size: 40, x: "15%", y: "70%", dur: 6, delay: 2, type: "orb" },
  { size: 70, x: "50%", y: "10%", dur: 8, delay: 1.5, type: "cube" },
  { size: 50, x: "92%", y: "80%", dur: 10, delay: 0.8, type: "cube" },
];

export const FloatingObjects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {OBJECTS.map((o, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: o.x, top: o.y, width: o.size, height: o.size }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {o.type === "ring" && (
          <div className="w-full h-full rounded-full border-2 border-[#FF0033]/25" style={{ boxShadow: "0 0 40px rgba(255,0,51,0.15), inset 0 0 30px rgba(255,0,51,0.08)" }} />
        )}
        {o.type === "orb" && (
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,0,51,0.5), rgba(255,0,51,0.05))", filter: "blur(1px)" }} />
        )}
        {o.type === "cube" && (
          <div className="w-full h-full border border-white/15 rounded-xl backdrop-blur-sm bg-white/[0.03]" style={{ transform: "rotate(15deg)" }} />
        )}
      </motion.div>
    ))}
  </div>
);
