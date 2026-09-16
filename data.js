/* =====================================================
   ARABIYYA — Données (alphabet, vocab, grammaire, dialogues, leçons)
   Version 2.0 — 155 mots · 28 lettres · 6 règles · 10 dialogues · 8 leçons · 6 badges
   ===================================================== */

/* ---------- 28 LETTRES ARABES ---------- */
var ALPHABET = [
  {ar:"ا",name:"Alif",tr:"a",iso:"ا",ini:"ا",med:"ـا",fin:"ـا"},
  {ar:"ب",name:"Ba",tr:"b",iso:"ب",ini:"بـ",med:"ـبـ",fin:"ـب"},
  {ar:"ت",name:"Ta",tr:"t",iso:"ت",ini:"تـ",med:"ـتـ",fin:"ـت"},
  {ar:"ث",name:"Tha",tr:"th",iso:"ث",ini:"ثـ",med:"ـثـ",fin:"ـث"},
  {ar:"ج",name:"Jim",tr:"j",iso:"ج",ini:"جـ",med:"ـجـ",fin:"ـج"},
  {ar:"ح",name:"Ha",tr:"ḥ",iso:"ح",ini:"حـ",med:"ـحـ",fin:"ـح"},
  {ar:"خ",name:"Kha",tr:"kh",iso:"خ",ini:"خـ",med:"ـخـ",fin:"ـخ"},
  {ar:"د",name:"Dal",tr:"d",iso:"د",ini:"د",med:"ـد",fin:"ـد"},
  {ar:"ذ",name:"Dhal",tr:"dh",iso:"ذ",ini:"ذ",med:"ـذ",fin:"ـذ"},
  {ar:"ر",name:"Ra",tr:"r",iso:"ر",ini:"ر",med:"ـر",fin:"ـر"},
  {ar:"ز",name:"Zay",tr:"z",iso:"ز",ini:"ز",med:"ـز",fin:"ـز"},
  {ar:"س",name:"Sin",tr:"s",iso:"س",ini:"سـ",med:"ـسـ",fin:"ـس"},
  {ar:"ش",name:"Shin",tr:"sh",iso:"ش",ini:"شـ",med:"ـشـ",fin:"ـش"},
  {ar:"ص",name:"Sad",tr:"ṣ",iso:"ص",ini:"صـ",med:"ـصـ",fin:"ـص"},
  {ar:"ض",name:"Dad",tr:"ḍ",iso:"ض",ini:"ضـ",med:"ـضـ",fin:"ـض"},
  {ar:"ط",name:"Ta",tr:"ṭ",iso:"ط",ini:"طـ",med:"ـطـ",fin:"ـط"},
  {ar:"ظ",name:"Dha",tr:"ẓ",iso:"ظ",ini:"ظـ",med:"ـظـ",fin:"ـظ"},
  {ar:"ع",name:"Ayn",tr:"ʿ",iso:"ع",ini:"عـ",med:"ـعـ",fin:"ـع"},
  {ar:"غ",name:"Ghayn",tr:"gh",iso:"غ",ini:"غـ",med:"ـغـ",fin:"ـغ"},
  {ar:"ف",name:"Fa",tr:"f",iso:"ف",ini:"فـ",med:"ـفـ",fin:"ـف"},
  {ar:"ق",name:"Qaf",tr:"q",iso:"ق",ini:"قـ",med:"ـقـ",fin:"ـق"},
  {ar:"ك",name:"Kaf",tr:"k",iso:"ك",ini:"كـ",med:"ـكـ",fin:"ـك"},
  {ar:"ل",name:"Lam",tr:"l",iso:"ل",ini:"لـ",med:"ـلـ",fin:"ـل"},
  {ar:"م",name:"Mim",tr:"m",iso:"م",ini:"مـ",med:"ـمـ",fin:"ـم"},
  {ar:"ن",name:"Nun",tr:"n",iso:"ن",ini:"نـ",med:"ـنـ",fin:"ـن"},
  {ar:"ه",name:"Ha",tr:"h",iso:"ه",ini:"هـ",med:"ـهـ",fin:"ـه"},
  {ar:"و",name:"Waw",tr:"w",iso:"و",ini:"و",med:"ـو",fin:"ـو"},
  {ar:"ي",name:"Ya",tr:"y",iso:"ي",ini:"يـ",med:"ـيـ",fin:"ـي"}
];

/* ---------- VOCABULAIRE (155 mots classés par niveau CECRL) ---------- */
var VOCAB = [
  /* ===== A1 — Salutations (8) ===== */
  {id:"a1_1",ar:"مَرْحَبًا",fr:"Bonjour",tr:"marhaban",t:"Salutations",lv:"A1"},
  {id:"a1_2",ar:"شُكْرًا",fr:"Merci",tr:"shukran",t:"Salutations",lv:"A1"},
  {id:"a1_3",ar:"نَعَمْ",fr:"Oui",tr:"naʿam",t:"Salutations",lv:"A1"},
  {id:"a1_4",ar:"لَا",fr:"Non",tr:"lā",t:"Salutations",lv:"A1"},
  {id:"a1_5",ar:"صَبَاحُ الخَيْر",fr:"Bonjour (matin)",tr:"ṣabāḥu l-khayr",t:"Salutations",lv:"A1"},
  {id:"a1_6",ar:"مَسَاءُ الخَيْر",fr:"Bonsoir",tr:"masāʾu l-khayr",t:"Salutations",lv:"A1"},
  {id:"a1_7",ar:"مَعَ السَّلَامَة",fr:"Au revoir",tr:"maʿa s-salāma",t:"Salutations",lv:"A1"},
  {id:"a1_8",ar:"أَهْلًا وَسَهْلًا",fr:"Bienvenue",tr:"ahlan wa sahlan",t:"Salutations",lv:"A1"},

  /* ===== A1 — Nombres (5) ===== */
  {id:"a1_9",ar:"وَاحِد",fr:"Un (1)",tr:"wāḥid",t:"Nombres",lv:"A1"},
  {id:"a1_10",ar:"اِثْنَان",fr:"Deux (2)",tr:"ithnān",t:"Nombres",lv:"A1"},
  {id:"a1_11",ar:"ثَلَاثَة",fr:"Trois (3)",tr:"thalātha",t:"Nombres",lv:"A1"},
  {id:"a1_12",ar:"أَرْبَعَة",fr:"Quatre (4)",tr:"arbaʿa",t:"Nombres",lv:"A1"},
  {id:"a1_13",ar:"خَمْسَة",fr:"Cinq (5)",tr:"khamsa",t:"Nombres",lv:"A1"},

  /* ===== A1 — Famille (6) ===== */
  {id:"a1_14",ar:"أَب",fr:"Père",tr:"ab",t:"Famille",lv:"A1"},
  {id:"a1_15",ar:"أُمّ",fr:"Mère",tr:"umm",t:"Famille",lv:"A1"},
  {id:"a1_16",ar:"اِبْن",fr:"Fils",tr:"ibn",t:"Famille",lv:"A1"},
  {id:"a1_17",ar:"بِنْت",fr:"Fille",tr:"bint",t:"Famille",lv:"A1"},
  {id:"a1_18",ar:"أَخ",fr:"Frère",tr:"akh",t:"Famille",lv:"A1"},
  {id:"a1_19",ar:"أُخْت",fr:"Sœur",tr:"ukht",t:"Famille",lv:"A1"},

  /* ===== A1 — Nourriture (5) ===== */
  {id:"a1_20",ar:"مَاء",fr:"Eau",tr:"māʾ",t:"Nourriture",lv:"A1"},
  {id:"a1_21",ar:"خُبْز",fr:"Pain",tr:"khubz",t:"Nourriture",lv:"A1"},
  {id:"a1_22",ar:"حَلِيب",fr:"Lait",tr:"ḥalīb",t:"Nourriture",lv:"A1"},
  {id:"a1_23",ar:"شَاي",fr:"Thé",tr:"shāy",t:"Nourriture",lv:"A1"},
  {id:"a1_24",ar:"قَهْوَة",fr:"Café",tr:"qahwa",t:"Nourriture",lv:"A1"},

  /* ===== A1 — Couleurs (6) ===== */
  {id:"a1_25",ar:"أَحْمَر",fr:"Rouge",tr:"aḥmar",t:"Couleurs",lv:"A1"},
  {id:"a1_26",ar:"أَزْرَق",fr:"Bleu",tr:"azraq",t:"Couleurs",lv:"A1"},
  {id:"a1_27",ar:"أَخْضَر",fr:"Vert",tr:"akhḍar",t:"Couleurs",lv:"A1"},
  {id:"a1_28",ar:"أَصْفَر",fr:"Jaune",tr:"aṣfar",t:"Couleurs",lv:"A1"},
  {id:"a1_29",ar:"أَسْوَد",fr:"Noir",tr:"aswad",t:"Couleurs",lv:"A1"},
  {id:"a1_30",ar:"أَبْيَض",fr:"Blanc",tr:"abyaḍ",t:"Couleurs",lv:"A1"},

  /* ===== A1 — Objets (5) ===== */
  {id:"a1_31",ar:"كِتَاب",fr:"Livre",tr:"kitāb",t:"Objets",lv:"A1"},
  {id:"a1_32",ar:"قَلَم",fr:"Stylo",tr:"qalam",t:"Objets",lv:"A1"},
  {id:"a1_33",ar:"بَاب",fr:"Porte",tr:"bāb",t:"Objets",lv:"A1"},
  {id:"a1_34",ar:"بَيْت",fr:"Maison",tr:"bayt",t:"Objets",lv:"A1"},
  {id:"a1_35",ar:"نَافِذَة",fr:"Fenêtre",tr:"nāfidha",t:"Objets",lv:"A1"},

  /* ===== A1 — Verbes (5) ===== */
  {id:"a1_36",ar:"يَأْكُل",fr:"Manger",tr:"yaʾkul",t:"Verbes",lv:"A1"},
  {id:"a1_37",ar:"يَشْرَب",fr:"Boire",tr:"yashrab",t:"Verbes",lv:"A1"},
  {id:"a1_38",ar:"يَذْهَب",fr:"Aller",tr:"yadhhab",t:"Verbes",lv:"A1"},
  {id:"a1_39",ar:"يَكْتُب",fr:"Écrire",tr:"yaktub",t:"Verbes",lv:"A1"},
  {id:"a1_40",ar:"يَقْرَأ",fr:"Lire",tr:"yaqraʾ",t:"Verbes",lv:"A1"},

  /* ===== A1 — Adjectifs (5) ===== */
  {id:"a1_41",ar:"كَبِير",fr:"Grand",tr:"kabīr",t:"Adjectifs",lv:"A1"},
  {id:"a1_42",ar:"صَغِير",fr:"Petit",tr:"ṣaghīr",t:"Adjectifs",lv:"A1"},
  {id:"a1_43",ar:"جَمِيل",fr:"Beau",tr:"jamīl",t:"Adjectifs",lv:"A1"},
  {id:"a1_44",ar:"جَدِيد",fr:"Nouveau",tr:"jadīd",t:"Adjectifs",lv:"A1"},
  {id:"a1_45",ar:"قَدِيم",fr:"Vieux",tr:"qadīm",t:"Adjectifs",lv:"A1"},

  /* ===== A2 — Salutations étendues (5) ===== */
  {id:"a2_1",ar:"السَّلَامُ عَلَيْكُمْ",fr:"Que la paix soit sur vous",tr:"as-salāmu ʿalaykum",t:"Salutations",lv:"A2"},
  {id:"a2_2",ar:"كَيْفَ حَالُكَ؟",fr:"Comment vas-tu ?",tr:"kayfa ḥāluka?",t:"Salutations",lv:"A2"},
  {id:"a2_3",ar:"بِخَيْر، شُكْرًا",fr:"Bien, merci",tr:"bikhayr, shukran",t:"Salutations",lv:"A2"},
  {id:"a2_4",ar:"عَفْوًا",fr:"De rien",tr:"ʿafwan",t:"Salutations",lv:"A2"},
  {id:"a2_5",ar:"إِلَى اللِّقَاء",fr:"À bientôt",tr:"ilā l-liqāʾ",t:"Salutations",lv:"A2"},

  /* ===== A2 — Nombres étendus (7) ===== */
  {id:"a2_6",ar:"سِتَّة",fr:"Six (6)",tr:"sitta",t:"Nombres",lv:"A2"},
  {id:"a2_7",ar:"سَبْعَة",fr:"Sept (7)",tr:"sabʿa",t:"Nombres",lv:"A2"},
  {id:"a2_8",ar:"ثَمَانِيَة",fr:"Huit (8)",tr:"thamāniya",t:"Nombres",lv:"A2"},
  {id:"a2_9",ar:"تِسْعَة",fr:"Neuf (9)",tr:"tisʿa",t:"Nombres",lv:"A2"},
  {id:"a2_10",ar:"عَشَرَة",fr:"Dix (10)",tr:"ʿashara",t:"Nombres",lv:"A2"},
  {id:"a2_11",ar:"عِشْرُون",fr:"Vingt (20)",tr:"ʿishrūn",t:"Nombres",lv:"A2"},
  {id:"a2_12",ar:"مِئَة",fr:"Cent (100)",tr:"miʾa",t:"Nombres",lv:"A2"},

  /* ===== A2 — Famille étendue (5) ===== */
  {id:"a2_13",ar:"جَدّ",fr:"Grand-père",tr:"jadd",t:"Famille",lv:"A2"},
  {id:"a2_14",ar:"جَدَّة",fr:"Grand-mère",tr:"jadda",t:"Famille",lv:"A2"},
  {id:"a2_15",ar:"زَوْج",fr:"Mari",tr:"zawj",t:"Famille",lv:"A2"},
  {id:"a2_16",ar:"زَوْجَة",fr:"Épouse",tr:"zawja",t:"Famille",lv:"A2"},
  {id:"a2_17",ar:"عَائِلَة",fr:"Famille",tr:"ʿāʾila",t:"Famille",lv:"A2"},

  /* ===== A2 — Nourriture étendue (8) ===== */
  {id:"a2_18",ar:"لَحْم",fr:"Viande",tr:"laḥm",t:"Nourriture",lv:"A2"},
  {id:"a2_19",ar:"دَجَاج",fr:"Poulet",tr:"dajāj",t:"Nourriture",lv:"A2"},
  {id:"a2_20",ar:"سَمَك",fr:"Poisson",tr:"samak",t:"Nourriture",lv:"A2"},
  {id:"a2_21",ar:"أَرُزّ",fr:"Riz",tr:"aruzz",t:"Nourriture",lv:"A2"},
  {id:"a2_22",ar:"فَاكِهَة",fr:"Fruit",tr:"fākiha",t:"Nourriture",lv:"A2"},
  {id:"a2_23",ar:"خُضَار",fr:"Légumes",tr:"khuḍār",t:"Nourriture",lv:"A2"},
  {id:"a2_24",ar:"سُكَّر",fr:"Sucre",tr:"sukkar",t:"Nourriture",lv:"A2"},
  {id:"a2_25",ar:"مِلْح",fr:"Sel",tr:"milḥ",t:"Nourriture",lv:"A2"},

  /* ===== A2 — Couleurs étendues (5) ===== */
  {id:"a2_26",ar:"بُرْتُقَالِيّ",fr:"Orange",tr:"burtuqālī",t:"Couleurs",lv:"A2"},
  {id:"a2_27",ar:"وَرْدِيّ",fr:"Rose",tr:"wardī",t:"Couleurs",lv:"A2"},
  {id:"a2_28",ar:"بُنِّيّ",fr:"Marron",tr:"bunnī",t:"Couleurs",lv:"A2"},
  {id:"a2_29",ar:"بَنَفْسَجِيّ",fr:"Violet",tr:"banafsajī",t:"Couleurs",lv:"A2"},
  {id:"a2_30",ar:"رَمَادِيّ",fr:"Gris",tr:"ramādī",t:"Couleurs",lv:"A2"},

  /* ===== A2 — Objets étendus (8) ===== */
  {id:"a2_31",ar:"كُرْسِيّ",fr:"Chaise",tr:"kursī",t:"Objets",lv:"A2"},
  {id:"a2_32",ar:"طَاوِلَة",fr:"Table",tr:"ṭāwila",t:"Objets",lv:"A2"},
  {id:"a2_33",ar:"سَيَّارَة",fr:"Voiture",tr:"sayyāra",t:"Objets",lv:"A2"},
  {id:"a2_34",ar:"هَاتِف",fr:"Téléphone",tr:"hātif",t:"Objets",lv:"A2"},
  {id:"a2_35",ar:"مِفْتَاح",fr:"Clé",tr:"miftāḥ",t:"Objets",lv:"A2"},
  {id:"a2_36",ar:"سَاعَة",fr:"Montre / Heure",tr:"sāʿa",t:"Objets",lv:"A2"},
  {id:"a2_37",ar:"مِصْبَاح",fr:"Lampe",tr:"miṣbāḥ",t:"Objets",lv:"A2"},
  {id:"a2_38",ar:"مِرْآة",fr:"Miroir",tr:"mirʾā",t:"Objets",lv:"A2"},

  /* ===== A2 — Verbes étendus (10) ===== */
  {id:"a2_39",ar:"يَتَكَلَّم",fr:"Parler",tr:"yatakallam",t:"Verbes",lv:"A2"},
  {id:"a2_40",ar:"يَسْمَع",fr:"Entendre",tr:"yasmaʿ",t:"Verbes",lv:"A2"},
  {id:"a2_41",ar:"يَرَى",fr:"Voir",tr:"yarā",t:"Verbes",lv:"A2"},
  {id:"a2_42",ar:"يَعْرِف",fr:"Savoir",tr:"yaʿrif",t:"Verbes",lv:"A2"},
  {id:"a2_43",ar:"يَفْهَم",fr:"Comprendre",tr:"yafham",t:"Verbes",lv:"A2"},
  {id:"a2_44",ar:"يُحِبّ",fr:"Aimer",tr:"yuḥibb",t:"Verbes",lv:"A2"},
  {id:"a2_45",ar:"يُرِيد",fr:"Vouloir",tr:"yurīd",t:"Verbes",lv:"A2"},
  {id:"a2_46",ar:"يَسْتَطِيع",fr:"Pouvoir",tr:"yastaṭīʿ",t:"Verbes",lv:"A2"},
  {id:"a2_47",ar:"يَعْمَل",fr:"Travailler",tr:"yaʿmal",t:"Verbes",lv:"A2"},
  {id:"a2_48",ar:"يَدْرُس",fr:"Étudier",tr:"yadrus",t:"Verbes",lv:"A2"},

  /* ===== A2 — Adjectifs étendus (10) ===== */
  {id:"a2_49",ar:"سَهْل",fr:"Facile",tr:"sahl",t:"Adjectifs",lv:"A2"},
  {id:"a2_50",ar:"صَعْب",fr:"Difficile",tr:"ṣaʿb",t:"Adjectifs",lv:"A2"},
  {id:"a2_51",ar:"سَعِيد",fr:"Heureux",tr:"saʿīd",t:"Adjectifs",lv:"A2"},
  {id:"a2_52",ar:"حَزِين",fr:"Triste",tr:"ḥazīn",t:"Adjectifs",lv:"A2"},
  {id:"a2_53",ar:"سَرِيع",fr:"Rapide",tr:"sarīʿ",t:"Adjectifs",lv:"A2"},
  {id:"a2_54",ar:"بَطِيء",fr:"Lent",tr:"baṭīʾ",t:"Adjectifs",lv:"A2"},
  {id:"a2_55",ar:"طَوِيل",fr:"Long / Grand",tr:"ṭawīl",t:"Adjectifs",lv:"A2"},
  {id:"a2_56",ar:"قَصِير",fr:"Court / Petit",tr:"qaṣīr",t:"Adjectifs",lv:"A2"},
  {id:"a2_57",ar:"قَوِيّ",fr:"Fort",tr:"qawī",t:"Adjectifs",lv:"A2"},
  {id:"a2_58",ar:"ضَعِيف",fr:"Faible",tr:"ḍaʿīf",t:"Adjectifs",lv:"A2"},

  /* ===== B1 — Lieux (15) ===== */
  {id:"b1_1",ar:"مُسْتَشْفَى",fr:"Hôpital",tr:"mustashfā",t:"Lieux",lv:"B1"},
  {id:"b1_2",ar:"مَدْرَسَة",fr:"École",tr:"madrasa",t:"Lieux",lv:"B1"},
  {id:"b1_3",ar:"جَامِعَة",fr:"Université",tr:"jāmiʿa",t:"Lieux",lv:"B1"},
  {id:"b1_4",ar:"مَطَار",fr:"Aéroport",tr:"maṭār",t:"Lieux",lv:"B1"},
  {id:"b1_5",ar:"مَحَطَّة",fr:"Gare / Station",tr:"maḥaṭṭa",t:"Lieux",lv:"B1"},
  {id:"b1_6",ar:"مَكْتَبَة",fr:"Bibliothèque",tr:"maktaba",t:"Lieux",lv:"B1"},
  {id:"b1_7",ar:"سُوق",fr:"Marché",tr:"sūq",t:"Lieux",lv:"B1"},
  {id:"b1_8",ar:"مَسْجِد",fr:"Mosquée",tr:"masjid",t:"Lieux",lv:"B1"},
  {id:"b1_9",ar:"شَقَّة",fr:"Appartement",tr:"shaqqa",t:"Lieux",lv:"B1"},
  {id:"b1_10",ar:"شَارِع",fr:"Rue",tr:"shāriʿ",t:"Lieux",lv:"B1"},
  {id:"b1_11",ar:"مَطْعَم",fr:"Restaurant",tr:"maṭʿam",t:"Lieux",lv:"B1"},
  {id:"b1_12",ar:"فُنْدُق",fr:"Hôtel",tr:"funduq",t:"Lieux",lv:"B1"},
  {id:"b1_13",ar:"حَدِيقَة",fr:"Jardin",tr:"ḥadīqa",t:"Lieux",lv:"B1"},
  {id:"b1_14",ar:"مَزْرَعَة",fr:"Ferme",tr:"mazraʿa",t:"Lieux",lv:"B1"},
  {id:"b1_15",ar:"مَكْتَب",fr:"Bureau",tr:"maktab",t:"Lieux",lv:"B1"},

  /* ===== B1 — Professions (10) ===== */
  {id:"b1_16",ar:"مُعَلِّم",fr:"Professeur (H)",tr:"muʿallim",t:"Professions",lv:"B1"},
  {id:"b1_17",ar:"مُعَلِّمَة",fr:"Professeure (F)",tr:"muʿallima",t:"Professions",lv:"B1"},
  {id:"b1_18",ar:"طَبِيب",fr:"Médecin",tr:"ṭabīb",t:"Professions",lv:"B1"},
  {id:"b1_19",ar:"مُهَنْدِس",fr:"Ingénieur",tr:"muhandis",t:"Professions",lv:"B1"},
  {id:"b1_20",ar:"مُدِير",fr:"Directeur",tr:"mudīr",t:"Professions",lv:"B1"},
  {id:"b1_21",ar:"طَالِب",fr:"Étudiant",tr:"ṭālib",t:"Professions",lv:"B1"},
  {id:"b1_22",ar:"تِلْمِيذ",fr:"Élève",tr:"tilmīdh",t:"Professions",lv:"B1"},
  {id:"b1_23",ar:"تَاجِر",fr:"Commerçant",tr:"tājir",t:"Professions",lv:"B1"},
  {id:"b1_24",ar:"مُوَظَّف",fr:"Employé",tr:"muwaẓẓaf",t:"Professions",lv:"B1"},
  {id:"b1_25",ar:"فَلَّاح",fr:"Agriculteur",tr:"fallāḥ",t:"Professions",lv:"B1"},

  /* ===== B1 — Temps (12) ===== */
  {id:"b1_26",ar:"يَوْم",fr:"Jour",tr:"yawm",t:"Temps",lv:"B1"},
  {id:"b1_27",ar:"لَيْل",fr:"Nuit",tr:"layl",t:"Temps",lv:"B1"},
  {id:"b1_28",ar:"صَبَاح",fr:"Matin",tr:"ṣabāḥ",t:"Temps",lv:"B1"},
  {id:"b1_29",ar:"مَسَاء",fr:"Soir",tr:"masāʾ",t:"Temps",lv:"B1"},
  {id:"b1_30",ar:"أُسْبُوع",fr:"Semaine",tr:"usbūʿ",t:"Temps",lv:"B1"},
  {id:"b1_31",ar:"شَهْر",fr:"Mois",tr:"shahr",t:"Temps",lv:"B1"},
  {id:"b1_32",ar:"سَنَة",fr:"Année",tr:"sana",t:"Temps",lv:"B1"},
  {id:"b1_33",ar:"سَاعَة",fr:"Heure",tr:"sāʿa",t:"Temps",lv:"B1"},
  {id:"b1_34",ar:"دَقِيقَة",fr:"Minute",tr:"daqīqa",t:"Temps",lv:"B1"},
  {id:"b1_35",ar:"اليَوْم",fr:"Aujourd'hui",tr:"al-yawm",t:"Temps",lv:"B1"},
  {id:"b1_36",ar:"أَمْس",fr:"Hier",tr:"ams",t:"Temps",lv:"B1"},
  {id:"b1_37",ar:"غَدًا",fr:"Demain",tr:"ghadan",t:"Temps",lv:"B1"},

  /* ===== B1 — Questions (10) ===== */
  {id:"b1_38",ar:"مَا اسْمُكَ؟",fr:"Comment t'appelles-tu ?",tr:"mā ismuka?",t:"Questions",lv:"B1"},
  {id:"b1_39",ar:"مِنْ أَيْنَ أَنْتَ؟",fr:"D'où viens-tu ?",tr:"min ayna anta?",t:"Questions",lv:"B1"},
  {id:"b1_40",ar:"كَمْ عُمْرُكَ؟",fr:"Quel âge as-tu ?",tr:"kam ʿumruka?",t:"Questions",lv:"B1"},
  {id:"b1_41",ar:"أَيْنَ تَسْكُن؟",fr:"Où habites-tu ?",tr:"ayna taskun?",t:"Questions",lv:"B1"},
  {id:"b1_42",ar:"مَاذَا تَعْمَل؟",fr:"Que fais-tu ?",tr:"mādhā taʿmal?",t:"Questions",lv:"B1"},
  {id:"b1_43",ar:"مَتَى؟",fr:"Quand ?",tr:"matā?",t:"Questions",lv:"B1"},
  {id:"b1_44",ar:"كَيْفَ؟",fr:"Comment ?",tr:"kayfa?",t:"Questions",lv:"B1"},
  {id:"b1_45",ar:"لِمَاذَا؟",fr:"Pourquoi ?",tr:"limādhā?",t:"Questions",lv:"B1"},
  {id:"b1_46",ar:"كَمْ؟",fr:"Combien ?",tr:"kam?",t:"Questions",lv:"B1"},
  {id:"b1_47",ar:"مَنْ؟",fr:"Qui ?",tr:"man?",t:"Questions",lv:"B1"},

  /* ===== B1 — Phrases utiles (5) ===== */
  {id:"b1_48",ar:"أُحِبُّ القِرَاءَة",fr:"J'aime lire",tr:"uḥibbu l-qirāʾa",t:"Phrases",lv:"B1"},
  {id:"b1_49",ar:"أَتَعَلَّمُ العَرَبِيَّة",fr:"J'apprends l'arabe",tr:"ataʿallamu l-ʿarabiyya",t:"Phrases",lv:"B1"},
  {id:"b1_50",ar:"أَسْكُنُ فِي مَدِينَة",fr:"J'habite en ville",tr:"askunu fī madīna",t:"Phrases",lv:"B1"},
  {id:"b1_51",ar:"هَذَا صَدِيقِي",fr:"Voici mon ami",tr:"hādhā ṣadīqī",t:"Phrases",lv:"B1"},
  {id:"b1_52",ar:"أُرِيدُ أَنْ أَتَعَلَّم",fr:"Je veux apprendre",tr:"urīdu an ataʿallam",t:"Phrases",lv:"B1"}
];

/* ---------- GRAMMAIRE (6 règles) ---------- */
var GRAMMAR = [
  {id:"g1",title:"Les articles définis",ar:"ال",desc:"L'arabe utilise « ال » (al-) devant le nom pour dire « le/la/les ». Exemple : كِتَاب (livre) devient الكِتَاب (le livre).",ex:"كِتَاب → الكِتَاب",exFr:"un livre → le livre"},
  {id:"g2",title:"Genre : masculin / féminin",ar:"ة",desc:"La plupart des noms féminins se terminent par « ة » (ta marbouta). Exemple : مُعَلِّم (professeur H) devient مُعَلِّمَة (professeure F).",ex:"مُعَلِّم → مُعَلِّمَة",exFr:"professeur (H) → professeure (F)"},
  {id:"g3",title:"Les pronoms personnels",ar:"أَنَا أَنْتَ",desc:"Singulier : أَنَا (je), أَنْتَ (tu H), أَنْتِ (tu F), هُوَ (il), هِيَ (elle). Pluriel : نَحْنُ (nous), أَنْتُمْ (vous), هُمْ (ils).",ex:"أَنَا طَالِب",exFr:"Je suis étudiant"},
  {id:"g4",title:"La phrase nominale",ar:"الْجُمْلَة الاِسْمِيَّة",desc:"En arabe, il n'y a pas de verbe « être » au présent. On dit simplement : Sujet + Attribut. Exemple : البَيْتُ كَبِيرٌ = « la maison grande » = la maison est grande.",ex:"البَيْتُ كَبِير",exFr:"La maison est grande"},
  {id:"g5",title:"L'accord de l'adjectif",ar:"الصِّفَة",desc:"L'adjectif s'accorde en genre et en nombre avec le nom. Exemple : وَلَد كَبِير (garçon grand), بِنْت كَبِيرَة (fille grande).",ex:"وَلَد كَبِير / بِنْت كَبِيرَة",exFr:"grand garçon / grande fille"},
  {id:"g6",title:"Le pluriel régulier",ar:"جمع",desc:"Le pluriel masculin sain ajoute « ونَ » (nominatif) ou « ينَ » (accusatif). Exemple : مُعَلِّم devient مُعَلِّمُونَ (les professeurs).",ex:"مُعَلِّم → مُعَلِّمُونَ",exFr:"professeur → professeurs"}
];

/* ---------- DIALOGUES (10 scènes) ---------- */
var DIALOGUES = [
  {id:"d1",title:"Se présenter",level:"A1",lines:[
    {sp:"A",ar:"مَرْحَبًا! مَا اسْمُكَ؟",fr:"Bonjour ! Comment t'appelles-tu ?"},
    {sp:"B",ar:"اِسْمِي أَحْمَد. وَأَنْتَ؟",fr:"Je m'appelle Ahmed. Et toi ?"},
    {sp:"A",ar:"اِسْمِي سَارَة. تَشَرَّفْتُ بِمَعْرِفَتِكَ.",fr:"Je m'appelle Sarah. Enchantée."}
  ]},
  {id:"d2",title:"À la boulangerie",level:"A1",lines:[
    {sp:"A",ar:"السَّلَامُ عَلَيْكُمْ، أُرِيدُ خُبْزًا مِنْ فَضْلِكَ.",fr:"Bonjour, je voudrais du pain s'il vous plaît."},
    {sp:"B",ar:"وَعَلَيْكُمُ السَّلَام. كَمْ رَغِيفًا؟",fr:"Bonjour. Combien de pains ?"},
    {sp:"A",ar:"رَغِيفَان، شُكْرًا.",fr:"Deux pains, merci."},
    {sp:"B",ar:"تَفَضَّل. هَذَا خَمْسَة دَرَاهِم.",fr:"Voilà. Ça fait cinq dirhams."}
  ]},
  {id:"d3",title:"Au restaurant",level:"A2",lines:[
    {sp:"A",ar:"مَا هُوَ طَبَقُ اليَوْم؟",fr:"Quel est le plat du jour ?"},
    {sp:"B",ar:"اليَوْم عِنْدَنَا دَجَاج مَشْوِي وَأَرُزّ.",fr:"Aujourd'hui, nous avons du poulet grillé et du riz."},
    {sp:"A",ar:"سَآخُذ دَجَاج مَشْوِي، مِنْ فَضْلِكَ.",fr:"Je vais prendre le poulet grillé, s'il vous plaît."},
    {sp:"B",ar:"مَشْرُوب؟",fr:"Une boisson ?"},
    {sp:"A",ar:"مَاء، شُكْرًا.",fr:"De l'eau, merci."}
  ]},
  {id:"d4",title:"Demander son chemin",level:"A2",lines:[
    {sp:"A",ar:"لَو سَمَحْت، أَيْنَ المَحَطَّة؟",fr:"Excusez-moi, où est la gare ?"},
    {sp:"B",ar:"اِمْشِ مُسْتَقِيمًا ثُمَّ اِنْعَطِفْ يَمِينًا.",fr:"Allez tout droit puis tournez à droite."},
    {sp:"A",ar:"هَل هِيَ بَعِيدَة؟",fr:"Est-ce loin ?"},
    {sp:"B",ar:"لَا، خَمْس دَقَائِق سَيْرًا.",fr:"Non, cinq minutes à pied."}
  ]},
  {id:"d5",title:"À l'hôtel",level:"A2",lines:[
    {sp:"A",ar:"عِنْدِي حَجْز بِاسْمِ مُحَمَّد.",fr:"J'ai une réservation au nom de Mohamed."},
    {sp:"B",ar:"لَحْظَة مِنْ فَضْلِك... نَعَمْ، غُرْفَة رَقْم ٣٠٥.",fr:"Un instant s'il vous plaît... oui, chambre 305."},
    {sp:"A",ar:"هَل الغُرْفَة بِإِطْلَالَة؟",fr:"La chambre a-t-elle une vue ?"},
    {sp:"B",ar:"نَعَمْ، بِإِطْلَالَة عَلَى البَحْر.",fr:"Oui, avec vue sur la mer."}
  ]},
  {id:"d6",title:"Faire les courses",level:"A2",lines:[
    {sp:"A",ar:"كَمْ سِعْر هَذَا القَمِيص؟",fr:"Combien coûte cette chemise ?"},
    {sp:"B",ar:"مِئَة دِرْهَم.",fr:"Cent dirhams."},
    {sp:"A",ar:"هَذَا غَالِي جِدًّا! هَل يُمْكِن تَخْفِيض؟",fr:"C'est trop cher ! Peut-on baisser le prix ?"},
    {sp:"B",ar:"آخِر سِعْر ثَمَانُون دِرْهَم.",fr:"Dernier prix, quatre-vingts dirhams."}
  ]},
  {id:"d7",title:"Au téléphone",level:"A2",lines:[
    {sp:"A",ar:"أَلُو، مَرْحَبًا، مَنْ مَعِي؟",fr:"Allô, bonjour, qui est à l'appareil ?"},
    {sp:"B",ar:"مَرْحَبًا، أَنَا خَالِد. هَل أَحْمَد مَوْجُود؟",fr:"Bonjour, c'est Khalid. Ahmed est-il là ?"},
    {sp:"A",ar:"لَا، هُوَ خَارِج حَالِيًّا.",fr:"Non, il est sorti pour le moment."},
    {sp:"B",ar:"حُسْنًا، سَأَتَّصِل بَعْد قَلِيل.",fr:"Très bien, je rappellerai plus tard."}
  ]},
  {id:"d8",title:"Chez le médecin",level:"B1",lines:[
    {sp:"A",ar:"مَا بِكَ؟ كَيْفَ تَشْعُر؟",fr:"Qu'avez-vous ? Comment vous sentez-vous ?"},
    {sp:"B",ar:"أَشْعُر بِصُدَاع شَدِيد وَحُمَّى.",fr:"J'ai un fort mal de tête et de la fièvre."},
    {sp:"A",ar:"مُنْذُ مَتَى؟",fr:"Depuis quand ?"},
    {sp:"B",ar:"مُنْذُ يَوْمَيْن.",fr:"Depuis deux jours."},
    {sp:"A",ar:"سَأُعْطِيك دَوَاء. خُذْهُ ثَلَاثَ مَرَّات يَوْمِيًّا.",fr:"Je vais vous donner un médicament. Prenez-le trois fois par jour."}
  ]},
  {id:"d9",title:"Parler de sa journée",level:"B1",lines:[
    {sp:"A",ar:"كَيْفَ كَانَ يَوْمُك؟",fr:"Comment s'est passée ta journée ?"},
    {sp:"B",ar:"كَانَ مُمْتَعًا! ذَهَبْتُ إِلَى المَكْتَبَة.",fr:"C'était sympa ! Je suis allé à la bibliothèque."},
    {sp:"A",ar:"مَاذَا قَرَأْت؟",fr:"Qu'as-tu lu ?"},
    {sp:"B",ar:"قَرَأْتُ كِتَابًا عَن التَّارِيخ العَرَبِي.",fr:"J'ai lu un livre sur l'histoire arabe."}
  ]},
  {id:"d10",title:"Projets futurs",level:"B1",lines:[
    {sp:"A",ar:"مَاذَا سَتَفْعَل غَدًا؟",fr:"Que feras-tu demain ?"},
    {sp:"B",ar:"سَأَذْهَب إِلَى العَمَل صَبَاحًا.",fr:"J'irai au travail le matin."},
    {sp:"A",ar:"وَبَعْدَ الظُّهْر؟",fr:"Et l'après-midi ?"},
    {sp:"B",ar:"سَأَدْرُسُ العَرَبِيَّة مَعَ صَدِيقِي.",fr:"J'étudierai l'arabe avec mon ami."}
  ]}
];

/* ---------- LEÇONS (8 leçons progressives) ---------- */
var LESSONS = [
  {id:"l1",num:1,title:"Premiers pas",desc:"Saluer et se présenter",words:["a1_1","a1_2","a1_3","a1_4","a1_5","a1_6","a1_7","a1_8"]},
  {id:"l2",num:2,title:"Les nombres 1-5",desc:"Compter en arabe",words:["a1_9","a1_10","a1_11","a1_12","a1_13"]},
  {id:"l3",num:3,title:"La famille",desc:"Parler de ses proches",words:["a1_14","a1_15","a1_16","a1_17","a1_18","a1_19"]},
  {id:"l4",num:4,title:"Manger et boire",desc:"Au restaurant et à la maison",words:["a1_20","a1_21","a1_22","a1_23","a1_24"]},
  {id:"l5",num:5,title:"Les couleurs",desc:"Décrire le monde",words:["a1_25","a1_26","a1_27","a1_28","a1_29","a1_30"]},
  {id:"l6",num:6,title:"Objets du quotidien",desc:"Nommer ce qui nous entoure",words:["a1_31","a1_32","a1_33","a1_34","a1_35"]},
  {id:"l7",num:7,title:"Verbes essentiels",desc:"Parler de ses actions",words:["a1_36","a1_37","a1_38","a1_39","a1_40"]},
  {id:"l8",num:8,title:"Poser des questions",desc:"Communiquer avec autrui",words:["b1_38","b1_39","b1_40","b1_41","b1_42","b1_43","b1_44","b1_45","b1_46","b1_47"]}
];

/* ---------- BADGES (6 badges) ---------- */
var BADGES = [
  {id:"b1",name:"🌱 Premier pas",desc:"Terminer la 1ère session",req:function(s){return s.totalReviews>=1}},
  {id:"b2",name:"🔥 3 jours",desc:"3 jours de suite",req:function(s){return s.streak>=3}},
  {id:"b3",name:"⭐ 7 jours",desc:"Une semaine d'affilée",req:function(s){return s.streak>=7}},
  {id:"b4",name:"📚 50 révisions",desc:"50 cartes révisées",req:function(s){return s.totalReviews>=50}},
  {id:"b5",name:"💯 100 révisions",desc:"100 cartes révisées",req:function(s){return s.totalReviews>=100}},
  {id:"b6",name:"🎯 Sans faute",desc:"90% de bonnes réponses",req:function(s){return s.totalReviews>0 && s.correctReviews/s.totalReviews>=0.9}}
];