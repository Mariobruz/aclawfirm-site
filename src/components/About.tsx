import { motion } from "motion/react";
import { Scale, Globe2, ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { withBase } from "@/lib/site";

const ABOUT_IMG =
  "/media/2d0bd3144cfec9.jpg";

const VALUE_ICONS = [Scale, Globe2, ShieldCheck, Lock];

export default function About() {
  const { t, u, href } = useLanguage();

  return (
    <section id="about" data-testid="about-section" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-sm border border-[#C5A059]/25" />
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={withBase(ABOUT_IMG)}
              alt="Studio Legale AC Law Firm"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,13,17,0.85)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p data-testid="about-founder-name" className="font-heading text-2xl text-[#FAF8F5]">
                {t.about.founderName}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#C5A059]">
                {t.about.founderRole}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            {t.about.overline}
          </p>
          <h2
            data-testid="about-title"
            className="mt-5 font-heading text-3xl leading-tight tracking-tight text-[#FAF8F5] sm:text-4xl lg:text-[42px]"
          >
            {t.about.title}
          </h2>
          <p data-testid="about-bio-text" className="mt-7 text-sm leading-relaxed text-[#B5AFA6] sm:text-base">
            {t.about.p1}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#B5AFA6] sm:text-base">{t.about.p2}</p>

          <div
            data-testid="about-credentials-badge"
            className="mt-8 flex w-fit items-center gap-3 rounded-sm border border-[#3A3326] bg-[#221C11]/60 px-5 py-3"
          >
            <ShieldCheck size={18} className="text-[#C5A059]" />
            <span className="text-sm font-medium text-[#E2C36E]">{t.about.founderBadge}</span>
          </div>

          <div className="mt-6">
            <a
              href={href("/chi-siamo/")}
              data-testid="about-history-link"
              className="group inline-flex items-center gap-3 rounded-full border border-[#C5A059]/50 px-6 py-3 text-sm font-semibold text-[#E2C36E] transition-colors duration-300 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0D11]"
            >
              {u.aboutLink}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A756D]">
              {t.about.valuesTitle}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.about.values.map((value, i) => {
                const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
                return (
                  <div key={value} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#282F3D] bg-[#12161E]">
                      <Icon size={16} className="text-[#C5A059]" />
                    </span>
                    <span className="text-sm text-[#FAF8F5]">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
