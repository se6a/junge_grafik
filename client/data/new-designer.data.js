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
  [
    {
      name: "geschlecht",
      label: { de: "Geschlecht", fr: "X", it: "X" },
      type: "select-1",
      options: [
        { id:"m", de: "Männlich" },
        { id:"w", de: "Weiblich" },
        { id:"x", de: "Keine Angabe" }
      ],
      required: true
    },
    {
      name: "geburtsjahr",
      label: { de: "Geburtsjahr", fr: "X", it: "X" },
      type: "number",
      min: 1000,
      max: 9999,
      required: true
    }
  ],

  [
    {
      name: "vorname",
      label: { de: "Vorname", fr: "X", it: "X" },
      type: "text-short",
      required: true
    },
    {
      name: "familienname",
      label: { de: "Familienname", fr: "X", it: "X" },
      type: "text-short",
      required: true
    }
  ],

/*  Adresse
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "strasse-nummer",
      label: { de: "Strasse / Nr.", fr: "X", it: "X" },
      type: "text-short",
      maxchar: 6,
      required: true
    },
    {
      name: "postleitzahl-ort",
      label: { de: "PLZ / Ort", fr: "X", it: "X" },
      type: "number",
      min: 1000,
      max: 9999,
      required: true
    }
  ],

/*  Kontakt
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "e-mail",
      label: { de: "E-Mail", fr: "X", it: "X" },
      type: "email",
      required: true
    },
    {
      name: "mobile",
      label: { de: "Mobile", fr: "X", it: "X" },
      type: "text-short",
      required: true
    }
  ],

/*  Online
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    {
      name: "link-portfolio",
      label: { de: "Link Portfolio", fr: "X", it: "X" },
      type: "url",
      tooltip: {
        de: `
          <ul>
            <li>– Der Link zu deinem Portfolio ist freiwillig</li>
            <li>– Das Portfolio beeinflusst nicht die Jurierung deines Projekts</li>
            <li>– Wenn du gewinnst, werden wir die URL in unserem Archiv verlinken</li>
          </ul>
        `,
        fr: "X",
        it: "X"
      }
    },
    {
      name: "link-instagram",
      label: { de: "Link Instagram-Profil", fr: "X", it: "X" },
      type: "url",
      tooltip: {
        de: `
          <ul>
            <li>– Der Link zu deinem Instagram-Profil ist freiwillig</li>
            <li>– Das Instagram-Profil beeinflusst nicht die Jurierung deines Projekts</li>
            <li>– Wenn du gewinnst, werden wir dein Instagram-Profil in unserem Archiv verlinken</li>
          </ul>
        `,
        fr: "X",
        it: "X"
      }
    }
  ]
];
