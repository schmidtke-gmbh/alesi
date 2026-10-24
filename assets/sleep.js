/* Dr. André Alesi · Sleep to Life · gemeinsame Skripte der Unterseiten */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function loaded(){ document.body.classList.add('loaded'); }
  window.addEventListener('load', loaded);
  setTimeout(loaded, 1400);

  /* Navigation: Glas-Effekt beim Scrollen, Mobilmenü */
  var nav = document.getElementById('nav');
  if(nav){
    var onScroll = function(){ nav.classList.toggle('sc', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
    var bg = document.getElementById('burger');
    if(bg) bg.addEventListener('click', function(){
      nav.classList.toggle('open');
      var open = nav.classList.contains('open');
      document.body.style.overflow = open ? 'hidden' : '';
      bg.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.mpanel a').forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); document.body.style.overflow = ''; }); });
  }

  /* Elemente beim Scrollen einblenden */
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.14, rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.rv,.mask,[data-count]').forEach(function(el){ io.observe(el); });

  /* Zähler */
  document.querySelectorAll('[data-count]').forEach(function(el){
    var target = parseFloat(el.getAttribute('data-count')), done = false;
    new IntersectionObserver(function(es, ob){
      es.forEach(function(e){
        if(!e.isIntersecting || done) return; done = true; ob.disconnect();
        if(reduce){ el.textContent = target; return; }
        var t0 = null;
        (function step(ts){ if(!t0) t0 = ts; var p = Math.min(1, (ts-t0)/1800); p = 1 - Math.pow(1-p, 3); el.textContent = Math.round(target*p); if(p < 1) requestAnimationFrame(step); })(performance.now());
      });
    }, {threshold:.5}).observe(el);
  });

  /* Parallax für Abschluss-Bilder */
  var pars = document.querySelectorAll('.final .bg');
  if(pars.length && !reduce){
    var tick = false;
    window.addEventListener('scroll', function(){
      if(tick) return; tick = true;
      requestAnimationFrame(function(){
        pars.forEach(function(b){ var r = b.parentNode.getBoundingClientRect(); var v = (r.top + r.height/2 - innerHeight/2) * -0.08; b.style.transform = 'translate3d(0,' + v + 'px,0)'; });
        tick = false;
      });
    }, {passive:true});
  }

  /* Footer: Schriftzug folgt dem Cursor */
  var mega = document.getElementById('mega');
  if(mega) mega.addEventListener('mousemove', function(e){
    var r = mega.getBoundingClientRect();
    mega.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    mega.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  /* Sticky-Leiste: erscheint nach dem Header, verschwindet am Formular / Preis */
  var st = document.getElementById('sticky');
  if(st){
    var hideAt = document.querySelectorAll('[data-hide-sticky]');
    var vis = {};
    var upd = function(){
      var past = window.scrollY > innerHeight * .8;
      var block = false; for(var k in vis){ if(vis[k]) block = true; }
      st.classList.toggle('on', past && !block);
    };
    hideAt.forEach(function(el, i){ new IntersectionObserver(function(es){ vis[i] = es[0].isIntersecting; upd(); }, {threshold:0}).observe(el); });
    window.addEventListener('scroll', upd, {passive:true});
  }

  /* Formulare: Honeypot und Mindestzeit gegen Spam */
  document.querySelectorAll('form[data-guard]').forEach(function(f){
    var t0 = Date.now();
    f.addEventListener('submit', function(ev){
      var hp = f.querySelector('.hp input');
      if((hp && hp.value !== '') || Date.now() - t0 < 3500){ ev.preventDefault(); }
    });
  });

  /* Countdown: <div data-countdown="2026-11-29T20:00:00+01:00"> mit [data-d],[data-h],[data-m],[data-s] */
  document.querySelectorAll('[data-countdown]').forEach(function(box){
    var end = new Date(box.getAttribute('data-countdown')).getTime();
    var f = function(n){ return n < 10 ? '0' + n : '' + n; };
    var run = function(){
      var d = Math.max(0, end - Date.now());
      var s = Math.floor(d/1000);
      var set = function(sel, v){ var el = box.querySelector(sel); if(el) el.textContent = v; };
      set('[data-d]', f(Math.floor(s/86400))); set('[data-h]', f(Math.floor(s%86400/3600))); set('[data-m]', f(Math.floor(s%3600/60))); set('[data-s]', f(s%60));
    };
    run(); setInterval(run, 1000);
  });

  /* Vorschau-Hilfe: ?y=1800 springt an eine Position und blendet alles ein (nur für Kachel-Vorschauen) */
  var m = location.search.match(/[?&]y=(\d+)/);
  if(m){
    document.documentElement.style.scrollBehavior = 'auto';
    var go = function(){ document.querySelectorAll('.rv,.mask,.ti').forEach(function(e){ e.classList.add('in'); }); window.scrollTo(0, +m[1]); window.dispatchEvent(new Event('scroll')); };
    window.addEventListener('load', function(){ go(); setTimeout(go, 500); setTimeout(go, 1500); });
  }
})();
