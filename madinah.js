/* ============================================================
   MADINAH — Tomes de Médine v3.2 (Partie 1/2)
   ============================================================ */
(function(){
"use strict";

function esc(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

var TOMES = [
  {
    id:"t1", num:1, title:"Tome 1",
    subtitle:"Bases de la lecture et de la grammaire",
    desc:"23 leçons · Du débutant à la phrase simple",
    active:true, pdf:"COURS D'ARABE TOME 1 DE MEDINE.pdf",
    lessons:[

    /* ===== LEÇON 1 ===== */
    {id:"t1l1", num:1, title:"Leçon 1", desc:"هَذَا (Ceci) · Noms au singulier",
     active:true, audio:"assets/audio/madinah/tome1/L01.mp3", video:"Tome 1 - Leçon 1",
     text:["هَذَا بَيْتٌ","هَذَا مَسْجِدٌ","هَذَا بَابٌ","هَذَا كِتَابٌ","هَذَا قَلَمٌ","هَذَا مِفْتَاحٌ","هَذَا مَكْتَبٌ","هَذَا سَرِيرٌ","هَذَا كُرْسِيٌّ"],
     vocab:[
       {ar:"هَذَا",fr:"Ceci (masc. singulier)",tr:"hādhā"},
       {ar:"بَيْتٌ",fr:"Une maison",tr:"bayt"},
       {ar:"مَسْجِدٌ",fr:"Une mosquée",tr:"masjid"},
       {ar:"بَابٌ",fr:"Une porte",tr:"bāb"},
       {ar:"كِتَابٌ",fr:"Un livre",tr:"kitāb"},
       {ar:"قَلَمٌ",fr:"Un stylo",tr:"qalam"},
       {ar:"مِفْتَاحٌ",fr:"Une clé",tr:"miftāḥ"},
       {ar:"مَكْتَبٌ",fr:"Un bureau",tr:"maktab"},
       {ar:"سَرِيرٌ",fr:"Un lit",tr:"sarīr"},
       {ar:"كُرْسِيٌّ",fr:"Une chaise",tr:"kursī"},
       {ar:"مَا؟",fr:"Quoi ?",tr:"mā?"},
       {ar:"أَ؟",fr:"Est-ce que... ?",tr:"a?"},
       {ar:"نَعَمْ",fr:"Oui",tr:"naʿam"}
     ],
     grammar:{title:"La phrase nominale (الْجُمْلَة الاِسْمِيَّة)",
       rule:"En arabe, une phrase simple se compose d'un sujet (مُبْتَدَأ) et d'un attribut (خَبَر), sans verbe « être ».",
       examples:["هَذَا كِتَابٌ = C'est un livre","هَذَا مَسْجِدٌ = C'est une mosquée","هَذَا قَلَمٌ = C'est un stylo"]},
     dialogue:[
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا بَيْتٌ.",fr:"C'est une maison."},
       {sp:"A",ar:"أَهَذَا مَسْجِدٌ؟",fr:"Est-ce que c'est une mosquée ?"},
       {sp:"B",ar:"نَعَمْ، هَذَا مَسْجِدٌ.",fr:"Oui, c'est une mosquée."},
       {sp:"A",ar:"أَهَذَا كِتَابٌ؟",fr:"Est-ce que c'est un livre ?"},
       {sp:"B",ar:"لَا، هَذَا قَلَمٌ.",fr:"Non, c'est un stylo."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire هَذَا ?",options:["Ceci (masc.)","Cela (fém.)","Où ?","Quoi ?"],correct:0},
       {type:"qcm",q:"Comment dit-on « une maison » ?",options:["بَيْتٌ","مَسْجِدٌ","بَابٌ","كِتَابٌ"],correct:0},
       {type:"qcm",q:"Que veut dire قَلَمٌ ?",options:["Un stylo","Un livre","Une clé","Un lit"],correct:0},
       {type:"qcm",q:"Comment dit-on « une clé » ?",options:["مِفْتَاحٌ","مَكْتَبٌ","كُرْسِيٌّ","سَرِيرٌ"],correct:0},
       {type:"tf",ar:"هَذَا بَيْتٌ",q:"Signifie « Ceci est une maison »",correct:true},
       {type:"tf",ar:"هَذَا مَسْجِدٌ",q:"Signifie « Ceci est une école »",correct:false,explain:"مَسْجِدٌ = mosquée."},
       {type:"fill",sentence:"___ بَيْتٌ",options:["هَذَا","هَذِهِ","ذَلِكَ","تِلْكَ"],correct:0},
       {type:"type",q:"Écris « une maison » :",answer:"بَيْتٌ",hint:"3 lettres : ب ي ت"},
       {type:"type",q:"Écris « un livre » :",answer:"كِتَابٌ",hint:"4 lettres : ك ت ا ب"},
       {type:"order",q:"Reconstitue :",words:["بَيْتٌ","هَذَا"],answer:"هَذَا بَيْتٌ"},
       {type:"audio",audioText:"هَذَا بَيْتٌ",options:["هَذَا بَيْتٌ","هَذَا مَسْجِدٌ","هَذَا بَابٌ","هَذَا كِتَابٌ"],correct:0}
     ]},

    /* ===== LEÇON 2 ===== */
    {id:"t1l2", num:2, title:"Leçon 2", desc:"ذَلِكَ (Cela) · Le lointain",
     active:true, audio:"assets/audio/madinah/tome1/L02.mp3", video:"Tome 1 - Leçon 2",
     text:["ذَلِكَ بَيْتٌ","ذَلِكَ مَسْجِدٌ","ذَلِكَ بَابٌ","ذَلِكَ كِتَابٌ","ذَلِكَ قَلَمٌ"],
     vocab:[
       {ar:"ذَلِكَ",fr:"Cela (lointain)",tr:"dhālika"},
       {ar:"إِمَامٌ",fr:"Imam, guide",tr:"imām"},
       {ar:"سُكَّرٌ",fr:"Sucre",tr:"sukkar"},
       {ar:"حَجَرٌ",fr:"Pierre",tr:"ḥajar"},
       {ar:"لَبَنٌ",fr:"Lait",tr:"laban"},
       {ar:"وَ",fr:"Et",tr:"wa"},
       {ar:"أَوْ",fr:"Ou",tr:"aw"}
     ],
     grammar:{title:"Le démonstratif du lointain (ذَلِكَ)",
       rule:"Pour désigner un objet éloigné : ذَلِكَ (masc.) et تِلْكَ (fém.).",
       examples:["ذَلِكَ كِتَابٌ","تِلْكَ مَدْرَسَةٌ"]},
     dialogue:[
       {sp:"A",ar:"مَا ذَلِكَ؟",fr:"Qu'est-ce que cela ?"},
       {sp:"B",ar:"ذَلِكَ كِتَابٌ.",fr:"C'est un livre."},
       {sp:"A",ar:"أَذَلِكَ مَسْجِدٌ؟",fr:"Est-ce une mosquée ?"},
       {sp:"B",ar:"نَعَمْ، ذَلِكَ مَسْجِدٌ.",fr:"Oui, c'est une mosquée."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire ذَلِكَ ?",options:["Cela (lointain)","Ceci (proche)","Où ?","Qui ?"],correct:0},
       {type:"qcm",q:"Que veut dire لَبَنٌ ?",options:["Lait","Sucre","Pierre","Imam"],correct:0},
       {type:"qcm",q:"Comment dit-on « et » ?",options:["وَ","أَوْ","مَا","ذَلِكَ"],correct:0},
       {type:"tf",ar:"ذَلِكَ كِتَابٌ",q:"Signifie « Cela est un livre »",correct:true},
       {type:"fill",sentence:"___ بَيْتٌ",options:["ذَلِكَ","هَذَا","تِلْكَ","هَذِهِ"],correct:0},
       {type:"type",q:"Écris « cela » :",answer:"ذَلِكَ",hint:"3 lettres"},
       {type:"type",q:"Écris « du lait » :",answer:"لَبَنٌ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["كِتَابٌ","ذَلِكَ"],answer:"ذَلِكَ كِتَابٌ"},
       {type:"audio",audioText:"ذَلِكَ بَيْتٌ",options:["ذَلِكَ بَيْتٌ","ذَلِكَ مَسْجِدٌ","هَذَا بَيْتٌ","ذَلِكَ كِتَابٌ"],correct:0}
     ]},

    /* ===== LEÇON 3 ===== */
    {id:"t1l3", num:3, title:"Leçon 3", desc:"L'article défini ال",
     active:true, audio:"assets/audio/madinah/tome1/L03.mp3", video:"Tome 1 - Leçon 3",
     text:["الْبَيْتُ جَدِيدٌ","الْمَسْجِدُ كَبِيرٌ","الْبَابُ مَفْتُوحٌ","الْكِتَابُ جَدِيدٌ","الْقَلَمُ صَغِيرٌ"],
     vocab:[
       {ar:"ثَقِيلٌ",fr:"Lourd",tr:"thaqīl"},
       {ar:"خَفِيفٌ",fr:"Léger",tr:"khafīf"},
       {ar:"نَظِيفٌ",fr:"Propre",tr:"naẓīf"},
       {ar:"وَسِخٌ",fr:"Sale",tr:"wasikh"},
       {ar:"فَقِيرٌ",fr:"Pauvre",tr:"faqīr"},
       {ar:"غَنِيٌّ",fr:"Riche",tr:"ghaniyy"},
       {ar:"حُلْوٌ",fr:"Doux",tr:"ḥulw"},
       {ar:"مَرِيضٌ",fr:"Malade",tr:"marīḍ"},
       {ar:"كَبِيرٌ",fr:"Grand",tr:"kabīr"},
       {ar:"صَغِيرٌ",fr:"Petit",tr:"ṣaghīr"},
       {ar:"جَدِيدٌ",fr:"Nouveau",tr:"jadīd"},
       {ar:"قَدِيمٌ",fr:"Vieux",tr:"qadīm"},
       {ar:"مَفْتُوحٌ",fr:"Ouvert",tr:"maftūḥ"},
       {ar:"مُغْلَقٌ",fr:"Fermé",tr:"mughlaq"}
     ],
     grammar:{title:"L'article défini (ال)",
       rule:"L'article ال rend le nom défini.",
       examples:["بَيْتٌ → الْبَيْتُ","شَمْسٌ → الشَّمْسُ","قَمَرٌ → الْقَمَرُ"]},
     dialogue:[
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce ?"},
       {sp:"B",ar:"هَذَا الْبَيْتُ.",fr:"C'est la maison."},
       {sp:"A",ar:"أَهُوَ جَدِيدٌ؟",fr:"Est-elle nouvelle ?"},
       {sp:"B",ar:"نَعَمْ، هُوَ جَدِيدٌ.",fr:"Oui."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire ثَقِيلٌ ?",options:["Lourd","Léger","Propre","Sale"],correct:0},
       {type:"qcm",q:"Comment dit-on « propre » ?",options:["نَظِيفٌ","وَسِخٌ","فَقِيرٌ","غَنِيٌّ"],correct:0},
       {type:"qcm",q:"Quel est l'article défini ?",options:["ال","وَ","مَا","هَذَا"],correct:0},
       {type:"tf",ar:"الْبَيْتُ جَدِيدٌ",q:"Signifie « La maison est nouvelle »",correct:true},
       {type:"tf",ar:"الْبَابُ مَفْتُوحٌ",q:"Signifie « La porte est fermée »",correct:false,explain:"مَفْتُوحٌ = ouverte."},
       {type:"fill",sentence:"___ جَدِيدٌ",options:["الْبَيْتُ","بَيْتٌ","بَيْتُ","بَيْتًا"],correct:0},
       {type:"type",q:"Écris « lourd » :",answer:"ثَقِيلٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « nouveau » :",answer:"جَدِيدٌ",hint:"4 lettres"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدٌ","الْبَيْتُ"],answer:"الْبَيْتُ جَدِيدٌ"},
       {type:"audio",audioText:"الْبَيْتُ جَدِيدٌ",options:["الْبَيْتُ جَدِيدٌ","الْبَيْتُ قَدِيمٌ","الْبَابُ جَدِيدٌ","الْمَسْجِدُ جَدِيدٌ"],correct:0}
     ]},

    /* ===== LEÇON 4 ===== */
    {id:"t1l4", num:4, title:"Leçon 4", desc:"Prépositions · فِي / عَلَى",
     active:true, audio:"assets/audio/madinah/tome1/L04.mp3", video:"Tome 1 - Leçon 4",
     text:["مُحَمَّدٌ فِي الْغُرْفَةِ","الْكِتَابُ عَلَى الْمَكْتَبِ","الْمِفْتَاحُ عَلَى السَّرِيرِ","السَّمَاءُ فَوْقَ الْبَيْتِ"],
     vocab:[
       {ar:"مِرْحَاضٌ",fr:"Toilettes",tr:"mirḥāḍ"},
       {ar:"حَمَّامٌ",fr:"Salle de bain",tr:"ḥammām"},
       {ar:"سَمَاءٌ",fr:"Ciel",tr:"samāʾ"},
       {ar:"غُرْفَةٌ",fr:"Chambre",tr:"ghurfa"},
       {ar:"مَطْبَخٌ",fr:"Cuisine",tr:"maṭbakh"},
       {ar:"سَاعَةٌ",fr:"Montre / Heure",tr:"sāʿa"},
       {ar:"مَدْرَسَةٌ",fr:"École",tr:"madrasa"},
       {ar:"جَامِعَةٌ",fr:"Université",tr:"jāmiʿa"},
       {ar:"فِي",fr:"Dans",tr:"fī"},
       {ar:"عَلَى",fr:"Sur",tr:"ʿalā"},
       {ar:"أَيْنَ",fr:"Où ?",tr:"ayna"},
       {ar:"حَقِيبَةٌ",fr:"Sac",tr:"ḥaqība"}
     ],
     grammar:{title:"Les prépositions فِي / عَلَى",
       rule:"Suivies d'un nom au génitif (kasra finale).",
       examples:["فِي الْغُرْفَةِ","عَلَى الْمَكْتَبِ","مِنَ الْمَدْرَسَةِ"]},
     dialogue:[
       {sp:"A",ar:"أَيْنَ مُحَمَّدٌ؟",fr:"Où est Muhammad ?"},
       {sp:"B",ar:"هُوَ فِي الْغُرْفَةِ.",fr:"Il est dans la chambre."},
       {sp:"A",ar:"أَيْنَ الْكِتَابُ؟",fr:"Où est le livre ?"},
       {sp:"B",ar:"هُوَ عَلَى الْمَكْتَبِ.",fr:"Il est sur le bureau."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire فِي ?",options:["Dans","Sur","De","Vers"],correct:0},
       {type:"qcm",q:"Que veut dire عَلَى ?",options:["Sur","Dans","Sous","Devant"],correct:0},
       {type:"qcm",q:"Comment dit-on « où ? »",options:["أَيْنَ","مَا","مَنْ","كَيْفَ"],correct:0},
       {type:"tf",ar:"الْكِتَابُ عَلَى الْمَكْتَبِ",q:"Signifie « Le livre est sur le bureau »",correct:true},
       {type:"tf",ar:"الْقَلَمُ فِي الْحَقِيبَةِ",q:"Signifie « Le stylo est sur le sac »",correct:false,explain:"فِي = dans."},
       {type:"fill",sentence:"الْكِتَابُ ___ الْمَكْتَبِ",options:["عَلَى","فِي","مِنْ","إِلَى"],correct:0},
       {type:"type",q:"Écris « dans » :",answer:"فِي",hint:"2 lettres"},
       {type:"type",q:"Écris « chambre » :",answer:"غُرْفَةٌ",hint:"4 lettres"},
       {type:"order",q:"Reconstitue :",words:["الْمَكْتَبِ","عَلَى","الْكِتَابُ"],answer:"الْكِتَابُ عَلَى الْمَكْتَبِ"},
       {type:"audio",audioText:"الْكِتَابُ عَلَى الْمَكْتَبِ",options:["الْكِتَابُ عَلَى الْمَكْتَبِ","الْكِتَابُ فِي الْمَكْتَبِ","الْقَلَمُ عَلَى الْمَكْتَبِ","الْكِتَابُ عَلَى السَّرِيرِ"],correct:0}
     ]},

    /* ===== LEÇON 5 ===== */
    {id:"t1l5", num:5, title:"Leçon 5", desc:"Possession (ي) · Vocatif (يَا)",
     active:true, audio:"assets/audio/madinah/tome1/L05.mp3", video:"Tome 1 - Leçon 5",
     text:["يَا عَلِيُّ، أَيْنَ كِتَابِي؟","هَذَا كِتَابِي","هَذَا بَيْتُكَ","هَذَا بَيْتُهُ","هَذَا بَيْتُهَا"],
     vocab:[
       {ar:"يَا",fr:"Ô (vocatif)",tr:"yā"},
       {ar:"الْمُدَرِّسُ",fr:"Le professeur",tr:"al-mudarris"},
       {ar:"الطَّالِبُ",fr:"L'étudiant",tr:"aṭ-ṭālib"},
       {ar:"صَدِيقٌ",fr:"Ami",tr:"ṣadīq"},
       {ar:"كِتَابِي",fr:"Mon livre",tr:"kitābī"},
       {ar:"بَيْتُكَ",fr:"Ta maison",tr:"baytuka"},
       {ar:"بَيْتُهُ",fr:"Sa maison (lui)",tr:"baytuhu"},
       {ar:"بَيْتُهَا",fr:"Sa maison (elle)",tr:"baytuhā"}
     ],
     grammar:{title:"Les suffixes possessifs",
       rule:"Suffixes : ي (mon), كَ (ton), هُ (son), هَا (sa).",
       examples:["كِتَابٌ → كِتَابِي","بَيْتٌ → بَيْتُكَ","قَلَمٌ → قَلَمُهُ"]},
     dialogue:[
       {sp:"A",ar:"يَا عَلِيُّ، أَيْنَ كِتَابِي؟",fr:"O Ali, où est mon livre ?"},
       {sp:"B",ar:"هُوَ عَلَى الْمَكْتَبِ.",fr:"Il est sur le bureau."},
       {sp:"A",ar:"شُكْرًا يَا صَدِيقِي.",fr:"Merci, mon ami."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire يَا ?",options:["Ô (vocatif)","Et","Où","Quoi"],correct:0},
       {type:"qcm",q:"Comment dit-on « mon livre » ?",options:["كِتَابِي","كِتَابُكَ","كِتَابُهُ","كِتَابُهَا"],correct:0},
       {type:"qcm",q:"Que veut dire بَيْتُهُ ?",options:["Sa maison (lui)","Ma maison","Ta maison","Sa maison (elle)"],correct:0},
       {type:"tf",q:"Le suffixe ـي signifie « mon »",correct:true},
       {type:"tf",q:"Le suffixe ـكَ signifie « son » (à lui)",correct:false,explain:"ـكَ = ton."},
       {type:"fill",sentence:"هَذَا كِتَابُ ___",options:["ـهُ","ـي","ـهَا","ـكَ"],correct:0},
       {type:"type",q:"Écris « mon livre » :",answer:"كِتَابِي",hint:"ك ت ا ب + ي"},
       {type:"type",q:"Écris « ta maison » :",answer:"بَيْتُكَ",hint:"ب ي ت + ك"},
       {type:"order",q:"Reconstitue :",words:["كِتَابِي","هَذَا"],answer:"هَذَا كِتَابِي"},
       {type:"audio",audioText:"هَذَا كِتَابِي",options:["هَذَا كِتَابِي","هَذَا كِتَابُكَ","هَذَا كِتَابُهُ","هَذَا كِتَابُهَا"],correct:0}
     ]},

    /* ===== LEÇON 6 ===== */
    {id:"t1l6", num:6, title:"Leçon 6", desc:"Corps · Le pluriel",
     active:true, audio:"assets/audio/madinah/tome1/L06.mp3", video:"Tome 1 - Leçon 6",
     text:["هَذَا رَأْسِي","هَذَا أَنْفِي","هَذِهِ أُذُنِي","هَذِهِ يَدِي","هَذِهِ رِجْلِي"],
     vocab:[
       {ar:"أُذُنٌ",fr:"Oreille",tr:"udhun"},
       {ar:"أَنْفٌ",fr:"Nez",tr:"anf"},
       {ar:"مُسْلِمٌ",fr:"Musulman",tr:"muslim"},
       {ar:"أُخْتٌ",fr:"Sœur",tr:"ukht"},
       {ar:"شَايٌ",fr:"Thé",tr:"shāy"},
       {ar:"قَهْوَةٌ",fr:"Café",tr:"qahwa"},
       {ar:"رَأْسٌ",fr:"Tête",tr:"raʾs"},
       {ar:"وَجْهٌ",fr:"Visage",tr:"wajh"},
       {ar:"يَدٌ",fr:"Main",tr:"yad"},
       {ar:"رِجْلٌ",fr:"Pied",tr:"rijl"},
       {ar:"أَخٌ",fr:"Frère",tr:"akh"},
       {ar:"أَيْضًا",fr:"Aussi",tr:"ayḍan"},
       {ar:"جِدًّا",fr:"Très",tr:"jiddan"}
     ],
     grammar:{title:"Le pluriel régulier",
       rule:"Pluriel masculin : ونَ / ينَ. Féminin : اتٌ.",
       examples:["مُسْلِمٌ → مُسْلِمُونَ","طَالِبَةٌ → طَالِبَاتٌ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذَا؟",fr:"Qui est-ce ?"},
       {sp:"B",ar:"هَذَا أَخِي.",fr:"C'est mon frère."},
       {sp:"A",ar:"وَمَنْ هَذِهِ؟",fr:"Et qui est-ce ?"},
       {sp:"B",ar:"هَذِهِ أُخْتِي.",fr:"C'est ma sœur."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أُذُنٌ ?",options:["Oreille","Nez","Œil","Bouche"],correct:0},
       {type:"qcm",q:"Comment dit-on « sœur » ?",options:["أُخْتٌ","أَخٌ","أُمٌّ","بِنْتٌ"],correct:0},
       {type:"qcm",q:"Que veut dire رَأْسٌ ?",options:["Tête","Visage","Main","Pied"],correct:0},
       {type:"tf",ar:"هَذَا أَخِي",q:"Signifie « C'est mon frère »",correct:true},
       {type:"tf",ar:"هَذِهِ أُخْتِي",q:"Signifie « C'est mon frère »",correct:false,explain:"أُخْتٌ = sœur."},
       {type:"fill",sentence:"___ أَخِي",options:["هَذَا","هَذِهِ","ذَلِكَ","تِلْكَ"],correct:0},
       {type:"type",q:"Écris « tête » :",answer:"رَأْسٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « main » :",answer:"يَدٌ",hint:"2 lettres"},
       {type:"order",q:"Reconstitue :",words:["أَخِي","هَذَا"],answer:"هَذَا أَخِي"},
       {type:"audio",audioText:"هَذَا أَخِي",options:["هَذَا أَخِي","هَذِهِ أُخْتِي","هَذَا أَبِي","هَذَا رَأْسِي"],correct:0}
     ]},

    /* ===== LEÇON 7 ===== */
    {id:"t1l7", num:7, title:"Leçon 7", desc:"Féminin · هَذِهِ",
     active:true, audio:"assets/audio/madinah/tome1/L07.mp3", video:"Tome 1 - Leçon 7",
     text:["هَذِهِ أُمِّي","هَذِهِ بِنْتِي","هَذِهِ مُدَرِّسَةٌ","هَذِهِ طَالِبَةٌ","هَذِهِ مُـمَرِّضَةٌ"],
     vocab:[
       {ar:"مُـمَرِّضَةٌ",fr:"Infirmière",tr:"mumarriḍa"},
       {ar:"دَجَاجَةٌ",fr:"Poule",tr:"dajāja"},
       {ar:"بَطَّةٌ",fr:"Canard",tr:"baṭṭa"},
       {ar:"بَيْضَةٌ",fr:"Œuf",tr:"bayḍa"},
       {ar:"دِيكٌ",fr:"Coq",tr:"dīk"},
       {ar:"جَمَلٌ",fr:"Chameau",tr:"jamal"},
       {ar:"نَاقَةٌ",fr:"Chamelle",tr:"nāqa"},
       {ar:"قِطٌّ",fr:"Chat",tr:"qiṭṭ"},
       {ar:"حَدِيقَةٌ",fr:"Jardin",tr:"ḥadīqa"},
       {ar:"فَمٌ",fr:"Bouche",tr:"fam"}
     ],
     grammar:{title:"Formation du féminin",
       rule:"Ajout de ة (ta marbouta) au nom masculin.",
       examples:["مُدَرِّسٌ → مُدَرِّسَةٌ","طَالِبٌ → طَالِبَةٌ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذِهِ؟",fr:"Qui est-ce ?"},
       {sp:"B",ar:"هَذِهِ أُمِّي.",fr:"C'est ma mère."},
       {sp:"A",ar:"وَمَنْ هَذَا؟",fr:"Et qui est-ce ?"},
       {sp:"B",ar:"هَذَا أَبِي.",fr:"C'est mon père."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مُـمَرِّضَةٌ ?",options:["Infirmière","Médecin","Professeure","Étudiante"],correct:0},
       {type:"qcm",q:"Comment dit-on « œuf » ?",options:["بَيْضَةٌ","دَجَاجَةٌ","بَطَّةٌ","حَدِيقَةٌ"],correct:0},
       {type:"qcm",q:"Quelle lettre ajoute-t-on pour le féminin ?",options:["ة","ه","ا","ي"],correct:0},
       {type:"tf",ar:"هَذِهِ أُمِّي",q:"Signifie « C'est ma mère »",correct:true},
       {type:"tf",q:"Le féminin de مُدَرِّسٌ est مُدَرِّسَةٌ",correct:true},
       {type:"fill",sentence:"___ أُمِّي",options:["هَذِهِ","هَذَا","ذَلِكَ","أُولَئِكَ"],correct:0},
       {type:"type",q:"Écris « une professeure » :",answer:"مُدَرِّسَةٌ",hint:"م د ر س + ة"},
       {type:"type",q:"Écris « une étudiante » :",answer:"طَالِبَةٌ",hint:"ط ا ل ب + ة"},
       {type:"order",q:"Reconstitue :",words:["أُمِّي","هَذِهِ"],answer:"هَذِهِ أُمِّي"},
       {type:"audio",audioText:"هَذِهِ أُمِّي",options:["هَذِهِ أُمِّي","هَذِهِ بِنْتِي","هَذِهِ أُخْتِي","هَذِهِ مُدَرِّسَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 8 ===== */
    {id:"t1l8", num:8, title:"Leçon 8", desc:"L'appartenance (لِ)",
     active:true, audio:"assets/audio/madinah/tome1/L08.mp3", video:"Tome 1 - Leçon 8",
     text:["لِمَنْ هَذَا الْكِتَابُ؟","هَذَا الْكِتَابُ لِمُحَمَّدٍ","هَذَا الْقَلَمُ لِعَلِيٍّ","هَذِهِ الْحَقِيبَةُ لِفَاطِمَةَ"],
     vocab:[
       {ar:"سِكِّينٌ",fr:"Couteau",tr:"sikkīn"},
       {ar:"مِلْعَقَةٌ",fr:"Cuillère",tr:"milʿaqa"},
       {ar:"الْمُمَرِّضَةُ",fr:"L'infirmière",tr:"al-mumarriḍa"},
       {ar:"الْمُؤَذِّنُ",fr:"Le muezzin",tr:"al-muʾadhdhin"},
       {ar:"لِمَنْ",fr:"À qui ?",tr:"liman"}
     ],
     grammar:{title:"La particule لِ",
       rule:"Signifie « pour / à ». Suivie d'un nom au génitif.",
       examples:["لِمَنْ هَذَا الْكِتَابُ؟","هَذَا الْكِتَابُ لِمُحَمَّدٍ"]},
     dialogue:[
       {sp:"A",ar:"لِمَنْ هَذَا الْكِتَابُ؟",fr:"À qui est ce livre ?"},
       {sp:"B",ar:"هَذَا الْكِتَابُ لِمُحَمَّدٍ.",fr:"Ce livre est à Muhammad."},
       {sp:"A",ar:"وَلِمَنْ هَذَا الْقَلَمُ؟",fr:"Et ce stylo ?"},
       {sp:"B",ar:"هَذَا الْقَلَمُ لِعَلِيٍّ.",fr:"Ce stylo est à Ali."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire لِمَنْ ؟",options:["À qui ?","Où ?","Quand ?","Quoi ?"],correct:0},
       {type:"qcm",q:"Comment dit-on « couteau » ?",options:["سِكِّينٌ","مِلْعَقَةٌ","قِدْرٌ","كُوبٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « pour moi » ?",options:["لِي","لَكَ","لَهُ","لَهَا"],correct:0},
       {type:"tf",ar:"هَذَا الْكِتَابُ لِمُحَمَّدٍ",q:"Signifie « Ce livre est à Muhammad »",correct:true},
       {type:"fill",sentence:"___ هَذَا الْكِتَابُ؟",options:["لِمَنْ","أَيْنَ","مَا","مَنْ"],correct:0},
       {type:"type",q:"Écris « pour moi » :",answer:"لِي",hint:"ل + ي"},
       {type:"type",q:"Écris « pour lui » :",answer:"لَهُ",hint:"ل + ه"},
       {type:"order",q:"Reconstitue :",words:["لِمُحَمَّدٍ","الْكِتَابُ","هَذَا"],answer:"هَذَا الْكِتَابُ لِمُحَمَّدٍ"},
       {type:"audio",audioText:"هَذَا الْكِتَابُ لِمُحَمَّدٍ",options:["هَذَا الْكِتَابُ لِمُحَمَّدٍ","هَذَا الْقَلَمُ لِمُحَمَّدٍ","هَذَا الْكِتَابُ لِعَلِيٍّ","هَذَا الْكِتَابُ لِي"],correct:0}
     ]},

    /* ===== LEÇON 9 ===== */
    {id:"t1l9", num:9, title:"Leçon 9", desc:"Les adjectifs (نعت)",
     active:true, audio:"assets/audio/madinah/tome1/L09.mp3", video:"Tome 1 - Leçon 9",
     text:["هَذَا كِتَابٌ جَدِيدٌ","هَذَا رَجُلٌ غَنِيٌّ","هَذِهِ بِنْتٌ صَغِيرَةٌ","اللُّغَةُ الْعَرَبِيَّةُ سَهْلَةٌ"],
     vocab:[
       {ar:"شَهِيرٌ",fr:"Célèbre",tr:"shahīr"},
       {ar:"صَعْبٌ",fr:"Difficile",tr:"ṣaʿb"},
       {ar:"فَاكِهَةٌ",fr:"Fruit",tr:"fākiha"},
       {ar:"عُصْفُورٌ",fr:"Moineau",tr:"ʿuṣfūr"},
       {ar:"لُغَةٌ",fr:"Langue",tr:"lugha"},
       {ar:"طَائِرٌ",fr:"Oiseau",tr:"ṭāʾir"},
       {ar:"لِمَاذَا",fr:"Pourquoi ?",tr:"limādhā"},
       {ar:"سَهْلٌ",fr:"Facile",tr:"sahl"},
       {ar:"مُجْتَهِدٌ",fr:"Travailleur",tr:"mujtahid"},
       {ar:"لَذِيذٌ",fr:"Délicieux",tr:"ladhīdh"}
     ],
     grammar:{title:"L'adjectif (نعت)",
       rule:"L'adjectif suit le nom et s'accorde (genre, nombre, cas, définition).",
       examples:["هَذَا كِتَابٌ جَدِيدٌ","الْبِنْتُ صَغِيرَةٌ"]},
     dialogue:[
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce ?"},
       {sp:"B",ar:"هَذَا عُصْفُورٌ صَغِيرٌ.",fr:"C'est un petit moineau."},
       {sp:"A",ar:"أَهُوَ جَمِيلٌ؟",fr:"Est-il beau ?"},
       {sp:"B",ar:"نَعَمْ، هُوَ جَمِيلٌ جِدًّا.",fr:"Oui, très beau."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire شَهِيرٌ ؟",options:["Célèbre","Inconnu","Grand","Petit"],correct:0},
       {type:"qcm",q:"Comment dit-on « difficile » ?",options:["صَعْبٌ","سَهْلٌ","جَمِيلٌ","قَبِيحٌ"],correct:0},
       {type:"qcm",q:"Où se place l'adjectif en arabe ?",options:["Après le nom","Avant le nom","N'importe où","Au début"],correct:0},
       {type:"tf",ar:"هَذَا كِتَابٌ جَدِيدٌ",q:"Signifie « C'est un nouveau livre »",correct:true},
       {type:"tf",q:"En arabe, l'adjectif vient AVANT le nom",correct:false,explain:"L'adjectif suit le nom."},
       {type:"fill",sentence:"هَذَا كِتَابٌ ___",options:["جَدِيدٌ","الْجَدِيدُ","جَدِيدَةٌ","جَدِيدَانِ"],correct:0},
       {type:"type",q:"Écris « célèbre » :",answer:"شَهِيرٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « facile » :",answer:"سَهْلٌ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدٌ","كِتَابٌ","هَذَا"],answer:"هَذَا كِتَابٌ جَدِيدٌ"},
       {type:"audio",audioText:"هَذَا كِتَابٌ جَدِيدٌ",options:["هَذَا كِتَابٌ جَدِيدٌ","هَذَا كِتَابٌ قَدِيمٌ","هَذَا قَلَمٌ جَدِيدٌ","هَذَا كِتَابٌ صَغِيرٌ"],correct:0}
     ]},

    /* ===== LEÇON 10 ===== */
    {id:"t1l10", num:10, title:"Leçon 10", desc:"Pronoms personnels",
     active:true, audio:"assets/audio/madinah/tome1/L10.mp3", video:"Tome 1 - Leçon 10",
     text:["أَنَا طَالِبٌ","أَنْتَ مُدَرِّسٌ","أَنْتِ طَالِبَةٌ","هُوَ رَجُلٌ","هِيَ امْرَأَةٌ","نَحْنُ طُلَّابٌ"],
     vocab:[
       {ar:"أَنَا",fr:"Je",tr:"anā"},
       {ar:"أَنْتَ",fr:"Tu (masc.)",tr:"anta"},
       {ar:"أَنْتِ",fr:"Tu (fém.)",tr:"anti"},
       {ar:"هُوَ",fr:"Il",tr:"huwa"},
       {ar:"هِيَ",fr:"Elle",tr:"hiya"},
       {ar:"نَحْنُ",fr:"Nous",tr:"naḥnu"},
       {ar:"أَنْتُمْ",fr:"Vous",tr:"antum"},
       {ar:"هُمْ",fr:"Ils",tr:"hum"},
       {ar:"الزَّمِيلُ",fr:"Collègue",tr:"az-zamīl"},
       {ar:"الزَّوْجُ",fr:"Mari",tr:"az-zawj"},
       {ar:"الْفَتَى",fr:"Jeune homme",tr:"al-fatā"},
       {ar:"الطِّفْلُ",fr:"Enfant",tr:"aṭ-ṭifl"}
     ],
     grammar:{title:"Les pronoms personnels isolés",
       rule:"أَنَا, أَنْتَ, أَنْتِ, هُوَ, هِيَ, نَحْنُ, أَنْتُمْ, هُمْ.",
       examples:["أَنَا طَالِبٌ","أَنْتَ مُدَرِّسٌ","هِيَ طَالِبَةٌ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ أَنْتَ؟",fr:"Qui es-tu ?"},
       {sp:"B",ar:"أَنَا طَالِبٌ.",fr:"Je suis étudiant."},
       {sp:"A",ar:"وَمَنْ هَذَا؟",fr:"Et qui est-ce ?"},
       {sp:"B",ar:"هَذَا زَمِيلِي.",fr:"C'est mon collègue."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَنَا ؟",options:["Je","Tu","Il","Elle"],correct:0},
       {type:"qcm",q:"Comment dit-on « elle » ?",options:["هِيَ","هُوَ","أَنْتِ","أَنَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « nous » ?",options:["نَحْنُ","أَنْتُمْ","هُمْ","أَنَا"],correct:0},
       {type:"tf",ar:"أَنَا طَالِبٌ",q:"Signifie « Je suis étudiant »",correct:true},
       {type:"tf",ar:"أَنْتَ مُدَرِّسٌ",q:"Signifie « Il est professeur »",correct:false,explain:"أَنْتَ = tu (masc.)."},
       {type:"fill",sentence:"___ طَالِبٌ",options:["أَنَا","أَنْتَ","هُوَ","هِيَ"],correct:0},
       {type:"type",q:"Écris « je » :",answer:"أَنَا",hint:"3 lettres"},
       {type:"type",q:"Écris « elle » :",answer:"هِيَ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["طَالِبٌ","أَنَا"],answer:"أَنَا طَالِبٌ"},
       {type:"audio",audioText:"أَنَا طَالِبٌ",options:["أَنَا طَالِبٌ","أَنْتَ طَالِبٌ","هُوَ طَالِبٌ","نَحْنُ طُلَّابٌ"],correct:0}
     ]},

    /* ===== LEÇON 11 ===== */
    {id:"t1l11", num:11, title:"Leçon 11", desc:"Positions · أَمَامَ / وَرَاءَ",
     active:true, audio:"assets/audio/madinah/tome1/L11.mp3", video:"Tome 1 - Leçon 11",
     text:["الْكِتَابُ فِي الْحَقِيبَةِ","الْقِطُّ فَوْقَ السَّرِيرِ","الْبَيْتُ أَمَامَ الْمَسْجِدِ","الْمَسْجِدُ وَرَاءَ الْبَيْتِ"],
     vocab:[
       {ar:"عَمٌّ",fr:"Oncle paternel",tr:"ʿamm"},
       {ar:"عَمَّةٌ",fr:"Tante paternelle",tr:"ʿamma"},
       {ar:"خَالٌ",fr:"Oncle maternel",tr:"khāl"},
       {ar:"فَلَّاحٌ",fr:"Agriculteur",tr:"fallāḥ"},
       {ar:"أَمَامَ",fr:"Devant",tr:"amāma"},
       {ar:"وَرَاءَ",fr:"Derrière",tr:"warāʾa"},
       {ar:"تَحْتَ",fr:"Sous",tr:"taḥta"},
       {ar:"فَوْقَ",fr:"Au-dessus",tr:"fawqa"},
       {ar:"بَيْنَ",fr:"Entre",tr:"bayna"},
       {ar:"عِنْدِي",fr:"J'ai",tr:"ʿindī"}
     ],
     grammar:{title:"Les prépositions de lieu",
       rule:"Suivies d'un nom au génitif.",
       examples:["فِي الْحَقِيبَةِ","فَوْقَ السَّرِيرِ","أَمَامَ الْمَسْجِدِ"]},
     dialogue:[
       {sp:"A",ar:"أَيْنَ الْكِتَابُ؟",fr:"Où est le livre ?"},
       {sp:"B",ar:"هُوَ فِي الْحَقِيبَةِ.",fr:"Il est dans le sac."},
       {sp:"A",ar:"أَيْنَ الْقِطُّ؟",fr:"Où est le chat ?"},
       {sp:"B",ar:"هُوَ فَوْقَ السَّرِيرِ.",fr:"Il est sur le lit."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire تَحْتَ ؟",options:["Sous","Sur","Devant","Derrière"],correct:0},
       {type:"qcm",q:"Que veut dire فَوْقَ ؟",options:["Au-dessus","En dessous","Devant","Derrière"],correct:0},
       {type:"qcm",q:"Comment dit-on « devant » ?",options:["أَمَامَ","وَرَاءَ","تَحْتَ","فَوْقَ"],correct:0},
       {type:"tf",ar:"الْكِتَابُ فِي الْحَقِيبَةِ",q:"Signifie « Le livre est dans le sac »",correct:true},
       {type:"fill",sentence:"الْكِتَابُ ___ الْحَقِيبَةِ",options:["فِي","عَلَى","مِنْ","إِلَى"],correct:0},
       {type:"type",q:"Écris « sous » :",answer:"تَحْتَ",hint:"3 lettres"},
       {type:"type",q:"Écris « entre » :",answer:"بَيْنَ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["الْحَقِيبَةِ","فِي","الْكِتَابُ"],answer:"الْكِتَابُ فِي الْحَقِيبَةِ"},
       {type:"audio",audioText:"الْكِتَابُ فِي الْحَقِيبَةِ",options:["الْكِتَابُ فِي الْحَقِيبَةِ","الْكِتَابُ عَلَى الْحَقِيبَةِ","الْقَلَمُ فِي الْحَقِيبَةِ","الْكِتَابُ فِي الْغُرْفَةِ"],correct:0}
     ]},{id:"t1l12", num:12, title:"Leçon 12", desc:"Noms diptotes · Pays",
     active:true, audio:"assets/audio/madinah/tome1/L12.mp3", video:"Tome 1 - Leçon 12",
     text:["أَنَا مِنْ سُورِيَا","هَذِهِ شَجَرَةٌ","الرَّجُلُ قَوِيٌّ","الطِّفْلُ ضَعِيفٌ"],
     vocab:[
       {ar:"سُورِيَا",fr:"Syrie",tr:"sūriyā"},
       {ar:"شَجَرَةٌ",fr:"Arbre",tr:"shajara"},
       {ar:"ضَعِيفٌ",fr:"Faible",tr:"ḍaʿīf"},
       {ar:"قَوِيٌّ",fr:"Fort",tr:"qawiyy"},
       {ar:"مِصْرُ",fr:"Égypte",tr:"miṣr"},
       {ar:"الْعِرَاقُ",fr:"Irak",tr:"al-ʿirāq"},
       {ar:"لُبْنَانُ",fr:"Liban",tr:"lubnān"},
       {ar:"فَرَنْسَا",fr:"France",tr:"faransā"}
     ],
     grammar:{title:"Les noms diptotes",
       rule:"Ne prennent pas de tanwin, prennent la fatha au génitif.",
       examples:["أَنَا مِنْ سُورِيَا","الرَّجُلُ قَوِيٌّ"]},
     dialogue:[
       {sp:"A",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?"},
       {sp:"B",ar:"أَنَا مِنْ سُورِيَا.",fr:"Je viens de Syrie."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هُوَ؟",fr:"Et lui ?"},
       {sp:"B",ar:"هُوَ مِنْ مِصْرَ.",fr:"Il vient d'Égypte."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire قَوِيٌّ ؟",options:["Fort","Faible","Grand","Petit"],correct:0},
       {type:"qcm",q:"Comment dit-on « arbre » ?",options:["شَجَرَةٌ","بَيْتٌ","مَدْرَسَةٌ","حَدِيقَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « Syrie » ?",options:["سُورِيَا","مِصْرُ","لُبْنَانُ","الْعِرَاقُ"],correct:0},
       {type:"tf",ar:"أَنَا مِنْ سُورِيَا",q:"Signifie « Je viens de Syrie »",correct:true},
       {type:"fill",sentence:"أَنَا مِنْ ___",options:["سُورِيَا","الْمَدْرَسَةِ","الْبَيْتِ","الْمَسْجِدِ"],correct:0},
       {type:"type",q:"Écris « Syrie » :",answer:"سُورِيَا",hint:"5 lettres"},
       {type:"type",q:"Écris « Égypte » :",answer:"مِصْرُ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["سُورِيَا","مِنْ","أَنَا"],answer:"أَنَا مِنْ سُورِيَا"},
       {type:"audio",audioText:"أَنَا مِنْ سُورِيَا",options:["أَنَا مِنْ سُورِيَا","أَنَا مِنْ مِصْرَ","أَنَا مِنْ لُبْنَانَ","أَنَا مِنْ فَرَنْسَا"],correct:0}
     ]},

    /* ===== LEÇON 13 ===== */
    {id:"t1l13", num:13, title:"Leçon 13", desc:"Pluriels brisés",
     active:true, audio:"assets/audio/madinah/tome1/L13.mp3", video:"Tome 1 - Leçon 13",
     text:["هَؤُلَاءِ مُدَرِّسُونَ","هَؤُلَاءِ طُلَّابٌ","هَؤُلَاءِ رِجَالٌ","هَذِهِ مُدَرِّسَاتٌ","هَذِهِ نِسَاءٌ"],
     vocab:[
       {ar:"مَطْعَمٌ",fr:"Restaurant",tr:"maṭʿam"},
       {ar:"مُجْتَهِدٌ",fr:"Travailleur",tr:"mujtahid"},
       {ar:"طُلَّابٌ",fr:"Étudiants",tr:"ṭullāb"},
       {ar:"رِجَالٌ",fr:"Hommes",tr:"rijāl"},
       {ar:"نِسَاءٌ",fr:"Femmes",tr:"nisāʾ"},
       {ar:"مُدَرِّسَاتٌ",fr:"Professeures",tr:"mudarrisāt"}
     ],
     grammar:{title:"Les pluriels brisés",
       rule:"Modifient la structure interne du mot.",
       examples:["رَجُلٌ → رِجَالٌ","كِتَابٌ → كُتُبٌ","طَالِبٌ → طُلَّابٌ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَؤُلَاءِ؟",fr:"Qui sont ceux-là ?"},
       {sp:"B",ar:"هَؤُلَاءِ مُدَرِّسُونَ.",fr:"Ce sont des professeurs."},
       {sp:"A",ar:"وَمَنْ هَؤُلَاءِ؟",fr:"Et celles-là ?"},
       {sp:"B",ar:"هَؤُلَاءِ طَالِبَاتٌ.",fr:"Ce sont des étudiantes."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مُجْتَهِدٌ ؟",options:["Travailleur","Paresseux","Intelligent","Bête"],correct:0},
       {type:"qcm",q:"Que veut dire رِجَالٌ ؟",options:["Hommes","Femmes","Étudiants","Professeurs"],correct:0},
       {type:"qcm",q:"Que veut dire نِسَاءٌ ؟",options:["Femmes","Hommes","Étudiantes","Professeures"],correct:0},
       {type:"tf",q:"Le pluriel de رَجُلٌ est رِجَالٌ",correct:true},
       {type:"tf",q:"Le pluriel de كِتَابٌ est كِتَابُونَ",correct:false,explain:"C'est كُتُبٌ."},
       {type:"fill",sentence:"هَؤُلَاءِ ___",options:["رِجَالٌ","رَجُلٌ","رَجُلَانِ","رَجُلَةٌ"],correct:0},
       {type:"type",q:"Écris « étudiants » :",answer:"طُلَّابٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « hommes » :",answer:"رِجَالٌ",hint:"4 lettres"},
       {type:"order",q:"Reconstitue :",words:["مُدَرِّسُونَ","هَؤُلَاءِ"],answer:"هَؤُلَاءِ مُدَرِّسُونَ"},
       {type:"audio",audioText:"هَؤُلَاءِ مُدَرِّسُونَ",options:["هَؤُلَاءِ مُدَرِّسُونَ","هَؤُلَاءِ طُلَّابٌ","هَؤُلَاءِ رِجَالٌ","هَؤُلَاءِ نِسَاءٌ"],correct:0}
     ]},

    /* ===== LEÇON 14 ===== */
    {id:"t1l14", num:14, title:"Leçon 14", desc:"La préposition مِنْ",
     active:true, audio:"assets/audio/madinah/tome1/L14.mp3", video:"Tome 1 - Leçon 14",
     text:["هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ","أَنَا مِنْ فَرَنْسَا","هُوَ مِنْ مِصْرَ"],
     vocab:[
       {ar:"الدُّسْتُورُ",fr:"Constitution",tr:"ad-dustūr"},
       {ar:"مَسْجِدٌ",fr:"Mosquée",tr:"masjid"},
       {ar:"كَنِيسَةٌ",fr:"Église",tr:"kanīsa"},
       {ar:"الْمَكْتَبَةُ",fr:"Bibliothèque",tr:"al-maktaba"},
       {ar:"الْجَامِعَةُ",fr:"Université",tr:"al-jāmiʿa"},
       {ar:"الْمُسْتَشْفَى",fr:"Hôpital",tr:"al-mustashfā"},
       {ar:"الْمَطَارُ",fr:"Aéroport",tr:"al-maṭār"}
     ],
     grammar:{title:"La préposition مِنْ",
       rule:"Signifie « de / depuis ». Suivie d'un nom au génitif.",
       examples:["أَنَا مِنْ فَرَنْسَا","هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ"]},
     dialogue:[
       {sp:"A",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?"},
       {sp:"B",ar:"أَنَا مِنْ فَرَنْسَا.",fr:"Je viens de France."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هُوَ؟",fr:"Et lui ?"},
       {sp:"B",ar:"هُوَ مِنْ مِصْرَ.",fr:"Il vient d'Égypte."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مِنْ ؟",options:["De","À","Dans","Sur"],correct:0},
       {type:"qcm",q:"Comment dit-on « mosquée » ?",options:["مَسْجِدٌ","كَنِيسَةٌ","مَكْتَبَةٌ","جَامِعَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire الْمُسْتَشْفَى ؟",options:["Hôpital","École","Mosquée","Université"],correct:0},
       {type:"tf",ar:"أَنَا مِنْ فَرَنْسَا",q:"Signifie « Je viens de France »",correct:true},
       {type:"fill",sentence:"أَنَا ___ فَرَنْسَا",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"type",q:"Écris « de » :",answer:"مِنْ",hint:"2 lettres"},
       {type:"type",q:"Écris « église » :",answer:"كَنِيسَةٌ",hint:"5 lettres + ة"},
       {type:"order",q:"Reconstitue :",words:["فَرَنْسَا","مِنْ","أَنَا"],answer:"أَنَا مِنْ فَرَنْسَا"},
       {type:"audio",audioText:"أَنَا مِنْ فَرَنْسَا",options:["أَنَا مِنْ فَرَنْسَا","أَنَا مِنْ مِصْرَ","أَنَا مِنْ سُورِيَا","أَنَا مِنْ لُبْنَانَ"],correct:0}
     ]},

    /* ===== LEÇON 15 ===== */
    {id:"t1l15", num:15, title:"Leçon 15", desc:"Pronoms féminins",
     active:true, audio:"assets/audio/madinah/tome1/L15.mp3", video:"Tome 1 - Leçon 15",
     text:["أَنْتِ طَالِبَةٌ مُجْتَهِدَةٌ","أَنْتُنَّ طَالِبَاتٌ مُجْتَهِدَاتٌ","هُنَّ مُدَرِّسَاتٌ"],
     vocab:[
       {ar:"الْقَاهِرَةُ",fr:"Le Caire",tr:"al-qāhira"},
       {ar:"الْآنَ",fr:"Maintenant",tr:"al-ān"},
       {ar:"قَبْلَ",fr:"Avant",tr:"qabla"},
       {ar:"بَعْدَ",fr:"Après",tr:"baʿda"},
       {ar:"كَيْفَ",fr:"Comment ?",tr:"kayfa"},
       {ar:"مَتَى",fr:"Quand ?",tr:"matā"},
       {ar:"أَنْتُنَّ",fr:"Vous (fém.)",tr:"antunna"},
       {ar:"هُنَّ",fr:"Elles",tr:"hunna"}
     ],
     grammar:{title:"Les pronoms féminins",
       rule:"أَنْتِ, أَنْتُنَّ, هُنَّ.",
       examples:["أَنْتِ طَالِبَةٌ","هُنَّ مُدَرِّسَاتٌ"]},
     dialogue:[
       {sp:"A",ar:"كَيْفَ حَالُكِ يَا فَاطِمَةُ؟",fr:"Comment vas-tu, Fatima ?"},
       {sp:"B",ar:"أَنَا بِخَيْرٍ، شُكْرًا.",fr:"Je vais bien, merci."},
       {sp:"A",ar:"مَتَى رَجَعْتِ مِنَ الْقَاهِرَةِ؟",fr:"Quand es-tu revenue du Caire ?"},
       {sp:"B",ar:"رَجَعْتُ الْآنَ.",fr:"Je suis revenue maintenant."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَنْتِ ؟",options:["Tu (fém.)","Tu (masc.)","Vous (fém.)","Elle"],correct:0},
       {type:"qcm",q:"Que veut dire هُنَّ ؟",options:["Elles","Ils","Vous (fém.)","Nous"],correct:0},
       {type:"qcm",q:"Comment dit-on « maintenant » ?",options:["الْآنَ","قَبْلَ","بَعْدَ","مَتَى"],correct:0},
       {type:"tf",ar:"أَنْتِ طَالِبَةٌ",q:"Signifie « Tu es étudiante »",correct:true},
       {type:"fill",sentence:"___ طَالِبَةٌ",options:["أَنْتِ","أَنْتَ","هُوَ","هُمْ"],correct:0},
       {type:"type",q:"Écris « maintenant » :",answer:"الْآنَ",hint:"4 lettres"},
       {type:"type",q:"Écris « avant » :",answer:"قَبْلَ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["طَالِبَةٌ","أَنْتِ"],answer:"أَنْتِ طَالِبَةٌ"},
       {type:"audio",audioText:"أَنْتِ طَالِبَةٌ",options:["أَنْتِ طَالِبَةٌ","أَنْتَ طَالِبٌ","هِيَ طَالِبَةٌ","أَنَا طَالِبَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 16 ===== */
    {id:"t1l16", num:16, title:"Leçon 16", desc:"La nature",
     active:true, audio:"assets/audio/madinah/tome1/L16.mp3", video:"Tome 1 - Leçon 16",
     text:["النَّهْرُ يَجْرِي بَيْنَ الْجِبَالِ","الْفُنْدُقُ كَبِيرٌ","الْبَحْرُ جَمِيلٌ","الطَّائِرَةُ سَرِيعَةٌ"],
     vocab:[
       {ar:"النَّهْرُ",fr:"La rivière",tr:"an-nahr"},
       {ar:"الْفُنْدُقُ",fr:"L'hôtel",tr:"al-funduq"},
       {ar:"الْبَحْرُ",fr:"La mer",tr:"al-baḥr"},
       {ar:"الطَّائِرَةُ",fr:"L'avion",tr:"aṭ-ṭāʾira"},
       {ar:"الْجِبَالُ",fr:"Les montagnes",tr:"al-jibāl"},
       {ar:"يَجْرِي",fr:"Coule",tr:"yajrī"},
       {ar:"عَالِيَةٌ",fr:"Haute",tr:"ʿāliya"},
       {ar:"سَرِيعَةٌ",fr:"Rapide",tr:"sarīʿa"}
     ],
     grammar:{title:"Les noms de la nature",
       rule:"Vocabulaire lié à la nature.",
       examples:["السَّفَرُ مُمْتِعٌ","الْقِرَاءَةُ مُفِيدَةٌ"]},
     dialogue:[
       {sp:"A",ar:"أَيْنَ الْفُنْدُقُ؟",fr:"Où est l'hôtel ?"},
       {sp:"B",ar:"هُوَ أَمَامَ الْبَحْرِ.",fr:"Il est devant la mer."},
       {sp:"A",ar:"هَلِ الْبَحْرُ جَمِيلٌ؟",fr:"La mer est-elle belle ?"},
       {sp:"B",ar:"نَعَمْ، الْبَحْرُ جَمِيلٌ جِدًّا.",fr:"Oui, très belle."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire النَّهْرُ ؟",options:["La rivière","La mer","La montagne","L'hôtel"],correct:0},
       {type:"qcm",q:"Comment dit-on « avion » ?",options:["الطَّائِرَةُ","الْفُنْدُقُ","الْبَحْرُ","النَّهْرُ"],correct:0},
       {type:"qcm",q:"Comment dit-on « entre » ?",options:["بَيْنَ","أَمَامَ","وَرَاءَ","تَحْتَ"],correct:0},
       {type:"tf",ar:"الْبَحْرُ جَمِيلٌ",q:"Signifie « La mer est belle »",correct:true},
       {type:"fill",sentence:"النَّهْرُ ___ بَيْنَ الْجِبَالِ",options:["يَجْرِي","يَقْرَأ","يَكْتُب","يَذْهَب"],correct:0},
       {type:"type",q:"Écris « la mer » :",answer:"الْبَحْرُ",hint:"avec ال"},
       {type:"type",q:"Écris « la rivière » :",answer:"النَّهْرُ",hint:"avec ال"},
       {type:"order",q:"Reconstitue :",words:["جَمِيلٌ","الْبَحْرُ"],answer:"الْبَحْرُ جَمِيلٌ"},
       {type:"audio",audioText:"الْبَحْرُ جَمِيلٌ",options:["الْبَحْرُ جَمِيلٌ","الْبَحْرُ كَبِيرٌ","النَّهْرُ جَمِيلٌ","الْبَحْرُ وَاسِعٌ"],correct:0}
     ]},

    /* ===== LEÇON 17 ===== */
    {id:"t1l17", num:17, title:"Leçon 17", desc:"Adjectifs (suite)",
     active:true, audio:"assets/audio/madinah/tome1/L17.mp3", video:"Tome 1 - Leçon 17",
     text:["الْبَابُ مَفْتُوحٌ","النَّافِذَةُ مَفْتُوحَةٌ","الْكِتَابُ جَدِيدٌ","الْمَدْرَسَةُ كَبِيرَةٌ"],
     vocab:[
       {ar:"مَفْتُوحَةٌ",fr:"Ouverte",tr:"maftūḥa"},
       {ar:"كَثِيرَةٌ",fr:"Nombreuse",tr:"kathīra"},
       {ar:"مَكْسُورٌ",fr:"Cassé",tr:"maksūr"},
       {ar:"وَاسِعٌ",fr:"Large",tr:"wāsiʿ"},
       {ar:"ضَيِّقٌ",fr:"Étroit",tr:"ḍayyiq"},
       {ar:"طَوِيلٌ",fr:"Long",tr:"ṭawīl"},
       {ar:"قَصِيرٌ",fr:"Court",tr:"qaṣīr"},
       {ar:"مَكْتَبَةٌ",fr:"Bibliothèque",tr:"maktaba"}
     ],
     grammar:{title:"L'accord de l'adjectif",
       rule:"L'adjectif s'accorde en genre et en nombre.",
       examples:["الْبَابُ مَفْتُوحٌ","النَّافِذَةُ مَفْتُوحَةٌ"]},
     dialogue:[
       {sp:"A",ar:"هَلِ الْبَابُ مَفْتُوحٌ؟",fr:"La porte est-elle ouverte ?"},
       {sp:"B",ar:"نَعَمْ، الْبَابُ مَفْتُوحٌ.",fr:"Oui, elle est ouverte."},
       {sp:"A",ar:"وَهَلِ النَّافِذَةُ مَفْتُوحَةٌ؟",fr:"Et la fenêtre ?"},
       {sp:"B",ar:"لَا، النَّافِذَةُ مُغْلَقَةٌ.",fr:"Non, elle est fermée."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مَفْتُوحَةٌ ؟",options:["Ouverte","Fermée","Grande","Petite"],correct:0},
       {type:"qcm",q:"Que veut dire مَكْسُورٌ ؟",options:["Cassé","Ouvert","Fermé","Grand"],correct:0},
       {type:"qcm",q:"Comment dit-on « long » ?",options:["طَوِيلٌ","قَصِيرٌ","وَاسِعٌ","ضَيِّقٌ"],correct:0},
       {type:"tf",ar:"الْبَابُ مَفْتُوحٌ",q:"Signifie « La porte est ouverte »",correct:true},
       {type:"fill",sentence:"الْبَابُ ___",options:["مَفْتُوحٌ","مَفْتُوحَةٌ","مَفْتُوحَانِ","مَفْتُوحَاتٌ"],correct:0},
       {type:"type",q:"Écris « ouvert » :",answer:"مَفْتُوحٌ",hint:"م ف ت و ح"},
       {type:"type",q:"Écris « grande » (fém.) :",answer:"كَبِيرَةٌ",hint:"ك ب ي ر + ة"},
       {type:"order",q:"Reconstitue :",words:["مَفْتُوحٌ","الْبَابُ"],answer:"الْبَابُ مَفْتُوحٌ"},
       {type:"audio",audioText:"الْبَابُ مَفْتُوحٌ",options:["الْبَابُ مَفْتُوحٌ","الْبَابُ مُغْلَقٌ","النَّافِذَةُ مَفْتُوحَةٌ","الْبَابُ كَبِيرٌ"],correct:0}
     ]},

    /* ===== LEÇON 18 ===== */
    {id:"t1l18", num:18, title:"Leçon 18", desc:"Le duel (المثنى)",
     active:true, audio:"assets/audio/madinah/tome1/L18.mp3", video:"Tome 1 - Leçon 18",
     text:["كِتَابَانِ","طَالِبَانِ","مُدَرِّسَتَانِ","الْكِتَابَانِ جَدِيدَانِ","الطَّالِبَانِ مُجْتَهِدَانِ"],
     vocab:[
       {ar:"سَنَةٌ",fr:"Année",tr:"sana"},
       {ar:"عَامٌ",fr:"An",tr:"ʿām"},
       {ar:"كِتَابَانِ",fr:"Deux livres",tr:"kitābāni"},
       {ar:"طَالِبَانِ",fr:"Deux étudiants",tr:"ṭālibāni"},
       {ar:"مُدَرِّسَتَانِ",fr:"Deux professeures",tr:"mudarrisatāni"},
       {ar:"بِنْتَانِ",fr:"Deux filles",tr:"bintāni"}
     ],
     grammar:{title:"Le duel (المثنى)",
       rule:"Désigne deux personnes ou choses. Suffixes انِ / يْنِ.",
       examples:["كِتَابٌ → كِتَابَانِ","طَالِبٌ → طَالِبَانِ","بِنْتٌ → بِنْتَانِ"]},
     dialogue:[
       {sp:"A",ar:"كَمْ كِتَابًا عِنْدَكَ؟",fr:"Combien de livres as-tu ?"},
       {sp:"B",ar:"عِنْدِي كِتَابَانِ.",fr:"J'ai deux livres."},
       {sp:"A",ar:"وَكَمْ طَالِبًا فِي الْفَصْلِ؟",fr:"Et d'étudiants ?"},
       {sp:"B",ar:"طَالِبَانِ.",fr:"Deux étudiants."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire كِتَابَانِ ؟",options:["Deux livres","Un livre","Trois livres","Des livres"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux filles » ?",options:["بِنْتَانِ","بِنْتٌ","بَنَاتٌ","بِنْتًا"],correct:0},
       {type:"qcm",q:"Quel suffixe pour le duel (nominatif) ?",options:["ـانِ","ـينَ","ـونَ","ـاتٌ"],correct:0},
       {type:"tf",q:"Le duel désigne deux personnes ou deux choses",correct:true},
       {type:"fill",sentence:"عِنْدِي ___",options:["كِتَابَانِ","كِتَابٌ","كُتُبٌ","كِتَابَاتٌ"],correct:0},
       {type:"type",q:"Écris « deux livres » :",answer:"كِتَابَانِ",hint:"ك ت ا ب + ان"},
       {type:"type",q:"Écris « deux filles » :",answer:"بِنْتَانِ",hint:"ب ن ت + ان"},
       {type:"order",q:"Reconstitue :",words:["كِتَابَانِ","عِنْدِي"],answer:"عِنْدِي كِتَابَانِ"},
       {type:"audio",audioText:"عِنْدِي كِتَابَانِ",options:["عِنْدِي كِتَابَانِ","عِنْدِي كِتَابٌ","عِنْدِي كُتُبٌ","عِنْدِي كِتَابَاتٌ"],correct:0}
     ]},

    /* ===== LEÇON 19 ===== */
    {id:"t1l19", num:19, title:"Leçon 19", desc:"Nombres 1-10",
     active:true, audio:"assets/audio/madinah/tome1/L19.mp3", video:"Tome 1 - Leçon 19",
     text:["وَاحِدٌ","اِثْنَانِ","ثَلَاثَةٌ","أَرْبَعَةٌ","خَمْسَةٌ","سِتَّةٌ","سَبْعَةٌ","ثَمَانِيَةٌ","تِسْعَةٌ","عَشَرَةٌ"],
     vocab:[
       {ar:"عِنَبٌ",fr:"Raisin",tr:"ʿinab"},
       {ar:"دُوَلٌ",fr:"Pays",tr:"duwal"},
       {ar:"مُسَافِرُونَ",fr:"Voyageurs",tr:"musāfirūn"},
       {ar:"وَاحِدٌ",fr:"Un (1)",tr:"wāḥid"},
       {ar:"اِثْنَانِ",fr:"Deux (2)",tr:"ithnān"},
       {ar:"ثَلَاثَةٌ",fr:"Trois (3)",tr:"thalātha"},
       {ar:"أَرْبَعَةٌ",fr:"Quatre (4)",tr:"arbaʿa"},
       {ar:"خَمْسَةٌ",fr:"Cinq (5)",tr:"khamsa"},
       {ar:"سِتَّةٌ",fr:"Six (6)",tr:"sitta"},
       {ar:"سَبْعَةٌ",fr:"Sept (7)",tr:"sabʿa"},
       {ar:"ثَمَانِيَةٌ",fr:"Huit (8)",tr:"thamāniya"},
       {ar:"تِسْعَةٌ",fr:"Neuf (9)",tr:"tisʿa"},
       {ar:"عَشَرَةٌ",fr:"Dix (10)",tr:"ʿashara"}
     ],
     grammar:{title:"Les nombres 1 à 10",
       rule:"Nombres 3-10 + nom pluriel au génitif.",
       examples:["ثَلَاثَةُ كُتُبٍ","عَشَرَةُ طُلَّابٍ"]},
     dialogue:[
       {sp:"A",ar:"كَمْ عِنْدَكَ مِنْ كِتَابٍ؟",fr:"Combien de livres ?"},
       {sp:"B",ar:"عِنْدِي ثَلَاثَةُ كُتُبٍ.",fr:"J'ai trois livres."},
       {sp:"A",ar:"وَكَمْ طَالِبًا فِي الْفَصْلِ؟",fr:"Et d'étudiants ?"},
       {sp:"B",ar:"عَشَرَةُ طُلَّابٍ.",fr:"Dix étudiants."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire وَاحِدٌ ؟",options:["Un","Deux","Trois","Quatre"],correct:0},
       {type:"qcm",q:"Comment dit-on « dix » ?",options:["عَشَرَةٌ","تِسْعَةٌ","ثَمَانِيَةٌ","سَبْعَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « cinq » ?",options:["خَمْسَةٌ","سِتَّةٌ","سَبْعَةٌ","أَرْبَعَةٌ"],correct:0},
       {type:"tf",ar:"عِنْدِي ثَلَاثَةُ كُتُبٍ",q:"Signifie « J'ai trois livres »",correct:true},
       {type:"fill",sentence:"عِنْدِي ___ كُتُبٍ",options:["ثَلَاثَةُ","ثَلَاثٌ","ثَلَاثَ","ثَلَاثِ"],correct:0},
       {type:"type",q:"Écris « trois » :",answer:"ثَلَاثَةٌ",hint:"6 lettres"},
       {type:"type",q:"Écris « cinq » :",answer:"خَمْسَةٌ",hint:"5 lettres"},
       {type:"order",q:"Reconstitue :",words:["كُتُبٍ","ثَلَاثَةُ","عِنْدِي"],answer:"عِنْدِي ثَلَاثَةُ كُتُبٍ"},
       {type:"audio",audioText:"عِنْدِي ثَلَاثَةُ كُتُبٍ",options:["عِنْدِي ثَلَاثَةُ كُتُبٍ","عِنْدِي كِتَابَانِ","عِنْدِي كِتَابٌ","عِنْدِي عَشَرَةُ كُتُبٍ"],correct:0}
     ]},

    /* ===== LEÇON 20 ===== */
    {id:"t1l20", num:20, title:"Leçon 20", desc:"Pronom relatif الَّذِي",
     active:true, audio:"assets/audio/madinah/tome1/L20.mp3", video:"Tome 1 - Leçon 20",
     text:["الرَّجُلُ الَّذِي فِي الْبَيْتِ","الطَّالِبُ الَّذِي نَجَحَ","الْمُدَرِّسُ الَّذِي فِي الْفَصْلِ"],
     vocab:[
       {ar:"كَلِمَةٌ",fr:"Mot",tr:"kalima"},
       {ar:"كَلِمَاتٌ",fr:"Mots",tr:"kalimāt"},
       {ar:"الَّذِي",fr:"Celui qui",tr:"alladhī"},
       {ar:"الَّتِي",fr:"Celle qui",tr:"allatī"},
       {ar:"الَّذِينَ",fr:"Ceux qui",tr:"alladhīna"},
       {ar:"اللَّاتِي",fr:"Celles qui",tr:"allātī"},
       {ar:"نَجَحَ",fr:"Réussir",tr:"najaḥa"},
       {ar:"قَرَأَ",fr:"Lire",tr:"qaraʾa"}
     ],
     grammar:{title:"Le pronom relatif الَّذِي",
       rule:"S'accorde : الَّذِي (m. s.), الَّتِي (f. s.), الَّذِينَ (m. pl.), اللَّاتِي (f. pl.).",
       examples:["الرَّجُلُ الَّذِي فِي الْبَيْتِ","الطَّالِبَةُ الَّتِي نَجَحَتْ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذَا الرَّجُلُ؟",fr:"Qui est cet homme ?"},
       {sp:"B",ar:"هَذَا الرَّجُلُ الَّذِي فِي الْبَيْتِ.",fr:"C'est l'homme qui est dans la maison."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire الَّذِي ؟",options:["Celui qui","Celle qui","Ceux qui","Celles qui"],correct:0},
       {type:"qcm",q:"Comment dit-on « celle qui » ?",options:["الَّتِي","الَّذِي","الَّذِينَ","اللَّاتِي"],correct:0},
       {type:"qcm",q:"Comment dit-on « ceux qui » ?",options:["الَّذِينَ","الَّذِي","الَّتِي","اللَّاتِي"],correct:0},
       {type:"tf",ar:"الطَّالِبُ الَّذِي نَجَحَ",q:"Signifie « L'étudiant qui a réussi »",correct:true},
       {type:"fill",sentence:"الطَّالِبُ ___ نَجَحَ",options:["الَّذِي","الَّتِي","الَّذِينَ","اللَّاتِي"],correct:0},
       {type:"type",q:"Écris « celui qui » :",answer:"الَّذِي",hint:"ال + ذ ي"},
       {type:"type",q:"Écris « celle qui » :",answer:"الَّتِي",hint:"ال + ت ي"},
       {type:"order",q:"Reconstitue :",words:["نَجَحَ","الَّذِي","الطَّالِبُ"],answer:"الطَّالِبُ الَّذِي نَجَحَ"},
       {type:"audio",audioText:"الطَّالِبُ الَّذِي نَجَحَ",options:["الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَةُ الَّتِي نَجَحَتْ","الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبُ الَّذِي دَرَسَ"],correct:0}
     ]},

    /* ===== LEÇON 21 ===== */
    {id:"t1l21", num:21, title:"Leçon 21", desc:"Relatifs (suite)",
     active:true, audio:"assets/audio/madinah/tome1/L21.mp3", video:"Tome 1 - Leçon 21",
     text:["الطَّالِبَةُ الَّتِي نَجَحَتْ","الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ"],
     vocab:[
       {ar:"الَّتِي",fr:"Celle qui",tr:"allatī"},
       {ar:"الَّذِينَ",fr:"Ceux qui",tr:"alladhīna"},
       {ar:"اللَّاتِي",fr:"Celles qui",tr:"allātī"},
       {ar:"نَجَحَتْ",fr:"Elle a réussi",tr:"najaḥat"},
       {ar:"نَجَحُوا",fr:"Ils ont réussi",tr:"najaḥū"},
       {ar:"نَجَحْنَ",fr:"Elles ont réussi",tr:"najaḥna"}
     ],
     grammar:{title:"L'accord du relatif",
       rule:"S'accorde en genre et nombre avec son antécédent.",
       examples:["الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَةُ الَّتِي نَجَحَتْ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذِهِ الطَّالِبَةُ؟",fr:"Qui est cette étudiante ?"},
       {sp:"B",ar:"هَذِهِ الطَّالِبَةُ الَّتِي نَجَحَتْ.",fr:"C'est l'étudiante qui a réussi."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire اللَّاتِي ؟",options:["Celles qui","Ceux qui","Celui qui","Celle qui"],correct:0},
       {type:"qcm",q:"Comment dit-on « ils ont réussi » ?",options:["نَجَحُوا","نَجَحَ","نَجَحَتْ","نَجَحْنَ"],correct:0},
       {type:"qcm",q:"Comment dit-on « elles ont réussi » ?",options:["نَجَحْنَ","نَجَحَ","نَجَحَتْ","نَجَحُوا"],correct:0},
       {type:"tf",ar:"الطَّالِبَةُ الَّتِي نَجَحَتْ",q:"Signifie « L'étudiante qui a réussi »",correct:true},
       {type:"fill",sentence:"الطُّلَّابُ ___ نَجَحُوا",options:["الَّذِينَ","الَّذِي","الَّتِي","اللَّاتِي"],correct:0},
       {type:"type",q:"Écris « celles qui » :",answer:"اللَّاتِي",hint:"ال + ل ا ت ي"},
       {type:"type",q:"Écris « ils ont réussi » :",answer:"نَجَحُوا",hint:"ن ج ح + وا"},
       {type:"order",q:"Reconstitue :",words:["نَجَحَتْ","الَّتِي","الطَّالِبَةُ"],answer:"الطَّالِبَةُ الَّتِي نَجَحَتْ"},
       {type:"audio",audioText:"الطُّلَّابُ الَّذِينَ نَجَحُوا",options:["الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ","الطُّلَّابُ الَّذِينَ دَرَسُوا"],correct:0}
     ]},

    /* ===== LEÇON 22 ===== */
    {id:"t1l22", num:22, title:"Leçon 22", desc:"Couleurs (diptotes)",
     active:true, audio:"assets/audio/madinah/tome1/L22.mp3", video:"Tome 1 - Leçon 22",
     text:["الْبَابُ الْأَحْمَرُ","النَّافِذَةُ الْحَمْرَاءُ","السَّمَاءُ الزَّرْقَاءُ","الشَّجَرَةُ الْخَضْرَاءُ"],
     vocab:[
       {ar:"أَحْمَرُ",fr:"Rouge",tr:"aḥmar"},
       {ar:"أَزْرَقُ",fr:"Bleu",tr:"azraq"},
       {ar:"أَخْضَرُ",fr:"Vert",tr:"akhḍar"},
       {ar:"أَسْوَدُ",fr:"Noir",tr:"aswad"},
       {ar:"أَصْفَرُ",fr:"Jaune",tr:"aṣfar"},
       {ar:"أَبْيَضُ",fr:"Blanc",tr:"abyaḍ"},
       {ar:"حَمْرَاءُ",fr:"Rouge (fém.)",tr:"ḥamrāʾ"}
     ],
     grammar:{title:"Les adjectifs de couleur",
       rule:"Masculin diptote, féminin en فَعْلَاءُ.",
       examples:["الْبَابُ الْأَحْمَرُ","النَّافِذَةُ الْحَمْرَاءُ"]},
     dialogue:[
       {sp:"A",ar:"مَا لَوْنُ الْبَابِ؟",fr:"Quelle est la couleur de la porte ?"},
       {sp:"B",ar:"الْبَابُ أَحْمَرُ.",fr:"La porte est rouge."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَحْمَرُ ؟",options:["Rouge","Bleu","Vert","Noir"],correct:0},
       {type:"qcm",q:"Comment dit-on « bleu » ?",options:["أَزْرَقُ","أَحْمَرُ","أَخْضَرُ","أَسْوَدُ"],correct:0},
       {type:"qcm",q:"Féminin de أَحْمَرُ ?",options:["حَمْرَاءُ","أَحْمَرَةٌ","أَحْمَرَاتٌ","حُمْرٌ"],correct:0},
       {type:"tf",ar:"الْبَابُ الْأَحْمَرُ",q:"Signifie « La porte rouge »",correct:true},
       {type:"fill",sentence:"الْبَابُ ___",options:["الْأَحْمَرُ","الْحَمْرَاءُ","أَحْمَرَاتٌ","حُمْرٌ"],correct:0},
       {type:"type",q:"Écris « rouge » (masc.) :",answer:"أَحْمَرُ",hint:"5 lettres"},
       {type:"type",q:"Écris « bleu » (masc.) :",answer:"أَزْرَقُ",hint:"5 lettres"},
       {type:"order",q:"Reconstitue :",words:["الْأَحْمَرُ","الْبَابُ"],answer:"الْبَابُ الْأَحْمَرُ"},
       {type:"audio",audioText:"الْبَابُ الْأَحْمَرُ",options:["الْبَابُ الْأَحْمَرُ","الْبَابُ الْأَزْرَقُ","النَّافِذَةُ الْحَمْرَاءُ","الْبَابُ الْأَخْضَرُ"],correct:0}
     ]},

    /* ===== LEÇON 23 ===== */
    {id:"t1l23", num:23, title:"Leçon 23", desc:"Noms de lieu",
     active:true, audio:"assets/audio/madinah/tome1/L23.mp3", video:"Tome 1 - Leçon 23",
     text:["أَنَا مِنْ وَاشِنْطُن","هُوَ مِنْ إِسْطَنْبُول","هِيَ مِنْ مَكَّةَ","هُمْ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ"],
     vocab:[
       {ar:"وَاشِنْطُن",fr:"Washington",tr:"wāshinṭun"},
       {ar:"إِسْطَنْبُول",fr:"Istanbul",tr:"isṭanbūl"},
       {ar:"الطَّائِفُ",fr:"Taif",tr:"aṭ-ṭāʾif"},
       {ar:"الْمَدِينَةُ الْمُنَوَّرَةُ",fr:"Médine",tr:"al-madīna al-munawwara"},
       {ar:"مَكَّةُ",fr:"La Mecque",tr:"makka"},
       {ar:"الْقَاهِرَةُ",fr:"Le Caire",tr:"al-qāhira"},
       {ar:"دِمَشْقُ",fr:"Damas",tr:"dimashq"},
       {ar:"بَغْدَادُ",fr:"Bagdad",tr:"baghdād"}
     ],
     grammar:{title:"Les noms de lieu",
       rule:"Souvent diptotes (pas de tanwin).",
       examples:["أَنَا مِنْ وَاشِنْطُن","هُوَ مِنْ إِسْطَنْبُول"]},
     dialogue:[
       {sp:"A",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?"},
       {sp:"B",ar:"أَنَا مِنْ وَاشِنْطُن.",fr:"Je viens de Washington."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هُوَ؟",fr:"Et lui ?"},
       {sp:"B",ar:"هُوَ مِنْ إِسْطَنْبُول.",fr:"Il vient d'Istanbul."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire وَاشِنْطُن ؟",options:["Washington","Istanbul","Taif","Médine"],correct:0},
       {type:"qcm",q:"Comment dit-on « La Mecque » ?",options:["مَكَّةُ","الْمَدِينَةُ","الطَّائِفُ","وَاشِنْطُن"],correct:0},
       {type:"qcm",q:"Comment dit-on « Le Caire » ?",options:["الْقَاهِرَةُ","دِمَشْقُ","بَغْدَادُ","مَكَّةُ"],correct:0},
       {type:"tf",ar:"أَنَا مِنْ وَاشِنْطُن",q:"Signifie « Je viens de Washington »",correct:true},
       {type:"fill",sentence:"أَنَا ___ وَاشِنْطُن",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"type",q:"Écris « Washington » :",answer:"وَاشِنْطُن",hint:"8 lettres"},
       {type:"type",q:"Écris « Istanbul » :",answer:"إِسْطَنْبُول",hint:"9 lettres"},
       {type:"order",q:"Reconstitue :",words:["وَاشِنْطُن","مِنْ","أَنَا"],answer:"أَنَا مِنْ وَاشِنْطُن"},
       {type:"audio",audioText:"أَنَا مِنْ وَاشِنْطُن",options:["أَنَا مِنْ وَاشِنْطُن","أَنَا مِنْ إِسْطَنْبُول","أَنَا مِنْ مَكَّةَ","أَنَا مِنْ فَرَنْسَا"],correct:0}
     ]}

    ]
  },
  {id:"t2", num:2, title:"Tome 2", subtitle:"Grammaire intermédiaire", desc:"À venir · 20 leçons prévues", active:false, lessons:[]},
  {id:"t3", num:3, title:"Tome 3", subtitle:"Grammaire avancée", desc:"À venir · 20 leçons prévues", active:false, lessons:[]},
  {id:"t4", num:4, title:"Tome 4", subtitle:"Perfectionnement", desc:"À venir", active:false, lessons:[]}
];

/* ============================================================
   INTERFACE NOUR — MADINAH SCREEN (v3.2 — avec 6 corrections)
   ============================================================ */
var MadinahScreen = {

  home: function(){
    var h = '<button class="back" onclick="App.home()">← Accueil</button>' +
      '<h2>📖 Tomes de Médine</h2>' +
      '<p class="muted" style="margin-bottom:14px">Méthode du Dr. V. Abdur Rahim</p>';
    for (var i = 0; i < TOMES.length; i++){
      var t = TOMES[i];
      h += '<button class="lesson-item' + (t.active ? '' : ' locked') + '" ' +
        (t.active ? 'onclick="MadinahScreen.tome(\'' + t.id + '\')"' : 'disabled') + '>' +
        '<div class="num" style="background:' + (t.active ? '#8b0000' : '#999') + '">' + t.num + '</div>' +
        '<div><div class="title">' + t.title + ' — ' + t.subtitle + '</div>' +
        '<div class="desc">' + t.desc + (t.active ? '' : ' · 🔒 bientôt') + '</div></div>' +
      '</button>';
    }
    h += '<div class="card" style="margin-top:20px;font-size:12px;color:var(--muted);text-align:center">' +
      'Crédits : Dr. V. Abdur Rahim · Complément vidéo : @coursarabeenvideo</div>';
    document.getElementById('app').innerHTML = h;
  },

  tome: function(id){
    var t = this._findTome(id);
    if (!t) return;
    var h = '<button class="back" onclick="MadinahScreen.home()">← Tomes</button>' +
      '<h2>' + t.title + ' — ' + t.subtitle + '</h2>' +
      '<p class="muted" style="margin-bottom:14px">' + t.lessons.length + ' leçons</p>';
    h += '<button class="menu-btn" onclick="MadinahScreen.showPdf(\'' + esc(t.pdf || '') + '\')">' +
      '<div class="icon">📄</div><div><div class="label">PDF du ' + t.title + '</div>' +
      '<div class="sub">' + (t.pdf || 'Non disponible') + '</div></div></button>';
    for (var j = 0; j < t.lessons.length; j++){
      var L = t.lessons[j];
      h += '<button class="lesson-item' + (L.active ? '' : ' locked') + '" ' +
        (L.active ? 'onclick="MadinahScreen.lesson(\'' + t.id + '\',\'' + L.id + '\')"' : 'disabled') + '>' +
        '<div class="num">' + L.num + '</div>' +
        '<div><div class="title">' + L.title + '</div>' +
        '<div class="desc">' + L.desc + (L.active ? '' : ' · 📝 à venir') + '</div></div>' +
      '</button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  lesson: function(tomeId, lessonId){
    var t = this._findTome(tomeId);
    if (!t) return;
    var L = this._findLesson(t, lessonId);
    if (!L) return;
    var h = '<button class="back" onclick="MadinahScreen.tome(\'' + t.id + '\')">← ' + t.title + '</button>' +
      '<h2>' + L.title + ' — ' + t.title + '</h2>' +
      '<p class="muted" style="margin-bottom:14px">' + L.desc + '</p>';
    var menu = [
      {icon:"📖",label:"Texte de la leçon",sub:(L.text?L.text.length+" phrases":"Non disponible"),fn:"MadinahScreen.text('"+t.id+"','"+L.id+"')"},
      {icon:"🔊",label:"Audio (prononciation)",sub:(L.audio||"Non disponible"),fn:"MadinahScreen.audio('"+t.id+"','"+L.id+"')"},
      {icon:"🎥",label:"Vidéo explicative",sub:(L.video||"Non disponible"),fn:"MadinahScreen.video('"+t.id+"','"+L.id+"')"},
      {icon:"📚",label:"Vocabulaire",sub:(L.vocab?L.vocab.length+" mots":"Non disponible"),fn:"MadinahScreen.vocab('"+t.id+"','"+L.id+"')"},
      {icon:"📝",label:"Grammaire",sub:(L.grammar?L.grammar.title:"Non disponible"),fn:"MadinahScreen.grammar('"+t.id+"','"+L.id+"')"},
      {icon:"💬",label:"Dialogue",sub:(L.dialogue?L.dialogue.length+" répliques":"Non disponible"),fn:"MadinahScreen.dialogue('"+t.id+"','"+L.id+"')"},
      {icon:"✏️",label:"Exercices",sub:(L.exercises?L.exercises.length+" questions":"Non disponible"),fn:"MadinahScreen.exercises('"+t.id+"','"+L.id+"')"}
    ];
    for (var i = 0; i < menu.length; i++){
      var M = menu[i];
      h += '<button class="menu-btn" onclick="' + M.fn + '">' +
        '<div class="icon">' + M.icon + '</div>' +
        '<div><div class="label">' + M.label + '</div>' +
        '<div class="sub">' + M.sub + '</div></div></button>';
    }
    document.getElementById('app').innerHTML = h;
  },

  text: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L || !L.text) return this._notAvailable();
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + tomeId + '\',\'' + lessonId + '\')">← Leçon</button>' +
      '<h2>📖 Texte de la leçon</h2>';
    for (var i = 0; i < L.text.length; i++){
      h += '<div class="card" style="text-align:center;cursor:pointer" onclick="speak(\'' + esc(L.text[i]) + '\')">' +
        '<div class="ar" style="font-size:32px;color:var(--primary);line-height:1.8">' + L.text[i] + '</div>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:8px">🔊 Toucher pour écouter</div></div>';
    }
    document.getElementById('app').innerHTML = h;
  },

  audio: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L) return;
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + tomeId + '\',\'' + lessonId + '\')">← Leçon</button>' +
      '<h2>🔊 Audio de la leçon</h2>' +
      '<div class="card" style="text-align:center;padding:30px">' +
        '<div style="font-size:60px;margin-bottom:16px">🎧</div>' +
        '<p style="font-weight:700;margin-bottom:8px">' + (L.audio || 'Non disponible') + '</p>' +
        '<p class="muted" style="font-size:13px;margin-bottom:20px">Lecture de la leçon complète</p>' +
        (L.audio ?
          '<audio controls style="width:100%;margin-bottom:16px" preload="metadata">' +
          '<source src="' + esc(L.audio) + '" type="audio/mpeg"></audio>' +
          '<button class="btn" onclick="MadinahScreen.playAudio(\'' + esc(L.audio) + '\')">▶️ Relire</button>'
          : '<button class="btn" onclick="speak(\'' + esc(L.text ? L.text[0] : '') + '\')">🔊 Utiliser la synthèse vocale</button>') +
      '</div>';
    document.getElementById('app').innerHTML = h;
  },

  playAudio: function(filename){
    if (!filename) return;
    try {
      var audio = new Audio(filename);
      audio.play().catch(function(){ toast('Fichier audio non trouvé'); });
    } catch(e){ toast('Erreur audio'); }
  },

  video: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L) return;
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + tomeId + '\',\'' + lessonId + '\')">← Leçon</button>' +
      '<h2>🎥 Vidéo explicative</h2>' +
      '<div class="card" style="text-align:center;padding:30px">' +
        '<div style="font-size:60px;margin-bottom:16px">🎥</div>' +
        '<p style="font-weight:700;margin-bottom:8px">' + (L.video || 'Non disponible') + '</p>' +
        '<p class="muted" style="font-size:13px;margin-bottom:20px">Chaîne @coursarabeenvideo</p>' +
        '<button class="btn" onclick="MadinahScreen.openVideo(\'' + esc(L.video || '') + '\')">▶️ Ouvrir la vidéo</button>' +
      '</div>';
    document.getElementById('app').innerHTML = h;
  },

  openVideo: function(title){
    var q = encodeURIComponent(title + ' coursarabeenvideo');
    window.open('https://www.youtube.com/results?search_query=' + q, '_blank');
  },

  vocab: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L || !L.vocab) return this._notAvailable();
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + tomeId + '\',\'' + lessonId + '\')">← Leçon</button>' +
      '<h2>📚 Vocabulaire — ' + L.vocab.length + ' mots</h2>';
    for (var i = 0; i < L.vocab.length; i++){
      var v = L.vocab[i];
      h += '<div class="card" style="padding:14px;margin-bottom:8px;cursor:pointer" onclick="speak(\'' + esc(v.ar) + '\')">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">' +
        '<div><div class="ar" style="font-size:26px;color:var(--primary)">' + v.ar + '</div>' +
        '<div style="font-size:14px;font-weight:700;margin-top:4px">' + v.fr + '</div>' +
        '<div style="font-size:12px;color:var(--muted);font-style:italic">' + (v.tr || '') + '</div></div>' +
        '<div style="font-size:24px">🔊</div></div></div>';
    }
    document.getElementById('app').innerHTML = h;
  },

  grammar: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L || !L.grammar) return this._notAvailable();
    var g = L.grammar;
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + tomeId + '\',\'' + lessonId + '\')">← Leçon</button>' +
      '<h2>📝 Grammaire</h2>' +
      '<div class="card"><h3>' + g.title + '</h3>' +
      '<p style="font-size:14px;line-height:1.7;margin:14px 0">' + g.rule + '</p></div>';
    if (g.examples){
      h += '<div class="card"><h3>Exemples</h3>';
      for (var i = 0; i < g.examples.length; i++){
        h += '<div style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px">• ' + g.examples[i] + '</div>';
      }
      h += '</div>';
    }
    document.getElementById('app').innerHTML = h;
  },

  dialogue: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L || !L.dialogue) return this._notAvailable();
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + tomeId + '\',\'' + lessonId + '\')">← Leçon</button>' +
      '<h2>💬 Dialogue</h2><div class="dialogue-wrap">';
    for (var i = 0; i < L.dialogue.length; i++){
      var d = L.dialogue[i];
      h += '<div class="dialogue-line ' + (d.sp === 'A' ? 'left' : 'right') + '" onclick="speak(\'' + esc(d.ar) + '\')">' +
        '<div class="ar">' + d.ar + '</div>' +
        '<div class="fr">' + d.fr + '</div></div>';
    }
    h += '</div><p class="muted" style="text-align:center;font-size:12px">👆 Touche une réplique pour l\'écouter</p>';
    document.getElementById('app').innerHTML = h;
  },

  /* ============ EXERCICES ============ */
  exercises: function(tomeId, lessonId){
    var L = this._getLesson(tomeId, lessonId);
    if (!L || !L.exercises || !L.exercises.length) return this._notAvailable();
    this._currentEx = { list: L.exercises, idx: 0, score: 0, tome: tomeId, lesson: lessonId, state: null };
    this._renderExercise();
  },

  _renderExercise: function(){
    var s = this._currentEx;
    if (!s) return;
    if (s.idx >= s.list.length) return this._endExercises();
    var ex = s.list[s.idx];
    /* CORRECTION 5 : reset du cache de mélange à chaque nouvel exercice */
    delete ex._shuffled;
    var type = ex.type || "qcm";
    var p = Math.round((s.idx / s.list.length) * 100);
    var h = '<button class="back" onclick="MadinahScreen.lesson(\'' + s.tome + '\',\'' + s.lesson + '\')">← Quitter</button>' +
      '<div class="counter">Q ' + (s.idx + 1) + '/' + s.list.length + ' · Score : ' + s.score + '</div>' +
      '<div class="progress"><div class="progress-bar" style="width:' + p + '%"></div></div>';
    if (type === "qcm") h += this._renderQCM(ex);
    else if (type === "fill") h += this._renderFill(ex);
    else if (type === "audio") h += this._renderAudio(ex);
    else if (type === "tf") h += this._renderTF(ex);
    else if (type === "type") h += this._renderType(ex);
    else if (type === "order") h += this._renderOrder(ex);
    document.getElementById('app').innerHTML = h;
    if (type === "order"){
      s.state = { selected: [], remaining: ex.words.slice() };
      this._refreshOrder();
    }
    if (type === "audio" && ex.audioText){
      setTimeout(function(){ speak(ex.audioText); }, 300);
    }
    if (type === "type"){
      var inp = document.getElementById('typeInput');
      if (inp){
        inp.focus();
        /* CORRECTION 6 : onkeydown (pas addEventListener → pas de doublon) */
        inp.onkeydown = function(e){
          if (e.key === 'Enter'){ MadinahScreen._answerType(); }
        };
      }
    }
  },

  /* ============ MÉLANGE AUTOMATIQUE DES OPTIONS ============ */
  _shuffleOptions: function(ex){
    if (!ex.options || !ex.options.length) return { options: [], correct: 0 };
    var pairs = [];
    for (var i = 0; i < ex.options.length; i++){
      pairs.push({ text: ex.options[i], isCorrect: (i === ex.correct) });
    }
    for (var j = pairs.length - 1; j > 0; j--){
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = pairs[j]; pairs[j] = pairs[k]; pairs[k] = tmp;
    }
    var newOptions = [], newCorrect = 0;
    for (var m = 0; m < pairs.length; m++){
      newOptions.push(pairs[m].text);
      if (pairs[m].isCorrect) newCorrect = m;
    }
    ex._shuffled = { options: newOptions, correct: newCorrect };
    return ex._shuffled;
  },

  /* ============ RENDUS PAR TYPE ============ */

  /* CORRECTION 1 : QCM avec mélange aléatoire */
  _renderQCM: function(ex){
    var sh = this._shuffleOptions(ex);
    var h = '<div class="card" style="padding:24px 20px"><p style="font-size:16px;font-weight:700">' + ex.q + '</p></div>' +
      '<div style="display:grid;gap:8px">';
    for (var i = 0; i < sh.options.length; i++){
      h += '<button class="quiz-option" onclick="MadinahScreen._answerQCM(' + i + ')">' + sh.options[i] + '</button>';
    }
    return h + '</div>';
  },

  /* CORRECTION 2 : Fill avec mélange aléatoire */
  _renderFill: function(ex){
    var sh = this._shuffleOptions(ex);
    var h = '<div class="card" style="padding:28px 20px;text-align:center">' +
      '<p class="ar" style="font-size:30px;line-height:2;color:var(--primary)">' + ex.sentence + '</p>' +
      '<p style="font-size:13px;font-weight:600;margin-top:14px;color:var(--muted)">Complète la phrase</p></div>' +
      '<div style="display:grid;gap:8px">';
    for (var i = 0; i < sh.options.length; i++){
      h += '<button class="quiz-option" onclick="MadinahScreen._answerQCM(' + i + ')">' + sh.options[i] + '</button>';
    }
    return h + '</div>';
  },

  /* CORRECTION 3 : Audio avec mélange aléatoire */
  _renderAudio: function(ex){
    var sh = this._shuffleOptions(ex);
    return '<div class="card" style="padding:28px 20px;text-align:center">' +
      '<button class="btn" style="max-width:220px;margin:0 auto 18px" onclick="speak(\'' + esc(ex.audioText || '') + '\')">🔊 Écouter</button>' +
      '<p style="font-size:14px;font-weight:600;color:var(--muted)">Qu\'entends-tu ?</p></div>' +
      '<div style="display:grid;gap:8px">' +
      sh.options.map(function(o, i){
        return '<button class="quiz-option ar" style="text-align:center;font-size:22px" onclick="MadinahScreen._answerQCM(' + i + ')">' + o + '</button>';
      }).join('') + '</div>';
  },

  _renderTF: function(ex){
    return '<div class="card" style="padding:28px 20px;text-align:center">' +
      (ex.ar ? '<p class="ar" style="font-size:32px;color:var(--primary);line-height:1.8">' + ex.ar + '</p>' : '') +
      '<p style="font-size:16px;font-weight:700;margin-top:14px">' + ex.q + '</p></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
      '<button class="btn" style="background:var(--success)" onclick="MadinahScreen._answerTF(true)">✅ Vrai</button>' +
      '<button class="btn" style="background:var(--danger)" onclick="MadinahScreen._answerTF(false)">❌ Faux</button></div>';
  },

  _renderType: function(ex){
    return '<div class="card" style="padding:24px 20px;text-align:center">' +
      '<p style="font-size:16px;font-weight:700;margin-bottom:12px">' + ex.q + '</p>' +
      (ex.hint ? '<p class="muted" style="font-size:13px;margin-bottom:14px">💡 ' + ex.hint + '</p>' : '') +
      '<input id="typeInput" type="text" dir="rtl" autocomplete="off" autocorrect="off" spellcheck="false" ' +
      'style="width:100%;padding:14px;border:2px solid var(--primary);border-radius:12px;font-size:24px;' +
      'font-family:\'Traditional Arabic\',serif;text-align:center;background:var(--card);color:var(--text)" ' +
      'placeholder="Écris en arabe…"></div>' +
      '<div style="display:grid;gap:10px">' +
      '<button class="btn" onclick="MadinahScreen._answerType()">✅ Valider</button>' +
      '<button class="btn secondary" onclick="MadinahScreen._skipType()">⏭️ Passer</button></div>';
  },

  _renderOrder: function(ex){
    return '<div class="card" style="padding:20px;text-align:center">' +
      '<p style="font-size:14px;font-weight:700;color:var(--muted);margin-bottom:12px">' + ex.q + '</p>' +
      '<div id="orderSlot" style="min-height:70px;background:#e6eeea;border-radius:12px;padding:12px;' +
      'font-size:22px;font-family:\'Traditional Arabic\',serif;direction:rtl;line-height:1.6;' +
      'display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:center"></div></div>' +
      '<div id="orderPool" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:14px"></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
      '<button class="btn secondary" onclick="MadinahScreen._resetOrder()">🔄 Effacer</button>' +
      '<button class="btn" onclick="MadinahScreen._answerOrder()">✅ Valider</button></div>';
  },

  /* ============ RÉPONSES ============ */

  /* CORRECTION 4 : QCM utilise l'index mélangé */
  _answerQCM: function(i){
    var s = this._currentEx;
    var ex = s.list[s.idx];
    var correct = (ex._shuffled && ex._shuffled.correct !== undefined) ? ex._shuffled.correct : ex.correct;
    var btns = document.querySelectorAll('.quiz-option');
    for (var k = 0; k < btns.length; k++){
      btns[k].disabled = true;
      if (k === correct) btns[k].classList.add('correct');
      else if (k === i) btns[k].classList.add('wrong');
    }
    if (i === correct){ s.score++; toast('✅ Correct !'); } else toast('❌ Mauvaise réponse');
    var self = this;
    setTimeout(function(){ s.idx++; self._renderExercise(); }, 1200);
  },

  _answerTF: function(val){
    var s = this._currentEx;
    var ex = s.list[s.idx];
    var correct = ex.correct;
    var allBtns = document.querySelectorAll('button.btn');
    for (var k = 0; k < allBtns.length; k++) allBtns[k].disabled = true;
    if (val === correct){ s.score++; toast('✅ Correct !'); }
    else {
      toast('❌ Faux — c\'était ' + (correct ? 'Vrai' : 'Faux'));
      if (ex.explain) setTimeout(function(){ toast('💡 ' + ex.explain); }, 1500);
    }
    var self = this;
    setTimeout(function(){ s.idx++; self._renderExercise(); }, 1600);
  },

  _answerType: function(){
    var s = this._currentEx;
    var ex = s.list[s.idx];
    var input = document.getElementById('typeInput');
    if (!input) return;
    var val = input.value;
    var ok = this._normalizeArabic(val) === this._normalizeArabic(ex.answer);
    input.disabled = true;
    input.style.borderColor = ok ? 'var(--success)' : 'var(--danger)';
    input.style.background = ok ? '#e8f5e9' : '#ffebee';
    if (ok){ s.score++; toast('✅ Correct !'); } else toast('❌ Réponse : ' + ex.answer);
    var self = this;
    setTimeout(function(){ s.idx++; self._renderExercise(); }, 1700);
  },

  _skipType: function(){
    var s = this._currentEx;
    var ex = s.list[s.idx];
    toast('Réponse : ' + ex.answer);
    var self = this;
    setTimeout(function(){ s.idx++; self._renderExercise(); }, 1500);
  },

  _resetOrder: function(){
    var s = this._currentEx;
    var ex = s.list[s.idx];
    s.state = { selected: [], remaining: ex.words.slice() };
    this._refreshOrder();
  },

  _refreshOrder: function(){
    var s = this._currentEx;
    var st = s.state;
    var slot = document.getElementById('orderSlot');
    var pool = document.getElementById('orderPool');
    if (!slot || !pool) return;
    var slotHTML = '';
    for (var i = 0; i < st.selected.length; i++){
      slotHTML += '<span style="display:inline-block;padding:6px 12px;background:#fff;border-radius:8px;cursor:pointer;' +
        'box-shadow:0 2px 6px rgba(0,0,0,.1)" onclick="MadinahScreen._removeFromOrder(' + i + ')">' + st.selected[i] + '</span>';
    }
    slot.innerHTML = slotHTML || '<span style="opacity:.4;font-family:-apple-system,sans-serif;font-size:14px">Touche les mots ci-dessous…</span>';
    var poolHTML = '';
    for (var j = 0; j < st.remaining.length; j++){
      poolHTML += '<button class="btn secondary" style="width:auto;padding:10px 18px;font-size:20px;' +
        'font-family:\'Traditional Arabic\',serif;direction:rtl" onclick="MadinahScreen._addToOrder(' + j + ')">' + st.remaining[j] + '</button>';
    }
    pool.innerHTML = poolHTML;
  },

  _addToOrder: function(idx){
    var s = this._currentEx; var st = s.state;
    st.selected.push(st.remaining[idx]);
    st.remaining.splice(idx, 1);
    this._refreshOrder();
  },

  _removeFromOrder: function(idx){
    var s = this._currentEx; var st = s.state;
    st.remaining.push(st.selected[idx]);
    st.selected.splice(idx, 1);
    this._refreshOrder();
  },

  _answerOrder: function(){
    var s = this._currentEx;
    var ex = s.list[s.idx];
    var st = s.state;
    if (!st.selected.length) return;
    var userAnswer = st.selected.join(' ');
    var correct = this._normalizeArabic(userAnswer) === this._normalizeArabic(ex.answer);
    if (correct){ s.score++; toast('✅ Correct !'); } else toast('❌ Réponse : ' + ex.answer);
    var self = this;
    setTimeout(function(){ s.idx++; self._renderExercise(); }, 1700);
  },

  _normalizeArabic: function(str){
    if (!str) return '';
    var s = String(str).replace(/[\u064B-\u0652\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]/g, '');
    s = s.replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ـ/g, '');
    s = s.replace(/\s+/g, ' ').trim();
    return s;
  },

  _endExercises: function(){
    var s = this._currentEx;
    var pct = Math.round((s.score / s.list.length) * 100);
    var em = pct >= 80 ? '🏆' : (pct >= 50 ? '👍' : '💪');
    var h = '<div class="empty" style="padding-top:60px"><div class="big">' + em + '</div>' +
      '<h2>Exercices terminés</h2>' +
      '<div class="stat-grid" style="margin-top:24px">' +
      '<div class="stat"><div class="num">' + s.score + '/' + s.list.length + '</div><div class="lbl">Score</div></div>' +
      '<div class="stat"><div class="num">' + pct + '%</div><div class="lbl">Réussite</div></div></div>' +
      '<button class="btn" style="margin-bottom:10px" onclick="MadinahScreen.exercises(\'' + s.tome + '\',\'' + s.lesson + '\')">Rejouer</button>' +
      '<button class="btn secondary" onclick="MadinahScreen.lesson(\'' + s.tome + '\',\'' + s.lesson + '\')">Retour leçon</button></div>';
    document.getElementById('app').innerHTML = h;
  },

  /* ============ UTILITAIRES ============ */
  showPdf: function(name){
    if (!name){ toast('📄 PDF non disponible'); return; }
    toast('📄 PDF : ' + name);
  },

  _findTome: function(id){
    for (var i = 0; i < TOMES.length; i++) if (TOMES[i].id === id) return TOMES[i];
    return null;
  },

  _findLesson: function(tome, id){
    for (var i = 0; i < tome.lessons.length; i++) if (tome.lessons[i].id === id) return tome.lessons[i];
    return null;
  },

  _getLesson: function(tomeId, lessonId){
    var t = this._findTome(tomeId);
    if (!t) return null;
    return this._findLesson(t, lessonId);
  },

  _notAvailable: function(){
    document.getElementById('app').innerHTML =
      '<button class="back" onclick="MadinahScreen.home()">← Tomes</button>' +
      '<div class="empty"><div class="big">📝</div>' +
      '<h2>Contenu à venir</h2>' +
      '<p style="margin-top:8px">Cette section sera bientôt disponible.</p>' +
      '<button class="btn" style="margin-top:20px" onclick="MadinahScreen.home()">Retour</button></div>';
  }
};

window.MadinahScreen = MadinahScreen;

})();