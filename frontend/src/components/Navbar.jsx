import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Sparkles, LayoutDashboard } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE } from "../data/courses";
import { useAuth } from "../context/AuthContext";

const LINKS = [
  { label: "Home", to: "home" },
  { label: "Courses", to: "courses" },
  { label: "About", to: "about" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const goTo = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header data-testid="main-navbar" className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-[#FF0033]/15 shadow-[0_2px_20px_rgba(255,0,51,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.to}
              data-testid={`nav-${l.to}`}
              onClick={() => goTo(l.to)}
              className="text-sm font-medium text-neutral-600 hover:text-[#E60023] transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#FF0033] hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </button>
          ))}
          <Link
            data-testid="nav-ai-practice"
            to="/ai-practice"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 text-sm font-bold text-[#E60023] hover:text-[#99001f] transition-colors duration-200"
          >
            <Sparkles size={14} /> AI Practice
            <span className="rounded-full bg-[#FF0033] text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">New</span>
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          {user && user !== false ? (
            <Link
              data-testid="nav-dashboard-btn"
              to="/dashboard"
              className="flex items-center gap-2 rounded-full border-2 border-[#FF0033]/25 text-[#E60023] px-5 py-2 text-sm font-bold hover:bg-[#FF0033]/5 hover:border-[#FF0033]/50 transition-all duration-300"
            >
              <LayoutDashboard size={14} /> Dashboard
            </Link>
          ) : (
            <Link
              data-testid="nav-login-btn"
              to="/auth"
              className="rounded-full border-2 border-[#FF0033]/25 text-[#E60023] px-5 py-2 text-sm font-bold hover:bg-[#FF0033]/5 hover:border-[#FF0033]/50 transition-all duration-300"
            >
              Login
            </Link>
          )}
          <a
            data-testid="nav-call-btn"
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 bg-gradient-to-r from-[#FF0033] to-[#99001f] text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-[0_0_20px_rgba(255,0,51,0.4)] hover:shadow-[0_0_35px_rgba(255,0,51,0.7)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <Phone size={15} /> {PHONE}
          </a>
        </div>
        <button data-testid="mobile-menu-btn" className="md:hidden text-neutral-900" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div data-testid="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-[#FF0033]/15 px-6 py-6 flex flex-col gap-4">
          {LINKS.map((l) => (
            <button key={l.to} onClick={() => goTo(l.to)} className="text-left text-neutral-700 hover:text-[#E60023] font-medium py-1">
              {l.label}
            </button>
          ))}
          <Link
            data-testid="mobile-nav-ai-practice"
            to="/ai-practice"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 text-[#E60023] font-bold py-1"
          >
            <Sparkles size={14} /> AI Practice
            <span className="rounded-full bg-[#FF0033] text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">New</span>
          </Link>
          <Link
            data-testid="mobile-nav-auth-btn"
            to={user && user !== false ? "/dashboard" : "/auth"}
            onClick={() => setOpen(false)}
            className="text-left text-neutral-700 hover:text-[#E60023] font-bold py-1"
          >
            {user && user !== false ? "My Dashboard" : "Login / Sign Up"}
          </Link>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 text-[#FF0033] font-bold">
            <Phone size={16} /> {PHONE}
          </a>
        </div>
      )}
    </header>
  );
};
