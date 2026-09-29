(function(){
  'use strict';
  var d=document, root=d.documentElement;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header : masqué au scroll descendant, visible au scroll montant ---------- */
  var header=d.querySelector('.fcb-header');
  if(header){
    var home=header.hasAttribute('data-home'), last=window.scrollY, ticking=false;
    var update=function(){
      var y=window.scrollY, menuOpen=root.classList.contains('menu-open');
      if(home) header.classList.toggle('is-top', y<40);
      if(!menuOpen){
        if(y>last && y>140) header.classList.add('is-hidden');
        else if(y<last-4 || y<140) header.classList.remove('is-hidden');
      }
      last=y; ticking=false;
    };
    window.addEventListener('scroll',function(){ if(!ticking){ticking=true;requestAnimationFrame(update);} },{passive:true});
    update();
  }

  /* ---------- menu burger ---------- */
  var menu=d.getElementById('fcb-menu');
  if(menu){
    var openers=d.querySelectorAll('[data-menu-open]'), closers=menu.querySelectorAll('[data-menu-close]');
    var lastFocus=null;
    var open=function(){ lastFocus=d.activeElement; menu.classList.add('is-open'); menu.removeAttribute('aria-hidden'); root.classList.add('menu-open');
      openers.forEach(function(b){b.setAttribute('aria-expanded','true');});
      var c=menu.querySelector('.fcb-menu__close'); if(c) setTimeout(function(){c.focus();},60); };
    var close=function(){ menu.classList.remove('is-open'); menu.setAttribute('aria-hidden','true'); root.classList.remove('menu-open');
      openers.forEach(function(b){b.setAttribute('aria-expanded','false');}); if(lastFocus) lastFocus.focus(); };
    openers.forEach(function(b){ b.addEventListener('click',open); });
    closers.forEach(function(b){ b.addEventListener('click',close); });
    d.addEventListener('keydown',function(e){ if(e.key==='Escape' && menu.classList.contains('is-open')) close(); });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ close(); }); });
  }

  /* ---------- carrousels (scroll-snap + drag souris + flèches + progression) ---------- */
  d.querySelectorAll('[data-carousel]').forEach(function(car){
    var track=car.querySelector('.carousel-content'); if(!track) return;
    var prev=car.querySelector('[data-prev]'), next=car.querySelector('[data-next]');
    var bar=car.querySelector('.fcb-progress'), barTrack=car.querySelector('.fcb-progress-track');
    var slides=track.querySelectorAll('[aria-roledescription=slide]');
    var step=function(){ var s=slides[0]; if(!s) return track.clientWidth*.8;
      var gap=slides[1]? slides[1].offsetLeft-s.offsetLeft : s.offsetWidth;
      return Math.max(gap, Math.floor(track.clientWidth/gap)*gap); };
    var sync=function(){
      var max=track.scrollWidth-track.clientWidth, x=track.scrollLeft;
      if(prev) prev.disabled = x<=4;
      if(next) next.disabled = x>=max-4;
      if(bar && barTrack){
        var tw=barTrack.clientWidth, ratio=track.scrollWidth? track.clientWidth/track.scrollWidth:1;
        var bw=Math.max(16, Math.min(tw, tw*ratio));
        bar.style.width=bw+'px';
        bar.style.transform='translateX('+((max>0? x/max:0)*(tw-bw))+'px) skew(-20deg)';
        barTrack.style.visibility = max>4 ? 'visible':'hidden';
      }
    };
    if(prev) prev.addEventListener('click',function(){ track.scrollBy({left:-step(),behavior:reduce?'auto':'smooth'}); });
    if(next) next.addEventListener('click',function(){ track.scrollBy({left:step(),behavior:reduce?'auto':'smooth'}); });
    track.addEventListener('scroll',function(){ requestAnimationFrame(sync); },{passive:true});
    window.addEventListener('resize',sync);
    // glisser à la souris (le tactile est natif)
    var down=false, sx=0, sl=0, moved=false;
    track.addEventListener('pointerdown',function(e){ if(e.pointerType!=='mouse' || e.button!==0) return; down=true; moved=false; sx=e.clientX; sl=track.scrollLeft; });
    window.addEventListener('pointermove',function(e){ if(!down) return; var dx=e.clientX-sx;
      if(Math.abs(dx)>5 && !moved){ moved=true; track.classList.add('is-drag'); }
      if(moved){ track.scrollLeft=sl-dx; e.preventDefault(); } });
    window.addEventListener('pointerup',function(){ if(!down) return; down=false;
      if(moved){ track.classList.remove('is-drag');
        // aimante sur la carte la plus proche
        var st=slides[1]? slides[1].offsetLeft-slides[0].offsetLeft : track.clientWidth;
        track.scrollTo({left:Math.round(track.scrollLeft/st)*st,behavior:reduce?'auto':'smooth'}); } });
    track.addEventListener('click',function(e){ if(moved){ e.preventDefault(); e.stopPropagation(); moved=false; } },true);
    track.addEventListener('dragstart',function(e){ e.preventDefault(); });
    sync();
  });

  /* ---------- animations d'apparition (déclenchées à l'entrée dans l'écran) ---------- */
  var anims=d.querySelectorAll('.fcb-anim');
  if('IntersectionObserver' in window && !reduce){
    // un élément qui glisse depuis un masque (overflow hidden) est observé via son masque
    var targets=new Map();
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){
        (targets.get(en.target)||[]).forEach(function(el){ el.classList.add('is-in'); });
        io.unobserve(en.target); } });
    },{rootMargin:'0px 0px -6% 0px',threshold:0.01});
    anims.forEach(function(el){
      var obs=el;
      if(/reveal-text-vertical/.test(el.className) && el.parentElement) obs=el.parentElement;
      if(!targets.has(obs)){ targets.set(obs,[]); io.observe(obs); }
      targets.get(obs).push(el);
    });
  } else { anims.forEach(function(el){ el.classList.add('is-in'); }); }

  /* ---------- filtres de la page actualités ---------- */
  var grid=d.querySelector('[data-news-grid]');
  if(grid){
    var chips=d.querySelectorAll('[data-filter]');
    chips.forEach(function(c){ c.addEventListener('click',function(){
      var f=c.getAttribute('data-filter');
      chips.forEach(function(o){ o.setAttribute('aria-pressed', o===c ? 'true':'false'); });
      grid.querySelectorAll('[data-cat]').forEach(function(card){
        var show = f==='all' || card.getAttribute('data-cat')===f;
        card.hidden=!show;
        if(show){ card.classList.remove('is-in'); void card.offsetWidth; card.classList.add('is-in'); }
      });
    }); });
  }

  /* ---------- onglets du formulaire de contact ---------- */
  d.querySelectorAll('[data-tabs]').forEach(function(tabs){
    var btns=tabs.querySelectorAll('[role=tab]');
    btns.forEach(function(b){ b.addEventListener('click',function(){
      btns.forEach(function(o){ var on=o===b; o.setAttribute('aria-selected',on); var p=d.getElementById(o.getAttribute('aria-controls')); if(p) p.hidden=!on; });
    }); });
    if(location.hash){ var t=tabs.querySelector('[data-hash="'+location.hash.slice(1)+'"]'); if(t) t.click(); }
  });

  /* ---------- formulaires -> e-mail (site statique) ---------- */
  d.querySelectorAll('form[data-mailto]').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(!form.reportValidity()) return;
      var lines=[];
      form.querySelectorAll('input,select,textarea').forEach(function(f){
        if(!f.name || !f.value) return;
        var lab=form.querySelector('label[for="'+f.id+'"]');
        lines.push((lab? lab.textContent.replace('*','').trim() : f.name)+' : '+f.value);
      });
      var subject=form.getAttribute('data-subject')||'Contact site web';
      window.location.href='mailto:'+form.getAttribute('data-mailto')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
      var ok=form.querySelector('[data-ok]'); if(ok) ok.hidden=false;
    });
  });

  /* ---------- année courante ---------- */
  d.querySelectorAll('[data-year]').forEach(function(el){ el.textContent=new Date().getFullYear(); });
})();
