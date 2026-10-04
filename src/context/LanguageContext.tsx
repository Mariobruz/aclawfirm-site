import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations } from "@/lib/i18n";
import { localize, splitPath, ui, type Lang, type PageBody } from "@/lib/site";

interface LanguageContextValue {
  lang: Lang;
  /** Language-neutral path of the current page, e.g. "/contatti/". */
  path: string;
  t: (typeof translations)["it"];
  u: (typeof ui)["it"];
  /** Localised href for a language-neutral path. */
  href: (path: string) => string;
  body: PageBody | null;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, body }: { children: ReactNode; body: PageBody | null }) {
  const { pathname } = useLocation();
  const { lang, path } = splitPath(pathname);
  return (
    <LanguageContext.Provider
      value={{ lang, path, t: translations[lang], u: ui[lang], href: (p) => localize(p, lang), body }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const v = useContext(LanguageContext);
  if (!v) throw new Error("useLanguage outside LanguageProvider");
  return v;
}
