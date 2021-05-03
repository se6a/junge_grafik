/*
  STRUKTUR
    Formular              module.exports = [
    |   Gruppe 1            [
    |   |   Input A           {
    |   |   |                   ...
    |   |   -                 },
    |   |   Input B           {
    |   |   |                   ...
    |   |   -                 }
    |   -                   ],
    |   Input Gruppe 1      [
    |   |                     ...
    |   -                   ]
    -                     ]

  INPUTS DEFINIEREN (* = muss definiert sein)
    name *          Interner Wert des Input-Feldes. Muss einzigartig sein.
    label *         Angezeigter Wert. Enthält ein Objekt:
                    label: {de: "", fr: "", it: ""}

    type *          text          längerer text (beschreibung etc.)
                    text-short    kurzer text (titel etc.)
                    file          wähle File(s)
                    select-1      wähle eine option aus dropdown menu

    options         Nur für type "select-1". Enthält eine Liste der Auswählbaren Optionen:
                    options: [
                      {id: "", de: ""},
                      {id: "", de: ""},
                      ...
                    ]

    required        Bei Pflichtfeldern hinzufügen:
                    required: true
                    Ansonsten weglassen oder:
                    required: false

    tooltip         Kann jedem Inputfeld hinzugefügt werden, um Informationen
                    für den Benutzer anzeigen zu lassen. Enthält ein Objekt:
                    tooltip: {de: "", fr: "", it: ""}

    maxlength       Für Text-Inputs, maximale Zeichen.
    maxfiles        Für File-Inputs, maximum der auswählbaren Files.
    minfiles        Für File-Inputs, minimum der auswählbaren Files.
*/

module.exports = [

/*  Allgemeines
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    // Projekttitel
    {
      name: "projekttitel",
      label: {
        de: "Projekttitel",
        fr: "Titre du projet",
        it: "Titolo del progetto"
      },
      type: "text-short",
      required: true,
      tooltip: {
        de: `
          <ul>
            <li class="dash">Gib deinem Projekt einen Titel. Falls deine Arbeit ausgezeichnet wird, so wird der Projekttitel auf der Website als auch in der Publikation erscheinen.</li>
          </ul>
        `,
        fr: `
          <ul>
            <li class="dash">Donnez un titre à ton projet. Si ton travail est récompensé, le titre du projet apparaîtra sur notre site web ainsi que dans la publication.</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">Dai un titolo al tuo progetto. Se il tuo lavoro viene premiato, il titolo del progetto apparirà sul sito web e nella pubblicazione.</li>
          </ul>
        `
      }
    },
    // Enstehungsjahr
    {
      name: "entstehungsjahr",
      label: {
        de: "Entstehungsjahr des Projekts",
        fr: "Année de réalisation du projet",
        it: "Anno del progetto"
      },
      type: "select-1",
      options: [
        { id: "2021", all: "2021" },
        { id: "2020", all: "2020" },
        { id: "2019", all: "2019" }
      ],
      required: true
    }
  ],

/*  Tags
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    // Tag #1
    {
      name: "tag-1",
      label: { all: "Tag #1" },
      type: "select-1",
      options: [
        { id: "Animation design", all: "Animation design" },
        { id: "Corporate design", all: "Corporate design" },
        { id: "Editorial design", all: "Editorial design" },
        { id: "Environmental design", all: "Environmental design" },
        { id: "Exhibition design", all: "Exhibition design" },
        { id: "Photography", all: "Photography" },
        { id: "Illustration", all: "Illustration" },
        { id: "Interaction design", all: "Interaction design" },
        { id: "Infographic design", all: "Infographic design" },
        { id: "Packaging design", all: "Packaging design" },
        { id: "Poster design", all: "Poster design" },
        { id: "Signage design", all: "Signage design" },
        { id: "Typeface design", all: "Typeface design" },
        { id: "Typography", all: "Typography" },
        { id: "Web design", all: "Web design" }
      ],
      required: true,
      tooltip: {
        de: `
          <ul>
            <li class="dash">Wähle 1 bis 3 Tags, die zu deinem Projekt passen.</li>
          </ul>
        `,
        fr: `
          <ul>
            <li class="dash">Choisis 1 à 3 tags (mots-clés) qui correspondent à ton projet</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">Scegli da 1 a 3 tag che si adattano al tuo progetto.</li>
          </ul>
        `
      }
    },
    // Tag #2
    {
      name: "tag-2",
      label: { all: "Tag #2" },
      type: "select-1",
      options: [
        { id: "Animation design", all: "Animation design" },
        { id: "Corporate design", all: "Corporate design" },
        { id: "Editorial design", all: "Editorial design" },
        { id: "Environmental design", all: "Environmental design" },
        { id: "Exhibition design", all: "Exhibition design" },
        { id: "Photography", all: "Photography" },
        { id: "Illustration", all: "Illustration" },
        { id: "Interaction design", all: "Interaction design" },
        { id: "Infographic design", all: "Infographic design" },
        { id: "Packaging design", all: "Packaging design" },
        { id: "Poster design", all: "Poster design" },
        { id: "Signage design", all: "Signage design" },
        { id: "Typeface design", all: "Typeface design" },
        { id: "Typography", all: "Typography" },
        { id: "Web design", all: "Web design" }
      ]
    },
    // Tag #3
    {
      name: "tag-3",
      label: { all: "Tag #3" },
      type: "select-1",
      options: [
        { id: "Animation design", all: "Animation design" },
        { id: "Corporate design", all: "Corporate design" },
        { id: "Editorial design", all: "Editorial design" },
        { id: "Environmental design", all: "Environmental design" },
        { id: "Exhibition design", all: "Exhibition design" },
        { id: "Photography", all: "Photography" },
        { id: "Illustration", all: "Illustration" },
        { id: "Interaction design", all: "Interaction design" },
        { id: "Infographic design", all: "Infographic design" },
        { id: "Packaging design", all: "Packaging design" },
        { id: "Poster design", all: "Poster design" },
        { id: "Signage design", all: "Signage design" },
        { id: "Typeface design", all: "Typeface design" },
        { id: "Typography", all: "Typography" },
        { id: "Web design", all: "Web design" }
      ]
    }
  ],

/*  Projektbeschreibung
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      id: "ProjectDescription",
      name: "projektbeschrieb",
      label: {
        de: "Projektbeschrieb",
        fr: "Description du projet",
        it: "Descrizione del progetto"
      },
      type: "text",
      maxlength: "800",
      required: true,
      tooltip: {
        de: `
          <ul>
            <li class="dash">Nutze den Projektbeschrieb, um uns interessante Aspekte über die Aufgabenstellung, den Prozess und die Idee zu erzählen.</li>
          </ul>
        `,
        fr: `
          <ul>
            <li class="dash">Utilise cette description pour nous faire part d’aspects intéressants dans la donnée de base, le processus et l'idée de ton projet.</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">Descrivi il progetto per raccontarci aspetti interessanti sul compito, il processo e l'idea.</li>
          </ul>
        `
      }
    }
  ],

/*  Ausbildung
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "ausbildungsniveau",
      label: {
        de: "Ausbildungsniveau",
        fr: "Niveau de formation",
        it: "Livello della formazione"
      },
      type: "select-1",
      options: [
        { id: "683", de: "EFZ", fr: "CFC", it: "AFC" },
        { id: "684", de: "FH", fr: "Bachelor Hes-So", it: "SUP" },
        { id: "685", de: "HF", fr: "ES", it: "SSS" }
      ],
      required: true
    },
    {
      name: "ausbildungsjahr",
      label: {
        de: "Ausbildungsjahr (zum Zeitpunkt des Projektes)", fr: "Année de formation (au moment du projet)", it: "Anno di formazione (al momento del progetto)"
      },
      type: "select-1",
      options: [
        { id: "1", de: "1. Ausbildungsjahr", fr: "1ère année de formation", it: "1. Anno di formazione" },
        { id: "2", de: "2. Ausbildungsjahr", fr: "2ème année de formation", it: "2. Anno di formazione" },
        { id: "3", de: "3. Ausbildungsjahr", fr: "3ème année de formation", it: "3. Anno di formazione" },
        { id: "4", de: "4. Ausbildungsjahr", fr: "4ème année de formation", it: "4. Anno di formazione" }
      ],
      required: true
    },
    {
      name: "name-ausbildungsinstitution-lehrbetrieb",
      type: "text-short",
      label: {
        de: "Name Ausbildungsinstitution / Lehrbetrieb",
        fr: "Nom de l'établissement de formation / de l'entreprise de formation",
        it: "Nome dell’istituto di formazione / Azienda formatrice"
      },
      tooltip: {
        de: `
          <ul>
            <li class="dash">In welcher Ausbildungsinstitution oder in welchem Lehrbetrieb ist dein Projekt entstanden?</li>
          </ul>
        `,
        fr: `
          <ul>
            <li class="dash">Dans quel établissement d'enseignement ou entreprise d’apprentissage ton projet a-t-il vu le jour ?</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">In quale scuola o azienda formatrice è stato realizzato il tuo progetto?</li>
          </ul>
        `
      },
      required: true
    },
    {
      name: "kanton-des-ausbildungsortes",
      label: {
        de: "Kanton des Ausbildungsorts",
        fr: "Canton du lieu de formation",
        it: "Cantone del luogo di formazione"
      },
      type: "select-1",
      options: [
        { id: "414", de: "Aargau", fr: "Argovie", it: "Argovia" },
        { id: "415", de: "Appenzell Ausserrhoden", fr: "Appenzell Rhodes-Extérieures", it: "Appenzello esterno" },
        { id: "416", de: "Appenzell Innerrhoden", fr: "Appenzell Rhodes-Intérieures", it: "Appenzello interno" },
        { id: "417", de: "Basel-Landschaft", fr: "Bâle-Campagne", it: "Basilea campagna" },
        { id: "418", de: "Basel-Stadt", fr: "Bâle-Ville", it: "Basilea città" },
        { id: "419", de: "Bern", fr: "Berne", it: "Barna" },
        { id: "420", de: "Freiburg", fr: "Fribourg", it: "Friburgo" },
        { id: "421", de: "Genf", fr: "Genève", it: "Ginevra" },
        { id: "422", de: "Glarus", fr: "Glarus", it: "Glarona" },
        { id: "423", de: "Graubünden", fr: "Grisons", it: "Grigioni" },
        { id: "424", de: "Jura", fr: "Jura", it: "Giura" },
        { id: "425", de: "Luzern", fr: "Lucerne", it: "Lucerna" },
        { id: "426", de: "Neuenburg", fr: "Neuchâtel", it: "Neuchatel" },
        { id: "427", de: "Nidwalden", fr: "Nidwald", it: "Nidvaldo" },
        { id: "428", de: "Obwalden", fr: "Obwald", it: "Obvaldo" },
        { id: "429", de: "Schaffhausen", fr: "Schaffhouse", it: "Sciaffusa" },
        { id: "430", de: "Schwyz", fr: "Schwyz", it: "Svitto" },
        { id: "431", de: "Solothurn", fr: "Soleure", it: "Soletta" },
        { id: "432", de: "St. Gallen", fr: "Saint-Gall", it: "San Gallo" },
        { id: "433", de: "Tessin", fr: "Tessin", it: "Ticino" },
        { id: "434", de: "Thurgau", fr: "Thurgovie", it: "Turgovia" },
        { id: "435", de: "Uri", fr: "Uri", it: "Uri" },
        { id: "436", de: "Waadt", fr: "Vaud", it: "Vaud" },
        { id: "437", de: "Wallis", fr: "Valais", it: "Vallese" },
        { id: "439", de: "Zürich", fr: "Zurich", it: "Zurigo" },
        { id: "438", de: "Zug", fr: "Zug", it: "Zugo" }
      ],
      required: true
     }
  ],

/*  Dozenten
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "dozenten",
      type: "text-short",
      label: {
        de: "Dozenten*innen / Ausbildner*innen",
        fr: "Enseignant·e·s, formateurs/formatrices",
        it: "Docenti / Formatori"
      },
      required: true,
      tooltip: {
        de: `
          <ul>
            <li class="dash">Wer hat dich bei deinem Projekt begleitet? Es sind mehrere Nennungen möglich.</li>          
            <li class="dash">Gib die Namen wie folgt an: Vorname Familienname, ...</li>
          </ul>
        `,
        fr: `
          <ul>
            <li class="dash">Qui t'a suivi pendant ton projet ? Plusieurs noms sont possibles.</li>          
            <li class="dash">Indique les noms comme suit : Prénom Nom, ...</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">Chi ti ha accompagnato durante il progetto? Possono essere indicate più persone.</li>          
            <li class="dash">Indica i nomi come segue: Nome Cognome, ...</li>
          </ul>
        `
      }
    }
  ],

/*  Weitere Gestalter
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "weitere-gestalter",
      type: "text-short",
      maxlength: "450",
      label: {
        de: "Weitere Gestalter*innen (bei Gruppenarbeiten)",
        fr: "Autres graphistes dans le cadre d’un travail de groupe",
        it: "Altri membri del gruppo in caso di progetto realizzato da un gruppo"
      },
      tooltip: {
        de: `
          <ul>
            <li class="dash">Reichst du eine Gruppenarbeit ein? Nenne hier alle Namen deines Teams.</li>
            <li class="dash">Gib die Namen wie folgt an: Vorname Familienname, Vorname Familienname</li>
          </ul>
            `,
        fr: `
          <ul>
            <li class="dash">Vous soumettez un travail de groupe ? Listez ici tous les noms de votre équipe.</li>
            <li class="dash">Donnez les noms comme suit : Prénom Nom, ...</li>
          </ul>
            `,
        it: `
          <ul>
            <li class="dash">Stai inoltrando un lavoro di gruppo? Elenca qui tutti i nomi dei membri del tuo gruppo.</li>
            <li class="dash">Indica i nomi come segue: Nome Cognome, ...</li>
          </ul>
        `
      }
    }
  ],

/*  File Upload
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      id: "ProjectFileUpload",
      name: "reprografien",
      type: "file",
      label: {
        de: "Upload Reprografien / Mockups (3–6)",
        fr: "Téléchargement de reproductions / mock-ups (3–6)",
        it: "Upload Riproduzione / Mockup (3–6)"
      },
      minfiles: 3,
      maxfiles: 6,
      maxuploadsize: 30,
      accept: "image/jpeg",
      tooltip: {
        fr: `
          <ul>
            <li class="dash">3 à 6 photos ou mock-ups</li>
            <li class="dash">Format JPG</li>
            <li class="dash">Profil couleur RGB</li>
            <li class="dash">résolution d’au minimum 3800 Pixel sur le côté long.</li>
            <li class="dash">Ces fichiers seront utilisés pour la publication. Veuillez donc nous envoyer des JPG aussi peu comprimés que possible.</li>
            <li class="dash">Puis-je utiliser un fond coloré ? Oui !</li>
            <li class="dash">Puis-je mettre en scène mon projet ? Oui !</li>
            <li class="dash">Puis-je envoyer des mock-ups au lieu des reproductions classiques ? Oui !</li>
          </ul>
        `,
        de: `
          <ul>
            <li class="dash">3 bis 6 Reprografien oder Mockups</li>
            <li class="dash">JPG Format</li>
            <li class="dash">RGB Farbraum</li>
            <li class="dash">Lange Seite: 3800px</li>
            <li class="dash">Diese Bilddateien werden für die Publikation verwendet. Übermittle uns das JPG darum möglichst unkomprimiert.</li>
            <li class="dash">Darf ich einen farbigen Hintergrund verwenden? Ja.</li>
            <li class="dash">Darf ich mein Projekt inszenieren? Ja.</li>
            <li class="dash">Darf ich anstelle von klassischen Reprografien auch digitale Mockups einsenden? Ja.</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">da 3 a 6 immagni o Mockup</li>
            <li class="dash">Formato JPG</li>
            <li class="dash">Spazio colore RGB</li>
            <li class="dash">Il lato lungo deve essere di almeno 3800 Pixel</li>
            <li class="dash">Questi file di immagine saranno utilizzati per la pubblicazione. Pertanto, vi preghiamo di inviarci il JPG non compressi.</li>
            <li class="dash">Posso usare uno sfondo colorato? Sì!</li>
            <li class="dash">Posso mettere in scena (contestualizzare) il mio progetto? Sì!</li>
            <li class="dash">Posso inviare mockup digitali invece di riproduzioni? Sì!</li>
          </ul>
        `
      },
      required: true
    }
  ],

  /*  Projektwebseite
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "link-videomaterial",
      type: "url",
      label: {
        de: "Youtube- oder Vimeolink zu einem Video- oder Animationsprojekt",
        fr: "Lien Youtube ou Vimeo vers un projet de vidéo ou d’animation",
        it: "Link di un tuo video o animazione a Youtube o Vimeo"
      },
      tooltip: {
        de: `
          <p>– Video- und Animations-Projekte müssen einen Video-Link einreichen. Gib uns hier die URL an.</p>
          <ul>
            <li class="dash">Beispiel Youtube: https://www.youtube.com/watch?v=a3RGv-w99Cg</li>
            <li class="dash">Beispiel Vimeo: https://vimeo.com/183907133</li>
          </ul>
        `,
        fr: `
          <ul>
            <li class="dash">Exemple Youtube : https://www.youtube.com/watch?v=a3RGv-w99Cg</li>
            <li class="dash">Exemple Vimeo : https://vimeo.com/183907133</li>
          </ul>
        `,
        it: `
          <ul>
            <li class="dash">Esempio Youtube: https://www.youtube.com/watch?v=a3RGv-w99Cg</li>
            <li class="dash">Esempio Vimeo: https://vimeo.com/183907133</li>
          </ul>
        `
      }
    },

  /*  Projektwebseite
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    {
      name: "link-projektwebsite-prototyp",
      type: "url",
      label: {
        de: "Link Prototyp oder Projekt-Website",
        fr: "Lien vers le site du projet ou prototype.",
        it: "Link al prototipo o sito web del progetto"
      },
      tooltip: {
        de:`      
            <ul>
                <li class="dash">Gibt es einen Link zu einer Projekt-Website oder zu einem Prototypen deines Projekts? Dann gib uns hier die URL an (optional).</li>
                <li class="dash">Beispiel: https://jungegrafik.ch/</li>
            </ul>
           `,
        fr:`      
            <ul>
                <li class="dash">Existe-t-il un lien vers un site web ou vers un prototype de ton projet ? Donne-nous ici l'URL (facultatif).</li>
                <li class="dash">Exemple : https://jungegrafik.ch/</li>
            </ul>
           `,

        it:`      
            <ul>
                <li class="dash">C'è un link a un sito web del progetto o a un prototipo del tuo progetto? Poi indicaci l’URL qui (opzionale).</li>
                <li class="dash">Esempio: https://jungegrafik.ch/</li>
            </ul>
           `
      }
    }
  ]
];
