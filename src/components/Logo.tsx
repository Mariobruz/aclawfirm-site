export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#C5A059" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 10v30" />
        <path d="M16 17h32" />
        <path d="M16 17l-6 12m6-12l6 12" />
        <path d="M10 29a6 4.2 0 0 0 12 0" />
        <path d="M48 17l-6 12m6-12l6 12" />
        <path d="M42 29a6 4.2 0 0 0 12 0" />
        <path d="M23 45h18" />
        <path d="M27 50h10" />
      </g>
    </svg>
  );
}

export function LogoWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark size={compact ? 34 : 40} />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-heading text-base tracking-[0.14em] text-[#FAF8F5] sm:text-lg sm:tracking-[0.18em]">
          AC <span className="text-[#C5A059]">LAW FIRM</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#A8A29E]">
            Studio Legale Internazionale
          </span>
        )}
      </span>
    </span>
  );
}
