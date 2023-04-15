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
                {
                    id: "682",
                    de: "Non-binär",
                    fr: "Non-binaire",
                    it: "Non binario",
                },
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
            type: "select-1",
            min: 1983,
            max: 2013,
            required: true,
            options: [
                { id: "2013", all: "2013" },
                { id: "2012", all: "2012" },
                { id: "2011", all: "2011" },
                { id: "2010", all: "2010" },
                { id: "2009", all: "2009" },
                { id: "2008", all: "2008" },
                { id: "2007", all: "2007" },
                { id: "2006", all: "2006" },
                { id: "2005", all: "2005" },
                { id: "2004", all: "2004" },
                { id: "2003", all: "2003" },
                { id: "2002", all: "2002" },
                { id: "2001", all: "2001" },
                { id: "2000", all: "2000" },
                { id: "1999", all: "1999" },
                { id: "1998", all: "1998" },
                { id: "1997", all: "1997" },
                { id: "1996", all: "1996" },
                { id: "1995", all: "1995" },
                { id: "1994", all: "1994" },
                { id: "1993", all: "1993" },
                { id: "1992", all: "1992" },
                { id: "1991", all: "1991" },
                { id: "1990", all: "1990" },
                { id: "1989", all: "1989" },
                { id: "1988", all: "1988" },
                { id: "1987", all: "1987" },
                { id: "1986", all: "1986" },
                { id: "1985", all: "1985" },
                { id: "1984", all: "1984" },
                { id: "1983", all: "1983" },
            ],
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
