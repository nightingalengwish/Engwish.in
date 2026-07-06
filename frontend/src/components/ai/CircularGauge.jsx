import { motion } from "framer-motion";

export const CircularGauge = ({ score, label, size = 92, stroke = 7, delay = 0 }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2" data-testid={`gauge-${label.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,0,51,0.1)" strokeWidth={stroke} />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c * (1 - score / 100) }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF0033" />
              <stop offset="100%" stopColor="#99001f" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading font-bold text-neutral-900" style={{ fontSize: size / 4.6 }}>
            {score}
          </span>
        </div>
      </div>
      <span className="text-xs text-neutral-500 font-medium text-center leading-tight">{label}</span>
    </div>
  );
};
