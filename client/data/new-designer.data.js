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
/*  Gruppe XY
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  [
    // Input
    {
      name: "vorname",
      label: { de: "Vorname" },
      type: "text-short"
    },
    {
      name: "nachname",
      label: { de: "Nachname" },
      type: "text-short"
    }
  ],
  [
    {
      name: "geschlecht",
      label: { de: "Geschlecht" },
      type: "select-1",
      options: [
        { id:"w", de: "weiblich" },
        { id:"m", de: "männlich" }
      ],
      required: true
    },
    {
      name: "geburtsjahr",
      label: { de: "Geburtsjahr" },
      type: "text-short"
    }
  ]

];
