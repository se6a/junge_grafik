module.exports = {
  meta: {
    title: "",
    description:
      "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
    indexed: true,
  },
  header: {
    image: "media/theme/waiting_V2.svg",
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
          type: "text",
          title: "Award",
          content:
            "Anyone studying graphic design in Switzerland is welcome to apply. Thirty prizes will be awarded. The award ceremony will take place every two years as part of the Weltformat Graphic Design Festival.",
        },
        {
          type: "overview",
          details: [
            {
              title: "Submission deadline",
              items: ["19.07.2021"],
            },
            {
              title: "Awards ceremony",
              items: ["09.10.2021, Lucerne, Neubad"],
            },
            {
              title: "Exhibition",
              items: [
                "09.10.2021 – 17.10.2021, Lucerne, Fachklasse Grafik Luzern",
              ],
            },
            {
              title: "Afterparty",
              items: ["09.10.2021, Lucerne, Neubad"],
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
      ],
    },
  ],
  footer: true,
};
