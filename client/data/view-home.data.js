module.exports = {
  meta: {
    title: "",
    description:
      "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
    indexed: true,
  },
  header: {
    image: "theme/waiting_V2.svg",
    content: '<div class="HeaderColors"></div>',
  },
  sections: [
    {
      type: "fullpage",
      content: [
        {
          type: "text",
          size: "l",
          content:
            "WOW! Thanks to all the students who have submitted more than 300 projects during the last couple of months. We are looking forward to announcing the winners at our award night on October 9.",
        },
      ],
    },
    {
      type: "columns",
      content: [
        {
          type: "overview",
          title: "Award Event",
          details: [
            {
              title: "09.10.2021, 20:00",
              items: ["Award ceremony"],
              hasArrow: false,
            },
            {
              title: "09.10.2021, 22:00",
              items: ["Party"],
              hasArrow: false,
            },
            {
              title: "COVID-19 protection concept",
              items: [
                /*html*/ `
                  <a class="textButton" href="media/covid-19/jg_protection_concept_210929.pdf" target="_blank">
                    PDF
                  </a>
                `,
              ],
              hasArrow: false,
            },
          ],
        },
        {
          type: "overview",
          title: "Travelling exhibition",
          details: [
            {
              title: "9. – 17.10.2021",
              items: ["Weltformat Graphic Design Festival, Luzern"],
              hasArrow: false,
            },
            {
              title: "30.10. – 7.11.2021",
              items: ["F+F Schule für Kunst und Design Zürich"],
              hasArrow: false,
            },
            {
              title: "27.11. – 4.12.2021",
              items: [
                "EDHEA – Ecole de design et haute école d’art du Valais, Sierre",
              ],
              hasArrow: false,
            },
            {
              title: "13. – 17.12.2021",
              items: ["CFP Arts Genève"],
              hasArrow: false,
            },
          ],
        },
      ],
    },
    {
      type: "rows",
      length: 8,
      content: [
        {
          type: "image-box",
          image: {
            src: "logos/logo-sgv.png",
            alt: "Logo of SGV",
            classes: "logo",
            href: "https://sgv.ch",
          },
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-sgd.png",
            alt: "Logo of SGD",
            classes: "logo",
            href: "https://sgd.ch",
          },
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-engelberger_druck.png",
            alt: "Logo of Engelberg Druck",
            classes: "logo",
            href: "https://engelbergerdruck.ch",
          },
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-wetalents.png",
            alt: "Logo of We-Talents",
            classes: "logo",
            href: "https://wetalents.net/",
          },
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-grafikmagazin.png",
            alt: "Logo of Grafikmagazin",
            classes: "logo",
            href: "https://grafikmagazin.de/",
          },
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-extraset.png",
            alt: "Logo of Extraset",
            classes: "logo",
            href: "https://extraset.ch/",
          },
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-mockup_maison.png",
            alt: "Logo of Mockup.Maison",
            classes: "logo",
            href: "https://www.mockup.maison",
          },
        },
      ],
    },
  ],
  footer: true,
};
