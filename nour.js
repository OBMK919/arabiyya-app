/* ============================================================
   NOUR AL BAYAN — Module complet (Version 2.1)
   Basé sur la méthode égyptienne classique
   28 lettres · 3 voyelles courtes · 3 Madd · ~3600 exercices
   Corrections v2.1 :
   - Alif affiché seul (pas de voyelle sur alif)
   - Mots Madd Alif/Ya invalides supprimés
   - Générateurs commencent à l'index 1 (skip alif)
   - window.L supprimé
   ============================================================ */
(function(){
"use strict";

/* ---------- Échappement local (app.js chargé après) ---------- */
function esc(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/* ---------- 28 LETTRES ARABES (ordre Nour Al Bayan) ---------- */
var L = [
  {ar:"ا", n:"Alif",  tr:"ā", s:"a",  iso:"ا", ini:"ا", med:"ـا", fin:"ـا"},
  {ar:"ب", n:"Ba",    tr:"b", s:"b",  iso:"ب", ini:"بـ", med:"ـبـ", fin:"ـب"},
  {ar:"ت", n:"Ta",    tr:"t", s:"t",  iso:"ت", ini:"تـ", med:"ـتـ", fin:"ـت"},
  {ar:"ث", n:"Tha",   tr:"th",s:"th", iso:"ث", ini:"ثـ", med:"ـثـ", fin:"ـث"},
  {ar:"ج", n:"Jim",   tr:"j", s:"j",  iso:"ج", ini:"جـ", med:"ـجـ", fin:"ـج"},
  {ar:"ح", n:"Ha",    tr:"ḥ", s:"ḥ",  iso:"ح", ini:"حـ", med:"ـحـ", fin:"ـح"},
  {ar:"خ", n:"Kha",   tr:"kh",s:"kh", iso:"خ", ini:"خـ", med:"ـخـ", fin:"ـخ"},
  {ar:"د", n:"Dal",   tr:"d", s:"d",  iso:"د", ini:"د",  med:"ـد", fin:"ـد"},
  {ar:"ذ", n:"Dhal",  tr:"dh",s:"dh", iso:"ذ", ini:"ذ",  med:"ـذ", fin:"ـذ"},
  {ar:"ر", n:"Ra",    tr:"r", s:"r",  iso:"ر", ini:"ر",  med:"ـر", fin:"ـر"},
  {ar:"ز", n:"Zay",   tr:"z", s:"z",  iso:"ز", ini:"ز",  med:"ـز", fin:"ـز"},
  {ar:"س", n:"Sin",   tr:"s", s:"s",  iso:"س", ini:"سـ", med:"ـسـ", fin:"ـس"},
  {ar:"ش", n:"Shin",  tr:"sh",s:"sh", iso:"ش", ini:"شـ", med:"ـشـ", fin:"ـش"},
  {ar:"ص", n:"Sad",   tr:"ṣ", s:"ṣ",  iso:"ص", ini:"صـ", med:"ـصـ", fin:"ـص"},
  {ar:"ض", n:"Dad",   tr:"ḍ", s:"ḍ",  iso:"ض", ini:"ضـ", med:"ـضـ", fin:"ـض"},
  {ar:"ط", n:"Ta",    tr:"ṭ", s:"ṭ",  iso:"ط", ini:"طـ", med:"ـطـ", fin:"ـط"},
  {ar:"ظ", n:"Dha",   tr:"ẓ", s:"ẓ",  iso:"ظ", ini:"ظـ", med:"ـظـ", fin:"ـظ"},
  {ar:"ع", n:"Ayn",   tr:"ʿ", s:"ʿ",  iso:"ع", ini:"عـ", med:"ـعـ", fin:"ـع"},
  {ar:"غ", n:"Ghayn", tr:"gh",s:"gh", iso:"غ", ini:"غـ", med:"ـغـ", fin:"ـغ"},
  {ar:"ف", n:"Fa",    tr:"f", s:"f",  iso:"ف", ini:"فـ", med:"ـفـ", fin:"ـف"},
  {ar:"ق", n:"Qaf",   tr:"q", s:"q",  iso:"ق", ini:"قـ", med:"ـقـ", fin:"ـق"},
  {ar:"ك", n:"Kaf",   tr:"k", s:"k",  iso:"ك", ini:"كـ", med:"ـكـ", fin:"ـك"},
  {ar:"ل", n:"Lam",   tr:"l", s:"l",  iso:"ل", ini:"لـ", med:"ـلـ", fin:"ـل"},
  {ar:"م", n:"Mim",   tr:"m", s:"m",  iso:"م", ini:"مـ", med:"ـمـ", fin:"ـم"},
  {ar:"ن", n:"Nun",   tr:"n", s:"n",  iso:"ن", ini:"نـ", med:"ـنـ", fin:"ـن"},
  {ar:"ه", n:"Ha",    tr:"h", s:"h",  iso:"ه", ini:"هـ", med:"ـهـ", fin:"ـه"},
  {ar:"و", n:"Waw",   tr:"w", s:"w",  iso:"و", ini:"و",  med:"ـو", fin:"ـو"},
  {ar:"ي", n:"Ya",    tr:"y", s:"y",  iso:"ي", ini:"يـ", med:"ـيـ", fin:"ـي"}
];

/* ---------- VOYELLES COURTES ---------- */
var VOWELS = {
  fatha: {ar:"َ", n:"Fatha", sound:"a",  fr:"son a court",  color:"#e74c3c"},
  kasra: {ar:"ِ", n:"Kasra", sound:"i",  fr:"son i court",  color:"#3498db"},
  damma: {ar:"ُ", n:"Damma", sound:"ou", fr:"son ou court", color:"#27ae60"}
};

/* ---------- MADD (voyelles longues) ---------- */
var MADD = {
  alif: {n:"Madd Alif", prefix:"َ", suffix:"ا", sound:"ā", color:"#e74c3c", icon:"ا"},
  waw:  {n:"Madd Waw",  prefix:"ُ", suffix:"و", sound:"ū", color:"#8e44ad", icon:"و"},
  ya:   {n:"Madd Ya",   prefix:"ِ", suffix:"ي", sound:"ī", color:"#2980b9", icon:"ي"}
};

/* ---------- MOTS RÉELS VÉRIFIÉS ---------- */

/* === Voyelles courtes : Niveau 2 === */
var W_FATHA_L2 = [
  "بَتَ","تَبَ","جَلَ","لَجَ","حَمَ","مَحَ","خَدَ","دَخَ","ذَهَ","هَذَ",
  "رَجَ","جَرَ","زَهَ","هَزَ","سَمَ","مَسَ","شَرَ","رَشَ","صَدَ","دَصَ",
  "ضَرَ","رَضَ","طَلَ","لَطَ","ظَلَ","لَظَ","عَبَ","بَعَ","غَرَ","رَغَ",
  "فَتَ","تَفَ","قَلَ","لَقَ","كَتَ","تَكَ","لَعَ","عَلَ","نَصَ","صَنَ",
  "هَدَ","دَهَ","وَعَ","عَوَ","يَبَ","بَيَ","مَنَ","نَمَ","سَبَ","بَسَ",
  "حَفَ","فَحَ","طَبَ","بَطَ","كَمَ","مَكَ","زَرَ","رَزَ","دَفَ","فَدَ",
  "جَمَ","مَجَ","خَلَ","لَخَ","شَكَ","كَشَ","صَلَ","لَصَ","ضَمَ","مَضَ",
  "رَبَ","بَرَ","قَدَ","دَقَ","هَبَ","بَهَ","عَدَ","دَعَ","سَدَ","دَسَ",
  "حَرَ","رَحَ","فَلَ","لَفَ","نَظَ","ظَنَ","غَلَ","لَغَ","طَفَ","فَطَ",
  "جَهَ","هَجَ","دَنَ","نَدَ","تَمَ","مَتَ","سَخَ","خَسَ","رَصَ","صَرَ",
  "عَصَ","صَعَ","زَلَ","لَزَ","كَفَ","فَكَ","بَلَ","لَبَ","نَوَ","وَنَ"
];

var W_FATHA_L3 = [
  "كَتَبَ","جَلَسَ","ذَهَبَ","فَتَحَ","نَصَرَ","ضَرَبَ","مَنَعَ","رَجَعَ",
  "جَمَعَ","خَرَجَ","دَخَلَ","حَفَظَ","عَبَدَ","فَعَلَ","وَعَدَ","وَصَلَ",
  "نَفَعَ","صَنَعَ","طَلَعَ","سَبَقَ","شَكَرَ","خَلَقَ","بَلَغَ","لَحَظَ",
  "سَأَلَ","قَرَأَ","أَخَذَ","أَكَلَ","زَرَعَ","سَمَحَ","مَدَحَ","شَرَحَ",
  "سَكَنَ","عَرَفَ","حَضَرَ","غَلَبَ","طَبَخَ","رَسَمَ","بَدَأَ","جَذَبَ",
  "حَرَثَ","ذَبَحَ","سَبَحَ","صَرَخَ","ضَحِكَ","طَبَعَ","ظَهَرَ","عَدَلَ",
  "غَنَمَ","قَطَعَ","كَسَبَ","لَعِبَ","مَشَى","نَجَحَ","هَزَمَ","وَجَدَ",
  "يَبِسَ","كَذَبَ","سَافَرَ","عَاشَرَ","شَاهَدَ","تَعَلَّمَ","كَالَمَ","سَاعَدَ",
  "حَاسَبَ","قَاتَلَ","نَادَى","دَعَا","بَكَى","نَسِيَ","رَضِيَ","سَعَى",
  "مَرْحَبًا","أَهْلًا","سَهْلًا","شُكْرًا","عَفْوًا","نَعَمْ","بَلَى",
  "صَبَاح","مَسَاء","خَيْر","بِخَيْر","حَالُكَ","كَيْفَ","هَذَا","ذَلِكَ",
  "الَّذِي","الَّتِي","هِيَ","هُوَ","أَنَا","أَنْتَ","أَنْتِ","نَحْنُ",
  "كُنْتُ","كَانَ","أَمْسِ","اليَوْم","غَدًا","صَبَاحًا","مَسَاءً","لَيْلًا"
];

var W_KASRA_L2 = [
  "بِتِ","تِبِ","جِلِ","لِجِ","حِمِ","مِحِ","خِدِ","دِخِ","ذِهِ","هِذِ",
  "رِجِ","جِرِ","زِهِ","هِزِ","سِمِ","مِسِ","شِرِ","رِشِ","صِدِ","دِصِ",
  "ضِرِ","رِضِ","طِلِ","لِطِ","ظِلِ","لِظِ","عِبِ","بِعِ","غِرِ","رِغِ",
  "فِتِ","تِفِ","قِلِ","لِقِ","كِتِ","تِكِ","لِعِ","عِلِ","نِصِ","صِنِ",
  "هِدِ","دِهِ","وِعِ","عِوِ","يِبِ","بِيِ","مِنِ","نِمِ","سِبِ","بِسِ",
  "حِفِ","فِحِ","طِبِ","بِطِ","كِمِ","مِكِ","زِرِ","رِزِ","دِفِ","فِدِ",
  "جِمِ","مِجِ","خِلِ","لِخِ","شِكِ","كِشِ","صِلِ","لِصِ","ضِمِ","مِضِ",
  "رِبِ","بِرِ","قِدِ","دِقِ","هِبِ","بِهِ","عِدِ","دِعِ","سِدِ","دِسِ",
  "حِرِ","رِحِ","فِلِ","لِفِ","نِظِ","ظِنِ","غِلِ","لِغِ","طِفِ","فِطِ",
  "جِهِ","هِجِ","دِنِ","نِدِ","تِمِ","مِتِ","سِخِ","خِسِ","رِصِ","صِرِ"
];

var W_KASRA_L3 = [
  "بِسْمِ","عِلْم","حِبْر","ذِكْر","فِكْر","صِبْر","جِدّ","هِجْر","سِتّ",
  "مِنْ","إِنْ","قِبْل","بِعْد","حِين","دِين","عِين","كِتَاب","سِمَاك","دِفَاع",
  "صِيَام","قِيَام","نِظَام","كِرَام","جِبَال","رِجَال","وِلَاد","تِلَاو","سِلَاح",
  "عِلَاج","فِرَاش","لِبَاس","كِسَاء","غِطَاء","دُعَاء","نِدَاء","بِنَاء","عِتَاب",
  "شِرَاب","طِعَام","حِسَاب","عِقَاب","سِرَاج","صِبَاح","مِفْتَاح","قِنْدِيل","مِنْدِيل",
  "تِلْمِيذ","مِيعَاد","مِيزَان","إِنْسَان","عِنْوَان","بُسْتَان","فِرْعَوْن","مِكْيَال",
  "الرِّجَال","النِّسَاء","البِنَات","الأَوْلَاد","التِّلْمِيذ","الكِتَاب","القَلَم","البَيْت",
  "المَسْجِد","المَدْرَسَة","المَكْتَبَة","المُسْتَشْفَى","الحَدِيقَة","المَطْبَخ","الغُرْفَة","المِفْتَاح"
];

var W_DAMMA_L2 = [
  "بُتُ","تُبُ","جُلُ","لُجُ","حُمُ","مُحُ","خُدُ","دُخُ","ذُهُ","هُذُ",
  "رُجُ","جُرُ","زُهُ","هُزُ","سُمُ","مُسُ","شُرُ","رُشُ","صُدُ","دُصُ",
  "ضُرُ","رُضُ","طُلُ","لُطُ","ظُلُ","لُظُ","عُبُ","بُعُ","غُرُ","رُغُ",
  "فُتُ","تُفُ","قُلُ","لُقُ","كُتُ","تُكُ","لُعُ","عُلُ","نُصُ","صُنُ",
  "هُدُ","دُهُ","وُعُ","عُوُ","يُبُ","بُيُ","مُنُ","نُمُ","سُبُ","بُسُ",
  "حُفُ","فُحُ","طُبُ","بُطُ","كُمُ","مُكُ","زُرُ","رُزُ","دُفُ","فُدُ",
  "جُمُ","مُجُ","خُلُ","لُخُ","شُكُ","كُشُ","صُلُ","لُصُ","ضُمُ","مُضُ",
  "رُبُ","بُرُ","قُدُ","دُقُ","هُبُ","بُهُ","عُدُ","دُعُ","سُدُ","دُسُ",
  "حُرُ","رُحُ","فُلُ","لُفُ","نُظُ","ظُنُ","غُلُ","لُغُ","طُفُ","فُطُ"
];

var W_DAMMA_L3 = [
  "كُتُب","رُسُل","مُلُوك","دُرُوس","نُفُوس","عُقُول","قُلُوب","بُيُوت",
  "جُمُوع","دُخُول","خُرُوج","سُجُود","رُكُوع","صِيَام","قِيَام","كِتَاب",
  "كُتُبِي","دُرُوسِي","مُلُوكُ","نُفُوسُ","قُلُوبُ","بُيُوتُ","عُقُولُ",
  "المُلُوك","الكُتُب","الدُّرُوس","النُّفُوس","القُلُوب","البُيُوت","العُقُول","الرُّسُل",
  "مُدَرِّس","مُهَنْدِس","مُعَلِّم","مُدِير","مُوَظَّف","مُحَاسِب","مُتَرْجِم","مُهَاجِر",
  "مُسْلِم","مُؤْمِن","مُجَاهِد","مُجْتَهِد","مُتَعَلِّم","مُسْتَشْفَى","مُسْتَقْبَل","مُسْتَعْمَل",
  "كُتُبٌ","رُسُلٌ","نُفُوسٌ","قُلُوبٌ","دُرُوسٌ","بُيُوتٌ","عُقُولٌ","مُلُوكٌ",
  "جَاءُوا","ذَهَبُوا","كَتَبُوا","قَرَأُوا","دَرَسُوا","سَمِعُوا","عَلِمُوا","فَهِمُوا",
  "يَكْتُبُونَ","يَقْرَأُونَ","يَدْرُسُونَ","يَلْعَبُونَ","يَأْكُلُونَ","يَشْرَبُونَ","يَنَامُونَ","يَسْتَيْقِظُونَ"
];

/* === Madd Alif Niveau 3 : 45 mots (3 invalides supprimés) === */
var W_MADD_ALIF_L3 = [
  "بَاب","كِتَاب","مَاء","سَمَاء","نَهَار","حِسَاب",
  "جِبَال","رِجَال","كِرَام","نِظَام","قِيَام","صِيَام",
  "شِرَاب","طِعَام","دُعَاء","نِدَاء","بِنَاء","عِلَاج",
  "فِرَاش","لِبَاس","كِسَاء","غِطَاء","سِلَاح","وِلَاد",
  "جَمَال","كَمَال","سَلَام","حَرَام","حَلَال","قَلَام",
  "طَعَام","حَيَاة","صَلَاة","زَكَاة","نَجَاة","فَتَاة",
  "حَمَام","غَمَام","سَحَاب","رِقَاب","شَبَاب","ذُبَاب",
  "غُرَاب","كِلَاب","مَدَار"
];

/* === Madd Waw Niveau 3 : 56 mots === */
var W_MADD_WAW_L3 = [
  "نُور","رُسُول","نُفُوس","عُقُول","قُلُوب","دُخُول","خُرُوج","سُجُود",
  "رُكُوع","وُجُود","شُهُود","يَقُول","يَدُور","يَصُوم","يَنُوب","مَشْهُود",
  "مَحْفُوظ","مَنْصُور","مَذْكُور","مَعْرُوف","مَشْكُور","مَغْفُور","مَأْجُور","مَأْمُور",
  "عَلُوم","قُرُود","يَهُود","قُدُوم","لُزُوم","سُمُوم","خُصُوص","وُضُوء",
  "جُمْهُور","مَشْهُور","مَنْشُور","مَثْبُور","مَأْخُوذ","مَسْمُوع","مَجْمُوع","مَرْفُوع",
  "يَدْخُلُونَ","يَخْرُجُونَ","يَقُولُونَ","يَصُومُونَ","يَدُورُونَ","يَنَامُونَ","يَسْتَعِينُونَ","يُؤْمِنُونَ"
];

/* === Madd Ya Niveau 3 : 40 mots (8 verbes invalides supprimés) === */
var W_MADD_YA_L3 = [
  "كَبِير","صَغِير","جَدِيد","قَدِيم","سَعِيد","حَزِين","سَرِيع","طَوِيل",
  "قَصِير","قَوِيّ","ضَعِيف","نَظِيف","لَطِيف","مَدِينَة","سَفِينَة","حَدِيقَة",
  "طَبِيب","أَخِي","بَيْتِي","كِتَابِي","عِلْمِي","قَلْبِي","دِينِي","يَقِين",
  "مُبِين","مُهِين","رَحِيم","عَلِيم","حَكِيم","كَرِيم","عَظِيم","رَفِيع",
  "بَدِيع","جَمِيع","وَسِيع","شَفِيع","قَرِيب","غَرِيب","حَبِيب","نَسِيب"
];

/* ---------- PHRASES ---------- */
var PHRASES_FATHA = [
  "السَّلَامُ عَلَيْكُمْ","أَهْلًا وَسَهْلًا","كَيْفَ حَالُكَ","أَنَا بِخَيْر",
  "مَا اسْمُكَ","اِسْمِي أَحْمَد","مِنْ أَيْنَ أَنْتَ","أَنَا مِنْ فَرَنْسَا",
  "صَبَاحُ الخَيْر","مَسَاءُ الخَيْر","إِلَى اللِّقَاء","مَعَ السَّلَامَة",
  "شُكْرًا جَزِيلًا","عَفْوًا","نَعَمْ مِنْ فَضْلِكَ","لَا شُكْرًا",
  "هَذَا كِتَابٌ جَدِيد","هَذِهِ مَدْرَسَةٌ كَبِيرَة","الوَلَدُ صَغِيرٌ","البِنْتُ جَمِيلَةٌ"
];

var PHRASES_KASRA = [
  "بِسْمِ اللهِ","الحَمْدُ لِلهِ","مَا شَاءَ الله","إِنْ شَاءَ الله",
  "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِالله","سُبْحَانَ اللهِ","اللهُ أَكْبَر","لَا إِلَهَ إِلَّا الله",
  "كِتَابٌ جَدِيد","تِلْمِيذٌ مُجْتَهِد","مِفْتَاحُ البَيْت","مِنْ فَضْلِكَ",
  "أَنَا مِنْ فَرَنْسَا","هَذَا مَسْجِد","هَذِهِ مَدْرَسَة","ذَلِكَ كِتَابِي"
];

var PHRASES_DAMMA = [
  "كَيْفَ حَالُكُمْ","نَحْنُ طُلَّاب","هُمْ مُدَرِّسُونَ","أَنْتُمْ مُهَنْدِسُونَ",
  "هَذِهِ كُتُبٌ جَدِيدَة","المُسْلِمُونَ إِخْوَة","يَكْتُبُونَ الدُّرُوس","يَقْرَأُونَ القُرْآن",
  "المُعَلِّمُونَ مُجْتَهِدُونَ","المُدَرِّسَاتُ فِي المَدْرَسَة"
];

/* ============================================================
   UTILITAIRES INTERNES
   ============================================================ */
function shuffleArray(a){
  for (var i = a.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* Vérifie qu'un caractère n'est pas alif (pour skip) */
function isAlif(l){ return l.ar === "ا"; }

/* ============================================================
   GÉNÉRATEURS
   ============================================================ */

/* Niveau 1 : 1 lettre + 1 voyelle (alif affiché seul) */
function genLevel1(vowelKey){
  var v = VOWELS[vowelKey];
  if (!v) return [];
  var out = [];
  for (var i = 0; i < L.length; i++){
    if (isAlif(L[i])){
      /* Alif : on ne met PAS de voyelle (elle serait invisible) */
      out.push({ ar: "ا", tr: "ā", fr: "Alif (sans voyelle)", diff: 1 });
    } else {
      out.push({
        ar: L[i].ar + v.ar,
        tr: L[i].s + v.sound,
        fr: L[i].n + " + " + v.n,
        diff: 1
      });
    }
  }
  return out;
}

/* Niveau 2 : ~120 ex (60 mots réels + 60 combinaisons) */
function genLevel2(vowelKey){
  var v = VOWELS[vowelKey];
  if (!v) return [];
  var out = [];
  var pool;
  if (vowelKey === "fatha") pool = W_FATHA_L2;
  else if (vowelKey === "kasra") pool = W_KASRA_L2;
  else pool = W_DAMMA_L2;

  /* 60 mots réels */
  for (var i = 0; i < pool.length && out.length < 60; i++){
    out.push({ ar: pool[i], tr: "", fr: "", diff: 2, v: vowelKey });
  }
  /* 60 combinaisons générées (skip alif en position 1) */
  var idx = 0;
  var safety = 0;
  while (out.length < 120 && safety < 500){
    var a = L[1 + (idx % (L.length - 1))];
    var b = L[(idx + 7) % L.length];
    var c = L[(idx + 13) % L.length];
    var combo = a.ar + v.ar + b.ar + v.ar + c.ar + v.ar;
    out.push({ ar: combo, tr: "", fr: "", diff: 2, v: vowelKey });
    idx++;
    safety++;
  }
  return out.slice(0, 120);
}

/* Niveau 3 : ~300 ex (mots + phrases + combinaisons) */
function genLevel3(vowelKey){
  var v = VOWELS[vowelKey];
  if (!v) return [];
  var out = [];
  var pool, phrases;
  if (vowelKey === "fatha"){ pool = W_FATHA_L3; phrases = PHRASES_FATHA; }
  else if (vowelKey === "kasra"){ pool = W_KASRA_L3; phrases = PHRASES_KASRA; }
  else { pool = W_DAMMA_L3; phrases = PHRASES_DAMMA; }

  for (var i = 0; i < pool.length && out.length < 200; i++){
    out.push({ ar: pool[i], tr: "", fr: "", diff: 3, v: vowelKey });
  }
  for (var j = 0; j < phrases.length && out.length < 250; j++){
    out.push({ ar: phrases[j], tr: "", fr: "", diff: 3, v: vowelKey });
  }
  var idx = 0;
  var safety = 0;
  while (out.length < 300 && safety < 500){
    var a = L[1 + (idx % (L.length - 1))];
    var b = L[(idx + 3) % L.length];
    var c = L[(idx + 11) % L.length];
    var d = L[(idx + 17) % L.length];
    var combo = a.ar + v.ar + b.ar + v.ar + c.ar + d.ar + v.ar;
    out.push({ ar: combo, tr: "", fr: "", diff: 3, v: vowelKey });
    idx++;
    safety++;
  }
  return out.slice(0, 300);
}

/* Madd Niveau 1 : 27 ex (skip alif) */
function genMaddLevel1(maddKey){
  var m = MADD[maddKey];
  if (!m) return [];
  var out = [];
  for (var i = 1; i < L.length; i++){ /* start at 1 : skip alif */
    out.push({
      ar: L[i].ar + m.prefix + m.suffix,
      tr: L[i].s + m.sound,
      fr: L[i].n + " + " + m.n,
      diff: 1
    });
  }
  return out;
}

/* Madd Niveau 2 : 120 ex (combinaisons avec Madd) */
function genMaddLevel2(maddKey){
  var m = MADD[maddKey];
  if (!m) return [];
  var out = [];

  /* 2 lettres + Madd */
  for (var i = 1; i < L.length; i++){ /* skip alif */
    var a = L[i];
    var b = L[(i + 7) % L.length];
    if (isAlif(b)) b = L[1];
    out.push({
      ar: a.ar + m.prefix + m.suffix + b.ar,
      tr: a.s + m.sound + b.s,
      fr: "",
      diff: 2,
      v: "madd_" + maddKey
    });
    if (out.length >= 40) break;
  }
  /* 3 lettres + Madd */
  var idx = 0;
  var safety = 0;
  while (out.length < 120 && safety < 500){
    var x = L[1 + (idx % (L.length - 1))];
    var y = L[(idx + 5) % L.length];
    var z = L[(idx + 9) % L.length];
    if (isAlif(y)) y = L[2];
    if (isAlif(z)) z = L[3];
    out.push({
      ar: x.ar + m.prefix + m.suffix + y.ar + "َ" + z.ar + "َ",
      tr: "",
      fr: "",
      diff: 2,
      v: "madd_" + maddKey
    });
    idx++;
    safety++;
  }
  return out.slice(0, 120);
}

/* Madd Niveau 3 : 300 ex (mots + combinaisons) */
function genMaddLevel3(maddKey){
  var m = MADD[maddKey];
  if (!m) return [];
  var out = [];
  var pool;
  if (maddKey === "alif") pool = W_MADD_ALIF_L3;
  else if (maddKey === "waw") pool = W_MADD_WAW_L3;
  else pool = W_MADD_YA_L3;

  for (var i = 0; i < pool.length && out.length < 200; i++){
    out.push({ ar: pool[i], tr: "", fr: "", diff: 3, v: "madd_" + maddKey });
  }
  var idx = 0;
  var safety = 0;
  while (out.length < 300 && safety < 500){
    var x = L[1 + (idx % (L.length - 1))];
    var y = L[(idx + 5) % L.length];
    var z = L[(idx + 11) % L.length];
    var w = L[(idx + 19) % L.length];
    if (isAlif(y)) y = L[2];
    if (isAlif(z)) z = L[3];
    if (isAlif(w)) w = L[4];
    out.push({
      ar: x.ar + m.prefix + m.suffix + y.ar + "َ" + z.ar + "َ" + w.ar + "َ",
      tr: "",
      fr: "",
      diff: 3,
      v: "madd_" + maddKey
    });
    idx++;
    safety++;
  }
  return out.slice(0, 300);
}

/* Récap Voyelles : par niveau de difficulté */
function genRecapVowels(diff){
  if (diff === 1){
    var out = [];
    var keys = ["fatha", "kasra", "damma"];
    for (var i = 0; i < L.length; i++){
      var vk = keys[i % 3];
      var v = VOWELS[vk];
      if (isAlif(L[i])){
        out.push({ ar: "ا", tr: "ā", fr: "Alif", diff: 1 });
      } else {
        out.push({
          ar: L[i].ar + v.ar,
          tr: L[i].s + v.sound,
          fr: L[i].n + " + " + v.n,
          diff: 1
        });
      }
    }
    return out;
  }
  if (diff === 2){
    var all = genLevel2("fatha").concat(genLevel2("kasra"), genLevel2("damma"));
    return shuffleArray(all).slice(0, 120);
  }
  if (diff === 3){
    var all3 = genLevel3("fatha").concat(genLevel3("kasra"), genLevel3("damma"));
    return shuffleArray(all3).slice(0, 300);
  }
  return [];
}

/* Récap Madd : par niveau de difficulté */
function genRecapMadd(diff){
  if (diff === 1){
    var out = [];
    var keys = ["alif", "waw", "ya"];
    for (var i = 1; i < L.length; i++){ /* skip alif */
      var mk = keys[i % 3];
      var m = MADD[mk];
      out.push({
        ar: L[i].ar + m.prefix + m.suffix,
        tr: L[i].s + m.sound,
        fr: L[i].n + " + " + m.n,
        diff: 1
      });
    }
    return out;
  }
  if (diff === 2){
    var all = genMaddLevel2("alif").concat(genMaddLevel2("waw"), genMaddLevel2("ya"));
    return shuffleArray(all).slice(0, 120);
  }
  if (diff === 3){
    var all3 = genMaddLevel3("alif").concat(genMaddLevel3("waw"), genMaddLevel3("ya"));
    return shuffleArray(all3).slice(0, 300);
  }
  return [];
}

/* ============================================================
   INTERFACE NOUR AL BAYAN
   ============================================================ */
var NourScreen = {

  /* ---------- ACCUEIL ---------- */
  home: function(){
    var h = '<button class="back" onclick="App.home()">← Accueil</button>' +
      '<h2>📖 Nour Al Bayan</h2>' +
      '<p class="muted" style="margin-bottom:14px">Méthode progressive — 7 niveaux</p>';

    var niveaux = [
      {n:1, title:"Lettres isolées", desc:"Les 28 lettres", ok:true},
      {n:2, title:"Voyelles courtes", desc:"Fatha · Kasra · Damma", ok:true},
      {n:3, title:"Madd (voyelles longues)", desc:"Alif · Waw · Ya", ok:true},
      {n:4, title:"Sukun", desc:"Lettre sans voyelle", ok:false},
      {n:5, title:"Tanween", desc:"Doublement des voyelles", ok:false},
      {n:6, title:"Shadda", desc:"Doublement de lettre", ok:false},
      {n:7, title:"Tajweed", desc:"Règles de récitation", ok:false}
    ];
    for (var i = 0; i < niveaux.length; i++){
      var N = niveaux[i];
      h += '<button class="lesson-item' + (N.ok ? '' : ' locked') + '" ' +
        (N.ok ? 'onclick="NourScreen.level(' + N.n + ')"' : 'disabled') + '>' +
        '<div class="num">' + N.n + '</div>' +
        '<div><div class="title">' + N.title + '</div>' +
        '<div class="desc">' + N.desc + (N.ok ? '' : ' · 🔒 bientôt') + '</div></div>' +
      '</button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  /* ---------- AIGUILLAGE NIVEAU ---------- */
  level: function(n){
    if (n === 1) return this.level1();
    if (n === 2) return this.level2();
    if (n === 3) return this.level3();
    document.getElementById('app').innerHTML =
      '<div class="empty"><div class="big">🔒</div><h2>Bientôt disponible</h2>' +
      '<button class="btn" onclick="NourScreen.home()">Retour</button></div>';
  },

  /* ---------- NIVEAU 1 : 28 lettres ---------- */
  level1: function(){
    var h = '<button class="back" onclick="NourScreen.home()">← Nour Al Bayan</button>' +
      '<h2>Niveau 1 — Les 28 lettres</h2>' +
      '<p class="muted" style="margin-bottom:14px">👆 Touche une lettre pour voir les formes + audio</p>' +
      '<div class="grid-4">';
    for (var i = 0; i < L.length; i++){
      h += '<button class="tile" onclick="NourScreen.letter(' + i + ')">' +
        '<span class="ar">' + L[i].ar + '</span>' +
        '<span class="name">' + L[i].n + '</span></button>';
    }
    h += '</div>' +
      '<button class="btn" style="margin-top:16px" onclick="NourScreen.exercises(1,\'fatha\',1)">📝 Exercices (' + L.length + ')</button>';
    document.getElementById('app').innerHTML = h;
  },

  letter: function(i){
    var l = L[i];
    if (!l) return;
    var h = '<button class="back" onclick="NourScreen.level1()">← Niveau 1</button>' +
      '<div class="hero">' +
        '<div class="big ar">' + l.ar + '</div>' +
        '<div class="name">' + l.n + '</div>' +
        '<div class="translit">son [ ' + l.s + ' ]</div>' +
        '<button onclick="speak(\'' + esc(l.ar) + '\')" style="background:rgba(255,255,255,.25);border:none;color:#fff;margin-top:14px;padding:10px 22px;border-radius:30px;font-weight:700;cursor:pointer;font-family:inherit;font-size:15px">🔊 Écouter</button>' +
      '</div>' +
      '<div class="card"><h3>Les 4 formes</h3>' +
        '<div class="grid-4" style="margin-top:10px">' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.iso + '</span><span class="name">Isolée</span></div>' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.ini + '</span><span class="name">Début</span></div>' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.med + '</span><span class="name">Milieu</span></div>' +
          '<div class="tile" style="cursor:default"><span class="ar">' + l.fin + '</span><span class="name">Fin</span></div>' +
        '</div>' +
      '</div>' +
      (isAlif(l) ? '' :
      '<div class="card"><h3>Avec les 3 voyelles</h3>' +
        '<div class="grid-3" style="margin-top:10px">' +
          '<div class="tile" style="cursor:pointer" onclick="speak(\'' + esc(l.ar + "َ") + '\')"><span class="ar">' + l.ar + 'َ</span><span class="name">' + l.s + 'a</span></div>' +
          '<div class="tile" style="cursor:pointer" onclick="speak(\'' + esc(l.ar + "ِ") + '\')"><span class="ar">' + l.ar + 'ِ</span><span class="name">' + l.s + 'i</span></div>' +
          '<div class="tile" style="cursor:pointer" onclick="speak(\'' + esc(l.ar + "ُ") + '\')"><span class="ar">' + l.ar + 'ُ</span><span class="name">' + l.s + 'ou</span></div>' +
        '</div>' +
      '</div>') +
      '<div style="display:flex;gap:10px">' +
        (i > 0 ? '<button class="btn secondary" onclick="NourScreen.letter(' + (i-1) + ')">←</button>' : '') +
        (i < L.length-1 ? '<button class="btn" onclick="NourScreen.letter(' + (i+1) + ')">→</button>' : '') +
      '</div>';
    document.getElementById('app').innerHTML = h;
  },

  /* ---------- NIVEAU 2 : Voyelles courtes ---------- */
  level2: function(){
    var h = '<button class="back" onclick="NourScreen.home()">← Nour Al Bayan</button>' +
      '<h2>Niveau 2 — Voyelles courtes</h2>' +
      '<p class="muted" style="margin-bottom:14px">Chaque voyelle a 3 niveaux d\'exercices</p>';
    var subs = [
      {k:"fatha", n:"Fatha ( َ )", desc:"Son A court", icon:"َ", color:"#e74c3c"},
      {k:"kasra", n:"Kasra ( ِ )", desc:"Son I court", icon:"ِ", color:"#3498db"},
      {k:"damma", n:"Damma ( ُ )", desc:"Son OU court", icon:"ُ", color:"#27ae60"},
      {k:"recap", n:"Récapitulatif", desc:"Les 3 mélangées", icon:"★", color:"#8e44ad"}
    ];
    for (var i = 0; i < subs.length; i++){
      var S = subs[i];
      h += '<button class="lesson-item" onclick="NourScreen.subVowel(\'' + S.k + '\')">' +
        '<div class="num" style="background:' + S.color + '">' + S.icon + '</div>' +
        '<div><div class="title">' + S.n + '</div>' +
        '<div class="desc">' + S.desc + ' · 3 niveaux d\'exercices</div></div>' +
      '</button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  subVowel: function(k){
    var titles = {fatha:"Fatha ( َ )", kasra:"Kasra ( ِ )", damma:"Damma ( ُ )", recap:"Récapitulatif"};
    var title = titles[k] || "Voyelles";
    var h = '<button class="back" onclick="NourScreen.level2()">← Niveau 2</button>' +
      '<h2>' + title + '</h2>' +
      '<p class="muted" style="margin-bottom:16px">Progression recommandée : 1 → 2 → 3</p>';
    var diffs = [
      {n:1, title:"Exercices Niveau 1", desc:"1 lettre + sa voyelle", count:L.length, color:"#27ae60"},
      {n:2, title:"Exercices Niveau 2", desc:"2 à 4 lettres combinées", count:120, color:"#f39c12"},
      {n:3, title:"Exercices Niveau 3", desc:"Mots entiers + phrases", count:300, color:"#c0392b"}
    ];
    for (var i = 0; i < diffs.length; i++){
      var D = diffs[i];
      h += '<button class="lesson-item" onclick="NourScreen.exercises(2,\'' + k + '\',' + D.n + ')">' +
        '<div class="num" style="background:' + D.color + '">' + D.n + '</div>' +
        '<div><div class="title">' + D.title + '</div>' +
        '<div class="desc">' + D.desc + ' · ' + D.count + ' exercices</div></div>' +
      '</button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  /* ---------- NIVEAU 3 : Madd ---------- */
  level3: function(){
    var h = '<button class="back" onclick="NourScreen.home()">← Nour Al Bayan</button>' +
      '<h2>Niveau 3 — Madd</h2>' +
      '<p class="muted" style="margin-bottom:14px">Prolongation après Fatha (ا) · Damma (و) · Kasra (ي)</p>';
    var subs = [
      {k:"alif", n:"Madd Alif ( ا )", desc:"Son ā long", icon:"ا", color:"#e74c3c"},
      {k:"waw",  n:"Madd Waw ( و )",  desc:"Son ū long", icon:"و", color:"#8e44ad"},
      {k:"ya",   n:"Madd Ya ( ي )",   desc:"Son ī long", icon:"ي", color:"#2980b9"},
      {k:"recap",n:"Récapitulatif",   desc:"Les 3 Madd mélangés", icon:"★", color:"#16a085"}
    ];
    for (var i = 0; i < subs.length; i++){
      var S = subs[i];
      h += '<button class="lesson-item" onclick="NourScreen.subMadd(\'' + S.k + '\')">' +
        '<div class="num" style="background:' + S.color + ';font-family:\'Traditional Arabic\',serif;font-size:22px">' + S.icon + '</div>' +
        '<div><div class="title">' + S.n + '</div>' +
        '<div class="desc">' + S.desc + ' · 3 niveaux d\'exercices</div></div>' +
      '</button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  subMadd: function(k){
    var titles = {alif:"Madd Alif", waw:"Madd Waw", ya:"Madd Ya", recap:"Récap Madd"};
    var title = titles[k] || "Madd";
    var h = '<button class="back" onclick="NourScreen.level3()">← Niveau 3</button>' +
      '<h2>' + title + '</h2>' +
      '<p class="muted" style="margin-bottom:16px">Progression recommandée : 1 → 2 → 3</p>';
    var diffs = [
      {n:1, title:"Exercices Niveau 1", desc:"1 lettre + sa Madd", count:L.length - 1, color:"#27ae60"},
      {n:2, title:"Exercices Niveau 2", desc:"Combinaisons de lettres", count:120, color:"#f39c12"},
      {n:3, title:"Exercices Niveau 3", desc:"Mots entiers avec Madd", count:300, color:"#c0392b"}
    ];
    for (var i = 0; i < diffs.length; i++){
      var D = diffs[i];
      h += '<button class="lesson-item" onclick="NourScreen.exercises(3,\'' + k + '\',' + D.n + ')">' +
        '<div class="num" style="background:' + D.color + '">' + D.n + '</div>' +
        '<div><div class="title">' + D.title + '</div>' +
        '<div class="desc">' + D.desc + ' · ' + D.count + ' exercices</div></div>' +
      '</button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  /* ---------- SESSION D'EXERCICES ---------- */
  session: null,

  exercises: function(level, subKey, diff){
    var list;
    if (level === 1){
      list = genLevel1("fatha");
    } else if (level === 2){
      if (subKey === "recap"){
        list = genRecapVowels(diff);
      } else {
        if (diff === 1) list = genLevel1(subKey);
        else if (diff === 2) list = genLevel2(subKey);
        else list = genLevel3(subKey);
      }
    } else if (level === 3){
      if (subKey === "recap"){
        list = genRecapMadd(diff);
      } else {
        if (diff === 1) list = genMaddLevel1(subKey);
        else if (diff === 2) list = genMaddLevel2(subKey);
        else list = genMaddLevel3(subKey);
      }
    }

    if (!list || !list.length){
      document.getElementById('app').innerHTML =
        '<div class="empty"><div class="big">⚠️</div><h2>Aucun exercice</h2>' +
        '<button class="btn" onclick="NourScreen.home()">Retour</button></div>';
      return;
    }

    var subTitle;
    if (level === 1) subTitle = "Lettres";
    else if (level === 2) subTitle = (subKey === "recap" ? "Récap voyelles" : VOWELS[subKey].n);
    else subTitle = (subKey === "recap" ? "Récap Madd" : MADD[subKey].n);

    this.session = {
      list: list,
      idx: 0,
      correct: 0,
      title: subTitle + " · Niv." + diff
    };
    this.render();
  },

  render: function(){
    var s = this.session;
    if (!s || s.idx >= s.list.length) return this.end();
    var ex = s.list[s.idx];
    var p = Math.round((s.idx / s.list.length) * 100);
    var h = '<button class="back" onclick="NourScreen.home()">← Quitter</button>' +
      '<div class="counter">' + s.title + ' · ' + (s.idx + 1) + ' / ' + s.list.length + '</div>' +
      '<div class="progress"><div class="progress-bar" style="width:' + p + '%"></div></div>' +
      '<div class="flashcard" onclick="speak(\'' + esc(ex.ar) + '\')" style="min-height:280px">' +
        '<button class="speak" onclick="event.stopPropagation();speak(\'' + esc(ex.ar) + '\')">🔊</button>' +
        '<div class="word ar" style="font-size:64px">' + ex.ar + '</div>' +
        (ex.fr ? '<div class="translation">' + ex.fr + '</div>' : '') +
        (ex.tr ? '<div class="translit">' + ex.tr + '</div>' : '') +
        '<div class="hint">👆 Touche pour écouter</div>' +
      '</div>' +
      '<div class="answers">' +
        '<button class="answer-btn a-again" onclick="NourScreen.ans(0)">❌ À revoir</button>' +
        '<button class="answer-btn a-good" onclick="NourScreen.ans(1)">✅ Je sais</button>' +
      '</div>';
    document.getElementById('app').innerHTML = h;
    /* Lecture auto à la première apparition seulement */
    if (!ex.played){
      ex.played = true;
      setTimeout(function(){ speak(ex.ar); }, 250);
    }
  },

  ans: function(ok){
    if (ok) this.session.correct++;
    this.session.idx++;
    this.render();
  },

  end: function(){
    var s = this.session;
    var acc = s.list.length ? Math.round((s.correct / s.list.length) * 100) : 0;
    document.getElementById('app').innerHTML =
      '<div class="empty" style="padding-top:60px"><div class="big">🎉</div>' +
      '<h2>Session terminée</h2>' +
      '<div class="stat-grid" style="margin-top:24px">' +
        '<div class="stat"><div class="num">' + s.list.length + '</div><div class="lbl">Exercices</div></div>' +
        '<div class="stat"><div class="num">' + acc + '%</div><div class="lbl">Réussite</div></div>' +
      '</div>' +
      '<button class="btn" style="margin-bottom:10px" onclick="NourScreen.home()">Retour Nour</button>' +
      '<button class="btn secondary" onclick="App.home()">Accueil</button></div>';
  }
};

/* ---------- EXPOSITION GLOBALE (uniquement NourScreen) ---------- */
window.NourScreen = NourScreen;

})();