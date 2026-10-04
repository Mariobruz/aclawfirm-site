import { useLanguage } from "@/context/LanguageContext";

export default function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div
      data-testid="editorial-marquee"
      className="marquee-hover relative overflow-hidden border-y border-[#222730] bg-[#0E1117] py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0B0D11] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0B0D11] to-transparent" />
      <div className="animate-marquee flex w-max items-center">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="font-heading text-xl italic tracking-wide text-[#B5AFA6] sm:text-2xl">
              {item}
            </span>
            <span className="mx-10 inline-block h-1.5 w-1.5 rotate-45 bg-[#C5A059]/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
