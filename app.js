/* =====================================================
   ARABIYYA — Logique principale
   Version 5.0 — Intégration complète Tomes de Médine
   ===================================================== */

/* ---------- AGRÉGATION DES SOURCES ---------- */
function getAllVocab(){
  var base = (typeof VOCAB !== 'undefined' && VOCAB) ? VOCAB : [];
  var med = (window.MADINAH_VOCAB && window.MADINAH_VOCAB.length) ? window.MADINAH_VOCAB : [];
  return base.concat(med);
}

function getAllExercises(){
  var ex = (window.MADINAH_EXERCISES && window.MADINAH_EXERCISES.length) ? window.MADINAH_EXERCISES : [];
  return ex;
}

/* ---------- GÉNÉRATION DES QUESTIONS DU QUIZ ---------- */
function buildQuizQuestions(){
  var qs = [];
  var allVocab = getAllVocab();
  var allEx = getAllExercises();

  for (var i = 0; i < allEx.length; i++){
    var ex = allEx[i];
    if (ex.type === 'qcm' && ex.options && ex.options.length >= 2){
      qs.push({
        source: 'madinah',
        prompt: ex.q,
        options: ex.options.slice(),
        correct: ex.correct,
        label: ex.tome + ' · ' + ex.lesson
      });
    }
    if (ex.type === 'fill' && ex.options && ex.options.length >= 2){
      qs.push({
        source: 'madinah',
        prompt: ex.sentence,
        options: ex.options.slice(),
        correct: ex.correct,
        label: ex.tome + ' · ' + ex.lesson,
        isAr: true
      });
    }
    if (ex.type === 'tf'){
      qs.push({
        source: 'madinah',
        isTF: true,
        prompt: (ex.ar ? ex.ar + ' — ' : '') + ex.q,
        correct: ex.correct,
        explain: ex.explain,
        label: ex.tome + ' · ' + ex.lesson
      });
    }
  }

  if (allVocab.length >= 4){
    for (var j = 0; j < allVocab.length; j++){
      var v = allVocab[j];
      var wrong = [];
      var attempts = 0;
      while (wrong.length < 3 && attempts < 50){
        var r = allVocab[Math.floor(Math.random() * allVocab.length)];
        if (r.id !== v.id && r.fr !== v.fr && wrong.indexOf(r.fr) === -1){
          wrong.push(r.fr);
        }
        attempts++;
      }
      if (wrong.length === 3){
        var opts = shuffle([v.fr].concat(wrong));
        qs.push({
          source: 'vocab',
          card: v,
          options: opts,
          correct: opts.indexOf(v.fr),
          label: v.t || v.lv || ''
        });
      }
    }
  }
  return qs;
}

/* ---------- SRS ---------- */
var SRS = {
  KEY: 'arabiyya_srs',
  load: function(){ try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch(e){ return {}; } },
  save: function(d){ try { localStorage.setItem(this.KEY, JSON.stringify(d)); } catch(e){ } },
  update: function(id, q){
    var all = this.load();
    var c = all[id] || { interval:0, ef:2.5, reps:0, lapses:0 };
    var int_ = c.interval, ef = c.ef, reps = c.reps, lapses = c.lapses;
    if (q === 0){ reps = 0; lapses++; int_ = 10/1440; ef = Math.max(1.3, ef - 0.2); }
    else {
      reps++;
      if (reps === 1) int_ = 1;
      else if (reps === 2) int_ = 6;
      else int_ = Math.round(int_ * ef);
      if (q === 1){ int_ = Math.max(1, int_ * 0.6); ef = Math.max(1.3, ef - 0.15); }
      if (q === 3){ int_ = Math.round(int_ * 1.3); ef = Math.min(3.0, ef + 0.15); }
    }
    all[id] = { interval: int_, ef: ef, reps: reps, lapses: lapses, due: Date.now() + int_ * 86400000, lastReview: Date.now() };
    this.save(all);
    Stats.recordReview(q >= 2);
  },
  due: function(){
    var all = this.load(); var now = Date.now();
    return getAllVocab().filter(function(v){ var c = all[v.id]; return c && c.due <= now; });
  },
  newOnes: function(){
    var all = this.load();
    return getAllVocab().filter(function(v){ return !all[v.id]; });
  },
  mastered: function(){
    var all = this.load(); var pool = getAllVocab();
    return pool.filter(function(v){ var c = all[v.id]; return c && c.reps >= 3; }).length;
  },
  learning: function(){
    var all = this.load(); var pool = getAllVocab();
    return pool.filter(function(v){ var c = all[v.id]; return c && c.reps > 0 && c.reps < 3; }).length;
  },
  seen: function(){
    var all = this.load(); var pool = getAllVocab();
    return pool.filter(function(v){ return all[v.id]; }).length;
  }
};

/* ---------- STATS ---------- */
var Stats = {
  KEY: 'arabiyya_stats',
  load: function(){ try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch(e){ return {}; } },
  save: function(d){ try { localStorage.setItem(this.KEY, JSON.stringify(d)); } catch(e){ } },
  get: function(){
    var s = this.load();
    return {
      streak: s.streak || 0, lastStudy: s.lastStudy || 0,
      totalReviews: s.totalReviews || 0, correctReviews: s.correctReviews || 0,
      xp: s.xp || 0
    };
  },
  recordReview: function(ok){
    var s = this.load();
    s.totalReviews = (s.totalReviews || 0) + 1;
    if (ok) s.correctReviews = (s.correctReviews || 0) + 1;
    s.xp = (s.xp || 0) + (ok ? 10 : 2);
    var today = new Date().setHours(0,0,0,0);
    var last = s.lastStudy ? new Date(s.lastStudy).setHours(0,0,0,0) : 0;
    var diff = (today - last) / 86400000;
    if (diff === 0){ } else if (diff === 1){ s.streak = (s.streak || 0) + 1; } else { s.streak = 1; }
    s.lastStudy = Date.now();
    this.save(s);
  },
  reset: function(){ try { localStorage.removeItem(this.KEY); } catch(e){ } }
};

/* ---------- AUDIO ---------- */
function speak(text){
  if (!('speechSynthesis' in window)) return;
  if (!text) return;
  try {
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA'; u.rate = 0.8;
    var voices = speechSynthesis.getVoices();
    var arabicVoice = null;
    if (voices && voices.length){
      for (var i = 0; i < voices.length; i++){
        var vl = voices[i].lang || '';
        if (vl.indexOf('ar') === 0){ arabicVoice = voices[i]; break; }
      }
    }
    if (arabicVoice) u.voice = arabicVoice;
    speechSynthesis.speak(u);
  } catch(e){ }
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
  session: null, quiz: null, memory: null,

  home: function(){
    var s = Stats.get();
    var due = SRS.due().length;
    var nw = SRS.newOnes().length;
    var totalVocab = getAllVocab().length;
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
          '<div><div style="font-size:32px;font-weight:800">' + totalVocab + '</div><div style="font-size:12px;opacity:.85">mots</div></div>' +
        '</div>' +
      '</div>' +

      '<button class="menu-btn" onclick="NourScreen.home()" style="background:linear-gradient(135deg,#0f5132,#1a7f52);color:#fff">' +
        '<div class="icon" style="background:rgba(255,255,255,.2)">📖</div>' +
        '<div><div class="label" style="color:#fff">📖 Nour Al Bayan</div>' +
        '<div class="sub" style="color:rgba(255,255,255,.85)">Méthode complète · 7 niveaux</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="MadinahScreen.home()" style="background:linear-gradient(135deg,#8b0000,#b71c1c);color:#fff">' +
        '<div class="icon" style="background:rgba(255,255,255,.2)">📖</div>' +
        '<div><div class="label" style="color:#fff">📖 Tomes de Médine</div>' +
        '<div class="sub" style="color:rgba(255,255,255,.85)">Méthode du Dr. V. Abdur Rahim</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.study()">' +
        '<div class="icon">📚</div>' +
        '<div><div class="label">Étudier maintenant</div><div class="sub">Répétition espacée · ' + totalVocab + ' cartes</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.lessons()">' +
        '<div class="icon">📖</div>' +
        '<div><div class="label">Leçons guidées</div><div class="sub">' + LESSONS.length + ' leçons progressives</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.vocab()">' +
        '<div class="icon">📚</div>' +
        '<div><div class="label">Vocabulaire</div><div class="sub">' + totalVocab + ' mots · A1 → B1 → Médine</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.dialogues()">' +
        '<div class="icon">💬</div>' +
        '<div><div class="label">Dialogues</div><div class="sub">' + DIALOGUES.length + ' scènes du quotidien</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.writing()">' +
        '<div class="icon">✍️</div>' +
        '<div><div class="label">Écriture</div><div class="sub">Trace les lettres</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.memory()">' +
        '<div class="icon">🎮</div>' +
        '<div><div class="label">Jeu Memory</div><div class="sub">' + totalVocab + ' mots disponibles</div></div>' +
      '</button>' +

      '<button class="menu-btn" onclick="App.quizStart()">' +
        '<div class="icon">🎯</div>' +
        '<div><div class="label">Quiz</div><div class="sub">Mots + exercices du Tome 1</div></div>' +
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
    this.session = { queue: words, index: 0, flipped: false, correct: 0, total: words.length, title: L.title };
    this.renderCard();
  },

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
    this.session = { queue: q, index: 0, flipped: false, correct: 0, total: q.length, title: 'Révision' };
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
        '<div class="theme">' + (c.t || '') + '</div>' +
        '<div class="word ar">' + c.ar + '</div>' +
        (s.flipped
          ? '<div class="translit">' + (c.tr || '') + '</div><div class="translation">' + c.fr + '</div>'
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

  flip: function(){ if (this.session){ this.session.flipped = true; this.renderCard(); } },

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

  vocab: function(){
    var base = (typeof VOCAB !== 'undefined' && VOCAB) ? VOCAB : [];
    var a1 = base.filter(function(v){ return v.lv === 'A1'; }).length;
    var a2 = base.filter(function(v){ return v.lv === 'A2'; }).length;
    var b1 = base.filter(function(v){ return v.lv === 'B1'; }).length;
    var med = (window.MADINAH_VOCAB && window.MADINAH_VOCAB.length) ? window.MADINAH_VOCAB.length : 0;
    $('<button class="back" onclick="App.home()">← Retour</button>' +
      '<h2>Vocabulaire</h2>' +
      '<p class="muted" style="margin-bottom:12px">' + getAllVocab().length + ' mots disponibles</p>' +
      '<div class="grid-2" style="margin-bottom:16px">' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'A1\')">A1 (' + a1 + ')</button>' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'A2\')">A2 (' + a2 + ')</button>' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'B1\')">B1 (' + b1 + ')</button>' +
        '<button class="btn secondary" onclick="App.vocabByLevel(\'MEDINE\')">Médine (' + med + ')</button>' +
      '</div>');
  },

  vocabByLevel: function(lv){
    var list = getAllVocab().filter(function(v){ return v.lv === lv; });
    var titleMap = { A1: "Niveau A1", A2: "Niveau A2", B1: "Niveau B1", MEDINE: "Tomes de Médine" };
    var h = '<button class="back" onclick="App.vocab()">← Vocabulaire</button>' +
      '<h2>' + (titleMap[lv] || lv) + '</h2>' +
      '<p class="muted" style="margin-bottom:12px">' + list.length + ' mots</p>';
    for (var i = 0; i < list.length; i++){
      var v = list[i];
      h += '<div class="card" style="padding:14px;margin-bottom:8px;cursor:pointer" onclick="speak(\'' + esc(v.ar) + '\')">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">' +
          '<div><div class="ar" style="font-size:26px;color:var(--primary)">' + v.ar + '</div>' +
          '<div style="font-size:14px;font-weight:700;margin-top:4px">' + v.fr + '</div>' +
          '<div style="font-size:12px;color:var(--muted);font-style:italic">' + (v.tr || '') + ' · ' + (v.t || '') + '</div></div>' +
          '<div style="font-size:24px">🔊</div>' +
        '</div></div>';
    }
    $(h);
  },

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
        '<div class="fr">' + ln.fr + '</div></div>';
    }
    h += '</div><p class="muted" style="text-align:center;font-size:12px">👆 Touche une réplique pour l\'écouter</p>';
    $(h);
  },

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
    if (r.width < 10 || r.height < 10) return;
    var ctx = c.getContext('2d');
    c.width = Math.round(r.width * 2);
    c.height = Math.round(r.height * 2);
    ctx.scale(2, 2);
    ctx.strokeStyle = '#0f5132';
    ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    var drawing = false;
    function pos(e){
      var r2 = c.getBoundingClientRect();
      var t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r2.left, y: t.clientY - r2.top };
    }
    function start(e){ e.preventDefault(); drawing = true; var p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); }
    function move(e){ if (!drawing) return; e.preventDefault(); var p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); }
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
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.restore();
  },

  memory: function(){
    var pool = shuffle(getAllVocab()).slice(0, 6);
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
      '<p class="muted" style="margin-bottom:12px">Essais : ' + m.tries + ' · Paires : ' + (m.matched.length / 2) + '/6</p>' +
      '<div class="memory-grid">';
    for (var i = 0; i < m.cards.length; i++){
      var c = m.cards[i];
      var isFlipped = m.flipped.indexOf(i) !== -1 || m.matched.indexOf(i) !== -1;
      var isMatched = m.matched.indexOf(i) !== -1;
      h += '<button class="memory-card' + (isFlipped ? ' flipped' : '') + (isMatched ? ' matched' : '') + '" ' +
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
        if (m.matched.length === m.cards.length){ setTimeout(function(){ toast('🎉 Bravo !'); }, 300); }
      } else {
        this.renderMemory();
        var self = this;
        setTimeout(function(){ m.flipped = []; self.renderMemory(); }, 800);
      }
    } else { this.renderMemory(); }
  },

  quizStart: function(){
    var allQs = buildQuizQuestions();
    if (!allQs.length){ toast('❌ Aucune question disponible'); return; }
    var count = Math.min(20, allQs.length);
    this.quiz = { questions: shuffle(allQs).slice(0, count), index: 0, score: 0, total: allQs.length };
    this.renderQuiz();
  },

  renderQuiz: function(){
    var q = this.quiz;
    if (!q || q.index >= q.questions.length) return this.endQuiz();
    var cur = q.questions[q.index];
    var p = Math.round((q.index / q.questions.length) * 100);
    var h = '<button class="back" onclick="App.home()">← Quitter</button>' +
      '<div class="counter">Q ' + (q.index + 1) + '/' + q.questions.length + ' · Score : ' + q.score + '</div>' +
      '<div class="progress"><div class="progress-bar" style="width:' + p + '%"></div></div>';
    if (cur.label){
      h += '<div class="card" style="padding:10px;margin-bottom:8px"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;font-weight:700;text-align:center">' + cur.label + '</div></div>';
    }
    h += '<div class="card" style="text-align:center;padding:30px 20px">';
    if (cur.isTF){
      h += '<p style="font-size:16px;font-weight:700;line-height:1.6">' + cur.prompt + '</p>';
    } else if (cur.card){
      h += '<div class="ar" style="font-size:60px;color:var(--primary)">' + cur.card.ar + '</div>' +
        '<div style="font-size:15px;color:var(--muted);margin-top:8px;font-style:italic">' + (cur.card.tr || '') + '</div>' +
        '<button onclick="speak(\'' + esc(cur.card.ar) + '\')" style="background:#e6eeea;color:var(--primary);border:none;margin-top:14px;padding:8px 16px;border-radius:20px;font-weight:700;cursor:pointer;font-size:13px;font-family:inherit">🔊</button>';
    } else {
      h += '<p style="font-size:' + (cur.isAr ? '28px' : '16px') + ';font-weight:700;line-height:1.6" class="' + (cur.isAr ? 'ar' : '') + '">' + cur.prompt + '</p>';
      if (cur.isAr){
        h += '<button onclick="speak(\'' + esc(cur.prompt) + '\')" style="background:#e6eeea;color:var(--primary);border:none;margin-top:14px;padding:8px 16px;border-radius:20px;font-weight:700;cursor:pointer;font-size:13px;font-family:inherit">🔊</button>';
      }
    }
    h += '</div>';
    if (cur.isTF){
      h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
        '<button class="btn" style="background:var(--success)" onclick="App.quizAnswerTF(true)">✅ Vrai</button>' +
        '<button class="btn" style="background:var(--danger)" onclick="App.quizAnswerTF(false)">❌ Faux</button>' +
      '</div>';
    } else {
      for (var i = 0; i < cur.options.length; i++){
        h += '<button class="quiz-option" onclick="App.quizAnswer(' + i + ')">' + cur.options[i] + '</button>';
      }
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
    var correctText = cur.options[cur.correct];
    var btns = document.querySelectorAll('.quiz-option');
    for (var k = 0; k < btns.length; k++){
      btns[k].disabled = true;
      if (cur.options[k] === correctText) btns[k].classList.add('correct');
      else if (k === i) btns[k].classList.add('wrong');
    }
    if (sel === correctText){ q.score++; toast('✅ Correct !'); } else toast('❌ Mauvaise réponse');
    var self = this;
    setTimeout(function(){ q.index++; self.renderQuiz(); }, 1200);
  },

  quizAnswerTF: function(val){
    var q = this.quiz;
    if (!q) return;
    var cur = q.questions[q.index];
    if (cur.answered) return;
    cur.answered = true;
    var btns = document.querySelectorAll('button.btn');
    for (var k = 0; k < btns.length; k++) btns[k].disabled = true;
    if (val === cur.correct){ q.score++; toast('✅ Correct !'); }
    else {
      toast('❌ Faux — c\'était ' + (cur.correct ? 'Vrai' : 'Faux'));
      if (cur.explain) setTimeout(function(){ toast('💡 ' + cur.explain); }, 1500);
    }
    var self = this;
    setTimeout(function(){ q.index++; self.renderQuiz(); }, 1600);
  },

  endQuiz: function(){
    var q = this.quiz;
    var pct = Math.round((q.score / q.questions.length) * 100);
    var em = pct >= 80 ? '🏆' : (pct >= 50 ? '👍' : '💪');
    $('<div class="empty" style="padding-top:60px"><div class="big">' + em + '</div>' +
      '<h2>Quiz terminé</h2>' +
      '<p class="muted" style="margin-top:8px">' + q.total + ' questions disponibles</p>' +
      '<div class="stat-grid" style="margin-top:24px">' +
        '<div class="stat"><div class="num">' + q.score + '/' + q.questions.length + '</div><div class="lbl">Score</div></div>' +
        '<div class="stat"><div class="num">' + pct + '%</div><div class="lbl">Réussite</div></div>' +
      '</div>' +
      '<button class="btn" style="margin-bottom:10px" onclick="App.quizStart()">Rejouer</button>' +
      '<button class="btn secondary" onclick="App.home()">Accueil</button></div>');
  },

  statsScreen: function(){
    var s = Stats.get();
    var pool = getAllVocab();
    var seen = SRS.seen();
    var mastered = SRS.mastered();
    var learning = SRS.learning();
    var acc = s.totalReviews ? Math.round((s.correctReviews / s.totalReviews) * 100) : 0;
    var totalEx = getAllExercises().length;
    var h = '<button class="back" onclick="App.home()">← Retour</button><h2>Statistiques</h2>' +
      '<div class="stat-grid">' +
        '<div class="stat"><div class="num">🔥 ' + s.streak + '</div><div class="lbl">Jours de suite</div></div>' +
        '<div class="stat"><div class="num">' + s.xp + '</div><div class="lbl">XP</div></div>' +
        '<div class="stat"><div class="num">' + s.totalReviews + '</div><div class="lbl">Révisions</div></div>' +
        '<div class="stat"><div class="num">' + acc + '%</div><div class="lbl">Précision</div></div>' +
      '</div>' +
      '<div class="card"><h3>Progression globale</h3>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>🔵 Maîtrisés</span><strong>' + mastered + '/' + pool.length + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>🟡 En cours</span><strong>' + learning + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>⚪ Jamais vus</span><strong>' + (pool.length - seen) + '</strong></div>' +
        '<div class="progress" style="margin-top:14px"><div class="progress-bar" style="width:' + Math.round(mastered / pool.length * 100) + '%"></div></div>' +
      '</div>' +
      '<div class="card"><h3>📚 Contenu</h3>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>Mots au total</span><strong>' + pool.length + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;margin:12px 0;font-size:14px"><span>Exercices du Tome 1</span><strong>' + totalEx + '</strong></div>' +
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

  settings: function(){
    var theme = localStorage.getItem('theme') || 'light';
    var poolSize = getAllVocab().length;
    var exSize = getAllExercises().length;
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
        '<p class="muted">' + ALPHABET.length + ' lettres · ' + poolSize + ' mots · ' + DIALOGUES.length + ' dialogues · ' + exSize + ' exercices Tome 1</p>' +
      '</div>' +
      '<div class="card"><h3 style="color:var(--danger)">⚠️ Danger</h3>' +
        '<p class="muted" style="margin:8px 0 12px">Efface toute la progression.</p>' +
        '<button class="btn danger" onclick="App.resetAll()">Réinitialiser</button>' +
      '</div>' +
      '<div class="card" style="text-align:center;font-size:13px;color:var(--muted)"><strong style="color:var(--primary)">Arabiyya</strong> v5.0 · 100% hors ligne</div>');
  },

  setTheme: function(t){
    try { localStorage.setItem('theme', t); } catch(e){ }
    document.documentElement.setAttribute('data-theme', t);
    this.settings();
  },

  resetAll: function(){
    if (confirm('Effacer toute la progression ?')){
      Stats.reset(); SRS.save({});
      toast('Réinitialisé'); App.home();
    }
  }
};
window.App = App;

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

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}