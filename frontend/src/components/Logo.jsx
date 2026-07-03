import { Link } from "react-router-dom";

export const Logo = ({ size = "md" }) => {
  const iconSize = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  return (
    <Link to="/" data-testid="brand-logo" className="flex items-center gap-3 group">
      <div className={`${iconSize} rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,0,51,0.35)] group-hover:shadow-[0_0_35px_rgba(255,0,51,0.6)] transition-shadow duration-300 shrink-0`}>
        <img src="/logo-icon.png" alt="Engwish logo" className="h-[72%] w-[72%] object-contain" />
      </div>
      <div className="leading-none">
        <div className="font-heading font-bold text-xl tracking-tight">
          <span className="text-[#FF0033]">ENG</span>
          <span className="text-white">WISH</span>
          <span className="text-[#FF0033]">.</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[9px] tracking-[0.35em] text-white/60 font-semibold">SKILLS ACADEMY</span>
          <span className="h-px flex-1 bg-[#FF0033]/60" />
        </div>
      </div>
    </Link>
  );
};
