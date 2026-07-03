import { Link } from "react-router-dom";

export const Logo = ({ size = "md" }) => {
  const iconSize = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  return (
    <Link to="/" data-testid="brand-logo" className="flex items-center gap-3 group">
      <img src="/logo-icon.png" alt="Engwish logo" className={`${iconSize} object-contain drop-shadow-[0_0_12px_rgba(255,0,51,0.25)] group-hover:drop-shadow-[0_0_18px_rgba(255,0,51,0.45)] transition-all duration-300 shrink-0`} />
      <img src="/logo-wordmark.png" alt="Engwish Skills Academy" className="h-8 w-auto object-contain" />
    </Link>
  );
};
