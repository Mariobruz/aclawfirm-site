import { LogoWordmark } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, u, href } = useLanguage();
  return (
    <footer className="full-footer">
      <div className="footer-watermark" aria-hidden="true">AC LAW FIRM</div>
      <div className="content-width footer-grid">
        <div>
          <a href={href("/")} aria-label="Home"><LogoWordmark /></a>
          <p>{t.footer.tagline}<br />Avv. Antonio Circosta</p>
        </div>
        <div>
          <h2>{u.footerFirm}</h2>
          <a href={href("/chi-siamo/")}>{t.nav.about}</a>
          <a href={href("/aree-di-attivita/")}>{t.nav.practice}</a>
          <a href={href("/dove-operiamo/")}>{t.nav.global}</a>
          <a href={href("/contatti/")}>{t.nav.contact}</a>
          <a href={href("/mappa-del-sito/")}>{u.allPages}</a>
        </div>
      </div>
      <div className="content-width footer-base">
        <p>{t.footer.disclosure}</p>
        <div>
          <a href={href("/note-legali/")}>{u.legal}</a>
          <a href={href("/privacy-policy/")}>{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
