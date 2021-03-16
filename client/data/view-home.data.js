module.exports = {
  meta: {
    title: "",
    description: "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
    indexed: true
  },
  header: {
    image: "media/theme/20210309_Keyvisual_1920x960px_RZ_3.svg",
    content: '<div class="HeaderColors"></div>'
  },
  sections: [
    {
      type: "fullpage",
      content: [
        {
          type: "text",
          size: "l",
          content: "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland. An award, a travelling exhibition and this website provide a unique platform to celebrate their outstanding work and share it with the widest possible audience."
        }
      ]
    },
    {
      type: "columns",
      content: [
        {
          type: "text",
          title: "Award",
          content: "Anyone studying graphic design in Switzerland is welcome to apply. Thirty prizes will be awarded. The award ceremony will take place every two years as part of the Weltformat Graphic Design Festival."
        },
        {
          type: "overview",
          details: [
            {
              title: "Submission deadline",
              items: [
                "14.06.2021 (for papers graded between 01.01.2019 and 15.03.2021)"
              ]
            },
            {
              title: "Awards ceremony",
              items: [
                "09.10.2021, Lucerne, Neubad"
              ]
            },
            {
              title: "Exhibition",
              items: [
                "09.10.2021 – 17.10.2021, Lucerne, Fachklasse Grafik Luzern"
              ]
            },
            {
              title: "Afterparty",
              items: [
                "09.10.2021, Lucerne, Neubad"
              ]
            }
          ]
        }
      ]
    },
    {
      type: "rows",
      length: 8,
      content: [
        {
          type: "image-box",
          image: {
            src: "/sponsors/logo-sgv.png",
            alt: "Logo of SGV"
          }
        },
        {
          type: "image-box",
          image: {
            src: "/sponsors/logo-sgd.png",
            alt: "Logo of SGD"
          }
        },
        {
          type: "image-box",
          image: {
            src: "/sponsors/logo-weltformat.png",
            alt: "Logo of Weltformat"
          }
        },
        {
          type: "image-box",
          image: {
            src: "/sponsors/logo-ronorp.png",
            alt: "Logo of Ronorp"
          }
        }
      ]
    }
  ],
  footer: true
};
