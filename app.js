/* ===== Dragon's Dogma 2 Walkthrough — app.js ===== */
const LANGS = [
  { code:'en',    label:'English' },
  { code:'ru',    label:'Русский' },
  { code:'de',    label:'Deutsch' },
  { code:'fr',    label:'Français' },
  { code:'es',    label:'Español' },
  { code:'pt-BR', label:'Português (BR)' },
  { code:'ja',    label:'日本語' },
  { code:'zh-CN', label:'简体中文' },
  { code:'ko',    label:'한국어' }
];
const LS_PROGRESS = 'dd2-walkthrough-progress', LS_LANG = 'dd2-lang';
const GROUPS = {
  clMain:['m01','m02','m03','m04','m05','m06','m07','m08','m09','m10','m11','m12','m13','m14','m15','m16','m17','m18','m19','m20','m21'],
  clA1:['s01','s02','s03','s04','s05','s06','s07'],
  clA2:['s08','s09','s10','s11','s12','s13','s14','s15','s16','s17','s18','s19','s20','s21','s22','s23','s24','s25','s26','s27','s28','s29','s30','s31'],
  clA3:['s32','s33','s34','s35','s36','s37','s38','s39','s40','s41','s42','s43','s44','s45','s46','s47','s48','s49','s50','s51','s52'],
  clA5:['s53','s54','s55','s56','s57','s58'],
  clExtra:['s59']
};
let EN = {}, CUR = {}, state = {};
const T  = k => (CUR[k] !== undefined ? CUR[k] : (EN[k] !== undefined ? EN[k] : ''));
const stripTags = s => String(s).replace(/<[^>]*>/g,'');

function loadState(){ try{ state = JSON.parse(localStorage.getItem(LS_PROGRESS)||'{}'); }catch(e){ state={}; } }
function saveState(){ try{ localStorage.setItem(LS_PROGRESS, JSON.stringify(state)); }catch(e){} }
function renderProgress(){
  const uniq = [...new Set([...document.querySelectorAll('input[data-q]')].map(b=>b.dataset.q))];
  const done = uniq.filter(id=>state[id]).length;
  const set=(id,v)=>{const el=document.getElementById(id); if(el) el.textContent=v;};
  set('pDone',done); set('pTotal',uniq.length); set('mDone',done); set('mTotal',uniq.length);
  const fill=document.getElementById('pFill'); if(fill) fill.style.width=(uniq.length?done/uniq.length*100:0)+'%';
  document.querySelectorAll('input[data-q]').forEach(b=>{
    b.checked = !!state[b.dataset.q];
    const card = b.closest('.quest,.check-item');
    if(card) card.classList.toggle('done', !!state[b.dataset.q]);
  });
}
document.addEventListener('change', e=>{
  const b = e.target.closest('input[data-q]'); if(!b) return;
  state[b.dataset.q]=b.checked; saveState(); renderProgress();
});

function buildChecklist(){
  document.querySelectorAll('#checklist .check-columns').forEach(h=>h.innerHTML='');
  Object.entries(GROUPS).forEach(([gid,list])=>{
    const host=document.getElementById(gid); if(!host) return;
    list.forEach(id=>{
      const title=T('q.'+id+'.title'); if(!title) return;
      const kind = id[0]==='m' ? T('ui.kindMain') : T('ui.kindSide');
      const lab=document.createElement('label');
      lab.className='check-item'+(state[id]?' done':'');
      lab.innerHTML='<input type="checkbox" data-q="'+id+'"'+(state[id]?' checked':'')
        +'><span>'+stripTags(title)+'<small>'+kind+' · '+id+'</small></span>';
      host.appendChild(lab);
    });
  });
}

function applyLang(){
  document.documentElement.lang = CUR.lang || 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v=T(el.dataset.i18n); if(v!=='') el.innerHTML=v;
  });
  document.title = T('ui.docTitle');
  const md=document.querySelector('meta[name="description"]'); if(md) md.setAttribute('content',T('ui.metaDesc'));
  buildChecklist(); renderProgress();
}
async function setLang(code, persist){
  const sel=document.getElementById('langSel'); if(sel) sel.value=code;
  try{
    EN  = await (await fetch('i18n/en.json')).json();
    CUR = code==='en' ? EN : await (await fetch('i18n/'+code+'.json')).json();
    CUR.lang = code; applyLang();
    if(persist){ try{ localStorage.setItem(LS_LANG, code); }catch(e){} }
  }catch(err){
    alert("Could not load i18n/*.json. If you opened the file directly (file://), serve the folder instead:\npython -m http.server");
  }
}
function initLangSwitcher(){
  const sel=document.getElementById('langSel');
  sel.innerHTML = LANGS.map(l=>'<option value="'+l.code+'">'+l.label+'</option>').join('');
  sel.addEventListener('change', ()=>setLang(sel.value, true));
  let saved=null; try{ saved=localStorage.getItem(LS_LANG); }catch(e){}
  const nav=(navigator.language||'en');
  const det = LANGS.find(l=>l.code===saved)
           || LANGS.find(l=>l.code===nav)
           || LANGS.find(l=>l.code.slice(0,2)===nav.slice(0,2))
           || LANGS[0];
  setLang(det.code, false);
}

document.querySelectorAll('.q-head').forEach(h=>h.addEventListener('click',e=>{
  if(e.target.closest('.q-check, input')) return;
  h.closest('.quest').classList.toggle('open');
}));
document.getElementById('resetBtn').addEventListener('click',()=>{
  if(confirm(T('ui.resetConfirm')||'Reset all progress marks?')){ state={}; saveState(); renderProgress(); }
});

const links=[...document.querySelectorAll('.nav-link')];
const secs=links.map(l=>document.querySelector(l.getAttribute('href'))).filter(Boolean);
const spy=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting) links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+e.target.id));
}),{rootMargin:'-30% 0px -60% 0px'});
secs.forEach(s=>spy.observe(s));

const rev=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); rev.unobserve(e.target); }
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>rev.observe(el));

const burger=document.getElementById('burger'), sidebar=document.getElementById('sidebar');
burger.addEventListener('click',()=>sidebar.classList.toggle('open'));
sidebar.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>sidebar.classList.remove('open')));

loadState(); renderProgress(); initLangSwitcher();
