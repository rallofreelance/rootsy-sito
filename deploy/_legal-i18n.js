/* ========================================================================
   Rootsy — i18n condiviso per pagine legali (privacy / terms / cookies /
   impressum). Traduce interfaccia (nav, titolo della scheda, footer)
   in 31 lingue. Il TESTO delle pagine è tradotto a parte:
   _legal-body-i18n.js (privacy / terms / cookies: vale la versione italiana)
   e _impressum-i18n.js (impressum: vale la versione tedesca).
   ======================================================================== */
(function(){
  var SUPPORTED = ['it','en','de','fr','es','ar','ro','ru','pl','tr','zh','fa','sq',
                   'nl','pt','cs','sk','hu','sv','da','fi','el','hr','sr','bg','sl','nb','et','lv','lt','uk'];

  var LANG_META = {
    en:['🇬🇧','English'], it:['🇮🇹','Italiano'], de:['🇩🇪','Deutsch'], fr:['🇫🇷','Français'],
    es:['🇪🇸','Español'], ar:['🇸🇦','العربية'], ro:['🇷🇴','Română'], ru:['🇷🇺','Русский'],
    pl:['🇵🇱','Polski'], tr:['🇹🇷','Türkçe'], zh:['🇨🇳','中文'], fa:['🇮🇷','فارسی'], sq:['🇦🇱','Shqip'],
    nl:['🇳🇱','Nederlands'], pt:['🇵🇹','Português'], cs:['🇨🇿','Čeština'], sk:['🇸🇰','Slovenčina'],
    hu:['🇭🇺','Magyar'], sv:['🇸🇪','Svenska'], da:['🇩🇰','Dansk'], fi:['🇫🇮','Suomi'],
    el:['🇬🇷','Ελληνικά'], hr:['🇭🇷','Hrvatski'], sr:['🇷🇸','Српски'], bg:['🇧🇬','Български'],
    sl:['🇸🇮','Slovenščina'], nb:['🇳🇴','Norsk'], et:['🇪🇪','Eesti'], lv:['🇱🇻','Latviešu'],
    lt:['🇱🇹','Lietuvių'], uk:['🇺🇦','Українська']
  };

  /* Chiavi: nav.back, page.eyebrow, page.title.{privacy,terms,cookies,impressum},
     footer.copy (HTML). L'avviso "traduzione" sta nei file di ogni pagina. */
  var I18N = {
    en: {
      'nav.back': '← Back to site',
      'page.eyebrow': 'Legal document',
      'page.title.privacy': 'Privacy Policy',
      'page.title.terms': 'Terms of Service',
      'page.title.cookies': 'Cookie Policy',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    it: {
      'nav.back': '← Torna al sito',
      'page.eyebrow': 'Documento legale',
      'page.title.privacy': 'Privacy Policy',
      'page.title.terms': 'Termini di Servizio',
      'page.title.cookies': 'Cookie Policy',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    de: {
      'nav.back': '← Zurück zur Website',
      'page.eyebrow': 'Rechtsdokument',
      'page.title.privacy': 'Datenschutzerklärung',
      'page.title.terms': 'Nutzungsbedingungen',
      'page.title.cookies': 'Cookie-Richtlinie',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    fr: {
      'nav.back': '← Retour au site',
      'page.eyebrow': 'Document légal',
      'page.title.privacy': 'Politique de confidentialité',
      'page.title.terms': "Conditions d'utilisation",
      'page.title.cookies': 'Politique de cookies',
      'page.title.impressum': 'Mentions légales',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    es: {
      'nav.back': '← Volver al sitio',
      'page.eyebrow': 'Documento legal',
      'page.title.privacy': 'Política de privacidad',
      'page.title.terms': 'Términos de servicio',
      'page.title.cookies': 'Política de cookies',
      'page.title.impressum': 'Aviso legal',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    ar: {
      'nav.back': '← العودة إلى الموقع',
      'page.eyebrow': 'وثيقة قانونية',
      'page.title.privacy': 'سياسة الخصوصية',
      'page.title.terms': 'شروط الخدمة',
      'page.title.cookies': 'سياسة ملفات تعريف الارتباط',
      'page.title.impressum': 'بيانات الناشر',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    ro: {
      'nav.back': '← Înapoi la site',
      'page.eyebrow': 'Document legal',
      'page.title.privacy': 'Politica de confidențialitate',
      'page.title.terms': 'Termenii serviciului',
      'page.title.cookies': 'Politica cookie-urilor',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    ru: {
      'nav.back': '← Назад на сайт',
      'page.eyebrow': 'Юридический документ',
      'page.title.privacy': 'Политика конфиденциальности',
      'page.title.terms': 'Условия обслуживания',
      'page.title.cookies': 'Политика использования cookie',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    pl: {
      'nav.back': '← Powrót do strony',
      'page.eyebrow': 'Dokument prawny',
      'page.title.privacy': 'Polityka prywatności',
      'page.title.terms': 'Warunki świadczenia usług',
      'page.title.cookies': 'Polityka cookies',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    tr: {
      'nav.back': '← Siteye dön',
      'page.eyebrow': 'Hukuki belge',
      'page.title.privacy': 'Gizlilik Politikası',
      'page.title.terms': 'Hizmet Şartları',
      'page.title.cookies': 'Çerez Politikası',
      'page.title.impressum': 'Künye',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    zh: {
      'nav.back': '← 返回网站',
      'page.eyebrow': '法律文件',
      'page.title.privacy': '隐私政策',
      'page.title.terms': '服务条款',
      'page.title.cookies': 'Cookie 政策',
      'page.title.impressum': '版权声明',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    fa: {
      'nav.back': '← بازگشت به سایت',
      'page.eyebrow': 'سند حقوقی',
      'page.title.privacy': 'سیاست حریم خصوصی',
      'page.title.terms': 'شرایط خدمات',
      'page.title.cookies': 'سیاست کوکی',
      'page.title.impressum': 'اطلاعات ناشر',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sq: {
      'nav.back': '← Kthehu te faqja',
      'page.eyebrow': 'Dokument ligjor',
      'page.title.privacy': 'Politika e Privatësisë',
      'page.title.terms': 'Termat e Shërbimit',
      'page.title.cookies': 'Politika e Cookies',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    nl: {
      'nav.back': '← Terug naar de site',
      'page.eyebrow': 'Juridisch document',
      'page.title.privacy': 'Privacybeleid',
      'page.title.terms': 'Servicevoorwaarden',
      'page.title.cookies': 'Cookiebeleid',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    pt: {
      'nav.back': '← Voltar ao site',
      'page.eyebrow': 'Documento legal',
      'page.title.privacy': 'Política de Privacidade',
      'page.title.terms': 'Termos de Serviço',
      'page.title.cookies': 'Política de Cookies',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    cs: {
      'nav.back': '← Zpět na web',
      'page.eyebrow': 'Právní dokument',
      'page.title.privacy': 'Zásady ochrany soukromí',
      'page.title.terms': 'Podmínky služby',
      'page.title.cookies': 'Zásady cookies',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sk: {
      'nav.back': '← Späť na web',
      'page.eyebrow': 'Právny dokument',
      'page.title.privacy': 'Zásady ochrany súkromia',
      'page.title.terms': 'Podmienky služby',
      'page.title.cookies': 'Zásady cookies',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    hu: {
      'nav.back': '← Vissza az oldalra',
      'page.eyebrow': 'Jogi dokumentum',
      'page.title.privacy': 'Adatvédelmi tájékoztató',
      'page.title.terms': 'Felhasználási feltételek',
      'page.title.cookies': 'Cookie-szabályzat',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sv: {
      'nav.back': '← Tillbaka till webbplatsen',
      'page.eyebrow': 'Juridiskt dokument',
      'page.title.privacy': 'Integritetspolicy',
      'page.title.terms': 'Användarvillkor',
      'page.title.cookies': 'Cookiepolicy',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    da: {
      'nav.back': '← Tilbage til siden',
      'page.eyebrow': 'Juridisk dokument',
      'page.title.privacy': 'Privatlivspolitik',
      'page.title.terms': 'Servicevilkår',
      'page.title.cookies': 'Cookiepolitik',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    fi: {
      'nav.back': '← Takaisin sivustolle',
      'page.eyebrow': 'Oikeudellinen asiakirja',
      'page.title.privacy': 'Tietosuojakäytäntö',
      'page.title.terms': 'Käyttöehdot',
      'page.title.cookies': 'Evästekäytäntö',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    el: {
      'nav.back': '← Επιστροφή στον ιστότοπο',
      'page.eyebrow': 'Νομικό έγγραφο',
      'page.title.privacy': 'Πολιτική απορρήτου',
      'page.title.terms': 'Όροι χρήσης',
      'page.title.cookies': 'Πολιτική cookies',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    hr: {
      'nav.back': '← Natrag na stranicu',
      'page.eyebrow': 'Pravni dokument',
      'page.title.privacy': 'Pravila o privatnosti',
      'page.title.terms': 'Uvjeti korištenja',
      'page.title.cookies': 'Pravila o kolačićima',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sr: {
      'nav.back': '← Назад на сајт',
      'page.eyebrow': 'Правни документ',
      'page.title.privacy': 'Политика приватности',
      'page.title.terms': 'Услови коришћења',
      'page.title.cookies': 'Политика колачића',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    bg: {
      'nav.back': '← Обратно към сайта',
      'page.eyebrow': 'Правен документ',
      'page.title.privacy': 'Политика за поверителност',
      'page.title.terms': 'Условия за ползване',
      'page.title.cookies': 'Политика за бисквитките',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sl: {
      'nav.back': '← Nazaj na spletno mesto',
      'page.eyebrow': 'Pravni dokument',
      'page.title.privacy': 'Politika zasebnosti',
      'page.title.terms': 'Pogoji uporabe',
      'page.title.cookies': 'Politika piškotkov',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    nb: {
      'nav.back': '← Tilbake til nettstedet',
      'page.eyebrow': 'Juridisk dokument',
      'page.title.privacy': 'Personvernerklæring',
      'page.title.terms': 'Tjenestevilkår',
      'page.title.cookies': 'Retningslinjer for informasjonskapsler',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    et: {
      'nav.back': '← Tagasi saidile',
      'page.eyebrow': 'Õigusdokument',
      'page.title.privacy': 'Privaatsuspoliitika',
      'page.title.terms': 'Teenusetingimused',
      'page.title.cookies': 'Küpsiste poliitika',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    lv: {
      'nav.back': '← Atpakaļ uz vietni',
      'page.eyebrow': 'Juridisks dokuments',
      'page.title.privacy': 'Privātuma politika',
      'page.title.terms': 'Pakalpojuma noteikumi',
      'page.title.cookies': 'Sīkdatņu politika',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    lt: {
      'nav.back': '← Grįžti į svetainę',
      'page.eyebrow': 'Teisinis dokumentas',
      'page.title.privacy': 'Privatumo politika',
      'page.title.terms': 'Paslaugų teikimo sąlygos',
      'page.title.cookies': 'Slapukų politika',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    uk: {
      'nav.back': '← Назад на сайт',
      'page.eyebrow': 'Юридичний документ',
      'page.title.privacy': 'Політика конфіденційності',
      'page.title.terms': 'Умови користування',
      'page.title.cookies': 'Політика щодо файлів cookie',
      'page.title.impressum': 'Impressum',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    }
  };

  function detectLang(){
    // 0) Lingua chiesta nel link (es. dall'app: privacy.html?lang=de)
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      if (q) {
        q = q.toLowerCase().slice(0, 2);
        if (q === 'no' || q === 'nn') q = 'nb';
        if (SUPPORTED.indexOf(q) !== -1) return q;
      }
    } catch(e){}
    try {
      // 1) Lingua già scelta sulla pagina legale
      var saved = localStorage.getItem('rootsy-legal-lang');
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
      // 2) Fallback: lingua scelta sulla landing (se l'utente arriva dal footer)
      var landing = localStorage.getItem('rootsy-landing-lang');
      if (landing && SUPPORTED.indexOf(landing) !== -1) return landing;
    } catch(e){}
    // 3) Fallback: lingua del browser
    var nav = (navigator.language || 'it').toLowerCase().slice(0,2);
    if (nav === 'no' || nav === 'nn') nav = 'nb';
    return (SUPPORTED.indexOf(nav) !== -1) ? nav : 'it';
  }

  function applyLang(lng){
    var dict = I18N[lng] || I18N.it;
    document.documentElement.lang = lng;
    document.documentElement.dir = (lng === 'ar' || lng === 'fa') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var k = el.getAttribute('data-i18n-html');
      if (dict[k]) el.innerHTML = dict[k];
    });

    /* page title (browser tab) */
    var page = document.body.getAttribute('data-page');
    if (page && dict['page.title.' + page]){
      document.title = dict['page.title.' + page] + ' — Rootsy';
    }

    /* update flag/code in dropdown button */
    var meta = LANG_META[lng] || ['🌐', lng.toUpperCase()];
    var fl = document.querySelector('#legalDD .ldd-flag');
    var cu = document.querySelector('#legalDD .ldd-code');
    if (fl) fl.textContent = meta[0];
    if (cu) cu.textContent = lng.toUpperCase();
    document.querySelectorAll('#legalDDMenu .ldd-item').forEach(function(it){
      it.classList.toggle('active', it.getAttribute('data-lang') === lng);
    });

    /* "Torna al sito" e logo: aprono la pagina del sito nella stessa lingua */
    document.querySelectorAll('.legal-nav a[href="/"], .legal-nav a[data-home]').forEach(function(a){
      a.setAttribute('data-home', '1');
      a.setAttribute('href', '/' + lng + '/');
    });

    /* Impressum: il corpo della pagina ha traduzioni proprie (_impressum-i18n.js) */
    if (page === 'impressum' && window.__impressumApply) window.__impressumApply(lng);
    /* Privacy, Termini, Cookie: il testo ha traduzioni proprie (_legal-body-i18n.js) */
    if (page && page !== 'impressum' && window.__legalBodyApply) window.__legalBodyApply(lng);

    try { localStorage.setItem('rootsy-legal-lang', lng); } catch(e){}
  }
  window.applyLegalLang = applyLang;

  function buildDropdown(){
    var dd = document.getElementById('legalDD');
    if (!dd) return;
    var menu = document.getElementById('legalDDMenu');
    var btn  = document.getElementById('legalDDBtn');
    if (!menu || !btn) return;

    SUPPORTED.forEach(function(code){
      var meta = LANG_META[code] || ['🌐', code.toUpperCase()];
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ldd-item';
      b.setAttribute('data-lang', code);
      b.innerHTML = '<span class="ldd-f">' + meta[0] + '</span> <span class="ldd-l">' + meta[1] + '</span>';
      b.addEventListener('click', function(){
        applyLang(code);
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
      menu.appendChild(b);
    });

    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var o = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    document.addEventListener('click', function(){
      dd.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  function init(){
    buildDropdown();
    applyLang(detectLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
