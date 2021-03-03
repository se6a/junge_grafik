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
        fr: "X",
        it: "X"
      },
      type: "text-short",
      required: true,
      tooltip: {
          de: `– Gib deinem Projekt einen Titel. Falls deine Arbeit ausgezeichnet wird, so wird der Projekttitel auf der Website als auch in der Publikation erscheinen.`,
          fr: "X",
          it: "X"
        }
    },
    // Enstehungsjahr
    {
      name: "entstehungsjahr",
      label: {
        de: "Entstehungsjahr des Projekts",
        fr: "X",
        it: "X"
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
        { id: "1", all: "Animation design" },
        { id: "2", all: "Corporate design" },
        { id: "3", all: "Editorial design" },
        { id: "4", all: "Environmental design" },
        { id: "5", all: "Exhibition design" },
        { id: "6", all: "Photography" },
        { id: "7", all: "Illustration" },
        { id: "8", all: "Interaction design" },
        { id: "9", all: "Infographic design" },
        { id: "10", all: "Packaging design" },
        { id: "11", all: "Poster design" },
        { id: "12", all: "Signage design" },
        { id: "13", all: "Typeface design" },
        { id: "14", all: "Typography" },
        { id: "15", all: "Web design" }
      ],
      required: true,
      tooltip: {
        de: "– Wähle 1 bis 3 Tags, die zu deinem Projekt passen",
        fr: "X",
        it: "X"
      }
    },
    // Tag #2
    {
      name: "tag-2",
      label: { all: "Tag #2" },
      type: "select-1",
      options: [
        { id: "1", all: "Animation design" },
        { id: "2", all: "Corporate design" },
        { id: "3", all: "Editorial design" },
        { id: "4", all: "Environmtental design" },
        { id: "5", all: "Exhibition design" },
        { id: "6", all: "Photography" },
        { id: "7", all: "Illustration" },
        { id: "8", all: "Interaction design" },
        { id: "9", all: "Infographic design" },
        { id: "10", all: "Packaging design" },
        { id: "11", all: "Poster design" },
        { id: "12", all: "Signage design" },
        { id: "13", all: "Typeface design" },
        { id: "14", all: "Typography" },
        { id: "15", all: "Web design" }
      ]
    },
    // Tag #3
    {
      name: "tag-3",
      label: { all: "Tag #3" },
      type: "select-1",
      options: [
        { id: "1", all: "Animation design" },
        { id: "2", all: "Corporate design" },
        { id: "3", all: "Editorial design" },
        { id: "4", all: "Environmtental design" },
        { id: "5", all: "Exhibition design" },
        { id: "6", all: "Photography" },
        { id: "7", all: "Illustration" },
        { id: "8", all: "Interaction design" },
        { id: "9", all: "Infographic design" },
        { id: "10", all: "Packaging design" },
        { id: "11", all: "Poster design" },
        { id: "12", all: "Signage design" },
        { id: "13", all: "Typeface design" },
        { id: "14", all: "Typography" },
        { id: "15", all: "Web design" }
      ]
    }
  ],

/*  Projektbeschreibung
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "projektbeschrieb",
      label: {
        de: "Projektbeschrieb",
        fr: "X",
        it: "X"
      },
      type: "text",
      maxlength: "800",
      required: true,
      tooltip: {
        de: "Nutze den Projektbeschrieb, um uns interessante Aspekte über die Aufgabenstellung, den Prozess und die Idee zu erzählen.",
        fr: "X",
        it: "X"
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
        fr: "X",
        it: "X"
      },
      type: "select-1",
      options: [
        { id: "1", de: "EFZ", fr: "X", it: "X" },
        { id: "2", de: "HF", fr: "X", it: "X" },
        { id: "3", de: "FH", fr: "X", it: "X" }
      ],
      required: true
    },
    {
      name: "ausbildungsjahr",
      label: {
        de: "Ausbildungsjahr", fr: "X", it: "X"
      },
      type: "select-1",
      options: [
        { id: "1", de: "1. Ausbildungsjahr", fr: "X", it: "X" },
        { id: "2", de: "2. Ausbildungsjahr", fr: "X", it: "X" },
        { id: "3", de: "3. Ausbildungsjahr", fr: "X", it: "X" },
        { id: "4", de: "4. Ausbildungsjahr", fr: "X", it: "X" }
      ],
      required: true
    },
    {
      name: "name-ausbildungsinstitution-lehrbetrieb",
      type: "text-short",
      label: {
        de: "Name Ausbildungsinstitution / Lehrbetrieb",
        fr: "X",
        it: "X"
      },
      tooltip: {
        de: "– In welcher Ausbildungsinstitution oder in welchem Lehrbetrieb ist dein Projekt entstanden?",
        fr: "X",
        it: "X"
      },
      required: true
    },
    {
      name: "kanton-des-ausbildungsortes",
      label: {
        de: "Kanton des Ausbildungsorts",
        fr: "X",
        it: "X"
      },
      type: "select-1",
      options: [
        { id: "414", de: "Aargau", fr: "", it: "" },
        { id: "415", de: "Appenzell Ausserrhoden", fr: "", it: "" },
        { id: "416", de: "Appenzell Innerrhoden", fr: "", it: "" },
        { id: "417", de: "Basel-Landschaft", fr: "", it: "" },
        { id: "418", de: "Basel-Stadt", fr: "", it: "" },
        { id: "419", de: "Bern", fr: "", it: "" },
        { id: "420", de: "Freiburg", fr: "", it: "" },
        { id: "421", de: "Genf", fr: "", it: "" },
        { id: "422", de: "Glarus", fr: "", it: "" },
        { id: "423", de: "Graubünden", fr: "", it: "" },
        { id: "424", de: "Jura", fr: "", it: "" },
        { id: "425", de: "Luzern", fr: "", it: "" },
        { id: "426", de: "Neuenburg", fr: "", it: "" },
        { id: "427", de: "Nidwalden", fr: "", it: "" },
        { id: "428", de: "Obwalden", fr: "", it: "" },
        { id: "429", de: "Schaffhausen", fr: "", it: "" },
        { id: "430", de: "Schwyz", fr: "", it: "" },
        { id: "431", de: "Solothurn", fr: "", it: "" },
        { id: "432", de: "St. Gallen", fr: "", it: "" },
        { id: "433", de: "Tessin", fr: "", it: "" },
        { id: "434", de: "Thurgau", fr: "", it: "" },
        { id: "435", de: "Uri", fr: "", it: "" },
        { id: "436", de: "Waadt", fr: "", it: "" },
        { id: "437", de: "Wallis", fr: "", it: "" },
        { id: "439", de: "Zürich", fr: "", it: "" },
        { id: "438", de: "Zug", fr: "", it: "" }
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
        fr: "X",
        it: "X"
      },
      tooltip: {
        de: `
          Wer hat dich bei deinem Projekt begleitet? Es sind mehrere Nennungen möglich.
          <ul>
            <li>– Gib die Namen wie folgt an: Vorname Familienname, Vorname Familienname</li>
          </ul>
        `,
        fr: "X",
        it: "X"
      }
    }
  ],

/*  Weitere Gestalter
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "weitere-gestalter",
      type: "text-short",
      label: {
        de: "Weitere Gestalter*Innen bei Gruppenarbeiten",
        fr: "",
        it: ""
      },
      tooltip: {
        de: "Reichst du eine Gruppenarbeit ein? Nenne hier alle Namen deines Teams. Gib die Namen wie folgt an: Vorname Familienname, Vorname Familienname",
        fr: "X",
        it: "X"
      }
    }
  ],

/*  File Upload
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "reprografien",
      type: "file",
      label: {
        de: "Upload Reprografien / Mockups",
        fr: "",
        it: ""
      },
      minfiles: 3,
      maxfiles: 6,
      accept: "image/jpeg",
      tooltip: {
          de: `
            <ul>
              <li>– 3 bis 6 Reprografien oder Mockups</li>
              <li>– JPG Format</li>
              <li>– RGB Farbraum</li>
              <li>– Lange Seite: 3500px</li>
              <li>– Diese Bilddateien werden für die Publikation verwendet. Übermittle uns das JPG darum möglichst unkomprimiert.</li>
              <li>– Darf ich einen Farbigen Hintergrund verwenden? Ja.</li>
              <li>– Darf ich mein Projekt inszenieren? Ja.</li>
              <li>– Darf ich anstelle von klassischen Reprografien auch digitale Mockups einsenden? Ja.</li>
            </ul>
          `,
          fr: "X",
          it: "X"
      },
      required: true
    }
  ],

  /*  Projektwebseite
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "link-projektwebsite-prototyp",
      type: "url",
      label: {
        de: "Link Prototyp oder Projekt-Website",
        fr: "",
        it: ""
      },
      tooltip: {
        de: "Gibt es einen Link zu einer Projekt-Website oder zu einem Prototypen deines Projekts? Dann gib uns hier die URL an (optional).",
        fr: "X",
        it: "X"
      }
    }
  ]
];
