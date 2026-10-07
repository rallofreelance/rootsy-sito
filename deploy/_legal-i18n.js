/* ========================================================================
   Rootsy — i18n condiviso per pagine legali (privacy / terms / cookies /
   impressum). Traduce interfaccia (nav, titolo pagina, advisory, footer)
   in 31 lingue. Il CORPO del testo legale resta in italiano: la versione
   italiana è la versione vincolante.
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
     advisory.title, advisory.body (HTML), footer.copy (HTML) */
  var I18N = {
    en: {
      'nav.back': '← Back to site',
      'page.eyebrow': 'Legal document',
      'page.title.privacy': 'Privacy Policy',
      'page.title.terms': 'Terms of Service',
      'page.title.cookies': 'Cookie Policy',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Courtesy translation',
      'advisory.body': 'This legal document is provided as a <strong>courtesy translation</strong>. The Italian version remains the <strong>binding version</strong>. For a complete version in your language write to <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — we will publish it within 48h.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    it: {
      'nav.back': '← Torna al sito',
      'page.eyebrow': 'Documento legale',
      'page.title.privacy': 'Privacy Policy',
      'page.title.terms': 'Termini di Servizio',
      'page.title.cookies': 'Cookie Policy',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Traduzione di cortesia',
      'advisory.body': 'Questo documento legale è fornito come <strong>traduzione di cortesia</strong>. La versione italiana resta la <strong>versione vincolante</strong>. Per una versione completa nella tua lingua scrivi a <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — la pubblicheremo entro 48h.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    de: {
      'nav.back': '← Zurück zur Website',
      'page.eyebrow': 'Rechtsdokument',
      'page.title.privacy': 'Datenschutzerklärung',
      'page.title.terms': 'Nutzungsbedingungen',
      'page.title.cookies': 'Cookie-Richtlinie',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Höflichkeitsübersetzung',
      'advisory.body': 'Dieses Rechtsdokument wird als <strong>Höflichkeitsübersetzung</strong> bereitgestellt. Die italienische Version bleibt die <strong>verbindliche Version</strong>. Für eine vollständige Version in deiner Sprache schreibe an <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — wir veröffentlichen sie innerhalb von 48 Stunden.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    fr: {
      'nav.back': '← Retour au site',
      'page.eyebrow': 'Document légal',
      'page.title.privacy': 'Politique de confidentialité',
      'page.title.terms': "Conditions d'utilisation",
      'page.title.cookies': 'Politique de cookies',
      'page.title.impressum': 'Mentions légales',
      'advisory.title': 'Traduction de courtoisie',
      'advisory.body': "Ce document légal est fourni comme une <strong>traduction de courtoisie</strong>. La version italienne reste la <strong>version contraignante</strong>. Pour une version complète dans ta langue écris à <a href=\"mailto:hello@myrootsy.com\">hello@myrootsy.com</a> — nous la publierons sous 48h.",
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    es: {
      'nav.back': '← Volver al sitio',
      'page.eyebrow': 'Documento legal',
      'page.title.privacy': 'Política de privacidad',
      'page.title.terms': 'Términos de servicio',
      'page.title.cookies': 'Política de cookies',
      'page.title.impressum': 'Aviso legal',
      'advisory.title': 'Traducción de cortesía',
      'advisory.body': 'Este documento legal se proporciona como <strong>traducción de cortesía</strong>. La versión italiana sigue siendo la <strong>versión vinculante</strong>. Para una versión completa en tu idioma escribe a <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — la publicaremos en 48h.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    ar: {
      'nav.back': '← العودة إلى الموقع',
      'page.eyebrow': 'وثيقة قانونية',
      'page.title.privacy': 'سياسة الخصوصية',
      'page.title.terms': 'شروط الخدمة',
      'page.title.cookies': 'سياسة ملفات تعريف الارتباط',
      'page.title.impressum': 'بيانات الناشر',
      'advisory.title': 'ترجمة من باب المجاملة',
      'advisory.body': 'يتم توفير هذه الوثيقة القانونية كـ <strong>ترجمة من باب المجاملة</strong>. تبقى النسخة الإيطالية <strong>النسخة الملزمة</strong>. للحصول على نسخة كاملة بلغتك اكتب إلى <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — سننشرها خلال 48 ساعة.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    ro: {
      'nav.back': '← Înapoi la site',
      'page.eyebrow': 'Document legal',
      'page.title.privacy': 'Politica de confidențialitate',
      'page.title.terms': 'Termenii serviciului',
      'page.title.cookies': 'Politica cookie-urilor',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Traducere de curtoazie',
      'advisory.body': 'Acest document legal este furnizat ca <strong>traducere de curtoazie</strong>. Versiunea italiană rămâne <strong>versiunea obligatorie</strong>. Pentru o versiune completă în limba ta scrie la <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — o vom publica în 48h.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    ru: {
      'nav.back': '← Назад на сайт',
      'page.eyebrow': 'Юридический документ',
      'page.title.privacy': 'Политика конфиденциальности',
      'page.title.terms': 'Условия обслуживания',
      'page.title.cookies': 'Политика использования cookie',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Перевод из вежливости',
      'advisory.body': 'Этот юридический документ предоставляется как <strong>перевод из вежливости</strong>. Итальянская версия остаётся <strong>обязательной версией</strong>. Для полной версии на твоём языке напиши на <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — мы опубликуем её в течение 48 часов.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    pl: {
      'nav.back': '← Powrót do strony',
      'page.eyebrow': 'Dokument prawny',
      'page.title.privacy': 'Polityka prywatności',
      'page.title.terms': 'Warunki świadczenia usług',
      'page.title.cookies': 'Polityka cookies',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Tłumaczenie kurtuazyjne',
      'advisory.body': 'Ten dokument prawny jest udostępniany jako <strong>tłumaczenie kurtuazyjne</strong>. Wersja włoska pozostaje <strong>wersją wiążącą</strong>. Aby uzyskać pełną wersję w swoim języku napisz na <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — opublikujemy ją w ciągu 48h.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    tr: {
      'nav.back': '← Siteye dön',
      'page.eyebrow': 'Hukuki belge',
      'page.title.privacy': 'Gizlilik Politikası',
      'page.title.terms': 'Hizmet Şartları',
      'page.title.cookies': 'Çerez Politikası',
      'page.title.impressum': 'Künye',
      'advisory.title': 'Nezaket çevirisi',
      'advisory.body': 'Bu hukuki belge bir <strong>nezaket çevirisi</strong> olarak sağlanmıştır. İtalyanca versiyon <strong>bağlayıcı versiyon</strong> olarak kalır. Dilinde tam versiyon için <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> adresine yaz — 48 saat içinde yayınlayacağız.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    zh: {
      'nav.back': '← 返回网站',
      'page.eyebrow': '法律文件',
      'page.title.privacy': '隐私政策',
      'page.title.terms': '服务条款',
      'page.title.cookies': 'Cookie 政策',
      'page.title.impressum': '版权声明',
      'advisory.title': '礼貌翻译',
      'advisory.body': '此法律文件作为<strong>礼貌翻译</strong>提供。意大利语版本仍为<strong>具有约束力的版本</strong>。如需您语言的完整版本，请写信至 <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — 我们将在 48 小时内发布。',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    fa: {
      'nav.back': '← بازگشت به سایت',
      'page.eyebrow': 'سند حقوقی',
      'page.title.privacy': 'سیاست حریم خصوصی',
      'page.title.terms': 'شرایط خدمات',
      'page.title.cookies': 'سیاست کوکی',
      'page.title.impressum': 'اطلاعات ناشر',
      'advisory.title': 'ترجمه تشریفاتی',
      'advisory.body': 'این سند حقوقی به‌عنوان <strong>ترجمه تشریفاتی</strong> ارائه می‌شود. نسخه ایتالیایی <strong>نسخه الزام‌آور</strong> باقی می‌ماند. برای نسخه کامل به زبان شما به <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> بنویسید — آن را ظرف ۴۸ ساعت منتشر خواهیم کرد.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sq: {
      'nav.back': '← Kthehu te faqja',
      'page.eyebrow': 'Dokument ligjor',
      'page.title.privacy': 'Politika e Privatësisë',
      'page.title.terms': 'Termat e Shërbimit',
      'page.title.cookies': 'Politika e Cookies',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Përkthim mirësjellës',
      'advisory.body': 'Ky dokument ligjor ofrohet si <strong>përkthim mirësjellës</strong>. Versioni italian mbetet <strong>versioni detyrues</strong>. Për një version të plotë në gjuhën tënde shkruaj te <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — do ta publikojmë brenda 48 orësh.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    nl: {
      'nav.back': '← Terug naar de site',
      'page.eyebrow': 'Juridisch document',
      'page.title.privacy': 'Privacybeleid',
      'page.title.terms': 'Servicevoorwaarden',
      'page.title.cookies': 'Cookiebeleid',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Vertaling uit hoffelijkheid',
      'advisory.body': 'Dit juridische document wordt aangeboden als <strong>vertaling uit hoffelijkheid</strong>. De Italiaanse versie blijft de <strong>bindende versie</strong>. Wil je een volledige versie in jouw taal? Schrijf naar <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — we publiceren die binnen 48 uur.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    pt: {
      'nav.back': '← Voltar ao site',
      'page.eyebrow': 'Documento legal',
      'page.title.privacy': 'Política de Privacidade',
      'page.title.terms': 'Termos de Serviço',
      'page.title.cookies': 'Política de Cookies',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Tradução de cortesia',
      'advisory.body': 'Este documento legal é disponibilizado como <strong>tradução de cortesia</strong>. A versão italiana continua a ser a <strong>versão vinculativa</strong>. Para uma versão completa na tua língua escreve para <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — publicá-la-emos em 48 horas.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    cs: {
      'nav.back': '← Zpět na web',
      'page.eyebrow': 'Právní dokument',
      'page.title.privacy': 'Zásady ochrany soukromí',
      'page.title.terms': 'Podmínky služby',
      'page.title.cookies': 'Zásady cookies',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Informativní překlad',
      'advisory.body': 'Tento právní dokument je poskytnut jako <strong>informativní překlad</strong>. <strong>Závazná zůstává</strong> italská verze. Pro úplnou verzi ve svém jazyce napiš na <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — zveřejníme ji do 48 hodin.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sk: {
      'nav.back': '← Späť na web',
      'page.eyebrow': 'Právny dokument',
      'page.title.privacy': 'Zásady ochrany súkromia',
      'page.title.terms': 'Podmienky služby',
      'page.title.cookies': 'Zásady cookies',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Informatívny preklad',
      'advisory.body': 'Tento právny dokument je poskytnutý ako <strong>informatívny preklad</strong>. <strong>Záväzná zostáva</strong> talianska verzia. Pre úplnú verziu vo svojom jazyku napíš na <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — zverejníme ju do 48 hodín.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    hu: {
      'nav.back': '← Vissza az oldalra',
      'page.eyebrow': 'Jogi dokumentum',
      'page.title.privacy': 'Adatvédelmi tájékoztató',
      'page.title.terms': 'Felhasználási feltételek',
      'page.title.cookies': 'Cookie-szabályzat',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Tájékoztató fordítás',
      'advisory.body': 'Ez a jogi dokumentum <strong>tájékoztató fordításként</strong> érhető el. Az olasz változat marad a <strong>kötelező érvényű változat</strong>. Ha a saját nyelveden szeretnéd a teljes változatot, írj a <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> címre — 48 órán belül közzétesszük.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sv: {
      'nav.back': '← Tillbaka till webbplatsen',
      'page.eyebrow': 'Juridiskt dokument',
      'page.title.privacy': 'Integritetspolicy',
      'page.title.terms': 'Användarvillkor',
      'page.title.cookies': 'Cookiepolicy',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Artighetsöversättning',
      'advisory.body': 'Detta juridiska dokument tillhandahålls som <strong>artighetsöversättning</strong>. Den italienska versionen är fortfarande den <strong>bindande versionen</strong>. Vill du ha en fullständig version på ditt språk? Skriv till <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — vi publicerar den inom 48 timmar.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    da: {
      'nav.back': '← Tilbage til siden',
      'page.eyebrow': 'Juridisk dokument',
      'page.title.privacy': 'Privatlivspolitik',
      'page.title.terms': 'Servicevilkår',
      'page.title.cookies': 'Cookiepolitik',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Høflighedsoversættelse',
      'advisory.body': 'Dette juridiske dokument stilles til rådighed som <strong>høflighedsoversættelse</strong>. Den italienske version er fortsat den <strong>bindende version</strong>. Vil du have en komplet version på dit sprog? Skriv til <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — vi offentliggør den inden for 48 timer.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    fi: {
      'nav.back': '← Takaisin sivustolle',
      'page.eyebrow': 'Oikeudellinen asiakirja',
      'page.title.privacy': 'Tietosuojakäytäntö',
      'page.title.terms': 'Käyttöehdot',
      'page.title.cookies': 'Evästekäytäntö',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Epävirallinen käännös',
      'advisory.body': 'Tämä oikeudellinen asiakirja on <strong>epävirallinen käännös</strong>. Italiankielinen versio on edelleen <strong>sitova versio</strong>. Jos haluat täydellisen version omalla kielelläsi, kirjoita osoitteeseen <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — julkaisemme sen 48 tunnin kuluessa.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    el: {
      'nav.back': '← Επιστροφή στον ιστότοπο',
      'page.eyebrow': 'Νομικό έγγραφο',
      'page.title.privacy': 'Πολιτική απορρήτου',
      'page.title.terms': 'Όροι χρήσης',
      'page.title.cookies': 'Πολιτική cookies',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Ανεπίσημη μετάφραση',
      'advisory.body': 'Αυτό το νομικό έγγραφο παρέχεται ως <strong>ανεπίσημη μετάφραση</strong>. Η ιταλική έκδοση παραμένει η <strong>δεσμευτική έκδοση</strong>. Για πλήρη έκδοση στη γλώσσα σου γράψε στο <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — θα τη δημοσιεύσουμε μέσα σε 48 ώρες.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    hr: {
      'nav.back': '← Natrag na stranicu',
      'page.eyebrow': 'Pravni dokument',
      'page.title.privacy': 'Pravila o privatnosti',
      'page.title.terms': 'Uvjeti korištenja',
      'page.title.cookies': 'Pravila o kolačićima',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Neslužbeni prijevod',
      'advisory.body': 'Ovaj pravni dokument dostupan je kao <strong>neslužbeni prijevod</strong>. <strong>Obvezujuća verzija</strong> ostaje talijanska. Za potpunu verziju na svom jeziku piši na <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — objavit ćemo je u roku od 48 sati.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sr: {
      'nav.back': '← Назад на сајт',
      'page.eyebrow': 'Правни документ',
      'page.title.privacy': 'Политика приватности',
      'page.title.terms': 'Услови коришћења',
      'page.title.cookies': 'Политика колачића',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Незванични превод',
      'advisory.body': 'Овај правни документ доступан је као <strong>незванични превод</strong>. <strong>Обавезујућа верзија</strong> остаје италијанска. За комплетну верзију на свом језику пиши на <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — објавићемо је у року од 48 сати.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    bg: {
      'nav.back': '← Обратно към сайта',
      'page.eyebrow': 'Правен документ',
      'page.title.privacy': 'Политика за поверителност',
      'page.title.terms': 'Условия за ползване',
      'page.title.cookies': 'Политика за бисквитките',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Неофициален превод',
      'advisory.body': 'Този правен документ е предоставен като <strong>неофициален превод</strong>. <strong>Обвързваща остава</strong> италианската версия. За пълна версия на твоя език пиши на <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — ще я публикуваме до 48 часа.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    sl: {
      'nav.back': '← Nazaj na spletno mesto',
      'page.eyebrow': 'Pravni dokument',
      'page.title.privacy': 'Politika zasebnosti',
      'page.title.terms': 'Pogoji uporabe',
      'page.title.cookies': 'Politika piškotkov',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Neuradni prevod',
      'advisory.body': 'Ta pravni dokument je na voljo kot <strong>neuradni prevod</strong>. <strong>Zavezujoča različica</strong> ostaja italijanska. Za celotno različico v svojem jeziku piši na <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — objavili jo bomo v 48 urah.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    nb: {
      'nav.back': '← Tilbake til nettstedet',
      'page.eyebrow': 'Juridisk dokument',
      'page.title.privacy': 'Personvernerklæring',
      'page.title.terms': 'Tjenestevilkår',
      'page.title.cookies': 'Retningslinjer for informasjonskapsler',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Høflighetsoversettelse',
      'advisory.body': 'Dette juridiske dokumentet tilbys som <strong>høflighetsoversettelse</strong>. Den italienske versjonen er fortsatt den <strong>bindende versjonen</strong>. Vil du ha en fullstendig versjon på ditt språk? Skriv til <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — vi publiserer den innen 48 timer.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    et: {
      'nav.back': '← Tagasi saidile',
      'page.eyebrow': 'Õigusdokument',
      'page.title.privacy': 'Privaatsuspoliitika',
      'page.title.terms': 'Teenusetingimused',
      'page.title.cookies': 'Küpsiste poliitika',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Mitteametlik tõlge',
      'advisory.body': 'See õigusdokument on esitatud <strong>mitteametliku tõlkena</strong>. <strong>Siduvaks jääb</strong> itaaliakeelne versioon. Kui soovid täielikku versiooni oma keeles, kirjuta aadressile <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — avaldame selle 48 tunni jooksul.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    lv: {
      'nav.back': '← Atpakaļ uz vietni',
      'page.eyebrow': 'Juridisks dokuments',
      'page.title.privacy': 'Privātuma politika',
      'page.title.terms': 'Pakalpojuma noteikumi',
      'page.title.cookies': 'Sīkdatņu politika',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Neoficiāls tulkojums',
      'advisory.body': 'Šis juridiskais dokuments ir sniegts kā <strong>neoficiāls tulkojums</strong>. <strong>Saistošā versija</strong> joprojām ir itāļu valodā. Ja vēlies pilnu versiju savā valodā, raksti uz <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — to publicēsim 48 stundu laikā.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    lt: {
      'nav.back': '← Grįžti į svetainę',
      'page.eyebrow': 'Teisinis dokumentas',
      'page.title.privacy': 'Privatumo politika',
      'page.title.terms': 'Paslaugų teikimo sąlygos',
      'page.title.cookies': 'Slapukų politika',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Neoficialus vertimas',
      'advisory.body': 'Šis teisinis dokumentas pateikiamas kaip <strong>neoficialus vertimas</strong>. <strong>Privaloma versija</strong> išlieka itališkoji. Jei nori visos versijos savo kalba, rašyk <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — paskelbsime ją per 48 valandas.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    },
    uk: {
      'nav.back': '← Назад на сайт',
      'page.eyebrow': 'Юридичний документ',
      'page.title.privacy': 'Політика конфіденційності',
      'page.title.terms': 'Умови користування',
      'page.title.cookies': 'Політика щодо файлів cookie',
      'page.title.impressum': 'Impressum',
      'advisory.title': 'Неофіційний переклад',
      'advisory.body': 'Цей юридичний документ надано як <strong>неофіційний переклад</strong>. <strong>Обов’язковою залишається</strong> італійська версія. Щоб отримати повну версію своєю мовою, напиши на <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a> — ми опублікуємо її протягом 48 годин.',
      'footer.copy': '© 2026 Rootsy · <a href="/">myrootsy.com</a> · <a href="mailto:hello@myrootsy.com">hello@myrootsy.com</a>'
    }
  };

  function detectLang(){
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

    /* Impressum: il corpo della pagina ha traduzioni proprie (_impressum-i18n.js) */
    if (page === 'impressum' && window.__impressumApply) window.__impressumApply(lng);

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
