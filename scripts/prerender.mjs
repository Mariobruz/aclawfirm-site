// Generates one static HTML file per page and language (it at the root, /en/ and /es/),
// with server-rendered content, localized <head> (title, description, canonical, hreflang, Open Graph),
// plus sitemap.xml, robots.txt, 404.html and _redirects for the old URLs.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE = (process.env.SITE_URL || "https://www.aclawfirm.eu").replace(/\/$/, "");
const BASE = process.env.BASE_PATH || "/";
const wb = (p) => BASE + p.replace(/^\//, "");
const LANGS = ["it", "en", "es"];
const OG_LOCALE = { it: "it_IT", en: "en_GB", es: "es_ES" };
const BRAND = "AC Law Firm";

const { render } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const pages = JSON.parse(fs.readFileSync("src/content/site.json", "utf8"));
const redirects = JSON.parse(fs.readFileSync("scripts/redirects.json", "utf8"));
const template = fs.readFileSync("dist/index.html", "utf8");
const home = {
  it: { title: "Studio Legale Internazionale — Avv. Antonio Circosta", description: "Studio Legale AC Law Firm — Avv. Antonio Circosta: diritto internazionale, societario, risk management e compliance. Sedi a Reggio Calabria, Roma e Milano." },
  en: { title: "International Law Firm — Antonio Circosta", description: "AC Law Firm — Avv. Antonio Circosta: international, corporate, risk management and compliance law. Offices in Reggio Calabria, Rome and Milan, Italy." },
  es: { title: "Despacho de abogados internacional — Antonio Circosta", description: "AC Law Firm — Avv. Antonio Circosta: derecho internacional, societario, gestión de riesgos y cumplimiento. Oficinas en Reggio Calabria, Roma y Milán." },
};

const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const loc = (p, l) => (l === "it" ? p : `/${l}${p}`);
const abs = (p) => SITE + encodeURI(wb(p));
const body = (l, id) => JSON.parse(fs.readFileSync(`src/content/body/${l}/${id}.json`, "utf8"));

function page({ url, lang, title, description, neutral, image, bodyData, noindex = false }) {
  const html = render(wb(url), bodyData);
  const alternates = neutral
    ? [...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(loc(neutral, l))}">`), `<link rel="alternate" hreflang="x-default" href="${abs(neutral)}">`].join("\n    ")
    : "";
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    noindex ? `<meta name="robots" content="noindex">` : `<link rel="canonical" href="${abs(url)}">`,
    alternates,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${BRAND}">`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${abs(url)}">`,
    `<meta property="og:image" content="${SITE}${wb(image || "/media/c59326797df727.jpg")}">`,
  ].filter(Boolean).join("\n    ");
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<title>.*?<\/title>/s, "")
    .replace(/<meta name="description"[^>]*>/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

function write(url, content) {
  const out = path.join("dist", decodeURI(url), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
}

const urls = [];
for (const lang of LANGS) {
  const h = home[lang];
  write(loc("/", lang), page({ url: loc("/", lang), lang, title: `${BRAND} — ${h.title}`, description: h.description, neutral: "/", bodyData: null }));
  urls.push("/");
  for (const p of pages) {
    const t = p[lang];
    write(loc(p.path, lang), page({ url: loc(p.path, lang), lang, title: `${t.title} | ${BRAND}`, description: t.description, neutral: p.path, image: p.image, bodyData: body(lang, p.id) }));
    if (lang === "it") urls.push(p.path);
  }
}

// 404 (Italian; links still work in every language)
fs.writeFileSync("dist/404.html", page({ url: "/404/", lang: "it", title: `Pagina non trovata | ${BRAND}`, description: home.it.description, neutral: null, bodyData: null, noindex: true }));

// sitemap.xml with hreflang alternates
const uniq = [...new Set(urls)];
const xml = [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`];
for (const u of uniq) for (const l of LANGS) {
  xml.push(`  <url><loc>${abs(loc(u, l))}</loc>`);
  for (const a of LANGS) xml.push(`    <xhtml:link rel="alternate" hreflang="${a}" href="${abs(loc(u, a))}"/>`);
  xml.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(u)}"/>`, `  </url>`);
}
xml.push(`</urlset>`);
fs.writeFileSync("dist/sitemap.xml", xml.join("\n") + "\n");
fs.writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}${wb("/sitemap.xml")}\n`);

// Permanent redirects from the old URLs (both accented and percent-encoded forms)
const lines = [];
for (const [from, to] of redirects) {
  for (const f of new Set([from, encodeURI(from)])) lines.push(`${wb(f)} ${encodeURI(wb(to)).replace("%23", "#")} 301`);
}
fs.writeFileSync("dist/_redirects", lines.join("\n") + "\n");

// Static redirect pages for hosts without server-side redirects (e.g. GitHub Pages):
// each old URL gets a tiny page that forwards to the new one (keeping any #anchor) and declares the canonical.
for (const [from, to] of redirects) {
  const out = path.join("dist", from, "index.html");
  if (fs.existsSync(out)) continue;
  const target = encodeURI(wb(to)).replace("%23", "#");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>AC Law Firm</title><link rel="canonical" href="${SITE}${target}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${target}"><script>location.replace(${JSON.stringify(target)})</script></head><body><a href="${target}">${target}</a></body></html>\n`);
}

fs.rmSync("dist-ssr", { recursive: true, force: true });
console.log(`Prerendered ${uniq.length} pages × ${LANGS.length} languages, ${lines.length} redirects.`);
