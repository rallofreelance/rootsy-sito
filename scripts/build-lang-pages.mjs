// ============================================================================
// Rootsy — crea una pagina per ogni lingua: deploy/<lingua>/index.html
//
// Perché: Google legge il testo scritto nella pagina. La pagina principale
// cambia lingua con JavaScript, quindi Google vedeva solo l'italiano.
// Qui scriviamo il testo già tradotto dentro 31 pagine vere
// (myrootsy.com/de/, /en/, /ar/ ...) e diciamo a Google quale pagina è per
// quale lingua (tag "hreflang" + sitemap.xml).
//
// Netlify lo esegue a ogni pubblicazione (vedi netlify.toml).
// In locale:  node scripts/build-lang-pages.mjs
// Nessuna libreria esterna: solo Node.
// ============================================================================
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'deploy');
const SITE = 'https://myrootsy.com';
const SRC = readFileSync(join(ROOT, 'index.html'), 'utf8');

// --- lingue: le stesse della pagina -----------------------------------------
const LANGS = JSON.parse(SRC.match(/const LANGS = (\[[^\]]+\]);/)[1]);
const RTL = new Set(['ar', 'fa']);
const OG_LOCALE = {
  it: 'it_IT', en: 'en_US', de: 'de_DE', fr: 'fr_FR', es: 'es_ES', ar: 'ar_AR', ro: 'ro_RO', ru: 'ru_RU',
  pl: 'pl_PL', tr: 'tr_TR', zh: 'zh_CN', fa: 'fa_IR', sq: 'sq_AL', nl: 'nl_NL', pt: 'pt_PT', cs: 'cs_CZ',
  sk: 'sk_SK', hu: 'hu_HU', sv: 'sv_SE', da: 'da_DK', fi: 'fi_FI', el: 'el_GR', hr: 'hr_HR', sr: 'sr_RS',
  bg: 'bg_BG', sl: 'sl_SI', nb: 'nb_NO', et: 'et_EE', lv: 'lv_LV', lt: 'lt_LT', uk: 'uk_UA',
};

// --- dizionario italiano (dentro la pagina) + file delle altre lingue --------
const itStart = SRC.indexOf('const I18N = { it: ') + 'const I18N = { it: '.length;
const itEnd = SRC.indexOf(' };', itStart);
const IT = JSON.parse(SRC.slice(itStart, itEnd));
const dictFor = (lng) =>
  lng === 'it' ? IT : { ...IT, ...JSON.parse(readFileSync(join(ROOT, 'i18n', lng + '.json'), 'utf8')) };

// --- utilità -----------------------------------------------------------------
const escText = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (t) => escText(t).replace(/"/g, '&quot;');
const plain = (html) =>
  html.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').replace(/([，。、！？：；])\s+/g, '$1').trim();

// Trova la fine dell'elemento che inizia in `openEnd` (conta i tag annidati con lo stesso nome)
function findClose(html, tag, openEnd) {
  const re = new RegExp(`<(/?)${tag}\\b[^>]*?(/?)>`, 'gi');
  re.lastIndex = openEnd;
  let depth = 1, m;
  while ((m = re.exec(html))) {
    if (m[2] === '/') continue;            // <tag ... />
    depth += m[1] ? -1 : 1;
    if (depth === 0) return { innerEnd: m.index, closeEnd: re.lastIndex };
  }
  return null;
}

// Riempie gli elementi data-i18n / data-i18n-html come fa applyLang() nel browser
function fillTexts(html, dict) {
  // zone dei listini prezzi: lì applyLang usa innerHTML anche per data-i18n
  const priceZones = [];
  const pz = /<([a-zA-Z]+)\b[^>]*class="[^"]*\bprice-features\b[^"]*"[^>]*>/g;
  let z;
  while ((z = pz.exec(html))) {
    const c = findClose(html, z[1], z.index + z[0].length);
    if (c) priceZones.push([z.index, c.closeEnd]);
  }
  const inPrice = (i) => priceZones.some(([a, b]) => i > a && i < b);
  const open = /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)\sdata-i18n(-html)?="([^"]+)"([^>]*)>/g;
  let out = '', pos = 0, m, filled = 0;
  while ((m = open.exec(html))) {
    const [whole, tag, , isHtml, key] = m;
    const openEnd = m.index + whole.length;
    const val = dict[key];
    if (!val) continue;
    const close = findClose(html, tag, openEnd);
    if (!close) continue;
    // in applyLang, i <li data-i18n> dei prezzi usano innerHTML
    const asHtml = Boolean(isHtml) || (tag.toLowerCase() === 'li' && inPrice(m.index));
    out += html.slice(pos, openEnd) + (asHtml ? val : escText(val));
    pos = close.innerEnd;
    open.lastIndex = close.innerEnd;
    filled++;
  }
  return { html: out + html.slice(pos), filled };
}

const setMeta = (html, attr, name, value) => {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(">)`);
  if (!re.test(html)) throw new Error('meta mancante: ' + name);
  return html.replace(re, `$1${escAttr(value)}$2`);
};

// --- genera le 31 pagine -----------------------------------------------------
let report = [];
for (const lng of LANGS) {
  const dict = dictFor(lng);
  const url = `${SITE}/${lng}/`;
  // titolo e descrizione per Google: con le parole che la gente cerca (viaggi, trasferirsi, app ...)
  const title = dict['meta.title'] ? plain(dict['meta.title']) : `Rootsy — ${plain(dict['hero.title']).replace(/[.。]$/, '')}`;
  const desc = dict['meta.description'] ? plain(dict['meta.description']) : plain(dict['hero.lead']);

  let { html, filled } = fillTexts(SRC, dict);

  html = html.replace(/<html lang="[^"]*"[^>]*>/, `<html lang="${lng}" dir="${RTL.has(lng) ? 'rtl' : 'ltr'}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escText(title)}</title>`);
  html = setMeta(html, 'name', 'description', desc);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', desc);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', desc);
  html = html.replace('<link rel="canonical" href="' + SITE + '/">', `<link rel="canonical" href="${url}">`);
  html = html.replace('<!-- seo:end -->',
    `<!-- seo:end -->\n<meta property="og:locale" content="${OG_LOCALE[lng] || lng}">\n` +
    `<script>window.ROOTSY_PAGE_LANG=${JSON.stringify(lng)};</script>`);

  mkdirSync(join(ROOT, lng), { recursive: true });
  writeFileSync(join(ROOT, lng, 'index.html'), html);
  report.push(`${lng}:${filled}`);
}

// --- sitemap.xml con tutte le lingue -----------------------------------------
const alt = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}/${l}/"/>`).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;
const urls = [
  `  <url>\n    <loc>${SITE}/</loc>\n${alt}\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  ...LANGS.map((l) => `  <url>\n    <loc>${SITE}/${l}/</loc>\n${alt}\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`),
  ...['privacy', 'terms', 'cookies', 'impressum'].map((p) =>
    `  <url>\n    <loc>${SITE}/${p}.html</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>`),
];
writeFileSync(join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);

console.log(`Pagine create: ${LANGS.length} (testi riempiti per lingua → ${report.join(' ')})`);
