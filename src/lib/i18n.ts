import esJson from "@/content/i18n-es.json";
import type { Lang } from "@/lib/site";
export type { Lang };

const it = {
  nav: {
    about: "Chi Siamo",
    practice: "Aree di Attività",
    global: "Dove Operiamo",
    method: "Il Metodo",
    contact: "Contatti",
    cta: "Richiedi Consulenza",
  },
  hero: {
    overline: "Studio Legale Internazionale",
    titleLines: ["Il diritto come bussola", "per le scelte d'impresa."],
    subtitle:
      "Assistenza in diritto internazionale, societario, risk management e compliance. Supporto globale per imprese e privati, con rigore, riservatezza e visione strategica.",
    ctaPrimary: "Esplora le Aree di Attività",
    ctaSecondary: "Contatta lo Studio",
    badges: ["Diritto Internazionale", "D.Lgs. 231/01", "Arbitrato", "GDPR & Compliance"],
    statAreas: "Aree di attività",
    statReach: "Aree geografiche",
    scroll: "Scorri per scoprire",
  },
  marquee: [
    "Diritto Internazionale",
    "Arbitrato Commerciale",
    "Compliance D.Lgs. 231/01",
    "Contratti Transfrontalieri",
    "Diritto Societario",
    "Tutela dei Dati GDPR",
    "Contenzioso Civile e Penale",
    "Risk Management",
  ],
  about: {
    overline: "Chi Siamo",
    title: "Rigore giuridico, conoscenza dei mercati, attenzione etica.",
    p1: "Un approccio multidisciplinare che garantisce soluzioni personalizzate e sostenibili. Lo Studio valorizza la fiducia come fondamento della relazione professionale, offrendo consulenza trasparente e riservata, sempre orientata ai risultati.",
    p2: "Dalla Calabria verso i mercati globali: lo Studio Legale AC Law Firm affianca imprese e privati nelle operazioni che contano, unendo tradizione forense e pragmatismo internazionale.",
    founderName: "Avv. Antonio Circosta",
    founderRole: "Founder — Studio Legale AC Law Firm",
    founderBadge: "Ordine degli Avvocati di Reggio Calabria",
    valuesTitle: "I nostri principi",
    values: ["Rigore giuridico", "Conoscenza dei mercati", "Attenzione etica", "Riservatezza assoluta"],
  },
  practice: {
    overline: "Aree di Attività",
    title: "Quattro pilastri, un'unica regia.",
    subtitle:
      "Ogni mandato è seguito con visione d'insieme: diritto, mercati e geopolitica convergono in un'unica strategia.",
    areas: [
      {
        title: "Diritto Internazionale",
        desc: "Contratti transnazionali, contenzioso internazionale, arbitrati e tutela dei diritti fondamentali.",
        subs: ["Contrattualistica cross-border", "Arbitrati internazionali", "Contenzioso UE", "Diritti fondamentali"],
      },
      {
        title: "Diritto Societario e Commerciale",
        desc: "Assistenza in operazioni straordinarie, corporate governance e gestione dei rapporti societari.",
        subs: ["M&A e operazioni straordinarie", "Corporate governance", "Joint venture", "Rapporti societari"],
      },
      {
        title: "Risk Management & Compliance",
        desc: "Modelli organizzativi ex D.Lgs. 231/2001, prevenzione dei rischi, anticorruzione e protezione dei dati.",
        subs: ["Modelli 231/01 e OdV", "Anticorruzione", "GDPR e DPO", "Data Governance"],
      },
      {
        title: "Assistenza Giudiziale e Stragiudiziale",
        desc: "Difesa tecnica in sede civile, penale e amministrativa, con soluzioni mirate alle esigenze del cliente.",
        subs: ["Contenzioso civile", "Penale d'impresa", "Amministrativo", "Negoziazione"],
      },
    ],
  },
  global: {
    overline: "Dove Operiamo",
    title: "Geopolitica e strategie globali.",
    body: "Le dinamiche internazionali influenzano mercati e imprese. Lo Studio offre consulenza per trasformare i cambiamenti geopolitici in scelte societarie consapevoli, integrando diritto internazionale, risk management e compliance.",
    regions: [
      {
        name: "Italia & Unione Europea",
        desc: "Sede principale e presidio sul diritto dell'Unione, davanti alle giurisdizioni nazionali ed europee.",
      },
      {
        name: "Svizzera & Regno Unito",
        desc: "Contrattualistica e strutture societarie nei principali hub finanziari extra-UE.",
      },
      {
        name: "Medio Oriente & Golfo",
        desc: "Consulenza per investimenti e joint venture nei mercati del Golfo e del Mediterraneo allargato.",
      },
      {
        name: "Americhe & Asia",
        desc: "Coordinamento con corrispondenti locali per operazioni cross-border e tutela patrimoniale.",
      },
    ],
  },
  method: {
    overline: "Il Nostro Metodo",
    title: "Un percorso in quattro fasi.",
    steps: [
      {
        title: "Analisi & Audit dei Rischi",
        desc: "Mappatura preliminare del perimetro giuridico e dei rischi operativi del cliente.",
      },
      {
        title: "Strategia Giuridica Integrata",
        desc: "Un'architettura legale su misura, che integra diritto, mercati e scenario geopolitico.",
      },
      {
        title: "Negoziazione & Redazione",
        desc: "Contratti e atti negoziali redatti con precisione, anche in contesti multilingue.",
      },
      {
        title: "Esecuzione & Monitoraggio",
        desc: "Assistenza giudiziale e monitoraggio continuo della compliance nel tempo.",
      },
    ],
  },
  contact: {
    overline: "Contatti",
    title: "Richiedi una consulenza riservata.",
    subtitle:
      "Ogni richiesta è trattata con assoluta confidenzialità. Lo Studio risponde entro 24 ore lavorative.",
    addressLabel: "Sede",
    address: "Traversa I Via Gramsci 2, 89042 Gioiosa Ionica (RC), Italia",
    phoneLabel: "Telefono",
    phone: "+39 0965 890508",
    emailLabel: "Email",
    email: "info@aclawfirm.eu",
    pecLabel: "PEC",
    pec: "avvcircosta@legpec.it",
    form: {
      name: "Nome e Cognome",
      namePlaceholder: "Mario Rossi",
      email: "Email",
      emailPlaceholder: "nome@azienda.com",
      phone: "Telefono (facoltativo)",
      phonePlaceholder: "+39 333 000 0000",
      company: "Società (facoltativo)",
      companyPlaceholder: "Azienda S.p.A.",
      area: "Area di attività",
      areaPlaceholder: "Seleziona un'area",
      areas: [
        "Diritto Internazionale",
        "Diritto Societario e Commerciale",
        "Risk Management & Compliance",
        "Assistenza Giudiziale e Stragiudiziale",
        "Altro",
      ],
      message: "Messaggio",
      messagePlaceholder: "Descrivi brevemente la tua esigenza...",
      consent:
        "Ho letto l’informativa privacy e acconsento al trattamento dei miei dati per ricevere risposta alla richiesta.",
      submit: "Invia la richiesta",
      sending: "Invio in corso...",
      successTitle: "Richiesta inviata",
      successBody: "Grazie. Lo Studio ti ricontatterà a breve.",
      errorTitle: "Invio non riuscito",
      errorBody: "Riprova tra poco o scrivici direttamente via email.",
      validation: "Compila tutti i campi obbligatori e accetta l'informativa privacy.",
    },
  },
  footer: {
    watermark: "AC LAW FIRM",
    tagline: "Studio Legale Internazionale",
    disclosure:
      "© 2026 Studio Legale AC Law Firm — Avv. Antonio Circosta · Traversa I Via Gramsci 2, 89042 Gioiosa Ionica (RC) · P.IVA IT 02573920804",
    deontological: "Informazioni rese ai sensi del Codice Deontologico Forense",
    privacy: "Privacy Policy",
    backToTop: "Torna su",
    privacyTitle: "Privacy Policy",
    privacyBody:
      "I dati inviati tramite questo sito sono trattati dallo Studio Legale AC Law Firm esclusivamente per rispondere alle richieste di consulenza, ai sensi del Reg. UE 2016/679 (GDPR). Titolare del trattamento: Avv. Antonio Circosta, Traversa I Via Gramsci 2, 89042 Gioiosa Ionica (RC). I dati non sono ceduti a terzi e sono conservati per il tempo strettamente necessario alla gestione della richiesta. Per esercitare i tuoi diritti scrivi a info@aclawfirm.eu.",
  },
};

const en: typeof it = {
  nav: {
    about: "The Firm",
    practice: "Practice Areas",
    global: "Global Reach",
    method: "Our Method",
    contact: "Contact",
    cta: "Request Consultation",
  },
  hero: {
    overline: "International Law Firm",
    titleLines: ["The law as a compass", "for business decisions."],
    subtitle:
      "Advisory in international law, corporate law, risk management and compliance. Global support for businesses and individuals, delivered with rigour, discretion and strategic vision.",
    ctaPrimary: "Explore Practice Areas",
    ctaSecondary: "Contact the Firm",
    badges: ["International Law", "Leg. Decree 231/01", "Arbitration", "GDPR & Compliance"],
    statAreas: "Practice areas",
    statReach: "Geographic regions",
    scroll: "Scroll to discover",
  },
  marquee: [
    "International Law",
    "Commercial Arbitration",
    "Compliance Leg. Decree 231/01",
    "Cross-Border Contracts",
    "Corporate Law",
    "GDPR Data Protection",
    "Civil & Criminal Litigation",
    "Risk Management",
  ],
  about: {
    overline: "The Firm",
    title: "Legal rigour, market knowledge, ethical care.",
    p1: "A multidisciplinary approach delivering tailored, sustainable solutions. The firm places trust at the heart of the professional relationship, offering transparent, confidential advice always oriented to results.",
    p2: "From Calabria to global markets: AC Law Firm stands beside businesses and individuals in the operations that matter, blending legal tradition with international pragmatism.",
    founderName: "Avv. Antonio Circosta",
    founderRole: "Founder — AC Law Firm",
    founderBadge: "Reggio Calabria Bar Association",
    valuesTitle: "Our principles",
    values: ["Legal rigour", "Market knowledge", "Ethical care", "Absolute confidentiality"],
  },
  practice: {
    overline: "Practice Areas",
    title: "Four pillars, one direction.",
    subtitle:
      "Every mandate is handled with a complete view: law, markets and geopolitics converge into a single strategy.",
    areas: [
      {
        title: "International Law",
        desc: "Cross-border contracts, international litigation, arbitration and protection of fundamental rights.",
        subs: ["Cross-border contracts", "International arbitration", "EU litigation", "Fundamental rights"],
      },
      {
        title: "Corporate & Commercial Law",
        desc: "Advisory on extraordinary transactions, corporate governance and shareholder relations.",
        subs: ["M&A and extraordinary deals", "Corporate governance", "Joint ventures", "Shareholder relations"],
      },
      {
        title: "Risk Management & Compliance",
        desc: "Organisational models under Leg. Decree 231/2001, risk prevention, anti-corruption and data protection.",
        subs: ["231/01 Models & SB", "Anti-corruption", "GDPR & DPO", "Data Governance"],
      },
      {
        title: "Litigation & Out-of-Court",
        desc: "Technical defence in civil, criminal and administrative venues, with solutions tailored to the client.",
        subs: ["Civil litigation", "Corporate criminal", "Administrative", "Negotiation"],
      },
    ],
  },
  global: {
    overline: "Where We Operate",
    title: "Geopolitics and global strategies.",
    body: "International dynamics shape markets and businesses. The firm advises clients in turning geopolitical change into conscious corporate choices, integrating international law, risk management and compliance.",
    regions: [
      {
        name: "Italy & European Union",
        desc: "Headquarters and stronghold on EU law, before national and European jurisdictions.",
      },
      {
        name: "Switzerland & United Kingdom",
        desc: "Contracts and corporate structures across the leading non-EU financial hubs.",
      },
      {
        name: "Middle East & Gulf",
        desc: "Advisory for investments and joint ventures across Gulf and wider Mediterranean markets.",
      },
      {
        name: "Americas & Asia",
        desc: "Coordination with local correspondents for cross-border deals and asset protection.",
      },
    ],
  },
  method: {
    overline: "Our Method",
    title: "A four-phase journey.",
    steps: [
      {
        title: "Analysis & Risk Audit",
        desc: "Preliminary mapping of the client's legal perimeter and operational risks.",
      },
      {
        title: "Integrated Legal Strategy",
        desc: "A tailored legal architecture integrating law, markets and the geopolitical landscape.",
      },
      {
        title: "Negotiation & Drafting",
        desc: "Contracts and transactional documents drafted with precision, including multilingual contexts.",
      },
      {
        title: "Execution & Monitoring",
        desc: "Litigation support and continuous compliance monitoring over time.",
      },
    ],
  },
  contact: {
    overline: "Contact",
    title: "Request a confidential consultation.",
    subtitle:
      "Every enquiry is handled with absolute confidentiality. The firm replies within one business day.",
    addressLabel: "Office",
    address: "Traversa I Via Gramsci 2, 89042 Gioiosa Ionica (RC), Italy",
    phoneLabel: "Phone",
    phone: "+39 0965 890508",
    emailLabel: "Email",
    email: "info@aclawfirm.eu",
    pecLabel: "PEC (certified email)",
    pec: "avvcircosta@legpec.it",
    form: {
      name: "Full name",
      namePlaceholder: "John Smith",
      email: "Email",
      emailPlaceholder: "name@company.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+44 ...",
      company: "Company (optional)",
      companyPlaceholder: "Company Ltd.",
      area: "Practice area",
      areaPlaceholder: "Select an area",
      areas: [
        "International Law",
        "Corporate & Commercial Law",
        "Risk Management & Compliance",
        "Litigation & Out-of-Court",
        "Other",
      ],
      message: "Message",
      messagePlaceholder: "Briefly describe your needs...",
      consent: "I have read the privacy notice and consent to the processing of my data in order to receive a reply to my enquiry.",
      submit: "Send enquiry",
      sending: "Sending...",
      successTitle: "Enquiry sent",
      successBody: "Thank you. The firm will get back to you shortly.",
      errorTitle: "Submission failed",
      errorBody: "Please try again in a moment or email us directly.",
      validation: "Please fill in all required fields and accept the privacy notice.",
    },
  },
  footer: {
    watermark: "AC LAW FIRM",
    tagline: "International Law Firm",
    disclosure:
      "© 2026 Studio Legale AC Law Firm — Avv. Antonio Circosta · Traversa I Via Gramsci 2, 89042 Gioiosa Ionica (RC) · VAT IT 02573920804",
    deontological: "Information provided under the Italian Code of Legal Ethics",
    privacy: "Privacy Policy",
    backToTop: "Back to top",
    privacyTitle: "Privacy Policy",
    privacyBody:
      "Data submitted through this website is processed by Studio Legale AC Law Firm solely to respond to consultation requests, pursuant to Reg. EU 2016/679 (GDPR). Data controller: Avv. Antonio Circosta, Traversa I Via Gramsci 2, 89042 Gioiosa Ionica (RC). Data is never shared with third parties and is retained only for the time strictly needed to handle the request. To exercise your rights, write to info@aclawfirm.eu.",
  },
};

const es: typeof it = esJson;

export const translations: Record<Lang, typeof it> = { it, en, es };
