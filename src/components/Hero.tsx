import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { withBase } from "@/lib/site";
import { scrollToId } from "@/lib/scroll";
import { LogoMark } from "@/components/Logo";

const HERO_IMG =
  "/media/c59326797df727.jpg";

function MaskedLine({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="hero" data-testid="hero-section" className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={withBase(HERO_IMG)}
          alt=""
          className="h-[120%] w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,17,0.78)_0%,rgba(11,13,17,0.52)_45%,rgba(11,13,17,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(197,160,89,0.12),transparent_55%)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 0.07, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-24 top-1/2 z-0 -translate-y-1/2"
      >
        <LogoMark size={560} />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#3A3326] bg-[#221C11]/70 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A059] animate-gold-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E2C36E] sm:text-xs">
            {t.hero.overline}
          </span>
        </motion.div>

        <h1
          data-testid="hero-title"
          className="max-w-4xl font-heading text-4xl leading-[1.06] tracking-tight text-[#FAF8F5] sm:text-6xl lg:text-7xl"
        >
          {t.hero.titleLines.map((line, i) => (
            <MaskedLine key={line} delay={0.35 + i * 0.18}>
              {i === t.hero.titleLines.length - 1 ? (
                <span className="italic text-[#E2C36E]">{line}</span>
              ) : (
                line
              )}
            </MaskedLine>
          ))}
        </h1>

        <motion.p
          data-testid="hero-subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-[#C2BBB0] sm:text-base"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-explore-btn"
            onClick={() => scrollToId("practice")}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#C5A059] px-7 py-3.5 text-sm font-semibold text-[#0B0D11] transition-colors duration-300 hover:bg-[#E2C36E]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            data-testid="hero-contact-btn"
            onClick={() => scrollToId("contact")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#C5A059]/40 px-7 py-3.5 text-sm font-semibold text-[#FAF8F5] transition-colors duration-300 hover:border-[#C5A059] hover:bg-[#C5A059]/10"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-[#FAF8F5]/10 pt-8"
        >
          <div>
            <p data-testid="hero-stat-practice-count" className="font-heading text-3xl text-[#E2C36E]">04</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#A8A29E]">{t.hero.statAreas}</p>
          </div>
          <div>
            <p data-testid="hero-stat-global-reach" className="font-heading text-3xl text-[#E2C36E]">05</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#A8A29E]">{t.hero.statReach}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#282F3D] bg-[#12161E]/70 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-[#B5AFA6] backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={() => scrollToId("about")}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-[#A8A29E] transition-colors hover:text-[#E2C36E] md:flex"
        aria-label={t.hero.scroll}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
