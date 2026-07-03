import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { COURSES, PHONE, ADDRESS } from "../data/courses";

export const Footer = () => (
  <footer data-testid="main-footer" className="relative bg-[#FFF7F8] border-t border-[#FF0033]/15">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-12">
      <div>
        <Logo />
        <p className="text-neutral-500 text-sm leading-relaxed mt-5 max-w-xs">
          Building fluent speakers, global scholars and board toppers — one student at a time.
        </p>
      </div>
      <div>
        <h4 className="text-neutral-900 font-heading font-bold mb-5">Programs</h4>
        <ul className="space-y-3">
          {COURSES.map((c) => (
            <li key={c.slug}>
              <Link to={`/course/${c.slug}`} data-testid={`footer-link-${c.slug}`} className="text-neutral-500 hover:text-[#E60023] text-sm transition-colors">
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-neutral-900 font-heading font-bold mb-5">Contact</h4>
        <div className="space-y-4 text-sm">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-neutral-500 hover:text-neutral-900 transition-colors">
            <Phone size={16} className="text-[#FF0033]" /> {PHONE}
          </a>
          <div className="flex items-start gap-3 text-neutral-500">
            <MapPin size={16} className="text-[#FF0033] mt-0.5 shrink-0" /> {ADDRESS}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-[#FF0033]/10 py-6 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-neutral-400 text-xs">
      <span>© {new Date().getFullYear()} Engwish Skills Academy. All rights reserved. · www.engwish.in</span>
      <span className="flex items-center gap-4">
        <Link to="/privacy" data-testid="footer-privacy-link" className="hover:text-[#E60023] transition-colors">Privacy Policy</Link>
        <Link to="/terms" data-testid="footer-terms-link" className="hover:text-[#E60023] transition-colors">Terms of Service</Link>
      </span>
    </div>
  </footer>
);
