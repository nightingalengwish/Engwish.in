import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mohammed Arshad",
    course: "IELTS Coaching",
    text: "I scored Band 7.5 in my very first attempt. The mock tests and one-on-one speaking sessions at Engwish made all the difference.",
  },
  {
    name: "Abdul Rahman",
    course: "Study Abroad — Canada",
    text: "From shortlisting universities to my visa approval, the Engwish team handled everything. I'm now pursuing my Masters in Canada!",
  },
  {
    name: "Srikanth Reddy",
    course: "Spoken English",
    text: "I used to hesitate even to introduce myself. After 3 months at Engwish, I cleared my job interview in fluent English. Life-changing!",
  },
  {
    name: "Mohammed Faizan",
    course: "Intermediate Coaching",
    text: "Maths M1 and Physics felt impossible before. The chapter-wise tests and doubt sessions helped me score 950+ in my Intermediate boards.",
  },
];

export const Testimonials = () => (
  <section id="testimonials" data-testid="testimonials-section" className="relative py-24 sm:py-32 bg-[#FFF7F8]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="text-[#E60023] text-xs font-bold tracking-[0.3em] uppercase">Success Stories</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mt-4">
          Students Who Made It <span className="text-[#E60023]">Big</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            data-testid={`testimonial-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-3xl p-7 bg-white border border-[#FF0033]/15 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:border-[#FF0033]/50 hover:shadow-[0_12px_35px_rgba(255,0,51,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <Quote className="text-[#FF0033]/50" size={26} />
            <p className="text-neutral-600 text-sm leading-relaxed mt-4 flex-1">"{t.text}"</p>
            <div className="flex gap-1 mt-5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={13} className="fill-[#FF0033] text-[#FF0033]" />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#FF0033] to-[#99001f] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-neutral-900 text-sm font-semibold">{t.name}</div>
                  <div className="text-[#E60023] text-xs">{t.course}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
