module.exports = [

  /*  General
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    [
      // Projekttitel
      {
        name: "title",
        label: {
          de: "Projekttitel"
        },
        type: "text-short",
        required: true
      },
      // Enstehungsjahr
      {
        name: "year",
        label: {
          de: "Entstehungsjahr"
        },
        input: "text-year",
        required: true
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
          { name: "book", de: "Buch" },
          { name: "poster", de: "Plakat" }
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
          { name: "book", de: "Buch" },
          { name: "poster", de: "Plakat" }
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
          { name: "book", de: "Buch" },
          { name: "poster", de: "Plakat" }
        ]
      }
    ],

  /*  Description
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    [
      {
        name: "description",
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

  /*  Education
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    [
      {
        name: "education-niveau",
        type: "text-short",
        label: {
          de: "Ausbildungsniveau"
        },
        required: true
      },
      {
        name: "education-year",
        type: "text-short",
        label: {
          de: "Ausbildungsjahr"
        },
        required: true
      },
      {
        name: "education-institution",
        type: "text-short",
        label: {
          de: "Name Ausbildungsinstitution/Büro"
        },
        required: true
      }
    ],

  /*  Designer
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    {
      name: "co-designer",
      type: "text-short",
      label: {
        de: "Weitere Gestalter"
      }
    },

  /*  Dozenten
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    {
      name: "teacher",
      type: "textShort",
      label: {
        de: "Dozenten"
      }
    },

  /*  Projektwebseite
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    {
      name: "website",
      type: "text-short",
      label: {
        de: "Link Projektwebseite"
      }
    },

  /*  File Upload
  ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
    {
      name: "files",
      type: "file",
      label: {
        de: "Upload Reprografien"
      },
      min: 1,
      multiple: true,
      required: true
    }
  ];
