/* =====================================================
   ARABIYYA — Logique principale
   Version 2.1 — Corrections de compatibilité
   ===================================================== */

/* ---------- SRS : Répétition espacée (SM-2 simplifié) ---------- */
var SRS = {
  KEY: 'arabiyya_srs',
  load: function(){
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
    catch(e){ return {}; }
  },
  save: function(d){
    try { localStorage.setItem(this.KEY, JSON.stringify(d)); }
    catch(e){ /* quota dépassé ou mode privé */ }
  },
  update: function(id, q){
    var all = this.load();
    var c = all[id] || { interval:0, ef:2.5, reps:0, lapses:0 };
    var int_ = c.interval, ef = c.ef, reps = c.reps, lapses = c.lapses;
    if (q === 0){
      reps = 0;
      lapses++;
      int_ = 10 / 1440;
      ef = Math.max(1.3, ef - 0.2);
    } else {
      reps++;
      if (reps === 1) int_ = 1;
      else if (reps === 2) int_ = 6;
      else int_ = Math.round(int_ * ef);
      if (q === 1){ int_ = Math.max(1, int_ * 0.6); ef = Math.max(1.3, ef - 0.15); }
      if (q === 3){ int_ = Math.round(int_ * 1.3); ef = Math.min(3.0, ef + 0.15); }
    }
    all[id] = {
      interval: int_,
      ef: ef,
      reps: reps,
      lapses: lapses,
      due: Date.now() + int_ * 86400000,
      lastReview: Date.now()
    };
    this.save(all);
    Stats.recordReview(q >= 2);
  },
  due: function(){
    var all = this.load();
    var now = Date.now();
    return VOCAB.filter(function(v){
      var c = all[v.id];
      return c && c.due <= now;
    });
  },
  newOnes: function(){
    var all = this.load();
    return VOCAB.filter(function(v){ return !all[v.id]; });
  },
  mastered: function(){
    var all = this.load();
    return Object.keys(all).filter(function(k){ return all[k].reps >= 3; }).length;
  },
  learning: function(){
    var all = this.load();
    return Object.keys(all).filter(function(k){
      return all[k].reps > 0 && all[k].reps < 3;
    }).length;
  }
};

/* ---------- STATS ---------- */
var Stats = {
  KEY: 'arabiyya_stats',
  load: function(){
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
    catch(e){ return {}; }
  },
  save: function(d){
    try { localStorage.setItem(this.KEY, JSON.stringify(d)); }
    catch(e){ /* ignore */ }
  },
  get: function(){
    var s = this.load();
    return {
      streak: s.streak || 0,
      lastStudy: s.lastStudy || 0,
      totalReviews: s.totalReviews || 0,
      correctReviews: s.correctReviews || 0,
      xp: s.xp || 0
    };
  },
  recordReview: function(ok){
    var s = this.load();
    s.totalReviews = (s.totalReviews || 0) + 1;
    if (ok) s.correctReviews = (s.correctReviews || 0) + 1;
    s.xp = (s.xp || 0) + (ok ? 10 : 2);
    var today = new Date().setHours(0, 0, 0, 0);
    var last = s.lastStudy ? new Date(s.lastStudy).setHours(0, 0, 0, 0) : 0;
    var diff = (today - last) / 86400000;
    if (diff === 0){ /* même jour, on ne change rien */ }
    else if (diff === 1){ s.streak = (s.streak || 0) + 1; }
    else { s.streak = 1; }
    s.lastStudy = Date.now();
    this.save(s);
  },
  reset: function(){
    try { localStorage.removeItem(this.KEY); }
    catch(e){ /* ignore */ }
  }
};

/* ---------- AUDIO : synthèse vocale arabe ---------- */
function speak(text){
  if (!('speechSynthesis' in window)) return;
  if (!text) return;
  try {
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA';
    u.rate = 0.8;
    /* CORRECTION : boucle for au lieu de .find() (compatibilité) */
    var voices = speechSynthesis.getVoices();
    var arabicVoice = null;
    if (voices && voices.length){
      for (var i = 0; i < voices.length; i++){
        var vl = voices[i].lang || '';
        if (vl.indexOf('ar') === 0){
          arabicVoice = voices[i];
          break;
        }
      }
    }
    if (arabicVoice) u.voice = arabicVoice;
    speechSynthesis.speak(u);
  } catch(e){
    /* Ne jamais laisser une erreur audio casser l'app */
  }
}

/* ---------- UTILITAIRES ---------- */
function toast(msg){
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 1800);
}

function shuffle(a){
  var b = a.slice();
  for (var i = b.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = b[i]; b[i] = b[j]; b[j] = tmp;
  }
  return b;
}

function $(html){
  var app = document.getElementById('app');
  if (app) app.innerHTML = html;
}

function esc(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/* ---------- APP ---------- */
var App = {
  session: null,
  quiz: null,
  memory: null,

  /* ---------- ACCUEIL ---------- */
  home: function(){
    var s = Stats.get();
    var due = SRS.due().length;
    var nw = SRS.newOnes().length;
    var theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);

    $(
      '<header><h1>🌙 Arabiyya</h1>' +
      '<div style="font-size:13px;color:var(--muted);font-weight:700">🔥 ' + s.streak + ' j · ' + s.xp + ' XP</div></header>' +

      '<div class="card" style="background:linear-gradient(135deg,var(--primary),var(--primary-l));color:#fff">' +
        '<div style="font-size:13px;opacity:.85;font-weight:600;text-transform:uppercase">Aujourd\'hui</div>' +
        '<div style="display:flex;gap:16px;margin-top:12px;justify-content:space-between">' +
          '<div><div style="font-size:32px;font-weight:800">' + due + '</div><div style="font-size:12px;opacity:.85">à réviser</div></div>' +
          '<div><div style="font-size:32px;font-weight:800">' + nw + '</div><div style="font-size:12px;opacity:.85">nouvelles</div></div>' +
          '<div><div style="font-size:32px;font-weight:800">' + s.xp + '</div><div style="font-size:12px;opacity:.85">XP</div></div>' +
        '</div>' +
      '</div>' +

      '<button class="menu-btn" onclick="NourScreen.home()" style="background:linear-gradient(135deg,#0f5132,#1a7f52);color:#fff">' +
        '<div class="icon" style="background:rgba(255,255,255,.2)">📖</div>' +
        '<div><div class="label" style="color:#fff">📖 Nour Al Bayan</div>' +
        '<div class="sub" style="color:rgba(255,255,255,.85)">Méthode complète · 7 niveaux</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.study()">' +
        '<div class="icon">📚</div>' +
        '<div><div class="label">Étudier maintenant</div><div class="sub">Répétition espacée</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.lessons()">' +
        '<div class="icon">📖</div>' +
        '<div><div class="label">Leçons guidées</div><div class="sub">' + LESSONS.length + ' leçons progressives</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.alphabet()">' +
        '<div class="icon">🔤</div>' +
        '<div><div class="label">Alphabet</div><div class="sub">28 lettres · audio</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.vocab()">' +
        '<div class="icon">📚</div>' +
        '<div><div class="label">Vocabulaire</div><div class="sub">' + VOCAB.length + ' mots · A1 → B1</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.dialogues()">' +
        '<div class="icon">💬</div>' +
        '<div><div class="label">Dialogues</div><div class="sub">' + DIALOGUES.length + ' scènes du quotidien</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.grammar()">' +
        '<div class="icon">📝</div>' +
        '<div><div class="label">Grammaire</div><div class="sub">' + GRAMMAR.length + ' règles essentielles</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.writing()">' +
        '<div class="icon">✍️</div>' +
        '<div><div class="label">Écriture</div><div class="sub">Trace les lettres</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.memory()">' +
        '<div class="icon">🎮</div>' +
        '<div><div class="label">Jeu Memory</div><div class="sub">Associe mot ↔ traduction</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.quizStart()">' +
        '<div class="icon">🎯</div>' +
        '<div><div class="label">Quiz</div><div class="sub">Teste ta mémoire</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.statsScreen()">' +
        '<div class="icon">📊</div>' +
        '<div><div class="label">Statistiques</div><div class="sub">Progression & badges</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.settings()">' +
        '<div class="icon">⚙️</div>' +
        '<div><div class="label">Réglages</div><div class="sub">Thème · Voix · Reset</div></div>' +
      '</button>'
    );
  },

  /* ---------- ALPHABET ---------- */
  alphabet: function(){
    var h = '<button class="back" onclick="App.home()">← Retour</button>' +
      '<h2>Alphabet</h2>' +
      '<div class="grid-4">';
    for (var i = 0; i < ALPHABET.length; i++){
      h += '<button class="tile" onclick="App.letter(' + i + ')">' +
        '<span class="ar">' + ALPHABET[i].ar + '</span>' +
        '<span class="name">' + ALPHABET[i].name + '</span></button>';
    }
    h += '</div>';
    $(h);
  },

  letter: function(i){
    var l = ALPHABET[i];
    if (!l) return;
    $('<button class="back" onclick="App.alphabet()">← Alphabet</button>' +
      '<div class="hero">' +
        '<div class="big ar">' + l.ar + '</div>' +
        '<div class="name">' + l.name + '</div>' +
        '<div class="translit">son [' + l.tr + ']</div>' +
        '<button onclick="speak(\'' + esc(l.ar) + '\')" style="background:rgba(255,255,255,.25);border:none;color:#fff;margin-top:14px;padding:10px 20px;border-radius:30px;font-weight:700;cursor:pointer;font-family:inherit">🔊 Écouter</button>' +
      '</div>' +
      '<div class="card"><h3>Les 4 formes</h3>' +
        '<div class="grid-4" style="margin-top:10px">' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.iso + '</span><span class="name">Isolée</span></div>' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.ini + '</span><span class="name">Début</span></div>' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.med + '</span><span class="name">Milieu</span></div>' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.fin + '</span><span class="name">Fin</span></div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:10px">' +
        (i > 0 ? '<button class="btn secondary" onclick="App.letter(' + (i - 1) + ')">←</button>' : '') +
        (i < ALPHABET.length - 1 ? '<button class="btn" onclick="App.letter(' + (i + 1) + ')">→</button>' : '') +
      '</div>');
  },

  /* ---------- LEÇONS ---------- */
  lessons: function(){
    var h = '<button class="back" onclick="App.home()">← Retour</button><h2>Leçons guidées</h2>';
    for (var i = 0; i < LESSONS.length; i++){
      var L = LESSONS[i];
      h += '<button class="lesson-item" onclick="App.startLesson(\'' + L.id + '\')">' +
        '<div class="num">' + L.num + '</div>' +
        '<div><div class="title">' + L.title + '</div>' +
        '<div class="desc">' + L.desc + ' · ' + L.words.length + ' mots</div></div>' +
      '</button>';
    }
    $(h);
  },

  startLesson: function(id){
    var L = null;
    for (var i = 0; i < LESSONS.length; i++){
      if (LESSONS[i].id === id){ L = LESSONS[i]; break; }
    }
    if (!L) return;
    var words = [];
    for (var j = 0; j < L.words.length; j++){
      var wid = L.words[j];
      for (var k = 0; k < VOCAB.length; k++){
        if (VOCAB[k].id === wid){ words.push(VOCAB[k]); break; }
      }
    }
    this.session = {
      queue: words,
      index: 0,
      flipped: false,
      correct: 0,
      total: words.length,
      title: L.title
    };
    this.renderCard();
  },

  /* ---------- ÉTUDE SRS ---------- */
  study: function(){
    var due = SRS.due();
    var nw = SRS.newOnes().slice(0, 10);
    var q = shuffle(due).concat(shuffle(nw));
    if (!q.length){
      $('<button class="back" onclick="App.home()">← Retour</button>' +
        '<div class="empty"><div class="big">🎉</div><h2>Tout est révisé !</h2>' +
        '<p style="margin-top:8px">Reviens plus tard.</p>' +
        '<button class="btn" style="margin-top:20px" onclick="App.home()">Accueil</button></div>');
      return;
    }
    this.session = {
      queue: q,
      index: 0,
      flipped: false,
      correct: 0,
      total: q.length,
      title: 'Révision'
    };
    this.renderCard();
  },

  renderCard: function(){
    var s = this.session;
    if (!s || s.index >= s.queue.length) return this.endSession();
    var c = s.queue[s.index];
    var p = Math.round((s.index / s.total) * 100);
    var h = '<button class="back" onclick="App.home()">← Quitter</button>' +
      (s.title ? '<div style="text-align:center;font-weight:700;color:var(--muted);font-size:13px;margin-bottom:6px">' + s.title + '</div>' : '') +
      '<div class="counter">' + (s.index + 1) + ' / ' + s.total + '</div>' +
      '<div class="progress"><div class="progress-bar" style="width:' + p + '%"></div></div>' +
      '<div class="flashcard" onclick="App.flip()">' +
        '<button class="speak" onclick="event.stopPropagation();speak(\'' + esc(c.ar) + '\')">🔊</button>' +
        '<div class="theme">' + c.t + '</div>' +
        '<div class="word ar">' + c.ar + '</div>' +
        (s.flipped
          ? '<div class="translit">' + c.tr + '</div><div class="translation">' + c.fr + '</div>'
          : '<div class="hint">👆 Touche pour révéler</div>') +
      '</div>' +
      (s.flipped
        ? '<div class="answers">' +
            '<button class="answer-btn a-again" onclick="App.answer(0)">😰 À revoir</button>' +
            '<button class="answer-btn a-hard" onclick="App.answer(1)">😅 Difficile</button>' +
            '<button class="answer-btn a-good" onclick="App.answer(2)">😊 Bien</button>' +
            '<button class="answer-btn a-easy" onclick="App.answer(3)">🤩 Facile</button>' +
          '</div>'
        : '');
    $(h);
  },

  flip: function(){
    if (this.session){ this.session.flipped = true; this.renderCard(); }
  },

  answer: function(q){
    var s = this.session;
    if (!s) return;
    var c = s.queue[s.index];
    if (!c) return;
    SRS.update(c.id, q);
    if (q >= 2) s.correct++;
    s.index++;
    s.flipped = false;
    this.renderCard();
  },

  endSession: function(){
    var s = this.session;
    var acc = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    $('<div class="empty" style="padding-top:60px"><div class="big">✨</div>' +
      '<h2>Session terminée !</h2>' +
      '<div class="stat-grid" style="margin-top:24px">' +
        '<div class="stat"><div class="num">' + s.total + '</div><div class="lbl">Cartes</div></div>' +
        '<div class="stat"><div class="num">' + acc + '%</div><div class="lbl">Réussite</div></div>' +
      '</div>' +
      '<button class="btn" onclick="App.home()">Continuer</button></div>');
  },

  /* ---------- VOCABULAIRE ---------- */
  vocab: function(){
    $('<button class="back" onclick="App.home()">← Retour</button>' +
      '<h2>Vocabulaire</h2>' +
      '<p class="muted" style="margin-bottom:12px">' + VOCAB.length + ' mots classés par niveau</p>' +
      '<div class="grid-3" style="margin-bottom:16px">' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'A1\')">A1</button>' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'A2\')">A2</button>' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'B1\')">B1</button>' +
      '</div>');
  },

  vocabByLevel: function(lv){
    var list = VOCAB.filter(function(v){ return v.lv === lv; });
    var h = '<button class="back" onclick="App.vocab()">← Vocabulaire</button>' +
      '<h2>Niveau ' + lv + '</h2>' +
      '<p class="muted" style="margin-bottom:12px">' + list.length + ' mots</p>';
    for (var i = 0; i < list.length; i++){
      var v = list[i];
      h += '<div class="card" style="padding:14px;margin-bottom:8px;cursor:pointer" onclick="speak(\'' + esc(v.ar) + '\')">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">' +
          '<div>' +
            '<div class="ar" style="font-size:26px;color:var(--primary)">' + v.ar + '</div>' +
            '<div style="font-size:14px;font-weight:700;margin-top:4px">' + v.fr + '</div>' +
            '<div style="font-size:12px;color:var(--muted);font-style:italic">' + v.tr + ' · ' + v.t + '</div>' +
          '</div>' +
          '<div style="font-size:24px">🔊</div>' +
        '</div>' +
      '</div>';
    }
    $(h);
  },

  /* ---------- DIALOGUES ---------- */
  dialogues: function(){
    var h = '<button class="back" onclick="App.home()">← Retour</button><h2>Dialogues</h2>';
    for (var i = 0; i < DIALOGUES.length; i++){
      var d = DIALOGUES[i];
      h += '<button class="lesson-item" onclick="App.showDialogue(\'' + d.id + '\')">' +
        '<div class="num" style="background:var(--accent)">' + d.level + '</div>' +
        '<div><div class="title">' + d.title + '</div>' +
        '<div class="desc">' + d.lines.length + ' répliques</div></div>' +
      '</button>';
    }
    $(h);
  },

  showDialogue: function(id){
    var d = null;
    for (var i = 0; i < DIALOGUES.length; i++){
      if (DIALOGUES[i].id === id){ d = DIALOGUES[i]; break; }
    }
    if (!d) return;
    var h = '<button class="back" onclick="App.dialogues()">← Dialogues</button>' +
      '<h2>' + d.title + '</h2>' +
      '<p class="muted" style="margin-bottom:14px">Niveau ' + d.level + '</p>' +
      '<div class="dialogue-wrap">';
    for (var j = 0; j < d.lines.length; j++){
      var ln = d.lines[j];
      h += '<div class="dialogue-line ' + (ln.sp === 'A' ? 'left' : 'right') + '" onclick="speak(\'' + esc(ln.ar) + '\')">' +
        '<div class="ar">' + ln.ar + '</div>' +
        '<div class="fr">' + ln.fr + '</div>' +
      '</div>';
    }
    h += '</div><p class="muted" style="text-align:center;font-size:12px">👆 Touche une réplique pour l\'écouter</p>';
    $(h);
  },

  /* ---------- GRAMMAIRE ---------- */
  grammar: function(){
    var h = '<button class="back" onclick="App.home()">← Retour</button><h2>Grammaire</h2>';
    for (var i = 0; i < GRAMMAR.length; i++){
      var g = GRAMMAR[i];
      h += '<div class="card"><h3>' + g.title + '</h3>' +
        '<div class="ar" style="font-size:24px;color:var(--primary);text-align:center;margin:10px 0">' + g.ar + '</div>' +
        '<p style="font-size:14px;line-height:1.6;margin-bottom:12px">' + g.desc + '</p>' +
        '<div style="background:#e6eeea;padding:12px;border-radius:12px;text-align:center">' +
          '<div class="ar" style="font-size:18px;color:var(--primary)">' + g.ex + '</div>' +
          '<div style="font-size:12px;color:var(--muted);margin-top:4px">' + g.exFr + '</div>' +
        '</div>' +
      '</div>';
    }
    $(h);
  },

  /* ---------- ÉCRITURE ---------- */
  writing: function(){
    var h = '<button class="back" onclick="App.home()">← Retour</button><h2>Écriture</h2>' +
      '<p class="muted" style="margin-bottom:12px">Choisis une lettre à tracer</p>' +
      '<div class="grid-4">';
    for (var i = 0; i < ALPHABET.length; i++){
      h += '<button class="tile" onclick="App.writeLetter(' + i + ')">' +
        '<span class="ar">' + ALPHABET[i].ar + '</span></button>';
    }
    h += '</div>';
    $(h);
  },

  writeLetter: function(i){
    var l = ALPHABET[i];
    if (!l) return;
    $('<button class="back" onclick="App.writing()">← Lettres</button>' +
      '<h2>Tracer : ' + l.name + '</h2>' +
      '<div class="card" style="text-align:center;padding:20px;position:relative">' +
        '<div class="ar" style="font-size:80px;color:var(--primary);opacity:.2;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:1">' + l.ar + '</div>' +
        '<canvas id="writeCanvas" style="position:relative;z-index:2;background:transparent;box-shadow:none;border:2px dashed var(--muted)"></canvas>' +
      '</div>' +
      '<button class="btn secondary" onclick="App.clearCanvas()">🗑️ Effacer</button>' +
      '<button class="btn" onclick="App.writing()">Autre lettre</button>');
    this.initCanvas();
  },

  initCanvas: function(){
    var c = document.getElementById('writeCanvas');
    if (!c) return;
    var r = c.getBoundingClientRect();
    /* CORRECTION : garde pour éviter les dimensions nulles */
    if (r.width < 10 || r.height < 10) return;

    var ctx = c.getContext('2d');
    c.width = Math.round(r.width * 2);
    c.height = Math.round(r.height * 2);
    ctx.scale(2, 2);
    ctx.strokeStyle = '#0f5132';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    var drawing = false;

    function pos(e){
      var r2 = c.getBoundingClientRect();
      var t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r2.left, y: t.clientY - r2.top };
    }
    function start(e){
      e.preventDefault();
      drawing = true;
      var p = pos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    }
    function move(e){
      if (!drawing) return;
      e.preventDefault();
      var p = pos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    function end(){ drawing = false; }

    c.addEventListener('mousedown', start);
    c.addEventListener('mousemove', move);
    c.addEventListener('mouseup', end);
    c.addEventListener('mouseleave', end);
    c.addEventListener('touchstart', start, { passive: false });
    c.addEventListener('touchmove', move, { passive: false });
    c.addEventListener('touchend', end);
  },

  clearCanvas: function(){
    var c = document.getElementById('writeCanvas');
    if (!c) return;
    var ctx = c.getContext('2d');
    /* CORRECTION : reset transformation avant clear */
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.restore();
  },

  /* ---------- MEMORY ---------- */
  memory: function(){
    var pool = shuffle(VOCAB).slice(0, 6);
    var cards = [];
    for (var i = 0; i < pool.length; i++){
      var v = pool[i];
      cards.push({ id: v.id, type: 'ar', text: v.ar, ar: true, fr: v.fr });
      cards.push({ id: v.id, type: 'fr', text: v.fr, ar: false, fr: v.fr });
    }
    this.memory = { cards: shuffle(cards), flipped: [], matched: [], tries: 0 };
    this.renderMemory();
  },

  renderMemory: function(){
    var m = this.memory;
    var h = '<button class="back" onclick="App.home()">← Quitter</button>' +
      '<h2>Jeu Memory</h2>' +
      '<p class="muted" style="margin-bottom:12px">Essais : ' + m.tries +
      ' · Paires : ' + (m.matched.length / 2) + '/6</p>' +
      '<div class="memory-grid">';
    for (var i = 0; i < m.cards.length; i++){
      var c = m.cards[i];
      var isFlipped = m.flipped.indexOf(i) !== -1 || m.matched.indexOf(i) !== -1;
      var isMatched = m.matched.indexOf(i) !== -1;
      h += '<button class="memory-card' +
        (isFlipped ? ' flipped' : '') +
        (isMatched ? ' matched' : '') + '" ' +
        (isMatched ? 'disabled' : 'onclick="App.memFlip(' + i + ')"') + '>' +
        (isFlipped ? '<span' + (c.ar ? ' class="ar"' : '') + '>' + c.text + '</span>' : '?') +
      '</button>';
    }
    h += '</div>';
    $(h);
  },

  memFlip: function(i){
    var m = this.memory;
    if (!m) return;
    if (m.flipped.length >= 2) return;
    if (m.flipped.indexOf(i) !== -1) return;
    if (m.matched.indexOf(i) !== -1) return;

    m.flipped.push(i);

    if (m.flipped.length === 2){
      m.tries++;
      var a = m.cards[m.flipped[0]];
      var b = m.cards[m.flipped[1]];
      if (a.id === b.id && a.type !== b.type){
        m.matched.push(m.flipped[0], m.flipped[1]);
        m.flipped = [];
        this.renderMemory();
        if (m.matched.length === m.cards.length){
          setTimeout(function(){ toast('🎉 Bravo !'); }, 300);
        }
      } else {
        this.renderMemory();
        var self = this;
        setTimeout(function(){
          m.flipped = [];
          self.renderMemory();
        }, 800);
      }
    } else {
      this.renderMemory();
    }
  },

  /* ---------- QUIZ ---------- */
  quizStart: function(){
    var pool = shuffle(VOCAB).slice(0, 10);
    var qs = [];
    for (var i = 0; i < pool.length; i++){
      var v = pool[i];
      var wrong = shuffle(VOCAB.filter(function(x){ return x.id !== v.id; }))
        .slice(0, 3)
        .map(function(x){ return x.fr; });
      qs.push({
        card: v,
        options: shuffle([v.fr].concat(wrong)),
        answered: false
      });
    }
    this.quiz = { questions: qs, index: 0, score: 0 };
    this.renderQuiz();
  },

  renderQuiz: function(){
    var q = this.quiz;
    if (!q || q.index >= q.questions.length) return this.endQuiz();
    var cur = q.questions[q.index];
    var p = Math.round((q.index / q.questions.length) * 100);
    var h = '<button class="back" onclick="App.home()">← Quitter</button>' +
      '<div class="counter">Q ' + (q.index + 1) + '/' + q.questions.length + ' · Score : ' + q.score + '</div>' +
      '<div class="progress"><div class="progress-bar" style="width:' + p + '%"></div></div>' +
      '<div class="card" style="text-align:center;padding:30px 20px">' +
        '<div class="ar" style="font-size:60px;color:var(--primary)">' + cur.card.ar + '</div>' +
        '<div style="font-size:15px;color:var(--muted);margin-top:8px;font-style:italic">' + cur.card.tr + '</div>' +
        '<button onclick="speak(\'' + esc(cur.card.ar) + '\')" style="background:#e6eeea;color:var(--primary);border:none;margin-top:14px;padding:8px 16px;border-radius:20px;font-weight:700;cursor:pointer;font-size:13px;font-family:inherit">🔊</button>' +
      '</div>' +
      '<h3 style="text-align:center;margin-bottom:8px;color:var(--muted);font-size:13px;text-transform:uppercase">Traduction ?</h3>';
    for (var i = 0; i < cur.options.length; i++){
      h += '<button class="quiz-option" onclick="App.quizAnswer(' + i + ')">' + cur.options[i] + '</button>';
    }
    $(h);
  },

  quizAnswer: function(i){
    var q = this.quiz;
    if (!q) return;
    var cur = q.questions[q.index];
    if (cur.answered) return;
    cur.answered = true;
    var sel = cur.options[i];
    var correct = cur.card.fr;
    var btns = document.querySelectorAll('.quiz-option');
    for (var k = 0; k < btns.length; k++){
      btns[k].disabled = true;
      if (cur.options[k] === correct) btns[k].classList.add('correct');
      else if (k === i) btns[k].classList.add('wrong');
    }
    if (sel === correct){ q.score++; toast('✅ Correct !'); }
    else toast('❌ Raté');
    var self = this;
    setTimeout(function(){ q.index++; self.renderQuiz(); }, 1200);
  },

  endQuiz: function(){
    var q = this.quiz;
    var pct = Math.round((q.score / q.questions.length) * 100);
    var em = pct >= 80 ? '🏆' : (pct >= 50 ? '👍' : '💪');
    $('<div class="empty" style="padding-top:60px"><div class="big">' + em + '</div>' +
      '<h2>Quiz terminé</h2>' +
      '<div class="stat-grid" style="margin-top:24px">' +
        '<div class="stat"><div class="num">' + q.score + '/' + q.questions.length + '</div><div class="lbl">Score</div></div>' +
        '<div class="stat"><div class="num">' + pct + '%</div><div class="lbl">Réussite</div></div>' +
      '</div>' +
      '<button class="btn" style="margin-bottom:10px" onclick="App.quizStart()">Rejouer</button>' +
      '<button class="btn secondary" onclick="App.home()">Accueil</button></div>');
  },

  /* ---------- STATS ---------- */
  statsScreen: function(){
    var s = Stats.get();
    var seen = Object.keys(SRS.load()).length;
    var mastered = SRS.mastered();
    var learning = SRS.learning();
    var acc = s.totalReviews ? Math.round((s.correctReviews / s.totalReviews) * 100) : 0;
    var h = '<button class="back" onclick="App.home()">← Retour</button><h2>Statistiques</h2>' +
      '<div class="stat-grid">' +
        '<div class="stat"><div class="num">🔥 ' + s.streak + '</div><div class="lbl">Jours de suite</div></div>' +
        '<div class="stat"><div class="num">' + s.xp + '</div><div class="lbl">XP</div></div>' +
        '<div class="stat"><div class="num">' + s.totalReviews + '</div><div class="lbl">Révisions</div></div>' +
        '<div class="stat"><div class="num">' + acc + '%</div><div class="lbl">Précision</div></div>' +
      '</div>' +
      '<div class="card"><h3>Progression</h3>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>🔵 Maîtrisés</span><strong>' + mastered + '/' + VOCAB.length + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>🟡 En cours</span><strong>' + learning + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>⚪ Jamais vus</span><strong>' + (VOCAB.length - seen) + '</strong></div>' +
        '<div class="progress" style="margin-top:14px"><div class="progress-bar" style="width:' + Math.round(mastered / VOCAB.length * 100) + '%"></div></div>' +
      '</div>' +
      '<div class="card"><h3>🏆 Badges</h3>';
    for (var i = 0; i < BADGES.length; i++){
      var b = BADGES[i];
      var ok = false;
      try { ok = b.req(s); } catch(e){ ok = false; }
      h += '<span class="badge' + (ok ? '' : ' locked') + '">' + (ok ? '' : '🔒 ') + b.name + '</span>';
    }
    h += '</div>';
    $(h);
  },

  /* ---------- RÉGLAGES ---------- */
  settings: function(){
    var theme = localStorage.getItem('theme') || 'light';
    $('<button class="back" onclick="App.home()">← Retour</button><h2>Réglages</h2>' +
      '<div class="card"><h3>🎨 Thème</h3>' +
        '<div class="grid-2" style="margin-top:10px">' +
          '<button class="btn ' + (theme === 'light' ? '' : 'secondary') + '" onclick="App.setTheme(\'light\')">☀️ Clair</button>' +
          '<button class="btn ' + (theme === 'dark' ? '' : 'secondary') + '" onclick="App.setTheme(\'dark\')">🌙 Sombre</button>' +
        '</div>' +
      '</div>' +
      '<div class="card"><h3>🔊 Voix arabe</h3>' +
        '<p class="muted" style="margin:8px 0 12px">Pour un audio de qualité hors ligne :<br><strong>Paramètres Android → Système → Langues → Synthèse vocale → Installer العربية</strong></p>' +
        '<button class="btn secondary" onclick="speak(\'مَرْحَبًا\')">🔊 Tester</button>' +
      '</div>' +
      '<div class="card"><h3>📚 Contenu</h3>' +
        '<p class="muted">' + ALPHABET.length + ' lettres · ' + VOCAB.length + ' mots · ' + GRAMMAR.length + ' règles · ' + DIALOGUES.length + ' dialogues</p>' +
      '</div>' +
      '<div class="card"><h3 style="color:var(--danger)">⚠️ Danger</h3>' +
        '<p class="muted" style="margin:8px 0 12px">Efface toute la progression.</p>' +
        '<button class="btn danger" onclick="App.resetAll()">Réinitialiser</button>' +
      '</div>' +
      '<div class="card" style="text-align:center;font-size:13px;color:var(--muted)"><strong style="color:var(--primary)">Arabiyya</strong> v2.1 · 100% hors ligne</div>');
  },

  setTheme: function(t){
    try { localStorage.setItem('theme', t); } catch(e){}
    document.documentElement.setAttribute('data-theme', t);
    this.settings();
  },

  resetAll: function(){
    if (confirm('Effacer toute la progression ?')){
      Stats.reset();
      SRS.save({});
      toast('Réinitialisé');
      App.home();
    }
  }
};
window.App = App;

/* ---------- DÉMARRAGE ---------- */
function initApp(){
  var theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  App.home();
  if ('speechSynthesis' in window){
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = function(){ speechSynthesis.getVoices(); };
  }
  if ('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('./sw.js').catch(function(){});
    });
  }
}

/* CORRECTION : check readyState pour ne jamais rater le rendu */
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}