/* ============================================================
   ARABIYYA — Module Grammaire (Version 3.0)
   49 règles essentielles du Tome 1 (complètes)
   Source : Cours d'arabe en vidéo + Tomes de Médine
   ============================================================ */
(function(){
"use strict";

/* ---------- Échappement local ---------- */
function esc(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/* ============================================================
   DONNÉES : LES 49 RÈGLES
   ============================================================ */
var RULES = [
  /* ============================================
     GROUPE 1 — LES BASES (r01-r03)
     ============================================ */
  {
    id: "r01",
    num: 1,
    cat: "Les bases",
    title: "الكلمة — Les 3 catégories de mots",
    arabic: "الْكَلِمَة",
    explanation: "En arabe, chaque mot appartient à UNE SEULE des 3 catégories. Cette classification est fondamentale : elle détermine comment le mot se comporte dans la phrase.",
    items: [
      { cas: "الاسم", sign: "Nom", nom: "هَذَا، بَاب، كِتَاب", fr: "Mot qui a un sens par lui-même, sans temps" },
      { cas: "الفعل", sign: "Verbe", nom: "يَكْتُبُ، كَتَبَ، اكْتُبْ", fr: "Mot qui indique une action + un temps" },
      { cas: "الحرف", sign: "Particule", nom: "فِي، مِنْ، إِلَى، أَ", fr: "Mot qui n'a de sens qu'avec un autre mot" }
    ],
    examples: [
      "هَذَا كِتَابٌ (هَذَا = اسم)",
      "يَكْتُبُ الطَّالِبُ (يَكْتُبُ = فعل)",
      "الْكِتَابُ فِي الْبَيْتِ (فِي = حرف)"
    ]
  },
  {
    id: "r02",
    num: 2,
    cat: "Les bases",
    title: "الجملة الاسمية — La phrase nominale",
    arabic: "الْجُمْلَة الاِسْمِيَّة",
    explanation: "Phrase qui commence par un NOM (pas un verbe). En arabe, il n'y a PAS de verbe « être » au présent. La phrase se compose d'un sujet (مبتدأ) et d'un attribut (خبر).",
    items: [
      { cas: "مُبْتَدَأ", sign: "Sujet", nom: "هَذَا", fr: "Ce qui est décrit" },
      { cas: "خَبَر", sign: "Attribut", nom: "كِتَابٌ", fr: "Ce qu'on dit du sujet" }
    ],
    examples: [
      "هَذَا كِتَابٌ = Sujet + Attribut",
      "الْبَيْتُ جَدِيدٌ = Sujet (défini) + Attribut",
      "الطَّالِبُ مُجْتَهِدٌ = L'étudiant est travailleur"
    ]
  },
  {
    id: "r03",
    num: 3,
    cat: "Les bases",
    title: "الإعراب + التنوين — Déclinaison & marques",
    arabic: "الإِعْرَاب + التَّنْوِين",
    explanation: "La voyelle finale d'un nom CHANGE selon sa fonction dans la phrase. Il y a 3 cas principaux. Le tanwin est un nūn qui se prononce à la fin mais ne s'écrit pas : c'est le signe de l'indéfini (نكرة).",
    items: [
      { cas: "الرَّفْع", sign: "ُ (damma)", nom: "كِتَابٌ (tanwin ـٌ)", fr: "Sujet / attribut — indéfini" },
      { cas: "النَّصْب", sign: "َ (fatha)", nom: "كِتَابًا (tanwin ـً)", fr: "Complément d'objet — indéfini" },
      { cas: "الْجَرّ", sign: "ِ (kasra)", nom: "كِتَابٍ (tanwin ـٍ)", fr: "Après préposition — indéfini" }
    ],
    examples: [
      "هَذَا كِتَابٌ (مرفوع + نكرة)",
      "قَرَأْتُ كِتَابًا (منصوب + نكرة)",
      "فِي كِتَابٍ (مجرور + نكرة)"
    ]
  },

  /* ============================================
     GROUPE 2 — LES NOMS + DÉMONSTRATIFS (r04-r10)
     ============================================ */
  {
    id: "r04",
    num: 4,
    cat: "Les noms",
    title: "أسماء الإشارة — Les démonstratifs",
    arabic: "أَسْمَاء الإِشَارَة",
    explanation: "Les noms démonstratifs désignent quelque chose en fonction de 3 critères : le nombre (singulier), le genre (masculin/féminin) et la distance (proche/lointain). Il y a 4 formes principales.",
    items: [
      { cas: "هَذَا", sign: "Proche + Masc.", nom: "هَذَا كِتَابٌ", fr: "Ceci est un livre" },
      { cas: "هَذِهِ", sign: "Proche + Fém.", nom: "هَذِهِ مَدْرَسَةٌ", fr: "Ceci est une école" },
      { cas: "ذَلِكَ", sign: "Lointain + Masc.", nom: "ذَلِكَ بَيْتٌ", fr: "Cela est une maison" },
      { cas: "تِلْكَ", sign: "Lointain + Fém.", nom: "تِلْكَ سَيَّارَةٌ", fr: "Celle-là est une voiture" }
    ],
    examples: [
      "هَذَا كِتَابٌ = Ceci est un livre",
      "ذَلِكَ جَبَلٌ = Cela est une montagne",
      "هَذِهِ أُمِّي = Ceci est ma mère",
      "تِلْكَ مَدْرَسَةٌ = Celle-là est une école"
    ]
  },
  {
    id: "r05",
    num: 5,
    cat: "Les noms",
    title: "ال + النكرة والمعرفة — Article & états du nom",
    arabic: "ال + النَّكِرَة وَالْمَعْرِفَة",
    explanation: "Un nom arabe est soit INDÉFINI (نكرة) soit DÉFINI (معرفة). Le signe de l'indéfini est le tanwin. Le signe du défini est ال. L'article ال fait perdre le tanwin et rend le nom défini.",
    items: [
      { cas: "النكرة", sign: "Signe : التنوين", nom: "كِتَابٌ", fr: "Indéfini (un livre)" },
      { cas: "المعرفة", sign: "Signe : ال", nom: "الْكِتَابُ", fr: "Défini (le livre)" }
    ],
    examples: [
      "بَيْتٌ → الْبَيْتُ = une maison → la maison",
      "قَلَمٌ → الْقَلَمُ = un stylo → le stylo",
      "كِتَابٌ = un livre (نكرة) / الْكِتَابُ = le livre (معرفة)"
    ]
  },
  {
    id: "r06",
    num: 6,
    cat: "Les noms",
    title: "الحروف القمرية — Les lettres lunaires",
    arabic: "الْحُرُوف الْقَمَرِيَّة",
    explanation: "Si le nom commence par une lettre LUNAIRE, le ل de ال SE PRONONCE. Il y a 14 lettres lunaires.",
    items: [
      { cas: "Lettres", sign: "14", nom: "ا ب ج ح خ ع غ ف ق ك م ه و ي", fr: "Toutes ces lettres" }
    ],
    examples: [
      "الْبَيْتُ (al-bayt) = ل prononcé",
      "الْكِتَابُ (al-kitāb) = ل prononcé",
      "الْقَمَرُ (al-qamar) = ل prononcé"
    ]
  },
  {
    id: "r07",
    num: 7,
    cat: "Les noms",
    title: "الحروف الشمسية — Les lettres solaires",
    arabic: "الْحُرُوف الشَّمْسِيَّة",
    explanation: "Si le nom commence par une lettre SOLAIRE, le ل de ال NE SE PRONONCE PAS et la lettre est DOUBLÉE (shadda). Il y a 14 lettres solaires.",
    items: [
      { cas: "Lettres", sign: "14", nom: "ت ث د ذ ر ز س ش ص ض ط ظ ل ن", fr: "Toutes ces lettres" }
    ],
    examples: [
      "الشَّمْسُ (ash-shams) = ل non prononcé + ش doublé",
      "النَّجْمُ (an-najm) = ل non prononcé + ن doublé",
      "الرَّجُلُ (ar-rajul) = ل non prononcé + ر doublé"
    ]
  },
  {
    id: "r08",
    num: 8,
    cat: "Les noms",
    title: "المؤنث والمذكر — Féminin & Masculin",
    arabic: "الْمُؤَنَّث وَالْمُذَكَّر",
    explanation: "Chaque nom en arabe est soit masculin, soit féminin. Le féminin a 3 signes distinctifs. Certains noms sont féminins sans signe.",
    items: [
      { cas: "ة", sign: "tā'", nom: "سَيَّارَة، فَاطِمَة", fr: "Signe le plus courant" },
      { cas: "ى", sign: "alif maqsūra", nom: "ذِكْرَى، لَيْلَى", fr: "Féminin en -ā" },
      { cas: "اء", sign: "alif mamdūda", nom: "سَمَاء، حَسْنَاء", fr: "Féminin en -ā'" },
      { cas: "Sans signe", sign: "Irréguliers", nom: "أُذُن، عَيْن، يَد، رِجْل", fr: "Membres par paires" }
    ],
    examples: [
      "مُدَرِّسٌ → مُدَرِّسَةٌ (professeur → professeure)",
      "طَالِبٌ → طَالِبَةٌ (étudiant → étudiante)",
      "هَذِهِ أُذُنٌ (l'oreille — féminin irrégulier)"
    ]
  },
  {
    id: "r09",
    num: 9,
    cat: "Les noms",
    title: "الممنوع من الصرف — Les diptotes",
    arabic: "الْمَمْنُوع مِنَ الصَّرْف",
    explanation: "Certains noms REFUSENT le tanwin. Ils prennent une fatha à la place de la kasra au génitif. Ce sont souvent des noms propres.",
    items: [
      { cas: "Féminins", sign: "Nom propre fém.", nom: "فَاطِمَة، زَيْنَب، مَكَّة", fr: "Sans tanwin" },
      { cas: "Signe fém.", sign: "Nom masc. avec ة", nom: "حَمْزَة، أُسَامَة", fr: "Sans tanwin" },
      { cas: "En ـى", sign: "Nom propre en ى", nom: "مُوسَى، عِيسَى", fr: "Sans tanwin" }
    ],
    examples: [
      "أَنَا مِنْ فَاطِمَةَ (pas de tanwin)",
      "أَنَا مِنْ مَكَّةَ",
      "أَنَا مِنْ مُوسَى"
    ]
  },
  {
    id: "r10",
    num: 10,
    cat: "Les noms",
    title: "الإضافة — L'annexion (possession)",
    arabic: "الإِضَافَة",
    explanation: "Pour dire « le X de Y », on associe 2 noms. Le 1er (المضاف) PERD ال et le tanwin. Le 2e (المضاف إليه) est TOUJOURS مَجْرُور (kasra).",
    items: [
      { cas: "المضاف", sign: "1er nom", nom: "كِتَابُ", fr: "Pas de ال, pas de tanwin" },
      { cas: "المضاف إليه", sign: "2e nom", nom: "زَيْدٍ", fr: "Toujours مجرور" }
    ],
    examples: [
      "كِتَابٌ + زَيْدٌ = كِتَابُ زَيْدٍ (le livre de Zayd)",
      "بَيْتُ مُحَمَّدٍ = la maison de Muhammad",
      "بَابُ الْمَسْجِدِ = la porte de la mosquée"
    ]
  },

  /* ============================================
     GROUPE 3 — LES PARTICULES (r11-r14)
     ============================================ */
  {
    id: "r11",
    num: 11,
    cat: "Les particules",
    title: "حروف الجر + اللام الملكية — Prépositions & possession",
    arabic: "حُرُوف الْجَرّ + اللَّام الْمِلْكِيَّة",
    explanation: "Les prépositions (حروف الجر) agissent sur le nom qui les suit et le rendent مَجْرُور (kasra). La particule لِ (li-) est à la fois une préposition et le moyen d'exprimer la POSSESSION. Combinée à مَنْ, elle forme لِمَنْ (à qui ?).",
    items: [
      { cas: "فِي", sign: "dans", nom: "فِي الْبَيْتِ", fr: "dans la maison" },
      { cas: "عَلَى", sign: "sur", nom: "عَلَى الْمَكْتَبِ", fr: "sur le bureau" },
      { cas: "مِنْ", sign: "de", nom: "مِنَ الْمَسْجِدِ", fr: "de la mosquée" },
      { cas: "إِلَى", sign: "vers", nom: "إِلَى السُّوقِ", fr: "vers le marché" },
      { cas: "لِ", sign: "à / pour", nom: "لِزَيْدٍ، لِي، لَكَ", fr: "Possession : à Zayd, à moi, à toi" }
    ],
    examples: [
      "الْكِتَابُ فِي الْحَقِيبَةِ",
      "هَذَا الْكِتَابُ لِزَيْدٍ = Ce livre est à Zayd",
      "هَذَا الْقَلَمُ لِي = Ce stylo est à moi",
      "لِمَنْ هَذَا الْكِتَابُ ؟ = À qui est ce livre ?"
    ]
  },
  {
    id: "r12",
    num: 12,
    cat: "Les particules",
    title: "النداء — L'interpellation",
    arabic: "النِّدَاء",
    explanation: "Pour appeler quelqu'un, on utilise يَا + le nom. Le nom (المنادى) PERD son tanwin.",
    items: [
      { cas: "Particule", sign: "Appel", nom: "يَا", fr: "Ô" },
      { cas: "المنادى", sign: "Nom appelé", nom: "زَيْدُ", fr: "Sans tanwin" }
    ],
    examples: [
      "يَا زَيْدُ ! (Ô Zayd !)",
      "يَا مُحَمَّدُ ! (Ô Muhammad !)",
      "يَا عَلِيُّ ! (Ô Ali !)"
    ]
  },
  {
    id: "r13",
    num: 13,
    cat: "Les particules",
    title: "لِمَاذَا — Pourquoi ?",
    arabic: "لِمَاذَا",
    explanation: "لِمَاذَا est la contraction de لِ + مَا + ذَا. C'est un nom interrogatif qui signifie « pourquoi ? ». La réponse commence souvent par لِأَنَّ (parce que).",
    items: [
      { cas: "Formation", sign: "لِ + مَا + ذَا", nom: "لِمَاذَا", fr: "Contraction" },
      { cas: "Signification", sign: "Pourquoi ?", nom: "لِمَاذَا فَشِلَ ؟", fr: "Question sur la cause" },
      { cas: "Réponse", sign: "لِأَنَّ", nom: "لِأَنَّهُ كَسْلَانُ", fr: "Parce qu'il est paresseux" }
    ],
    examples: [
      "لِمَاذَا فَشِلَ زَيْدٌ ؟ = Pourquoi Zayd a-t-il échoué ?",
      "لِأَنَّهُ كَسْلَانُ = Parce qu'il est paresseux",
      "لِمَاذَا فَشِلَ يَا أُسْتَاذُ ؟"
    ]
  },
  {
    id: "r14",
    num: 14,
    cat: "Les particules",
    title: "العلم الأعجمي — Noms propres non-arabes",
    arabic: "الْعَلَم الْأَعْجَمِيّ",
    explanation: "Les noms propres NON-arabes composés de PLUS DE 3 LETTRES sont interdits de tanwin (ممنوع من الصرف). Ceux de 3 lettres ou moins peuvent prendre le tanwin.",
    items: [
      { cas: "Interdits", sign: "+3 lettres", nom: "إِبْرَاهِيم، إِسْمَاعِيل، يُوسُف، دَاوُد", fr: "Sans tanwin" },
      { cas: "Acceptés", sign: "≤3 lettres", nom: "نُوحٌ، لُوطٌ", fr: "Avec tanwin" },
      { cas: "Raison", sign: "Non-arabe + long", nom: "عُجْمَة وَطُول", fr: "Foreign + longueur" }
    ],
    examples: [
      "إِبْرَاهِيمُ فِي كُلِّيَّةِ الشَّرِيعَةِ",
      "نُوحٌ وَلُوطٌ أَنْبِيَاءُ",
      "يُوسُفُ فِي كُلِّيَّةِ التِّجَارَةِ"
    ]
  },

  /* ============================================
     GROUPE 4 — L'INTERROGATION (r15-r21)
     ============================================ */
  {
    id: "r15",
    num: 15,
    cat: "L'interrogation",
    title: "أ — La particule interrogative",
    arabic: "أَ",
    explanation: "أ est une PARTICULE (حرف) qui pose une question FERMÉE. La réponse est obligatoirement نعم (oui) ou لا (non).",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "حَرْف", fr: "Particule" },
      { cas: "Placement", sign: "Position", nom: "أَوَّل الْجُمْلَة", fr: "Début de phrase" },
      { cas: "Réponse", sign: "Type de réponse", nom: "نَعَمْ / لَا", fr: "Oui / Non" }
    ],
    examples: [
      "أَهَذَا كِتَابٌ ؟ = Est-ce que ceci est un livre ?",
      "نَعَمْ، هَذَا كِتَابٌ = Oui, c'est un livre",
      "لَا، هَذَا قَلَمٌ = Non, c'est un stylo"
    ]
  },
  {
    id: "r16",
    num: 16,
    cat: "L'interrogation",
    title: "ما — Le nom interrogatif",
    arabic: "مَا",
    explanation: "ما est un NOM (اسم) interrogatif qui demande « quoi ? ». La réponse est un nom (chose non douée de raison).",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم", fr: "Nom" },
      { cas: "Placement", sign: "Position", nom: "أَوَّل الْجُمْلَة", fr: "Début de phrase" },
      { cas: "Réponse", sign: "Type de réponse", nom: "اِسْم", fr: "Un nom" }
    ],
    examples: [
      "مَا هَذَا ؟ = Qu'est-ce que ceci ?",
      "هَذَا كِتَابٌ = C'est un livre",
      "مَا ذَلِكَ ؟ = Qu'est-ce que cela ?"
    ]
  },
  {
    id: "r17",
    num: 17,
    cat: "L'interrogation",
    title: "مَنْ — Qui ? (êtres doués de raison)",
    arabic: "مَنْ",
    explanation: "مَنْ est un nom interrogatif (اسم استفهام) qui s'emploie UNIQUEMENT pour interroger sur des êtres DOUÉS DE RAISON (humains). La réponse est un nom de personne.",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم اِسْتِفْهَام", fr: "Nom interrogatif" },
      { cas: "Emploi", sign: "Cible", nom: "ذُو عَقْل", fr: "Humains uniquement" },
      { cas: "Placement", sign: "Position", nom: "أَوَّل الْجُمْلَة", fr: "Début de phrase" },
      { cas: "Réponse", sign: "Type", nom: "اِسْم شَخْص", fr: "Nom de personne" }
    ],
    examples: [
      "مَنْ هَذَا ؟ = Qui est-ce ?",
      "هَذَا مُحَمَّدٌ = C'est Muhammad",
      "مَنْ هَؤُلَاءِ ؟ = Qui sont ceux-ci ?"
    ]
  },
  {
    id: "r18",
    num: 18,
    cat: "L'interrogation",
    title: "مَا vs مَنْ — Différence fondamentale",
    arabic: "مَا × مَنْ",
    explanation: "Tableau comparatif entre les 2 principaux noms interrogatifs : مَا s'utilise pour les êtres NON doués de raison, مَنْ pour les êtres DOUÉS de raison.",
    items: [
      { cas: "مَا", sign: "Non doués de raison", nom: "مَا هَذَا ؟", fr: "Chose / objet / animal" },
      { cas: "مَنْ", sign: "Doués de raison", nom: "مَنْ هَذَا ؟", fr: "Personne / humain" }
    ],
    examples: [
      "مَا هَذَا ؟ (objet) → هَذَا كِتَابٌ",
      "مَنْ هَذَا ؟ (personne) → هَذَا مُحَمَّدٌ",
      "مَا تِلْكَ ؟ (animal) → تِلْكَ دَجَاجَةٌ"
    ]
  },
  {
    id: "r19",
    num: 19,
    cat: "L'interrogation",
    title: "أَيْنَ — Où ? (lieu)",
    arabic: "أَيْنَ",
    explanation: "أَيْنَ est un nom interrogatif qui s'emploie pour interroger sur le LIEU. La réponse est un lieu (فِي، عَلَى، تَحْتَ...).",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم اِسْتِفْهَام", fr: "Nom interrogatif" },
      { cas: "Emploi", sign: "Cible", nom: "الْمَكَان", fr: "Lieu" },
      { cas: "Réponse", sign: "Type", nom: "مَكَان", fr: "Un lieu" }
    ],
    examples: [
      "أَيْنَ الْكِتَابُ ؟ = Où est le livre ?",
      "هُوَ عَلَى الْمَكْتَبِ = Il est sur le bureau",
      "أَيْنَ مُحَمَّدٌ ؟ = Où est Muhammad ?"
    ]
  },
  {
    id: "r20",
    num: 20,
    cat: "L'interrogation",
    title: "كَيْفَ — Comment ? (état)",
    arabic: "كَيْفَ",
    explanation: "كَيْفَ est un nom interrogatif qui interroge sur L'ÉTAT ou LA MANIÈRE d'une chose. Il est invariable et débute toujours la phrase.",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم اِسْتِفْهَام", fr: "Nom interrogatif" },
      { cas: "Emploi", sign: "Cible", nom: "الْحَال", fr: "État / manière" },
      { cas: "Note", sign: "Invariable", nom: "لَا يَتَغَيَّر", fr: "Toujours identique" }
    ],
    examples: [
      "كَيْفَ حَالُكَ ؟ = Comment vas-tu ?",
      "أَنَا بِخَيْرٍ = Je vais bien",
      "كَيْفَ الْاِخْتِبَارُ ؟ = Comment est l'examen ?"
    ]
  },
  {
    id: "r21",
    num: 21,
    cat: "L'interrogation",
    title: "مَتَى — Quand ? (temps)",
    arabic: "مَتَى",
    explanation: "مَتَى est un nom interrogatif qui interroge sur LE MOMENT. Il est invariable et débute toujours la phrase.",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم اِسْتِفْهَام", fr: "Nom interrogatif" },
      { cas: "Emploi", sign: "Cible", nom: "الزَّمَان", fr: "Temps" },
      { cas: "Réponse", sign: "Type", nom: "زَمَان", fr: "Un moment" }
    ],
    examples: [
      "مَتَى الدَّرْسُ ؟ = Quand est la leçon ?",
      "الدَّرْسُ الْآنَ = La leçon est maintenant",
      "مَتَى الْاِخْتِبَارُ ؟ = Quand est l'examen ?"
    ]
  },
  {
    id: "r22",
    num: 22,
    cat: "L'interrogation",
    title: "أَيُّ — Quel ? (général)",
    arabic: "أَيُّ",
    explanation: "أَيُّ est un nom interrogatif GÉNÉRAL qui peut interroger sur le lieu, le temps, la personne ou l'être. Il est TOUJOURS annexé (مُضَاف) et c'est le SEUL nom interrogatif variable (مُعَرَّب).",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم اِسْتِفْهَام", fr: "Nom interrogatif" },
      { cas: "Emploi", sign: "Général", nom: "لِلْمَكَان وَالزَّمَان وَالْعَاقِل وَغَيْرِ الْعَاقِل", fr: "Lieu, temps, doués et non-doués" },
      { cas: "Règle", sign: "Toujours annexé", nom: "مُضَاف دَائِمًا", fr: "Toujours suivi d'un nom" },
      { cas: "Unique", sign: "Variable", nom: "مُعَرَّب", fr: "Seul nom interrogatif variable" }
    ],
    examples: [
      "أَيُّ يَوْمٍ هَذَا ؟ = Quel jour est-ce ?",
      "أَيُّ شَهْرٍ هَذَا ؟ = Quel mois est-ce ?",
      "فِي أَيِّ مَدْرَسَةٍ أَنْتَ ؟ = Dans quelle école es-tu ?"
    ]
  },
  {
    id: "r23",
    num: 23,
    cat: "L'interrogation",
    title: "كَمْ — Combien ? (quantité)",
    arabic: "كَمْ",
    explanation: "كَمْ est un nom interrogatif qui interroge sur la QUANTITÉ, la DURÉE ou le NOMBRE. Le nom qui suit كَمْ est généralement نَكِرَة، مُفْرَد، مَنْصُوب et s'appelle تَمْيِيز.",
    items: [
      { cas: "Type", sign: "Catégorie", nom: "اِسْم اِسْتِفْهَام", fr: "Nom interrogatif" },
      { cas: "Emploi", sign: "Cible", nom: "الْعَدَد / الْكَمِّيَّة", fr: "Quantité / nombre" },
      { cas: "Après كَمْ", sign: "Règle", nom: "نَكِرَة، مُفْرَد، مَنْصُوب", fr: "Indéfini, singulier, accusatif" },
      { cas: "Nom technique", sign: "Fonction", nom: "تَمْيِيز", fr: "Complément de quantité" }
    ],
    examples: [
      "كَمْ عُمْرُكَ ؟ = Quel est ton âge ?",
      "كَمْ طَالِبًا فِي الْفَصْلِ ؟ = Combien d'étudiants dans la classe ?",
      "كَمْ كِتَابًا عِنْدَكَ ؟ = Combien de livres as-tu ?"
    ]
  },

  /* ============================================
     GROUPE 5 — ADJECTIFS + ADVERBES (r24-r26)
     ============================================ */
  {
    id: "r24",
    num: 24,
    cat: "Les noms",
    title: "النعت — L'adjectif",
    arabic: "النَّعْت",
    explanation: "L'adjectif (النعت) qualifie un nom (المنعوت). Il s'accorde avec lui en GENRE, NOMBRE, DÉFINITUDE et إعراب. Il ne fait PAS partie des éléments fondamentaux de la phrase.",
    items: [
      { cas: "Type", sign: "Nom", nom: "اِسْم", fr: "Nom" },
      { cas: "Fonction", sign: "Qualifie", nom: "يَصِف الْمَنْعُوت", fr: "Qualifie le nom" },
      { cas: "Accord 1", sign: "Genre", nom: "مُذَكَّر / مُؤَنَّث", fr: "Masculin/féminin" },
      { cas: "Accord 2", sign: "Nombre", nom: "مُفْرَد / جَمْع", fr: "Singulier/pluriel" },
      { cas: "Accord 3", sign: "Définitude", nom: "نَكِرَة / مَعْرِفَة", fr: "Indéfini/défini" },
      { cas: "Accord 4", sign: "إعراب", nom: "رَفْع / نَصْب / جَرّ", fr: "Cas identique" }
    ],
    examples: [
      "هَذَا كِتَابٌ جَدِيدٌ = C'est un nouveau livre",
      "الْبِنْتُ الصَّغِيرَةُ = La petite fille",
      "زَيْدٌ رَجُلٌ طَوِيلٌ = Zayd est un homme grand"
    ]
  },
  {
    id: "r25",
    num: 25,
    cat: "Les noms",
    title: "ممنوع من الصرف : فَعْلَان",
    arabic: "الْمَمْنُوع مِنَ الصَّرْف : فَعْلَان",
    explanation: "Les noms de forme فَعْلَان sont interdits de tanwin. Cela inclut certains attributs (adjectifs d'état) et certains noms propres.",
    items: [
      { cas: "Attributs", sign: "فَعْلَان", nom: "كَسْلَان، غَضْبَان، عَطْشَان، جَوْعَان", fr: "Adjectifs d'état" },
      { cas: "Noms propres", sign: "فَعْلَان", nom: "عُثْمَان، مَرْوَان، سُفْيَان", fr: "Noms propres masculins" }
    ],
    examples: [
      "عُثْمَانُ طَالِبٌ كَسْلَانُ = Othman est un étudiant paresseux",
      "لَا تَكُنْ غَضْبَانَ = Ne sois pas en colère",
      "أَنَا جَوْعَانُ = J'ai faim"
    ]
  },
  {
    id: "r26",
    num: 26,
    cat: "Les noms",
    title: "إعراب الممنوع من الصرف — Déclinaison des diptotes",
    arabic: "إِعْرَاب الْمَمْنُوع مِنَ الصَّرْف",
    explanation: "Le ممنوع من الصرف suit la règle normale SAUF au جر : il prend une فتحة au lieu d'une كسرة. Il ne prend JAMAIS de tanwin.",
    items: [
      { cas: "رفع", sign: "ضمة", nom: "فَاطِمَةُ فِي الْفَصْلِ", fr: "Normal" },
      { cas: "نصب", sign: "فتحة", nom: "لَا تَكُنْ كَسْلَانَ", fr: "Normal" },
      { cas: "جر", sign: "فتحة (pas كسرة)", nom: "سَلَّمَ عَلَى فَاطِمَةَ", fr: "Spécifique" },
      { cas: "Tanwin", sign: "Interdit", nom: "فَاطِمَةُ (pas فَاطِمَةٌ)", fr: "Jamais de tanwin" }
    ],
    examples: [
      "فَاطِمَةُ فِي الْفَصْلِ (رفع)",
      "لَا تَكُنْ كَسْلَانَ (نصب)",
      "سَلَّمَ زَيْدٌ عَلَى فَاطِمَةَ (جر avec فتحة)",
      "مَرَرْتُ بِإِبْرَاهِيمَ (جر avec فتحة)"
    ]
  },

  /* ============================================
     GROUPE 6 — LES PHRASES (r27-r30)
     ============================================ */
  {
    id: "r27",
    num: 27,
    cat: "Les phrases",
    title: "الجملة المفيدة — La phrase complète",
    arabic: "الْجُمْلَة الْمُفِيدَة",
    explanation: "La phrase complète doit comprendre au minimum 2 noms ou 1 nom + 1 verbe, apporter une information et se suffire à elle-même. Elle se divise en الجملة الاسمية et الجملة الفعلية.",
    items: [
      { cas: "الجملة الاسمية", sign: "Nom + Nom", nom: "مُبْتَدَأ + خَبَر", fr: "Phrase nominale" },
      { cas: "الجملة الفعلية", sign: "Verbe + Sujet", nom: "فِعْل + فَاعِل", fr: "Phrase verbale" },
      { cas: "Condition 1", sign: "Minimum", nom: "اِسْمَان أَوْ اِسْم وَفِعْل", fr: "Au moins 2 éléments" },
      { cas: "Condition 2", sign: "Information", nom: "تُفِيدُ مَعْنًى", fr: "Apporter du sens" },
      { cas: "Condition 3", sign: "Autonomie", nom: "تَسْتَقِلُّ بِنَفْسِهَا", fr: "Se suffire à elle-même" }
    ],
    examples: [
      "زَيْدٌ جَالِسٌ = Zayd est assis (اسمية)",
      "يَكْتُبُ زَيْدٌ = Zayd écrit (فعلية)",
      "خَرَجَ زَيْدٌ مِنَ الْمَدْرَسَةِ = Zayd est sorti de l'école"
    ]
  },
  {
    id: "r28",
    num: 28,
    cat: "Les phrases",
    title: "الجملة الفعلية — La phrase verbale",
    arabic: "الْجُمْلَة الْفِعْلِيَّة",
    explanation: "La phrase verbale commence par un VERBE (فعل). Elle se compose d'un verbe (فِعْل) et d'un sujet (فَاعِل). Le فَاعِل vient TOUJOURS après le verbe et est toujours مَرْفُوع.",
    items: [
      { cas: "Structure", sign: "Verbe + Sujet", nom: "فِعْل + فَاعِل", fr: "Verbe en 1er" },
      { cas: "فَاعِل", sign: "Règle", nom: "مَرْفُوع دَائِمًا", fr: "Toujours nominatif" },
      { cas: "Position", sign: "Après verbe", nom: "بَعْدَ الْفِعْل", fr: "Jamais avant" },
      { cas: "Les 3 temps", sign: "Verbe", nom: "مَاضِي، مُضَارِع، أَمْر", fr: "Passé, présent, impératif" }
    ],
    examples: [
      "يَكْتُبُ زَيْدٌ = Zayd écrit",
      "خَرَجَ زَيْدٌ = Zayd est sorti",
      "يَذْهَبُ يَاسِرٌ = Yasir va"
    ]
  },
  {
    id: "r29",
    num: 29,
    cat: "Les phrases",
    title: "البدل — Le substitutif",
    arabic: "الْبَدَل",
    explanation: "Le بَدَل est un nom qui REMPLACE le nom précédent (المُبْدَل مِنْهُ) en s'accordant avec lui en genre, nombre et إعراب. Il fait partie des التَّوَابِع.",
    items: [
      { cas: "Type", sign: "Nom", nom: "اِسْم", fr: "Nom" },
      { cas: "Fonction", sign: "Remplace", nom: "يُبْدِل الْمُبْدَل مِنْهُ", fr: "Remplace le nom précédent" },
      { cas: "Accord", sign: "Règle", nom: "جِنْس، عَدَد، إِعْرَاب", fr: "Genre, nombre, cas" },
      { cas: "Catégorie", sign: "Type", nom: "التَّوَابِع", fr: "Suivants" },
      { cas: "Test", sign: "Détection", nom: "En supprimant l'un, la phrase garde son sens", fr: "Méthode de vérification" }
    ],
    examples: [
      "هَذَا الرَّجُلُ جَالِسٌ = Cet homme est assis",
      "هَذَا الْوَلَدُ خَالِدٌ = Ce garçon est Khalid",
      "هَذَا الْكِتَابُ جَدِيدٌ وَذَلِكَ الْكِتَابُ قَدِيمٌ"
    ]
  },
  {
    id: "r30",
    num: 30,
    cat: "Les phrases",
    title: "الاسم المقصور — Le nom défectueux",
    arabic: "الِاسْم الْمَقْصُور",
    explanation: "Le الاسم المقصور est un nom terminé par ى (alif maqsoura). Sa terminaison est INAPPARENTE : le changement de voyelle ne s'entend pas. Il est généralement féminin.",
    items: [
      { cas: "Définition", sign: "Terminaison", nom: "مُوسَى، عِيسَى، ذِكْرَى", fr: "Terminé par ى" },
      { cas: "Règle", sign: "Voyelle", nom: "إِعْرَاب مُقَدَّر", fr: "Non apparent" },
      { cas: "Genre", sign: "Généralement", nom: "مُؤَنَّث", fr: "Souvent féminin" }
    ],
    examples: [
      "مُوسَى فِي الْبَيْتِ = Moussa est dans la maison",
      "ذَهَبَ مُوسَى إِلَى مِصْرَ"
    ]
  },

  /* ============================================
     GROUPE 7 — LES PRONOMS (r31-r33)
     ============================================ */
  {
    id: "r31",
    num: 31,
    cat: "Les pronoms",
    title: "الضمائر المنفصلة — Pronoms isolés",
    arabic: "الضَّمَائِر الْمُنْفَصِلَة",
    explanation: "Les pronoms isolés ne sont JAMAIS rattachés à un autre mot. Ils sont invariables et se divisent en 2 types : الرفع et النصب.",
    items: [
      { cas: "رفع", sign: "10 formes", nom: "أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، أَنْتُمْ، أَنْتُنَّ، هُوَ، هِيَ، هُمْ، هُنَّ", fr: "Pronoms sujets" },
      { cas: "نصب", sign: "Formes", nom: "إِيَّايَ، إِيَّاكَ، إِيَّاهُ...", fr: "Pronoms compléments" },
      { cas: "Règle", sign: "Jamais rattachés", nom: "مُنْفَصِلَة دَائِمًا", fr: "Isolés" }
    ],
    examples: [
      "أَنَا طَالِبٌ = Je suis étudiant",
      "هُوَ طَالِبٌ = Il est étudiant",
      "نَحْنُ طُلَّابٌ = Nous sommes étudiants"
    ]
  },
  {
    id: "r32",
    num: 32,
    cat: "Les pronoms",
    title: "الضمائر المتصلة — Pronoms affixes",
    arabic: "الضَّمَائِر الْمُتَّصِلَة",
    explanation: "Les pronoms affixes sont RATTACHÉS à un autre mot. Ils se divisent en 3 types : رفع، نصب، جر.",
    items: [
      { cas: "Règle", sign: "Rattachés", nom: "مُتَّصِلَة دَائِمًا", fr: "Toujours attachés" },
      { cas: "ي", sign: "Mon", nom: "كِتَابِي", fr: "Possession 1ère pers." },
      { cas: "كَ", sign: "Ton", nom: "كِتَابُكَ", fr: "Possession 2ème pers. masc." },
      { cas: "هُ", sign: "Son (lui)", nom: "كِتَابُهُ", fr: "Possession 3ème pers. masc." },
      { cas: "هَا", sign: "Sa (elle)", nom: "كِتَابُهَا", fr: "Possession 3ème pers. fém." }
    ],
    examples: [
      "كِتَابِي جَدِيدٌ = Mon livre est nouveau",
      "بَيْتُكَ كَبِيرٌ = Ta maison est grande",
      "أُمُّهُ فِي الْمَسْجِدِ = Sa mère est à la mosquée"
    ]
  },
  {
    id: "r33",
    num: 33,
    cat: "Les pronoms",
    title: "المضاف إلى ياء المتكلم — Règles spéciales",
    arabic: "الْمُضَاف إِلَى يَاء الْمُتَكَلِّم",
    explanation: "Quand un nom est annexé au ي du locuteur, il prend une كسرة avant le ي (pour faciliter la prononciation). Cette كسرة n'est PAS un signe d'إعراب.",
    items: [
      { cas: "Règle 1", sign: "ي avec شدة", nom: "فِيَّ، عَلَيَّ، إِلَيَّ", fr: "Avec في/على/إلى" },
      { cas: "Règle 2", sign: "ه avec كسرة", nom: "فِيهِ، عَلَيْهِ، إِلَيْهِ", fr: "Après كسرة ou ي" },
      { cas: "Exception", sign: "ه du fém. sing.", nom: "عَلَيْهَا، فِيهَا", fr: "Garde sa فتحة" }
    ],
    examples: [
      "هَذَا كِتَابِي، خَرَجَ صَدِيقِي، أَبِي فِي الْمَسْجِد",
      "فِي الْبَيْتِ → فِيهِ",
      "عَلَى الْمَكْتَبِ → عَلَيْهِ"
    ]
  },

  /* ============================================
     GROUPE 8 — PLURIEL & DUEL (r34-r41)
     ============================================ */
  {
    id: "r34",
    num: 34,
    cat: "Pluriel & Duel",
    title: "جمع المذكر السالم — Pluriel masculin régulier",
    arabic: "جَمْع الْمُذَكَّر السَّالِم",
    explanation: "Pluriel régulier masculin (min. 3 unités masculines douées de raison). On ajoute ونَ (nominatif) ou ينَ (accusatif/génitif) à la fin du singulier.",
    items: [
      { cas: "Formation", sign: "Ajout", nom: "ونَ / ينَ", fr: "À la fin du singulier" },
      { cas: "Emploi", sign: "Cible", nom: "ذُو عَقْل مُذَكَّر", fr: "Masculins doués de raison" },
      { cas: "رفع", sign: "Signe", nom: "الواو (مُسْلِمُونَ)", fr: "Au nominatif" },
      { cas: "نصب/جر", sign: "Signe", nom: "الياء (مُسْلِمِينَ)", fr: "Acc./gén." },
      { cas: "Le ن", sign: "Règle", nom: "Toujours فتحة", fr: "Pas un signe d'إعراب" }
    ],
    examples: [
      "مُسْلِمٌ → مُسْلِمُونَ",
      "صَلَّى الْمُسْلِمُونَ = Les musulmans ont prié",
      "السَّلَامُ عَلَى الْمُسْلِمِينَ = Que la paix soit sur les musulmans"
    ]
  },
  {
    id: "r35",
    num: 35,
    cat: "Pluriel & Duel",
    title: "جمع المؤنث السالم — Pluriel féminin régulier",
    arabic: "جَمْع الْمُؤَنَّث السَّالِم",
    explanation: "Pluriel régulier féminin (min. 3 unités féminines). On ajoute ات à la fin du singulier. L'إعراب utilise toujours une حَرَكَة.",
    items: [
      { cas: "Formation", sign: "Ajout", nom: "ات", fr: "À la fin du singulier" },
      { cas: "Emploi", sign: "Cible", nom: "مُؤَنَّث عَاقِل وَغَيْر عَاقِل", fr: "Féminins + choses" },
      { cas: "رفع", sign: "Signe", nom: "الضمة (مُسْلِمَاتٌ)", fr: "Nominatif" },
      { cas: "نصب", sign: "Signe", nom: "الكسرة (مُسْلِمَاتٍ)", fr: "Accusatif (spécifique)" },
      { cas: "جر", sign: "Signe", nom: "الكسرة (مُسْلِمَاتٍ)", fr: "Génitif" }
    ],
    examples: [
      "مُسْلِمَةٌ → مُسْلِمَاتٌ",
      "صَلَّتِ الْمُسْلِمَاتُ",
      "السَّلَامُ عَلَى الْمُسْلِمَاتِ"
    ]
  },
  {
    id: "r36",
    num: 36,
    cat: "Pluriel & Duel",
    title: "جمع التكسير — Pluriel irrégulier",
    arabic: "جَمْع التَّكْسِير",
    explanation: "Pluriel qui DÉNATURE la forme du singulier (ajout de lettre, retrait, changement de حَرَكَة). Pas de règle constante : les formes sont à mémoriser.",
    items: [
      { cas: "Singulier", sign: "→ Pluriel", nom: "كِتَابٌ → كُتُبٌ", fr: "Changement interne" },
      { cas: "Singulier", sign: "→ Pluriel", nom: "بَيْتٌ → بُيُوتٌ", fr: "Changement interne" },
      { cas: "Singulier", sign: "→ Pluriel", nom: "رَجُلٌ → رِجَالٌ", fr: "Changement interne" },
      { cas: "إعراب", sign: "Règle", nom: "حَرَكَة (ضمة/فتحة/كسرة)", fr: "Comme un nom normal" }
    ],
    examples: [
      "الْكُتُبُ فِي الْفَصْلِ = Les livres sont dans la classe",
      "الرِّجَالُ فِي الْمَسَاجِدِ = Les hommes sont dans les mosquées",
      "الْأَطْفَالُ فِي الْحَدَائِقِ = Les enfants sont dans les jardins"
    ]
  },
  {
    id: "r37",
    num: 37,
    cat: "Pluriel & Duel",
    title: "إعراب الجموع — Déclinaison des pluriels",
    arabic: "إِعْرَاب الْجُمُوع",
    explanation: "Chaque type de pluriel a ses propres signes d'إعراب. Tableau récapitulatif.",
    items: [
      { cas: "جمع مذكر سالم", sign: "رفع/نصب/جر", nom: "الواو / الياء / الياء", fr: "مُسْلِمُونَ / مُسْلِمِينَ / مُسْلِمِينَ" },
      { cas: "جمع مؤنث سالم", sign: "رفع/نصب/جر", nom: "الضمة / الكسرة / الكسرة", fr: "مُسْلِمَاتٌ / مُسْلِمَاتٍ / مُسْلِمَاتٍ" },
      { cas: "جمع تكسير", sign: "رفع/نصب/جر", nom: "ضمة / فتحة / كسرة", fr: "كُتُبٌ / كُتُبًا / كُتُبٍ" }
    ],
    examples: [
      "جَاءَ الْمُسْلِمُونَ (رفع بالواو)",
      "رَأَيْتُ الْمُسْلِمِينَ (نصب بالياء)",
      "الْكُتُبُ جَدِيدَةٌ (رفع بالضمة)"
    ]
  },
  {
    id: "r38",
    num: 38,
    cat: "Pluriel & Duel",
    title: "المثنى — Le duel",
    arabic: "الْمَثْنَى",
    explanation: "Le duel indique 2 unités (masculines ou féminines). On ajoute ان ou ين à la fin du singulier. Une فتحة précède toujours ces lettres.",
    items: [
      { cas: "Formation", sign: "Ajout", nom: "ان / ين", fr: "À la fin du singulier" },
      { cas: "Précédé de", sign: "Règle", nom: "فتحة", fr: "Toujours" },
      { cas: "رفع", sign: "Signe", nom: "الألف (طَالِبَانِ)", fr: "Nominatif" },
      { cas: "نصب/جر", sign: "Signe", nom: "الياء (طَالِبَيْنِ)", fr: "Acc./gén." },
      { cas: "Le ن", sign: "Règle", nom: "Toujours فتحة", fr: "Pas un signe d'إعراب" }
    ],
    examples: [
      "طَالِبٌ → طَالِبَانِ",
      "هَذَانِ طَالِبَانِ = Ces deux-ci sont deux étudiants",
      "سَلَّمْتُ عَلَى الطَّالِبَيْنِ = J'ai salué les deux étudiants"
    ]
  },
  {
    id: "r39",
    num: 39,
    cat: "Pluriel & Duel",
    title: "هَذَانِ / هَاتَانِ — Duel des démonstratifs",
    arabic: "هَذَانِ، ذَانِكَ، هَاتَانِ، تَانِكَ",
    explanation: "Le duel des démonstratifs est VARIABLE (مُعَرَّب), contrairement aux autres démonstratifs. 4 formes : masculin/féminin × proche/lointain.",
    items: [
      { cas: "هَذَانِ", sign: "Proche + Masc.", nom: "هَذَانِ طَالِبَانِ", fr: "Ces deux-ci (masc.)" },
      { cas: "ذَانِكَ", sign: "Lointain + Masc.", nom: "ذَانِكَ رَجُلَانِ", fr: "Ces deux-là (masc.)" },
      { cas: "هَاتَانِ", sign: "Proche + Fém.", nom: "هَاتَانِ طَالِبَتَانِ", fr: "Ces deux-ci (fém.)" },
      { cas: "تَانِكَ", sign: "Lointain + Fém.", nom: "تَانِكَ اِمْرَأَتَانِ", fr: "Ces deux-là (fém.)" }
    ],
    examples: [
      "هَذَانِ طَالِبَانِ = Ces deux-ci sont deux étudiants",
      "هَاتَانِ طَالِبَتَانِ = Ces deux-ci sont deux étudiantes",
      "أَكَلْتُ هَذَيْنِ الْخُبْزَيْنِ = J'ai mangé ces deux pains"
    ]
  },
  {
    id: "r40",
    num: 40,
    cat: "Pluriel & Duel",
    title: "المؤنث والمذكر — Membres du corps",
    arabic: "أَعْضَاء الْجِسْم الْمُزْدَوِجَة",
    explanation: "Les membres du corps qui vont PAR PAIRES sont généralement FÉMININS en arabe, même sans signe visible.",
    items: [
      { cas: "عَيْن", sign: "Œil", nom: "هَذِهِ عَيْنِي", fr: "Féminin irrégulier" },
      { cas: "أُذُن", sign: "Oreille", nom: "هَذِهِ أُذُنِي", fr: "Féminin irrégulier" },
      { cas: "يَد", sign: "Main", nom: "هَذِهِ يَدِي", fr: "Féminin irrégulier" },
      { cas: "رِجْل", sign: "Pied", nom: "هَذِهِ رِجْلِي", fr: "Féminin irrégulier" }
    ],
    examples: [
      "هَذِهِ أُذُنٌ (féminin)",
      "هَذِهِ يَدٌ (féminin)",
      "هَذِهِ رِجْلٌ (féminin)"
    ]
  },
  {
    id: "r41",
    num: 41,
    cat: "Pluriel & Duel",
    title: "جمع غير العاقل — Accord au féminin",
    arabic: "جَمْع غَيْر الْعَاقِل",
    explanation: "Le pluriel des êtres NON doués de raison (choses, animaux) s'accorde au FÉMININ SINGULIER ou FÉMININ PLURIEL. Les pronoms et démonstratifs sont aussi au féminin.",
    items: [
      { cas: "Féminin singulier", sign: "Option 1", nom: "الْأَيَّامُ مَعْدُودَةٌ", fr: "Accord au fém. sing." },
      { cas: "Féminin pluriel", sign: "Option 2", nom: "الْأَيَّامُ مَعْدُودَاتٌ", fr: "Accord au fém. plur." },
      { cas: "Pronom", sign: "Féminin", nom: "هِيَ", fr: "Pas هُمْ" },
      { cas: "Démonstratif", sign: "Féminin", nom: "هَذِهِ / تِلْكَ", fr: "Pas هَؤُلَاءِ" }
    ],
    examples: [
      "الْكُتُبُ جَدِيدَةٌ = Les livres sont nouveaux",
      "هَذِهِ الْكُتُبُ جَدِيدَةٌ",
      "تِلْكَ الْبُيُوتُ كَبِيرَةٌ"
    ]
  },

  /* ============================================
     GROUPE 9 — DÉMONSTRATIFS AVANCÉS (r42-r44)
     ============================================ */
  {
    id: "r42",
    num: 42,
    cat: "Les noms",
    title: "هَؤُلَاءِ / أُولَئِكَ — Démonstratifs pluriel",
    arabic: "هَؤُلَاءِ / أُولَئِكَ",
    explanation: "Pour le pluriel : هَؤُلَاءِ (proche) et أُولَئِكَ (lointain). Ils s'utilisent pour les êtres DOUÉS DE RAISON, masculins ou féminins.",
    items: [
      { cas: "هَؤُلَاءِ", sign: "Proche", nom: "هَؤُلَاءِ طُلَّابٌ", fr: "Ceux-ci (proche)" },
      { cas: "أُولَئِكَ", sign: "Lointain", nom: "أُولَئِكَ طُلَّابٌ", fr: "Ceux-là (loin)" },
      { cas: "Genre", sign: "Masc. ou fém.", nom: "هَؤُلَاءِ رِجَالٌ / هَؤُلَاءِ نِسَاءٌ", fr: "Les deux genres" }
    ],
    examples: [
      "هَؤُلَاءِ طُلَّابٌ = Ceux-ci sont des étudiants",
      "أُولَئِكَ رِجَالٌ = Ceux-là sont des hommes",
      "هَؤُلَاءِ إِخْوَتِي وَأُولَئِكَ أَصْدِقَائِي"
    ]
  },
  {
    id: "r43",
    num: 43,
    cat: "Les noms",
    title: "هَذِهِ / تِلْكَ pour جَمْع غَيْر عَاقِل",
    arabic: "هَذِهِ / تِلْكَ لِلْجَمْع غَيْر الْعَاقِل",
    explanation: "Pour le pluriel des êtres NON doués de raison, on utilise هَذِهِ (proche) ou تِلْكَ (lointain), PAS هَؤُلَاءِ / أُولَئِكَ.",
    items: [
      { cas: "هَذِهِ", sign: "Proche", nom: "هَذِهِ كُتُبٌ", fr: "Ceci (pluriel non-doué)" },
      { cas: "تِلْكَ", sign: "Lointain", nom: "تِلْكَ بُيُوتٌ", fr: "Cela (pluriel non-doué)" },
      { cas: "Règle", sign: "Féminin", nom: "Pronom هِيَ", fr: "Les pronoms aussi au féminin" }
    ],
    examples: [
      "هَذِهِ كُتُبٌ جَدِيدَةٌ = Ce sont de nouveaux livres",
      "تِلْكَ بُيُوتٌ كَبِيرَةٌ = Ce sont de grandes maisons",
      "هَذِهِ الْأَيَّامُ جَمِيلَةٌ"
    ]
  },
  {
    id: "r44",
    num: 44,
    cat: "Les noms",
    title: "ذَاكَ — Variante de ذَلِكَ",
    arabic: "ذَاكَ",
    explanation: "ذَاكَ est une VARIANTE de ذَلِكَ. C'est un démonstratif pour le singulier masculin lointain. Comme les autres démonstratifs, il est invariable (مَبْنِي).",
    items: [
      { cas: "Signification", sign: "Cela", nom: "ذَاكَ زَيْدٌ", fr: "Cela est Zayd" },
      { cas: "Équivalent", sign: "ذَلِكَ", nom: "Même sens", fr: "Variantes" },
      { cas: "Emploi", sign: "Sing. + masc. + loin", nom: "ذَاكَ كُرْسِيُّهُ", fr: "Cela est sa chaise" }
    ],
    examples: [
      "ذَاكَ زَيْدٌ = Cela est Zayd",
      "ذَاكَ كُرْسِيُّهُ",
      "هَذَا مَكْتَبُ الْمُدَرِّسِ وَذَاكَ كُرْسِيُّهُ"
    ]
  },

  /* ============================================
     GROUPE 10 — LES NOMBRES (r45-r48)
     ============================================ */
  {
    id: "r45",
    num: 45,
    cat: "Les nombres",
    title: "الأعداد من 1 إلى 10 — Les nombres",
    arabic: "الْأَعْدَاد مِنْ ١ إِلَى ١٠",
    explanation: "Les nombres de 1 à 10 ont une forme masculine et une forme féminine. Entre le nombre et le nom dénombré, il y a 3 règles principales.",
    items: [
      { cas: "1-2", sign: "Accord", nom: "وَاحِدٌ / وَاحِدَةٌ / إِثْنَانِ / إِثْنَتَانِ", fr: "Accordent avec le nom" },
      { cas: "3-10", sign: "Contradiction", nom: "ثَلَاثَةٌ / ثَلَاثٌ", fr: "Genre opposé au nom" },
      { cas: "Annexion", sign: "Règle", nom: "الْمَعْدُود مُضَاف إِلَيْهِ", fr: "Le dénombré est annexé" },
      { cas: "Pluriel", sign: "Règle", nom: "الْمَعْدُود جَمْع", fr: "Le dénombré est pluriel" }
    ],
    examples: [
      "لِي ثَلَاثَةُ كُتُبٍ = J'ai trois livres",
      "فِي الْفَصْلِ عَشَرَةُ طُلَّابٍ = Dans la classe, dix étudiants",
      "خَمْسُ طَالِبَاتٍ = Cinq étudiantes"
    ]
  },
  {
    id: "r46",
    num: 46,
    cat: "Les nombres",
    title: "العدد المضاف — Le nombre annexant",
    arabic: "الْعَدَد الْمُضَاف",
    explanation: "Quand le nombre est annexant (مُضَاف), il prend un ي et perd sa كسرة. Cette transformation concerne principalement les nombres féminins.",
    items: [
      { cas: "ثَمَانِيَة", sign: "→ Annexé", nom: "ثَمَانِي", fr: "Huit (annexé)" },
      { cas: "عَشَرَة", sign: "→ Annexé", nom: "عَشْر", fr: "Dix (annexé)" },
      { cas: "سِتَّة", sign: "→ Annexé", nom: "سِتّ", fr: "Six (annexé)" }
    ],
    examples: [
      "ثَمَانِي طَالِبَاتٍ = Huit étudiantes",
      "عَشْرُ حَافِلَاتٍ = Dix bus",
      "سِتُّ طَالِبَاتٍ = Six étudiantes"
    ]
  },
  {
    id: "r47",
    num: 47,
    cat: "Les nombres",
    title: "قبل / بعد — Avant / Après",
    arabic: "قَبْلَ / بَعْدَ",
    explanation: "قَبْلَ (avant) et بَعْدَ (après) sont des adverbes (ظُرُوف). Ils sont généralement مَنْصُوب et annexés à un autre nom (مُضَاف).",
    items: [
      { cas: "قَبْلَ", sign: "Avant", nom: "الدَّرْسُ قَبْلَ الصَّلَاةِ", fr: "Avant la prière" },
      { cas: "بَعْدَ", sign: "Après", nom: "الرَّاحَةُ بَعْدَ الْعِشَاءِ", fr: "Après la prière du soir" },
      { cas: "Règle", sign: "Annexion", nom: "مُضَاف دَائِمًا", fr: "Toujours annexés" }
    ],
    examples: [
      "الدَّرْسُ قَبْلَ الصَّلَاةِ = La leçon est avant la prière",
      "الرَّاحَةُ بَعْدَ الْعِشَاءِ = Le repos est après la prière du soir",
      "الِاخْتِبَارُ بَعْدَ أُسْبُوعٍ = L'examen est après une semaine"
    ]
  },
  {
    id: "r48",
    num: 48,
    cat: "Les nombres",
    title: "الممنوع من الصرف : أَفْعَل",
    arabic: "الْمَمْنُوع مِنَ الصَّرْف : أَفْعَل",
    explanation: "Les noms de forme أَفْعَل sont interdits de tanwin (ممنوع من الصرف). Cela inclut les couleurs, certains noms propres et certains adjectifs.",
    items: [
      { cas: "Couleurs", sign: "أَفْعَل", nom: "أَحْمَر، أَبْيَض، أَخْضَر، أَزْرَق، أَسْوَد، أَصْفَر", fr: "6 couleurs principales" },
      { cas: "Noms propres", sign: "أَفْعَل", nom: "أَحْمَد، أَمْجَد", fr: "Sans tanwin" },
      { cas: "Adjectifs", sign: "أَفْعَل", nom: "أَكْبَر، أَجْمَل", fr: "Sans tanwin" }
    ],
    examples: [
      "عِنْدِي قَلَمٌ أَحْمَرُ = J'ai un stylo rouge",
      "هَذَا قَلَمٌ أَزْرَقُ = Ceci est un stylo bleu",
      "أَحْمَدُ طَالِبٌ مُجْتَهِدٌ"
    ]
  },

  /* ============================================
     GROUPE 11 — DIVERS / EXPRESSIONS (r49)
     ============================================ */
  {
    id: "r49",
    num: 49,
    cat: "Les phrases",
    title: "الأساليب المفيدة — Expressions utiles",
    arabic: "أَسَالِيب مُفِيدَة",
    explanation: "Recueil d'expressions courantes : salutations, formules de politesse, expressions du quotidien.",
    items: [
      { cas: "Salutation", sign: "Bonjour", nom: "السَّلَامُ عَلَيْكُمْ", fr: "Que la paix soit sur vous" },
      { cas: "Question", sign: "Comment", nom: "كَيْفَ حَالُكَ ؟", fr: "Comment vas-tu ?" },
      { cas: "Réponse", sign: "Bien", nom: "أَنَا بِخَيْرٍ، الْحَمْدُ لِلَّهِ", fr: "Je vais bien, louange à Allah" },
      { cas: "Remerciement", sign: "Merci", nom: "شُكْرًا جَزِيلًا", fr: "Merci beaucoup" },
      { cas: "Politesse", sign: "S'il te plaît", nom: "مِنْ فَضْلِكَ", fr: "S'il te plaît" }
    ],
    examples: [
      "السَّلَامُ عَلَيْكُمْ يَا زَيْدُ",
      "كَيْفَ حَالُكَ الْيَوْمَ ؟",
      "أَنَا بِخَيْرٍ، الْحَمْدُ لِلَّهِ"
    ]
  }
];

/* ============================================================
   INTERFACE
   ============================================================ */
var GrammaireScreen = {

  home: function(){
    var h = '<button class="back" onclick="App.home()">← Accueil</button>' +
      '<h2>📝 Grammaire arabe</h2>' +
      '<p class="muted" style="margin-bottom:14px">49 règles essentielles du Tome 1</p>';

    var lastCat = '';
    for (var i = 0; i < RULES.length; i++){
      var r = RULES[i];
      if (r.cat !== lastCat){
        h += '<div style="margin:16px 0 8px;font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px">' + r.cat + '</div>';
        lastCat = r.cat;
      }
      h += '<button class="lesson-item" onclick="GrammaireScreen.rule(' + i + ')">' +
        '<div class="num">' + r.num + '</div>' +
        '<div><div class="title">' + r.title + '</div>' +
        '<div class="desc">' + r.arabic + '</div></div>' +
      '</button>';
    }

    h += '<div class="card" style="margin-top:20px;font-size:12px;color:var(--muted);text-align:center">' +
      'Source : Cours d\'arabe en vidéo + Tomes de Médine</div>';

    document.getElementById('app').innerHTML = h;
  },

  rule: function(i){
    var r = RULES[i];
    if (!r) return;

    var h = '<button class="back" onclick="GrammaireScreen.home()">← Grammaire</button>' +
      '<h2>' + r.title + '</h2>' +
      '<div class="card" style="text-align:center">' +
        '<div class="ar" style="font-size:36px;color:var(--primary)">' + r.arabic + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<p style="font-size:14px;line-height:1.7">' + r.explanation + '</p>' +
      '</div>';

    if (r.items && r.items.length){
      h += '<div class="card"><h3>Détails</h3>';
      for (var j = 0; j < r.items.length; j++){
        var it = r.items[j];
        h += '<div style="padding:12px 0;border-bottom:1px solid #eee">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
            '<strong style="color:var(--primary)">' + it.cas + '</strong>' +
            (it.sign ? '<span style="font-size:12px;color:var(--muted)">' + it.sign + '</span>' : '') +
          '</div>' +
          '<div class="ar" style="font-size:22px;margin-top:6px;color:var(--primary)">' + it.nom + '</div>' +
          '<div style="font-size:12px;color:var(--muted);margin-top:2px">' + it.fr + '</div>' +
        '</div>';
      }
      h += '</div>';
    }

    h += '<div class="card"><h3>Exemples</h3>';
    for (var k = 0; k < r.examples.length; k++){
      h += '<div style="padding:12px 0;border-bottom:1px solid #eee;cursor:pointer" ' +
        'onclick="speak(\'' + esc(r.examples[k]) + '\')">' +
        '<div class="ar" style="font-size:18px;color:var(--primary)">' + r.examples[k] + '</div>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:4px">🔊 Toucher pour écouter</div>' +
      '</div>';
    }
    h += '</div>';

    document.getElementById('app').innerHTML = h;
  }
};

/* ---------- EXPOSITION GLOBALE ---------- */
window.GrammaireScreen = GrammaireScreen;

})();