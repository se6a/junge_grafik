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
            label: { de: "Geschlecht", fr: "Genre", it: "Sesso" },
            type: "select-1",
            options: [
                { id: "441", de: "Weiblich", fr: "Femme", it: "Femminile" },
                { id: "440", de: "Männlich", fr: "Homme", it: "Maschile" },
                { id: "682", all: "Non-Binary" },
            ],
            required: true,
        },
        {
            name: "geburtsjahr",
            label: {
                de: "Geburtsjahr",
                fr: "Année de naissance",
                it: "Anno si nascita",
            },
            type: "number",
            min: 1983,
            max: 2013,
            step: 1,
            required: true,
        },
    ],

    [
        {
            name: "vorname",
            label: { de: "Vorname", fr: "Prénom", it: "Nome" },
            type: "text-short",
            required: true,
        },
        {
            name: "familienname",
            label: { de: "Familienname", fr: "Nom de famille", it: "Cognome" },
            type: "text-short",
            required: true,
        },
    ],

    /*  Adresse
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    [
        {
            name: "strasse-nummer",
            label: { de: "Strasse / Nr.", fr: "Rue / no.", it: "Via / No." },
            type: "text-short",
            maxchar: 6,
            required: true,
        },
        {
            name: "postleitzahl-ort",
            label: {
                de: "PLZ / Ort",
                fr: "Code postal / localité",
                it: "NPA / Luogo",
            },
            type: "text-short",
            required: true,
        },
    ],

    /*  Kontakt
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    [
        {
            name: "e-mail",
            label: { all: "E-Mail" },
            type: "email",
            required: true,
        },
        {
            name: "mobile",
            label: { de: "Mobile", fr: "Télephone", it: "Mobile" },
            type: "text-short",
            required: true,
        },
    ],

    /*  Online
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    [
        {
            name: "link-portfolio",
            label: {
                de: "Link Portfolio",
                fr: "Lien site portfolio",
                it: "Link a sito web del portfolio",
            },
            type: "url",
            tooltip: {
                de: `
          <ul>
            <li class="dash">Der Link zu deinem Portfolio ist freiwillig</li>
            <li class="dash">Das Portfolio beeinflusst nicht die Jurierung deines Projekts.</li>
            <li class="dash">Wenn du gewinnst, werden wir die URL in unserem Archiv verlinken.</li>
            <li class="dash">Beispiel Website Portfolio: jungegrafik.ch</li>
            <li class="dash">Beispiel Behance Portfolio: behance.net/jungegrafik</li>
            <li class="dash">Beispiel Instagram Portfolio: instagram.com/jungegrafik</li>
          </ul>
        `,
                fr: `
          <ul>
            <li class="dash">Le lien vers le site web de ton portfolio est facultatif.</li>
            <li class="dash">Le portfolio n'influence pas l'évaluation de ton projet.</li>
            <li class="dash">Si tu gagnes, nous ajouterons un lien vers l'URL dans nos archives.</li>
            <li class="dash">Exemple de site web portfolio: jungegrafik.ch</li>
            <li class="dash">Exemple de portfolio Behance : behance.net/jungegrafik</li>
            <li class="dash">Exemple de portfolio instagram : instagram.com/jungegrafik</li>
          </ul>
        `,
                it: `
          <ul>
            <li class="dash">Il link al tuo sito web del portfolio è opzionale.</li>
            <li class="dash">Il portfolio non influenza il giudizio del tuo progetto.</li>
            <li class="dash">Se vinci, inseriremo l'URL nel nostro archivio.</li>
            <li class="dash">Esempio di sito web: jungegrafik.ch</li>
            <li class="dash">Esempio Behance: behance.net/jungegrafik</li>
            <li class="dash">Esempio Instagram: instagram.com/jungegrafik</li>
          </ul>
        `,
            },
        },
        {
            name: "link-instagram-profil",
            label: {
                de: "Link Instagram-Profil",
                fr: "Lien profil Instagram",
                it: "Link profilo Instagram",
            },
            type: "url",
            tooltip: {
                de: `
          <ul>
            <li class="dash">Der Link zu deinem Instagram-Profil ist freiwillig</li>
            <li class="dash">Das Instagram-Profil beeinflusst nicht die Jurierung deines Projekts</li>
            <li class="dash">Wenn du gewinnst, werden wir dein Instagram-Profil in unserem Archiv verlinken</li>
          </ul>
        `,
                fr: `
          <ul>
            <li class="dash">Le lien vers le site web de ton portfolio est facultatif.</li>
            <li class="dash">Le portfolio n'influence pas l'évaluation de ton projet.</li>
            <li class="dash">Si tu gagnes, nous ajouterons un lien vers l'URL dans nos archives.</li>
          </ul>
        `,
                it: `
          <ul>
            <li class="dash">Il link al tuo sito web del portfolio è opzionale.</li>
            <li class="dash">Se vinci, inseriremo l'URL nel nostro archivio.</li>
            <li class="dash">Il portfolio non influenza il giudizio del tuo progetto.</li>
          </ul>
        `,
            },
        },
    ],
];
