import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/context/LanguageContext";
import { ancestors, byPath, children, homeMeta, pages, withBase, type PageMeta } from "@/lib/site";

function SitemapList() {
  const { lang, href } = useLanguage();
  const tree = (parent: string, depth: number): React.ReactNode[] =>
    children(parent).flatMap((p) => [
      <a key={p.path} href={href(p.path)} style={{ paddingLeft: 20 + depth * 22 }}>{p[lang].label}</a>,
      ...tree(p.path, depth + 1),
    ]);
  return (
    <div className="sitemap-list">
      <a href={href("/")}>{homeMeta[lang].label}</a>
      {tree("/", 0)}
    </div>
  );
}

export default function ContentPage() {
  const { lang, path, u, href, body } = useLanguage();
  const page = byPath.get(path);

  if (!page) {
    return (
      <>
        <Nav />
        <main id="main" className="content-width not-found">
          <p className="eyebrow">404</p>
          <h1>{u.notFound}</h1>
          <p className="not-found-text">{u.notFoundText}</p>
          <a className="gold-button" href={href("/")}>{u.backHome}</a>
        </main>
        <Footer />
      </>
    );
  }

  const text = page[lang];
  const crumbs = ancestors(path);
  const kids = children(path);
  const siblings = page.parent === "/" ? pages.filter((p) => p.parent === "/" && p.kind !== "sitemap").sort((a, b) => a.order - b.order) : children(page.parent);
  const menu: PageMeta[] = kids.length ? kids : siblings;
  const parent = byPath.get(page.parent);
  const section = path.startsWith("/aree-di-attivita/") ? u.sectionPractice : path.startsWith("/dove-operiamo/") ? u.sectionGlobal : u.sectionFirm;
  const countries = body?.countries ?? [];
  const isContact = page.kind === "contact";

  return (
    <div id="top">
      <Nav />
      <main id="main">
        <section className="inner-hero">
          <div className="inner-hero-glow" />
          <div className="content-width">
            <nav className="breadcrumbs" aria-label={u.breadcrumb}>
              <a href={href("/")}>{homeMeta[lang].label}</a>
              {crumbs.map((c) => (
                <span key={c.path}><i>/</i><a href={href(c.path)}>{c[lang].label}</a></span>
              ))}
            </nav>
            <p className="eyebrow">AC LAW FIRM · {section}</p>
            <h1>{text.label}</h1>
            <div className="hero-rule" />
            {text.summary && <p className="hero-lead">{text.summary}</p>}
          </div>
        </section>

        <div className={`content-width inner-layout ${isContact ? "contacts-page-layout" : ""}`}>
          <aside className="section-nav">
            <p className="eyebrow">{u.exploreSection}</p>
            {parent && kids.length === 0 && <a href={href(parent.path)} className="parent-link">{parent[lang].label}</a>}
            {menu.map((p) => (
              <a href={href(p.path)} key={p.path} className={p.path === path ? "active" : ""} aria-current={p.path === path ? "page" : undefined}>
                {p[lang].label}
              </a>
            ))}
            <a href={href("/contatti/") + "#contact"} className="section-contact">{u.contactFirm}</a>
          </aside>

          <div className="inner-main">
            {kids.length > 0 && (
              <nav className="directory-grid" aria-label={u.inSection}>
                {kids.map((p, i) => (
                  <a href={href(p.path)} key={p.path}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h2>{p[lang].label}</h2>
                    <p>{p[lang].summary}</p>
                    <small>{u.readMore}</small>
                  </a>
                ))}
              </nav>
            )}

            {page.kind === "sitemap" ? (
              <SitemapList />
            ) : (
              <>
                {page.image && page.kind === "page" && (
                  <figure className={`article-figure${page.imageFull ? " full" : ""}`}><img src={withBase(page.image)} alt="" loading="lazy" /></figure>
                )}
                {body?.html && <article className="legal-article" dangerouslySetInnerHTML={{ __html: body.html }} />}
              </>
            )}

            {countries.length > 0 && (
              <>
                <nav className="country-index" id="paesi" aria-label={u.countries}>
                  <p className="eyebrow">{u.countries} · {countries.length}</p>
                  <div>
                    {countries.map((c) => (
                      <a key={c.slug} href={`#${c.slug}`}>
                        {c.image ? <img src={withBase(c.image)} alt="" loading="lazy" /> : <span className="country-initial">{c.name[0]}</span>}
                        <span>{c.name}</span>
                      </a>
                    ))}
                  </div>
                </nav>
                {countries.map((c) => (
                  <section key={c.slug} id={c.slug} className="country-block">
                    <header>
                      {c.image && <img src={withBase(c.image)} alt="" loading="lazy" />}
                      <div>
                        <h2>{c.name}</h2>
                        <p>{c.summary}</p>
                      </div>
                    </header>
                    <div className="legal-article" dangerouslySetInnerHTML={{ __html: c.html }} />
                    <a href="#paesi" className="country-back">↑ {u.backToCountries}</a>
                  </section>
                ))}
              </>
            )}

            {isContact ? (
              <Contact maps />
            ) : (
              <div className="article-ending">
                <p>{u.endingText}</p>
                <a className="gold-button" href={href("/contatti/")}>{u.endingCta}</a>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
