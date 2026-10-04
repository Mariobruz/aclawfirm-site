import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { withBase } from "@/lib/site";
import { children } from "@/lib/site";

const GLOBAL_IMG =
  "/media/f2ddb5c6ef0343.jpg";

const REGION_TEST_IDS = [
  "global-region-eu",
  "global-region-uk-ch",
  "global-region-middle-east",
  "global-region-americas",
];

export default function GlobalReach() {
  const { lang, t, u, href } = useLanguage();

  return (
    <section id="global" data-testid="global-section" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0">
        <img src={withBase(GLOBAL_IMG)} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B0D11_0%,rgba(11,13,17,0.86)_50%,#0B0D11_100%)]" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none" data-testid="global-map-canvas">
          <g className="animate-spin-slower" style={{ transformOrigin: "450px 450px" }}>
            <circle cx="450" cy="450" r="420" stroke="#C5A059" strokeOpacity="0.14" strokeDasharray="3 9" />
            <circle cx="450" cy="450" r="300" stroke="#C5A059" strokeOpacity="0.1" strokeDasharray="3 9" />
          </g>
          <circle cx="450" cy="450" r="180" stroke="#C5A059" strokeOpacity="0.12" strokeDasharray="2 8" />
          <circle cx="450" cy="180" r="4" fill="#C5A059" className="animate-gold-pulse" />
          <circle cx="700" cy="480" r="4" fill="#C5A059" className="animate-gold-pulse" />
          <circle cx="240" cy="560" r="4" fill="#C5A059" className="animate-gold-pulse" />
          <circle cx="520" cy="720" r="4" fill="#C5A059" className="animate-gold-pulse" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            {t.global.overline}
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-[#FAF8F5] sm:text-4xl lg:text-[42px]">
            {t.global.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#B5AFA6] sm:text-base">
            {t.global.body}
          </p>
        </motion.div>

        <div className="region-directory">{children("/dove-operiamo/").map((r,i)=><a href={href(r.path)} key={r.id}><span>0{i+1}</span><h3>{r[lang].label}</h3><p>{u.regionCard}</p></a>)}</div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{marginTop:24}}>
          {t.global.regions.map((region, i) => (
            <motion.div
              key={region.name}
              data-testid={REGION_TEST_IDS[i]}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-sm border border-[#282F3D]/80 bg-[#0B0D11]/70 p-7 backdrop-blur-md transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#C5A059]/45"
            >
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[#C5A059]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7A756D]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg text-[#FAF8F5]">{region.name}</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#A8A29E] sm:text-sm">{region.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
