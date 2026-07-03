import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Send, Loader2 } from "lucide-react";
import { COURSES, PHONE, ADDRESS } from "../data/courses";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course) {
      toast.error("Please fill your name, phone and course of interest.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      toast.success("Enquiry sent! Our team will call you shortly.");
      setForm({ name: "", phone: "", email: "", course: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-2xl bg-white border border-neutral-200 focus:border-[#FF0033]/60 focus:ring-2 focus:ring-[#FF0033]/15 outline-none px-5 py-3.5 text-neutral-900 placeholder-neutral-400 text-sm transition-all duration-300";

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 80% 40%, rgba(255,0,51,0.07), #ffffff 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-[#E60023] text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mt-4">
            Start Your Journey <span className="text-[#E60023]">Today</span>
          </h2>
          <p className="text-neutral-500 leading-relaxed mt-6">
            Walk in for a free counselling session or drop us an enquiry — our advisors will design the perfect
            program roadmap for you.
          </p>
          <div className="space-y-5 mt-10">
            <a data-testid="contact-phone" href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-2xl bg-[#FF0033]/10 border border-[#FF0033]/25 flex items-center justify-center group-hover:bg-[#FF0033]/20 transition-colors">
                <Phone className="text-[#E60023]" size={20} />
              </div>
              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-wider">Call Us</div>
                <div className="text-neutral-900 font-semibold">{PHONE}</div>
              </div>
            </a>
            <div data-testid="contact-address" className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-[#FF0033]/10 border border-[#FF0033]/25 flex items-center justify-center shrink-0">
                <MapPin className="text-[#E60023]" size={20} />
              </div>
              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-wider">Visit Us</div>
                <div className="text-neutral-900 font-semibold">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          data-testid="enquiry-form"
          onSubmit={submit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 bg-white border border-[#FF0033]/15 shadow-[0_10px_50px_rgba(255,0,51,0.08)] space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input data-testid="enquiry-name-input" className={inputCls} placeholder="Your Name *" value={form.name} onChange={set("name")} />
            <input data-testid="enquiry-phone-input" className={inputCls} placeholder="Phone Number *" value={form.phone} onChange={set("phone")} />
          </div>
          <input data-testid="enquiry-email-input" className={inputCls} type="email" placeholder="Email (optional)" value={form.email} onChange={set("email")} />
          <select data-testid="enquiry-course-select" className={`${inputCls} appearance-none cursor-pointer [&>option]:bg-white`} value={form.course} onChange={set("course")}>
            <option value="">Course of Interest *</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.title}>{c.title}</option>
            ))}
          </select>
          <textarea data-testid="enquiry-message-input" className={`${inputCls} min-h-[110px] resize-none`} placeholder="Your message (optional)" value={form.message} onChange={set("message")} />
          <button
            data-testid="enquiry-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#FF0033] to-[#99001f] text-white rounded-full px-8 py-4 font-bold tracking-wide shadow-[0_0_25px_rgba(255,0,51,0.5)] hover:shadow-[0_0_45px_rgba(255,0,51,0.8)] hover:scale-[1.02] transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
