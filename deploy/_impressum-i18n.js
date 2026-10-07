/* ========================================================================
   Rootsy — traduzioni dell'Impressum.
   Il testo tedesco scritto in impressum.html è la versione che vale per legge
   (§ 5 DDG). Per le altre 30 lingue carica i18n/impressum/<lingua>.json e
   sostituisce gli elementi con data-imp. Con 'de' (o se il file non si
   carica) torna al testo tedesco originale.
   Viene chiamato da _legal-i18n.js ogni volta che cambia la lingua.
   ======================================================================== */
(function(){
  var ORIG = null, CACHE = {}, current = 'de';

  function items(){ return document.querySelectorAll('[data-imp]'); }

  function saveOriginal(){
    if (ORIG) return;
    ORIG = {};
    items().forEach(function(el){ ORIG[el.getAttribute('data-imp')] = el.innerHTML; });
  }

  function fill(dict){
    items().forEach(function(el){
      var v = dict[el.getAttribute('data-imp')];
      if (typeof v === 'string') el.innerHTML = v;
    });
  }

  function load(lng){
    if (CACHE[lng]) return Promise.resolve(CACHE[lng]);
    return fetch('i18n/impressum/' + lng + '.json')
      .then(function(r){ if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function(d){ CACHE[lng] = d; return d; });
  }

  window.__impressumApply = function(lng){
    saveOriginal();
    current = lng;
    if (lng === 'de') { fill(ORIG); return; }
    load(lng)
      .then(function(d){ if (current === lng) fill(d); })
      .catch(function(){ if (current === lng) fill(ORIG); });
  };

  /* link "mostra la versione tedesca" dentro l'avviso */
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('[data-show-de]') : null;
    if (!a) return;
    e.preventDefault();
    if (window.applyLegalLang) window.applyLegalLang('de');
    else window.__impressumApply('de');
    window.scrollTo(0, 0);
  });
})();
