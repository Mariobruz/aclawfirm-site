import { motion } from "motion/react";
import { Scale, Building2, ShieldCheck, Gavel } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";


const ICONS = [Scale, Building2, ShieldCheck, Gavel];
const TEST_IDS = [
  "practice-card-international",
  "practice-card-corporate",
  "practice-card-compliance",
  "practice-card-litigation",
];

export default function Practice() {
  const { t, u, href } = useLanguage();

  return (
    <section id="practice" data-testid="practice-section" className="relative bg-[#0E1117] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            {t.practice.overline}
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-[#FAF8F5] sm:text-4xl lg:text-[42px]">
            {t.practice.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#B5AFA6] sm:text-base">
            {t.practice.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.practice.areas.map((area, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={area.title}
                data-testid={TEST_IDS[i]}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-[#222730] bg-[#12161E] p-8 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#C5A059]/50 hover:shadow-[0_20px_60px_-20px_rgba(197,160,89,0.25)] sm:p-10"
              >
                <div className="pointer-events-none absolute -right-6 -top-8 font-heading text-[120px] leading-none text-[#FAF8F5]/[0.04] transition-colors duration-500 group-hover:text-[#C5A059]/10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#3A3326] bg-[#221C11]">
                  <Icon size={20} className="text-[#C5A059]" />
                </span>
                <h3 className="mt-7 font-heading text-xl text-[#FAF8F5] sm:text-2xl">{area.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#A8A29E]">{area.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {area.subs.map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full border border-[#282F3D] px-3 py-1 text-[11px] tracking-wide text-[#B5AFA6]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <a
                  data-testid={`practice-modal-trigger-${i}`}
                  href={href(["/aree-di-attivita/internazionale/","/aree-di-attivita/impresa/","/aree-di-attivita/impresa/risk-management-e-compliance/","/aree-di-attivita/italia/"][i])}
                  className="mt-8 inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-medium text-[#C5A059] transition-colors duration-300 hover:text-[#E2C36E]"
                >
                  {u.explorePractice}
                  
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
