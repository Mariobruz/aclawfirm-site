import site from '@/content/site.json';

export type Lang = 'it' | 'en' | 'es';
export const LANGS: Lang[] = ['it', 'en', 'es'];
export const LANG_NAMES: Record<Lang, string> = { it: 'Italiano', en: 'English', es: 'Español' };
export const SITE_URL = 'https://www.aclawfirm.eu';

export interface PageText { label: string; title: string; description: string; summary: string }
export interface PageMeta {
  id: string; path: string; parent: string; order: number;
  kind: 'page' | 'index' | 'region' | 'contact' | 'sitemap';
  image: string | null;
  /** Show the page image uncropped (for images with text in them). */
  imageFull?: boolean;
  it: PageText; en: PageText; es: PageText;
}
export interface Country { slug: string; image: string | null; name: string; summary: string; html: string }
export interface PageBody { html: string; countries: Country[] }

export const pages = site as PageMeta[];
export const byPath = new Map(pages.map((p) => [p.path, p]));

export const homeMeta: Record<Lang, { label: string; title: string; description: string }> = {
  it: { label: 'Home', title: 'Studio Legale Internazionale — Avv. Antonio Circosta', description: 'Studio Legale AC Law Firm — Avv. Antonio Circosta: diritto internazionale, societario, risk management e compliance. Sedi a Reggio Calabria, Roma e Milano.' },
  en: { label: 'Home', title: 'International Law Firm — Antonio Circosta', description: 'AC Law Firm — Avv. Antonio Circosta: international, corporate, risk management and compliance law. Offices in Reggio Calabria, Rome and Milan, Italy.' },
  es: { label: 'Inicio', title: 'Despacho de abogados internacional — Antonio Circosta', description: 'AC Law Firm — Avv. Antonio Circosta: derecho internacional, societario, gestión de riesgos y cumplimiento. Oficinas en Reggio Calabria, Roma y Milán.' },
};

/** Splits a URL pathname into language and language-neutral path ("/en/contatti/" → en, "/contatti/"). */
export function splitPath(pathname: string): { lang: Lang; path: string } {
  let p = pathname;
  try { p = decodeURIComponent(pathname); } catch { /* keep raw */ }
  if (!p.endsWith('/')) p += '/';
  const m = p.match(/^\/(en|es)(\/.*)$/);
  return m ? { lang: m[1] as Lang, path: m[2] } : { lang: 'it', path: p };
}

/** Base path the site is served from ("/" on its own domain, "/aclawfirm-site/" on GitHub Pages). */
export const BASE = import.meta.env.BASE_URL || '/';

/** Prefixes an absolute site path ("/assets/x.webp", "/contatti/") with the base path. */
export function withBase(p: string): string {
  return p.startsWith('/') ? BASE + p.slice(1) : p;
}

/** Removes the base path from a browser pathname. */
export function stripBase(pathname: string): string {
  return BASE !== '/' && pathname.startsWith(BASE) ? '/' + pathname.slice(BASE.length) : pathname;
}

export function localize(path: string, lang: Lang): string {
  return withBase(lang === 'it' ? path : `/${lang}${path}`);
}

export function children(path: string): PageMeta[] {
  return pages.filter((p) => p.parent === path && p.path !== '/').sort((a, b) => a.order - b.order);
}

export function ancestors(path: string): PageMeta[] {
  const out: PageMeta[] = [];
  let cur = byPath.get(path);
  while (cur && cur.parent !== '/') {
    const parent = byPath.get(cur.parent);
    if (!parent) break;
    out.unshift(parent);
    cur = parent;
  }
  return out;
}

export const ui = {
  it: {
    skip: 'Vai al contenuto', openMenu: 'Apri menu', closeMenu: 'Chiudi menu', language: 'Lingua',
    exploreSection: 'Esplora la sezione', contactFirm: 'Contatta lo studio', readMore: 'Scopri di più',
    notFound: 'Pagina non trovata', notFoundText: 'La pagina che cerchi non esiste o è stata spostata.', backHome: 'Torna alla Home',
    endingText: 'Un confronto riservato sulle tue esigenze.', endingCta: 'Sedi e contatti',
    sectionPractice: 'Le competenze', sectionGlobal: 'Presenza internazionale', sectionFirm: 'Lo studio',
    countries: 'Paesi', backToCountries: 'Torna all’elenco dei Paesi', explorePractice: 'Approfondisci',
    aboutLink: 'La storia, i valori, l’approccio', regionCard: 'Paesi e assistenza legale',
    footerFirm: 'Lo studio', allPages: 'Mappa del sito', legal: 'Note legali', breadcrumb: 'Percorso',
    mainNav: 'Navigazione principale', mobileNav: 'Navigazione mobile', inSection: 'Approfondimenti',
    offices: 'Sedi', phone: 'Telefono', openMaps: 'Apri su Maps',
    mailSubject: 'Richiesta di consulenza', draftReady: 'Bozza e-mail preparata',
    draftText: 'Completa l’invio dal tuo programma di posta. Se non si apre, scrivi a info@aclawfirm.eu.',
    draftNote: 'Il pulsante apre una bozza nel tuo programma di posta: la richiesta viene inviata solo dopo la tua conferma da lì.',
    sendNote: 'La richiesta arriva direttamente allo Studio ed è trattata con riservatezza. Riceverai risposta all’indirizzo email indicato.',
    allContacts: 'Tutti i recapiti', prepareEmail: 'Prepara e-mail',
    mailLabels: ['Nome', 'Email', 'Telefono', 'Società', 'Area'],
  },
  en: {
    skip: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language',
    exploreSection: 'Explore this section', contactFirm: 'Contact the firm', readMore: 'Read more',
    notFound: 'Page not found', notFoundText: 'The page you are looking for does not exist or has been moved.', backHome: 'Back to Home',
    endingText: 'A confidential discussion of your needs.', endingCta: 'Offices and contacts',
    sectionPractice: 'Our expertise', sectionGlobal: 'International presence', sectionFirm: 'The firm',
    countries: 'Countries', backToCountries: 'Back to the list of countries', explorePractice: 'Explore this practice',
    aboutLink: 'Our history, values and approach', regionCard: 'Countries and legal assistance',
    footerFirm: 'The firm', allPages: 'Sitemap', legal: 'Legal notice', breadcrumb: 'Breadcrumb',
    mainNav: 'Main navigation', mobileNav: 'Mobile navigation', inSection: 'In this section',
    offices: 'Offices', phone: 'Phone', openMaps: 'Open in Maps',
    mailSubject: 'Legal enquiry', draftReady: 'Email draft prepared',
    draftText: 'Send it from your email application. If it does not open, write to info@aclawfirm.eu.',
    draftNote: 'The button opens a draft in your email application. Send the request from there.',
    sendNote: 'Your enquiry goes directly to the firm and is handled in confidence. You will receive a reply at the email address you provide.',
    allContacts: 'All contact details', prepareEmail: 'Prepare email',
    mailLabels: ['Name', 'Email', 'Phone', 'Company', 'Area'],
  },
  es: {
    skip: 'Ir al contenido', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', language: 'Idioma',
    exploreSection: 'Explore la sección', contactFirm: 'Contacte con el despacho', readMore: 'Más información',
    notFound: 'Página no encontrada', notFoundText: 'La página que busca no existe o ha sido trasladada.', backHome: 'Volver al inicio',
    endingText: 'Una consulta confidencial sobre sus necesidades.', endingCta: 'Oficinas y contacto',
    sectionPractice: 'Nuestras competencias', sectionGlobal: 'Presencia internacional', sectionFirm: 'El despacho',
    countries: 'Países', backToCountries: 'Volver a la lista de países', explorePractice: 'Más información',
    aboutLink: 'Historia, valores y enfoque', regionCard: 'Países y asistencia jurídica',
    footerFirm: 'El despacho', allPages: 'Mapa del sitio', legal: 'Aviso legal', breadcrumb: 'Ruta de navegación',
    mainNav: 'Navegación principal', mobileNav: 'Navegación móvil', inSection: 'En esta sección',
    offices: 'Oficinas', phone: 'Teléfono', openMaps: 'Abrir en Maps',
    mailSubject: 'Solicitud de consulta', draftReady: 'Borrador de correo preparado',
    draftText: 'Complete el envío desde su programa de correo. Si no se abre, escriba a info@aclawfirm.eu.',
    draftNote: 'El botón abre un borrador en su programa de correo: la solicitud solo se envía cuando usted la confirma desde allí.',
    sendNote: 'Su solicitud llega directamente al Despacho y se trata con total confidencialidad. Recibirá respuesta en la dirección de correo indicada.',
    allContacts: 'Todos los datos de contacto', prepareEmail: 'Preparar correo',
    mailLabels: ['Nombre', 'Email', 'Teléfono', 'Empresa', 'Área'],
  },
} satisfies Record<Lang, Record<string, string | string[]>>;
