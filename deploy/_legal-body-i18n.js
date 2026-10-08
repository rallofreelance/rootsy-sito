/* ========================================================================
   Rootsy — traduzioni del TESTO di Privacy, Termini e Cookie.
   Il testo italiano scritto nelle pagine è la versione che vale per legge.
   Per le altre 30 lingue carica i18n/<pagina>/<lingua>.json e sostituisce
   gli elementi con data-lg. Con 'it' (o se il file non si carica) torna al
   testo italiano originale. Stesso sistema dell'Impressum (_impressum-i18n.js).
   Viene chiamato da _legal-i18n.js ogni volta che cambia la lingua.
   ======================================================================== */
(function(){
  var ORIG = null, CACHE = {}, current = 'it';
  var page = document.body.getAttribute('data-page');

  function items(){ return document.querySelectorAll('[data-lg]'); }

  function saveOriginal(){
    if (ORIG) return;
    ORIG = {};
    items().forEach(function(el){ ORIG[el.getAttribute('data-lg')] = el.innerHTML; });
  }

  /* se a una lingua manca una frase, si vede quella italiana (mai quella della lingua di prima) */
  function fill(dict){
    items().forEach(function(el){
      var k = el.getAttribute('data-lg');
      el.innerHTML = (typeof dict[k] === 'string') ? dict[k] : ORIG[k];
    });
  }

  function load(lng){
    if (CACHE[lng]) return Promise.resolve(CACHE[lng]);
    return fetch('/i18n/' + page + '/' + lng + '.json')
      .then(function(r){ if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function(d){ CACHE[lng] = d; return d; });
  }

  window.__legalBodyApply = function(lng){
    saveOriginal();
    current = lng;
    if (lng === 'it') { fill(ORIG); return; }
    load(lng)
      .then(function(d){ if (current === lng) fill(d); })
      .catch(function(){ if (current === lng) fill(ORIG); });
  };

  /* link "Mostra la versione italiana" dentro l'avviso */
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('[data-show-it]') : null;
    if (!a) return;
    e.preventDefault();
    if (window.applyLegalLang) window.applyLegalLang('it');
    else window.__legalBodyApply('it');
    window.scrollTo(0, 0);
  });
})();
