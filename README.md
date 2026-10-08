# Rootsy — sito myrootsy.com

Questo repository contiene **solo il sito pubblico** https://myrootsy.com
(pagina principale e pagine legali). Il codice dell'app è in un repository privato separato.

## Come funziona

| Cosa succede | Risultato |
| --- | --- |
| Una modifica viene salvata sul ramo `main` | Dopo 1–2 minuti è online su myrootsy.com |
| Si apre una proposta di modifica (Pull Request) | Netlify crea un link di **anteprima** da controllare prima |

## File principali

Tutti i file del sito sono nella cartella `deploy/`.

| File | Cosa contiene |
| --- | --- |
| `deploy/index.html` | La pagina principale, con tutte le traduzioni |
| `deploy/privacy.html`, `deploy/terms.html`, `deploy/cookies.html`, `deploy/impressum.html` | Pagine legali |
| `deploy/_legal-i18n.js` | Traduzioni del menu delle pagine legali |
| `deploy/i18n/privacy/`, `deploy/i18n/terms/`, `deploy/i18n/cookies/` | Testo di Privacy, Termini e Cookie in 30 lingue (vale per legge la versione italiana scritta nelle pagine) |
| `deploy/i18n/impressum/` | Testo dell'Impressum in 30 lingue (vale per legge la versione tedesca) |
| `deploy/img/` | Foto del sito (David nella sezione "Chi siamo") |
| `deploy/fonts/` | I font del sito (Inter e Fraunces) ospitati da noi: nessuna richiesta parte verso Google Fonts |
| `deploy/og-image.png` / `deploy/og-image.svg` | Immagine che compare quando si condivide il link |
| `netlify.toml` | Impostazioni di pubblicazione |
