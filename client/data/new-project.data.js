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

    maxChars        Für Text-Inputs, maximale Zeichen.
    maxFiles        Für File-Inputs, maximum der auswählbaren Files.
    minFiles        Für File-Inputs, minimum der auswählbaren Files.
*/

module.exports = [

/*  Allgemeines
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    // Projekttitel
    {
      name: "projekttitel",
      label: {
        de: "Projekttitel"
      },
      type: "text-short",
      required: true
    },
    // Enstehungsjahr
    {
      name: "entstehungsjahr",
      label: {
        de: "Entstehungsjahr"
      },
      type: "select-1",
      options: [
        { id: "1", de: "2021" },
        { id: "2", de: "2020" },
        { id: "2", de: "2019" }
      ],
      required: true,
      tooltip: {
        de: "some help here"
      }
    }
  ],

/*  Tags
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    // Tag #1
    {
      name: "tag-1",
      label: {
        de: "Tag #1"
      },
      type: "select-1",
      options: [
        { id: "1", de: "Buch" },
        { id: "2", de: "Plakat" }
      ],
      required: true,
      tooltip: {
        de: "Wähle eines aus."
      }
    },
    // Tag #2
    {
      name: "tag-2",
      label: {
        de: "Tag #2"
      },
      type:   "select-1",
      options: [
        { id: "1", de: "Buch", fr: "livre" },
        { id: "2", de: "Plakat" }
      ]
    },
    // Tag #3
    {
      name: "tag-3",
      label: {
        de: "Tag #3"
      },
      type: "select-1",
      options: [
        { id: "1", de: "Buch" },
        { id: "2", de: "Plakat" }
      ]
    }
  ],

/*  Projektbeschreibung
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "projektbeschreibung",
      label: {
        de: "Projektbeschreibung"
      },
      type: "text",
      maxChars: "1000",
      required: true,
      tooltip: {
        de: "beschreibe dein text mit maximal 1000 Zeichen."
      }
    }
  ],

/*  Ausbildung
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "ausbildungsniveau",
      type: "text-short",
      label: {
        de: "Ausbildungsniveau"
      },
      required: true
    },
    {
      name: "ausbildungsjahr",
      type: "text-short",
      label: {
        de: "Ausbildungsjahr"
      },
      required: true
    },
    {
      name: "ausbildungsinstitution-buero",
      type: "text-short",
      label: {
        de: "Name Ausbildungsinstitution/Büro"
      },
      required: true
    }
  ],

/*  Weitere Gestalter
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "weitere-gestalter",
      type: "text-short",
      label: {
        de: "Weitere Gestalter"
      }
    }
  ],

/*  Dozenten
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "dozenten",
      type: "text-short",
      label: {
        de: "Dozenten"
      }
    }
  ],

/*  Projektwebseite
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "link-projektwebsite",
      type: "text-short",
      label: {
        de: "Link Projektwebseite"
      }
    }
  ],

/*  Reprografien
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "reprografien",
      type: "file",
      label: {
        de: "Upload Reprografien"
      },
      minFiles: 3,
      maxFiles: 6,
      required: true
    }
  ]
];
