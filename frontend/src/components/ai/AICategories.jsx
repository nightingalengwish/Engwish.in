import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AI_CATEGORIES } from "../../data/aiPractice";

export const AICategories = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? AI_CATEGORIES : AI_CATEGORIES.slice(0, 12);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#E60023] text-xs font-bold tracking-widest uppercase">500+ Daily Life Scenarios</p>
        <h2 className="font-heading text-base md:text-lg font-bold text-neutral-900 mt-2 sm:text-3xl">
          Practice real conversations across 20+ categories
        </h2>
        <p className="text-neutral-500 text-sm mt-3 max-w-2xl">
          From shopping and travel to interviews and business meetings — every scenario prepares you for real life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {visible.map((c, i) => (
            <motion.div
              key={c.label}
              data-testid={`ai-category-${c.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.04 }}
              className="group flex items-center gap-3 rounded-2xl bg-white border border-[#FF0033]/12 px-5 py-4 shadow-[0_4px_15px_rgba(255,0,51,0.05)] hover:border-[#FF0033]/40 hover:shadow-[0_12px_30px_rgba(255,0,51,0.14)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FF0033]/8 flex items-center justify-center text-[#E60023] group-hover:bg-gradient-to-br group-hover:from-[#FF0033] group-hover:to-[#99001f] group-hover:text-white transition-all duration-300 shrink-0">
                <c.icon size={17} />
              </div>
              <span className="text-sm font-semibold text-neutral-700">{c.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            data-testid="ai-categories-toggle"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF0033]/25 text-[#E60023] px-7 py-3 text-sm font-bold hover:bg-[#FF0033]/5 transition-all"
          >
            {showAll ? "Show Less" : `View All ${AI_CATEGORIES.length}+ Categories`}
            <ChevronDown size={16} className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
