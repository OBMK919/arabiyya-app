/* ============================================================
   MADINAH — Tomes de Médine (Version 5.0)
   Contenu enrichi · 23 leçons · 40-50 mots/leçon
   Sources : méthode du Dr. V. Abdur Rahim
   Crédits : Université Islamique de Médine
   ============================================================ */
(function(){
"use strict";

/* ---------- Échappement local ---------- */
function esc(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/* ============================================================
   DONNÉES : TOMES → LEÇONS → CONTENU
   ============================================================ */
var TOMES = [
  {
    id:"t1", num:1, title:"Tome 1",
    subtitle:"Bases de la lecture et de la grammaire",
    desc:"23 leçons · Du débutant à la phrase simple",
    active:true,
    pdf:"COURS D'ARABE TOME 1 DE MEDINE.pdf",
    lessons:[

    /* ===== LEÇON 1 ===== */
    {id:"t1l1", num:1, title:"Leçon 1", desc:"هَذَا (Ceci) · Objets de la maison",
     active:true, audio:"assets/audio/madinah/tome1/L01.mp3",
     text:["هَذَا بَيْتٌ","هَذَا مَسْجِدٌ","هَذَا بَابٌ","هَذَا كِتَابٌ","هَذَا قَلَمٌ",
           "هَذَا مِفْتَاحٌ","هَذَا مَكْتَبٌ","هَذَا سَرِيرٌ","هَذَا كُرْسِيٌّ","هَذَا نَافِذَةٌ",
           "هَذَا حَائِطٌ","هَذَا سَقْفٌ","هَذَا أَرْضٌ","هَذَا كُوبٌ","هَذَا مِصْبَاحٌ"],
     vocab:[
       {ar:"هَذَا",fr:"Ceci (masc.)",tr:"hādhā"},
       {ar:"بَيْتٌ",fr:"Maison",tr:"bayt"},
       {ar:"مَسْجِدٌ",fr:"Mosquée",tr:"masjid"},
       {ar:"مَدْرَسَةٌ",fr:"École",tr:"madrasa"},
       {ar:"بَابٌ",fr:"Porte",tr:"bāb"},
       {ar:"نَافِذَةٌ",fr:"Fenêtre",tr:"nāfidha"},
       {ar:"كِتَابٌ",fr:"Livre",tr:"kitāb"},
       {ar:"قَلَمٌ",fr:"Stylo",tr:"qalam"},
       {ar:"دَفْتَرٌ",fr:"Cahier",tr:"daftar"},
       {ar:"مِمْحَاةٌ",fr:"Gomme",tr:"mimḥā"},
       {ar:"مِسْطَرَةٌ",fr:"Règle",tr:"misṭara"},
       {ar:"مِفْتَاحٌ",fr:"Clé",tr:"miftāḥ"},
       {ar:"مَكْتَبٌ",fr:"Bureau (meuble)",tr:"maktab"},
       {ar:"طَاوِلَةٌ",fr:"Table",tr:"ṭāwila"},
       {ar:"سَرِيرٌ",fr:"Lit",tr:"sarīr"},
       {ar:"كُرْسِيٌّ",fr:"Chaise",tr:"kursī"},
       {ar:"وِسَادَةٌ",fr:"Oreiller",tr:"wisāda"},
       {ar:"بِطَانِيَّةٌ",fr:"Couverture",tr:"biṭāniyya"},
       {ar:"سَجَّادَةٌ",fr:"Tapis",tr:"sajjāda"},
       {ar:"حَائِطٌ",fr:"Mur",tr:"ḥāʾiṭ"},
       {ar:"سَقْفٌ",fr:"Plafond",tr:"saqf"},
       {ar:"أَرْضٌ",fr:"Sol / Terre",tr:"arḍ"},
       {ar:"كُوبٌ",fr:"Verre",tr:"kūb"},
       {ar:"فِنْجَانٌ",fr:"Tasse",tr:"finjān"},
       {ar:"إِبْرِيقٌ",fr:"Théière",tr:"ibrīq"},
       {ar:"مِصْبَاحٌ",fr:"Lampe",tr:"miṣbāḥ"},
       {ar:"مِرْآةٌ",fr:"Miroir",tr:"mirʾā"},
       {ar:"سَاعَةٌ",fr:"Montre / Heure",tr:"sāʿa"},
       {ar:"هَاتِفٌ",fr:"Téléphone",tr:"hātif"},
       {ar:"تِلْفَازٌ",fr:"Télévision",tr:"tilfāz"},
       {ar:"ثَلَّاجَةٌ",fr:"Réfrigérateur",tr:"thallāja"},
       {ar:"مِكْوَاةٌ",fr:"Fer à repasser",tr:"mikwāh"},
       {ar:"مِكْنَسَةٌ",fr:"Balai",tr:"miknasa"},
       {ar:"سِلَّةٌ",fr:"Corbeille",tr:"silla"},
       {ar:"مِظَلَّةٌ",fr:"Parapluie",tr:"miẓalla"},
       {ar:"حَقِيبَةٌ",fr:"Sac",tr:"ḥaqība"},
       {ar:"مِحْفَظَةٌ",fr:"Portefeuille",tr:"miḥfaẓa"},
       {ar:"مِفْتَاحٌ صَغِيرٌ",fr:"Petite clé",tr:"miftāḥ ṣaghīr"},
       {ar:"وَرَقٌ",fr:"Papier",tr:"waraq"},
       {ar:"مَا؟",fr:"Quoi ?",tr:"mā?"},
       {ar:"أَ؟",fr:"Est-ce que ?",tr:"a?"},
       {ar:"نَعَمْ",fr:"Oui",tr:"naʿam"},
       {ar:"لَا",fr:"Non",tr:"lā"}
     ],
     grammar:{title:"La phrase nominale (الْجُمْلَة الاِسْمِيَّة)",
       rule:"En arabe, une phrase simple se compose d'un sujet (مُبْتَدَأ) et d'un attribut (خَبَر), sans verbe « être ». Exemple : هَذَا بَيْتٌ = « ceci maison » = c'est une maison.",
       examples:["هَذَا كِتَابٌ = C'est un livre","هَذَا مَسْجِدٌ = C'est une mosquée","هَذَا قَلَمٌ = C'est un stylo","هَذَا بَابٌ كَبِيرٌ = C'est une grande porte"]},
     dialogue:[
       {sp:"A",ar:"السَّلَامُ عَلَيْكُمْ.",fr:"Bonjour (paix sur vous)."},
       {sp:"B",ar:"وَعَلَيْكُمُ السَّلَامُ.",fr:"Bonjour (à vous aussi)."},
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا بَيْتٌ.",fr:"C'est une maison."},
       {sp:"A",ar:"أَهَذَا مَسْجِدٌ؟",fr:"Est-ce que c'est une mosquée ?"},
       {sp:"B",ar:"نَعَمْ، هَذَا مَسْجِدٌ.",fr:"Oui, c'est une mosquée."},
       {sp:"A",ar:"أَهَذَا كِتَابٌ؟",fr:"Est-ce que c'est un livre ?"},
       {sp:"B",ar:"لَا، هَذَا قَلَمٌ.",fr:"Non, c'est un stylo."},
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا مِفْتَاحٌ وَهَذَا بَابٌ.",fr:"C'est une clé, et c'est une porte."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire هَذَا ?",options:["Ceci (masc.)","Cela","Où ?","Quoi ?"],correct:0},
       {type:"qcm",q:"Comment dit-on « une maison » ?",options:["بَيْتٌ","مَسْجِدٌ","بَابٌ","كِتَابٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « une mosquée » ?",options:["مَسْجِدٌ","بَيْتٌ","نَافِذَةٌ","قَلَمٌ"],correct:0},
       {type:"qcm",q:"Que veut dire قَلَمٌ ?",options:["Un stylo","Un livre","Une clé","Un lit"],correct:0},
       {type:"qcm",q:"Que veut dire كُرْسِيٌّ ?",options:["Chaise","Lit","Bureau","Table"],correct:0},
       {type:"qcm",q:"Comment dit-on « fenêtre » ?",options:["نَافِذَةٌ","بَابٌ","حَائِطٌ","سَقْفٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « lampe » ?",options:["مِصْبَاحٌ","سَرِيرٌ","مِرْآةٌ","كُوبٌ"],correct:0},
       {type:"qcm",q:"Que veut dire سَاعَةٌ ?",options:["Montre / Heure","Téléphone","Chaise","Verre"],correct:0},
       {type:"qcm",q:"Comment dit-on « cahier » ?",options:["دَفْتَرٌ","مِمْحَاةٌ","مِسْطَرَةٌ","كِتَابٌ"],correct:0},
       {type:"qcm",q:"Que veut dire ثَلَّاجَةٌ ?",options:["Réfrigérateur","Télévision","Téléphone","Montre"],correct:0},
       {type:"tf",ar:"هَذَا بَيْتٌ",q:"Signifie « Ceci est une maison »",correct:true},
       {type:"tf",ar:"هَذَا مَسْجِدٌ",q:"Signifie « Ceci est une école »",correct:false,explain:"مَسْجِدٌ = mosquée."},
       {type:"tf",ar:"هَذَا كُرْسِيٌّ",q:"Signifie « C'est une chaise »",correct:true},
       {type:"tf",ar:"هَذَا قَلَمٌ",q:"Signifie « C'est un livre »",correct:false,explain:"قَلَمٌ = stylo."},
       {type:"fill",sentence:"___ بَيْتٌ",options:["هَذَا","هَذِهِ","ذَلِكَ","تِلْكَ"],correct:0},
       {type:"fill",sentence:"هَذَا ___",options:["مَسْجِدٌ","مَسْجِدَةٌ","مَسَاجِدُ","الْمَسْجِدُ"],correct:0},
       {type:"fill",sentence:"هَذَا ___",options:["مِفْتَاحٌ","مِفْتَاحَةٌ","مَفَاتِيحُ","الْمِفْتَاحُ"],correct:0},
       {type:"fill",sentence:"هَذَا ___",options:["قَلَمٌ","قَلَمَةٌ","أَقْلَامٌ","الْقَلَمُ"],correct:0},
       {type:"type",q:"Écris « une maison » :",answer:"بَيْتٌ",hint:"3 lettres : ب ي ت"},
       {type:"type",q:"Écris « un livre » :",answer:"كِتَابٌ",hint:"4 lettres : ك ت ا ب"},
       {type:"type",q:"Écris « un stylo » :",answer:"قَلَمٌ",hint:"3 lettres : ق ل م"},
       {type:"type",q:"Écris « une chaise » :",answer:"كُرْسِيٌّ",hint:"5 lettres"},
       {type:"type",q:"Écris « une fenêtre » :",answer:"نَافِذَةٌ",hint:"ن ا ف ذ + ة"},
       {type:"type",q:"Écris « une table » :",answer:"طَاوِلَةٌ",hint:"ط ا و ل + ة"},
       {type:"order",q:"Reconstitue :",words:["بَيْتٌ","هَذَا"],answer:"هَذَا بَيْتٌ"},
       {type:"order",q:"Reconstitue :",words:["كِتَابٌ","هَذَا"],answer:"هَذَا كِتَابٌ"},
       {type:"order",q:"Reconstitue :",words:["مِفْتَاحٌ","هَذَا"],answer:"هَذَا مِفْتَاحٌ"},
       {type:"order",q:"Reconstitue :",words:["قَلَمٌ","هَذَا"],answer:"هَذَا قَلَمٌ"},
       {type:"order",q:"Reconstitue :",words:["كُرْسِيٌّ","هَذَا"],answer:"هَذَا كُرْسِيٌّ"},
       {type:"audio",audioText:"هَذَا بَيْتٌ",options:["هَذَا بَيْتٌ","هَذَا مَسْجِدٌ","هَذَا بَابٌ","هَذَا كِتَابٌ"],correct:0},
       {type:"audio",audioText:"هَذَا قَلَمٌ",options:["هَذَا كِتَابٌ","هَذَا مِفْتَاحٌ","هَذَا قَلَمٌ","هَذَا بَيْتٌ"],correct:2},
       {type:"audio",audioText:"هَذَا كُرْسِيٌّ",options:["هَذَا مَكْتَبٌ","هَذَا كُرْسِيٌّ","هَذَا سَرِيرٌ","هَذَا بَابٌ"],correct:1},
       {type:"audio",audioText:"هَذَا نَافِذَةٌ",options:["هَذَا بَابٌ","هَذَا حَائِطٌ","هَذَا نَافِذَةٌ","هَذَا سَقْفٌ"],correct:2},
       {type:"audio",audioText:"هَذَا مِفْتَاحٌ",options:["هَذَا مِفْتَاحٌ","هَذَا قَلَمٌ","هَذَا كِتَابٌ","هَذَا كُوبٌ"],correct:0}
     ]},

    /* ===== LEÇON 2 ===== */
    {id:"t1l2", num:2, title:"Leçon 2", desc:"ذَلِكَ (Cela) · Objets éloignés",
     active:true, audio:"assets/audio/madinah/tome1/L02.mp3",
     text:["ذَلِكَ بَيْتٌ","ذَلِكَ مَسْجِدٌ","ذَلِكَ بَابٌ","ذَلِكَ كِتَابٌ","ذَلِكَ قَلَمٌ",
           "ذَلِكَ مَكْتَبٌ","ذَلِكَ سَرِيرٌ","ذَلِكَ كُرْسِيٌّ","ذَلِكَ نَافِذَةٌ","ذَلِكَ جَبَلٌ",
           "تِلْكَ مَدْرَسَةٌ","تِلْكَ حَدِيقَةٌ","تِلْكَ سَيَّارَةٌ"],
     vocab:[
       {ar:"ذَلِكَ",fr:"Cela (lointain)",tr:"dhālika"},
       {ar:"تِلْكَ",fr:"Celle-là (fém. lointain)",tr:"tilka"},
       {ar:"إِمَامٌ",fr:"Imam, guide",tr:"imām"},
       {ar:"سُكَّرٌ",fr:"Sucre",tr:"sukkar"},
       {ar:"حَجَرٌ",fr:"Pierre",tr:"ḥajar"},
       {ar:"لَبَنٌ",fr:"Lait",tr:"laban"},
       {ar:"مَاءٌ",fr:"Eau",tr:"māʾ"},
       {ar:"خُبْزٌ",fr:"Pain",tr:"khubz"},
       {ar:"عَسَلٌ",fr:"Miel",tr:"ʿasal"},
       {ar:"زَيْتٌ",fr:"Huile",tr:"zayt"},
       {ar:"زَيْتُونٌ",fr:"Olive",tr:"zaytūn"},
       {ar:"تُفَّاحٌ",fr:"Pomme",tr:"tuffāḥ"},
       {ar:"مَوْزٌ",fr:"Banane",tr:"mawz"},
       {ar:"بُرْتُقَالٌ",fr:"Orange (fruit)",tr:"burtuqāl"},
       {ar:"عِنَبٌ",fr:"Raisin",tr:"ʿinab"},
       {ar:"تِينٌ",fr:"Figue",tr:"tīn"},
       {ar:"تَمْرٌ",fr:"Datte",tr:"tamr"},
       {ar:"رُمَّانٌ",fr:"Grenade",tr:"rummān"},
       {ar:"بَطِّيخٌ",fr:"Pastèque",tr:"baṭṭīkh"},
       {ar:"فَرَاوِلَةٌ",fr:"Fraise",tr:"farāwila"},
       {ar:"لَيْمُونٌ",fr:"Citron",tr:"laymūn"},
       {ar:"جَزَرٌ",fr:"Carotte",tr:"jazar"},
       {ar:"بَصَلٌ",fr:"Oignon",tr:"baṣal"},
       {ar:"ثُومٌ",fr:"Ail",tr:"thūm"},
       {ar:"بَطَاطِسٌ",fr:"Pomme de terre",tr:"baṭāṭis"},
       {ar:"طَمَاطِمٌ",fr:"Tomate",tr:"ṭamāṭim"},
       {ar:"خِيَارٌ",fr:"Concombre",tr:"khiyār"},
       {ar:"جَبَلٌ",fr:"Montagne",tr:"jabal"},
       {ar:"نَهْرٌ",fr:"Rivière",tr:"nahr"},
       {ar:"بَحْرٌ",fr:"Mer",tr:"baḥr"},
       {ar:"شَجَرَةٌ",fr:"Arbre",tr:"shajara"},
       {ar:"زَهْرَةٌ",fr:"Fleur",tr:"zahra"},
       {ar:"طَائِرٌ",fr:"Oiseau",tr:"ṭāʾir"},
       {ar:"سَمَكٌ",fr:"Poisson",tr:"samak"},
       {ar:"قِطٌّ",fr:"Chat",tr:"qiṭṭ"},
       {ar:"كَلْبٌ",fr:"Chien",tr:"kalb"},
       {ar:"حِمَارٌ",fr:"Âne",tr:"ḥimār"},
       {ar:"حِصَانٌ",fr:"Cheval",tr:"ḥiṣān"},
       {ar:"بَقَرَةٌ",fr:"Vache",tr:"baqara"},
       {ar:"خَرُوفٌ",fr:"Mouton",tr:"kharūf"},
       {ar:"دَجَاجَةٌ",fr:"Poule",tr:"dajāja"},
       {ar:"وَ",fr:"Et",tr:"wa"},
       {ar:"أَوْ",fr:"Ou",tr:"aw"}
     ],
     grammar:{title:"Les démonstratifs (أَسْمَاء الإِشَارَة)",
       rule:"Pour le lointain : ذَلِكَ (masc.) et تِلْكَ (fém.). Le tanwin (double voyelle) marque l'indéfini.",
       examples:["ذَلِكَ كِتَابٌ = C'est un livre (là-bas)","تِلْكَ مَدْرَسَةٌ = C'est une école (là-bas)","هَذَا قَلَمٌ وَذَلِكَ مِفْتَاحٌ = Ceci est un stylo et cela est une clé"]},
     dialogue:[
       {sp:"A",ar:"مَا ذَلِكَ؟",fr:"Qu'est-ce que cela ?"},
       {sp:"B",ar:"ذَلِكَ كِتَابٌ.",fr:"C'est un livre."},
       {sp:"A",ar:"أَذَلِكَ مَسْجِدٌ؟",fr:"Est-ce que cela est une mosquée ?"},
       {sp:"B",ar:"نَعَمْ، ذَلِكَ مَسْجِدٌ.",fr:"Oui, c'est une mosquée."},
       {sp:"A",ar:"وَمَا هَذَا؟",fr:"Et qu'est-ce que ceci ?"},
       {sp:"B",ar:"هَذَا قَلَمٌ.",fr:"C'est un stylo."},
       {sp:"A",ar:"أَهَذَا مِفْتَاحٌ؟",fr:"Est-ce une clé ?"},
       {sp:"B",ar:"لَا، هَذَا قَلَمٌ وَذَلِكَ مِفْتَاحٌ.",fr:"Non, ceci est un stylo et cela est une clé."},
       {sp:"A",ar:"مَا تِلْكَ؟",fr:"Qu'est-ce que celle-là ?"},
       {sp:"B",ar:"تِلْكَ مَدْرَسَةٌ.",fr:"C'est une école."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire ذَلِكَ ?",options:["Cela (lointain)","Ceci (proche)","Où ?","Qui ?"],correct:0},
       {type:"qcm",q:"Que veut dire تِلْكَ ?",options:["Celle-là (fém.)","Celui-là (masc.)","Ceci","Quoi"],correct:0},
       {type:"qcm",q:"Que veut dire لَبَنٌ ?",options:["Lait","Sucre","Pierre","Imam"],correct:0},
       {type:"qcm",q:"Comment dit-on « eau » ?",options:["مَاءٌ","لَبَنٌ","خُبْزٌ","حَجَرٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « pain » ?",options:["خُبْزٌ","مَاءٌ","تُفَّاحٌ","عَسَلٌ"],correct:0},
       {type:"qcm",q:"Que veut dire تُفَّاحٌ ?",options:["Pomme","Banane","Orange","Raisin"],correct:0},
       {type:"qcm",q:"Comment dit-on « datte » ?",options:["تَمْرٌ","تِينٌ","عِنَبٌ","مَوْزٌ"],correct:0},
       {type:"qcm",q:"Que veut dire عَسَلٌ ?",options:["Miel","Huile","Lait","Sucre"],correct:0},
       {type:"qcm",q:"Comment dit-on « montagne » ?",options:["جَبَلٌ","نَهْرٌ","بَحْرٌ","شَجَرَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire طَائِرٌ ?",options:["Oiseau","Poisson","Chat","Chien"],correct:0},
       {type:"tf",ar:"ذَلِكَ كِتَابٌ",q:"Signifie « Cela est un livre »",correct:true},
       {type:"tf",ar:"تِلْكَ مَدْرَسَةٌ",q:"Signifie « Celle-là est une école »",correct:true},
       {type:"tf",q:"ذَلِكَ est utilisé pour un objet proche",correct:false,explain:"Non, ذَلِكَ = lointain."},
       {type:"tf",ar:"تِلْكَ حَدِيقَةٌ",q:"Signifie « Celle-là est un jardin »",correct:true},
       {type:"fill",sentence:"___ بَيْتٌ",options:["ذَلِكَ","هَذَا","تِلْكَ","هَذِهِ"],correct:0},
       {type:"fill",sentence:"هَذَا قَلَمٌ ___ ذَلِكَ مِفْتَاحٌ",options:["وَ","أَوْ","مَا","هَذَا"],correct:0},
       {type:"fill",sentence:"___ مَدْرَسَةٌ",options:["تِلْكَ","ذَلِكَ","هَذَا","أُولَئِكَ"],correct:0},
       {type:"type",q:"Écris « cela » (masc.) :",answer:"ذَلِكَ",hint:"3 lettres"},
       {type:"type",q:"Écris « du lait » :",answer:"لَبَنٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « de l'eau » :",answer:"مَاءٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « du pain » :",answer:"خُبْزٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « montagne » :",answer:"جَبَلٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « miel » :",answer:"عَسَلٌ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["كِتَابٌ","ذَلِكَ"],answer:"ذَلِكَ كِتَابٌ"},
       {type:"order",q:"Reconstitue :",words:["مَسْجِدٌ","ذَلِكَ"],answer:"ذَلِكَ مَسْجِدٌ"},
       {type:"order",q:"Reconstitue :",words:["قَلَمٌ","وَ","هَذَا","مِفْتَاحٌ","ذَلِكَ"],answer:"هَذَا قَلَمٌ وَذَلِكَ مِفْتَاحٌ"},
       {type:"order",q:"Reconstitue :",words:["مَدْرَسَةٌ","تِلْكَ"],answer:"تِلْكَ مَدْرَسَةٌ"},
       {type:"order",q:"Reconstitue :",words:["حَدِيقَةٌ","تِلْكَ"],answer:"تِلْكَ حَدِيقَةٌ"},
       {type:"audio",audioText:"ذَلِكَ بَيْتٌ",options:["ذَلِكَ بَيْتٌ","ذَلِكَ مَسْجِدٌ","هَذَا بَيْتٌ","ذَلِكَ كِتَابٌ"],correct:0},
       {type:"audio",audioText:"ذَلِكَ لَبَنٌ",options:["ذَلِكَ مَاءٌ","ذَلِكَ لَبَنٌ","هَذَا لَبَنٌ","ذَلِكَ خُبْزٌ"],correct:1},
       {type:"audio",audioText:"تِلْكَ مَدْرَسَةٌ",options:["تِلْكَ مَسْجِدٌ","هَذِهِ مَدْرَسَةٌ","تِلْكَ مَدْرَسَةٌ","تِلْكَ حَدِيقَةٌ"],correct:2},
       {type:"audio",audioText:"ذَلِكَ جَبَلٌ",options:["ذَلِكَ نَهْرٌ","ذَلِكَ بَحْرٌ","ذَلِكَ جَبَلٌ","ذَلِكَ شَجَرَةٌ"],correct:2},
       {type:"audio",audioText:"تِلْكَ حَدِيقَةٌ",options:["تِلْكَ حَدِيقَةٌ","تِلْكَ مَدْرَسَةٌ","هَذِهِ حَدِيقَةٌ","تِلْكَ سَيَّارَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 3 ===== */
    {id:"t1l3", num:3, title:"Leçon 3", desc:"L'article défini ال",
     active:true, audio:"assets/audio/madinah/tome1/L03.mp3",
     text:["الْبَيْتُ جَدِيدٌ","الْمَسْجِدُ كَبِيرٌ","الْبَابُ مَفْتُوحٌ","الْكِتَابُ جَدِيدٌ",
           "الْقَلَمُ صَغِيرٌ","الطَّالِبُ مُجْتَهِدٌ","الْبِنْتُ جَمِيلَةٌ","الرَّجُلُ طَوِيلٌ",
           "الشَّمْسُ مُشْرِقَةٌ","الْقَمَرُ مُنِيرٌ"],
     vocab:[
       {ar:"ثَقِيلٌ",fr:"Lourd",tr:"thaqīl"},
       {ar:"خَفِيفٌ",fr:"Léger",tr:"khafīf"},
       {ar:"نَظِيفٌ",fr:"Propre",tr:"naẓīf"},
       {ar:"وَسِخٌ",fr:"Sale",tr:"wasikh"},
       {ar:"فَقِيرٌ",fr:"Pauvre",tr:"faqīr"},
       {ar:"غَنِيٌّ",fr:"Riche",tr:"ghaniyy"},
       {ar:"حُلْوٌ",fr:"Doux / Beau",tr:"ḥulw"},
       {ar:"مُرٌّ",fr:"Amer",tr:"murr"},
       {ar:"مَالِحٌ",fr:"Salé",tr:"māliḥ"},
       {ar:"حَامِضٌ",fr:"Acide",tr:"ḥāmiḍ"},
       {ar:"مَرِيضٌ",fr:"Malade",tr:"marīḍ"},
       {ar:"صَحِيحٌ",fr:"En bonne santé",tr:"ṣaḥīḥ"},
       {ar:"كَبِيرٌ",fr:"Grand",tr:"kabīr"},
       {ar:"صَغِيرٌ",fr:"Petit",tr:"ṣaghīr"},
       {ar:"جَدِيدٌ",fr:"Nouveau",tr:"jadīd"},
       {ar:"قَدِيمٌ",fr:"Vieux",tr:"qadīm"},
       {ar:"مَفْتُوحٌ",fr:"Ouvert",tr:"maftūḥ"},
       {ar:"مُغْلَقٌ",fr:"Fermé",tr:"mughlaq"},
       {ar:"جَمِيلٌ",fr:"Beau",tr:"jamīl"},
       {ar:"قَبِيحٌ",fr:"Laid",tr:"qabīḥ"},
       {ar:"طَوِيلٌ",fr:"Long / Grand",tr:"ṭawīl"},
       {ar:"قَصِيرٌ",fr:"Court / Petit",tr:"qaṣīr"},
       {ar:"سَعِيدٌ",fr:"Heureux",tr:"saʿīd"},
       {ar:"حَزِينٌ",fr:"Triste",tr:"ḥazīn"},
       {ar:"مُجْتَهِدٌ",fr:"Travailleur",tr:"mujtahid"},
       {ar:"كَسُولٌ",fr:"Paresseux",tr:"kasūl"},
       {ar:"سَرِيعٌ",fr:"Rapide",tr:"sarīʿ"},
       {ar:"بَطِيءٌ",fr:"Lent",tr:"baṭīʾ"},
       {ar:"قَوِيٌّ",fr:"Fort",tr:"qawiyy"},
       {ar:"ضَعِيفٌ",fr:"Faible",tr:"ḍaʿīf"},
       {ar:"شَابٌّ",fr:"Jeune",tr:"shābb"},
       {ar:"عَجُوزٌ",fr:"Vieux (personne)",tr:"ʿajūz"},
       {ar:"ذَكِيٌّ",fr:"Intelligent",tr:"dhakiyy"},
       {ar:"غَبِيٌّ",fr:"Bête",tr:"ghabiyy"},
       {ar:"كَرِيمٌ",fr:"Généreux",tr:"karīm"},
       {ar:"بَخِيلٌ",fr:"Avare",tr:"bakhīl"},
       {ar:"شُجَاعٌ",fr:"Courageux",tr:"shujāʿ"},
       {ar:"جَبَانٌ",fr:"Peureux",tr:"jabān"},
       {ar:"صَادِقٌ",fr:"Véridique",tr:"ṣādiq"},
       {ar:"كَاذِبٌ",fr:"Menteur",tr:"kādhib"},
       {ar:"الطَّالِبُ",fr:"L'étudiant",tr:"aṭ-ṭālib"},
       {ar:"الْبِنْتُ",fr:"La fille",tr:"al-bint"},
       {ar:"الرَّجُلُ",fr:"L'homme",tr:"ar-rajul"},
       {ar:"الشَّمْسُ",fr:"Le soleil",tr:"ash-shams"},
       {ar:"الْقَمَرُ",fr:"La lune",tr:"al-qamar"}
     ],
     grammar:{title:"L'article défini ال et les lettres solaires/lunaires",
       rule:"ال rend le nom défini. Elle s'assimile devant les lettres solaires (ش، س، ر، ت، ط، ن، ل، د، ذ، ز، ص، ض، ث، ظ) et reste normale devant les lettres lunaires (ا، ب، ج، ح، خ، ع، غ، ف، ق، ك، م، ه، و، ي).",
       examples:["بَيْتٌ → الْبَيْتُ","شَمْسٌ → الشَّمْسُ","قَمَرٌ → الْقَمَرُ","الْبَيْتُ جَدِيدٌ = La maison est nouvelle"]},
     dialogue:[
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا الْبَيْتُ.",fr:"C'est la maison."},
       {sp:"A",ar:"أَهُوَ جَدِيدٌ؟",fr:"Est-elle nouvelle ?"},
       {sp:"B",ar:"نَعَمْ، هُوَ جَدِيدٌ.",fr:"Oui, elle est nouvelle."},
       {sp:"A",ar:"وَمَا ذَلِكَ؟",fr:"Et qu'est-ce que cela ?"},
       {sp:"B",ar:"ذَلِكَ الْمَسْجِدُ الْكَبِيرُ.",fr:"C'est la grande mosquée."},
       {sp:"A",ar:"أَهُوَ قَدِيمٌ؟",fr:"Est-elle vieille ?"},
       {sp:"B",ar:"لَا، هُوَ جَدِيدٌ.",fr:"Non, elle est nouvelle."},
       {sp:"A",ar:"وَالْقَمَرُ؟",fr:"Et la lune ?"},
       {sp:"B",ar:"الْقَمَرُ مُنِيرٌ.",fr:"La lune est lumineuse."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire ثَقِيلٌ ?",options:["Lourd","Léger","Propre","Sale"],correct:0},
       {type:"qcm",q:"Comment dit-on « propre » ?",options:["نَظِيفٌ","وَسِخٌ","فَقِيرٌ","غَنِيٌّ"],correct:0},
       {type:"qcm",q:"Que veut dire خَفِيفٌ ?",options:["Léger","Lourd","Propre","Sale"],correct:0},
       {type:"qcm",q:"Que veut dire غَنِيٌّ ?",options:["Riche","Pauvre","Grand","Petit"],correct:0},
       {type:"qcm",q:"Comment dit-on « nouveau » ?",options:["جَدِيدٌ","قَدِيمٌ","كَبِيرٌ","صَغِيرٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « laid » ?",options:["قَبِيحٌ","جَمِيلٌ","حُلْوٌ","سَعِيدٌ"],correct:0},
       {type:"qcm",q:"Que veut dire مُجْتَهِدٌ ?",options:["Travailleur","Paresseux","Heureux","Triste"],correct:0},
       {type:"qcm",q:"Comment dit-on « rapide » ?",options:["سَرِيعٌ","بَطِيءٌ","طَوِيلٌ","قَصِيرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire قَوِيٌّ ?",options:["Fort","Faible","Grand","Petit"],correct:0},
       {type:"qcm",q:"Quel est l'article défini ?",options:["ال","وَ","مَا","هَذَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « intelligent » ?",options:["ذَكِيٌّ","غَبِيٌّ","كَسُولٌ","مُجْتَهِدٌ"],correct:0},
       {type:"qcm",q:"Que veut dire شُجَاعٌ ?",options:["Courageux","Peureux","Menteur","Véridique"],correct:0},
       {type:"tf",ar:"الْبَيْتُ جَدِيدٌ",q:"Signifie « La maison est nouvelle »",correct:true},
       {type:"tf",ar:"الْبَابُ مَفْتُوحٌ",q:"Signifie « La porte est fermée »",correct:false,explain:"مَفْتُوحٌ = ouverte."},
       {type:"tf",ar:"الْمَسْجِدُ كَبِيرٌ",q:"Signifie « La mosquée est grande »",correct:true},
       {type:"tf",ar:"الْقَمَرُ مُنِيرٌ",q:"Signifie « La lune est lumineuse »",correct:true},
       {type:"fill",sentence:"___ جَدِيدٌ",options:["الْبَيْتُ","بَيْتٌ","بَيْتُ","بَيْتًا"],correct:0},
       {type:"fill",sentence:"الْمَسْجِدُ ___",options:["كَبِيرٌ","كَبِيرَةٌ","كِبَارٌ","كَبِيرَاتٌ"],correct:0},
       {type:"fill",sentence:"___ مُشْرِقَةٌ",options:["الشَّمْسُ","شَمْسٌ","شَمْسُ","شَمْسًا"],correct:0},
       {type:"type",q:"Écris « lourd » :",answer:"ثَقِيلٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « nouveau » :",answer:"جَدِيدٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « grand » :",answer:"كَبِيرٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « petit » :",answer:"صَغِيرٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « beau » :",answer:"جَمِيلٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « la lune » (avec ال) :",answer:"الْقَمَرُ",hint:"avec ال"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدٌ","الْبَيْتُ"],answer:"الْبَيْتُ جَدِيدٌ"},
       {type:"order",q:"Reconstitue :",words:["مَفْتُوحٌ","الْبَابُ"],answer:"الْبَابُ مَفْتُوحٌ"},
       {type:"order",q:"Reconstitue :",words:["كَبِيرٌ","الْمَسْجِدُ"],answer:"الْمَسْجِدُ كَبِيرٌ"},
       {type:"order",q:"Reconstitue :",words:["جَمِيلَةٌ","الْبِنْتُ"],answer:"الْبِنْتُ جَمِيلَةٌ"},
       {type:"order",q:"Reconstitue :",words:["مُنِيرٌ","الْقَمَرُ"],answer:"الْقَمَرُ مُنِيرٌ"},
       {type:"audio",audioText:"الْبَيْتُ جَدِيدٌ",options:["الْبَيْتُ جَدِيدٌ","الْبَيْتُ قَدِيمٌ","الْبَابُ جَدِيدٌ","الْمَسْجِدُ جَدِيدٌ"],correct:0},
       {type:"audio",audioText:"الْمَسْجِدُ كَبِيرٌ",options:["الْمَسْجِدُ صَغِيرٌ","الْمَسْجِدُ كَبِيرٌ","الْبَيْتُ كَبِيرٌ","الْقَلَمُ كَبِيرٌ"],correct:1},
       {type:"audio",audioText:"الْبَابُ مَفْتُوحٌ",options:["الْبَابُ مُغْلَقٌ","النَّافِذَةُ مَفْتُوحَةٌ","الْبَابُ مَفْتُوحٌ","الْبَيْتُ مَفْتُوحٌ"],correct:2},
       {type:"audio",audioText:"الْقَمَرُ مُنِيرٌ",options:["الْقَمَرُ مُنِيرٌ","الشَّمْسُ مُشْرِقَةٌ","الْقَمَرُ جَمِيلٌ","الشَّمْسُ كَبِيرَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 4 ===== */
    {id:"t1l4", num:4, title:"Leçon 4", desc:"Prépositions · فِي / عَلَى / تَحْتَ",
     active:true, audio:"assets/audio/madinah/tome1/L04.mp3",
     text:["مُحَمَّدٌ فِي الْغُرْفَةِ","الْكِتَابُ عَلَى الْمَكْتَبِ","الْمِفْتَاحُ عَلَى السَّرِيرِ",
           "السَّمَاءُ فَوْقَ الْبَيْتِ","الْقِطُّ تَحْتَ الْكُرْسِيِّ","الْقَلَمُ فِي الْحَقِيبَةِ",
           "الْبَيْتُ أَمَامَ الْمَسْجِدِ","الْحَدِيقَةُ وَرَاءَ الْبَيْتِ"],
     vocab:[
       {ar:"مِرْحَاضٌ",fr:"Toilettes",tr:"mirḥāḍ"},
       {ar:"حَمَّامٌ",fr:"Salle de bain",tr:"ḥammām"},
       {ar:"سَمَاءٌ",fr:"Ciel",tr:"samāʾ"},
       {ar:"غُرْفَةٌ",fr:"Chambre",tr:"ghurfa"},
       {ar:"صَالَةٌ",fr:"Salon",tr:"ṣāla"},
       {ar:"مَطْبَخٌ",fr:"Cuisine",tr:"maṭbakh"},
       {ar:"مَدْرَسَةٌ",fr:"École",tr:"madrasa"},
       {ar:"جَامِعَةٌ",fr:"Université",tr:"jāmiʿa"},
       {ar:"حَدِيقَةٌ",fr:"Jardin",tr:"ḥadīqa"},
       {ar:"مَكْتَبَةٌ",fr:"Bibliothèque",tr:"maktaba"},
       {ar:"مَطْعَمٌ",fr:"Restaurant",tr:"maṭʿam"},
       {ar:"مَطَارٌ",fr:"Aéroport",tr:"maṭār"},
       {ar:"مُسْتَشْفَى",fr:"Hôpital",tr:"mustashfā"},
       {ar:"مَحَطَّةٌ",fr:"Gare / Station",tr:"maḥaṭṭa"},
       {ar:"سُوقٌ",fr:"Marché",tr:"sūq"},
       {ar:"شَارِعٌ",fr:"Rue",tr:"shāriʿ"},
       {ar:"بِنَايَةٌ",fr:"Bâtiment",tr:"bināya"},
       {ar:"بُرْجٌ",fr:"Tour",tr:"burj"},
       {ar:"مَسْبَحٌ",fr:"Piscine",tr:"masbaḥ"},
       {ar:"مَلْعَبٌ",fr:"Terrain de jeu",tr:"malʿab"},
       {ar:"مَوْقِفٌ",fr:"Parking",tr:"mawqif"},
       {ar:"جِسْرٌ",fr:"Pont",tr:"jisr"},
       {ar:"مَزْرَعَةٌ",fr:"Ferme",tr:"mazraʿa"},
       {ar:"قَرْيَةٌ",fr:"Village",tr:"qarya"},
       {ar:"مَدِينَةٌ",fr:"Ville",tr:"madīna"},
       {ar:"بَلَدٌ",fr:"Pays",tr:"balad"},
       {ar:"حَقِيبَةٌ",fr:"Sac",tr:"ḥaqība"},
       {ar:"صُنْدُوقٌ",fr:"Boîte / Coffre",tr:"ṣundūq"},
       {ar:"فِي",fr:"Dans",tr:"fī"},
       {ar:"عَلَى",fr:"Sur",tr:"ʿalā"},
       {ar:"تَحْتَ",fr:"Sous",tr:"taḥta"},
       {ar:"فَوْقَ",fr:"Au-dessus",tr:"fawqa"},
       {ar:"أَمَامَ",fr:"Devant",tr:"amāma"},
       {ar:"وَرَاءَ",fr:"Derrière",tr:"warāʾa"},
       {ar:"بِجَانِبِ",fr:"À côté de",tr:"bijānibi"},
       {ar:"بَيْنَ",fr:"Entre",tr:"bayna"},
       {ar:"حَوْلَ",fr:"Autour de",tr:"ḥawla"},
       {ar:"عِنْدَ",fr:"Chez",tr:"ʿinda"},
       {ar:"مَعَ",fr:"Avec",tr:"maʿa"},
       {ar:"بِدُونِ",fr:"Sans",tr:"bidūni"},
       {ar:"أَيْنَ",fr:"Où ?",tr:"ayna"},
       {ar:"هُنَا",fr:"Ici",tr:"hunā"},
       {ar:"هُنَاكَ",fr:"Là-bas",tr:"hunāka"},
       {ar:"قُرْبَ",fr:"Près de",tr:"qurba"},
       {ar:"بَعِيدٌ",fr:"Loin",tr:"baʿīd"}
     ],
     grammar:{title:"Les prépositions de lieu",
       rule:"Les prépositions فِي (dans), عَلَى (sur), تَحْتَ (sous), فَوْقَ (au-dessus), أَمَامَ (devant), وَرَاءَ (derrière), بَيْنَ (entre) sont suivies d'un nom au génitif (majrūr, kasra finale).",
       examples:["فِي الْغُرْفَةِ","عَلَى الْمَكْتَبِ","تَحْتَ السَّرِيرِ","بَيْنَ الْبَيْتِ وَالْمَسْجِدِ"]},
     dialogue:[
       {sp:"A",ar:"أَيْنَ مُحَمَّدٌ؟",fr:"Où est Muhammad ?"},
       {sp:"B",ar:"هُوَ فِي الْغُرْفَةِ.",fr:"Il est dans la chambre."},
       {sp:"A",ar:"أَيْنَ الْكِتَابُ؟",fr:"Où est le livre ?"},
       {sp:"B",ar:"هُوَ عَلَى الْمَكْتَبِ.",fr:"Il est sur le bureau."},
       {sp:"A",ar:"أَيْنَ الْقِطُّ؟",fr:"Où est le chat ?"},
       {sp:"B",ar:"هُوَ تَحْتَ الْكُرْسِيِّ.",fr:"Il est sous la chaise."},
       {sp:"A",ar:"أَيْنَ الْقَلَمُ؟",fr:"Où est le stylo ?"},
       {sp:"B",ar:"هُوَ فِي الْحَقِيبَةِ.",fr:"Il est dans le sac."},
       {sp:"A",ar:"أَيْنَ الْبَيْتُ؟",fr:"Où est la maison ?"},
       {sp:"B",ar:"هُوَ أَمَامَ الْمَسْجِدِ.",fr:"Elle est devant la mosquée."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire فِي ?",options:["Dans","Sur","Sous","Devant"],correct:0},
       {type:"qcm",q:"Que veut dire عَلَى ?",options:["Sur","Dans","Sous","Devant"],correct:0},
       {type:"qcm",q:"Que veut dire تَحْتَ ?",options:["Sous","Sur","Au-dessus","Devant"],correct:0},
       {type:"qcm",q:"Comment dit-on « devant » ?",options:["أَمَامَ","وَرَاءَ","تَحْتَ","فَوْقَ"],correct:0},
       {type:"qcm",q:"Que veut dire غُرْفَةٌ ?",options:["Chambre","Cuisine","Toilettes","Salon"],correct:0},
       {type:"qcm",q:"Comment dit-on « cuisine » ?",options:["مَطْبَخٌ","غُرْفَةٌ","حَمَّامٌ","مِرْحَاضٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « école » ?",options:["مَدْرَسَةٌ","جَامِعَةٌ","مَكْتَبَةٌ","حَدِيقَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire مَكْتَبَةٌ ?",options:["Bibliothèque","Livre","Bureau","Marché"],correct:0},
       {type:"qcm",q:"Comment dit-on « hôpital » ?",options:["مُسْتَشْفَى","مَطَارٌ","مَحَطَّةٌ","سُوقٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « où ? »",options:["أَيْنَ","مَا","مَنْ","كَيْفَ"],correct:0},
       {type:"qcm",q:"Que veut dire سُوقٌ ?",options:["Marché","Rue","Ville","Village"],correct:0},
       {type:"qcm",q:"Comment dit-on « ville » ?",options:["مَدِينَةٌ","قَرْيَةٌ","بَلَدٌ","شَارِعٌ"],correct:0},
       {type:"tf",ar:"الْكِتَابُ عَلَى الْمَكْتَبِ",q:"Signifie « Le livre est sur le bureau »",correct:true},
       {type:"tf",ar:"الْقَلَمُ فِي الْحَقِيبَةِ",q:"Signifie « Le stylo est sur le sac »",correct:false,explain:"فِي = dans."},
       {type:"tf",ar:"الْقِطُّ تَحْتَ الْكُرْسِيِّ",q:"Signifie « Le chat est sous la chaise »",correct:true},
       {type:"tf",ar:"الْبَيْتُ أَمَامَ الْمَسْجِدِ",q:"Signifie « La maison est devant la mosquée »",correct:true},
       {type:"fill",sentence:"الْكِتَابُ ___ الْمَكْتَبِ",options:["عَلَى","فِي","مِنْ","إِلَى"],correct:0},
       {type:"fill",sentence:"الْقَلَمُ ___ الْحَقِيبَةِ",options:["فِي","عَلَى","مِنْ","إِلَى"],correct:0},
       {type:"fill",sentence:"الْقِطُّ ___ الْكُرْسِيِّ",options:["تَحْتَ","فَوْقَ","أَمَامَ","وَرَاءَ"],correct:0},
       {type:"type",q:"Écris « dans » :",answer:"فِي",hint:"2 lettres"},
       {type:"type",q:"Écris « sur » :",answer:"عَلَى",hint:"3 lettres"},
       {type:"type",q:"Écris « sous » :",answer:"تَحْتَ",hint:"3 lettres"},
       {type:"type",q:"Écris « chambre » :",answer:"غُرْفَةٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « ville » :",answer:"مَدِينَةٌ",hint:"م د ي ن + ة"},
       {type:"type",q:"Écris « hôpital » :",answer:"مُسْتَشْفَى",hint:"م س ت ش ف ى"},
       {type:"order",q:"Reconstitue :",words:["الْمَكْتَبِ","عَلَى","الْكِتَابُ"],answer:"الْكِتَابُ عَلَى الْمَكْتَبِ"},
       {type:"order",q:"Reconstitue :",words:["الْغُرْفَةِ","فِي","مُحَمَّدٌ"],answer:"مُحَمَّدٌ فِي الْغُرْفَةِ"},
       {type:"order",q:"Reconstitue :",words:["الْكُرْسِيِّ","تَحْتَ","الْقِطُّ"],answer:"الْقِطُّ تَحْتَ الْكُرْسِيِّ"},
       {type:"order",q:"Reconstitue :",words:["الْمَسْجِدِ","أَمَامَ","الْبَيْتُ"],answer:"الْبَيْتُ أَمَامَ الْمَسْجِدِ"},
       {type:"order",q:"Reconstitue :",words:["الْبَيْتِ","وَرَاءَ","الْحَدِيقَةُ"],answer:"الْحَدِيقَةُ وَرَاءَ الْبَيْتِ"},
       {type:"audio",audioText:"الْكِتَابُ عَلَى الْمَكْتَبِ",options:["الْكِتَابُ عَلَى الْمَكْتَبِ","الْكِتَابُ فِي الْمَكْتَبِ","الْقَلَمُ عَلَى الْمَكْتَبِ","الْكِتَابُ عَلَى السَّرِيرِ"],correct:0},
       {type:"audio",audioText:"الْقِطُّ تَحْتَ الْكُرْسِيِّ",options:["الْقِطُّ فَوْقَ الْكُرْسِيِّ","الْقِطُّ تَحْتَ الْكُرْسِيِّ","الْقِطُّ أَمَامَ الْكُرْسِيِّ","الْقِطُّ فِي الْكُرْسِيِّ"],correct:1},
       {type:"audio",audioText:"مُحَمَّدٌ فِي الْغُرْفَةِ",options:["مُحَمَّدٌ فِي الْغُرْفَةِ","مُحَمَّدٌ فِي الْمَطْبَخِ","مُحَمَّدٌ فِي الْمَدْرَسَةِ","مُحَمَّدٌ فِي الصَّالَةِ"],correct:0},
       {type:"audio",audioText:"الْبَيْتُ أَمَامَ الْمَسْجِدِ",options:["الْبَيْتُ وَرَاءَ الْمَسْجِدِ","الْبَيْتُ بِجَانِبِ الْمَسْجِدِ","الْبَيْتُ أَمَامَ الْمَسْجِدِ","الْبَيْتُ فِي الْمَسْجِدِ"],correct:2}
     ]},

    /* ===== LEÇON 5 ===== */
    {id:"t1l5", num:5, title:"Leçon 5", desc:"La possession · Suffixes possessifs",
     active:true, audio:"assets/audio/madinah/tome1/L05.mp3",
     text:["يَا عَلِيُّ، أَيْنَ كِتَابِي؟","هَذَا كِتَابِي","هَذَا بَيْتُكَ","هَذَا بَيْتُهُ",
           "هَذَا بَيْتُهَا","هَذِهِ أُمِّي","هَذَا أَبِي","أَيْنَ قَلَمُكَ؟",
           "أَيْنَ مَدْرَسَتُكُمْ؟"],
     vocab:[
       {ar:"يَا",fr:"Ô (vocatif)",tr:"yā"},
       {ar:"كِتَابِي",fr:"Mon livre",tr:"kitābī"},
       {ar:"كِتَابُكَ",fr:"Ton livre",tr:"kitābuka"},
       {ar:"كِتَابُهُ",fr:"Son livre (lui)",tr:"kitābuhu"},
       {ar:"كِتَابُهَا",fr:"Son livre (elle)",tr:"kitābuhā"},
       {ar:"كِتَابُنَا",fr:"Notre livre",tr:"kitābunā"},
       {ar:"كِتَابُكُمْ",fr:"Votre livre",tr:"kitābukum"},
       {ar:"كِتَابُهُمْ",fr:"Leur livre",tr:"kitābuhum"},
       {ar:"بَيْتُكَ",fr:"Ta maison",tr:"baytuka"},
       {ar:"بَيْتُهُ",fr:"Sa maison (lui)",tr:"baytuhu"},
       {ar:"بَيْتُهَا",fr:"Sa maison (elle)",tr:"baytuhā"},
       {ar:"بَيْتِي",fr:"Ma maison",tr:"baytī"},
       {ar:"قَلَمِي",fr:"Mon stylo",tr:"qalamī"},
       {ar:"قَلَمُكَ",fr:"Ton stylo",tr:"qalamuka"},
       {ar:"قَلَمُهُ",fr:"Son stylo (lui)",tr:"qalamuhu"},
       {ar:"قَلَمُهَا",fr:"Son stylo (elle)",tr:"qalamuhā"},
       {ar:"أُمِّي",fr:"Ma mère",tr:"ummī"},
       {ar:"أُمُّكَ",fr:"Ta mère",tr:"ummuka"},
       {ar:"أُمُّهُ",fr:"Sa mère (lui)",tr:"ummuhu"},
       {ar:"أُمُّهَا",fr:"Sa mère (elle)",tr:"ummuhā"},
       {ar:"أَبِي",fr:"Mon père",tr:"abī"},
       {ar:"أَبُوكَ",fr:"Ton père",tr:"abūka"},
       {ar:"أَبُوهُ",fr:"Son père (lui)",tr:"abūhu"},
       {ar:"أَخِي",fr:"Mon frère",tr:"akhī"},
       {ar:"أَخُوكَ",fr:"Ton frère",tr:"akhūka"},
       {ar:"أُخْتِي",fr:"Ma sœur",tr:"ukhtī"},
       {ar:"أُخْتُكَ",fr:"Ta sœur",tr:"ukhtuka"},
       {ar:"ابْنِي",fr:"Mon fils",tr:"ibnī"},
       {ar:"بِنْتِي",fr:"Ma fille",tr:"bintī"},
       {ar:"صَدِيقِي",fr:"Mon ami",tr:"ṣadīqī"},
       {ar:"صَدِيقُهُ",fr:"Son ami (lui)",tr:"ṣadīquhu"},
       {ar:"الْمُدَرِّسُ",fr:"Le professeur",tr:"al-mudarris"},
       {ar:"الطَّالِبُ",fr:"L'étudiant",tr:"aṭ-ṭālib"},
       {ar:"وَطَنِي",fr:"Ma patrie",tr:"waṭanī"},
       {ar:"اسْمِي",fr:"Mon nom",tr:"ismī"},
       {ar:"عُمْرِي",fr:"Mon âge",tr:"ʿumrī"},
       {ar:"عَمَلِي",fr:"Mon travail",tr:"ʿamalī"},
       {ar:"مَدْرَسَتِي",fr:"Mon école",tr:"madrasatī"},
       {ar:"مَدْرَسَتُهُ",fr:"Son école (lui)",tr:"madrasatuhu"},
       {ar:"مَدْرَسَتُهَا",fr:"Son école (elle)",tr:"madrasatuhā"},
       {ar:"بَلَدِي",fr:"Mon pays",tr:"baladī"},
       {ar:"دَارِي",fr:"Ma demeure",tr:"dārī"}
     ],
     grammar:{title:"Les pronoms possessifs suffixes",
       rule:"On ajoute un suffixe au nom : ي (mon), كَ (ton), هُ (son, à lui), هَا (sa, à elle), نَا (notre), كُمْ (votre), هُمْ (leur).",
       examples:["كِتَابٌ → كِتَابِي = mon livre","بَيْتٌ → بَيْتُكَ = ta maison","قَلَمٌ → قَلَمُهُ = son stylo","مَدْرَسَةٌ → مَدْرَسَتِي = mon école"]},
     dialogue:[
       {sp:"A",ar:"السَّلَامُ عَلَيْكُمْ يَا عَلِيُّ.",fr:"Bonjour Ali."},
       {sp:"B",ar:"وَعَلَيْكُمُ السَّلَامُ.",fr:"Bonjour."},
       {sp:"A",ar:"أَيْنَ كِتَابِي؟",fr:"Où est mon livre ?"},
       {sp:"B",ar:"هُوَ عَلَى الْمَكْتَبِ.",fr:"Il est sur le bureau."},
       {sp:"A",ar:"شُكْرًا يَا صَدِيقِي.",fr:"Merci, mon ami."},
       {sp:"B",ar:"عَفْوًا. وَأَيْنَ قَلَمُكَ؟",fr:"De rien. Et où est ton stylo ?"},
       {sp:"A",ar:"قَلَمِي فِي الْحَقِيبَةِ.",fr:"Mon stylo est dans le sac."},
       {sp:"B",ar:"وَمَا اسْمُكَ؟",fr:"Et comment t'appelles-tu ?"},
       {sp:"A",ar:"اسْمِي مُحَمَّدٌ. وَاسْمُكَ؟",fr:"Je m'appelle Muhammad. Et toi ?"},
       {sp:"B",ar:"اسْمِي عَلِيٌّ.",fr:"Je m'appelle Ali."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire يَا ?",options:["Ô (vocatif)","Et","Où","Quoi"],correct:0},
       {type:"qcm",q:"Comment dit-on « mon livre » ?",options:["كِتَابِي","كِتَابُكَ","كِتَابُهُ","كِتَابُهَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « ta maison » ?",options:["بَيْتُكَ","بَيْتِي","بَيْتُهُ","بَيْتُهَا"],correct:0},
       {type:"qcm",q:"Que veut dire بَيْتُهُ ?",options:["Sa maison (à lui)","Ma maison","Ta maison","Sa maison (à elle)"],correct:0},
       {type:"qcm",q:"Comment dit-on « ma mère » ?",options:["أُمِّي","أُمُّكَ","أُمُّهُ","أُمُّهَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « mon père » ?",options:["أَبِي","أَبُوكَ","أَبُوهُ","أَبُوهَا"],correct:0},
       {type:"qcm",q:"Que veut dire صَدِيقِي ?",options:["Mon ami","Ton ami","Son ami","Notre ami"],correct:0},
       {type:"qcm",q:"Quel suffixe signifie « mon » ?",options:["ـي","ـكَ","ـهُ","ـهَا"],correct:0},
       {type:"qcm",q:"Quel suffixe signifie « ton » ?",options:["ـكَ","ـي","ـهُ","ـهَا"],correct:0},
       {type:"qcm",q:"Que veut dire اسْمِي ?",options:["Mon nom","Ton nom","Son nom","Le nom"],correct:0},
       {type:"qcm",q:"Que veut dire مَدْرَسَتِي ?",options:["Mon école","Ton école","Son école","L'école"],correct:0},
       {type:"qcm",q:"Que veut dire بَلَدِي ?",options:["Mon pays","Ton pays","Son pays","Le pays"],correct:0},
       {type:"tf",q:"Le suffixe ـي signifie « mon »",correct:true},
       {type:"tf",q:"Le suffixe ـكَ signifie « son » (à lui)",correct:false,explain:"ـكَ = ton."},
       {type:"tf",ar:"هَذَا كِتَابِي",q:"Signifie « C'est mon livre »",correct:true},
       {type:"tf",ar:"هَذَا بَيْتُهُ",q:"Signifie « C'est ta maison »",correct:false,explain:"بَيْتُهُ = sa maison (à lui)."},
       {type:"fill",sentence:"هَذَا كِتَابُ ___",options:["ـهُ","ـي","ـهَا","ـكَ"],correct:0},
       {type:"fill",sentence:"هَذَا بَيْتُ ___",options:["ـكَ","ـي","ـهُ","ـهَا"],correct:0},
       {type:"fill",sentence:"هَذِهِ أُمُّ ___",options:["ـهُ","ـي","ـهَا","ـكَ"],correct:0},
       {type:"type",q:"Écris « mon livre » :",answer:"كِتَابِي",hint:"ك ت ا ب + ي"},
       {type:"type",q:"Écris « ta maison » :",answer:"بَيْتُكَ",hint:"ب ي ت + ك"},
       {type:"type",q:"Écris « mon stylo » :",answer:"قَلَمِي",hint:"ق ل م + ي"},
       {type:"type",q:"Écris « ma mère » :",answer:"أُمِّي",hint:"أ م + ي"},
       {type:"type",q:"Écris « mon nom » :",answer:"اسْمِي",hint:"ا س م + ي"},
       {type:"type",q:"Écris « mon école » :",answer:"مَدْرَسَتِي",hint:"م د ر س ت + ي"},
       {type:"order",q:"Reconstitue :",words:["كِتَابِي","هَذَا"],answer:"هَذَا كِتَابِي"},
       {type:"order",q:"Reconstitue :",words:["بَيْتُهُ","هَذَا"],answer:"هَذَا بَيْتُهُ"},
       {type:"order",q:"Reconstitue :",words:["أُمِّي","هَذِهِ"],answer:"هَذِهِ أُمِّي"},
       {type:"order",q:"Reconstitue :",words:["قَلَمِي","أَيْنَ","؟"],answer:"أَيْنَ قَلَمِي ؟"},
       {type:"order",q:"Reconstitue :",words:["اسْمُكَ","مَا","؟"],answer:"مَا اسْمُكَ ؟"},
       {type:"audio",audioText:"هَذَا كِتَابِي",options:["هَذَا كِتَابِي","هَذَا كِتَابُكَ","هَذَا كِتَابُهُ","هَذَا كِتَابُهَا"],correct:0},
       {type:"audio",audioText:"هَذَا بَيْتُهُ",options:["هَذَا بَيْتِي","هَذَا بَيْتُكَ","هَذَا بَيْتُهُ","هَذَا بَيْتُهَا"],correct:2},
       {type:"audio",audioText:"هَذِهِ أُمِّي",options:["هَذِهِ أُمِّي","هَذِهِ أُخْتِي","هَذِهِ بِنْتِي","هَذِهِ مُدَرِّسَةٌ"],correct:0},
       {type:"audio",audioText:"مَا اسْمُكَ؟",options:["مَا اسْمُكَ؟","مَا اسْمُهُ؟","مَا اسْمُهَا؟","مَا عُمْرُكَ؟"],correct:0}
     ]},    /* ===== LEÇON 6 ===== */
    {id:"t1l6", num:6, title:"Leçon 6", desc:"Corps humain · Le pluriel",
     active:true, audio:"assets/audio/madinah/tome1/L06.mp3",
     text:["هَذَا رَأْسِي","هَذَا أَنْفِي","هَذِهِ أُذُنِي","هَذِهِ يَدِي","هَذِهِ رِجْلِي",
           "هَذَا فَمِي","هَذَا وَجْهِي","هَذِهِ عَيْنِي","هَذَا قَلْبِي","الْمُسْلِمُونَ إِخْوَةٌ"],
     vocab:[
       {ar:"رَأْسٌ",fr:"Tête",tr:"raʾs"},
       {ar:"وَجْهٌ",fr:"Visage",tr:"wajh"},
       {ar:"أَنْفٌ",fr:"Nez",tr:"anf"},
       {ar:"أُذُنٌ",fr:"Oreille",tr:"udhun"},
       {ar:"فَمٌ",fr:"Bouche",tr:"fam"},
       {ar:"عَيْنٌ",fr:"Œil",tr:"ʿayn"},
       {ar:"يَدٌ",fr:"Main",tr:"yad"},
       {ar:"رِجْلٌ",fr:"Pied / Jambe",tr:"rijl"},
       {ar:"قَلْبٌ",fr:"Cœur",tr:"qalb"},
       {ar:"شَعْرٌ",fr:"Cheveux",tr:"shaʿr"},
       {ar:"سِنٌّ",fr:"Dent",tr:"sinn"},
       {ar:"لِسَانٌ",fr:"Langue",tr:"lisān"},
       {ar:"بَطْنٌ",fr:"Ventre",tr:"baṭn"},
       {ar:"ظَهْرٌ",fr:"Dos",tr:"ẓahr"},
       {ar:"كَتِفٌ",fr:"Épaule",tr:"katif"},
       {ar:"أَصْبَعٌ",fr:"Doigt",tr:"aṣbaʿ"},
       {ar:"ذِرَاعٌ",fr:"Bras",tr:"dhirāʿ"},
       {ar:"سَاقٌ",fr:"Tibia / Jambe",tr:"sāq"},
       {ar:"عُنُقٌ",fr:"Cou",tr:"ʿunuq"},
       {ar:"صَدْرٌ",fr:"Poitrine",tr:"ṣadr"},
       {ar:"كَبِدٌ",fr:"Foie",tr:"kabid"},
       {ar:"مَعِدَةٌ",fr:"Estomac",tr:"maʿida"},
       {ar:"دِمَاغٌ",fr:"Cerveau",tr:"dimāgh"},
       {ar:"عَظْمٌ",fr:"Os",tr:"ʿaẓm"},
       {ar:"جِلْدٌ",fr:"Peau",tr:"jild"},
       {ar:"دَمٌ",fr:"Sang",tr:"dam"},
       {ar:"عَرَقٌ",fr:"Sueur",tr:"ʿaraq"},
       {ar:"دَمْعٌ",fr:"Larme",tr:"damʿ"},
       {ar:"أَخٌ",fr:"Frère",tr:"akh"},
       {ar:"أُخْتٌ",fr:"Sœur",tr:"ukht"},
       {ar:"مُسْلِمٌ",fr:"Musulman",tr:"muslim"},
       {ar:"مُسْلِمَةٌ",fr:"Musulmane",tr:"muslima"},
       {ar:"إِخْوَةٌ",fr:"Frères",tr:"ikhwa"},
       {ar:"أَخَوَاتٌ",fr:"Sœurs",tr:"akhawāt"},
       {ar:"رَجُلٌ",fr:"Homme",tr:"rajul"},
       {ar:"رِجَالٌ",fr:"Hommes",tr:"rijāl"},
       {ar:"اِمْرَأَةٌ",fr:"Femme",tr:"imraʾa"},
       {ar:"نِسَاءٌ",fr:"Femmes",tr:"nisāʾ"},
       {ar:"طِفْلٌ",fr:"Enfant (masc.)",tr:"ṭifl"},
       {ar:"طِفْلَةٌ",fr:"Enfant (fém.)",tr:"ṭifla"},
       {ar:"شَايٌ",fr:"Thé",tr:"shāy"},
       {ar:"قَهْوَةٌ",fr:"Café",tr:"qahwa"},
       {ar:"أَيْضًا",fr:"Aussi",tr:"ayḍan"},
       {ar:"جِدًّا",fr:"Très",tr:"jiddan"}
     ],
     grammar:{title:"Le pluriel régulier et les membres du corps",
       rule:"Le pluriel masculin sain se forme en ajoutant ونَ (nominatif) ou ينَ (accusatif). Le pluriel féminin sain ajoute اتٌ. Les membres du corps vont souvent par paires (يَدَانِ = les deux mains).",
       examples:["مُسْلِمٌ → مُسْلِمُونَ","مُسْلِمَةٌ → مُسْلِمَاتٌ","يَدٌ → يَدَانِ (duel) → أَيْدٍ (pluriel)","الْمُسْلِمُونَ إِخْوَةٌ = Les musulmans sont frères"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذَا؟",fr:"Qui est-ce ?"},
       {sp:"B",ar:"هَذَا أَخِي.",fr:"C'est mon frère."},
       {sp:"A",ar:"وَمَنْ هَذِهِ؟",fr:"Et qui est-ce ?"},
       {sp:"B",ar:"هَذِهِ أُخْتِي.",fr:"C'est ma sœur."},
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا رَأْسِي، وَهَذِهِ يَدِي.",fr:"C'est ma tête, et ceci est ma main."},
       {sp:"A",ar:"أَيْنَ أَخُوكَ؟",fr:"Où est ton frère ?"},
       {sp:"B",ar:"هُوَ فِي الْمَدْرَسَةِ.",fr:"Il est à l'école."},
       {sp:"A",ar:"هَلْ أُخْتُكَ فِي الْبَيْتِ؟",fr:"Ta sœur est-elle à la maison ?"},
       {sp:"B",ar:"نَعَمْ، هِيَ فِي الْبَيْتِ.",fr:"Oui, elle est à la maison."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire رَأْسٌ ?",options:["Tête","Visage","Main","Pied"],correct:0},
       {type:"qcm",q:"Comment dit-on « main » ?",options:["يَدٌ","رِجْلٌ","رَأْسٌ","أَنْفٌ"],correct:0},
       {type:"qcm",q:"Que veut dire أَنْفٌ ?",options:["Nez","Bouche","Oreille","Œil"],correct:0},
       {type:"qcm",q:"Que veut dire عَيْنٌ ?",options:["Œil","Oreille","Nez","Bouche"],correct:0},
       {type:"qcm",q:"Comment dit-on « cœur » ?",options:["قَلْبٌ","رَأْسٌ","يَدٌ","عَيْنٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « sœur » ?",options:["أُخْتٌ","أَخٌ","أُمٌّ","بِنْتٌ"],correct:0},
       {type:"qcm",q:"Que veut dire مُسْلِمٌ ?",options:["Musulman","Chrétien","Juif","Athée"],correct:0},
       {type:"qcm",q:"Comment dit-on « très » ?",options:["جِدًّا","أَيْضًا","كَثِيرًا","قَلِيلًا"],correct:0},
       {type:"qcm",q:"Pluriel de رَجُلٌ ?",options:["رِجَالٌ","رَجُلُونَ","رَجُلَاتٌ","أَرْجَالٌ"],correct:0},
       {type:"qcm",q:"Que veut dire لِسَانٌ ?",options:["Langue","Dent","Bouche","Lèvre"],correct:0},
       {type:"qcm",q:"Comment dit-on « doigt » ?",options:["أَصْبَعٌ","يَدٌ","ذِرَاعٌ","كَفٌّ"],correct:0},
       {type:"qcm",q:"Que veut dire قَهْوَةٌ ?",options:["Café","Thé","Eau","Lait"],correct:0},
       {type:"tf",ar:"هَذَا أَخِي",q:"Signifie « C'est mon frère »",correct:true},
       {type:"tf",ar:"هَذِهِ أُخْتِي",q:"Signifie « C'est mon frère »",correct:false,explain:"أُخْتٌ = sœur."},
       {type:"tf",q:"Le pluriel de مُسْلِمٌ est مُسْلِمُونَ",correct:true},
       {type:"tf",ar:"الْمُسْلِمُونَ إِخْوَةٌ",q:"Signifie « Les musulmans sont frères »",correct:true},
       {type:"fill",sentence:"___ أَخِي",options:["هَذَا","هَذِهِ","ذَلِكَ","تِلْكَ"],correct:0},
       {type:"fill",sentence:"___ أُخْتِي",options:["هَذِهِ","هَذَا","ذَلِكَ","أُولَئِكَ"],correct:0},
       {type:"fill",sentence:"___ رَأْسِي",options:["هَذَا","هَذِهِ","ذَلِكَ","أُولَئِكَ"],correct:0},
       {type:"type",q:"Écris « tête » :",answer:"رَأْسٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « main » :",answer:"يَدٌ",hint:"2 lettres"},
       {type:"type",q:"Écris « pied » :",answer:"رِجْلٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « nez » :",answer:"أَنْفٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « cœur » :",answer:"قَلْبٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « frère » :",answer:"أَخٌ",hint:"2 lettres"},
       {type:"order",q:"Reconstitue :",words:["أَخِي","هَذَا"],answer:"هَذَا أَخِي"},
       {type:"order",q:"Reconstitue :",words:["إِخْوَةٌ","الْمُسْلِمُونَ"],answer:"الْمُسْلِمُونَ إِخْوَةٌ"},
       {type:"order",q:"Reconstitue :",words:["أُخْتِي","هَذِهِ"],answer:"هَذِهِ أُخْتِي"},
       {type:"order",q:"Reconstitue :",words:["رَأْسِي","هَذَا"],answer:"هَذَا رَأْسِي"},
       {type:"order",q:"Reconstitue :",words:["يَدِي","هَذِهِ"],answer:"هَذِهِ يَدِي"},
       {type:"audio",audioText:"هَذَا أَخِي",options:["هَذَا أَخِي","هَذِهِ أُخْتِي","هَذَا أَبِي","هَذَا رَأْسِي"],correct:0},
       {type:"audio",audioText:"هَذِهِ أُخْتِي",options:["هَذَا أَخِي","هَذِهِ أُخْتِي","هَذِهِ أُمِّي","هَذِهِ بِنْتِي"],correct:1},
       {type:"audio",audioText:"هَذَا رَأْسِي",options:["هَذَا رَأْسِي","هَذَا أَنْفِي","هَذَا وَجْهِي","هَذَا قَلْبِي"],correct:0},
       {type:"audio",audioText:"هَذِهِ يَدِي",options:["هَذِهِ رِجْلِي","هَذِهِ يَدِي","هَذِهِ عَيْنِي","هَذِهِ أُذُنِي"],correct:1}
     ]},

    /* ===== LEÇON 7 ===== */
    {id:"t1l7", num:7, title:"Leçon 7", desc:"Le féminin · هَذِهِ",
     active:true, audio:"assets/audio/madinah/tome1/L07.mp3",
     text:["هَذِهِ أُمِّي","هَذِهِ بِنْتِي","هَذِهِ مُدَرِّسَةٌ","هَذِهِ طَالِبَةٌ","هَذِهِ مُـمَرِّضَةٌ",
           "هَذِهِ دَجَاجَةٌ","هَذِهِ بَطَّةٌ","هَذِهِ بَيْضَةٌ","هَذِهِ حَدِيقَةٌ"],
     vocab:[
       {ar:"مُـمَرِّضَةٌ",fr:"Infirmière",tr:"mumarriḍa"},
       {ar:"مُدَرِّسَةٌ",fr:"Professeure",tr:"mudarrisa"},
       {ar:"طَالِبَةٌ",fr:"Étudiante",tr:"ṭāliba"},
       {ar:"طَبِيبَةٌ",fr:"Médecin (fém.)",tr:"ṭabība"},
       {ar:"طَبَّاخَةٌ",fr:"Cuisinière",tr:"ṭabbākha"},
       {ar:"بَائِعَةٌ",fr:"Vendeuse",tr:"bāʾiʿa"},
       {ar:"مُهَنْدِسَةٌ",fr:"Ingénieure",tr:"muhandisa"},
       {ar:"مُدِيرَةٌ",fr:"Directrice",tr:"mudīra"},
       {ar:"كَاتِبَةٌ",fr:"Écrivaine",tr:"kātiba"},
       {ar:"قَارِئَةٌ",fr:"Lectrice",tr:"qāriʾa"},
       {ar:"دَجَاجَةٌ",fr:"Poule",tr:"dajāja"},
       {ar:"دِيكٌ",fr:"Coq",tr:"dīk"},
       {ar:"بَطَّةٌ",fr:"Canard",tr:"baṭṭa"},
       {ar:"بَيْضَةٌ",fr:"Œuf",tr:"bayḍa"},
       {ar:"بَقَرَةٌ",fr:"Vache",tr:"baqara"},
       {ar:"خَرُوفٌ",fr:"Mouton",tr:"kharūf"},
       {ar:"جَمَلٌ",fr:"Chameau",tr:"jamal"},
       {ar:"نَاقَةٌ",fr:"Chamelle",tr:"nāqa"},
       {ar:"قِطٌّ",fr:"Chat",tr:"qiṭṭ"},
       {ar:"قِطَّةٌ",fr:"Chatte",tr:"qiṭṭa"},
       {ar:"حَدِيقَةٌ",fr:"Jardin",tr:"ḥadīqa"},
       {ar:"زَهْرَةٌ",fr:"Fleur",tr:"zahra"},
       {ar:"وَرْدَةٌ",fr:"Rose",tr:"warda"},
       {ar:"شَجَرَةٌ",fr:"Arbre",tr:"shajara"},
       {ar:"فَاكِهَةٌ",fr:"Fruit",tr:"fākiha"},
       {ar:"خُضْرَةٌ",fr:"Légume",tr:"khuḍra"},
       {ar:"سَيَّارَةٌ",fr:"Voiture",tr:"sayyāra"},
       {ar:"طَائِرَةٌ",fr:"Avion",tr:"ṭāʾira"},
       {ar:"سَفِينَةٌ",fr:"Bateau",tr:"safīna"},
       {ar:"دَرَّاجَةٌ",fr:"Vélo",tr:"darrāja"},
       {ar:"حَافِلَةٌ",fr:"Bus",tr:"ḥāfila"},
       {ar:"قِطَارٌ",fr:"Train",tr:"qiṭār"},
       {ar:"بِنْتٌ",fr:"Fille",tr:"bint"},
       {ar:"أُخْتٌ",fr:"Sœur",tr:"ukht"},
       {ar:"أُمٌّ",fr:"Mère",tr:"umm"},
       {ar:"جَدَّةٌ",fr:"Grand-mère",tr:"jadda"},
       {ar:"عَمَّةٌ",fr:"Tante paternelle",tr:"ʿamma"},
       {ar:"خَالَةٌ",fr:"Tante maternelle",tr:"khāla"},
       {ar:"صَدِيقَةٌ",fr:"Amie",tr:"ṣadīqa"},
       {ar:"جَارَةٌ",fr:"Voisine",tr:"jāra"},
       {ar:"زَوْجَةٌ",fr:"Épouse",tr:"zawja"},
       {ar:"بِنْتٌ صَغِيرَةٌ",fr:"Petite fille",tr:"bint ṣaghīra"},
       {ar:"طِفْلَةٌ",fr:"Petite fille / Enfant",tr:"ṭifla"},
       {ar:"مَلِكَةٌ",fr:"Reine",tr:"malika"}
     ],
     grammar:{title:"La formation du féminin",
       rule:"La plupart des noms féminins se forment en ajoutant ة (ta marbouta). Certains féminins sont irréguliers : أَخٌ → أُخْتٌ (frère → sœur), جَمَلٌ → نَاقَةٌ (chameau → chamelle).",
       examples:["مُدَرِّسٌ → مُدَرِّسَةٌ","طَالِبٌ → طَالِبَةٌ","طَبِيبٌ → طَبِيبَةٌ","مُسْلِمٌ → مُسْلِمَةٌ"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذِهِ؟",fr:"Qui est-ce (elle) ?"},
       {sp:"B",ar:"هَذِهِ أُمِّي.",fr:"C'est ma mère."},
       {sp:"A",ar:"وَمَنْ هَذَا؟",fr:"Et qui est-ce (lui) ?"},
       {sp:"B",ar:"هَذَا أَبِي.",fr:"C'est mon père."},
       {sp:"A",ar:"مَا هَذِهِ؟",fr:"Qu'est-ce que c'est (elle) ?"},
       {sp:"B",ar:"هَذِهِ حَدِيقَةٌ جَمِيلَةٌ.",fr:"C'est un beau jardin."},
       {sp:"A",ar:"وَمَا هَذِهِ؟",fr:"Et qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذِهِ زَهْرَةٌ وَرْدَةٌ.",fr:"C'est une fleur, une rose."},
       {sp:"A",ar:"مَنْ هَذِهِ الْمَرْأَةُ؟",fr:"Qui est cette femme ?"},
       {sp:"B",ar:"هَذِهِ مُدَرِّسَةٌ.",fr:"C'est une professeure."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مُـمَرِّضَةٌ ?",options:["Infirmière","Médecin","Professeure","Étudiante"],correct:0},
       {type:"qcm",q:"Comment dit-on « œuf » ?",options:["بَيْضَةٌ","دَجَاجَةٌ","بَطَّةٌ","حَدِيقَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire دَجَاجَةٌ ?",options:["Poule","Coq","Canard","Vache"],correct:0},
       {type:"qcm",q:"Comment dit-on « jardin » ?",options:["حَدِيقَةٌ","بَيْضَةٌ","بَطَّةٌ","زَهْرَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire زَهْرَةٌ ?",options:["Fleur","Arbre","Fruit","Rose"],correct:0},
       {type:"qcm",q:"Comment dit-on « voiture » ?",options:["سَيَّارَةٌ","طَائِرَةٌ","سَفِينَةٌ","حَدِيقَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire سَفِينَةٌ ?",options:["Bateau","Avion","Voiture","Train"],correct:0},
       {type:"qcm",q:"Quelle lettre ajoute-t-on pour le féminin ?",options:["ة","ه","ا","ي"],correct:0},
       {type:"qcm",q:"Féminin de مُدَرِّسٌ ?",options:["مُدَرِّسَةٌ","مُدَرِّسَاتٌ","مُدَرِّسُونَ","مُدَرِّسَانِ"],correct:0},
       {type:"qcm",q:"Que veut dire مُهَنْدِسَةٌ ?",options:["Ingénieure","Médecin","Avocate","Architecte"],correct:0},
       {type:"qcm",q:"Comment dit-on « grand-mère » ?",options:["جَدَّةٌ","جَدٌّ","أُمٌّ","عَمَّةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire قِطَّةٌ ?",options:["Chatte","Chat","Chien","Lion"],correct:0},
       {type:"tf",ar:"هَذِهِ أُمِّي",q:"Signifie « C'est ma mère »",correct:true},
       {type:"tf",q:"Le féminin de مُدَرِّسٌ est مُدَرِّسَةٌ",correct:true},
       {type:"tf",ar:"هَذِهِ حَدِيقَةٌ",q:"Signifie « C'est une maison »",correct:false,explain:"حَدِيقَةٌ = jardin."},
       {type:"tf",ar:"هَذِهِ مُدَرِّسَةٌ",q:"Signifie « C'est une professeure »",correct:true},
       {type:"fill",sentence:"___ أُمِّي",options:["هَذِهِ","هَذَا","ذَلِكَ","أُولَئِكَ"],correct:0},
       {type:"fill",sentence:"هَذِهِ ___",options:["مُدَرِّسَةٌ","مُدَرِّسٌ","مُدَرِّسَانِ","مُدَرِّسُونَ"],correct:0},
       {type:"fill",sentence:"هَذِهِ ___",options:["طَالِبَةٌ","طَالِبٌ","طُلَّابٌ","طَالِبَانِ"],correct:0},
       {type:"type",q:"Écris « une professeure » :",answer:"مُدَرِّسَةٌ",hint:"م د ر س + ة"},
       {type:"type",q:"Écris « une étudiante » :",answer:"طَالِبَةٌ",hint:"ط ا ل ب + ة"},
       {type:"type",q:"Écris « une fleur » :",answer:"زَهْرَةٌ",hint:"ز ه ر + ة"},
       {type:"type",q:"Écris « une voiture » :",answer:"سَيَّارَةٌ",hint:"س ي ا ر + ة"},
       {type:"type",q:"Écris « un jardin » :",answer:"حَدِيقَةٌ",hint:"ح د ي ق + ة"},
       {type:"type",q:"Écris « une infirmière » :",answer:"مُـمَرِّضَةٌ",hint:"م م ر ض + ة"},
       {type:"order",q:"Reconstitue :",words:["أُمِّي","هَذِهِ"],answer:"هَذِهِ أُمِّي"},
       {type:"order",q:"Reconstitue :",words:["طَالِبَةٌ","هَذِهِ"],answer:"هَذِهِ طَالِبَةٌ"},
       {type:"order",q:"Reconstitue :",words:["مُدَرِّسَةٌ","هَذِهِ"],answer:"هَذِهِ مُدَرِّسَةٌ"},
       {type:"order",q:"Reconstitue :",words:["حَدِيقَةٌ","هَذِهِ"],answer:"هَذِهِ حَدِيقَةٌ"},
       {type:"order",q:"Reconstitue :",words:["زَهْرَةٌ","هَذِهِ"],answer:"هَذِهِ زَهْرَةٌ"},
       {type:"audio",audioText:"هَذِهِ أُمِّي",options:["هَذِهِ أُمِّي","هَذِهِ بِنْتِي","هَذِهِ أُخْتِي","هَذِهِ مُدَرِّسَةٌ"],correct:0},
       {type:"audio",audioText:"هَذِهِ مُدَرِّسَةٌ",options:["هَذِهِ طَالِبَةٌ","هَذِهِ مُدَرِّسَةٌ","هَذِهِ مُـمَرِّضَةٌ","هَذِهِ بِنْتٌ"],correct:1},
       {type:"audio",audioText:"هَذِهِ حَدِيقَةٌ",options:["هَذِهِ حَدِيقَةٌ","هَذِهِ مَدْرَسَةٌ","هَذِهِ سَيَّارَةٌ","هَذِهِ شَجَرَةٌ"],correct:0},
       {type:"audio",audioText:"هَذِهِ زَهْرَةٌ",options:["هَذِهِ وَرْدَةٌ","هَذِهِ زَهْرَةٌ","هَذِهِ شَجَرَةٌ","هَذِهِ حَدِيقَةٌ"],correct:1}
     ]},

    /* ===== LEÇON 8 ===== */
    {id:"t1l8", num:8, title:"Leçon 8", desc:"L'appartenance · لِ / لِمَنْ",
     active:true, audio:"assets/audio/madinah/tome1/L08.mp3",
     text:["لِمَنْ هَذَا الْكِتَابُ؟","هَذَا الْكِتَابُ لِمُحَمَّدٍ","هَذَا الْقَلَمُ لِعَلِيٍّ",
           "هَذِهِ الْحَقِيبَةُ لِفَاطِمَةَ","الْمِلْعَقَةُ لِلطَّالِبِ","السِّكِّينُ لِلْمُدَرِّسِ",
           "الْقَلَمُ لِي، وَالْكِتَابُ لَكَ"],
     vocab:[
       {ar:"سِكِّينٌ",fr:"Couteau",tr:"sikkīn"},
       {ar:"مِلْعَقَةٌ",fr:"Cuillère",tr:"milʿaqa"},
       {ar:"شَوْكَةٌ",fr:"Fourchette",tr:"shawka"},
       {ar:"طَبَقٌ",fr:"Assiette / Plat",tr:"ṭabaq"},
       {ar:"كُوبٌ",fr:"Verre",tr:"kūb"},
       {ar:"فِنْجَانٌ",fr:"Tasse",tr:"finjān"},
       {ar:"قِدْرٌ",fr:"Marmite",tr:"qidr"},
       {ar:"صَحْنٌ",fr:"Assiette plate",tr:"ṣaḥn"},
       {ar:"مِنْدِيلٌ",fr:"Serviette",tr:"mindīl"},
       {ar:"قَمِيصٌ",fr:"Chemise",tr:"qamīṣ"},
       {ar:"بَنْطَالٌ",fr:"Pantalon",tr:"banṭāl"},
       {ar:"حِذَاءٌ",fr:"Chaussure",tr:"ḥidhāʾ"},
       {ar:"جَاكِيتٌ",fr:"Veste",tr:"jākīt"},
       {ar:"قُبَّعَةٌ",fr:"Chapeau",tr:"qubbʿa"},
       {ar:"خَاتَمٌ",fr:"Bague",tr:"khātam"},
       {ar:"نَظَّارَةٌ",fr:"Lunettes",tr:"naẓẓāra"},
       {ar:"مِحْفَظَةٌ",fr:"Portefeuille",tr:"miḥfaẓa"},
       {ar:"دَفْتَرٌ",fr:"Cahier",tr:"daftar"},
       {ar:"مِمْحَاةٌ",fr:"Gomme",tr:"mimḥā"},
       {ar:"مِسْطَرَةٌ",fr:"Règle",tr:"misṭara"},
       {ar:"حَاسُوبٌ",fr:"Ordinateur",tr:"ḥāsūb"},
       {ar:"سَاعَةٌ",fr:"Montre",tr:"sāʿa"},
       {ar:"مِظَلَّةٌ",fr:"Parapluie",tr:"miẓalla"},
       {ar:"حِزَامٌ",fr:"Ceinture",tr:"ḥizām"},
       {ar:"جَوْرَبٌ",fr:"Chaussette",tr:"jawrab"},
       {ar:"وِشَاحٌ",fr:"Écharpe",tr:"wishāḥ"},
       {ar:"قُفَّازٌ",fr:"Gant",tr:"quffāz"},
       {ar:"نَقْدٌ",fr:"Argent liquide",tr:"naqd"},
       {ar:"لِمَنْ",fr:"À qui ?",tr:"liman"},
       {ar:"لِي",fr:"Pour moi",tr:"lī"},
       {ar:"لَكَ",fr:"Pour toi (masc.)",tr:"laka"},
       {ar:"لَكِ",fr:"Pour toi (fém.)",tr:"laki"},
       {ar:"لَهُ",fr:"Pour lui",tr:"lahu"},
       {ar:"لَهَا",fr:"Pour elle",tr:"lahā"},
       {ar:"لَنَا",fr:"Pour nous",tr:"lanā"},
       {ar:"لَكُمْ",fr:"Pour vous",tr:"lakum"},
       {ar:"لَهُنَّ",fr:"Pour elles",tr:"lahunna"},
       {ar:"لَهُمْ",fr:"Pour eux",tr:"lahum"},
       {ar:"صَاحِبٌ",fr:"Propriétaire",tr:"ṣāḥib"},
       {ar:"مَالِكٌ",fr:"Possesseur",tr:"mālik"},
       {ar:"مِلْكٌ",fr:"Propriété",tr:"milk"},
       {ar:"هَدِيَّةٌ",fr:"Cadeau",tr:"hadiyya"},
       {ar:"مِلْكِي",fr:"Ma propriété",tr:"milkī"},
       {ar:"كِتَابُهُ",fr:"Son livre (lui)",tr:"kitābuhu"},
       {ar:"كِتَابُهَا",fr:"Son livre (elle)",tr:"kitābuhā"}
     ],
     grammar:{title:"La particule d'appartenance لِ",
       rule:"لِ signifie « pour » ou « à ». Elle est suivie d'un nom au génitif (majrūr). Avec les pronoms : لِي (pour moi), لَكَ (pour toi), لَهُ (pour lui), لَهَا (pour elle).",
       examples:["لِمَنْ هَذَا الْكِتَابُ؟ = À qui est ce livre ?","هَذَا الْكِتَابُ لِمُحَمَّدٍ = Ce livre est à Muhammad","هَذَا الْقَلَمُ لِي = Ce stylo est à moi"]},
     dialogue:[
       {sp:"A",ar:"لِمَنْ هَذَا الْكِتَابُ؟",fr:"À qui est ce livre ?"},
       {sp:"B",ar:"هَذَا الْكِتَابُ لِمُحَمَّدٍ.",fr:"Ce livre est à Muhammad."},
       {sp:"A",ar:"وَلِمَنْ هَذَا الْقَلَمُ؟",fr:"Et à qui est ce stylo ?"},
       {sp:"B",ar:"هَذَا الْقَلَمُ لِعَلِيٍّ.",fr:"Ce stylo est à Ali."},
       {sp:"A",ar:"وَلِمَنْ هَذِهِ الْحَقِيبَةُ؟",fr:"Et à qui est ce sac ?"},
       {sp:"B",ar:"هَذِهِ الْحَقِيبَةُ لِفَاطِمَةَ.",fr:"Ce sac est à Fatima."},
       {sp:"A",ar:"وَهَذَا الْقَمِيصُ؟",fr:"Et cette chemise ?"},
       {sp:"B",ar:"هَذَا الْقَمِيصُ لِي.",fr:"Cette chemise est à moi."},
       {sp:"A",ar:"وَهَذِهِ السَّاعَةُ؟",fr:"Et cette montre ?"},
       {sp:"B",ar:"هَذِهِ السَّاعَةُ لَكَ.",fr:"Cette montre est à toi."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire لِمَنْ ؟",options:["À qui ?","Où ?","Quand ?","Quoi ?"],correct:0},
       {type:"qcm",q:"Comment dit-on « couteau » ?",options:["سِكِّينٌ","مِلْعَقَةٌ","شَوْكَةٌ","طَبَقٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « cuillère » ?",options:["مِلْعَقَةٌ","سِكِّينٌ","شَوْكَةٌ","كُوبٌ"],correct:0},
       {type:"qcm",q:"Que veut dire قَمِيصٌ ?",options:["Chemise","Pantalon","Veste","Chaussure"],correct:0},
       {type:"qcm",q:"Comment dit-on « chaussure » ?",options:["حِذَاءٌ","جَاكِيتٌ","قَمِيصٌ","بَنْطَالٌ"],correct:0},
       {type:"qcm",q:"Que veut dire نَظَّارَةٌ ?",options:["Lunettes","Bague","Chapeau","Montre"],correct:0},
       {type:"qcm",q:"Comment dit-on « cahier » ?",options:["دَفْتَرٌ","مِمْحَاةٌ","مِسْطَرَةٌ","حَاسُوبٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « pour moi » ?",options:["لِي","لَكَ","لَهُ","لَهَا"],correct:0},
       {type:"qcm",q:"Que veut dire لَهُ ?",options:["Pour lui","Pour moi","Pour toi","Pour elle"],correct:0},
       {type:"qcm",q:"Comment dit-on « chapeau » ?",options:["قُبَّعَةٌ","خَاتَمٌ","نَظَّارَةٌ","حِذَاءٌ"],correct:0},
       {type:"qcm",q:"Que veut dire حَاسُوبٌ ?",options:["Ordinateur","Téléphone","Tablette","Télévision"],correct:0},
       {type:"qcm",q:"Comment dit-on « écharpe » ?",options:["وِشَاحٌ","حِزَامٌ","جَوْرَبٌ","قُفَّازٌ"],correct:0},
       {type:"tf",ar:"هَذَا الْكِتَابُ لِمُحَمَّدٍ",q:"Signifie « Ce livre est à Muhammad »",correct:true},
       {type:"tf",q:"La particule لِ signifie « dans »",correct:false,explain:"Non, لِ = pour/à."},
       {type:"tf",ar:"هَذَا الْقَلَمُ لِي",q:"Signifie « Ce stylo est à moi »",correct:true},
       {type:"tf",ar:"لِمَنْ هَذَا الْكِتَابُ؟",q:"Signifie « Où est ce livre ? »",correct:false,explain:"لِمَنْ = à qui."},
       {type:"fill",sentence:"___ هَذَا الْكِتَابُ؟",options:["لِمَنْ","أَيْنَ","مَا","مَنْ"],correct:0},
       {type:"fill",sentence:"هَذَا الْكِتَابُ ___",options:["لِي","فِي","عَلَى","مِنْ"],correct:0},
       {type:"fill",sentence:"هَذَا الْقَلَمُ ___",options:["لِمُحَمَّدٍ","فِي","عَلَى","مِنْ"],correct:0},
       {type:"type",q:"Écris « pour moi » :",answer:"لِي",hint:"ل + ي"},
       {type:"type",q:"Écris « pour lui » :",answer:"لَهُ",hint:"ل + ه"},
       {type:"type",q:"Écris « couteau » :",answer:"سِكِّينٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « cuillère » :",answer:"مِلْعَقَةٌ",hint:"م ل ع ق + ة"},
       {type:"type",q:"Écris « chemise » :",answer:"قَمِيصٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « lunettes » :",answer:"نَظَّارَةٌ",hint:"ن ظ ا ر + ة"},
       {type:"order",q:"Reconstitue :",words:["لِمُحَمَّدٍ","الْكِتَابُ","هَذَا"],answer:"هَذَا الْكِتَابُ لِمُحَمَّدٍ"},
       {type:"order",q:"Reconstitue :",words:["الْكِتَابُ","لِمَنْ","هَذَا","؟"],answer:"لِمَنْ هَذَا الْكِتَابُ ؟"},
       {type:"order",q:"Reconstitue :",words:["لِي","الْقَلَمُ","هَذَا"],answer:"هَذَا الْقَلَمُ لِي"},
       {type:"order",q:"Reconstitue :",words:["لِعَلِيٍّ","الْقَلَمُ","هَذَا"],answer:"هَذَا الْقَلَمُ لِعَلِيٍّ"},
       {type:"order",q:"Reconstitue :",words:["لِفَاطِمَةَ","الْحَقِيبَةُ","هَذِهِ"],answer:"هَذِهِ الْحَقِيبَةُ لِفَاطِمَةَ"},
       {type:"audio",audioText:"هَذَا الْكِتَابُ لِمُحَمَّدٍ",options:["هَذَا الْكِتَابُ لِمُحَمَّدٍ","هَذَا الْقَلَمُ لِمُحَمَّدٍ","هَذَا الْكِتَابُ لِعَلِيٍّ","هَذَا الْكِتَابُ لِي"],correct:0},
       {type:"audio",audioText:"لِمَنْ هَذَا الْقَلَمُ؟",options:["لِمَنْ هَذَا الْكِتَابُ؟","لِمَنْ هَذَا الْقَلَمُ؟","لِمَنْ هَذَا الْمِفْتَاحُ؟","لِمَنْ هَذَا السِّكِّينُ؟"],correct:1},
       {type:"audio",audioText:"هَذِهِ الْحَقِيبَةُ لِفَاطِمَةَ",options:["هَذِهِ الْحَقِيبَةُ لِفَاطِمَةَ","هَذِهِ الْحَقِيبَةُ لِي","هَذِهِ الْحَقِيبَةُ لِمُحَمَّدٍ","هَذَا الْكِتَابُ لِفَاطِمَةَ"],correct:0},
       {type:"audio",audioText:"هَذَا الْقَمِيصُ لِي",options:["هَذَا الْقَمِيصُ لَكَ","هَذَا الْقَمِيصُ لِي","هَذَا الْقَمِيصُ لَهُ","هَذَا الْقَمِيصُ لَهَا"],correct:1}
     ]},

    /* ===== LEÇON 9 ===== */
    {id:"t1l9", num:9, title:"Leçon 9", desc:"Les adjectifs (نعت)",
     active:true, audio:"assets/audio/madinah/tome1/L09.mp3",
     text:["هَذَا كِتَابٌ جَدِيدٌ","هَذَا رَجُلٌ غَنِيٌّ","هَذِهِ بِنْتٌ صَغِيرَةٌ",
           "اللُّغَةُ الْعَرَبِيَّةُ سَهْلَةٌ","الْعُصْفُورُ طَائِرٌ صَغِيرٌ","الْفَاكِهَةُ لَذِيذَةٌ"],
     vocab:[
       {ar:"شَهِيرٌ",fr:"Célèbre",tr:"shahīr"},
       {ar:"صَعْبٌ",fr:"Difficile",tr:"ṣaʿb"},
       {ar:"سَهْلٌ",fr:"Facile",tr:"sahl"},
       {ar:"جَمِيلٌ",fr:"Beau",tr:"jamīl"},
       {ar:"قَبِيحٌ",fr:"Laid",tr:"qabīḥ"},
       {ar:"كَبِيرٌ",fr:"Grand",tr:"kabīr"},
       {ar:"صَغِيرٌ",fr:"Petit",tr:"ṣaghīr"},
       {ar:"جَدِيدٌ",fr:"Nouveau",tr:"jadīd"},
       {ar:"قَدِيمٌ",fr:"Vieux",tr:"qadīm"},
       {ar:"طَوِيلٌ",fr:"Long",tr:"ṭawīl"},
       {ar:"قَصِيرٌ",fr:"Court",tr:"qaṣīr"},
       {ar:"سَرِيعٌ",fr:"Rapide",tr:"sarīʿ"},
       {ar:"بَطِيءٌ",fr:"Lent",tr:"baṭīʾ"},
       {ar:"قَوِيٌّ",fr:"Fort",tr:"qawiyy"},
       {ar:"ضَعِيفٌ",fr:"Faible",tr:"ḍaʿīf"},
       {ar:"غَنِيٌّ",fr:"Riche",tr:"ghaniyy"},
       {ar:"فَقِيرٌ",fr:"Pauvre",tr:"faqīr"},
       {ar:"لَذِيذٌ",fr:"Délicieux",tr:"ladhīdh"},
       {ar:"مُرٌّ",fr:"Amer",tr:"murr"},
       {ar:"حُلْوٌ",fr:"Doux",tr:"ḥulw"},
       {ar:"حَامِضٌ",fr:"Acide",tr:"ḥāmiḍ"},
       {ar:"مَالِحٌ",fr:"Salé",tr:"māliḥ"},
       {ar:"حَارٌّ",fr:"Chaud",tr:"ḥārr"},
       {ar:"بَارِدٌ",fr:"Froid",tr:"bārid"},
       {ar:"نَظِيفٌ",fr:"Propre",tr:"naẓīf"},
       {ar:"وَسِخٌ",fr:"Sale",tr:"wasikh"},
       {ar:"مُجْتَهِدٌ",fr:"Travailleur",tr:"mujtahid"},
       {ar:"كَسُولٌ",fr:"Paresseux",tr:"kasūl"},
       {ar:"ذَكِيٌّ",fr:"Intelligent",tr:"dhakiyy"},
       {ar:"أَحْمَقٌ",fr:"Idiot",tr:"aḥmaq"},
       {ar:"كَرِيمٌ",fr:"Généreux",tr:"karīm"},
       {ar:"بَخِيلٌ",fr:"Avare",tr:"bakhīl"},
       {ar:"صَادِقٌ",fr:"Véridique",tr:"ṣādiq"},
       {ar:"كَاذِبٌ",fr:"Menteur",tr:"kādhib"},
       {ar:"شُجَاعٌ",fr:"Courageux",tr:"shujāʿ"},
       {ar:"جَبَانٌ",fr:"Peureux",tr:"jabān"},
       {ar:"فَاكِهَةٌ",fr:"Fruit",tr:"fākiha"},
       {ar:"عُصْفُورٌ",fr:"Moineau",tr:"ʿuṣfūr"},
       {ar:"لُغَةٌ",fr:"Langue",tr:"lugha"},
       {ar:"طَائِرٌ",fr:"Oiseau",tr:"ṭāʾir"},
       {ar:"لِمَاذَا",fr:"Pourquoi ?",tr:"limādhā"},
       {ar:"اللُّغَةُ الْعَرَبِيَّةُ",fr:"La langue arabe",tr:"al-lugha al-ʿarabiyya"},
       {ar:"اللُّغَةُ الْإِنْجِلِيزِيَّةُ",fr:"La langue anglaise",tr:"al-lugha al-injlīziyya"},
       {ar:"اللُّغَةُ الْفَرَنْسِيَّةُ",fr:"La langue française",tr:"al-lugha al-faransiyya"},
       {ar:"كَلِمَةٌ",fr:"Mot",tr:"kalima"}
     ],
     grammar:{title:"L'adjectif (نعت) et le nom décrit (منعوت)",
       rule:"En arabe, l'adjectif (نعت) suit le nom (منعوت) et s'accorde avec lui en genre, en nombre, en cas et en définitude.",
       examples:["هَذَا كِتَابٌ جَدِيدٌ = C'est un nouveau livre","الْبِنْتُ صَغِيرَةٌ = La fille est petite","اللُّغَةُ الْعَرَبِيَّةُ جَمِيلَةٌ = La langue arabe est belle"]},
     dialogue:[
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا عُصْفُورٌ صَغِيرٌ.",fr:"C'est un petit moineau."},
       {sp:"A",ar:"أَهُوَ جَمِيلٌ؟",fr:"Est-il beau ?"},
       {sp:"B",ar:"نَعَمْ، هُوَ جَمِيلٌ جِدًّا.",fr:"Oui, il est très beau."},
       {sp:"A",ar:"وَمَا هَذِهِ؟",fr:"Et qu'est-ce que c'est (elle) ?"},
       {sp:"B",ar:"هَذِهِ لُغَةٌ صَعْبَةٌ.",fr:"C'est une langue difficile."},
       {sp:"A",ar:"هَلِ اللُّغَةُ الْعَرَبِيَّةُ صَعْبَةٌ؟",fr:"La langue arabe est-elle difficile ?"},
       {sp:"B",ar:"لَا، هِيَ سَهْلَةٌ وَجَمِيلَةٌ.",fr:"Non, elle est facile et belle."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire شَهِيرٌ ؟",options:["Célèbre","Inconnu","Grand","Petit"],correct:0},
       {type:"qcm",q:"Comment dit-on « difficile » ?",options:["صَعْبٌ","سَهْلٌ","جَمِيلٌ","قَبِيحٌ"],correct:0},
       {type:"qcm",q:"Où se place l'adjectif en arabe ?",options:["Après le nom","Avant le nom","N'importe où","Au début"],correct:0},
       {type:"qcm",q:"Que veut dire كَبِيرٌ ؟",options:["Grand","Petit","Long","Court"],correct:0},
       {type:"qcm",q:"Comment dit-on « rapide » ?",options:["سَرِيعٌ","بَطِيءٌ","طَوِيلٌ","قَصِيرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire نَظِيفٌ ؟",options:["Propre","Sale","Chaud","Froid"],correct:0},
       {type:"qcm",q:"Comment dit-on « chaud » ?",options:["حَارٌّ","بَارِدٌ","سَخِينٌ","فَاتِرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire ذَكِيٌّ ؟",options:["Intelligent","Idiot","Paresseux","Travailleur"],correct:0},
       {type:"qcm",q:"Comment dit-on « généreux » ?",options:["كَرِيمٌ","بَخِيلٌ","شُجَاعٌ","جَبَانٌ"],correct:0},
       {type:"qcm",q:"Que veut dire صَادِقٌ ؟",options:["Véridique","Menteur","Courageux","Peureux"],correct:0},
       {type:"qcm",q:"Comment dit-on « fruit » ?",options:["فَاكِهَةٌ","لُغَةٌ","عُصْفُورٌ","طَائِرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire لَذِيذٌ ؟",options:["Délicieux","Amer","Salé","Acide"],correct:0},
       {type:"tf",ar:"هَذَا كِتَابٌ جَدِيدٌ",q:"Signifie « C'est un nouveau livre »",correct:true},
       {type:"tf",q:"En arabe, l'adjectif vient AVANT le nom",correct:false,explain:"L'adjectif suit le nom."},
       {type:"tf",ar:"اللُّغَةُ الْعَرَبِيَّةُ جَمِيلَةٌ",q:"Signifie « La langue arabe est belle »",correct:true},
       {type:"tf",ar:"هَذَا رَجُلٌ غَنِيٌّ",q:"Signifie « C'est un homme pauvre »",correct:false,explain:"غَنِيٌّ = riche."},
       {type:"fill",sentence:"هَذَا كِتَابٌ ___",options:["جَدِيدٌ","الْجَدِيدُ","جَدِيدَةٌ","جَدِيدَانِ"],correct:0},
       {type:"fill",sentence:"هَذِهِ بِنْتٌ ___",options:["صَغِيرَةٌ","صَغِيرٌ","صِغَارٌ","صَغِيرَانِ"],correct:0},
       {type:"fill",sentence:"اللُّغَةُ الْعَرَبِيَّةُ ___",options:["سَهْلَةٌ","سَهْلٌ","سُهُولَةٌ","سَهْلَانِ"],correct:0},
       {type:"type",q:"Écris « célèbre » :",answer:"شَهِيرٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « facile » :",answer:"سَهْلٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « difficile » :",answer:"صَعْبٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « beau » :",answer:"جَمِيلٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « grand » :",answer:"كَبِيرٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « langue » :",answer:"لُغَةٌ",hint:"3 lettres + ة"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدٌ","كِتَابٌ","هَذَا"],answer:"هَذَا كِتَابٌ جَدِيدٌ"},
       {type:"order",q:"Reconstitue :",words:["صَغِيرَةٌ","بِنْتٌ","هَذِهِ"],answer:"هَذِهِ بِنْتٌ صَغِيرَةٌ"},
       {type:"order",q:"Reconstitue :",words:["غَنِيٌّ","رَجُلٌ","هَذَا"],answer:"هَذَا رَجُلٌ غَنِيٌّ"},
       {type:"order",q:"Reconstitue :",words:["جَمِيلٌ","عُصْفُورٌ","هَذَا"],answer:"هَذَا عُصْفُورٌ جَمِيلٌ"},
       {type:"order",q:"Reconstitue :",words:["لَذِيذَةٌ","فَاكِهَةٌ","هَذِهِ"],answer:"هَذِهِ فَاكِهَةٌ لَذِيذَةٌ"},
       {type:"audio",audioText:"هَذَا كِتَابٌ جَدِيدٌ",options:["هَذَا كِتَابٌ جَدِيدٌ","هَذَا كِتَابٌ قَدِيمٌ","هَذَا قَلَمٌ جَدِيدٌ","هَذَا كِتَابٌ صَغِيرٌ"],correct:0},
       {type:"audio",audioText:"هَذَا رَجُلٌ غَنِيٌّ",options:["هَذَا رَجُلٌ فَقِيرٌ","هَذَا رَجُلٌ غَنِيٌّ","هَذَا رَجُلٌ كَبِيرٌ","هَذَا رَجُلٌ جَدِيدٌ"],correct:1},
       {type:"audio",audioText:"اللُّغَةُ الْعَرَبِيَّةُ سَهْلَةٌ",options:["اللُّغَةُ الْعَرَبِيَّةُ صَعْبَةٌ","اللُّغَةُ الْعَرَبِيَّةُ سَهْلَةٌ","اللُّغَةُ الْإِنْجِلِيزِيَّةُ سَهْلَةٌ","اللُّغَةُ الْعَرَبِيَّةُ جَمِيلَةٌ"],correct:1},
       {type:"audio",audioText:"هَذِهِ بِنْتٌ صَغِيرَةٌ",options:["هَذِهِ بِنْتٌ صَغِيرَةٌ","هَذَا وَلَدٌ صَغِيرٌ","هَذِهِ بِنْتٌ كَبِيرَةٌ","هَذِهِ فَتَاةٌ جَمِيلَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 10 ===== */
    {id:"t1l10", num:10, title:"Leçon 10", desc:"Les pronoms personnels",
     active:true, audio:"assets/audio/madinah/tome1/L10.mp3",
     text:["أَنَا طَالِبٌ","أَنْتَ مُدَرِّسٌ","أَنْتِ طَالِبَةٌ","هُوَ رَجُلٌ","هِيَ امْرَأَةٌ",
           "نَحْنُ طُلَّابٌ","أَنْتُمْ مُدَرِّسُونَ","هُمْ رِجَالٌ","هُنَّ نِسَاءٌ"],
     vocab:[
       {ar:"أَنَا",fr:"Je",tr:"anā"},
       {ar:"أَنْتَ",fr:"Tu (masc.)",tr:"anta"},
       {ar:"أَنْتِ",fr:"Tu (fém.)",tr:"anti"},
       {ar:"هُوَ",fr:"Il",tr:"huwa"},
       {ar:"هِيَ",fr:"Elle",tr:"hiya"},
       {ar:"نَحْنُ",fr:"Nous",tr:"naḥnu"},
       {ar:"أَنْتُمْ",fr:"Vous (masc.)",tr:"antum"},
       {ar:"أَنْتُنَّ",fr:"Vous (fém.)",tr:"antunna"},
       {ar:"هُمْ",fr:"Ils",tr:"hum"},
       {ar:"هُنَّ",fr:"Elles",tr:"hunna"},
       {ar:"الزَّمِيلُ",fr:"Collègue",tr:"az-zamīl"},
       {ar:"الزَّمِيلَةُ",fr:"Collègue (fém.)",tr:"az-zamīla"},
       {ar:"الزَّوْجُ",fr:"Mari",tr:"az-zawj"},
       {ar:"الزَّوْجَةُ",fr:"Épouse",tr:"az-zawja"},
       {ar:"الْفَتَى",fr:"Le jeune homme",tr:"al-fatā"},
       {ar:"الْفَتَاةُ",fr:"La jeune fille",tr:"al-fatā"},
       {ar:"الطِّفْلُ",fr:"L'enfant (masc.)",tr:"aṭ-ṭifl"},
       {ar:"الطِّفْلَةُ",fr:"L'enfant (fém.)",tr:"aṭ-ṭifla"},
       {ar:"الرَّجُلُ",fr:"L'homme",tr:"ar-rajul"},
       {ar:"الْمَرْأَةُ",fr:"La femme",tr:"al-marʾa"},
       {ar:"الْوَلَدُ",fr:"Le garçon",tr:"al-walad"},
       {ar:"الْبِنْتُ",fr:"La fille",tr:"al-bint"},
       {ar:"الصَّبِيُّ",fr:"Le petit garçon",tr:"aṣ-ṣabiyy"},
       {ar:"الصَّبِيَّةُ",fr:"La petite fille",tr:"aṣ-ṣabiyya"},
       {ar:"الطَّالِبُ",fr:"L'étudiant",tr:"aṭ-ṭālib"},
       {ar:"الطَّالِبَةُ",fr:"L'étudiante",tr:"aṭ-ṭāliba"},
       {ar:"الْمُدَرِّسُ",fr:"Le professeur",tr:"al-mudarris"},
       {ar:"الْمُدَرِّسَةُ",fr:"La professeure",tr:"al-mudarrisa"},
       {ar:"الطَّبِيبُ",fr:"Le médecin",tr:"aṭ-ṭabīb"},
       {ar:"الطَّبِيبَةُ",fr:"La médecin",tr:"aṭ-ṭabība"},
       {ar:"الْمُهَنْدِسُ",fr:"L'ingénieur",tr:"al-muhandis"},
       {ar:"الْمُهَنْدِسَةُ",fr:"L'ingénieure",tr:"al-muhandisa"},
       {ar:"التَّاجِرُ",fr:"Le commerçant",tr:"at-tājir"},
       {ar:"التَّاجِرَةُ",fr:"La commerçante",tr:"at-tājira"},
       {ar:"الْفَلَّاحُ",fr:"L'agriculteur",tr:"al-fallāḥ"},
       {ar:"الْفَلَّاحَةُ",fr:"L'agricultrice",tr:"al-fallāḥa"},
       {ar:"الْمُوَظَّفُ",fr:"L'employé",tr:"al-muwaẓẓaf"},
       {ar:"الْمُوَظَّفَةُ",fr:"L'employée",tr:"al-muwaẓẓafa"},
       {ar:"الْإِمَامُ",fr:"L'imam",tr:"al-imām"},
       {ar:"الْمُؤَذِّنُ",fr:"Le muezzin",tr:"al-muʾadhdhin"},
       {ar:"صَدِيقِي",fr:"Mon ami",tr:"ṣadīqī"},
       {ar:"صَدِيقَتِي",fr:"Mon amie",tr:"ṣadīqatī"},
       {ar:"أُسْتَاذٌ",fr:"Professeur (titre)",tr:"ustādh"},
       {ar:"أُسْتَاذَةٌ",fr:"Professeure (titre)",tr:"ustādha"}
     ],
     grammar:{title:"Les pronoms personnels isolés (الضمائر المنفصلة)",
       rule:"Les pronoms isolés : أَنَا (je), أَنْتَ (tu masc.), أَنْتِ (tu fém.), هُوَ (il), هِيَ (elle), نَحْنُ (nous), أَنْتُمْ (vous masc.), أَنْتُنَّ (vous fém.), هُمْ (ils), هُنَّ (elles).",
       examples:["أَنَا طَالِبٌ = Je suis étudiant","أَنْتَ مُدَرِّسٌ = Tu es professeur","هِيَ طَالِبَةٌ = Elle est étudiante","نَحْنُ طُلَّابٌ = Nous sommes étudiants"]},
     dialogue:[
       {sp:"A",ar:"مَنْ أَنْتَ؟",fr:"Qui es-tu ?"},
       {sp:"B",ar:"أَنَا طَالِبٌ.",fr:"Je suis étudiant."},
       {sp:"A",ar:"وَمَنْ هَذَا؟",fr:"Et qui est-ce ?"},
       {sp:"B",ar:"هَذَا زَمِيلِي.",fr:"C'est mon collègue."},
       {sp:"A",ar:"وَمَنْ هَذِهِ؟",fr:"Et qui est-ce (elle) ?"},
       {sp:"B",ar:"هَذِهِ زَمِيلَتِي.",fr:"C'est ma collègue."},
       {sp:"A",ar:"أَيْنَ أَنْتُمْ؟",fr:"Où êtes-vous ?"},
       {sp:"B",ar:"نَحْنُ فِي الْمَدْرَسَةِ.",fr:"Nous sommes à l'école."},
       {sp:"A",ar:"هَلْ هُمْ مُدَرِّسُونَ؟",fr:"Sont-ils professeurs ?"},
       {sp:"B",ar:"نَعَمْ، هُمْ مُدَرِّسُونَ.",fr:"Oui, ils sont professeurs."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَنَا ؟",options:["Je","Tu","Il","Elle"],correct:0},
       {type:"qcm",q:"Comment dit-on « elle » ?",options:["هِيَ","هُوَ","أَنْتِ","أَنَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « nous » ?",options:["نَحْنُ","أَنْتُمْ","هُمْ","أَنَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « ils » ?",options:["هُمْ","أَنْتُمْ","نَحْنُ","هِيَ"],correct:0},
       {type:"qcm",q:"Comment dit-on « tu » (masc.) ?",options:["أَنْتَ","أَنْتِ","هُوَ","هِيَ"],correct:0},
       {type:"qcm",q:"Que veut dire هُنَّ ؟",options:["Elles","Ils","Vous (fém.)","Nous"],correct:0},
       {type:"qcm",q:"Comment dit-on « étudiant » ?",options:["طَالِبٌ","مُدَرِّسٌ","طَبِيبٌ","مُهَنْدِسٌ"],correct:0},
       {type:"qcm",q:"Que veut dire الزَّمِيلُ ؟",options:["Collègue","Mari","Enfant","Jeune homme"],correct:0},
       {type:"qcm",q:"Comment dit-on « médecin » ?",options:["طَبِيبٌ","مُدَرِّسٌ","مُهَنْدِسٌ","تَاجِرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire الزَّوْجَةُ ؟",options:["Épouse","Mari","Mère","Sœur"],correct:0},
       {type:"qcm",q:"Comment dit-on « commerçant » ?",options:["تَاجِرٌ","فَلَّاحٌ","مُوَظَّفٌ","إِمَامٌ"],correct:0},
       {type:"qcm",q:"Que veut dire الطِّفْلَةُ ؟",options:["L'enfant (fém.)","L'enfant (masc.)","La fille","Le garçon"],correct:0},
       {type:"tf",ar:"أَنَا طَالِبٌ",q:"Signifie « Je suis étudiant »",correct:true},
       {type:"tf",ar:"أَنْتَ مُدَرِّسٌ",q:"Signifie « Il est professeur »",correct:false,explain:"أَنْتَ = tu (masc.)."},
       {type:"tf",q:"أَنْتُمْ est utilisé pour un groupe de femmes",correct:false,explain:"Non, c'est أَنْتُنَّ."},
       {type:"tf",ar:"هُمْ رِجَالٌ",q:"Signifie « Ils sont des hommes »",correct:true},
       {type:"fill",sentence:"___ طَالِبٌ",options:["أَنَا","أَنْتَ","هُوَ","هِيَ"],correct:0},
       {type:"fill",sentence:"___ طَالِبَةٌ",options:["هِيَ","هُوَ","أَنْتَ","نَحْنُ"],correct:0},
       {type:"fill",sentence:"___ طُلَّابٌ",options:["نَحْنُ","أَنَا","هُوَ","هِيَ"],correct:0},
       {type:"type",q:"Écris « je » :",answer:"أَنَا",hint:"3 lettres"},
       {type:"type",q:"Écris « elle » :",answer:"هِيَ",hint:"3 lettres"},
       {type:"type",q:"Écris « il » :",answer:"هُوَ",hint:"2 lettres"},
       {type:"type",q:"Écris « nous » :",answer:"نَحْنُ",hint:"3 lettres"},
       {type:"type",q:"Écris « étudiant » :",answer:"طَالِبٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « professeur » :",answer:"مُدَرِّسٌ",hint:"م د ر س"},
       {type:"order",q:"Reconstitue :",words:["طَالِبٌ","أَنَا"],answer:"أَنَا طَالِبٌ"},
       {type:"order",q:"Reconstitue :",words:["مُدَرِّسٌ","أَنْتَ"],answer:"أَنْتَ مُدَرِّسٌ"},
       {type:"order",q:"Reconstitue :",words:["طَالِبَةٌ","هِيَ"],answer:"هِيَ طَالِبَةٌ"},
       {type:"order",q:"Reconstitue :",words:["طُلَّابٌ","نَحْنُ"],answer:"نَحْنُ طُلَّابٌ"},
       {type:"order",q:"Reconstitue :",words:["رِجَالٌ","هُمْ"],answer:"هُمْ رِجَالٌ"},
       {type:"audio",audioText:"أَنَا طَالِبٌ",options:["أَنَا طَالِبٌ","أَنْتَ طَالِبٌ","هُوَ طَالِبٌ","نَحْنُ طُلَّابٌ"],correct:0},
       {type:"audio",audioText:"هِيَ طَالِبَةٌ",options:["هُوَ طَالِبٌ","هِيَ طَالِبَةٌ","أَنْتِ طَالِبَةٌ","أَنَا طَالِبَةٌ"],correct:1},
       {type:"audio",audioText:"نَحْنُ طُلَّابٌ",options:["هُمْ طُلَّابٌ","أَنْتُمْ طُلَّابٌ","نَحْنُ طُلَّابٌ","هُمْ مُدَرِّسُونَ"],correct:2},
       {type:"audio",audioText:"هُمْ مُدَرِّسُونَ",options:["هُمْ مُدَرِّسُونَ","نَحْنُ مُدَرِّسُونَ","هُمْ طُلَّابٌ","أَنْتُمْ مُدَرِّسُونَ"],correct:0}
     ]},    /* ===== LEÇON 11 ===== */
    {id:"t1l11", num:11, title:"Leçon 11", desc:"Positions · أَمَامَ / وَرَاءَ / بِجَانِبِ",
     active:true, audio:"assets/audio/madinah/tome1/L11.mp3",
     text:["الْكِتَابُ فِي الْحَقِيبَةِ","الْقِطُّ فَوْقَ السَّرِيرِ","الْبَيْتُ أَمَامَ الْمَسْجِدِ",
           "الْمَسْجِدُ وَرَاءَ الْبَيْتِ","الْمِفْتَاحُ تَحْتَ الْكِتَابِ","الْقَلَمُ بِجَانِبِ الدَّفْتَرِ",
           "الْحَدِيقَةُ بِجَانِبِ الْمَدْرَسَةِ","السَّيَّارَةُ أَمَامَ الْبَيْتِ"],
     vocab:[
       {ar:"أَمَامَ",fr:"Devant",tr:"amāma"},
       {ar:"وَرَاءَ",fr:"Derrière",tr:"warāʾa"},
       {ar:"تَحْتَ",fr:"Sous",tr:"taḥta"},
       {ar:"فَوْقَ",fr:"Au-dessus",tr:"fawqa"},
       {ar:"بِجَانِبِ",fr:"À côté de",tr:"bijānibi"},
       {ar:"بَيْنَ",fr:"Entre",tr:"bayna"},
       {ar:"حَوْلَ",fr:"Autour de",tr:"ḥawla"},
       {ar:"قُرْبَ",fr:"Près de",tr:"qurba"},
       {ar:"بَعِيدٌ",fr:"Loin",tr:"baʿīd"},
       {ar:"قَرِيبٌ",fr:"Proche",tr:"qarīb"},
       {ar:"عِنْدَ",fr:"Chez",tr:"ʿinda"},
       {ar:"مَعَ",fr:"Avec",tr:"maʿa"},
       {ar:"بِدُونِ",fr:"Sans",tr:"bidūni"},
       {ar:"دَاخِلَ",fr:"À l'intérieur",tr:"dākhila"},
       {ar:"خَارِجَ",fr:"À l'extérieur",tr:"khārija"},
       {ar:"يَمِين",fr:"Droite",tr:"yamīn"},
       {ar:"شِمَال",fr:"Gauche",tr:"shimāl"},
       {ar:"فَوْقَ الشَّجَرَةِ",fr:"Au-dessus de l'arbre",tr:"fawqa sh-shajara"},
       {ar:"تَحْتَ الشَّجَرَةِ",fr:"Sous l'arbre",tr:"taḥta sh-shajara"},
       {ar:"بِجَانِبِ الْبَابِ",fr:"À côté de la porte",tr:"bijānibi l-bāb"},
       {ar:"أَمَامَ الْمَدْرَسَةِ",fr:"Devant l'école",tr:"amāma l-madrasa"},
       {ar:"وَرَاءَ الْمَسْجِدِ",fr:"Derrière la mosquée",tr:"warāʾa l-masjid"},
       {ar:"بَيْنَ الْبَيْتِ وَالْمَسْجِدِ",fr:"Entre la maison et la mosquée",tr:"bayna l-bayt wa l-masjid"},
       {ar:"حَوْلَ الْحَدِيقَةِ",fr:"Autour du jardin",tr:"ḥawla l-ḥadīqa"},
       {ar:"قُرْبَ الْبَابِ",fr:"Près de la porte",tr:"qurba l-bāb"},
       {ar:"عِنْدَ الْبَابِ",fr:"Chez la porte",tr:"ʿinda l-bāb"},
       {ar:"مَعَ صَدِيقِي",fr:"Avec mon ami",tr:"maʿa ṣadīqī"},
       {ar:"دَاخِلَ الْبَيْتِ",fr:"À l'intérieur de la maison",tr:"dākhila l-bayt"},
       {ar:"خَارِجَ الْمَدْرَسَةِ",fr:"À l'extérieur de l'école",tr:"khārija l-madrasa"},
       {ar:"عَلَى الْيَمِينِ",fr:"À droite",tr:"ʿalā l-yamīn"},
       {ar:"عَلَى الشِّمَالِ",fr:"À gauche",tr:"ʿalā sh-shimāl"},
       {ar:"الْجِهَة",fr:"Le côté",tr:"al-jiha"},
       {ar:"الْمَكَان",fr:"Le lieu",tr:"al-makān"},
       {ar:"الْمَوْقِع",fr:"L'emplacement",tr:"al-mawqiʿ"},
       {ar:"الْحُدُود",fr:"Les limites",tr:"al-ḥudūd"},
       {ar:"الْمَرْكَز",fr:"Le centre",tr:"al-markaz"},
       {ar:"الطَّرَف",fr:"Le bord",tr:"aṭ-ṭaraf"},
       {ar:"الزَّاوِيَة",fr:"Le coin",tr:"az-zāwiya"},
       {ar:"الْوَسَط",fr:"Le milieu",tr:"al-wasaṭ"},
       {ar:"الْقِمَّة",fr:"Le sommet",tr:"al-qimma"},
       {ar:"الْقَاع",fr:"Le fond",tr:"al-qāʿ"},
       {ar:"السَّطْح",fr:"La surface",tr:"as-saṭḥ"},
       {ar:"الْجَانِب",fr:"Le côté",tr:"al-jānib"},
       {ar:"الْقُطْب",fr:"Le pôle",tr:"al-quṭb"},
       {ar:"الِاتِّجَاه",fr:"La direction",tr:"al-ittijāh"}
     ],
     grammar:{title:"Les prépositions de lieu (suite)",
       rule:"Les prépositions أَمَامَ (devant), وَرَاءَ (derrière), تَحْتَ (sous), فَوْقَ (au-dessus), بِجَانِبِ (à côté de), بَيْنَ (entre), حَوْلَ (autour de) sont suivies d'un nom au génitif (majrūr, kasra finale).",
       examples:["فِي الْحَقِيبَةِ = dans le sac","فَوْقَ السَّرِيرِ = au-dessus du lit","أَمَامَ الْمَسْجِدِ = devant la mosquée","بَيْنَ الْبَيْتِ وَالْمَسْجِدِ = entre la maison et la mosquée"]},
     dialogue:[
       {sp:"A",ar:"أَيْنَ الْكِتَابُ؟",fr:"Où est le livre ?"},
       {sp:"B",ar:"هُوَ فِي الْحَقِيبَةِ.",fr:"Il est dans le sac."},
       {sp:"A",ar:"أَيْنَ الْقِطُّ؟",fr:"Où est le chat ?"},
       {sp:"B",ar:"هُوَ فَوْقَ السَّرِيرِ.",fr:"Il est sur le lit."},
       {sp:"A",ar:"أَيْنَ الْمَسْجِدُ؟",fr:"Où est la mosquée ?"},
       {sp:"B",ar:"هُوَ وَرَاءَ الْبَيْتِ.",fr:"Elle est derrière la maison."},
       {sp:"A",ar:"أَيْنَ الْقَلَمُ؟",fr:"Où est le stylo ?"},
       {sp:"B",ar:"هُوَ بِجَانِبِ الدَّفْتَرِ.",fr:"Il est à côté du cahier."},
       {sp:"A",ar:"أَيْنَ الْحَدِيقَةُ؟",fr:"Où est le jardin ?"},
       {sp:"B",ar:"هِيَ بِجَانِبِ الْمَدْرَسَةِ.",fr:"Il est à côté de l'école."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَمَامَ ؟",options:["Devant","Derrière","Sous","Au-dessus"],correct:0},
       {type:"qcm",q:"Que veut dire وَرَاءَ ؟",options:["Derrière","Devant","Sous","Au-dessus"],correct:0},
       {type:"qcm",q:"Que veut dire تَحْتَ ؟",options:["Sous","Sur","Devant","Derrière"],correct:0},
       {type:"qcm",q:"Que veut dire فَوْقَ ؟",options:["Au-dessus","En dessous","Devant","Derrière"],correct:0},
       {type:"qcm",q:"Comment dit-on « à côté de » ?",options:["بِجَانِبِ","بَيْنَ","حَوْلَ","قُرْبَ"],correct:0},
       {type:"qcm",q:"Que veut dire بَيْنَ ؟",options:["Entre","Devant","Derrière","Sous"],correct:0},
       {type:"qcm",q:"Comment dit-on « autour de » ?",options:["حَوْلَ","بَيْنَ","بِجَانِبِ","عِنْدَ"],correct:0},
       {type:"qcm",q:"Que veut dire قَرِيبٌ ؟",options:["Proche","Loin","Grand","Petit"],correct:0},
       {type:"qcm",q:"Comment dit-on « droite » ?",options:["يَمِين","شِمَال","وَسَط","طَرَف"],correct:0},
       {type:"qcm",q:"Que veut dire دَاخِلَ ؟",options:["À l'intérieur","À l'extérieur","Devant","Derrière"],correct:0},
       {type:"qcm",q:"Que veut dire خَارِجَ ؟",options:["À l'extérieur","À l'intérieur","Devant","Derrière"],correct:0},
       {type:"tf",ar:"الْكِتَابُ فِي الْحَقِيبَةِ",q:"Signifie « Le livre est dans le sac »",correct:true},
       {type:"tf",ar:"الْقِطُّ فَوْقَ السَّرِيرِ",q:"Signifie « Le chat est sous le lit »",correct:false,explain:"فَوْقَ = au-dessus."},
       {type:"tf",ar:"الْبَيْتُ أَمَامَ الْمَسْجِدِ",q:"Signifie « La maison est devant la mosquée »",correct:true},
       {type:"tf",ar:"الْمَسْجِدُ وَرَاءَ الْبَيْتِ",q:"Signifie « La mosquée est derrière la maison »",correct:true},
       {type:"fill",sentence:"الْكِتَابُ ___ الْحَقِيبَةِ",options:["فِي","عَلَى","مِنْ","إِلَى"],correct:0},
       {type:"fill",sentence:"الْقَلَمُ ___ الدَّفْتَرِ",options:["بِجَانِبِ","بَيْنَ","حَوْلَ","قُرْبَ"],correct:0},
       {type:"fill",sentence:"الْقِطُّ ___ السَّرِيرِ",options:["فَوْقَ","تَحْتَ","أَمَامَ","وَرَاءَ"],correct:0},
       {type:"type",q:"Écris « devant » :",answer:"أَمَامَ",hint:"4 lettres"},
       {type:"type",q:"Écris « derrière » :",answer:"وَرَاءَ",hint:"4 lettres"},
       {type:"type",q:"Écris « sous » :",answer:"تَحْتَ",hint:"3 lettres"},
       {type:"type",q:"Écris « entre » :",answer:"بَيْنَ",hint:"3 lettres"},
       {type:"type",q:"Écris « droite » :",answer:"يَمِين",hint:"4 lettres"},
       {type:"type",q:"Écris « gauche » :",answer:"شِمَال",hint:"4 lettres"},
       {type:"order",q:"Reconstitue :",words:["الْحَقِيبَةِ","فِي","الْكِتَابُ"],answer:"الْكِتَابُ فِي الْحَقِيبَةِ"},
       {type:"order",q:"Reconstitue :",words:["السَّرِيرِ","فَوْقَ","الْقِطُّ"],answer:"الْقِطُّ فَوْقَ السَّرِيرِ"},
       {type:"order",q:"Reconstitue :",words:["الْمَسْجِدِ","أَمَامَ","الْبَيْتُ"],answer:"الْبَيْتُ أَمَامَ الْمَسْجِدِ"},
       {type:"order",q:"Reconstitue :",words:["الْبَيْتِ","وَرَاءَ","الْمَسْجِدُ"],answer:"الْمَسْجِدُ وَرَاءَ الْبَيْتِ"},
       {type:"order",q:"Reconstitue :",words:["الدَّفْتَرِ","بِجَانِبِ","الْقَلَمُ"],answer:"الْقَلَمُ بِجَانِبِ الدَّفْتَرِ"},
       {type:"audio",audioText:"الْكِتَابُ فِي الْحَقِيبَةِ",options:["الْكِتَابُ فِي الْحَقِيبَةِ","الْكِتَابُ عَلَى الْحَقِيبَةِ","الْقَلَمُ فِي الْحَقِيبَةِ","الْكِتَابُ فِي الْغُرْفَةِ"],correct:0},
       {type:"audio",audioText:"الْقِطُّ فَوْقَ السَّرِيرِ",options:["الْقِطُّ تَحْتَ السَّرِيرِ","الْقِطُّ فَوْقَ السَّرِيرِ","الْقِطُّ فِي السَّرِيرِ","الْكَلْبُ فَوْقَ السَّرِيرِ"],correct:1},
       {type:"audio",audioText:"الْبَيْتُ أَمَامَ الْمَسْجِدِ",options:["الْبَيْتُ وَرَاءَ الْمَسْجِدِ","الْبَيْتُ بِجَانِبِ الْمَسْجِدِ","الْبَيْتُ أَمَامَ الْمَسْجِدِ","الْبَيْتُ فِي الْمَسْجِدِ"],correct:2},
       {type:"audio",audioText:"الْقَلَمُ بِجَانِبِ الدَّفْتَرِ",options:["الْقَلَمُ بِجَانِبِ الدَّفْتَرِ","الْقَلَمُ فِي الدَّفْتَرِ","الْكِتَابُ بِجَانِبِ الدَّفْتَرِ","الْقَلَمُ فَوْقَ الدَّفْتَرِ"],correct:0}
     ]},

    /* ===== LEÇON 12 ===== */
    {id:"t1l12", num:12, title:"Leçon 12", desc:"Noms diptotes · Pays et villes",
     active:true, audio:"assets/audio/madinah/tome1/L12.mp3",
     text:["أَنَا مِنْ سُورِيَا","هُوَ مِنْ مِصْرَ","هِيَ مِنْ لُبْنَانَ","نَحْنُ مِنْ فَرَنْسَا",
           "أَنْتَ مِنْ مَكَّةَ","هُمْ مِنَ الْمَدِينَةِ","أَنَا مِنْ بَغْدَادَ"],
     vocab:[
       {ar:"سُورِيَا",fr:"Syrie",tr:"sūriyā"},
       {ar:"مِصْرُ",fr:"Égypte",tr:"miṣr"},
       {ar:"لُبْنَانُ",fr:"Liban",tr:"lubnān"},
       {ar:"الْعِرَاقُ",fr:"Irak",tr:"al-ʿirāq"},
       {ar:"فَرَنْسَا",fr:"France",tr:"faransā"},
       {ar:"مَكَّةُ",fr:"La Mecque",tr:"makka"},
       {ar:"الْمَدِينَةُ",fr:"Médine",tr:"al-madīna"},
       {ar:"الْمَدِينَةُ الْمُنَوَّرَةُ",fr:"Médine (la lumineuse)",tr:"al-madīna al-munawwara"},
       {ar:"بَغْدَادُ",fr:"Bagdad",tr:"baghdād"},
       {ar:"دِمَشْقُ",fr:"Damas",tr:"dimashq"},
       {ar:"الْقَاهِرَةُ",fr:"Le Caire",tr:"al-qāhira"},
       {ar:"بَيْرُوتُ",fr:"Beyrouth",tr:"bayrūt"},
       {ar:"عَمَّانُ",fr:"Amman",tr:"ʿammān"},
       {ar:"الرِّيَاضُ",fr:"Riyad",tr:"ar-riyāḍ"},
       {ar:"جُدَّةُ",fr:"Djeddah",tr:"judda"},
       {ar:"الطَّائِفُ",fr:"Taif",tr:"aṭ-ṭāʾif"},
       {ar:"الْكُوَيْتُ",fr:"Koweït",tr:"al-kuwayt"},
       {ar:"قَطَرُ",fr:"Qatar",tr:"qaṭar"},
       {ar:"الْإِمَارَاتُ",fr:"Émirats",tr:"al-imārāt"},
       {ar:"السُّعُودِيَّةُ",fr:"Arabie saoudite",tr:"as-suʿūdiyya"},
       {ar:"الْمَغْرِبُ",fr:"Maroc",tr:"al-maghrib"},
       {ar:"الْجَزَائِرُ",fr:"Algérie",tr:"al-jazāʾir"},
       {ar:"تُونُسُ",fr:"Tunisie",tr:"tūnus"},
       {ar:"لِيبْيَا",fr:"Libye",tr:"lībiyā"},
       {ar:"السُّودَانُ",fr:"Soudan",tr:"as-sūdān"},
       {ar:"الْيَمَنُ",fr:"Yémen",tr:"al-yaman"},
       {ar:"عُمَانُ",fr:"Oman",tr:"ʿumān"},
       {ar:"الْأُرْدُنُّ",fr:"Jordanie",tr:"al-urdunn"},
       {ar:"فِلَسْطِينُ",fr:"Palestine",tr:"filasṭīn"},
       {ar:"تُرْكِيَا",fr:"Turquie",tr:"turkiyā"},
       {ar:"إِسْطَنْبُول",fr:"Istanbul",tr:"isṭanbūl"},
       {ar:"طَهْرَان",fr:"Téhéran",tr:"ṭahrān"},
       {ar:"بَاكِسْتَان",fr:"Pakistan",tr:"bākistān"},
       {ar:"الْهِنْدُ",fr:"Inde",tr:"al-hind"},
       {ar:"الصِّينُ",fr:"Chine",tr:"aṣ-ṣīn"},
       {ar:"أَمْرِيكَا",fr:"Amérique",tr:"amrīkā"},
       {ar:"كَندَا",fr:"Canada",tr:"kanadā"},
       {ar:"بِرِيطَانْيَا",fr:"Angleterre",tr:"birīṭānyā"},
       {ar:"أَلْمَانْيَا",fr:"Allemagne",tr:"almānyā"},
       {ar:"إِيطَالْيَا",fr:"Italie",tr:"īṭālyā"},
       {ar:"إِسْبَانْيَا",fr:"Espagne",tr:"isbānyā"},
       {ar:"الْبَلَدُ",fr:"Le pays",tr:"al-balad"},
       {ar:"الْوَطَنُ",fr:"La patrie",tr:"al-waṭan"}
     ],
     grammar:{title:"Les noms diptotes (الممنوع من الصرف)",
       rule:"Certains noms ne prennent pas de tanwin (double voyelle) et prennent la fatha au lieu de la kasra au génitif. Ce sont souvent des noms propres, des noms de pays, ou des adjectifs de couleur. Exemple : سُورِيَا (Syrie), مِصْرُ (Égypte), أَحْمَرُ (rouge).",
       examples:["أَنَا مِنْ سُورِيَا = Je viens de Syrie","هُوَ مِنْ مِصْرَ = Il vient d'Égypte","هِيَ مِنْ لُبْنَانَ = Elle vient du Liban"]},
     dialogue:[
       {sp:"A",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?"},
       {sp:"B",ar:"أَنَا مِنْ سُورِيَا.",fr:"Je viens de Syrie."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هُوَ؟",fr:"Et d'où vient-il ?"},
       {sp:"B",ar:"هُوَ مِنْ مِصْرَ.",fr:"Il vient d'Égypte."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هِيَ؟",fr:"Et d'où vient-elle ?"},
       {sp:"B",ar:"هِيَ مِنْ لُبْنَانَ.",fr:"Elle vient du Liban."},
       {sp:"A",ar:"وَمِنْ أَيْنَ أَنْتُمْ؟",fr:"Et d'où venez-vous ?"},
       {sp:"B",ar:"نَحْنُ مِنْ فَرَنْسَا.",fr:"Nous venons de France."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire سُورِيَا ؟",options:["Syrie","Égypte","Liban","Irak"],correct:0},
       {type:"qcm",q:"Comment dit-on « Égypte » ?",options:["مِصْرُ","سُورِيَا","لُبْنَانُ","الْعِرَاقُ"],correct:0},
       {type:"qcm",q:"Que veut dire لُبْنَانُ ؟",options:["Liban","Syrie","Égypte","Irak"],correct:0},
       {type:"qcm",q:"Comment dit-on « Irak » ?",options:["الْعِرَاقُ","سُورِيَا","مِصْرُ","لُبْنَانُ"],correct:0},
       {type:"qcm",q:"Que veut dire فَرَنْسَا ؟",options:["France","Italie","Espagne","Allemagne"],correct:0},
       {type:"qcm",q:"Comment dit-on « La Mecque » ?",options:["مَكَّةُ","الْمَدِينَةُ","بَغْدَادُ","دِمَشْقُ"],correct:0},
       {type:"qcm",q:"Que veut dire بَغْدَادُ ؟",options:["Bagdad","Damas","Le Caire","Riyad"],correct:0},
       {type:"qcm",q:"Comment dit-on « Damas » ?",options:["دِمَشْقُ","بَغْدَادُ","مَكَّةُ","الْقَاهِرَةُ"],correct:0},
       {type:"qcm",q:"Que veut dire الْمَغْرِبُ ؟",options:["Maroc","Algérie","Tunisie","Libye"],correct:0},
       {type:"qcm",q:"Comment dit-on « Turquie » ?",options:["تُرْكِيَا","تُونُسُ","لِيبْيَا","طَهْرَان"],correct:0},
       {type:"qcm",q:"Que veut dire الْوَطَنُ ؟",options:["La patrie","Le pays","La ville","Le village"],correct:0},
       {type:"qcm",q:"Comment dit-on « pays » ?",options:["الْبَلَدُ","الْوَطَنُ","الْمَدِينَةُ","الْقَرْيَةُ"],correct:0},
       {type:"tf",ar:"أَنَا مِنْ سُورِيَا",q:"Signifie « Je viens de Syrie »",correct:true},
       {type:"tf",ar:"هُوَ مِنْ مِصْرَ",q:"Signifie « Il va en Égypte »",correct:false,explain:"مِنْ = de/depuis."},
       {type:"tf",ar:"نَحْنُ مِنْ فَرَنْسَا",q:"Signifie « Nous venons de France »",correct:true},
       {type:"tf",q:"Les noms de pays sont souvent diptotes",correct:true},
       {type:"fill",sentence:"أَنَا مِنْ ___",options:["سُورِيَا","الْمَدْرَسَةِ","الْبَيْتِ","الْمَسْجِدِ"],correct:0},
       {type:"fill",sentence:"هُوَ ___ مِصْرَ",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"fill",sentence:"هِيَ ___ لُبْنَانَ",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"type",q:"Écris « Syrie » :",answer:"سُورِيَا",hint:"5 lettres"},
       {type:"type",q:"Écris « Égypte » :",answer:"مِصْرُ",hint:"3 lettres"},
       {type:"type",q:"Écris « Liban » :",answer:"لُبْنَانُ",hint:"5 lettres"},
       {type:"type",q:"Écris « Irak » :",answer:"الْعِرَاقُ",hint:"avec ال"},
       {type:"type",q:"Écris « Maroc » :",answer:"الْمَغْرِبُ",hint:"avec ال"},
       {type:"type",q:"Écris « France » :",answer:"فَرَنْسَا",hint:"6 lettres"},
       {type:"order",q:"Reconstitue :",words:["سُورِيَا","مِنْ","أَنَا"],answer:"أَنَا مِنْ سُورِيَا"},
       {type:"order",q:"Reconstitue :",words:["مِصْرَ","مِنْ","هُوَ"],answer:"هُوَ مِنْ مِصْرَ"},
       {type:"order",q:"Reconstitue :",words:["لُبْنَانَ","مِنْ","هِيَ"],answer:"هِيَ مِنْ لُبْنَانَ"},
       {type:"order",q:"Reconstitue :",words:["فَرَنْسَا","مِنْ","نَحْنُ"],answer:"نَحْنُ مِنْ فَرَنْسَا"},
       {type:"order",q:"Reconstitue :",words:["مَكَّةَ","مِنْ","أَنْتَ"],answer:"أَنْتَ مِنْ مَكَّةَ"},
       {type:"audio",audioText:"أَنَا مِنْ سُورِيَا",options:["أَنَا مِنْ سُورِيَا","أَنَا مِنْ مِصْرَ","أَنَا مِنْ لُبْنَانَ","أَنَا مِنْ فَرَنْسَا"],correct:0},
       {type:"audio",audioText:"هُوَ مِنْ مِصْرَ",options:["هُوَ مِنْ فَرَنْسَا","هُوَ مِنْ مِصْرَ","هُوَ مِنْ سُورِيَا","هُوَ مِنْ لُبْنَانَ"],correct:1},
       {type:"audio",audioText:"هِيَ مِنْ لُبْنَانَ",options:["هِيَ مِنْ سُورِيَا","هِيَ مِنْ مِصْرَ","هِيَ مِنْ لُبْنَانَ","هِيَ مِنْ مَكَّةَ"],correct:2},
       {type:"audio",audioText:"نَحْنُ مِنْ فَرَنْسَا",options:["نَحْنُ مِنْ فَرَنْسَا","أَنْتُمْ مِنْ فَرَنْسَا","هُمْ مِنْ فَرَنْسَا","نَحْنُ مِنْ مِصْرَ"],correct:0}
     ]},

    /* ===== LEÇON 13 ===== */
    {id:"t1l13", num:13, title:"Leçon 13", desc:"Pluriels brisés",
     active:true, audio:"assets/audio/madinah/tome1/L13.mp3",
     text:["هَؤُلَاءِ مُدَرِّسُونَ","هَؤُلَاءِ طُلَّابٌ","هَؤُلَاءِ رِجَالٌ",
           "هَذِهِ مُدَرِّسَاتٌ","هَذِهِ نِسَاءٌ","الْكُتُبُ جَدِيدَةٌ","الرِّجَالُ كَثِيرُونَ"],
     vocab:[
       {ar:"مَطْعَمٌ",fr:"Restaurant",tr:"maṭʿam"},
       {ar:"مُجْتَهِدٌ",fr:"Travailleur",tr:"mujtahid"},
       {ar:"طُلَّابٌ",fr:"Étudiants",tr:"ṭullāb"},
       {ar:"رِجَالٌ",fr:"Hommes",tr:"rijāl"},
       {ar:"نِسَاءٌ",fr:"Femmes",tr:"nisāʾ"},
       {ar:"مُدَرِّسُونَ",fr:"Professeurs",tr:"mudarrisūn"},
       {ar:"مُدَرِّسَاتٌ",fr:"Professeures",tr:"mudarrisāt"},
       {ar:"كُتُبٌ",fr:"Livres",tr:"kutub"},
       {ar:"أَقْلَامٌ",fr:"Stylos",tr:"aqlām"},
       {ar:"أَبْوَابٌ",fr:"Portes",tr:"abwāb"},
       {ar:"بُيُوتٌ",fr:"Maisons",tr:"buyūt"},
       {ar:"مَسَاجِدُ",fr:"Mosquées",tr:"masājid"},
       {ar:"مَدَارِسُ",fr:"Écoles",tr:"madāris"},
       {ar:"أَوْلَادٌ",fr:"Enfants / Garçons",tr:"awlād"},
       {ar:"بَنَاتٌ",fr:"Filles",tr:"banāt"},
       {ar:"إِخْوَةٌ",fr:"Frères",tr:"ikhwa"},
       {ar:"أَخَوَاتٌ",fr:"Sœurs",tr:"akhawāt"},
       {ar:"أَصْدِقَاءُ",fr:"Amis",tr:"aṣdiqāʾ"},
       {ar:"أَقَارِبُ",fr:"Proches / Parents",tr:"aqārib"},
       {ar:"جِيرَانٌ",fr:"Voisins",tr:"jīrān"},
       {ar:"مُسْلِمُونَ",fr:"Musulmans",tr:"muslimūn"},
       {ar:"مُسْلِمَاتٌ",fr:"Musulmanes",tr:"muslimāt"},
       {ar:"عُلَمَاءُ",fr:"Savants",tr:"ʿulamāʾ"},
       {ar:"أَطِبَّاءُ",fr:"Médecins",tr:"aṭibbāʾ"},
       {ar:"مُهَنْدِسُونَ",fr:"Ingénieurs",tr:"muhandisūn"},
       {ar:"تُجَّارٌ",fr:"Commerçants",tr:"tujjār"},
       {ar:"فَلَّاحُونَ",fr:"Agriculteurs",tr:"fallāḥūn"},
       {ar:"عُمَّالٌ",fr:"Ouvriers",tr:"ʿummāl"},
       {ar:"مُوَظَّفُونَ",fr:"Employés",tr:"muwaẓẓafūn"},
       {ar:"جُنُودٌ",fr:"Soldats",tr:"junūd"},
       {ar:"شُعُوبٌ",fr:"Peuples",tr:"shuʿūb"},
       {ar:"دُوَلٌ",fr:"Pays (pluriel)",tr:"duwal"},
       {ar:"مُدُنٌ",fr:"Villes",tr:"mudun"},
       {ar:"قُرَى",fr:"Villages",tr:"qurā"},
       {ar:"شَوَارِعُ",fr:"Rues",tr:"shawāriʿ"},
       {ar:"حَوَانِيتُ",fr:"Boutiques",tr:"ḥawānīt"},
       {ar:"أَسْوَاقٌ",fr:"Marchés",tr:"aswāq"},
       {ar:"مَطَاعِمُ",fr:"Restaurants",tr:"maṭāʿim"},
       {ar:"مُسْتَشْفَيَاتٌ",fr:"Hôpitaux",tr:"mustashfayāt"},
       {ar:"جَامِعَاتٌ",fr:"Universités",tr:"jāmiʿāt"},
       {ar:"مَكَاتِبُ",fr:"Bureaux",tr:"makātib"},
       {ar:"دَرَاسَاتٌ",fr:"Études",tr:"darāsāt"},
       {ar:"أَخْبَارٌ",fr:"Nouvelles",tr:"akhbār"},
       {ar:"كَلِمَاتٌ",fr:"Mots",tr:"kalimāt"}
     ],
     grammar:{title:"Les pluriels brisés (جمع التكسير)",
       rule:"Le pluriel brisé modifie la structure interne du mot (contrairement au pluriel sain qui ajoute un suffixe). Il n'y a pas de règle fixe : il faut l'apprendre par cœur.",
       examples:["رَجُلٌ → رِجَالٌ (homme → hommes)","كِتَابٌ → كُتُبٌ (livre → livres)","طَالِبٌ → طُلَّابٌ (étudiant → étudiants)","مَسْجِدٌ → مَسَاجِدُ (mosquée → mosquées)"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَؤُلَاءِ؟",fr:"Qui sont ceux-là ?"},
       {sp:"B",ar:"هَؤُلَاءِ مُدَرِّسُونَ.",fr:"Ce sont des professeurs."},
       {sp:"A",ar:"وَمَنْ هَؤُلَاءِ؟",fr:"Et qui sont celles-là ?"},
       {sp:"B",ar:"هَؤُلَاءِ طَالِبَاتٌ.",fr:"Ce sont des étudiantes."},
       {sp:"A",ar:"مَا هَذِهِ؟",fr:"Qu'est-ce que c'est (elle) ?"},
       {sp:"B",ar:"هَذِهِ كُتُبٌ جَدِيدَةٌ.",fr:"Ce sont des livres nouveaux."},
       {sp:"A",ar:"وَمَا هَؤُلَاءِ؟",fr:"Et qui sont ceux-ci ?"},
       {sp:"B",ar:"هَؤُلَاءِ رِجَالٌ.",fr:"Ce sont des hommes."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مُجْتَهِدٌ ؟",options:["Travailleur","Paresseux","Intelligent","Bête"],correct:0},
       {type:"qcm",q:"Que veut dire رِجَالٌ ؟",options:["Hommes","Femmes","Étudiants","Professeurs"],correct:0},
       {type:"qcm",q:"Que veut dire نِسَاءٌ ؟",options:["Femmes","Hommes","Étudiantes","Professeures"],correct:0},
       {type:"qcm",q:"Pluriel de رَجُلٌ ?",options:["رِجَالٌ","رَجُلُونَ","رَجُلَاتٌ","أَرْجَالٌ"],correct:0},
       {type:"qcm",q:"Pluriel de كِتَابٌ ?",options:["كُتُبٌ","كِتَابُونَ","كِتَابَاتٌ","كَاتِبُونَ"],correct:0},
       {type:"qcm",q:"Pluriel de طَالِبٌ ?",options:["طُلَّابٌ","طَالِبُونَ","طَالِبَاتٌ","طَوَالِبُ"],correct:0},
       {type:"qcm",q:"Pluriel de مَسْجِدٌ ?",options:["مَسَاجِدُ","مَسْجِدُونَ","مَسْجِدَاتٌ","مَسَاجِيدُ"],correct:0},
       {type:"qcm",q:"Que veut dire أَقْلَامٌ ؟",options:["Stylos","Livres","Portes","Maisons"],correct:0},
       {type:"qcm",q:"Que veut dire بُيُوتٌ ؟",options:["Maisons","Portes","Stylos","Livres"],correct:0},
       {type:"qcm",q:"Pluriel de وَلَدٌ ?",options:["أَوْلَادٌ","وَلَدُونَ","وَلَدَاتٌ","وُلْدَانٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « amis » ?",options:["أَصْدِقَاءُ","صَدِيقُونَ","صَدَائِقُ","صُدَقَاءُ"],correct:0},
       {type:"qcm",q:"Que veut dire مُدُنٌ ؟",options:["Villes","Pays","Villages","Quartiers"],correct:0},
       {type:"tf",q:"Le pluriel de رَجُلٌ est رِجَالٌ",correct:true},
       {type:"tf",q:"Le pluriel de كِتَابٌ est كِتَابُونَ",correct:false,explain:"C'est كُتُبٌ (pluriel brisé)."},
       {type:"tf",ar:"هَؤُلَاءِ مُدَرِّسُونَ",q:"Signifie « Ce sont des professeurs »",correct:true},
       {type:"tf",ar:"هَذِهِ نِسَاءٌ",q:"Signifie « Ce sont des femmes »",correct:true},
       {type:"fill",sentence:"هَؤُلَاءِ ___",options:["رِجَالٌ","رَجُلٌ","رَجُلَانِ","رَجُلَةٌ"],correct:0},
       {type:"fill",sentence:"هَذِهِ ___",options:["نِسَاءٌ","اِمْرَأَةٌ","اِمْرَأَتَانِ","نِسْوَةٌ"],correct:0},
       {type:"fill",sentence:"___ جَدِيدَةٌ",options:["الْكُتُبُ","الْكِتَابُ","كِتَابٌ","كِتَابَانِ"],correct:0},
       {type:"type",q:"Écris « étudiants » :",answer:"طُلَّابٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « hommes » :",answer:"رِجَالٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « femmes » :",answer:"نِسَاءٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « livres » :",answer:"كُتُبٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « stylos » :",answer:"أَقْلَامٌ",hint:"5 lettres"},
       {type:"type",q:"Écris « maisons » :",answer:"بُيُوتٌ",hint:"4 lettres"},
       {type:"order",q:"Reconstitue :",words:["مُدَرِّسُونَ","هَؤُلَاءِ"],answer:"هَؤُلَاءِ مُدَرِّسُونَ"},
       {type:"order",q:"Reconstitue :",words:["طُلَّابٌ","هَؤُلَاءِ"],answer:"هَؤُلَاءِ طُلَّابٌ"},
       {type:"order",q:"Reconstitue :",words:["رِجَالٌ","هَؤُلَاءِ"],answer:"هَؤُلَاءِ رِجَالٌ"},
       {type:"order",q:"Reconstitue :",words:["نِسَاءٌ","هَذِهِ"],answer:"هَذِهِ نِسَاءٌ"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدَةٌ","الْكُتُبُ"],answer:"الْكُتُبُ جَدِيدَةٌ"},
       {type:"audio",audioText:"هَؤُلَاءِ مُدَرِّسُونَ",options:["هَؤُلَاءِ مُدَرِّسُونَ","هَؤُلَاءِ طُلَّابٌ","هَؤُلَاءِ رِجَالٌ","هَؤُلَاءِ نِسَاءٌ"],correct:0},
       {type:"audio",audioText:"هَؤُلَاءِ طُلَّابٌ",options:["هَؤُلَاءِ مُدَرِّسُونَ","هَؤُلَاءِ طُلَّابٌ","هَؤُلَاءِ رِجَالٌ","هَؤُلَاءِ نِسَاءٌ"],correct:1},
       {type:"audio",audioText:"هَذِهِ نِسَاءٌ",options:["هَذِهِ نِسَاءٌ","هَذِهِ رِجَالٌ","هَذِهِ طَالِبَاتٌ","هَذِهِ مُدَرِّسَاتٌ"],correct:0},
       {type:"audio",audioText:"الْكُتُبُ جَدِيدَةٌ",options:["الْكُتُبُ جَدِيدَةٌ","الْكِتَابُ جَدِيدٌ","الْكُتُبُ قَدِيمَةٌ","الْكِتَابُ قَدِيمٌ"],correct:0}
     ]},

    /* ===== LEÇON 14 ===== */
    {id:"t1l14", num:14, title:"Leçon 14", desc:"La préposition مِنْ · Origine",
     active:true, audio:"assets/audio/madinah/tome1/L14.mp3",
     text:["هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ","أَنَا مِنْ فَرَنْسَا","هُوَ مِنْ مِصْرَ",
           "الْقَلَمُ مِنَ الصِّينِ","السَّاعَةُ مِنَ الْيَابَانِ","الْعَسَلُ مِنَ الْجَبَلِ"],
     vocab:[
       {ar:"الدُّسْتُورُ",fr:"Constitution",tr:"ad-dustūr"},
       {ar:"مَسْجِدٌ",fr:"Mosquée",tr:"masjid"},
       {ar:"كَنِيسَةٌ",fr:"Église",tr:"kanīsa"},
       {ar:"الْمَكْتَبَةُ",fr:"Bibliothèque",tr:"al-maktaba"},
       {ar:"الْجَامِعَةُ",fr:"Université",tr:"al-jāmiʿa"},
       {ar:"الْمُسْتَشْفَى",fr:"Hôpital",tr:"al-mustashfā"},
       {ar:"الْمَطَارُ",fr:"Aéroport",tr:"al-maṭār"},
       {ar:"الْمَحَطَّةُ",fr:"Gare",tr:"al-maḥaṭṭa"},
       {ar:"الْمَرْكَزُ",fr:"Centre",tr:"al-markaz"},
       {ar:"الْمَتْحَفُ",fr:"Musée",tr:"al-matḥaf"},
       {ar:"الْمَسْرَحُ",fr:"Théâtre",tr:"al-masraḥ"},
       {ar:"الْفُنْدُقُ",fr:"Hôtel",tr:"al-funduq"},
       {ar:"الْحَانُوتُ",fr:"Épicerie",tr:"al-ḥānūt"},
       {ar:"الْمَخْبَزُ",fr:"Boulangerie",tr:"al-makhbaz"},
       {ar:"الصَّيْدَلِيَّةُ",fr:"Pharmacie",tr:"aṣ-ṣaydaliyya"},
       {ar:"الصِّينُ",fr:"Chine",tr:"aṣ-ṣīn"},
       {ar:"الْيَابَانُ",fr:"Japon",tr:"al-yābān"},
       {ar:"كُورِيَا",fr:"Corée",tr:"kūriyā"},
       {ar:"الْهِنْدُ",fr:"Inde",tr:"al-hind"},
       {ar:"بَاكِسْتَان",fr:"Pakistan",tr:"bākistān"},
       {ar:"أَفْغَانِسْتَان",fr:"Afghanistan",tr:"afghānistān"},
       {ar:"إِيرَان",fr:"Iran",tr:"īrān"},
       {ar:"الْجَبَلُ",fr:"La montagne",tr:"al-jabal"},
       {ar:"الْبَحْرُ",fr:"La mer",tr:"al-baḥr"},
       {ar:"النَّهْرُ",fr:"La rivière",tr:"an-nahr"},
       {ar:"الْغَابَةُ",fr:"La forêt",tr:"al-ghāba"},
       {ar:"الصَّحْرَاءُ",fr:"Le désert",tr:"aṣ-ṣaḥrāʾ"},
       {ar:"الْحَقْلُ",fr:"Le champ",tr:"al-ḥaql"},
       {ar:"الْمَزْرَعَةُ",fr:"La ferme",tr:"al-mazraʿa"},
       {ar:"الْمَصْنَعُ",fr:"L'usine",tr:"al-maṣnaʿ"},
       {ar:"الْمَكْتَبُ",fr:"Le bureau",tr:"al-maktab"},
       {ar:"الْبَيْتُ",fr:"La maison",tr:"al-bayt"},
       {ar:"الْمَدْرَسَةُ",fr:"L'école",tr:"al-madrasa"},
       {ar:"مِنْ أَيْنَ",fr:"D'où ?",tr:"min ayna"},
       {ar:"مِنَ الْقَاهِرَةِ",fr:"Du Caire",tr:"mina l-qāhira"},
       {ar:"مِنْ دِمَشْقَ",fr:"De Damas",tr:"min dimashq"},
       {ar:"مِنَ الْمَغْرِبِ",fr:"Du Maroc",tr:"mina l-maghrib"},
       {ar:"مِنْ تُونُسَ",fr:"De Tunis",tr:"min tūnus"},
       {ar:"مِنَ الْمُسْتَشْفَى",fr:"De l'hôpital",tr:"mina l-mustashfā"},
       {ar:"مِنَ الْمَكْتَبَةِ",fr:"De la bibliothèque",tr:"mina l-maktaba"},
       {ar:"مِنَ الْمَطَارِ",fr:"De l'aéroport",tr:"mina l-maṭār"},
       {ar:"مِنَ السُّوقِ",fr:"Du marché",tr:"mina s-sūq"},
       {ar:"مِنَ الْبَحْرِ",fr:"De la mer",tr:"mina l-baḥr"},
       {ar:"مِنَ الْجَبَلِ",fr:"De la montagne",tr:"mina l-jabal"}
     ],
     grammar:{title:"La préposition مِنْ (de / depuis)",
       rule:"مِنْ signifie « de » ou « depuis ». Elle est suivie d'un nom au génitif (majrūr). Devant l'article ال, مِنْ devient مِنَ (avec fatha).",
       examples:["أَنَا مِنْ فَرَنْسَا = Je viens de France","هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ = Ce livre vient de la bibliothèque","هُوَ مِنْ مِصْرَ = Il vient d'Égypte"]},
     dialogue:[
       {sp:"A",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?"},
       {sp:"B",ar:"أَنَا مِنْ فَرَنْسَا.",fr:"Je viens de France."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هُوَ؟",fr:"Et d'où vient-il ?"},
       {sp:"B",ar:"هُوَ مِنْ مِصْرَ.",fr:"Il vient d'Égypte."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هَذَا الْكِتَابُ؟",fr:"Et d'où vient ce livre ?"},
       {sp:"B",ar:"هُوَ مِنَ الْمَكْتَبَةِ.",fr:"Il vient de la bibliothèque."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هَذَا الْقَلَمُ؟",fr:"Et d'où vient ce stylo ?"},
       {sp:"B",ar:"هُوَ مِنَ الصِّينِ.",fr:"Il vient de Chine."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مِنْ ؟",options:["De / Depuis","À / Vers","Dans","Sur"],correct:0},
       {type:"qcm",q:"Comment dit-on « mosquée » ?",options:["مَسْجِدٌ","كَنِيسَةٌ","مَكْتَبَةٌ","جَامِعَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « église » ?",options:["كَنِيسَةٌ","مَسْجِدٌ","مَكْتَبَةٌ","جَامِعَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire الْمُسْتَشْفَى ؟",options:["Hôpital","École","Mosquée","Université"],correct:0},
       {type:"qcm",q:"Comment dit-on « aéroport » ?",options:["الْمَطَارُ","الْمَحَطَّةُ","الْمَرْكَزُ","الْفُنْدُقُ"],correct:0},
       {type:"qcm",q:"Que veut dire الْمَتْحَفُ ؟",options:["Musée","Théâtre","Hôtel","Centre"],correct:0},
       {type:"qcm",q:"Comment dit-on « gare » ?",options:["الْمَحَطَّةُ","الْمَطَارُ","الْمَرْكَزُ","الْمَكْتَبُ"],correct:0},
       {type:"qcm",q:"Que veut dire الصَّيْدَلِيَّةُ ؟",options:["Pharmacie","Boulangerie","Épicerie","Musée"],correct:0},
       {type:"qcm",q:"Comment dit-on « Chine » ?",options:["الصِّينُ","الْيَابَانُ","كُورِيَا","الْهِنْدُ"],correct:0},
       {type:"qcm",q:"Que veut dire الْغَابَةُ ؟",options:["La forêt","Le désert","Le champ","La ferme"],correct:0},
       {type:"qcm",q:"Comment dit-on « désert » ?",options:["الصَّحْرَاءُ","الْغَابَةُ","الْحَقْلُ","الْجَبَلُ"],correct:0},
       {type:"tf",ar:"أَنَا مِنْ فَرَنْسَا",q:"Signifie « Je viens de France »",correct:true},
       {type:"tf",ar:"هُوَ مِنْ مِصْرَ",q:"Signifie « Il va en Égypte »",correct:false,explain:"مِنْ = de/depuis."},
       {type:"tf",q:"Devant ال, مِنْ devient مِنَ",correct:true},
       {type:"tf",ar:"هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ",q:"Signifie « Ce livre vient de la bibliothèque »",correct:true},
       {type:"fill",sentence:"أَنَا ___ فَرَنْسَا",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"fill",sentence:"هَذَا الْكِتَابُ ___ الْمَكْتَبَةِ",options:["مِنَ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"fill",sentence:"___ أَيْنَ أَنْتَ؟",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"type",q:"Écris « de » :",answer:"مِنْ",hint:"2 lettres"},
       {type:"type",q:"Écris « église » :",answer:"كَنِيسَةٌ",hint:"5 lettres + ة"},
       {type:"type",q:"Écris « hôpital » :",answer:"الْمُسْتَشْفَى",hint:"avec ال"},
       {type:"type",q:"Écris « aéroport » :",answer:"الْمَطَارُ",hint:"avec ال"},
       {type:"type",q:"Écris « musée » :",answer:"الْمَتْحَفُ",hint:"avec ال"},
       {type:"type",q:"Écris « Chine » :",answer:"الصِّينُ",hint:"avec ال"},
       {type:"order",q:"Reconstitue :",words:["فَرَنْسَا","مِنْ","أَنَا"],answer:"أَنَا مِنْ فَرَنْسَا"},
       {type:"order",q:"Reconstitue :",words:["مِصْرَ","مِنْ","هُوَ"],answer:"هُوَ مِنْ مِصْرَ"},
       {type:"order",q:"Reconstitue :",words:["الْمَكْتَبَةِ","مِنَ","الْكِتَابُ","هَذَا"],answer:"هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ"},
       {type:"order",q:"Reconstitue :",words:["الصِّينِ","مِنَ","الْقَلَمُ","هَذَا"],answer:"هَذَا الْقَلَمُ مِنَ الصِّينِ"},
       {type:"order",q:"Reconstitue :",words:["أَيْنَ","مِنْ","أَنْتَ","؟"],answer:"مِنْ أَيْنَ أَنْتَ ؟"},
       {type:"audio",audioText:"أَنَا مِنْ فَرَنْسَا",options:["أَنَا مِنْ فَرَنْسَا","أَنَا مِنْ مِصْرَ","أَنَا مِنْ سُورِيَا","أَنَا مِنْ لُبْنَانَ"],correct:0},
       {type:"audio",audioText:"هُوَ مِنْ مِصْرَ",options:["هُوَ مِنْ فَرَنْسَا","هُوَ مِنْ مِصْرَ","هُوَ مِنْ سُورِيَا","هُوَ مِنْ لُبْنَانَ"],correct:1},
       {type:"audio",audioText:"هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ",options:["هَذَا الْكِتَابُ مِنَ الْمَكْتَبَةِ","هَذَا الْكِتَابُ فِي الْمَكْتَبَةِ","هَذَا الْقَلَمُ مِنَ الْمَكْتَبَةِ","هَذَا الْكِتَابُ مِنَ الْمَدْرَسَةِ"],correct:0},
       {type:"audio",audioText:"هَذَا الْقَلَمُ مِنَ الصِّينِ",options:["هَذَا الْقَلَمُ مِنَ الْيَابَانِ","هَذَا الْقَلَمُ مِنَ الصِّينِ","هَذَا الْكِتَابُ مِنَ الصِّينِ","هَذَا الْقَلَمُ مِنَ الْهِنْدِ"],correct:1}
     ]},

    /* ===== LEÇON 15 ===== */
    {id:"t1l15", num:15, title:"Leçon 15", desc:"Pronoms féminins · أَنْتِ / أَنْتُنَّ / هُنَّ",
     active:true, audio:"assets/audio/madinah/tome1/L15.mp3",
     text:["أَنْتِ طَالِبَةٌ مُجْتَهِدَةٌ","أَنْتُنَّ طَالِبَاتٌ مُجْتَهِدَاتٌ","هُنَّ مُدَرِّسَاتٌ",
           "هِيَ طَبِيبَةٌ مَاهِرَةٌ","أَنْتِ أُمٌّ كَرِيمَةٌ","هُنَّ أَخَوَاتٌ صَالِحَاتٌ"],
     vocab:[
       {ar:"الْقَاهِرَةُ",fr:"Le Caire",tr:"al-qāhira"},
       {ar:"الْآنَ",fr:"Maintenant",tr:"al-ān"},
       {ar:"قَبْلَ",fr:"Avant",tr:"qabla"},
       {ar:"بَعْدَ",fr:"Après",tr:"baʿda"},
       {ar:"كَيْفَ",fr:"Comment ?",tr:"kayfa"},
       {ar:"مَتَى",fr:"Quand ?",tr:"matā"},
       {ar:"أَنْتُنَّ",fr:"Vous (fém.)",tr:"antunna"},
       {ar:"هُنَّ",fr:"Elles",tr:"hunna"},
       {ar:"صَالِحٌ",fr:"Vertueux",tr:"ṣāliḥ"},
       {ar:"صَالِحَةٌ",fr:"Vertueuse",tr:"ṣāliḥa"},
       {ar:"مَاهِرٌ",fr:"Habile",tr:"māhir"},
       {ar:"مَاهِرَةٌ",fr:"Habile (fém.)",tr:"māhira"},
       {ar:"كَرِيمٌ",fr:"Généreux",tr:"karīm"},
       {ar:"كَرِيمَةٌ",fr:"Généreuse",tr:"karīma"},
       {ar:"جَمِيلٌ",fr:"Beau",tr:"jamīl"},
       {ar:"جَمِيلَةٌ",fr:"Belle",tr:"jamīla"},
       {ar:"مُجْتَهِدٌ",fr:"Travailleur",tr:"mujtahid"},
       {ar:"مُجْتَهِدَةٌ",fr:"Travailleuse",tr:"mujtahida"},
       {ar:"مُدَرِّسَةٌ",fr:"Professeure",tr:"mudarrisa"},
       {ar:"طَبِيبَةٌ",fr:"Médecin (fém.)",tr:"ṭabība"},
       {ar:"مُهَنْدِسَةٌ",fr:"Ingénieure",tr:"muhandisa"},
       {ar:"كَاتِبَةٌ",fr:"Écrivaine",tr:"kātiba"},
       {ar:"قَارِئَةٌ",fr:"Lectrice",tr:"qāriʾa"},
       {ar:"حَامِلَةٌ",fr:"Enceinte",tr:"ḥāmila"},
       {ar:"كَبِيرَةٌ",fr:"Grande",tr:"kabīra"},
       {ar:"صَغِيرَةٌ",fr:"Petite",tr:"ṣaghīra"},
       {ar:"الْأُمُّ",fr:"La mère",tr:"al-umm"},
       {ar:"الْبِنْتُ",fr:"La fille",tr:"al-bint"},
       {ar:"الْأُخْتُ",fr:"La sœur",tr:"al-ukht"},
       {ar:"الْجَدَّةُ",fr:"La grand-mère",tr:"al-jadda"},
       {ar:"الْعَمَّةُ",fr:"La tante paternelle",tr:"al-ʿamma"},
       {ar:"الْخَالَةُ",fr:"La tante maternelle",tr:"al-khāla"},
       {ar:"الصَّدِيقَةُ",fr:"L'amie",tr:"aṣ-ṣadīqa"},
       {ar:"الْجَارَةُ",fr:"La voisine",tr:"al-jāra"},
       {ar:"الزَّوْجَةُ",fr:"L'épouse",tr:"az-zawja"},
       {ar:"الْمَلِكَةُ",fr:"La reine",tr:"al-malika"},
       {ar:"الْمُؤْمِنَةُ",fr:"La croyante",tr:"al-muʾmina"},
       {ar:"الْمُسْلِمَةُ",fr:"La musulmane",tr:"al-muslima"},
       {ar:"الْأُسْتَاذَةُ",fr:"La professeure (titre)",tr:"al-ustādha"},
       {ar:"الْمَرْأَةُ",fr:"La femme",tr:"al-marʾa"},
       {ar:"النِّسَاءُ",fr:"Les femmes",tr:"an-nisāʾ"},
       {ar:"الْبَنَاتُ",fr:"Les filles",tr:"al-banāt"},
       {ar:"الْأَخَوَاتُ",fr:"Les sœurs",tr:"al-akhawāt"},
       {ar:"الْأُمَّهَاتُ",fr:"Les mères",tr:"al-ummahāt"},
       {ar:"الْمُسْلِمَاتُ",fr:"Les musulmanes",tr:"al-muslimāt"}
     ],
     grammar:{title:"Les pronoms personnels féminins",
       rule:"أَنْتِ (tu fém.), أَنْتُنَّ (vous fém. pl.), هُنَّ (elles). Ces pronoms s'accordent avec des adjectifs au féminin.",
       examples:["أَنْتِ طَالِبَةٌ = Tu es étudiante","أَنْتُنَّ طَالِبَاتٌ = Vous êtes étudiantes","هُنَّ مُدَرِّسَاتٌ = Elles sont professeures"]},
     dialogue:[
       {sp:"A",ar:"كَيْفَ حَالُكِ يَا فَاطِمَةُ؟",fr:"Comment vas-tu, Fatima ?"},
       {sp:"B",ar:"أَنَا بِخَيْرٍ، شُكْرًا.",fr:"Je vais bien, merci."},
       {sp:"A",ar:"مَتَى رَجَعْتِ مِنَ الْقَاهِرَةِ؟",fr:"Quand es-tu revenue du Caire ?"},
       {sp:"B",ar:"رَجَعْتُ الْآنَ.",fr:"Je suis revenue maintenant."},
       {sp:"A",ar:"وَكَيْفَ حَالُ أُخْتِكِ؟",fr:"Et comment va ta sœur ?"},
       {sp:"B",ar:"هِيَ بِخَيْرٍ أَيْضًا.",fr:"Elle va bien aussi."},
       {sp:"A",ar:"وَمَا أَخْبَارُ صَدِيقَاتِكِ؟",fr:"Et tes amies ?"},
       {sp:"B",ar:"هُنَّ بِخَيْرٍ، شُكْرًا.",fr:"Elles vont bien, merci."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَنْتِ ؟",options:["Tu (fém.)","Tu (masc.)","Vous (fém.)","Elle"],correct:0},
       {type:"qcm",q:"Que veut dire هُنَّ ؟",options:["Elles","Ils","Vous (fém.)","Nous"],correct:0},
       {type:"qcm",q:"Comment dit-on « maintenant » ?",options:["الْآنَ","قَبْلَ","بَعْدَ","مَتَى"],correct:0},
       {type:"qcm",q:"Comment dit-on « avant » ?",options:["قَبْلَ","بَعْدَ","الْآنَ","مَتَى"],correct:0},
       {type:"qcm",q:"Comment dit-on « quand ? »",options:["مَتَى","كَيْفَ","أَيْنَ","مَا"],correct:0},
       {type:"qcm",q:"Comment dit-on « comment ? »",options:["كَيْفَ","مَتَى","أَيْنَ","مَا"],correct:0},
       {type:"qcm",q:"Que veut dire الْقَاهِرَةُ ؟",options:["Le Caire","Alexandrie","Damas","Bagdad"],correct:0},
       {type:"qcm",q:"Féminin de مُجْتَهِدٌ ?",options:["مُجْتَهِدَةٌ","مُجْتَهِدَاتٌ","مُجْتَهِدُونَ","مُجْتَهِدَانِ"],correct:0},
       {type:"qcm",q:"Féminin de كَرِيمٌ ?",options:["كَرِيمَةٌ","كُرَمَاءُ","كَرِيمَانِ","كَرِيمُونَ"],correct:0},
       {type:"qcm",q:"Comment dit-on « belle » ?",options:["جَمِيلَةٌ","جَمِيلٌ","جُمَلَاءُ","جَمِيلَانِ"],correct:0},
       {type:"qcm",q:"Que veut dire الصَّدِيقَةُ ؟",options:["L'amie","L'ami","La sœur","La mère"],correct:0},
       {type:"qcm",q:"Comment dit-on « voisine » ?",options:["الْجَارَةُ","الْجَارُ","الْأُخْتُ","الْأُمُّ"],correct:0},
       {type:"tf",ar:"أَنْتِ طَالِبَةٌ",q:"Signifie « Tu es étudiante »",correct:true},
       {type:"tf",ar:"هُنَّ مُدَرِّسَاتٌ",q:"Signifie « Ils sont professeurs »",correct:false,explain:"هُنَّ = elles (fém. pl.)."},
       {type:"tf",ar:"أَنْتُنَّ طَالِبَاتٌ",q:"Signifie « Vous êtes étudiantes »",correct:true},
       {type:"tf",q:"Le pluriel de مُسْلِمَةٌ est مُسْلِمَاتٌ",correct:true},
       {type:"fill",sentence:"___ طَالِبَةٌ",options:["أَنْتِ","أَنْتَ","هُوَ","هُمْ"],correct:0},
       {type:"fill",sentence:"___ مُدَرِّسَاتٌ",options:["هُنَّ","هُمْ","أَنْتُمْ","نَحْنُ"],correct:0},
       {type:"fill",sentence:"___ طَالِبَاتٌ",options:["أَنْتُنَّ","أَنْتُمْ","هُمْ","هِيَ"],correct:0},
       {type:"type",q:"Écris « maintenant » :",answer:"الْآنَ",hint:"4 lettres"},
       {type:"type",q:"Écris « avant » :",answer:"قَبْلَ",hint:"3 lettres"},
       {type:"type",q:"Écris « après » :",answer:"بَعْدَ",hint:"3 lettres"},
       {type:"type",q:"Écris « comment » :",answer:"كَيْفَ",hint:"3 lettres"},
       {type:"type",q:"Écris « quand » :",answer:"مَتَى",hint:"3 lettres"},
       {type:"type",q:"Écris « tu (fém.) » :",answer:"أَنْتِ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["طَالِبَةٌ","أَنْتِ"],answer:"أَنْتِ طَالِبَةٌ"},
       {type:"order",q:"Reconstitue :",words:["مُدَرِّسَاتٌ","هُنَّ"],answer:"هُنَّ مُدَرِّسَاتٌ"},
       {type:"order",q:"Reconstitue :",words:["طَالِبَاتٌ","أَنْتُنَّ"],answer:"أَنْتُنَّ طَالِبَاتٌ"},
       {type:"order",q:"Reconstitue :",words:["الْقَاهِرَةِ","مِنَ","رَجَعْتُ"],answer:"رَجَعْتُ مِنَ الْقَاهِرَةِ"},
       {type:"order",q:"Reconstitue :",words:["حَالُكِ","كَيْفَ","؟"],answer:"كَيْفَ حَالُكِ ؟"},
       {type:"audio",audioText:"أَنْتِ طَالِبَةٌ",options:["أَنْتِ طَالِبَةٌ","أَنْتَ طَالِبٌ","هِيَ طَالِبَةٌ","أَنَا طَالِبَةٌ"],correct:0},
       {type:"audio",audioText:"هُنَّ مُدَرِّسَاتٌ",options:["هُمْ مُدَرِّسُونَ","هُنَّ مُدَرِّسَاتٌ","أَنْتُنَّ مُدَرِّسَاتٌ","نَحْنُ مُدَرِّسَاتٌ"],correct:1},
       {type:"audio",audioText:"أَنْتُنَّ طَالِبَاتٌ",options:["أَنْتُنَّ طَالِبَاتٌ","أَنْتُمْ طُلَّابٌ","هُنَّ طَالِبَاتٌ","نَحْنُ طَالِبَاتٌ"],correct:0},
       {type:"audio",audioText:"كَيْفَ حَالُكِ؟",options:["كَيْفَ حَالُكِ؟","كَيْفَ حَالُكَ؟","كَيْفَ حَالُهَا؟","مَا اسْمُكِ؟"],correct:0}
     ]},    /* ===== LEÇON 16 ===== */
    {id:"t1l16", num:16, title:"Leçon 16", desc:"La nature · Paysages",
     active:true, audio:"assets/audio/madinah/tome1/L16.mp3",
     text:["النَّهْرُ يَجْرِي بَيْنَ الْجِبَالِ","الْفُنْدُقُ كَبِيرٌ","الْبَحْرُ جَمِيلٌ",
           "الطَّائِرَةُ سَرِيعَةٌ","الْجِبَالُ عَالِيَةٌ","الشَّمْسُ مُشْرِقَةٌ",
           "الْقَمَرُ مُنِيرٌ","النُّجُومُ لَامِعَةٌ"],
     vocab:[
       {ar:"النَّهْرُ",fr:"La rivière",tr:"an-nahr"},
       {ar:"الْبَحْرُ",fr:"La mer",tr:"al-baḥr"},
       {ar:"الْجَبَلُ",fr:"La montagne",tr:"al-jabal"},
       {ar:"الْغَابَةُ",fr:"La forêt",tr:"al-ghāba"},
       {ar:"الصَّحْرَاءُ",fr:"Le désert",tr:"aṣ-ṣaḥrāʾ"},
       {ar:"الْفُنْدُقُ",fr:"L'hôtel",tr:"al-funduq"},
       {ar:"الطَّائِرَةُ",fr:"L'avion",tr:"aṭ-ṭāʾira"},
       {ar:"السَّفِينَةُ",fr:"Le bateau",tr:"as-safīna"},
       {ar:"السَّيَّارَةُ",fr:"La voiture",tr:"as-sayyāra"},
       {ar:"الدَّرَّاجَةُ",fr:"Le vélo",tr:"ad-darrāja"},
       {ar:"الْقِطَارُ",fr:"Le train",tr:"al-qiṭār"},
       {ar:"الْحَافِلَةُ",fr:"Le bus",tr:"al-ḥāfila"},
       {ar:"الطَّرِيقُ",fr:"La route",tr:"aṭ-ṭarīq"},
       {ar:"الْجِسْرُ",fr:"Le pont",tr:"al-jisr"},
       {ar:"السَّمَاءُ",fr:"Le ciel",tr:"as-samāʾ"},
       {ar:"الشَّمْسُ",fr:"Le soleil",tr:"ash-shams"},
       {ar:"الْقَمَرُ",fr:"La lune",tr:"al-qamar"},
       {ar:"النَّجْمُ",fr:"L'étoile",tr:"an-najm"},
       {ar:"النُّجُومُ",fr:"Les étoiles",tr:"an-nujūm"},
       {ar:"السَّحَابُ",fr:"Les nuages",tr:"as-saḥāb"},
       {ar:"الْمَطَرُ",fr:"La pluie",tr:"al-maṭar"},
       {ar:"الثَّلْجُ",fr:"La neige",tr:"ath-thalj"},
       {ar:"الرِّيحُ",fr:"Le vent",tr:"ar-rīḥ"},
       {ar:"الْحَرَارَةُ",fr:"La chaleur",tr:"al-ḥarāra"},
       {ar:"الْبَرْدُ",fr:"Le froid",tr:"al-bard"},
       {ar:"الشَّجَرَةُ",fr:"L'arbre",tr:"ash-shajara"},
       {ar:"الزَّهْرَةُ",fr:"La fleur",tr:"az-zahra"},
       {ar:"الْوَرْدَةُ",fr:"La rose",tr:"al-warda"},
       {ar:"النَّبَاتُ",fr:"La plante",tr:"an-nabāt"},
       {ar:"الْحَيَوَانُ",fr:"L'animal",tr:"al-ḥayawān"},
       {ar:"الطَّائِرُ",fr:"L'oiseau",tr:"aṭ-ṭāʾir"},
       {ar:"السَّمَكُ",fr:"Le poisson",tr:"as-samak"},
       {ar:"الْقِطُّ",fr:"Le chat",tr:"al-qiṭṭ"},
       {ar:"الْكَلْبُ",fr:"Le chien",tr:"al-kalb"},
       {ar:"الْحِصَانُ",fr:"Le cheval",tr:"al-ḥiṣān"},
       {ar:"الْجَمَلُ",fr:"Le chameau",tr:"al-jamal"},
       {ar:"الْبَقَرَةُ",fr:"La vache",tr:"al-baqara"},
       {ar:"الْخَرُوفُ",fr:"Le mouton",tr:"al-kharūf"},
       {ar:"الطَّاوُوسُ",fr:"Le paon",tr:"aṭ-ṭāwūs"},
       {ar:"الْأَسَدُ",fr:"Le lion",tr:"al-asad"},
       {ar:"الْفِيلُ",fr:"L'éléphant",tr:"al-fīl"},
       {ar:"يَجْرِي",fr:"Coule",tr:"yajrī"},
       {ar:"عَالِيَةٌ",fr:"Haute",tr:"ʿāliya"},
       {ar:"مُنِيرٌ",fr:"Lumineux",tr:"munīr"},
       {ar:"لَامِعَةٌ",fr:"Brillante",tr:"lāmiʿa"}
     ],
     grammar:{title:"Les noms de la nature",
       rule:"Les noms liés à la nature et aux éléments. Attention au genre : certains sont masculins (الْبَحْرُ, الْجَبَلُ) et d'autres féminins (الشَّمْسُ, الْأَرْضُ).",
       examples:["السَّفَرُ مُمْتِعٌ = Le voyage est amusant","الْقِرَاءَةُ مُفِيدَةٌ = La lecture est utile","الطَّائِرَةُ سَرِيعَةٌ = L'avion est rapide"]},
     dialogue:[
       {sp:"A",ar:"أَيْنَ الْفُنْدُقُ؟",fr:"Où est l'hôtel ?"},
       {sp:"B",ar:"هُوَ أَمَامَ الْبَحْرِ.",fr:"Il est devant la mer."},
       {sp:"A",ar:"هَلِ الْبَحْرُ جَمِيلٌ؟",fr:"La mer est-elle belle ?"},
       {sp:"B",ar:"نَعَمْ، الْبَحْرُ جَمِيلٌ جِدًّا.",fr:"Oui, la mer est très belle."},
       {sp:"A",ar:"أَيْنَ النَّهْرُ؟",fr:"Où est la rivière ?"},
       {sp:"B",ar:"هُوَ بَيْنَ الْجِبَالِ.",fr:"Elle est entre les montagnes."},
       {sp:"A",ar:"هَلْ الْجِبَالُ عَالِيَةٌ؟",fr:"Les montagnes sont-elles hautes ?"},
       {sp:"B",ar:"نَعَمْ، هِيَ عَالِيَةٌ جِدًّا.",fr:"Oui, elles sont très hautes."},
       {sp:"A",ar:"مَا هَذَا؟",fr:"Qu'est-ce que c'est ?"},
       {sp:"B",ar:"هَذَا نَجْمٌ لَامِعٌ فِي السَّمَاءِ.",fr:"C'est une étoile brillante dans le ciel."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire النَّهْرُ ؟",options:["La rivière","La mer","La montagne","L'hôtel"],correct:0},
       {type:"qcm",q:"Comment dit-on « avion » ?",options:["الطَّائِرَةُ","الْفُنْدُقُ","الْبَحْرُ","النَّهْرُ"],correct:0},
       {type:"qcm",q:"Comment dit-on « entre » ?",options:["بَيْنَ","أَمَامَ","وَرَاءَ","تَحْتَ"],correct:0},
       {type:"qcm",q:"Que veut dire الْجَبَلُ ؟",options:["La montagne","La rivière","La mer","La forêt"],correct:0},
       {type:"qcm",q:"Comment dit-on « ciel » ?",options:["السَّمَاءُ","الْأَرْضُ","الشَّمْسُ","الْقَمَرُ"],correct:0},
       {type:"qcm",q:"Que veut dire الشَّمْسُ ؟",options:["Le soleil","La lune","L'étoile","Le nuage"],correct:0},
       {type:"qcm",q:"Comment dit-on « lune » ?",options:["الْقَمَرُ","الشَّمْسُ","النَّجْمُ","السَّحَابُ"],correct:0},
       {type:"qcm",q:"Que veut dire الْمَطَرُ ؟",options:["La pluie","La neige","Le vent","La chaleur"],correct:0},
       {type:"qcm",q:"Comment dit-on « étoile » ?",options:["النَّجْمُ","الْقَمَرُ","الشَّمْسُ","السَّحَابُ"],correct:0},
       {type:"qcm",q:"Que veut dire الْحَيَوَانُ ؟",options:["L'animal","L'oiseau","Le poisson","La plante"],correct:0},
       {type:"qcm",q:"Comment dit-on « cheval » ?",options:["الْحِصَانُ","الْجَمَلُ","الْبَقَرَةُ","الْخَرُوفُ"],correct:0},
       {type:"qcm",q:"Que veut dire الْأَسَدُ ؟",options:["Le lion","L'éléphant","Le tigre","Le loup"],correct:0},
       {type:"tf",ar:"الْبَحْرُ جَمِيلٌ",q:"Signifie « La mer est belle »",correct:true},
       {type:"tf",ar:"النَّهْرُ يَجْرِي بَيْنَ الْجِبَالِ",q:"Signifie « La rivière coule entre les montagnes »",correct:true},
       {type:"tf",ar:"الطَّائِرَةُ سَرِيعَةٌ",q:"Signifie « L'avion est rapide »",correct:true},
       {type:"tf",ar:"الْقَمَرُ مُنِيرٌ",q:"Signifie « La lune est lumineuse »",correct:true},
       {type:"fill",sentence:"النَّهْرُ ___ بَيْنَ الْجِبَالِ",options:["يَجْرِي","يَقْرَأ","يَكْتُب","يَذْهَب"],correct:0},
       {type:"fill",sentence:"___ كَبِيرٌ",options:["الْفُنْدُقُ","الطَّائِرَةُ","النَّهْرُ","الْبَحْرُ"],correct:0},
       {type:"fill",sentence:"الْجِبَالُ ___",options:["عَالِيَةٌ","عَالٍ","عُلُوٌّ","عَالِيَاتٌ"],correct:0},
       {type:"type",q:"Écris « la mer » :",answer:"الْبَحْرُ",hint:"avec ال"},
       {type:"type",q:"Écris « la rivière » :",answer:"النَّهْرُ",hint:"avec ال"},
       {type:"type",q:"Écris « le soleil » :",answer:"الشَّمْسُ",hint:"avec ال"},
       {type:"type",q:"Écris « la lune » :",answer:"الْقَمَرُ",hint:"avec ال"},
       {type:"type",q:"Écris « l'étoile » :",answer:"النَّجْمُ",hint:"avec ال"},
       {type:"type",q:"Écris « la montagne » :",answer:"الْجَبَلُ",hint:"avec ال"},
       {type:"order",q:"Reconstitue :",words:["جَمِيلٌ","الْبَحْرُ"],answer:"الْبَحْرُ جَمِيلٌ"},
       {type:"order",q:"Reconstitue :",words:["الْجِبَالِ","بَيْنَ","النَّهْرُ","يَجْرِي"],answer:"النَّهْرُ يَجْرِي بَيْنَ الْجِبَالِ"},
       {type:"order",q:"Reconstitue :",words:["كَبِيرٌ","الْفُنْدُقُ"],answer:"الْفُنْدُقُ كَبِيرٌ"},
       {type:"order",q:"Reconstitue :",words:["سَرِيعَةٌ","الطَّائِرَةُ"],answer:"الطَّائِرَةُ سَرِيعَةٌ"},
       {type:"order",q:"Reconstitue :",words:["مُنِيرٌ","الْقَمَرُ"],answer:"الْقَمَرُ مُنِيرٌ"},
       {type:"audio",audioText:"الْبَحْرُ جَمِيلٌ",options:["الْبَحْرُ جَمِيلٌ","الْبَحْرُ كَبِيرٌ","النَّهْرُ جَمِيلٌ","الْبَحْرُ وَاسِعٌ"],correct:0},
       {type:"audio",audioText:"النَّهْرُ يَجْرِي بَيْنَ الْجِبَالِ",options:["النَّهْرُ يَجْرِي بَيْنَ الْجِبَالِ","النَّهْرُ يَجْرِي أَمَامَ الْجِبَالِ","الْبَحْرُ يَجْرِي بَيْنَ الْجِبَالِ","النَّهْرُ يَجْرِي فِي الْجِبَالِ"],correct:0},
       {type:"audio",audioText:"الْقَمَرُ مُنِيرٌ",options:["الْقَمَرُ مُنِيرٌ","الشَّمْسُ مُشْرِقَةٌ","الْقَمَرُ جَمِيلٌ","الشَّمْسُ كَبِيرَةٌ"],correct:0},
       {type:"audio",audioText:"الطَّائِرَةُ سَرِيعَةٌ",options:["الطَّائِرَةُ سَرِيعَةٌ","السَّيَّارَةُ سَرِيعَةٌ","الطَّائِرَةُ كَبِيرَةٌ","السَّفِينَةُ سَرِيعَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 17 ===== */
    {id:"t1l17", num:17, title:"Leçon 17", desc:"Adjectifs (suite) · Ouvert / Fermé",
     active:true, audio:"assets/audio/madinah/tome1/L17.mp3",
     text:["الْبَابُ مَفْتُوحٌ","النَّافِذَةُ مَفْتُوحَةٌ","الْكِتَابُ جَدِيدٌ","الْمَدْرَسَةُ كَبِيرَةٌ",
           "الْحَدِيقَةُ وَاسِعَةٌ","الْبَيْتُ نَظِيفٌ","الْكُرْسِيُّ مَكْسُورٌ"],
     vocab:[
       {ar:"مَفْتُوحٌ",fr:"Ouvert",tr:"maftūḥ"},
       {ar:"مَفْتُوحَةٌ",fr:"Ouverte",tr:"maftūḥa"},
       {ar:"مُغْلَقٌ",fr:"Fermé",tr:"mughlaq"},
       {ar:"مُغْلَقَةٌ",fr:"Fermée",tr:"mughlaqa"},
       {ar:"مَكْسُورٌ",fr:"Cassé",tr:"maksūr"},
       {ar:"مَكْسُورَةٌ",fr:"Cassée",tr:"maksūra"},
       {ar:"وَاسِعٌ",fr:"Large",tr:"wāsiʿ"},
       {ar:"وَاسِعَةٌ",fr:"Large (fém.)",tr:"wāsiʿa"},
       {ar:"ضَيِّقٌ",fr:"Étroit",tr:"ḍayyiq"},
       {ar:"ضَيِّقَةٌ",fr:"Étroite",tr:"ḍayyiqa"},
       {ar:"طَوِيلٌ",fr:"Long",tr:"ṭawīl"},
       {ar:"طَوِيلَةٌ",fr:"Longue",tr:"ṭawīla"},
       {ar:"قَصِيرٌ",fr:"Court",tr:"qaṣīr"},
       {ar:"قَصِيرَةٌ",fr:"Courte",tr:"qaṣīra"},
       {ar:"كَثِيرٌ",fr:"Nombreux",tr:"kathīr"},
       {ar:"كَثِيرَةٌ",fr:"Nombreuse",tr:"kathīra"},
       {ar:"قَلِيلٌ",fr:"Peu",tr:"qalīl"},
       {ar:"قَلِيلَةٌ",fr:"Peu (fém.)",tr:"qalīla"},
       {ar:"مُمْتِعٌ",fr:"Amusant",tr:"mumtiʿ"},
       {ar:"مُفِيدٌ",fr:"Utile",tr:"mufīd"},
       {ar:"مُهِمٌّ",fr:"Important",tr:"muhimm"},
       {ar:"صَعْبٌ",fr:"Difficile",tr:"ṣaʿb"},
       {ar:"سَهْلٌ",fr:"Facile",tr:"sahl"},
       {ar:"جَدِيدٌ",fr:"Nouveau",tr:"jadīd"},
       {ar:"جَدِيدَةٌ",fr:"Nouvelle",tr:"jadīda"},
       {ar:"قَدِيمٌ",fr:"Vieux",tr:"qadīm"},
       {ar:"قَدِيمَةٌ",fr:"Vieille",tr:"qadīma"},
       {ar:"نَظِيفٌ",fr:"Propre",tr:"naẓīf"},
       {ar:"نَظِيفَةٌ",fr:"Propre (fém.)",tr:"naẓīfa"},
       {ar:"وَسِخٌ",fr:"Sale",tr:"wasikh"},
       {ar:"وَسِخَةٌ",fr:"Sale (fém.)",tr:"wasikha"},
       {ar:"كَبِيرٌ",fr:"Grand",tr:"kabīr"},
       {ar:"كَبِيرَةٌ",fr:"Grande",tr:"kabīra"},
       {ar:"صَغِيرٌ",fr:"Petit",tr:"ṣaghīr"},
       {ar:"صَغِيرَةٌ",fr:"Petite",tr:"ṣaghīra"},
       {ar:"جَمِيلٌ",fr:"Beau",tr:"jamīl"},
       {ar:"جَمِيلَةٌ",fr:"Belle",tr:"jamīla"},
       {ar:"قَبِيحٌ",fr:"Laid",tr:"qabīḥ"},
       {ar:"الْمَكْتَبَةُ",fr:"La bibliothèque",tr:"al-maktaba"},
       {ar:"الْمَدْرَسَةُ",fr:"L'école",tr:"al-madrasa"},
       {ar:"الْحَدِيقَةُ",fr:"Le jardin",tr:"al-ḥadīqa"},
       {ar:"الْبَيْتُ",fr:"La maison",tr:"al-bayt"},
       {ar:"الْكُرْسِيُّ",fr:"La chaise",tr:"al-kursī"},
       {ar:"الطَّاوِلَةُ",fr:"La table",tr:"aṭ-ṭāwila"}
     ],
     grammar:{title:"L'accord de l'adjectif (suite)",
       rule:"L'adjectif s'accorde en genre (masculin/féminin) et en nombre (singulier/pluriel) avec le nom. Féminin singulier : ajouter ة. Exemple : كَبِيرٌ → كَبِيرَةٌ.",
       examples:["الْبَابُ مَفْتُوحٌ","النَّافِذَةُ مَفْتُوحَةٌ","الْمَدْرَسَةُ كَبِيرَةٌ","الْكِتَابُ جَدِيدٌ"]},
     dialogue:[
       {sp:"A",ar:"هَلِ الْبَابُ مَفْتُوحٌ؟",fr:"La porte est-elle ouverte ?"},
       {sp:"B",ar:"نَعَمْ، الْبَابُ مَفْتُوحٌ.",fr:"Oui, la porte est ouverte."},
       {sp:"A",ar:"وَهَلِ النَّافِذَةُ مَفْتُوحَةٌ؟",fr:"Et la fenêtre est-elle ouverte ?"},
       {sp:"B",ar:"لَا، النَّافِذَةُ مُغْلَقَةٌ.",fr:"Non, la fenêtre est fermée."},
       {sp:"A",ar:"هَلِ الْكِتَابُ جَدِيدٌ؟",fr:"Le livre est-il nouveau ?"},
       {sp:"B",ar:"لَا، هُوَ قَدِيمٌ.",fr:"Non, il est vieux."},
       {sp:"A",ar:"وَهَلِ الْمَدْرَسَةُ كَبِيرَةٌ؟",fr:"Et l'école est-elle grande ?"},
       {sp:"B",ar:"نَعَمْ، هِيَ كَبِيرَةٌ جِدًّا.",fr:"Oui, elle est très grande."},
       {sp:"A",ar:"هَلِ الْحَدِيقَةُ وَاسِعَةٌ؟",fr:"Le jardin est-il large ?"},
       {sp:"B",ar:"نَعَمْ، هِيَ وَاسِعَةٌ.",fr:"Oui, il est large."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire مَفْتُوحَةٌ ؟",options:["Ouverte","Fermée","Grande","Petite"],correct:0},
       {type:"qcm",q:"Que veut dire مَكْسُورٌ ؟",options:["Cassé","Ouvert","Fermé","Grand"],correct:0},
       {type:"qcm",q:"Comment dit-on « long » ?",options:["طَوِيلٌ","قَصِيرٌ","وَاسِعٌ","ضَيِّقٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « étroit » ?",options:["ضَيِّقٌ","وَاسِعٌ","طَوِيلٌ","قَصِيرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire وَاسِعَةٌ ؟",options:["Large (fém.)","Étroite","Longue","Courte"],correct:0},
       {type:"qcm",q:"Que veut dire مُمْتِعٌ ؟",options:["Amusant","Ennuyeux","Utile","Inutile"],correct:0},
       {type:"qcm",q:"Comment dit-on « utile » ?",options:["مُفِيدٌ","مُمْتِعٌ","مُهِمٌّ","صَعْبٌ"],correct:0},
       {type:"qcm",q:"Que veut dire مُهِمٌّ ؟",options:["Important","Amusant","Utile","Facile"],correct:0},
       {type:"qcm",q:"Comment dit-on « nombreuse » ?",options:["كَثِيرَةٌ","كَثِيرٌ","قَلِيلَةٌ","قَلِيلٌ"],correct:0},
       {type:"qcm",q:"Féminin de جَدِيدٌ ?",options:["جَدِيدَةٌ","جُدُدٌ","جَدِيدَانِ","جَدَائِدُ"],correct:0},
       {type:"qcm",q:"Féminin de نَظِيفٌ ?",options:["نَظِيفَةٌ","نُظَفَاءُ","نَظِيفَانِ","نَظِيفُونَ"],correct:0},
       {type:"qcm",q:"Féminin de جَمِيلٌ ?",options:["جَمِيلَةٌ","جُمَلَاءُ","جَمِيلَانِ","جَمِيلُونَ"],correct:0},
       {type:"tf",ar:"الْبَابُ مَفْتُوحٌ",q:"Signifie « La porte est ouverte »",correct:true},
       {type:"tf",ar:"النَّافِذَةُ مَفْتُوحَةٌ",q:"Signifie « La fenêtre est fermée »",correct:false,explain:"مَفْتُوحَةٌ = ouverte."},
       {type:"tf",ar:"الْمَدْرَسَةُ كَبِيرَةٌ",q:"Signifie « L'école est grande »",correct:true},
       {type:"tf",ar:"الْحَدِيقَةُ وَاسِعَةٌ",q:"Signifie « Le jardin est large »",correct:true},
       {type:"fill",sentence:"الْبَابُ ___",options:["مَفْتُوحٌ","مَفْتُوحَةٌ","مَفْتُوحَانِ","مَفْتُوحَاتٌ"],correct:0},
       {type:"fill",sentence:"النَّافِذَةُ ___",options:["مَفْتُوحَةٌ","مَفْتُوحٌ","مَفْتُوحَانِ","مَفْتُوحُونَ"],correct:0},
       {type:"fill",sentence:"الْمَدْرَسَةُ ___",options:["كَبِيرَةٌ","كَبِيرٌ","كِبَارٌ","كَبِيرَاتٌ"],correct:0},
       {type:"type",q:"Écris « ouvert » :",answer:"مَفْتُوحٌ",hint:"م ف ت و ح"},
       {type:"type",q:"Écris « ouverte » :",answer:"مَفْتُوحَةٌ",hint:"م ف ت و ح + ة"},
       {type:"type",q:"Écris « fermé » :",answer:"مُغْلَقٌ",hint:"م غ ل ق"},
       {type:"type",q:"Écris « cassé » :",answer:"مَكْسُورٌ",hint:"م ك س و ر"},
       {type:"type",q:"Écris « large » :",answer:"وَاسِعٌ",hint:"4 lettres"},
       {type:"type",q:"Écris « nouvelle » :",answer:"جَدِيدَةٌ",hint:"ج د ي د + ة"},
       {type:"order",q:"Reconstitue :",words:["مَفْتُوحٌ","الْبَابُ"],answer:"الْبَابُ مَفْتُوحٌ"},
       {type:"order",q:"Reconstitue :",words:["مَفْتُوحَةٌ","النَّافِذَةُ"],answer:"النَّافِذَةُ مَفْتُوحَةٌ"},
       {type:"order",q:"Reconstitue :",words:["كَبِيرَةٌ","الْمَدْرَسَةُ"],answer:"الْمَدْرَسَةُ كَبِيرَةٌ"},
       {type:"order",q:"Reconstitue :",words:["وَاسِعَةٌ","الْحَدِيقَةُ"],answer:"الْحَدِيقَةُ وَاسِعَةٌ"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدٌ","الْكِتَابُ"],answer:"الْكِتَابُ جَدِيدٌ"},
       {type:"audio",audioText:"الْبَابُ مَفْتُوحٌ",options:["الْبَابُ مَفْتُوحٌ","الْبَابُ مُغْلَقٌ","النَّافِذَةُ مَفْتُوحَةٌ","الْبَابُ كَبِيرٌ"],correct:0},
       {type:"audio",audioText:"الْمَدْرَسَةُ كَبِيرَةٌ",options:["الْمَدْرَسَةُ صَغِيرَةٌ","الْمَدْرَسَةُ كَبِيرَةٌ","الْمَدْرَسَةُ جَدِيدَةٌ","الْمَدْرَسَةُ قَدِيمَةٌ"],correct:1},
       {type:"audio",audioText:"الْحَدِيقَةُ وَاسِعَةٌ",options:["الْحَدِيقَةُ وَاسِعَةٌ","الْحَدِيقَةُ ضَيِّقَةٌ","الْبَيْتُ وَاسِعٌ","الْحَدِيقَةُ جَمِيلَةٌ"],correct:0},
       {type:"audio",audioText:"النَّافِذَةُ مُغْلَقَةٌ",options:["النَّافِذَةُ مَفْتُوحَةٌ","النَّافِذَةُ مُغْلَقَةٌ","الْبَابُ مُغْلَقٌ","النَّافِذَةُ كَبِيرَةٌ"],correct:1}
     ]},

    /* ===== LEÇON 18 ===== */
    {id:"t1l18", num:18, title:"Leçon 18", desc:"Le duel (المثنى)",
     active:true, audio:"assets/audio/madinah/tome1/L18.mp3",
     text:["كِتَابَانِ","طَالِبَانِ","مُدَرِّسَتَانِ","الْكِتَابَانِ جَدِيدَانِ","الطَّالِبَانِ مُجْتَهِدَانِ",
           "الْبِنْتَانِ صَغِيرَتَانِ"],
     vocab:[
       {ar:"سَنَةٌ",fr:"Année",tr:"sana"},
       {ar:"عَامٌ",fr:"An",tr:"ʿām"},
       {ar:"كِتَابَانِ",fr:"Deux livres",tr:"kitābāni"},
       {ar:"طَالِبَانِ",fr:"Deux étudiants",tr:"ṭālibāni"},
       {ar:"مُدَرِّسَتَانِ",fr:"Deux professeures",tr:"mudarrisatāni"},
       {ar:"بِنْتَانِ",fr:"Deux filles",tr:"bintāni"},
       {ar:"وَلَدَانِ",fr:"Deux garçons",tr:"waladāni"},
       {ar:"قَلَمَانِ",fr:"Deux stylos",tr:"qalamāni"},
       {ar:"رَجُلَانِ",fr:"Deux hommes",tr:"rajulāni"},
       {ar:"اِمْرَأَتَانِ",fr:"Deux femmes",tr:"imraʾatāni"},
       {ar:"بَيْتٌ",fr:"Deux maisons",tr:"baytāni"},
       {ar:"مَسْجِدَانِ",fr:"Deux mosquées",tr:"masjidāni"},
       {ar:"مَدْرَسَتَانِ",fr:"Deux écoles",tr:"madrasatāni"},
       {ar:"جَدِيدَانِ",fr:"Deux nouveaux",tr:"jadīdāni"},
       {ar:"جَدِيدَتَانِ",fr:"Deux nouvelles",tr:"jadīdatāni"},
       {ar:"قَدِيمَانِ",fr:"Deux vieux",tr:"qadīmāni"},
       {ar:"كَبِيرَانِ",fr:"Deux grands",tr:"kabīrāni"},
       {ar:"صَغِيرَانِ",fr:"Deux petits",tr:"ṣaghīrāni"},
       {ar:"مُجْتَهِدَانِ",fr:"Deux travailleurs",tr:"mujtahidāni"},
       {ar:"مُجْتَهِدَتَانِ",fr:"Deux travailleuses",tr:"mujtahidatāni"},
       {ar:"صَغِيرَتَانِ",fr:"Deux petites",tr:"ṣaghīratāni"},
       {ar:"أُخْتَانِ",fr:"Deux sœurs",tr:"ukhtāni"},
       {ar:"أَخَوَانِ",fr:"Deux frères",tr:"akhawāni"},
       {ar:"صَدِيقَانِ",fr:"Deux amis",tr:"ṣadīqāni"},
       {ar:"صَدِيقَتَانِ",fr:"Deux amies",tr:"ṣadīqatāni"},
       {ar:"يَدَانِ",fr:"Deux mains",tr:"yadāni"},
       {ar:"رِجْلَانِ",fr:"Deux pieds",tr:"rijlāni"},
       {ar:"عَيْنَانِ",fr:"Deux yeux",tr:"ʿaynāni"},
       {ar:"أُذُنَانِ",fr:"Deux oreilles",tr:"udhunāni"},
       {ar:"كَتِفَانِ",fr:"Deux épaules",tr:"katifāni"},
       {ar:"قَدَمَانِ",fr:"Deux pieds",tr:"qadamāni"},
       {ar:"مِئَةٌ",fr:"Cent",tr:"miʾa"},
       {ar:"أَلْفٌ",fr:"Mille",tr:"alf"},
       {ar:"مِلْيُونٌ",fr:"Un million",tr:"milyūn"},
       {ar:"زَوْجَانِ",fr:"Deux couples / époux",tr:"zawjāni"},
       {ar:"اِثْنَانِ",fr:"Deux",tr:"ithnāni"},
       {ar:"اِثْنَتَانِ",fr:"Deux (fém.)",tr:"ithnatāni"},
       {ar:"عِشْرُونَ",fr:"Vingt",tr:"ʿishrūn"},
       {ar:"ثَلَاثُونَ",fr:"Trente",tr:"thalāthūn"},
       {ar:"خَمْسُونَ",fr:"Cinquante",tr:"khamsūn"},
       {ar:"مِئَتَانِ",fr:"Deux cents",tr:"miʾatāni"},
       {ar:"أَلْفَانِ",fr:"Deux mille",tr:"alfāni"},
       {ar:"كَمْ؟",fr:"Combien ?",tr:"kam"},
       {ar:"هَلْ",fr:"Est-ce que ?",tr:"hal"},
       {ar:"نَعَمْ",fr:"Oui",tr:"naʿam"}
     ],
     grammar:{title:"Le duel (المثنى)",
       rule:"Le duel désigne exactement deux personnes ou deux choses. On ajoute ـانِ (nominatif) ou ـيْنِ (accusatif/génitif) au nom singulier. Exemple : كِتَابٌ → كِتَابَانِ (deux livres).",
       examples:["كِتَابٌ → كِتَابَانِ","طَالِبٌ → طَالِبَانِ","بِنْتٌ → بِنْتَانِ","الْكِتَابَانِ جَدِيدَانِ"]},
     dialogue:[
       {sp:"A",ar:"كَمْ كِتَابًا عِنْدَكَ؟",fr:"Combien de livres as-tu ?"},
       {sp:"B",ar:"عِنْدِي كِتَابَانِ.",fr:"J'ai deux livres."},
       {sp:"A",ar:"وَكَمْ طَالِبًا فِي الْفَصْلِ؟",fr:"Et combien d'étudiants dans la classe ?"},
       {sp:"B",ar:"طَالِبَانِ.",fr:"Deux étudiants."},
       {sp:"A",ar:"مَنْ هَذَانِ؟",fr:"Qui sont ces deux-là ?"},
       {sp:"B",ar:"هَذَانِ أَخَوَانِ.",fr:"Ce sont deux frères."},
       {sp:"A",ar:"وَمَنْ هَاتَانِ؟",fr:"Et qui sont ces deux-ci ?"},
       {sp:"B",ar:"هَاتَانِ أُخْتَانِ.",fr:"Ce sont deux sœurs."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire كِتَابَانِ ؟",options:["Deux livres","Un livre","Trois livres","Des livres"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux filles » ?",options:["بِنْتَانِ","بِنْتٌ","بَنَاتٌ","بِنْتًا"],correct:0},
       {type:"qcm",q:"Quel suffixe pour le duel (nominatif) ?",options:["ـانِ","ـينَ","ـونَ","ـاتٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux professeures » ?",options:["مُدَرِّسَتَانِ","مُدَرِّسَةٌ","مُدَرِّسَاتٌ","مُدَرِّسٌ"],correct:0},
       {type:"qcm",q:"Que veut dire طَالِبَانِ ؟",options:["Deux étudiants","Un étudiant","Trois étudiants","Des étudiants"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux garçons » ?",options:["وَلَدَانِ","وَلَدٌ","أَوْلَادٌ","وَلَدَيْنِ"],correct:0},
       {type:"qcm",q:"Que veut dire عَيْنَانِ ؟",options:["Deux yeux","Un œil","Trois yeux","Des yeux"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux mains » ?",options:["يَدَانِ","يَدٌ","أَيْدٍ","يَدَيْنِ"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux cents » ?",options:["مِئَتَانِ","مِئَةٌ","مِئَاتٌ","مِئُونَ"],correct:0},
       {type:"qcm",q:"Que veut dire أَلْفٌ ؟",options:["Mille","Cent","Un million","Dix"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux frères » ?",options:["أَخَوَانِ","أَخٌ","إِخْوَةٌ","أَخَوَيْنِ"],correct:0},
       {type:"qcm",q:"Quel suffixe pour le duel à l'accusatif ?",options:["ـيْنِ","ـانِ","ـونَ","ـاتٌ"],correct:0},
       {type:"tf",q:"Le duel désigne deux personnes ou deux choses",correct:true},
       {type:"tf",q:"Le duel de طَالِبٌ est طَالِبُونَ",correct:false,explain:"C'est طَالِبَانِ."},
       {type:"tf",ar:"الطَّالِبَانِ مُجْتَهِدَانِ",q:"Signifie « Les deux étudiants sont travailleurs »",correct:true},
       {type:"tf",ar:"الْكِتَابَانِ جَدِيدَانِ",q:"Signifie « Les deux livres sont nouveaux »",correct:true},
       {type:"fill",sentence:"عِنْدِي ___",options:["كِتَابَانِ","كِتَابٌ","كُتُبٌ","كِتَابَاتٌ"],correct:0},
       {type:"fill",sentence:"___ جَدِيدَانِ",options:["الْكِتَابَانِ","الْكِتَابُ","الْكُتُبُ","كِتَابٌ"],correct:0},
       {type:"fill",sentence:"هَذَانِ ___",options:["أَخَوَانِ","أَخٌ","إِخْوَةٌ","أَخَاوَاتٌ"],correct:0},
       {type:"type",q:"Écris « deux livres » :",answer:"كِتَابَانِ",hint:"ك ت ا ب + ان"},
       {type:"type",q:"Écris « deux filles » :",answer:"بِنْتَانِ",hint:"ب ن ت + ان"},
       {type:"type",q:"Écris « deux étudiants » :",answer:"طَالِبَانِ",hint:"ط ا ل ب + ان"},
       {type:"type",q:"Écris « deux mains » :",answer:"يَدَانِ",hint:"ي د + ان"},
       {type:"type",q:"Écris « deux yeux » :",answer:"عَيْنَانِ",hint:"ع ي ن + ان"},
       {type:"type",q:"Écris « deux cents » :",answer:"مِئَتَانِ",hint:"م ئ + ت + ان"},
       {type:"order",q:"Reconstitue :",words:["كِتَابَانِ","عِنْدِي"],answer:"عِنْدِي كِتَابَانِ"},
       {type:"order",q:"Reconstitue :",words:["جَدِيدَانِ","الْكِتَابَانِ"],answer:"الْكِتَابَانِ جَدِيدَانِ"},
       {type:"order",q:"Reconstitue :",words:["مُجْتَهِدَانِ","الطَّالِبَانِ"],answer:"الطَّالِبَانِ مُجْتَهِدَانِ"},
       {type:"order",q:"Reconstitue :",words:["أُخْتَانِ","هَاتَانِ"],answer:"هَاتَانِ أُخْتَانِ"},
       {type:"order",q:"Reconstitue :",words:["أَخَوَانِ","هَذَانِ"],answer:"هَذَانِ أَخَوَانِ"},
       {type:"audio",audioText:"عِنْدِي كِتَابَانِ",options:["عِنْدِي كِتَابَانِ","عِنْدِي كِتَابٌ","عِنْدِي كُتُبٌ","عِنْدِي كِتَابَاتٌ"],correct:0},
       {type:"audio",audioText:"الطَّالِبَانِ مُجْتَهِدَانِ",options:["الطَّالِبَانِ مُجْتَهِدَانِ","الطَّالِبُ مُجْتَهِدٌ","الطُّلَّابُ مُجْتَهِدُونَ","الطَّالِبَاتُ مُجْتَهِدَاتٌ"],correct:0},
       {type:"audio",audioText:"هَذَانِ أَخَوَانِ",options:["هَذَانِ أَخَوَانِ","هَاتَانِ أُخْتَانِ","هَذَا أَخٌ","هَؤُلَاءِ إِخْوَةٌ"],correct:0},
       {type:"audio",audioText:"عِنْدِي كِتَابَانِ جَدِيدَانِ",options:["عِنْدِي كِتَابَانِ جَدِيدَانِ","عِنْدِي كِتَابَانِ قَدِيمَانِ","عِنْدِي كِتَابٌ جَدِيدٌ","عِنْدِي كُتُبٌ جَدِيدَةٌ"],correct:0}
     ]},

    /* ===== LEÇON 19 ===== */
    {id:"t1l19", num:19, title:"Leçon 19", desc:"Les nombres de 1 à 10",
     active:true, audio:"assets/audio/madinah/tome1/L19.mp3",
     text:["وَاحِدٌ","اِثْنَانِ","ثَلَاثَةٌ","أَرْبَعَةٌ","خَمْسَةٌ",
           "سِتَّةٌ","سَبْعَةٌ","ثَمَانِيَةٌ","تِسْعَةٌ","عَشَرَةٌ"],
     vocab:[
       {ar:"وَاحِدٌ",fr:"Un (1)",tr:"wāḥid"},
       {ar:"اِثْنَانِ",fr:"Deux (2)",tr:"ithnāni"},
       {ar:"ثَلَاثَةٌ",fr:"Trois (3)",tr:"thalātha"},
       {ar:"أَرْبَعَةٌ",fr:"Quatre (4)",tr:"arbaʿa"},
       {ar:"خَمْسَةٌ",fr:"Cinq (5)",tr:"khamsa"},
       {ar:"سِتَّةٌ",fr:"Six (6)",tr:"sitta"},
       {ar:"سَبْعَةٌ",fr:"Sept (7)",tr:"sabʿa"},
       {ar:"ثَمَانِيَةٌ",fr:"Huit (8)",tr:"thamāniya"},
       {ar:"تِسْعَةٌ",fr:"Neuf (9)",tr:"tisʿa"},
       {ar:"عَشَرَةٌ",fr:"Dix (10)",tr:"ʿashara"},
       {ar:"أَحَدَ عَشَرَ",fr:"Onze (11)",tr:"aḥada ʿashara"},
       {ar:"اِثْنَا عَشَرَ",fr:"Douze (12)",tr:"ithnā ʿashara"},
       {ar:"ثَلَاثَةَ عَشَرَ",fr:"Treize (13)",tr:"thalāthata ʿashara"},
       {ar:"أَرْبَعَةَ عَشَرَ",fr:"Quatorze (14)",tr:"arbaʿata ʿashara"},
       {ar:"خَمْسَةَ عَشَرَ",fr:"Quinze (15)",tr:"khamsata ʿashara"},
       {ar:"عِشْرُونَ",fr:"Vingt (20)",tr:"ʿishrūn"},
       {ar:"ثَلَاثُونَ",fr:"Trente (30)",tr:"thalāthūn"},
       {ar:"أَرْبَعُونَ",fr:"Quarante (40)",tr:"arbaʿūn"},
       {ar:"خَمْسُونَ",fr:"Cinquante (50)",tr:"khamsūn"},
       {ar:"سِتُّونَ",fr:"Soixante (60)",tr:"sittūn"},
       {ar:"سَبْعُونَ",fr:"Soixante-dix (70)",tr:"sabʿūn"},
       {ar:"ثَمَانُونَ",fr:"Quatre-vingts (80)",tr:"thamānūn"},
       {ar:"تِسْعُونَ",fr:"Quatre-vingt-dix (90)",tr:"tisʿūn"},
       {ar:"مِئَةٌ",fr:"Cent (100)",tr:"miʾa"},
       {ar:"أَلْفٌ",fr:"Mille (1000)",tr:"alf"},
       {ar:"عِنَبٌ",fr:"Raisin",tr:"ʿinab"},
       {ar:"دُوَلٌ",fr:"Pays",tr:"duwal"},
       {ar:"مُسَافِرُونَ",fr:"Voyageurs",tr:"musāfirūn"},
       {ar:"أَوْلَادٌ",fr:"Enfants",tr:"awlād"},
       {ar:"كُتُبٌ",fr:"Livres",tr:"kutub"},
       {ar:"طُلَّابٌ",fr:"Étudiants",tr:"ṭullāb"},
       {ar:"أَيَّامٌ",fr:"Jours",tr:"ayyām"},
       {ar:"شُهُورٌ",fr:"Mois",tr:"shuhūr"},
       {ar:"سَنَوَاتٌ",fr:"Années",tr:"sanawāt"},
       {ar:"دَقَائِقُ",fr:"Minutes",tr:"daqāʾiq"},
       {ar:"سَاعَاتٌ",fr:"Heures",tr:"sāʿāt"},
       {ar:"أَسَابِيعُ",fr:"Semaines",tr:"asābīʿ"},
       {ar:"كَمْ؟",fr:"Combien ?",tr:"kam"},
       {ar:"عَدَدٌ",fr:"Nombre",tr:"ʿadad"},
       {ar:"رَقْمٌ",fr:"Chiffre / Numéro",tr:"raqm"},
       {ar:"أَوَّلٌ",fr:"Premier",tr:"awwal"},
       {ar:"ثَانِي",fr:"Deuxième",tr:"thānī"},
       {ar:"ثَالِثٌ",fr:"Troisième",tr:"thālith"},
       {ar:"أَخِيرٌ",fr:"Dernier",tr:"akhīr"}
     ],
     grammar:{title:"Les nombres de 1 à 10",
       rule:"Les nombres de 3 à 10 sont suivis d'un nom au pluriel et au génitif. Exemple : ثَلَاثَةُ كُتُبٍ (trois livres). Les nombres 1 et 2 s'accordent directement avec le nom.",
       examples:["ثَلَاثَةُ كُتُبٍ = trois livres","عَشَرَةُ طُلَّابٍ = dix étudiants","خَمْسَةُ أَقْلَامٍ = cinq stylos"]},
     dialogue:[
       {sp:"A",ar:"كَمْ عِنْدَكَ مِنْ كِتَابٍ؟",fr:"Combien as-tu de livres ?"},
       {sp:"B",ar:"عِنْدِي ثَلَاثَةُ كُتُبٍ.",fr:"J'ai trois livres."},
       {sp:"A",ar:"وَكَمْ طَالِبًا فِي الْفَصْلِ؟",fr:"Et combien d'étudiants dans la classe ?"},
       {sp:"B",ar:"عَشَرَةُ طُلَّابٍ.",fr:"Dix étudiants."},
       {sp:"A",ar:"كَمْ عُمْرُكَ؟",fr:"Quel âge as-tu ?"},
       {sp:"B",ar:"عُمْرِي عِشْرُونَ سَنَةً.",fr:"J'ai vingt ans."},
       {sp:"A",ar:"وَكَمْ أَخًا عِنْدَكَ؟",fr:"Et combien de frères as-tu ?"},
       {sp:"B",ar:"عِنْدِي أَخَوَانِ وَأُخْتَانِ.",fr:"J'ai deux frères et deux sœurs."},
       {sp:"A",ar:"كَمْ سَاعَةً فِي الْيَوْمِ؟",fr:"Combien d'heures dans une journée ?"},
       {sp:"B",ar:"أَرْبَعٌ وَعِشْرُونَ سَاعَةً.",fr:"Vingt-quatre heures."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire وَاحِدٌ ؟",options:["Un","Deux","Trois","Quatre"],correct:0},
       {type:"qcm",q:"Comment dit-on « dix » ?",options:["عَشَرَةٌ","تِسْعَةٌ","ثَمَانِيَةٌ","سَبْعَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « cinq » ?",options:["خَمْسَةٌ","سِتَّةٌ","سَبْعَةٌ","أَرْبَعَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « deux » ?",options:["اِثْنَانِ","وَاحِدٌ","ثَلَاثَةٌ","أَرْبَعَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « huit » ?",options:["ثَمَانِيَةٌ","سَبْعَةٌ","تِسْعَةٌ","عَشَرَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « neuf » ?",options:["تِسْعَةٌ","ثَمَانِيَةٌ","عَشَرَةٌ","سَبْعَةٌ"],correct:0},
       {type:"qcm",q:"Comment dit-on « sept » ?",options:["سَبْعَةٌ","سِتَّةٌ","ثَمَانِيَةٌ","خَمْسَةٌ"],correct:0},
       {type:"qcm",q:"Que veut dire عِشْرُونَ ؟",options:["Vingt","Trente","Quarante","Cinquante"],correct:0},
       {type:"qcm",q:"Comment dit-on « cent » ?",options:["مِئَةٌ","أَلْفٌ","عَشَرَةٌ","مِلْيُونٌ"],correct:0},
       {type:"qcm",q:"Que veut dire أَلْفٌ ؟",options:["Mille","Cent","Dix","Un million"],correct:0},
       {type:"qcm",q:"Que veut dire عِنَبٌ ؟",options:["Raisin","Pomme","Orange","Banane"],correct:0},
       {type:"qcm",q:"Que veut dire مُسَافِرُونَ ؟",options:["Voyageurs","Étudiants","Professeurs","Enfants"],correct:0},
       {type:"tf",ar:"عِنْدِي ثَلَاثَةُ كُتُبٍ",q:"Signifie « J'ai trois livres »",correct:true},
       {type:"tf",ar:"عَشَرَةُ طُلَّابٍ",q:"Signifie « Neuf étudiants »",correct:false,explain:"عَشَرَةٌ = dix."},
       {type:"tf",q:"سِتَّةٌ = 6",correct:true},
       {type:"tf",ar:"عُمْرِي عِشْرُونَ سَنَةً",q:"Signifie « J'ai vingt ans »",correct:true},
       {type:"fill",sentence:"عِنْدِي ___ كُتُبٍ",options:["ثَلَاثَةُ","ثَلَاثٌ","ثَلَاثَ","ثَلَاثِ"],correct:0},
       {type:"fill",sentence:"___ طُلَّابٍ",options:["عَشَرَةُ","عَشَرٌ","عَشَرَ","عَشَرِ"],correct:0},
       {type:"fill",sentence:"عُمْرِي ___ سَنَةً",options:["عِشْرُونَ","عِشْرِينُ","عِشْرِينَ","عِشْرُونُ"],correct:0},
       {type:"type",q:"Écris « trois » :",answer:"ثَلَاثَةٌ",hint:"6 lettres"},
       {type:"type",q:"Écris « cinq » :",answer:"خَمْسَةٌ",hint:"5 lettres"},
       {type:"type",q:"Écris « dix » :",answer:"عَشَرَةٌ",hint:"5 lettres"},
       {type:"type",q:"Écris « vingt » :",answer:"عِشْرُونَ",hint:"ع ش ر + ون"},
       {type:"type",q:"Écris « cent » :",answer:"مِئَةٌ",hint:"3 lettres"},
       {type:"type",q:"Écris « mille » :",answer:"أَلْفٌ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["كُتُبٍ","ثَلَاثَةُ","عِنْدِي"],answer:"عِنْدِي ثَلَاثَةُ كُتُبٍ"},
       {type:"order",q:"Reconstitue :",words:["طُلَّابٍ","عَشَرَةُ"],answer:"عَشَرَةُ طُلَّابٍ"},
       {type:"order",q:"Reconstitue :",words:["كُتُبٍ","خَمْسَةُ","عِنْدِي"],answer:"عِنْدِي خَمْسَةُ كُتُبٍ"},
       {type:"order",q:"Reconstitue :",words:["سَنَةً","عِشْرُونَ","عُمْرِي"],answer:"عُمْرِي عِشْرُونَ سَنَةً"},
       {type:"order",q:"Reconstitue :",words:["عِنْدَكَ","كَمْ","كِتَابٍ","مِنْ","؟"],answer:"كَمْ عِنْدَكَ مِنْ كِتَابٍ ؟"},
       {type:"audio",audioText:"عِنْدِي ثَلَاثَةُ كُتُبٍ",options:["عِنْدِي ثَلَاثَةُ كُتُبٍ","عِنْدِي كِتَابَانِ","عِنْدِي كِتَابٌ","عِنْدِي عَشَرَةُ كُتُبٍ"],correct:0},
       {type:"audio",audioText:"عَشَرَةُ طُلَّابٍ",options:["عَشَرَةُ طُلَّابٍ","تِسْعَةُ طُلَّابٍ","ثَمَانِيَةُ طُلَّابٍ","خَمْسَةُ طُلَّابٍ"],correct:0},
       {type:"audio",audioText:"عُمْرِي عِشْرُونَ سَنَةً",options:["عُمْرِي عِشْرُونَ سَنَةً","عُمْرِي ثَلَاثُونَ سَنَةً","عُمْرِي خَمْسُونَ سَنَةً","عُمْرِي عَشَرَةُ سَنَوَاتٍ"],correct:0},
       {type:"audio",audioText:"خَمْسَةُ أَقْلَامٍ",options:["خَمْسَةُ أَقْلَامٍ","أَرْبَعَةُ أَقْلَامٍ","سِتَّةُ أَقْلَامٍ","ثَلَاثَةُ أَقْلَامٍ"],correct:0}
     ]},

    /* ===== LEÇON 20 ===== */
    {id:"t1l20", num:20, title:"Leçon 20", desc:"Pronom relatif الَّذِي",
     active:true, audio:"assets/audio/madinah/tome1/L20.mp3",
     text:["الرَّجُلُ الَّذِي فِي الْبَيْتِ","الطَّالِبُ الَّذِي نَجَحَ","الْمُدَرِّسُ الَّذِي فِي الْفَصْلِ",
           "هَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ"],
     vocab:[
       {ar:"كَلِمَةٌ",fr:"Mot",tr:"kalima"},
       {ar:"كَلِمَاتٌ",fr:"Mots",tr:"kalimāt"},
       {ar:"الَّذِي",fr:"Celui qui / qui (masc.)",tr:"alladhī"},
       {ar:"الَّتِي",fr:"Celle qui / qui (fém.)",tr:"allatī"},
       {ar:"الَّذِينَ",fr:"Ceux qui",tr:"alladhīna"},
       {ar:"اللَّاتِي",fr:"Celles qui",tr:"allātī"},
       {ar:"اللَّذَانِ",fr:"Les deux qui (masc.)",tr:"alladhāni"},
       {ar:"اللَّتَانِ",fr:"Les deux qui (fém.)",tr:"allatāni"},
       {ar:"نَجَحَ",fr:"Réussir",tr:"najaḥa"},
       {ar:"نَجَحَتْ",fr:"Elle a réussi",tr:"najaḥat"},
       {ar:"نَجَحُوا",fr:"Ils ont réussi",tr:"najaḥū"},
       {ar:"نَجَحْنَ",fr:"Elles ont réussi",tr:"najaḥna"},
       {ar:"قَرَأَ",fr:"Lire",tr:"qaraʾa"},
       {ar:"قَرَأْتُ",fr:"J'ai lu",tr:"qaraʾtu"},
       {ar:"قَرَأْتُهُ",fr:"Je l'ai lu",tr:"qaraʾtuhu"},
       {ar:"كَتَبَ",fr:"Écrire",tr:"kataba"},
       {ar:"كَتَبْتُ",fr:"J'ai écrit",tr:"katabtu"},
       {ar:"فَهِمَ",fr:"Comprendre",tr:"fahima"},
       {ar:"فَهِمْتُ",fr:"J'ai compris",tr:"fahimtu"},
       {ar:"عَرَفَ",fr:"Connaître",tr:"ʿarafa"},
       {ar:"عَرَفْتُ",fr:"J'ai connu",tr:"ʿaraftu"},
       {ar:"وَجَدَ",fr:"Trouver",tr:"wajada"},
       {ar:"وَجَدْتُ",fr:"J'ai trouvé",tr:"wajadtu"},
       {ar:"أَخَذَ",fr:"Prendre",tr:"akhadha"},
       {ar:"أَخَذْتُ",fr:"J'ai pris",tr:"akhadhtu"},
       {ar:"أَكَلَ",fr:"Manger",tr:"akala"},
       {ar:"أَكَلْتُ",fr:"J'ai mangé",tr:"akaltu"},
       {ar:"شَرِبَ",fr:"Boire",tr:"shariba"},
       {ar:"شَرِبْتُ",fr:"J'ai bu",tr:"sharibtu"},
       {ar:"ذَهَبَ",fr:"Aller",tr:"dhahaba"},
       {ar:"ذَهَبْتُ",fr:"Je suis allé",tr:"dhahabtu"},
       {ar:"جَاءَ",fr:"Venir",tr:"jāʾa"},
       {ar:"جَاءَ الَّذِي",fr:"Celui qui est venu",tr:"jāʾa alladhī"},
       {ar:"الْفَصْلُ",fr:"La classe / saison",tr:"al-faṣl"},
       {ar:"الْمَكْتَبُ",fr:"Le bureau",tr:"al-maktab"},
       {ar:"الْمَكْتَبَةُ",fr:"La bibliothèque",tr:"al-maktaba"},
       {ar:"الْمُدِيرُ",fr:"Le directeur",tr:"al-mudīr"},
       {ar:"الْمُوَظَّفُ",fr:"L'employé",tr:"al-muwaẓẓaf"},
       {ar:"الْجَامِعَةُ",fr:"L'université",tr:"al-jāmiʿa"},
       {ar:"الْاِخْتِبَارُ",fr:"L'examen",tr:"al-ikhtibār"},
       {ar:"الدَّرْسُ",fr:"La leçon",tr:"ad-dars"},
       {ar:"الْوَاجِبُ",fr:"Le devoir",tr:"al-wājib"},
       {ar:"السُّؤَالُ",fr:"La question",tr:"as-suʾāl"},
       {ar:"الْجَوَابُ",fr:"La réponse",tr:"al-jawāb"},
       {ar:"النَّتِيجَةُ",fr:"Le résultat",tr:"an-natīja"}
     ],
     grammar:{title:"Le pronom relatif الَّذِي",
       rule:"الَّذِي (masc. sing.), الَّتِي (fém. sing.), الَّذِينَ (masc. pl.), اللَّاتِي (fém. pl.), اللَّذَانِ (duel masc.), اللَّتَانِ (duel fém.). Le relatif s'accorde avec son antécédent en genre et en nombre.",
       examples:["الرَّجُلُ الَّذِي فِي الْبَيْتِ = L'homme qui est dans la maison","الطَّالِبَةُ الَّتِي نَجَحَتْ = L'étudiante qui a réussi","الطُّلَّابُ الَّذِينَ نَجَحُوا = Les étudiants qui ont réussi"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذَا الرَّجُلُ؟",fr:"Qui est cet homme ?"},
       {sp:"B",ar:"هَذَا الرَّجُلُ الَّذِي فِي الْبَيْتِ.",fr:"C'est l'homme qui est dans la maison."},
       {sp:"A",ar:"مَنْ هَذِهِ الْمَرْأَةُ؟",fr:"Qui est cette femme ?"},
       {sp:"B",ar:"هَذِهِ الْمَرْأَةُ الَّتِي نَجَحَتْ.",fr:"C'est la femme qui a réussi."},
       {sp:"A",ar:"مَنْ هَؤُلَاءِ الطُّلَّابُ؟",fr:"Qui sont ces étudiants ?"},
       {sp:"B",ar:"هَؤُلَاءِ الطُّلَّابُ الَّذِينَ نَجَحُوا.",fr:"Ce sont les étudiants qui ont réussi."},
       {sp:"A",ar:"مَا هَذَا الْكِتَابُ؟",fr:"Quel est ce livre ?"},
       {sp:"B",ar:"هَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ.",fr:"C'est le livre que j'ai lu."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire الَّذِي ؟",options:["Celui qui","Celle qui","Ceux qui","Celles qui"],correct:0},
       {type:"qcm",q:"Comment dit-on « celle qui » ?",options:["الَّتِي","الَّذِي","الَّذِينَ","اللَّاتِي"],correct:0},
       {type:"qcm",q:"Comment dit-on « ceux qui » ?",options:["الَّذِينَ","الَّذِي","الَّتِي","اللَّاتِي"],correct:0},
       {type:"qcm",q:"Comment dit-on « celles qui » ?",options:["اللَّاتِي","الَّذِينَ","الَّتِي","الَّذِي"],correct:0},
       {type:"qcm",q:"Que veut dire كَلِمَةٌ ؟",options:["Mot","Phrase","Lettre","Livre"],correct:0},
       {type:"qcm",q:"Que veut dire نَجَحَ ؟",options:["Réussir","Échouer","Étudier","Travailler"],correct:0},
       {type:"qcm",q:"Comment dit-on « lire » ?",options:["قَرَأَ","كَتَبَ","فَهِمَ","عَرَفَ"],correct:0},
       {type:"qcm",q:"Que veut dire كَتَبَ ؟",options:["Écrire","Lire","Comprendre","Voir"],correct:0},
       {type:"qcm",q:"Que veut dire فَهِمَ ؟",options:["Comprendre","Savoir","Voir","Écouter"],correct:0},
       {type:"qcm",q:"Comment dit-on « trouver » ?",options:["وَجَدَ","أَخَذَ","أَكَلَ","شَرِبَ"],correct:0},
       {type:"qcm",q:"Que veut dire الِاخْتِبَارُ ؟",options:["L'examen","Le résultat","Le devoir","La question"],correct:0},
       {type:"qcm",q:"Comment dit-on « la réponse » ?",options:["الْجَوَابُ","السُّؤَالُ","الدَّرْسُ","الْوَاجِبُ"],correct:0},
       {type:"tf",ar:"الطَّالِبُ الَّذِي نَجَحَ",q:"Signifie « L'étudiant qui a réussi »",correct:true},
       {type:"tf",q:"Le relatif s'accorde avec son antécédent en genre et nombre",correct:true},
       {type:"tf",ar:"الرَّجُلُ الَّذِي فِي الْبَيْتِ",q:"Signifie « La femme qui est dans la maison »",correct:false,explain:"الرَّجُلُ = l'homme."},
       {type:"tf",ar:"الطَّالِبَةُ الَّتِي نَجَحَتْ",q:"Signifie « L'étudiante qui a réussi »",correct:true},
       {type:"fill",sentence:"الطَّالِبُ ___ نَجَحَ",options:["الَّذِي","الَّتِي","الَّذِينَ","اللَّاتِي"],correct:0},
       {type:"fill",sentence:"الطَّالِبَةُ ___ نَجَحَتْ",options:["الَّتِي","الَّذِي","الَّذِينَ","اللَّاتِي"],correct:0},
       {type:"fill",sentence:"الطُّلَّابُ ___ نَجَحُوا",options:["الَّذِينَ","الَّذِي","الَّتِي","اللَّاتِي"],correct:0},
       {type:"type",q:"Écris « celui qui » :",answer:"الَّذِي",hint:"ال + ذ ي"},
       {type:"type",q:"Écris « celle qui » :",answer:"الَّتِي",hint:"ال + ت ي"},
       {type:"type",q:"Écris « ceux qui » :",answer:"الَّذِينَ",hint:"ال + ذ ي ن"},
       {type:"type",q:"Écris « celles qui » :",answer:"اللَّاتِي",hint:"ال + ل ا ت ي"},
       {type:"type",q:"Écris « réussir » :",answer:"نَجَحَ",hint:"3 lettres"},
       {type:"type",q:"Écris « lire » :",answer:"قَرَأَ",hint:"3 lettres"},
       {type:"order",q:"Reconstitue :",words:["نَجَحَ","الَّذِي","الطَّالِبُ"],answer:"الطَّالِبُ الَّذِي نَجَحَ"},
       {type:"order",q:"Reconstitue :",words:["الْبَيْتِ","فِي","الَّذِي","الرَّجُلُ"],answer:"الرَّجُلُ الَّذِي فِي الْبَيْتِ"},
       {type:"order",q:"Reconstitue :",words:["نَجَحَتْ","الَّتِي","الطَّالِبَةُ"],answer:"الطَّالِبَةُ الَّتِي نَجَحَتْ"},
       {type:"order",q:"Reconstitue :",words:["نَجَحُوا","الَّذِينَ","الطُّلَّابُ"],answer:"الطُّلَّابُ الَّذِينَ نَجَحُوا"},
       {type:"order",q:"Reconstitue :",words:["قَرَأْتُهُ","الَّذِي","الْكِتَابُ","هَذَا"],answer:"هَذَا الْكِتَابُ الَّذِي قَرَأْتُهُ"},
       {type:"audio",audioText:"الطَّالِبُ الَّذِي نَجَحَ",options:["الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَةُ الَّتِي نَجَحَتْ","الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبُ الَّذِي دَرَسَ"],correct:0},
       {type:"audio",audioText:"الرَّجُلُ الَّذِي فِي الْبَيْتِ",options:["الرَّجُلُ الَّذِي فِي الْبَيْتِ","الرَّجُلُ الَّذِي فِي الْمَسْجِدِ","الْمَرْأَةُ الَّتِي فِي الْبَيْتِ","الطِّفْلُ الَّذِي فِي الْبَيْتِ"],correct:0},
       {type:"audio",audioText:"الطَّالِبَةُ الَّتِي نَجَحَتْ",options:["الطَّالِبَةُ الَّتِي نَجَحَتْ","الطَّالِبُ الَّذِي نَجَحَ","الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبَةُ الَّتِي دَرَسَتْ"],correct:0},
       {type:"audio",audioText:"الطُّلَّابُ الَّذِينَ نَجَحُوا",options:["الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ","الطُّلَّابُ الَّذِينَ دَرَسُوا"],correct:0}
     ]},

    /* ===== LEÇON 21 ===== */
    {id:"t1l21", num:21, title:"Leçon 21", desc:"Pronoms relatifs (suite)",
     active:true, audio:"assets/audio/madinah/tome1/L21.mp3",
     text:["الطَّالِبَةُ الَّتِي نَجَحَتْ","الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ",
           "هَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ"],
     vocab:[
       {ar:"الَّتِي",fr:"Celle qui",tr:"allatī"},
       {ar:"الَّذِينَ",fr:"Ceux qui",tr:"alladhīna"},
       {ar:"اللَّاتِي",fr:"Celles qui",tr:"allātī"},
       {ar:"اللَّذَانِ",fr:"Les deux qui (masc.)",tr:"alladhāni"},
       {ar:"اللَّتَانِ",fr:"Les deux qui (fém.)",tr:"allatāni"},
       {ar:"نَجَحَتْ",fr:"Elle a réussi",tr:"najaḥat"},
       {ar:"نَجَحُوا",fr:"Ils ont réussi",tr:"najaḥū"},
       {ar:"نَجَحْنَ",fr:"Elles ont réussi",tr:"najaḥna"},
       {ar:"قَرَأَتْ",fr:"Elle a lu",tr:"qaraʾat"},
       {ar:"قَرَأُوا",fr:"Ils ont lu",tr:"qaraʾū"},
       {ar:"قَرَأْنَ",fr:"Elles ont lu",tr:"qaraʾna"},
       {ar:"كَتَبَتْ",fr:"Elle a écrit",tr:"katabat"},
       {ar:"كَتَبُوا",fr:"Ils ont écrit",tr:"katabū"},
       {ar:"كَتَبْنَ",fr:"Elles ont écrit",tr:"katabna"},
       {ar:"ذَهَبَتْ",fr:"Elle est allée",tr:"dhahabat"},
       {ar:"ذَهَبُوا",fr:"Ils sont allés",tr:"dhahabū"},
       {ar:"ذَهَبْنَ",fr:"Elles sont allées",tr:"dhahabna"},
       {ar:"جَاءَتْ",fr:"Elle est venue",tr:"jāʾat"},
       {ar:"جَاءُوا",fr:"Ils sont venus",tr:"jāʾū"},
       {ar:"جَاءْنَ",fr:"Elles sont venues",tr:"jāʾna"},
       {ar:"أَكَلَتْ",fr:"Elle a mangé",tr:"akalat"},
       {ar:"أَكَلُوا",fr:"Ils ont mangé",tr:"akalū"},
       {ar:"أَكَلْنَ",fr:"Elles ont mangé",tr:"akalna"},
       {ar:"شَرِبَتْ",fr:"Elle a bu",tr:"sharibat"},
       {ar:"شَرِبُوا",fr:"Ils ont bu",tr:"sharibū"},
       {ar:"شَرِبْنَ",fr:"Elles ont bu",tr:"sharibna"},
       {ar:"فَهِمَتْ",fr:"Elle a compris",tr:"fahimat"},
       {ar:"فَهِمُوا",fr:"Ils ont compris",tr:"fahimū"},
       {ar:"فَهِمْنَ",fr:"Elles ont compris",tr:"fahimna"},
       {ar:"عَرَفَتْ",fr:"Elle a connu",tr:"ʿarafat"},
       {ar:"عَرَفُوا",fr:"Ils ont connu",tr:"ʿarafū"},
       {ar:"عَرَفْنَ",fr:"Elles ont connu",tr:"ʿarafna"},
       {ar:"سَافَرَتْ",fr:"Elle a voyagé",tr:"sāfarat"},
       {ar:"سَافَرُوا",fr:"Ils ont voyagé",tr:"sāfarū"},
       {ar:"سَافَرْنَ",fr:"Elles ont voyagé",tr:"sāfarna"},
       {ar:"الْمَدْرَسَةُ",fr:"L'école",tr:"al-madrasa"},
       {ar:"الْجَامِعَةُ",fr:"L'université",tr:"al-jāmiʿa"},
       {ar:"الْفَصْلُ",fr:"La classe",tr:"al-faṣl"},
       {ar:"السُّوقُ",fr:"Le marché",tr:"as-sūq"},
       {ar:"الْحَدِيقَةُ",fr:"Le jardin",tr:"al-ḥadīqa"},
       {ar:"الْبَيْتُ",fr:"La maison",tr:"al-bayt"},
       {ar:"الْكِتَابُ",fr:"Le livre",tr:"al-kitāb"},
       {ar:"الدَّرْسُ",fr:"La leçon",tr:"ad-dars"},
       {ar:"الْاِخْتِبَارُ",fr:"L'examen",tr:"al-ikhtibār"},
       {ar:"النَّجَاحُ",fr:"Le succès",tr:"an-najāḥ"}
     ],
     grammar:{title:"Les pronoms relatifs (accord)",
       rule:"Le relatif s'accorde avec son antécédent en genre et en nombre : الَّذِي (m. s.), الَّتِي (f. s.), الَّذِينَ (m. pl.), اللَّاتِي (f. pl.), اللَّذَانِ (duel m.), اللَّتَانِ (duel f.).",
       examples:["الطَّالِبُ الَّذِي نَجَحَ = L'étudiant qui a réussi","الطَّالِبَةُ الَّتِي نَجَحَتْ = L'étudiante qui a réussi","الطُّلَّابُ الَّذِينَ نَجَحُوا = Les étudiants qui ont réussi","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ = Les étudiantes qui ont réussi"]},
     dialogue:[
       {sp:"A",ar:"مَنْ هَذِهِ الطَّالِبَةُ؟",fr:"Qui est cette étudiante ?"},
       {sp:"B",ar:"هَذِهِ الطَّالِبَةُ الَّتِي نَجَحَتْ.",fr:"C'est l'étudiante qui a réussi."},
       {sp:"A",ar:"وَمَنْ هَؤُلَاءِ الطُّلَّابُ؟",fr:"Et qui sont ces étudiants ?"},
       {sp:"B",ar:"هَؤُلَاءِ الطُّلَّابُ الَّذِينَ نَجَحُوا.",fr:"Ce sont les étudiants qui ont réussi."},
       {sp:"A",ar:"وَمَنْ هَؤُلَاءِ الطَّالِبَاتُ؟",fr:"Et qui sont ces étudiantes ?"},
       {sp:"B",ar:"هَؤُلَاءِ الطَّالِبَاتُ اللَّاتِي نَجَحْنَ.",fr:"Ce sont les étudiantes qui ont réussi."},
       {sp:"A",ar:"مَا هَذَا الْكِتَابُ؟",fr:"Quel est ce livre ?"},
       {sp:"B",ar:"هَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ.",fr:"C'est le livre que j'ai lu."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire اللَّاتِي ؟",options:["Celles qui","Ceux qui","Celui qui","Celle qui"],correct:0},
       {type:"qcm",q:"Comment dit-on « ils ont réussi » ?",options:["نَجَحُوا","نَجَحَ","نَجَحَتْ","نَجَحْنَ"],correct:0},
       {type:"qcm",q:"Comment dit-on « elles ont réussi » ?",options:["نَجَحْنَ","نَجَحَ","نَجَحَتْ","نَجَحُوا"],correct:0},
       {type:"qcm",q:"Comment dit-on « elle a réussi » ?",options:["نَجَحَتْ","نَجَحَ","نَجَحُوا","نَجَحْنَ"],correct:0},
       {type:"qcm",q:"Que veut dire اللَّذَانِ ؟",options:["Les deux qui (masc.)","Les deux qui (fém.)","Celui qui","Ceux qui"],correct:0},
       {type:"qcm",q:"Comment dit-on « elle a lu » ?",options:["قَرَأَتْ","قَرَأَ","قَرَأُوا","قَرَأْنَ"],correct:0},
       {type:"qcm",q:"Comment dit-on « ils ont écrit » ?",options:["كَتَبُوا","كَتَبَ","كَتَبَتْ","كَتَبْنَ"],correct:0},
       {type:"qcm",q:"Que veut dire سَافَرُوا ؟",options:["Ils ont voyagé","Elle a voyagé","Elles ont voyagé","Il a voyagé"],correct:0},
       {type:"qcm",q:"Que veut dire النَّجَاحُ ؟",options:["Le succès","L'échec","L'examen","Le résultat"],correct:0},
       {type:"qcm",q:"Comment dit-on « l'université » ?",options:["الْجَامِعَةُ","الْمَدْرَسَةُ","الْفَصْلُ","الْمَكْتَبَةُ"],correct:0},
       {type:"tf",ar:"الطَّالِبَةُ الَّتِي نَجَحَتْ",q:"Signifie « L'étudiante qui a réussi »",correct:true},
       {type:"tf",ar:"الطُّلَّابُ الَّذِينَ نَجَحُوا",q:"Signifie « Les étudiantes qui ont réussi »",correct:false,explain:"الَّذِينَ est masculin pluriel."},
       {type:"tf",q:"الَّذِينَ est utilisé pour un groupe de femmes",correct:false,explain:"Non, c'est اللَّاتِي pour les femmes."},
       {type:"tf",ar:"الطَّالِبَاتُ اللَّاتِي نَجَحْنَ",q:"Signifie « Les étudiantes qui ont réussi »",correct:true},
       {type:"fill",sentence:"الطُّلَّابُ ___ نَجَحُوا",options:["الَّذِينَ","الَّذِي","الَّتِي","اللَّاتِي"],correct:0},
       {type:"fill",sentence:"الطَّالِبَاتُ ___ نَجَحْنَ",options:["اللَّاتِي","الَّذِينَ","الَّتِي","الَّذِي"],correct:0},
       {type:"fill",sentence:"الطَّالِبَةُ ___ نَجَحَتْ",options:["الَّتِي","الَّذِي","الَّذِينَ","اللَّاتِي"],correct:0},
       {type:"type",q:"Écris « celles qui » :",answer:"اللَّاتِي",hint:"ال + ل ا ت ي"},
       {type:"type",q:"Écris « ils ont réussi » :",answer:"نَجَحُوا",hint:"ن ج ح + وا"},
       {type:"type",q:"Écris « elles ont réussi » :",answer:"نَجَحْنَ",hint:"ن ج ح + ن"},
       {type:"type",q:"Écris « elle a réussi » :",answer:"نَجَحَتْ",hint:"ن ج ح + ت"},
       {type:"type",q:"Écris « le succès » :",answer:"النَّجَاحُ",hint:"avec ال"},
       {type:"type",q:"Écris « l'université » :",answer:"الْجَامِعَةُ",hint:"avec ال"},
       {type:"order",q:"Reconstitue :",words:["نَجَحَتْ","الَّتِي","الطَّالِبَةُ"],answer:"الطَّالِبَةُ الَّتِي نَجَحَتْ"},
       {type:"order",q:"Reconstitue :",words:["نَجَحُوا","الَّذِينَ","الطُّلَّابُ"],answer:"الطُّلَّابُ الَّذِينَ نَجَحُوا"},
       {type:"order",q:"Reconstitue :",words:["نَجَحْنَ","اللَّاتِي","الطَّالِبَاتُ"],answer:"الطَّالِبَاتُ اللَّاتِي نَجَحْنَ"},
       {type:"order",q:"Reconstitue :",words:["قَرَأْتُهُ","الَّذِي","الْكِتَابُ","هَذَا"],answer:"هَذَا الْكِتَابُ الَّذِي قَرَأْتُهُ"},
       {type:"order",q:"Reconstitue :",words:["الْفَصْلِ","فِي","الَّذِي","الطَّالِبُ"],answer:"الطَّالِبُ الَّذِي فِي الْفَصْلِ"},
       {type:"audio",audioText:"الطَّالِبَةُ الَّتِي نَجَحَتْ",options:["الطَّالِبَةُ الَّتِي نَجَحَتْ","الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ","الطَّالِبَةُ الَّتِي دَرَسَتْ"],correct:0},
       {type:"audio",audioText:"الطُّلَّابُ الَّذِينَ نَجَحُوا",options:["الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبُ الَّذِي نَجَحَ","الطَّالِبَاتُ اللَّاتِي نَجَحْنَ","الطُّلَّابُ الَّذِينَ دَرَسُوا"],correct:0},
       {type:"audio",audioText:"الطَّالِبَاتُ اللَّاتِي نَجَحْنَ",options:["الطَّالِبَاتُ اللَّاتِي نَجَحْنَ","الطُّلَّابُ الَّذِينَ نَجَحُوا","الطَّالِبَةُ الَّتِي نَجَحَتْ","الطَّالِبَاتُ اللَّاتِي دَرَسْنَ"],correct:0},
       {type:"audio",audioText:"هَذَا الْكِتَابُ الَّذِي قَرَأْتُهُ",options:["هَذَا الْكِتَابُ الَّذِي قَرَأْتُهُ","هَذَا الْكِتَابُ الَّذِي كَتَبْتُهُ","هَذَا الْقَلَمُ الَّذِي قَرَأْتُهُ","هَذَا الْكِتَابُ الَّذِي أَخَذْتُهُ"],correct:0}
     ]},

    /* ===== LEÇON 22 ===== */
    {id:"t1l22", num:22, title:"Leçon 22", desc:"Couleurs (diptotes)",
     active:true, audio:"assets/audio/madinah/tome1/L22.mp3",
     text:["الْبَابُ الْأَحْمَرُ","النَّافِذَةُ الْحَمْرَاءُ","السَّمَاءُ الزَّرْقَاءُ",
           "الشَّجَرَةُ الْخَضْرَاءُ","الثَّوْبُ الْأَسْوَدُ","الْوَرَقُ الْأَبْيَضُ"],
     vocab:[
       {ar:"أَحْمَرُ",fr:"Rouge",tr:"aḥmar"},
       {ar:"أَزْرَقُ",fr:"Bleu",tr:"azraq"},
       {ar:"أَخْضَرُ",fr:"Vert",tr:"akhḍar"},
       {ar:"أَسْوَدُ",fr:"Noir",tr:"aswad"},
       {ar:"أَصْفَرُ",fr:"Jaune",tr:"aṣfar"},
       {ar:"أَبْيَضُ",fr:"Blanc",tr:"abyaḍ"},
       {ar:"بُنِّيٌّ",fr:"Marron",tr:"bunniyy"},
       {ar:"بُرْتُقَالِيٌّ",fr:"Orange",tr:"burtuqāliyy"},
       {ar:"وَرْدِيٌّ",fr:"Rose",tr:"wardiyy"},
       {ar:"رَمَادِيٌّ",fr:"Gris",tr:"ramādiyy"},
       {ar:"بَنَفْسَجِيٌّ",fr:"Violet",tr:"banafsajiyy"},
       {ar:"ذَهَبِيٌّ",fr:"Doré",tr:"dhahabiyy"},
       {ar:"فِضِّيٌّ",fr:"Argenté",tr:"fiḍḍiyy"},
       {ar:"حَمْرَاءُ",fr:"Rouge (fém.)",tr:"ḥamrāʾ"},
       {ar:"زَرْقَاءُ",fr:"Bleue (fém.)",tr:"zarqāʾ"},
       {ar:"خَضْرَاءُ",fr:"Verte (fém.)",tr:"khaḍrāʾ"},
       {ar:"سَوْدَاءُ",fr:"Noire (fém.)",tr:"sawdāʾ"},
       {ar:"صَفْرَاءُ",fr:"Jaune (fém.)",tr:"ṣafrāʾ"},
       {ar:"بَيْضَاءُ",fr:"Blanche (fém.)",tr:"bayḍāʾ"},
       {ar:"بُنِّيَّةٌ",fr:"Marron (fém.)",tr:"bunniyya"},
       {ar:"بُرْتُقَالِيَّةٌ",fr:"Orange (fém.)",tr:"burtuqāliyya"},
       {ar:"وَرْدِيَّةٌ",fr:"Rose (fém.)",tr:"wardiyya"},
       {ar:"رَمَادِيَّةٌ",fr:"Grise (fém.)",tr:"ramādiyya"},
       {ar:"بَنَفْسَجِيَّةٌ",fr:"Violette (fém.)",tr:"banafsajiyya"},
       {ar:"اللَّوْنُ",fr:"La couleur",tr:"al-lawn"},
       {ar:"الْأَلْوَانُ",fr:"Les couleurs",tr:"al-alwān"},
       {ar:"الثَّوْبُ",fr:"Le vêtement",tr:"ath-thawb"},
       {ar:"الْقَمِيصُ",fr:"La chemise",tr:"al-qamīṣ"},
       {ar:"الْحِذَاءُ",fr:"La chaussure",tr:"al-ḥidhāʾ"},
       {ar:"الْوَرَقُ",fr:"Le papier",tr:"al-waraq"},
       {ar:"الْبَابُ",fr:"La porte",tr:"al-bāb"},
       {ar:"النَّافِذَةُ",fr:"La fenêtre",tr:"an-nāfidha"},
       {ar:"السَّمَاءُ",fr:"Le ciel",tr:"as-samāʾ"},
       {ar:"الشَّجَرَةُ",fr:"L'arbre",tr:"ash-shajara"},
       {ar:"الزَّهْرَةُ",fr:"La fleur",tr:"az-zahra"},
       {ar:"الْوَرْدَةُ",fr:"La rose",tr:"al-warda"},
       {ar:"السَّيَّارَةُ",fr:"La voiture",tr:"as-sayyāra"},
       {ar:"الْبَيْتُ",fr:"La maison",tr:"al-bayt"},
       {ar:"الْكِتَابُ",fr:"Le livre",tr:"al-kitāb"},
       {ar:"الْقَلَمُ",fr:"Le stylo",tr:"al-qalam"},
       {ar:"الْحَقِيبَةُ",fr:"Le sac",tr:"al-ḥaqība"},
       {ar:"الْأَرْضُ",fr:"La terre",tr:"al-arḍ"},
       {ar:"الْبَحْرُ",fr:"La mer",tr:"al-baḥr"},
       {ar:"الْمَاءُ",fr:"L'eau",tr:"al-māʾ"}
     ],
     grammar:{title:"Les adjectifs de couleur (diptotes)",
       rule:"Les adjectifs de couleur masculins sont diptotes (pas de tanwin). Au féminin, ils prennent la forme فَعْلَاءُ. Exemple : أَحْمَرُ (rouge masc.) → حَمْرَاءُ (rouge fém.).",
       examples:["الْبَابُ الْأَحْمَرُ = La porte rouge","النَّافِذَةُ الْحَمْرَاءُ = La fenêtre rouge","السَّمَاءُ الزَّرْقَاءُ = Le ciel bleu"]},
     dialogue:[
       {sp:"A",ar:"مَا لَوْنُ الْبَابِ؟",fr:"Quelle est la couleur de la porte ?"},
       {sp:"B",ar:"الْبَابُ أَحْمَرُ.",fr:"La porte est rouge."},
       {sp:"A",ar:"وَمَا لَوْنُ النَّافِذَةِ؟",fr:"Et quelle est la couleur de la fenêtre ?"},
       {sp:"B",ar:"النَّافِذَةُ حَمْرَاءُ.",fr:"La fenêtre est rouge."},
       {sp:"A",ar:"وَمَا لَوْنُ السَّمَاءِ؟",fr:"Et quelle est la couleur du ciel ?"},
       {sp:"B",ar:"السَّمَاءُ زَرْقَاءُ.",fr:"Le ciel est bleu."},
       {sp:"A",ar:"وَمَا لَوْنُ الشَّجَرَةِ؟",fr:"Et quelle est la couleur de l'arbre ?"},
       {sp:"B",ar:"الشَّجَرَةُ خَضْرَاءُ.",fr:"L'arbre est vert."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire أَحْمَرُ ؟",options:["Rouge","Bleu","Vert","Noir"],correct:0},
       {type:"qcm",q:"Comment dit-on « bleu » ?",options:["أَزْرَقُ","أَحْمَرُ","أَخْضَرُ","أَسْوَدُ"],correct:0},
       {type:"qcm",q:"Féminin de أَحْمَرُ ?",options:["حَمْرَاءُ","أَحْمَرَةٌ","أَحْمَرَاتٌ","حُمْرٌ"],correct:0},
       {type:"qcm",q:"Féminin de أَزْرَقُ ?",options:["زَرْقَاءُ","أَزْرَقَةٌ","أَزْرَقَاتٌ","زُرْقٌ"],correct:0},
       {type:"qcm",q:"Féminin de أَخْضَرُ ?",options:["خَضْرَاءُ","أَخْضَرَةٌ","أَخْضَرَاتٌ","خُضْرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire أَسْوَدُ ؟",options:["Noir","Blanc","Rouge","Bleu"],correct:0},
       {type:"qcm",q:"Que veut dire أَبْيَضُ ؟",options:["Blanc","Noir","Jaune","Vert"],correct:0},
       {type:"qcm",q:"Comment dit-on « jaune » ?",options:["أَصْفَرُ","أَحْمَرُ","أَزْرَقُ","أَخْضَرُ"],correct:0},
       {type:"qcm",q:"Féminin de أَسْوَدُ ?",options:["سَوْدَاءُ","أَسْوَدَةٌ","أَسْوَدَاتٌ","سُودٌ"],correct:0},
       {type:"qcm",q:"Que veut dire اللَّوْنُ ؟",options:["La couleur","Le vêtement","Le papier","L'arbre"],correct:0},
       {type:"qcm",q:"Comment dit-on « vert (fém.) » ?",options:["خَضْرَاءُ","أَخْضَرُ","خَضِرٌ","خُضْرٌ"],correct:0},
       {type:"qcm",q:"Que veut dire الْمَاءُ ؟",options:["L'eau","La terre","La mer","Le ciel"],correct:0},
       {type:"tf",ar:"الْبَابُ الْأَحْمَرُ",q:"Signifie « La porte rouge »",correct:true},
       {type:"tf",ar:"النَّافِذَةُ الْحَمْرَاءُ",q:"Signifie « La fenêtre bleue »",correct:false,explain:"الْحَمْرَاءُ = rouge (fém.)."},
       {type:"tf",ar:"السَّمَاءُ الزَّرْقَاءُ",q:"Signifie « Le ciel bleu »",correct:true},
       {type:"tf",ar:"الشَّجَرَةُ الْخَضْرَاءُ",q:"Signifie « L'arbre vert »",correct:true},
       {type:"fill",sentence:"الْبَابُ ___",options:["الْأَحْمَرُ","الْحَمْرَاءُ","أَحْمَرَاتٌ","حُمْرٌ"],correct:0},
       {type:"fill",sentence:"النَّافِذَةُ ___",options:["الْحَمْرَاءُ","الْأَحْمَرُ","الْحُمْرُ","أَحْمَرَاتٌ"],correct:0},
       {type:"fill",sentence:"السَّمَاءُ ___",options:["الزَّرْقَاءُ","الْأَزْرَقُ","الزُّرْقُ","أَزْرَقَاتٌ"],correct:0},
       {type:"type",q:"Écris « rouge » (masc.) :",answer:"أَحْمَرُ",hint:"5 lettres"},
       {type:"type",q:"Écris « bleu » (masc.) :",answer:"أَزْرَقُ",hint:"5 lettres"},
       {type:"type",q:"Écris « vert » (masc.) :",answer:"أَخْضَرُ",hint:"5 lettres"},
       {type:"type",q:"Écris « noir » (masc.) :",answer:"أَسْوَدُ",hint:"5 lettres"},
       {type:"type",q:"Écris « blanc » (masc.) :",answer:"أَبْيَضُ",hint:"5 lettres"},
       {type:"type",q:"Écris « jaune » (masc.) :",answer:"أَصْفَرُ",hint:"5 lettres"},
       {type:"order",q:"Reconstitue :",words:["الْأَحْمَرُ","الْبَابُ"],answer:"الْبَابُ الْأَحْمَرُ"},
       {type:"order",q:"Reconstitue :",words:["الْحَمْرَاءُ","النَّافِذَةُ"],answer:"النَّافِذَةُ الْحَمْرَاءُ"},
       {type:"order",q:"Reconstitue :",words:["الزَّرْقَاءُ","السَّمَاءُ"],answer:"السَّمَاءُ الزَّرْقَاءُ"},
       {type:"order",q:"Reconstitue :",words:["الْخَضْرَاءُ","الشَّجَرَةُ"],answer:"الشَّجَرَةُ الْخَضْرَاءُ"},
       {type:"order",q:"Reconstitue :",words:["الْأَسْوَدُ","الثَّوْبُ"],answer:"الثَّوْبُ الْأَسْوَدُ"},
       {type:"audio",audioText:"الْبَابُ الْأَحْمَرُ",options:["الْبَابُ الْأَحْمَرُ","الْبَابُ الْأَزْرَقُ","النَّافِذَةُ الْحَمْرَاءُ","الْبَابُ الْأَخْضَرُ"],correct:0},
       {type:"audio",audioText:"السَّمَاءُ الزَّرْقَاءُ",options:["السَّمَاءُ الزَّرْقَاءُ","السَّمَاءُ الْحَمْرَاءُ","السَّمَاءُ الْخَضْرَاءُ","الْبَحْرُ الْأَزْرَقُ"],correct:0},
       {type:"audio",audioText:"النَّافِذَةُ الْحَمْرَاءُ",options:["النَّافِذَةُ الْحَمْرَاءُ","الْبَابُ الْأَحْمَرُ","النَّافِذَةُ الزَّرْقَاءُ","النَّافِذَةُ الْخَضْرَاءُ"],correct:0},
       {type:"audio",audioText:"الشَّجَرَةُ الْخَضْرَاءُ",options:["الشَّجَرَةُ الْخَضْرَاءُ","الشَّجَرَةُ الْحَمْرَاءُ","النَّافِذَةُ الْخَضْرَاءُ","الشَّجَرَةُ الزَّرْقَاءُ"],correct:0}
     ]},

    /* ===== LEÇON 23 ===== */
    {id:"t1l23", num:23, title:"Leçon 23", desc:"Noms de lieu · Villes du monde",
     active:true, audio:"assets/audio/madinah/tome1/L23.mp3",
     text:["أَنَا مِنْ وَاشِنْطُن","هُوَ مِنْ إِسْطَنْبُول","هِيَ مِنْ مَكَّةَ",
           "هُمْ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ","أَنْتَ مِنَ الْقَاهِرَةِ","نَحْنُ مِنْ دِمَشْقَ"],
     vocab:[
       {ar:"وَاشِنْطُن",fr:"Washington",tr:"wāshinṭun"},
       {ar:"إِسْطَنْبُول",fr:"Istanbul",tr:"isṭanbūl"},
       {ar:"الطَّائِفُ",fr:"Taif",tr:"aṭ-ṭāʾif"},
       {ar:"الْمَدِينَةُ الْمُنَوَّرَةُ",fr:"Médine",tr:"al-madīna al-munawwara"},
       {ar:"مَكَّةُ",fr:"La Mecque",tr:"makka"},
       {ar:"الْقَاهِرَةُ",fr:"Le Caire",tr:"al-qāhira"},
       {ar:"دِمَشْقُ",fr:"Damas",tr:"dimashq"},
       {ar:"بَغْدَادُ",fr:"Bagdad",tr:"baghdād"},
       {ar:"بَيْرُوتُ",fr:"Beyrouth",tr:"bayrūt"},
       {ar:"عَمَّانُ",fr:"Amman",tr:"ʿammān"},
       {ar:"الرِّيَاضُ",fr:"Riyad",tr:"ar-riyāḍ"},
       {ar:"جُدَّةُ",fr:"Djeddah",tr:"judda"},
       {ar:"الْكُوَيْتُ",fr:"Koweït",tr:"al-kuwayt"},
       {ar:"الدَّوْحَةُ",fr:"Doha",tr:"ad-dawḥa"},
       {ar:"أَبُو ظَبْي",fr:"Abou Dabi",tr:"abū ẓaby"},
       {ar:"دُبَيْ",fr:"Dubaï",tr:"dubayy"},
       {ar:"صَنْعَاءُ",fr:"Sanaa",tr:"ṣanʿāʾ"},
       {ar:"مَوْصِلُ",fr:"Mossoul",tr:"mawṣil"},
       {ar:"حَلَبُ",fr:"Alep",tr:"ḥalab"},
       {ar:"طَنْطَا",fr:"Tanta",tr:"ṭanṭā"},
       {ar:"الْإِسْكَنْدَرِيَّةُ",fr:"Alexandrie",tr:"al-iskandariyya"},
       {ar:"طَرَابُلُسُ",fr:"Tripoli",tr:"ṭarābulus"},
       {ar:"تُونُسُ",fr:"Tunis",tr:"tūnus"},
       {ar:"الْجَزَائِرُ",fr:"Alger",tr:"al-jazāʾir"},
       {ar:"الرِّبَاطُ",fr:"Rabat",tr:"ar-ribāṭ"},
       {ar:"دَارُ الْبَيْضَاءِ",fr:"Casablanca",tr:"dāru l-bayḍāʾ"},
       {ar:"مَرَّاكُشُ",fr:"Marrakech",tr:"marrākush"},
       {ar:"نِيُويُورْك",fr:"New York",tr:"niyūyūrk"},
       {ar:"لَنْدَن",fr:"Londres",tr:"landan"},
       {ar:"بَارِيس",fr:"Paris",tr:"bārīs"},
       {ar:"بِرْلِين",fr:"Berlin",tr:"birlīn"},
       {ar:"مَدْرِيد",fr:"Madrid",tr:"madrīd"},
       {ar:"رُومَا",fr:"Rome",tr:"rūmā"},
       {ar:"مُوسْكُو",fr:"Moscou",tr:"mūskū"},
       {ar:"بِكِين",fr:"Pékin",tr:"bikīn"},
       {ar:"طُوكْيُو",fr:"Tokyo",tr:"ṭūkyū"},
       {ar:"سِيُول",fr:"Séoul",tr:"siyūl"},
       {ar:"بَاكِسْتَان",fr:"Pakistan",tr:"bākistān"},
       {ar:"الْهِنْدُ",fr:"Inde",tr:"al-hind"},
       {ar:"الْمَدِينَةُ",fr:"La ville",tr:"al-madīna"},
       {ar:"الْقَرْيَةُ",fr:"Le village",tr:"al-qarya"},
       {ar:"الْبَلَدُ",fr:"Le pays",tr:"al-balad"},
       {ar:"الْعَالَمُ",fr:"Le monde",tr:"al-ʿālam"},
       {ar:"الْجِهَةُ",fr:"La région",tr:"al-jiha"},
       {ar:"الْمَنْطِقَةُ",fr:"La zone",tr:"al-minṭiqa"}
     ],
     grammar:{title:"Les noms de lieu",
       rule:"Les noms de lieu (villes, pays, régions) sont souvent diptotes (pas de tanwin). Exemple : مَكَّةُ (La Mecque), الْمَدِينَةُ (Médine). Ils peuvent être définis par ال.",
       examples:["أَنَا مِنْ وَاشِنْطُن = Je viens de Washington","هُوَ مِنْ إِسْطَنْبُول = Il vient d'Istanbul","هِيَ مِنْ مَكَّةَ = Elle vient de La Mecque"]},
     dialogue:[
       {sp:"A",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?"},
       {sp:"B",ar:"أَنَا مِنْ وَاشِنْطُن.",fr:"Je viens de Washington."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هُوَ؟",fr:"Et lui ?"},
       {sp:"B",ar:"هُوَ مِنْ إِسْطَنْبُول.",fr:"Il vient d'Istanbul."},
       {sp:"A",ar:"وَمِنْ أَيْنَ هِيَ؟",fr:"Et elle ?"},
       {sp:"B",ar:"هِيَ مِنْ مَكَّةَ.",fr:"Elle vient de La Mecque."},
       {sp:"A",ar:"وَمِنْ أَيْنَ أَنْتُمْ؟",fr:"Et vous ?"},
       {sp:"B",ar:"نَحْنُ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ.",fr:"Nous venons de Médine."}
     ],
     exercises:[
       {type:"qcm",q:"Que veut dire وَاشِنْطُن ؟",options:["Washington","Istanbul","Taif","Médine"],correct:0},
       {type:"qcm",q:"Comment dit-on « La Mecque » ?",options:["مَكَّةُ","الْمَدِينَةُ","الطَّائِفُ","وَاشِنْطُن"],correct:0},
       {type:"qcm",q:"Comment dit-on « Le Caire » ?",options:["الْقَاهِرَةُ","دِمَشْقُ","بَغْدَادُ","مَكَّةُ"],correct:0},
       {type:"qcm",q:"Que veut dire إِسْطَنْبُول ؟",options:["Istanbul","Washington","Le Caire","Damas"],correct:0},
       {type:"qcm",q:"Comment dit-on « Damas » ?",options:["دِمَشْقُ","بَغْدَادُ","الْقَاهِرَةُ","الطَّائِفُ"],correct:0},
       {type:"qcm",q:"Comment dit-on « Bagdad » ?",options:["بَغْدَادُ","دِمَشْقُ","الْقَاهِرَةُ","مَكَّةُ"],correct:0},
       {type:"qcm",q:"Que veut dire بَيْرُوتُ ؟",options:["Beyrouth","Amman","Riyad","Doha"],correct:0},
       {type:"qcm",q:"Comment dit-on « Riyad » ?",options:["الرِّيَاضُ","جُدَّةُ","الدَّوْحَةُ","دُبَيْ"],correct:0},
       {type:"qcm",q:"Que veut dire دُبَيْ ؟",options:["Dubaï","Koweït","Doha","Abou Dabi"],correct:0},
       {type:"qcm",q:"Comment dit-on « Paris » ?",options:["بَارِيس","لَنْدَن","بِرْلِين","مَدْرِيد"],correct:0},
       {type:"qcm",q:"Que veut dire الْعَالَمُ ؟",options:["Le monde","La ville","Le pays","Le village"],correct:0},
       {type:"qcm",q:"Comment dit-on « pays » ?",options:["الْبَلَدُ","الْعَالَمُ","الْمَدِينَةُ","الْقَرْيَةُ"],correct:0},
       {type:"tf",ar:"أَنَا مِنْ وَاشِنْطُن",q:"Signifie « Je viens de Washington »",correct:true},
       {type:"tf",ar:"هُوَ مِنْ إِسْطَنْبُول",q:"Signifie « Il vient d'Istanbul »",correct:true},
       {type:"tf",ar:"هِيَ مِنْ مَكَّةَ",q:"Signifie « Elle vient de Médine »",correct:false,explain:"مَكَّةُ = La Mecque."},
       {type:"tf",ar:"نَحْنُ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ",q:"Signifie « Nous venons de Médine »",correct:true},
       {type:"fill",sentence:"أَنَا ___ وَاشِنْطُن",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"fill",sentence:"هُوَ ___ إِسْطَنْبُول",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"fill",sentence:"هِيَ ___ مَكَّةَ",options:["مِنْ","فِي","عَلَى","إِلَى"],correct:0},
       {type:"type",q:"Écris « Washington » :",answer:"وَاشِنْطُن",hint:"8 lettres"},
       {type:"type",q:"Écris « Istanbul » :",answer:"إِسْطَنْبُول",hint:"9 lettres"},
       {type:"type",q:"Écris « La Mecque » :",answer:"مَكَّةُ",hint:"3 lettres"},
       {type:"type",q:"Écris « Le Caire » :",answer:"الْقَاهِرَةُ",hint:"avec ال"},
       {type:"type",q:"Écris « Damas » :",answer:"دِمَشْقُ",hint:"4 lettres"},
       {type:"type",q:"Écris « Bagdad » :",answer:"بَغْدَادُ",hint:"5 lettres"},
       {type:"order",q:"Reconstitue :",words:["وَاشِنْطُن","مِنْ","أَنَا"],answer:"أَنَا مِنْ وَاشِنْطُن"},
       {type:"order",q:"Reconstitue :",words:["إِسْطَنْبُول","مِنْ","هُوَ"],answer:"هُوَ مِنْ إِسْطَنْبُول"},
       {type:"order",q:"Reconstitue :",words:["مَكَّةَ","مِنْ","هِيَ"],answer:"هِيَ مِنْ مَكَّةَ"},
       {type:"order",q:"Reconstitue :",words:["الْقَاهِرَةِ","مِنَ","أَنْتَ"],answer:"أَنْتَ مِنَ الْقَاهِرَةِ"},
       {type:"order",q:"Reconstitue :",words:["دِمَشْقَ","مِنْ","نَحْنُ"],answer:"نَحْنُ مِنْ دِمَشْقَ"},
       {type:"audio",audioText:"أَنَا مِنْ وَاشِنْطُن",options:["أَنَا مِنْ وَاشِنْطُن","أَنَا مِنْ إِسْطَنْبُول","أَنَا مِنْ مَكَّةَ","أَنَا مِنْ فَرَنْسَا"],correct:0},
       {type:"audio",audioText:"هُوَ مِنْ إِسْطَنْبُول",options:["هُوَ مِنْ وَاشِنْطُن","هُوَ مِنْ إِسْطَنْبُول","هُوَ مِنْ مَكَّةَ","هُوَ مِنْ دِمَشْقَ"],correct:1},
       {type:"audio",audioText:"هِيَ مِنْ مَكَّةَ",options:["هِيَ مِنَ الْمَدِينَةِ","هِيَ مِنْ مَكَّةَ","هِيَ مِنَ الْقَاهِرَةِ","هِيَ مِنْ دِمَشْقَ"],correct:1},
       {type:"audio",audioText:"نَحْنُ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ",options:["نَحْنُ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ","نَحْنُ مِنْ مَكَّةَ","نَحْنُ مِنَ الْقَاهِرَةِ","نَحْنُ مِنْ دِمَشْقَ"],correct:0}
     ]}

    /* ⚠️ FIN DES LEÇONS DU TOME 1 — Fermeture du tableau lessons ci-dessous */
    ]
  },
  {id:"t2", num:2, title:"Tome 2", subtitle:"Grammaire intermédiaire", desc:"À venir · 20 leçons prévues", active:false, lessons:[]},
  {id:"t3", num:3, title:"Tome 3", subtitle:"Grammaire avancée", desc:"À venir · 20 leçons prévues", active:false, lessons:[]},
  {id:"t4", num:4, title:"Tome 4", subtitle:"Perfectionnement", desc:"À venir", active:false, lessons:[]}
];

/* ============================================================
   INTERFACE MADINAH SCREEN
   ============================================================ */
var MadinahScreen = {

  /* ---------- ACCUEIL : liste des tomes ---------- */
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
      'Crédits : Dr. V. Abdur Rahim · Université Islamique de Médine</div>';
    document.getElementById('app').innerHTML = h;
  },

  /* ---------- LISTE DES LEÇONS D'UN TOME ---------- */
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

  /* ---------- MENU D'UNE LEÇON ---------- */
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

  /* ---------- SOUS-MODULE : TEXTE ---------- */
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

  /* ---------- SOUS-MODULE : AUDIO ---------- */
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

  /* ---------- SOUS-MODULE : VOCABULAIRE ---------- */
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

  /* ---------- SOUS-MODULE : GRAMMAIRE ---------- */
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

  /* ---------- SOUS-MODULE : DIALOGUE ---------- */
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

  /* ---------- SOUS-MODULE : EXERCICES (6 types) ---------- */
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
        inp.onkeydown = function(e){
          if (e.key === 'Enter'){ MadinahScreen._answerType(); }
        };
      }
    }
  },

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

  _renderQCM: function(ex){
    var sh = this._shuffleOptions(ex);
    var h = '<div class="card" style="padding:24px 20px"><p style="font-size:16px;font-weight:700">' + ex.q + '</p></div>' +
      '<div style="display:grid;gap:8px">';
    for (var i = 0; i < sh.options.length; i++){
      h += '<button class="quiz-option" onclick="MadinahScreen._answerQCM(' + i + ')">' + sh.options[i] + '</button>';
    }
    return h + '</div>';
  },

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

  /* ---------- PDF (info) ---------- */
  showPdf: function(name){
    if (!name){ toast('📄 PDF non disponible'); return; }
    toast('📄 PDF : ' + name);
  },

  /* ---------- UTILITAIRES INTERNES ---------- */
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

/* ============================================================
   EXPORT DU VOCABULAIRE DE MÉDINE POUR AUTRES MODULES
   Permet à Quiz/Memory/SRS/Stats d'utiliser ces mots
   ============================================================ */
(function exportMadinahVocab(){
  var all = [];
  for (var ti = 0; ti < TOMES.length; ti++){
    var tome = TOMES[ti];
    if (!tome.lessons) continue;
    for (var li = 0; li < tome.lessons.length; li++){
      var lesson = tome.lessons[li];
      if (!lesson.vocab || !lesson.vocab.length) continue;
      for (var vi = 0; vi < lesson.vocab.length; vi++){
        var v = lesson.vocab[vi];
        all.push({
          id: "med_" + lesson.id + "_" + vi,
          ar: v.ar,
          fr: v.fr,
          tr: v.tr || '',
          t: "Tome " + tome.num + " - Leçon " + lesson.num,
          lv: "MEDINE",
          source: "madinah"
        });
      }
    }
  }
  window.MADINAH_VOCAB = all;
})();
/* ============================================================
   EXPORT DES EXERCICES DE MÉDINE POUR LE QUIZ GLOBAL
   ============================================================ */
(function exportMadinahExercises(){
  var all = [];
  for (var ti = 0; ti < TOMES.length; ti++){
    var tome = TOMES[ti];
    if (!tome.lessons) continue;
    for (var li = 0; li < tome.lessons.length; li++){
      var lesson = tome.lessons[li];
      if (!lesson.exercises) continue;
      for (var ei = 0; ei < lesson.exercises.length; ei++){
        var ex = lesson.exercises[ei];
        all.push({
          id: "med_ex_" + lesson.id + "_" + ei,
          type: ex.type,
          q: ex.q || ex.sentence || '',
          sentence: ex.sentence || '',
          audioText: ex.audioText || '',
          options: ex.options ? ex.options.slice() : null,
          correct: ex.correct,
          answer: ex.answer || '',
          ar: ex.ar || '',
          explain: ex.explain || '',
          hint: ex.hint || '',
          lesson: lesson.title,
          tome: tome.title
        });
      }
    }
  }
  window.MADINAH_EXERCISES = all;
})();/* ============================================================
   EXPORT DES EXERCICES DE MÉDINE POUR LE QUIZ GLOBAL
   ============================================================ */
(function exportMadinahExercises(){
  var all = [];
  for (var ti = 0; ti < TOMES.length; ti++){
    var tome = TOMES[ti];
    if (!tome.lessons) continue;
    for (var li = 0; li < tome.lessons.length; li++){
      var lesson = tome.lessons[li];
      if (!lesson.exercises) continue;
      for (var ei = 0; ei < lesson.exercises.length; ei++){
        var ex = lesson.exercises[ei];
        all.push({
          id: "med_ex_" + lesson.id + "_" + ei,
          type: ex.type,
          q: ex.q || ex.sentence || '',
          sentence: ex.sentence || '',
          audioText: ex.audioText || '',
          options: ex.options ? ex.options.slice() : null,
          correct: ex.correct,
          answer: ex.answer || '',
          ar: ex.ar || '',
          explain: ex.explain || '',
          hint: ex.hint || '',
          lesson: lesson.title,
          tome: tome.title
        });
      }
    }
  }
  window.MADINAH_EXERCISES = all;
})();window.MadinahScreen = MadinahScreen;

})();