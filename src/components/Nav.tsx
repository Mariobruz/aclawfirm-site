import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoWordmark } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { LANGS, LANG_NAMES, localize } from "@/lib/site";

export default function Nav() {
  const { lang, path, t, u, href } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 35);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    const f = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", f);
    return () => document.removeEventListener("keydown", f);
  }, []);
  const links: [string, string][] = [
    ["/chi-siamo/", t.nav.about],
    ["/aree-di-attivita/", t.nav.practice],
    ["/dove-operiamo/", t.nav.global],
    ["/contatti/", t.nav.contact],
  ];
  const languages = (
    <div className="language-control" role="group" aria-label={u.language}>
      {LANGS.map((l) => (
        <a
          key={l}
          href={localize(path, l)}
          hrefLang={l}
          lang={l}
          title={LANG_NAMES[l]}
          aria-current={lang === l ? "true" : undefined}
          className={lang === l ? "selected" : ""}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
  return (
    <>
      <a href="#main" className="skip-link">{u.skip}</a>
      <header className={`site-nav ${scrolled || path !== "/" ? "solid" : ""}`} data-testid="nav-header">
        <div className="nav-inner">
          <a href={href("/")} aria-label="AC Law Firm Home"><LogoWordmark compact /></a>
          <nav className="desktop-nav" aria-label={u.mainNav}>
            {links.map(([url, label]) => (
              <a key={url} href={href(url)} aria-current={path.startsWith(url) ? "page" : undefined}>{label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            {languages}
            <a className="gold-button nav-cta" href={href("/contatti/") + "#contact"}>{t.nav.cta}</a>
            <button
              className="menu-trigger"
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? u.closeMenu : u.openMenu}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label={u.mobileNav}>
            {links.map(([url, label]) => <a key={url} href={href(url)}>{label}</a>)}
            <a href={href("/contatti/") + "#contact"} className="gold-button">{t.nav.cta}</a>
          </nav>
        )}
      </header>
    </>
  );
}
