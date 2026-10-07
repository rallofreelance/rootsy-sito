# Rootsy — sito myrootsy.com

Questo repository contiene **solo il sito pubblico** https://myrootsy.com
(pagina principale e pagine legali). Il codice dell'app è in un repository privato separato.

## Come funziona

| Cosa succede | Risultato |
| --- | --- |
| Una modifica viene salvata sul ramo `main` | Dopo 1–2 minuti è online su myrootsy.com |
| Si apre una proposta di modifica (Pull Request) | Netlify crea un link di **anteprima** da controllare prima |

## File principali

| File | Cosa contiene |
| --- | --- |
| `index.html` | La pagina principale, con tutte le traduzioni |
| `privacy.html`, `terms.html`, `cookies.html`, `impressum.html` | Pagine legali |
| `_legal-i18n.js` | Traduzioni dei menu delle pagine legali |
| `og-image.png` / `og-image.svg` | Immagine che compare quando si condivide il link |
| `netlify.toml` | Impostazioni di pubblicazione |
