import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Method() {
  const { t } = useLanguage();

  return (
    <section id="method" data-testid="method-section" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            {t.method.overline}
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-[#FAF8F5] sm:text-4xl lg:text-[42px]">
            {t.method.title}
          </h2>
        </motion.div>

        <div>
          {t.method.steps.map((step, i) => (
            <motion.div
              key={step.title}
              data-testid={`method-step-${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-[#222730] py-10 transition-colors duration-300 hover:border-[#C5A059]/40 sm:grid-cols-[120px_1fr_1fr] sm:gap-10 sm:py-12"
            >
              <span className="font-heading text-4xl text-[#C5A059]/50 transition-colors duration-300 group-hover:text-[#C5A059] sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl text-[#FAF8F5] sm:text-2xl">{step.title}</h3>
              <p className="col-span-2 text-sm leading-relaxed text-[#A8A29E] sm:col-span-1 sm:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-[#222730]" />
        </div>
      </div>
    </section>
  );
}
