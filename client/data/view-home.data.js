module.exports = {
  meta: {
    title: "",
    description: "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
    indexed: true
  },
  header: {
    image: "media/theme/quite_late.svg",
    content: '<div class="HeaderColors"></div>'
  },
  sections: [
    {
      type: "fullpage",
      content: [
        {
          type: "text",
          size: "l",
          content: "We have prolonged the deadline. You can submit your work until Monday the 19th of July 2021. We are looking forward to all the great projects!"
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
                "19.07.2021"
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
            src: "logos/logo-sgv.png",
            alt: "Logo of SGV",
            classes: "logo"
          }
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-sgd.png",
            alt: "Logo of SGD",
            classes: "logo"
          }
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-engelberger_druck.png",
            alt: "Logo of Weltformat",
            classes: "logo"
          }
        },
        {
          type: "image-box",
          image: {
            src: "logos/logo-wetalents.png",
            alt: "Logo of Ronorp",
            classes: "logo"
          }
        }
      ]
    }
  ],
  footer: true
};
