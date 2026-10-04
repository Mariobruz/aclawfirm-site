# AC Law Firm — sito multilingue (IT · EN · ES)

Sito dello Studio Legale AC Law Firm — Avv. Antonio Circosta. Stile grafico nero e oro invariato, struttura e contenuti riorganizzati il 3 ottobre 2026.

## Struttura

- **Lingue**: italiano alla radice (`/chi-siamo/`), inglese sotto `/en/` e spagnolo sotto `/es/` con gli stessi percorsi. Il selettore IT/EN/ES porta alla stessa pagina nell'altra lingua.
- **28 pagine per lingua** (84 in totale):
  - Home, Chi siamo, Contatti (sedi, recapiti, mappe e modulo in un'unica pagina), Note legali, Privacy Policy, Mappa del sito.
  - Aree di attività, divise in 3 gruppi con 12 approfondimenti: Internazionale, Impresa, Diritto italiano.
  - Dove operiamo, con 5 regioni: Europa, Medio Oriente, Africa, Asia, Americhe. Ogni regione contiene le schede dei suoi Paesi (53 in totale), con indice a bandiere e un link diretto a ciascuno (es. `/dove-operiamo/europa/#germania`).
- **Indirizzi senza accenti**. I vecchi indirizzi (es. `/aree-di-attività/...`, `/dove-operiamo/europa/germany/`, `/info-legali/`) sono reindirizzati con 301 tramite `dist/_redirects`.

## Dove si modificano i contenuti

| Cosa | File |
|---|---|
| Titoli, descrizioni SEO, riassunti e ordine delle pagine | `src/content/site.json` |
| Testo delle pagine e schede Paese | `src/content/body/<lingua>/<id>.json` |
| Testi della home e dell'interfaccia (IT, EN) | `src/lib/i18n.ts` |
| Testi della home in spagnolo | `src/content/i18n-es.json` |
| Etichette dell'interfaccia (menu, pulsanti) | `src/lib/site.ts` (`ui`) |
| Sedi, telefoni, email, PEC | `src/data/contacts.ts` |

## Modulo contatti

Il modulo invia le richieste a un indirizzo scelto da voi tramite **Web3Forms** (gratuito, nessun server da gestire).

1. Su https://web3forms.com inserisci l'email che deve **ricevere** le richieste: arriva una "Access Key".
2. Incollala in `src/data/contacts.ts` → `web3formsKey`. In alternativa, su GitHub: Settings → Secrets and variables → Actions → Variables → `WEB3FORMS_KEY`.
3. Per cambiare l'indirizzo di destinazione, crea una nuova chiave con il nuovo indirizzo.

Le email arrivano in italiano, con oggetto "Richiesta dal sito — Nome (lingua)". Il pulsante "Rispondi" scrive direttamente al cliente.

Il modulo ha un campo nascosto anti-spam. Senza chiave, il modulo torna ad aprire una bozza nel programma di posta del visitatore.

**Privacy:** Web3Forms è già indicato nella Privacy Policy come fornitore.

## Avvio e pubblicazione

Richiede Node.js 22.12+ o 24+.

```sh
npm ci
npm run dev       # sviluppo
npm run build     # produzione: compila, prerenderizza tutte le pagine nelle 3 lingue
npm run preview   # anteprima della build
```

La build crea in `dist/`:

- un file HTML per ogni pagina e lingua, con il testo già presente (leggibile da Google anche senza JavaScript);
- titolo, descrizione, canonical, `hreflang` e Open Graph per ogni pagina;
- `sitemap.xml`, `robots.txt`, `404.html` e `_redirects`.

Pubblicare il contenuto di `dist/` sulla radice di un hosting statico. `_redirects` funziona su Netlify e Cloudflare Pages; su Apache servono regole equivalenti in `.htaccess`.

### GitHub Pages

Il file `.github/workflows/deploy.yml` compila e pubblica il sito a ogni push sul branch `main`, usando Node 22 sui server di GitHub.

1. Sul repository vai in **Settings → Pages → Source** e scegli **GitHub Actions**.
2. Su GitHub Pages i vecchi indirizzi sono gestiti con pagine di reindirizzamento statiche, generate dalla build.
3. Il sito usa percorsi assoluti (`/chi-siamo/`), quindi va servito dalla radice di un dominio:
   - **dominio personalizzato**: imposta `www.aclawfirm.eu` in Settings → Pages → Custom domain;
   - **oppure** un repository chiamato `<utente>.github.io`.

Il dominio usato per canonical e sitemap è `https://www.aclawfirm.eu`. Si cambia in `scripts/prerender.mjs` e in `src/lib/site.ts`.

## Da verificare con lo Studio

- **Traduzioni**: EN ed ES sono tradotte dove la versione originale mancava. Sono da rileggere, in particolare Privacy e Note legali; in EN/ES c'è la clausola "prevale la versione italiana".
- **Privacy Policy**: aggiornata a ottobre 2026 per GitHub Pages, Web3Forms e assenza di cookie. Da far verificare allo Studio: in particolare i fornitori, i tempi di conservazione (12 mesi per le richieste senza incarico) e l'adesione dei fornitori al Data Privacy Framework.
- **Home**: la frase "risponde entro 24 ore lavorative" viene dal modello grafico, non dal sito originale. Va confermata o tolta.
